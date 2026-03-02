import Browserbase from "@browserbasehq/sdk";
import { chromium } from "playwright-core";
import { createSupabaseServerClient } from "@/lib/supabase";
import { getAllSlugs } from "@/lib/profiles";

const CONNECTIONS_URL = "https://www.linkedin.com/mynetwork/invite-connect/connections/";

interface LinkedInConnection {
  name: string;
  headline: string | null;
  profileUrl: string | null;
}

export async function scrapeLinkedInConnections(
  contextId: string,
  slug: string,
  accessToken: string
): Promise<{ scraped: number; matched: number }> {
  const bb = new Browserbase({
    apiKey: process.env.BROWSERBASE_API_KEY!,
  });

  const session = await bb.sessions.create({
    projectId: process.env.BROWSERBASE_PROJECT_ID!,
    browserSettings: {
      context: { id: contextId, persist: true },
    },
  });

  const browser = await chromium.connectOverCDP(session.connectUrl!);
  const page = browser.contexts()[0]?.pages()[0];
  if (!page) {
    await browser.close();
    throw new Error("No page available in browser session");
  }

  try {
    await page.goto(CONNECTIONS_URL, { waitUntil: "networkidle" });
    await page.waitForTimeout(2000);

    // Scroll to load more connections
    let previousHeight = 0;
    for (let i = 0; i < 20; i++) {
      const currentHeight = await page.evaluate(() => document.body.scrollHeight);
      if (currentHeight === previousHeight) break;
      previousHeight = currentHeight;
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(1500);
    }

    const connections: LinkedInConnection[] = await page.evaluate(() => {
      const cards = document.querySelectorAll(".mn-connection-card");
      return Array.from(cards).map((card) => {
        const nameEl = card.querySelector(".mn-connection-card__name");
        const headlineEl = card.querySelector(".mn-connection-card__occupation");
        const linkEl = card.querySelector("a.mn-connection-card__link");
        return {
          name: nameEl?.textContent?.trim() ?? "",
          headline: headlineEl?.textContent?.trim() ?? null,
          profileUrl: linkEl?.getAttribute("href")
            ? `https://www.linkedin.com${linkEl.getAttribute("href")}`
            : null,
        };
      }).filter((c) => c.name.length > 0);
    });

    await browser.close();

    // Cross-reference against Agentapedia slugs
    const allSlugs = getAllSlugs();
    const slugSet = new Set(allSlugs);

    const supabase = createSupabaseServerClient(accessToken);

    // Clear old connections for this provider
    await supabase
      .from("social_connections")
      .delete()
      .eq("slug", slug)
      .eq("provider", "linkedin");

    let matched = 0;
    const rows = connections.map((conn) => {
      const nameSlug = conn.name
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
      const matchedSlug = slugSet.has(nameSlug) ? nameSlug : null;
      if (matchedSlug) matched++;
      return {
        slug,
        provider: "linkedin" as const,
        connection_name: conn.name,
        connection_headline: conn.headline,
        connection_profile_url: conn.profileUrl,
        connection_username: null,
        matched_slug: matchedSlug,
      };
    });

    // Insert in batches of 100
    for (let i = 0; i < rows.length; i += 100) {
      const batch = rows.slice(i, i + 100);
      await supabase.from("social_connections").insert(batch);
    }

    return { scraped: connections.length, matched };
  } catch (error) {
    await browser.close();
    throw error;
  }
}
