import { describe, it, expect } from "vitest";
import { getAllSlugs } from "@/lib/profiles";

describe("Cross-referencing connections against profile slugs", () => {
  it("getAllSlugs returns an array of strings", () => {
    const slugs = getAllSlugs();
    expect(Array.isArray(slugs)).toBe(true);
    expect(slugs.length).toBeGreaterThan(0);
    for (const slug of slugs) {
      expect(typeof slug).toBe("string");
    }
  });

  it("slug matching logic works for simple name-to-slug conversion", () => {
    const allSlugs = getAllSlugs();
    const slugSet = new Set(allSlugs);

    // Test the name-to-slug conversion used in linkedin-scraper
    const nameToSlug = (name: string) =>
      name
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");

    // This should not match any real profile (random name)
    expect(slugSet.has(nameToSlug("Xyzzy Foobar Quuxington III"))).toBe(false);

    // Verify slug format is consistent (may include underscores)
    for (const slug of allSlugs) {
      expect(slug).toMatch(/^[a-z0-9_-]+$/);
    }
  });

  it("GitHub username matching is exact (case-sensitive slug lookup)", () => {
    const allSlugs = getAllSlugs();
    const slugSet = new Set(allSlugs);

    // GitHub usernames are matched directly against slugs
    const testUsername = "nonexistent-user-12345";
    expect(slugSet.has(testUsername)).toBe(false);
  });
});
