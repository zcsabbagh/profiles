import { createSupabaseServerClient } from "@/lib/supabase";
import { getProfile } from "@/lib/profiles";
import { renderMarkdownToHtml, extractReferencesFromMarkdown } from "@/lib/markdown-shared";
import { toEditableMarkdown } from "@/lib/markdown-server";

export interface RuntimeProfileState {
  claimedByUserId: string | null;
  claimedAt: string | null;
  isOwner: boolean;
  canClaim: boolean;
  userClaimedSlug: string | null;
  humanContent: string;
  editableContent: string;
  runtimeReferences: Array<{
    title: string;
    url: string;
  }>;
  verifierRequests: Array<{
    id: string;
    snippet: string;
    sectionLabel: string | null;
    verifierName: string;
    verifierEmail: string;
    status: string;
    createdAt: string;
  }>;
  socialVerifications: Array<{
    provider: "linkedin" | "github";
    providerProfileUrl: string | null;
    displayName: string | null;
    verifiedAt: string;
  }>;
  connectionCount: { linkedin: number; github: number };
}

export async function getRuntimeProfileState(
  slug: string,
  userId: string | null,
  accessToken?: string | null
): Promise<RuntimeProfileState | null> {
  const baseProfile = getProfile(slug);
  if (!baseProfile) return null;

  const supabase = createSupabaseServerClient();
  const [{ data: claim }, { data: content }, { data: verifications }] = await Promise.all([
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
    supabase
      .from("social_verifications")
      .select("provider, provider_profile_url, display_name, verified_at")
      .eq("slug", slug),
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
  let connectionCount = { linkedin: 0, github: 0 };

  const effectiveUserId = userId && accessToken ? userId : null;

  if (effectiveUserId) {
    const authedSupabase = createSupabaseServerClient(accessToken);
    const [
      { data: fetchedUserClaim },
      { data: fetchedVerifierRequests },
      { count: linkedinCount },
      { count: githubCount },
    ] = await Promise.all([
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
      authedSupabase
        .from("social_connections")
        .select("*", { count: "exact", head: true })
        .eq("slug", slug)
        .eq("provider", "linkedin"),
      authedSupabase
        .from("social_connections")
        .select("*", { count: "exact", head: true })
        .eq("slug", slug)
        .eq("provider", "github"),
    ]);

    userClaim = fetchedUserClaim;
    verifierRequests = fetchedVerifierRequests ?? [];
    connectionCount = { linkedin: linkedinCount ?? 0, github: githubCount ?? 0 };
  }

  const claimedByUserId = claim?.clerk_user_id ?? null;
  const isOwner = Boolean(effectiveUserId && claim?.clerk_user_id === effectiveUserId);
  const userClaimedSlug = userClaim?.slug ?? null;
  const rawContent = content?.html_content ?? baseProfile.humanContent;
  const editableContent = toEditableMarkdown(rawContent);
  const humanContent = renderMarkdownToHtml(editableContent);
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
    humanContent,
    editableContent,
    runtimeReferences: extractReferencesFromMarkdown(editableContent),
    verifierRequests: verifierRequests.map((request) => ({
      id: request.id,
      snippet: request.snippet,
      sectionLabel: request.section_label,
      verifierName: request.verifier_name,
      verifierEmail: request.verifier_email,
      status: request.status,
      createdAt: request.created_at,
    })),
    socialVerifications: (verifications ?? []).map((v) => ({
      provider: v.provider as "linkedin" | "github",
      providerProfileUrl: v.provider_profile_url,
      displayName: v.display_name,
      verifiedAt: v.verified_at,
    })),
    connectionCount,
  };
}

export async function assertProfileExists(slug: string) {
  const profile = getProfile(slug);
  if (!profile) {
    throw new Error("PROFILE_NOT_FOUND");
  }
  return profile;
}
