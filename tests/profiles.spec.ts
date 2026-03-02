import { test, expect } from "@playwright/test";

// ─── Landing Page ───────────────────────────────────────────────────────────

test.describe("Landing page", () => {
  test("renders title, description, and profile list", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toHaveText("Agentapedia");
    await expect(page.getByText("From public sources — last updated")).toBeVisible();
    await expect(page.getByText("human-readable")).toBeVisible();

    // At least one profile link exists
    const profileLinks = page.locator("main a");
    await expect(profileLinks.first()).toBeVisible();
    const count = await profileLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test("profile links include slug text", async ({ page }) => {
    await page.goto("/");
    // Each profile row shows a /slug monospace label
    const slugLabels = page.locator("main a .font-mono");
    const first = await slugLabels.first().textContent();
    expect(first).toMatch(/^\/\w+/);
  });

  test("profile link navigates to profile page", async ({ page }) => {
    await page.goto("/");
    const firstLink = page.locator("main a").first();
    const href = await firstLink.getAttribute("href");
    await firstLink.click();
    await page.waitForURL(`**${href}`);
    await expect(page.locator("h1")).toBeVisible();
  });

  test("footer is visible", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.locator("text=All information sourced from publicly available data")
    ).toBeVisible();
  });
});

// ─── Search Dialog ──────────────────────────────────────────────────────────

test.describe("Search dialog", () => {
  test("opens with Cmd+K and closes with Escape", async ({ page }) => {
    await page.goto("/");
    // Dialog should not be visible initially
    await expect(page.locator("input[placeholder='Search people...']")).not.toBeVisible();

    // Open with Cmd+K
    await page.keyboard.press("Meta+k");
    await expect(page.locator("input[placeholder='Search people...']")).toBeVisible();

    // Close with Escape
    await page.keyboard.press("Escape");
    await expect(page.locator("input[placeholder='Search people...']")).not.toBeVisible();
  });

  test("filters profiles by name", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Meta+k");
    const input = page.locator("input[placeholder='Search people...']");
    await input.fill("Zane");

    // Should show matching result
    await expect(page.locator("text=Zane Christian Sabbagh").last()).toBeVisible();
  });

  test("shows 'No results' for non-matching query", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Meta+k");
    const input = page.locator("input[placeholder='Search people...']");
    await input.fill("xyznonexistent12345");
    await expect(page.locator("text=No results")).toBeVisible();
  });

  test("navigates to profile on Enter", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Meta+k");
    const input = page.locator("input[placeholder='Search people...']");
    await input.fill("Zane");
    await page.keyboard.press("Enter");
    await page.waitForURL("**/zane_sabbagh");
    await expect(page.locator("h1")).toHaveText("Zane Christian Sabbagh");
  });

  test("Search button opens dialog", async ({ page }) => {
    await page.goto("/");
    await page.locator("button:has-text('Search')").click();
    await expect(page.locator("input[placeholder='Search people...']")).toBeVisible();
  });
});

// ─── Profile Page — Human View ──────────────────────────────────────────────

test.describe("Profile page — Human view", () => {
  test("renders profile name and subtitle", async ({ page }) => {
    await page.goto("/zane_sabbagh");
    await expect(page.locator("h1")).toHaveText("Zane Christian Sabbagh");
    await expect(page.locator("text=From public sources")).toBeVisible();
  });

  test("back link navigates to landing page", async ({ page }) => {
    await page.goto("/zane_sabbagh");
    await page.locator("text=← Agentapedia").click();
    await page.waitForURL("/");
    await expect(page.locator("h1")).toHaveText("Agentapedia");
  });

  test("infobox displays key profile data", async ({ page }) => {
    await page.goto("/zane_sabbagh");
    // Infobox heading
    await expect(page.locator("text=Founder").first()).toBeVisible();
    await expect(page.locator("text=Unravel").first()).toBeVisible();
    await expect(page.locator("text=Stanford University").first()).toBeVisible();
  });

  test("article sections are present", async ({ page }) => {
    await page.goto("/zane_sabbagh");
    await expect(page.locator("h2:has-text('Early life and education')")).toBeVisible();
    await expect(page.locator("h2:has-text('Career')")).toBeVisible();
    await expect(page.locator("h2:has-text('References')")).toBeVisible();
  });

  test("references section has links", async ({ page }) => {
    await page.goto("/zane_sabbagh");
    const refs = page.locator(".references-list a");
    const count = await refs.count();
    expect(count).toBeGreaterThan(0);
    // Each reference link should have an href
    for (let i = 0; i < Math.min(count, 3); i++) {
      const href = await refs.nth(i).getAttribute("href");
      expect(href).toBeTruthy();
    }
  });

  test("HUMAN view is active by default", async ({ page }) => {
    await page.goto("/zane_sabbagh");
    // The HUMAN button should be active (has bg-foreground class)
    const humanBtn = page.locator("button:has-text('HUMAN')");
    await expect(humanBtn).toBeVisible();
    // Article content should be visible, not machine content
    await expect(page.locator("h2:has-text('Early life')")).toBeVisible();
  });
});

