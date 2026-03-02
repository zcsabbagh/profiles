import { profileBatchA } from "./profiles/data/batch-a";
import { profileBatchB } from "./profiles/data/batch-b";
import { profileBatchC } from "./profiles/data/batch-c";
import { InMemoryProfileRepository, type ProfileRepository } from "./profiles/repository";
import type { ProfileData, ProfileRecord, Education, Reference, InfoboxLink, Infobox } from "./profiles/types";
import { createSupabaseServerClient } from "./supabase";

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

type DbProfileRow = {
  slug: string;
  name: string;
  role_title: string;
  org: string;
  education_json: Education[];
  human_content: string;
  structured_data_json: Record<string, any>;
  infobox_json: Infobox;
  references_json: Reference[];
};

function mapDbRowToProfile(row: DbProfileRow): ProfileData {
  return {
    slug: row.slug,
    name: row.name,
    currentRole: row.role_title,
    org: row.org,
    education: Array.isArray(row.education_json) ? row.education_json : [],
    humanContent: row.human_content,
    structuredData: row.structured_data_json ?? {},
    infobox: row.infobox_json,
    references: Array.isArray(row.references_json) ? row.references_json : [],
  };
}

export async function getProfileAsync(slug: string): Promise<ProfileData | undefined> {
  try {
    const supabase = createSupabaseServerClient();
    const { data, error } = await supabase
      .from("profiles")
      .select(
        "slug, name, role_title, org, education_json, human_content, structured_data_json, infobox_json, references_json"
      )
      .eq("slug", slug)
      .maybeSingle();
    if (!error && data) {
      return mapDbRowToProfile(data as DbProfileRow);
    }
  } catch {
    // Fall back to in-memory profile registry if Supabase lookup fails.
  }

  return getProfile(slug);
}

export async function getAllProfilesAsync(): Promise<ProfileData[]> {
  const fallbackProfiles = getAllProfiles();

  try {
    const supabase = createSupabaseServerClient();
    const { data, error } = await supabase
      .from("profiles")
      .select(
        "slug, name, role_title, org, education_json, human_content, structured_data_json, infobox_json, references_json"
      )
      .order("name", { ascending: true });

    if (error || !data) {
      return fallbackProfiles;
    }

    const dbProfiles = (data as DbProfileRow[]).map(mapDbRowToProfile);
    const merged = new Map<string, ProfileData>();
    for (const profile of fallbackProfiles) merged.set(profile.slug, profile);
    for (const profile of dbProfiles) merged.set(profile.slug, profile);
    return [...merged.values()].sort((a, b) => a.name.localeCompare(b.name));
  } catch {
    return fallbackProfiles;
  }
}
