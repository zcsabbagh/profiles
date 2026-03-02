import { auth, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { assertProfileExists } from "@/lib/profile-state";
import { createSupabaseServerClient } from "@/lib/supabase";
import { getSupabaseAccessToken } from "@/lib/clerk-token";
import { fetchGitHubConnections } from "@/lib/browserbase/github-connections";

export async function POST(
  _request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { userId, getToken } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const accessToken = await getSupabaseAccessToken(getToken);
  if (!accessToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await context.params;

  try {
    await assertProfileExists(slug);
  } catch {
    return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  }

  // Verify the user owns this profile
  const supabase = createSupabaseServerClient(accessToken);
  const { data: claim } = await supabase
    .from("profile_claims")
    .select("slug, clerk_user_id")
    .eq("slug", slug)
    .eq("clerk_user_id", userId)
    .maybeSingle();

  if (!claim) {
    return NextResponse.json({ error: "You must claim this profile first" }, { status: 403 });
  }

  try {
    // Get GitHub OAuth token from Clerk
    const clerk = await clerkClient();
    const tokenResponse = await clerk.users.getUserOauthAccessToken(userId, "github");
    const githubToken = tokenResponse.data[0]?.token;

    if (!githubToken) {
      return NextResponse.json(
        { error: "No GitHub account connected. Please link GitHub in your Clerk account settings." },
        { status: 400 }
      );
    }

    // Fetch GitHub profile
    const ghResponse = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: "application/vnd.github+json",
      },
    });

    if (!ghResponse.ok) {
      return NextResponse.json({ error: "Failed to fetch GitHub profile" }, { status: 502 });
    }

    const ghUser = await ghResponse.json();

    // Save verification
    const { error } = await supabase.from("social_verifications").upsert(
      {
        slug,
        provider: "github",
        provider_user_id: ghUser.login,
        provider_profile_url: ghUser.html_url,
        display_name: ghUser.name ?? ghUser.login,
        verified_at: new Date().toISOString(),
        raw_metadata: {
          bio: ghUser.bio,
          company: ghUser.company,
          blog: ghUser.blog,
          publicRepos: ghUser.public_repos,
          followers: ghUser.followers,
          following: ghUser.following,
        },
      },
      { onConflict: "slug,provider" }
    );

    if (error) {
      console.error("Failed to save GitHub verification:", error);
      return NextResponse.json({ error: "Failed to save verification" }, { status: 500 });
    }

    // Fetch and store connections in background
    fetchGitHubConnections(githubToken, slug, accessToken).catch((err) => {
      console.error("GitHub connection fetch failed:", err);
    });

    return NextResponse.json({
      status: "verified",
      provider: "github",
      displayName: ghUser.name ?? ghUser.login,
      profileUrl: ghUser.html_url,
      username: ghUser.login,
    });
  } catch (error) {
    console.error("GitHub verification failed:", error);
    return NextResponse.json({ error: "Failed to verify GitHub account" }, { status: 500 });
  }
}