// ─── Profile Page — View Toggle ─────────────────────────────────────────────

test.describe("View toggle", () => {
  test("switches between HUMAN and MACHINE views", async ({ page }) => {
    await page.goto("/zane_sabbagh");

    // Start with human view visible
    await expect(page.locator("h2:has-text('Early life')")).toBeVisible();

    // Click MACHINE
    await page.locator("button:has-text('MACHINE')").click();
    await expect(page.locator("text=STRUCTURED DATA")).toBeVisible();
    await expect(page.locator("h2:has-text('Early life')")).not.toBeVisible();

    // Click HUMAN
    await page.locator("button:has-text('HUMAN')").click();
    await expect(page.locator("h2:has-text('Early life')")).toBeVisible();
  });

  test("sticky top bar stays visible on scroll", async ({ page }) => {
    await page.goto("/zane_sabbagh");
    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 800));
    await page.waitForTimeout(200);
    // Toggle buttons should still be visible (sticky)
    await expect(page.locator("button:has-text('HUMAN')")).toBeInViewport();
    await expect(page.locator("button:has-text('MACHINE')")).toBeInViewport();
  });
});

// ─── Profile Page — Machine View ────────────────────────────────────────────

test.describe("Machine view", () => {
  test("displays structured data sections", async ({ page }) => {
    await page.goto("/zane_sabbagh");
    await page.locator("button:has-text('MACHINE')").click();

    await expect(page.getByText("IDENTITY", { exact: true })).toBeVisible();
    await expect(page.getByText("EDUCATION", { exact: true })).toBeVisible();
    await expect(page.getByText("CAREER", { exact: true })).toBeVisible();
    await expect(page.getByText("SKILLS & CAPABILITIES")).toBeVisible();
    await expect(page.getByText("DATA QUALITY ASSESSMENT")).toBeVisible();
    await expect(page.getByText("RAW JSON-LD")).toBeVisible();
  });

  test("shows verification badges", async ({ page }) => {
    await page.goto("/zane_sabbagh");
    await page.locator("button:has-text('MACHINE')").click();

    // Should have at least one verification badge
    const badges = page.locator("text=/\\[(public|self-reported|inferred|unverified)\\]/");
    const count = await badges.count();
    expect(count).toBeGreaterThan(0);
  });

  test("shows confidence percentages", async ({ page }) => {
    await page.goto("/zane_sabbagh");
    await page.locator("button:has-text('MACHINE')").click();

    // Should have confidence indicators
    const conf = page.locator("text=/\\d+% conf/");
    const count = await conf.count();
    expect(count).toBeGreaterThan(0);
  });

  test("shows gap markers", async ({ page }) => {
    await page.goto("/zane_sabbagh");
    await page.locator("button:has-text('MACHINE')").click();

    const gaps = page.locator(".gap-marker");
    const count = await gaps.count();
    expect(count).toBeGreaterThan(0);
  });

  test("raw JSON-LD is valid JSON", async ({ page }) => {
    await page.goto("/zane_sabbagh");
    await page.locator("button:has-text('MACHINE')").click();

    const jsonBlock = page.locator("pre");
    const text = await jsonBlock.textContent();
    expect(text).toBeTruthy();
    const parsed = JSON.parse(text!);
    expect(parsed["@context"]).toBe("https://schema.org");
    expect(parsed["@type"]).toBe("Person");
    expect(parsed.name).toBe("Zane Christian Sabbagh");
  });
});

