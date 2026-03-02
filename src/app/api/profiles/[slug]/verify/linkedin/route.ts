import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Browserbase from "@browserbasehq/sdk";
import { chromium } from "playwright-core";
import { assertProfileExists } from "@/lib/profile-state";
import { createSupabaseServerClient } from "@/lib/supabase";
import { getSupabaseAccessToken } from "@/lib/clerk-token";
import { scrapeLinkedInConnections } from "@/lib/browserbase/linkedin-scraper";

export async function POST(
  _request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { userId, getToken } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const accessToken = await getSupabaseAccessToken(getToken);
  if (!accessToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await context.params;

  try {
    await assertProfileExists(slug);
  } catch {
    return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  }

  // Verify the user owns this profile
  const supabase = createSupabaseServerClient(accessToken);
  const { data: claim } = await supabase
    .from("profile_claims")
    .select("slug, clerk_user_id")
    .eq("slug", slug)
    .eq("clerk_user_id", userId)
    .maybeSingle();

  if (!claim) {
    return NextResponse.json({ error: "You must claim this profile first" }, { status: 403 });
  }

  try {
    const bb = new Browserbase({
      apiKey: process.env.BROWSERBASE_API_KEY!,
    });

    // Check for existing context to reuse
    const { data: existing } = await supabase
      .from("social_verifications")
      .select("browserbase_context_id")
      .eq("slug", slug)
      .eq("provider", "linkedin")
      .maybeSingle();

    let contextId = existing?.browserbase_context_id;

    if (!contextId) {
      const bbContext = await bb.contexts.create({
        projectId: process.env.BROWSERBASE_PROJECT_ID!,
      });
      contextId = bbContext.id;
    }

    const session = await bb.sessions.create({
      projectId: process.env.BROWSERBASE_PROJECT_ID!,
      browserSettings: {
        context: { id: contextId, persist: true },
      },
    });

    return NextResponse.json({
      sessionId: session.id,
      connectUrl: session.connectUrl,
      contextId,
    });
  } catch (error) {
    console.error("LinkedIn verification session creation failed:", error);
    return NextResponse.json({ error: "Failed to create browser session" }, { status: 500 });
  }
}

export async function GET(
  request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { userId, getToken } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const accessToken = await getSupabaseAccessToken(getToken);
  if (!accessToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await context.params;
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get("sessionId");
  const contextId = searchParams.get("contextId");

  if (!sessionId || !contextId) {
    return NextResponse.json({ error: "Missing sessionId or contextId" }, { status: 400 });
  }

  try {
    const bb = new Browserbase({
      apiKey: process.env.BROWSERBASE_API_KEY!,
    });

    // Connect to the session and check LinkedIn auth status
    const session = await bb.sessions.retrieve(sessionId);
    if (!session.connectUrl) {
      return NextResponse.json({ status: "pending", message: "Session not ready" });
    }

    const browser = await chromium.connectOverCDP(session.connectUrl);
    const page = browser.contexts()[0]?.pages()[0];

    if (!page) {
      await browser.close();
      return NextResponse.json({ status: "pending", message: "No page available" });
    }

    // Navigate to LinkedIn to check if logged in
    await page.goto("https://www.linkedin.com/feed/", { waitUntil: "networkidle", timeout: 15000 });

    const currentUrl = page.url();
    const isLoggedIn = !currentUrl.includes("/login") && !currentUrl.includes("/authwall");

    if (!isLoggedIn) {
      await browser.close();
      return NextResponse.json({ status: "pending", message: "User has not logged into LinkedIn yet" });
    }

    // Extract profile info
    await page.goto("https://www.linkedin.com/in/me/", { waitUntil: "networkidle", timeout: 15000 });

    const profileData = await page.evaluate(() => {
      const nameEl = document.querySelector(".text-heading-xlarge");
      const headlineEl = document.querySelector(".text-body-medium");
      return {
        name: nameEl?.textContent?.trim() ?? null,
        headline: headlineEl?.textContent?.trim() ?? null,
        profileUrl: window.location.href.replace(/\/me\/?$/, ""),
      };
    });

    await browser.close();

    // Extract LinkedIn profile ID from URL
    const profileUrlMatch = profileData.profileUrl.match(/linkedin\.com\/in\/([^/]+)/);
    const providerUserId = profileUrlMatch?.[1] ?? null;

    // Save verification
    const supabase = createSupabaseServerClient(accessToken);
    const { error } = await supabase.from("social_verifications").upsert(
      {
        slug,
        provider: "linkedin",
        provider_user_id: providerUserId,
        provider_profile_url: profileData.profileUrl,
        display_name: profileData.name,
        verified_at: new Date().toISOString(),
        browserbase_context_id: contextId,
        raw_metadata: { headline: profileData.headline },
      },
      { onConflict: "slug,provider" }
    );

    if (error) {
      console.error("Failed to save LinkedIn verification:", error);
      return NextResponse.json({ error: "Failed to save verification" }, { status: 500 });
    }

    // Trigger connection scrape in background (fire and forget)
    scrapeLinkedInConnections(contextId, slug, accessToken).catch((err) => {
      console.error("LinkedIn connection scrape failed:", err);
    });

    return NextResponse.json({
      status: "verified",
      provider: "linkedin",
      displayName: profileData.name,
      profileUrl: profileData.profileUrl,
    });
  } catch (error) {
    console.error("LinkedIn verification check failed:", error);
    return NextResponse.json({ error: "Failed to check verification status" }, { status: 500 });
  }
}
