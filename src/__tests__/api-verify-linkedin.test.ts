import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@clerk/nextjs/server", () => ({
  auth: vi.fn(),
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

vi.mock("@browserbasehq/sdk", () => {
  const MockBrowserbase = vi.fn().mockImplementation(function () {
    return {
      sessions: {
        create: vi.fn().mockResolvedValue({
          id: "session-123",
          connectUrl: "https://connect.browserbase.com/session-123",
        }),
        retrieve: vi.fn(),
      },
      contexts: {
        create: vi.fn().mockResolvedValue({ id: "context-456" }),
      },
    };
  });
  return { default: MockBrowserbase };
});

vi.mock("playwright-core", () => ({
  chromium: {
    connectOverCDP: vi.fn(),
  },
}));

vi.mock("@/lib/browserbase/linkedin-scraper", () => ({
  scrapeLinkedInConnections: vi.fn().mockResolvedValue({ scraped: 0, matched: 0 }),
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

describe("LinkedIn verification API", () => {
  it("rejects unauthenticated POST requests", async () => {
    const { auth } = await import("@clerk/nextjs/server");
    vi.mocked(auth).mockResolvedValue({
      userId: null,
      getToken: vi.fn(),
    } as any);

    const { POST } = await import("@/app/api/profiles/[slug]/verify/linkedin/route");
    const response = await POST(
      new Request("http://localhost/api/profiles/test/verify/linkedin", { method: "POST" }),
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

    const { POST } = await import("@/app/api/profiles/[slug]/verify/linkedin/route");
    const response = await POST(
      new Request("http://localhost/api/profiles/test/verify/linkedin", { method: "POST" }),
      { params: Promise.resolve({ slug: "test" }) }
    );

    expect(response.status).toBe(403);
  });

  it("creates Browserbase session for profile owner", async () => {
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
    // First call for claim check, second for existing verification check
    mockSupabase.maybeSingle
      .mockResolvedValueOnce({ data: { slug: "test", clerk_user_id: "user_123" } })
      .mockResolvedValueOnce({ data: null });
    vi.mocked(createSupabaseServerClient).mockReturnValue(mockSupabase as any);

    const { POST } = await import("@/app/api/profiles/[slug]/verify/linkedin/route");
    const response = await POST(
      new Request("http://localhost/api/profiles/test/verify/linkedin", { method: "POST" }),
      { params: Promise.resolve({ slug: "test" }) }
    );

    expect(response.status).toBe(200);
    const json = await response.json();
    expect(json.sessionId).toBe("session-123");
    expect(json.connectUrl).toBeDefined();
    expect(json.contextId).toBeDefined();
  });

  it("rejects GET without sessionId", async () => {
    const { auth } = await import("@clerk/nextjs/server");
    vi.mocked(auth).mockResolvedValue({
      userId: "user_123",
      getToken: vi.fn(),
    } as any);

    const { getSupabaseAccessToken } = await import("@/lib/clerk-token");
    vi.mocked(getSupabaseAccessToken).mockResolvedValue("token-123");

    const { GET } = await import("@/app/api/profiles/[slug]/verify/linkedin/route");
    const response = await GET(
      new Request("http://localhost/api/profiles/test/verify/linkedin"),
      { params: Promise.resolve({ slug: "test" }) }
    );

    expect(response.status).toBe(400);
  });
});
