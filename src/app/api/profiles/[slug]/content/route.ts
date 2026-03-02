import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { z } from "zod";
import { assertProfileExists, getRuntimeProfileState } from "@/lib/profile-state";
import { createSupabaseServerClient } from "@/lib/supabase";
import { getSupabaseAccessToken } from "@/lib/clerk-token";

const updateContentSchema = z.object({
  humanContent: z.string().min(1).max(120000),
});

export async function PUT(
  request: Request,
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

  const supabase = createSupabaseServerClient(accessToken);
  const { data: claim } = await supabase
    .from("profile_claims")
    .select("clerk_user_id")
    .eq("slug", slug)
    .maybeSingle();
  if (!claim || claim.clerk_user_id !== userId) {
    return NextResponse.json(
      { error: "Only the profile owner can edit this content" },
      { status: 403 }
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = updateContentSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid content payload" }, { status: 400 });
  }

  const { error } = await supabase.from("profile_contents").upsert(
    {
      slug,
      html_content: parsed.data.humanContent,
      updated_by: userId,
    },
    { onConflict: "slug" }
  );
  if (error) {
    if (error.code === "42501") {
      return NextResponse.json(
        { error: "Only the profile owner can edit this content" },
        { status: 403 }
      );
    }
    return NextResponse.json({ error: "Failed to update profile content" }, { status: 500 });
  }

  const updatedState = await getRuntimeProfileState(slug, userId, accessToken);
  return NextResponse.json(updatedState);
}
