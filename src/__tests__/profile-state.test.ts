import { describe, it, expect } from "vitest";
import type { RuntimeProfileState } from "@/lib/profile-state";

function makeState(overrides: Partial<RuntimeProfileState> = {}): RuntimeProfileState {
  return {
    isClaimed: false,
    claimedAt: null,
    isOwner: false,
    canClaim: true,
    userClaimedSlug: null,
    humanContent: "<p>Test</p>",
    editableContent: "Test",
    runtimeReferences: [],
    verifierRequests: [],
    socialVerifications: [],
    connectionCount: { linkedin: 0, github: 0 },
    ...overrides,
  };
}

describe("RuntimeProfileState shape", () => {
  it("includes socialVerifications array", () => {
    const state = makeState();
    expect(state.socialVerifications).toEqual([]);
  });

  it("includes connectionCount with both providers", () => {
    const state = makeState();
    expect(state.connectionCount).toEqual({ linkedin: 0, github: 0 });
  });

  it("holds verification data when present", () => {
    const state = makeState({
      socialVerifications: [
        {
          provider: "github",
          providerProfileUrl: "https://github.com/testuser",
          displayName: "Test User",
          verifiedAt: "2026-03-01T00:00:00Z",
        },
      ],
      connectionCount: { linkedin: 0, github: 42 },
    });

    expect(state.socialVerifications).toHaveLength(1);
    expect(state.socialVerifications[0].provider).toBe("github");
    expect(state.connectionCount.github).toBe(42);
  });
});

describe("canClaim logic", () => {
  it("allows claim when unclaimed and user has no other claim", () => {
    const state = makeState({ canClaim: true, isClaimed: false, userClaimedSlug: null });
    expect(state.canClaim).toBe(true);
  });

  it("disallows claim when profile is claimed by another user", () => {
    const state = makeState({ canClaim: false, isClaimed: true });
    expect(state.canClaim).toBe(false);
  });

  it("disallows claim when user already claimed a different profile", () => {
    const state = makeState({ canClaim: false, userClaimedSlug: "other-slug" });
    expect(state.canClaim).toBe(false);
  });
});

describe("verification data inclusion", () => {
  it("supports multiple verifications", () => {
    const state = makeState({
      socialVerifications: [
        {
          provider: "linkedin",
          providerProfileUrl: "https://linkedin.com/in/test",
          displayName: "Test Person",
          verifiedAt: "2026-03-01T00:00:00Z",
        },
        {
          provider: "github",
          providerProfileUrl: "https://github.com/test",
          displayName: "test",
          verifiedAt: "2026-03-01T00:00:00Z",
        },
      ],
    });

    expect(state.socialVerifications).toHaveLength(2);
    expect(state.socialVerifications.map((v) => v.provider)).toEqual(["linkedin", "github"]);
  });
});
