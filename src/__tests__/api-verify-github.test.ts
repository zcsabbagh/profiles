import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@clerk/nextjs/server", () => ({
  auth: vi.fn(),
  clerkClient: vi.fn(),
}));

vi.mock("@/lib/supabase", () => ({
  createSupabaseServerClient: vi.fn(),
}));

vi.mock("@/lib/profile-state", () => ({
  assertProfileExists: vi.fn(),
}));

vi.mock("@/lib/clerk-token", () => ({
  getSupabaseAccessToken: vi.fn(),
}));

vi.mock("@/lib/browserbase/github-connections", () => ({
  fetchGitHubConnections: vi.fn().mockResolvedValue({ scraped: 0, matched: 0 }),
}));

const mockSupabase = {
  from: vi.fn().mockReturnThis(),
  select: vi.fn().mockReturnThis(),
  eq: vi.fn().mockReturnThis(),
  maybeSingle: vi.fn(),
  upsert: vi.fn(),
};

beforeEach(() => {
  vi.clearAllMocks();
  mockSupabase.from.mockReturnThis();
  mockSupabase.select.mockReturnThis();
  mockSupabase.eq.mockReturnThis();
});

describe("GitHub verification API", () => {
  it("rejects unauthenticated requests", async () => {
    const { auth } = await import("@clerk/nextjs/server");
    vi.mocked(auth).mockResolvedValue({
      userId: null,
      getToken: vi.fn(),
    } as any);

    const { POST } = await import("@/app/api/profiles/[slug]/verify/github/route");
    const response = await POST(
      new Request("http://localhost/api/profiles/test/verify/github", { method: "POST" }),
      { params: Promise.resolve({ slug: "test" }) }
    );

    expect(response.status).toBe(401);
  });

  it("rejects when user does not own the profile", async () => {
    const { auth } = await import("@clerk/nextjs/server");
    vi.mocked(auth).mockResolvedValue({
      userId: "user_123",
      getToken: vi.fn(),
    } as any);

    const { getSupabaseAccessToken } = await import("@/lib/clerk-token");
    vi.mocked(getSupabaseAccessToken).mockResolvedValue("token-123");

    const { assertProfileExists } = await import("@/lib/profile-state");
    vi.mocked(assertProfileExists).mockResolvedValue({} as any);

    const { createSupabaseServerClient } = await import("@/lib/supabase");
    mockSupabase.maybeSingle.mockResolvedValue({ data: null });
    vi.mocked(createSupabaseServerClient).mockReturnValue(mockSupabase as any);

    const { POST } = await import("@/app/api/profiles/[slug]/verify/github/route");
    const response = await POST(
      new Request("http://localhost/api/profiles/test/verify/github", { method: "POST" }),
      { params: Promise.resolve({ slug: "test" }) }
    );

    expect(response.status).toBe(403);
  });

  it("returns 400 when no GitHub token is available", async () => {
    const { auth, clerkClient } = await import("@clerk/nextjs/server");
    vi.mocked(auth).mockResolvedValue({
      userId: "user_123",
      getToken: vi.fn(),
    } as any);

    const { getSupabaseAccessToken } = await import("@/lib/clerk-token");
    vi.mocked(getSupabaseAccessToken).mockResolvedValue("token-123");

    const { assertProfileExists } = await import("@/lib/profile-state");
    vi.mocked(assertProfileExists).mockResolvedValue({} as any);

    const { createSupabaseServerClient } = await import("@/lib/supabase");
    mockSupabase.maybeSingle.mockResolvedValue({ data: { slug: "test", clerk_user_id: "user_123" } });
    vi.mocked(createSupabaseServerClient).mockReturnValue(mockSupabase as any);

    vi.mocked(clerkClient).mockResolvedValue({
      users: {
        getUserOauthAccessToken: vi.fn().mockResolvedValue({ data: [] }),
      },
    } as any);

    const { POST } = await import("@/app/api/profiles/[slug]/verify/github/route");
    const response = await POST(
      new Request("http://localhost/api/profiles/test/verify/github", { method: "POST" }),
      { params: Promise.resolve({ slug: "test" }) }
    );

    expect(response.status).toBe(400);
    const json = await response.json();
    expect(json.error).toContain("No GitHub account connected");
  });
});
