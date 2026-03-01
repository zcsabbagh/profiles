import type { ProfileData, ProfileRecord } from "./types";

// This interface is intentionally close to what a DB-backed store will expose.
export interface ProfileRepository {
  getBySlug(slug: string): ProfileData | undefined;
  listSlugs(): string[];
  listProfiles(): ProfileData[];
}

export class InMemoryProfileRepository implements ProfileRepository {
  constructor(private readonly data: ProfileRecord) {}

  getBySlug(slug: string): ProfileData | undefined {
    return this.data[slug];
  }

  listSlugs(): string[] {
    return Object.keys(this.data);
  }

  listProfiles(): ProfileData[] {
    return Object.values(this.data);
  }
}
