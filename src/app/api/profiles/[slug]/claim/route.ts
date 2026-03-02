import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { assertProfileExists, getRuntimeProfileState } from "@/lib/profile-state";
import { createSupabaseServerClient } from "@/lib/supabase";

export async function POST(
  _request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { userId, getToken } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const accessToken = await getToken();
  if (!accessToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await context.params;

  try {
    await assertProfileExists(slug);
  } catch {
    return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  }

  try {
    const supabase = createSupabaseServerClient(accessToken);
    const [{ data: existingClaimOnSlug }, { data: existingClaimByUser }] = await Promise.all([
      supabase
        .from("profile_claims")
        .select("slug, clerk_user_id")
        .eq("slug", slug)
        .maybeSingle(),
      supabase
        .from("profile_claims")
        .select("slug")
        .eq("clerk_user_id", userId)
        .maybeSingle(),
    ]);

    if (existingClaimOnSlug && existingClaimOnSlug.clerk_user_id !== userId) {
      return NextResponse.json({ error: "This profile is already claimed" }, { status: 409 });
    }

    if (existingClaimByUser && existingClaimByUser.slug !== slug) {
      return NextResponse.json({ error: "You can only claim one profile" }, { status: 409 });
    }

    if (!existingClaimOnSlug) {
      const { error } = await supabase.from("profile_claims").insert({
        slug,
        clerk_user_id: userId,
      });

      if (error) {
        if (error.code === "23505" || error.code === "42501") {
          return NextResponse.json(
            { error: "Profile is already claimed or you already claimed another profile" },
            { status: 409 }
          );
        }
        return NextResponse.json({ error: "Failed to claim profile" }, { status: 500 });
      }
    }

    const updatedState = await getRuntimeProfileState(slug, userId, accessToken);
    return NextResponse.json(updatedState);
  } catch {
    return NextResponse.json({ error: "Failed to claim profile" }, { status: 500 });
  }
}
