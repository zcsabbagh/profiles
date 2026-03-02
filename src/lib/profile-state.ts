import { createSupabaseServerClient } from "@/lib/supabase";
import { getProfile } from "@/lib/profiles";

export interface RuntimeProfileState {
  claimedByUserId: string | null;
  claimedAt: string | null;
  isOwner: boolean;
  canClaim: boolean;
  userClaimedSlug: string | null;
  humanContent: string;
  verifierRequests: Array<{
    id: string;
    snippet: string;
    sectionLabel: string | null;
    verifierName: string;
    verifierEmail: string;
    status: string;
    createdAt: string;
  }>;
}

export async function getRuntimeProfileState(
  slug: string,
  userId: string | null,
  accessToken?: string | null
): Promise<RuntimeProfileState | null> {
  const baseProfile = getProfile(slug);
  if (!baseProfile) return null;

  const supabase = createSupabaseServerClient();
  const [{ data: claim }, { data: content }] = await Promise.all([
    supabase
      .from("profile_claims")
      .select("slug, clerk_user_id, claimed_at")
      .eq("slug", slug)
      .maybeSingle(),
    supabase
      .from("profile_contents")
      .select("slug, html_content")
      .eq("slug", slug)
      .maybeSingle(),
  ]);

  let userClaim: { slug: string } | null = null;
  let verifierRequests: Array<{
    id: string;
    snippet: string;
    section_label: string | null;
    verifier_name: string;
    verifier_email: string;
    status: string;
    created_at: string;
  }> = [];

  const effectiveUserId = userId && accessToken ? userId : null;

  if (effectiveUserId) {
    const authedSupabase = createSupabaseServerClient(accessToken);
    const [{ data: fetchedUserClaim }, { data: fetchedVerifierRequests }] = await Promise.all([
      authedSupabase
        .from("profile_claims")
        .select("slug")
        .eq("clerk_user_id", effectiveUserId)
        .maybeSingle(),
      authedSupabase
        .from("verifier_requests")
        .select(
          "id, snippet, section_label, verifier_name, verifier_email, status, created_at"
        )
        .eq("slug", slug)
        .order("created_at", { ascending: false })
        .limit(50),
    ]);

    userClaim = fetchedUserClaim;
    verifierRequests = fetchedVerifierRequests ?? [];
  }

  const claimedByUserId = claim?.clerk_user_id ?? null;
  const isOwner = Boolean(effectiveUserId && claim?.clerk_user_id === effectiveUserId);
  const userClaimedSlug = userClaim?.slug ?? null;
  const canClaim = Boolean(
    effectiveUserId &&
      (!claim || claim.clerk_user_id === effectiveUserId) &&
      (!userClaim || userClaim.slug === slug)
  );

  return {
    claimedByUserId,
    claimedAt: claim?.claimed_at ?? null,
    isOwner,
    canClaim,
    userClaimedSlug,
    humanContent: content?.html_content ?? baseProfile.humanContent,
    verifierRequests: verifierRequests.map((request) => ({
      id: request.id,
      snippet: request.snippet,
      sectionLabel: request.section_label,
      verifierName: request.verifier_name,
      verifierEmail: request.verifier_email,
      status: request.status,
      createdAt: request.created_at,
    })),
  };
}

export async function assertProfileExists(slug: string) {
  const profile = getProfile(slug);
  if (!profile) {
    throw new Error("PROFILE_NOT_FOUND");
  }
  return profile;
}
