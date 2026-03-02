import { describe, it, expect, vi } from "vitest";

// Mock auth module
vi.mock("@clerk/nextjs/server", () => ({
  auth: vi.fn(),
}));

vi.mock("@/lib/supabase", () => ({
  createSupabaseServerClient: vi.fn(),
}));

vi.mock("@/lib/profile-state", () => ({
  assertProfileExists: vi.fn(),
  getRuntimeProfileState: vi.fn(),
}));

vi.mock("@/lib/clerk-token", () => ({
  getSupabaseAccessToken: vi.fn(),
}));

describe("Claim API route", () => {
  it("rejects unauthenticated requests", async () => {
    const { auth } = await import("@clerk/nextjs/server");
    vi.mocked(auth).mockResolvedValue({
      userId: null,
      getToken: vi.fn(),
    } as any);

    const { POST } = await import("@/app/api/profiles/[slug]/claim/route");
    const response = await POST(new Request("http://localhost/api/profiles/test/claim", { method: "POST" }), {
      params: Promise.resolve({ slug: "test" }),
    });

    expect(response.status).toBe(401);
    const json = await response.json();
    expect(json.error).toBe("Unauthorized");
  });

  it("rejects when access token is missing", async () => {
    const { auth } = await import("@clerk/nextjs/server");
    vi.mocked(auth).mockResolvedValue({
      userId: "user_123",
      getToken: vi.fn(),
    } as any);

    const { getSupabaseAccessToken } = await import("@/lib/clerk-token");
    vi.mocked(getSupabaseAccessToken).mockResolvedValue(null);

    const { POST } = await import("@/app/api/profiles/[slug]/claim/route");
    const response = await POST(new Request("http://localhost/api/profiles/test/claim", { method: "POST" }), {
      params: Promise.resolve({ slug: "test" }),
    });

    expect(response.status).toBe(401);
  });

  it("returns 404 for non-existent profiles", async () => {
    const { auth } = await import("@clerk/nextjs/server");
    vi.mocked(auth).mockResolvedValue({
      userId: "user_123",
      getToken: vi.fn(),
    } as any);

    const { getSupabaseAccessToken } = await import("@/lib/clerk-token");
    vi.mocked(getSupabaseAccessToken).mockResolvedValue("token-123");

    const { assertProfileExists } = await import("@/lib/profile-state");
    vi.mocked(assertProfileExists).mockRejectedValue(new Error("PROFILE_NOT_FOUND"));

    const { POST } = await import("@/app/api/profiles/[slug]/claim/route");
    const response = await POST(new Request("http://localhost/api/profiles/unknown/claim", { method: "POST" }), {
      params: Promise.resolve({ slug: "unknown" }),
    });

    expect(response.status).toBe(404);
  });
});
