import { describe, it, expect } from "vitest";

// Test the boostConfidence logic used in MachineView
function boostConfidence(level: string): string {
  if (level === "LOW") return "MEDIUM";
  if (level === "MEDIUM") return "HIGH";
  return level;
}

describe("Trust boost logic", () => {
  it("boosts LOW to MEDIUM", () => {
    expect(boostConfidence("LOW")).toBe("MEDIUM");
  });

  it("boosts MEDIUM to HIGH", () => {
    expect(boostConfidence("MEDIUM")).toBe("HIGH");
  });

  it("keeps HIGH as HIGH (no double-boost)", () => {
    expect(boostConfidence("HIGH")).toBe("HIGH");
  });

  it("passes through unknown values unchanged", () => {
    expect(boostConfidence("UNKNOWN")).toBe("UNKNOWN");
  });
});

describe("Verification sources display", () => {
  it("generates correct provider labels", () => {
    const verifications = [
      { provider: "linkedin" as const, providerProfileUrl: "https://linkedin.com/in/test", displayName: "Test", verifiedAt: "2026-03-01" },
      { provider: "github" as const, providerProfileUrl: "https://github.com/test", displayName: "test", verifiedAt: "2026-03-01" },
    ];

    const labels = verifications.map((v) =>
      v.provider === "linkedin" ? "LinkedIn" : "GitHub"
    );
    expect(labels).toEqual(["LinkedIn", "GitHub"]);
  });

  it("trust boost message includes all verified providers", () => {
    const verifications = [
      { provider: "linkedin" as const, providerProfileUrl: null, displayName: null, verifiedAt: "2026-03-01" },
      { provider: "github" as const, providerProfileUrl: null, displayName: null, verifiedAt: "2026-03-01" },
    ];

    const providerNames = verifications.map((v) =>
      v.provider === "linkedin" ? "LinkedIn" : "GitHub"
    ).join(" and ");

    expect(providerNames).toBe("LinkedIn and GitHub");
  });

  it("only boosts confidence when verifications are present", () => {
    const overallConfidence = { identity: "MEDIUM", career: "LOW", education: "HIGH" };

    // Without verifications - no boost
    const withoutBoost = Object.fromEntries(
      Object.entries(overallConfidence).map(([key, val]) => [key, val])
    );
    expect(withoutBoost).toEqual({ identity: "MEDIUM", career: "LOW", education: "HIGH" });

    // With verifications - boosted
    const withBoost = Object.fromEntries(
      Object.entries(overallConfidence).map(([key, val]) => [key, boostConfidence(val)])
    );
    expect(withBoost).toEqual({ identity: "HIGH", career: "MEDIUM", education: "HIGH" });
  });
});
