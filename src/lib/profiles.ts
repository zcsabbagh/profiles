import { profileBatchA } from "./profiles/data/batch-a";
import { profileBatchB } from "./profiles/data/batch-b";
import { profileBatchC } from "./profiles/data/batch-c";
import { InMemoryProfileRepository, type ProfileRepository } from "./profiles/repository";
import type { ProfileData, ProfileRecord, Education, Reference, InfoboxLink, Infobox } from "./profiles/types";

export type { ProfileData, ProfileRecord, Education, Reference, InfoboxLink, Infobox };

export const profiles: ProfileRecord = {
  ...profileBatchA,
  ...profileBatchB,
  ...profileBatchC,
};

let repository: ProfileRepository = new InMemoryProfileRepository(profiles);

// Allows swapping in a DB-backed repository without changing callers.
export function configureProfileRepository(nextRepository: ProfileRepository): void {
  repository = nextRepository;
}

export function getProfile(slug: string): ProfileData | undefined {
  return repository.getBySlug(slug);
}

export function getAllSlugs(): string[] {
  return repository.listSlugs();
}

export function getAllProfiles(): ProfileData[] {
  return repository.listProfiles();
}