// ─── JSON-LD in Page Head ───────────────────────────────────────────────────

test.describe("JSON-LD in page head", () => {
  test("embeds valid JSON-LD script tag", async ({ page }) => {
    await page.goto("/zane_sabbagh");
    const jsonLd = await page.evaluate(() => {
      const script = document.querySelector('script[type="application/ld+json"]');
      return script ? script.textContent : null;
    });
    expect(jsonLd).toBeTruthy();
    const parsed = JSON.parse(jsonLd!);
    expect(parsed["@context"]).toBe("https://schema.org");
    expect(parsed["@type"]).toBe("Person");
  });
});

// ─── Machine View Query Param ───────────────────────────────────────────────

test.describe("Machine view via query param", () => {
  test("?view=machine renders machine view directly", async ({ page }) => {
    await page.goto("/zane_sabbagh?view=machine");
    await expect(page.locator("text=STRUCTURED DATA")).toBeVisible();
    // Should NOT show the toggle bar (goes directly to machine view)
    await expect(page.locator("button:has-text('HUMAN')")).not.toBeVisible();
  });
});

// ─── 404 Handling ───────────────────────────────────────────────────────────

test.describe("404 handling", () => {
  test("non-existent profile returns 404", async ({ page }) => {
    const response = await page.goto("/nonexistent_profile_xyz");
    expect(response?.status()).toBe(404);
  });
});

// ─── Mobile Responsiveness ──────────────────────────────────────────────────

test.describe("Mobile responsiveness", () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test("landing page content fits viewport width", async ({ page }) => {
    await page.goto("/");
    const viewportWidth = page.viewportSize()!.width;
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth);
  });

  test("profile page — infobox stacks full width on mobile", async ({ page }) => {
    await page.goto("/zane_sabbagh");
    // The infobox container has bg-[#f5f3ee] and border
    const infobox = page.locator(".bg-\\[\\#f5f3ee\\]").first();
    const box = await infobox.boundingBox();
    // On mobile (393px Pixel 5), infobox should be close to full width, not 288px
    expect(box!.width).toBeGreaterThan(300);
  });

  test("profile page — no horizontal overflow", async ({ page }) => {
    await page.goto("/zane_sabbagh");
    const viewportWidth = page.viewportSize()!.width;
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth);
  });

  test("machine view — no horizontal overflow", async ({ page }) => {
    await page.goto("/zane_sabbagh");
    await page.locator("button:has-text('MACHINE')").click();
    await page.waitForTimeout(200);
    const viewportWidth = page.viewportSize()!.width;
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth);
  });

  test("toggle bar is usable on mobile", async ({ page }) => {
    await page.goto("/zane_sabbagh");
    const humanBtn = page.locator("button:has-text('HUMAN')");
    const machineBtn = page.locator("button:has-text('MACHINE')");
    await expect(humanBtn).toBeVisible();
    await expect(machineBtn).toBeVisible();

    // Both buttons should be tappable (not overlapping off-screen)
    const viewportWidth = page.viewportSize()!.width;
    const humanBox = await humanBtn.boundingBox();
    const machineBox = await machineBtn.boundingBox();
    expect(humanBox!.x).toBeGreaterThanOrEqual(0);
    expect(machineBox!.x + machineBox!.width).toBeLessThanOrEqual(viewportWidth);
  });
});

// ─── API Routes ─────────────────────────────────────────────────────────────

test.describe("API routes", () => {
  test("/api/profiles/[slug]/state returns runtime state", async ({ request }) => {
    const res = await request.get("/api/profiles/zane_sabbagh/state");
    expect(res.status()).toBe(200);
    const json = await res.json();
    expect(json).toHaveProperty("canClaim");
    expect(json).toHaveProperty("humanContent");
  });

  test("/api/profiles/[slug]/machine returns structured data", async ({ request }) => {
    const res = await request.get("/api/profiles/zane_sabbagh/machine");
    expect(res.status()).toBe(200);
    const json = await res.json();
    expect(json).toHaveProperty("machineContent");
    expect(json.machineContent["@context"]).toBe("https://schema.org");
    expect(json.machineContent["@type"]).toBe("Person");
  });

  test("/api/profiles/nonexistent/state returns 404", async ({ request }) => {
    const res = await request.get("/api/profiles/nonexistent_xyz/state");
    expect(res.status()).toBe(404);
  });

  test("/llms.txt returns text content", async ({ request }) => {
    const res = await request.get("/llms.txt");
    expect(res.status()).toBe(200);
    const text = await res.text();
    expect(text.length).toBeGreaterThan(0);
  });
});

// ─── Desktop Layout ─────────────────────────────────────────────────────────

test.describe("Desktop layout", () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  test("landing page — no horizontal overflow at 1440px", async ({ page }) => {
    await page.goto("/");
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(1440);
  });

  test("profile page — infobox floats right on desktop", async ({ page }) => {
    await page.goto("/zane_sabbagh");
    const infobox = page.locator(".bg-\\[\\#f5f3ee\\]").first();
    const articleText = page.locator("h2:has-text('Early life')");
    const infoboxBox = await infobox.boundingBox();
    const articleBox = await articleText.boundingBox();
    // Infobox should be to the right of the article text
    expect(infoboxBox!.x).toBeGreaterThan(articleBox!.x);
    // Infobox should be ~288px wide (w-72), not full width
    expect(infoboxBox!.width).toBeLessThan(350);
  });

  test("profile page — no horizontal overflow at 1440px", async ({ page }) => {
    await page.goto("/zane_sabbagh");
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(1440);
  });

  test("machine view — no horizontal overflow at 1440px", async ({ page }) => {
    await page.goto("/zane_sabbagh");
    await page.locator("button:has-text('MACHINE')").click();
    await page.waitForTimeout(200);
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(1440);
  });

  test("content is centered with max-width", async ({ page }) => {
    await page.goto("/zane_sabbagh");
    // The max-w-4xl container should be centered, not spanning full 1440px
    const container = page.locator("h1").locator("..");
    const box = await container.boundingBox();
    // max-w-4xl = 896px, container should be narrower than viewport
    expect(box!.width).toBeLessThan(1440);
    // Should have left margin (centered)
    expect(box!.x).toBeGreaterThan(100);
  });
});

// ─── Tablet Layout ──────────────────────────────────────────────────────────

test.describe("Tablet layout (768px)", () => {
  test.use({ viewport: { width: 768, height: 1024 } });

  test("infobox floats right at tablet width", async ({ page }) => {
    await page.goto("/zane_sabbagh");
    const infobox = page.locator(".bg-\\[\\#f5f3ee\\]").first();
    const infoboxBox = await infobox.boundingBox();
    // At 768px (above sm:640px breakpoint), infobox should float right (~288px)
    expect(infoboxBox!.width).toBeLessThan(350);
  });

  test("no horizontal overflow at 768px", async ({ page }) => {
    await page.goto("/zane_sabbagh");
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(768);
  });

  test("machine view — no horizontal overflow at 768px", async ({ page }) => {
    await page.goto("/zane_sabbagh");
    await page.locator("button:has-text('MACHINE')").click();
    await page.waitForTimeout(200);
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(768);
  });
});

// ─── SEO & Metadata ─────────────────────────────────────────────────────────

test.describe("SEO and metadata", () => {
  test("profile page has correct title", async ({ page }) => {
    await page.goto("/zane_sabbagh");
    await expect(page).toHaveTitle("Zane Christian Sabbagh — Agentapedia");
  });

  test("profile page has canonical URL", async ({ page }) => {
    await page.goto("/zane_sabbagh");
    const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
    expect(canonical).toContain("/zane_sabbagh");
  });

  test("profile page has meta description", async ({ page }) => {
    await page.goto("/zane_sabbagh");
    const desc = await page.locator('meta[name="description"]').getAttribute("content");
    expect(desc).toContain("Zane Christian Sabbagh");
  });
});
