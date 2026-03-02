import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { z } from "zod";
import { assertProfileExists, getRuntimeProfileState } from "@/lib/profile-state";
import { createSupabaseServerClient } from "@/lib/supabase";

const createVerifierRequestSchema = z.object({
  snippet: z.string().trim().min(3).max(1000),
  sectionLabel: z.string().trim().max(200).optional(),
  verifierName: z.string().trim().min(2).max(120),
  verifierEmail: z.email().trim().max(320),
});

export async function POST(
  request: Request,
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

  const supabase = createSupabaseServerClient(accessToken);
  const { data: claim } = await supabase
    .from("profile_claims")
    .select("clerk_user_id")
    .eq("slug", slug)
    .maybeSingle();
  if (!claim || claim.clerk_user_id !== userId) {
    return NextResponse.json(
      { error: "Only the profile owner can request verifiers" },
      { status: 403 }
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = createVerifierRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid verifier request payload" }, { status: 400 });
  }

  const { error } = await supabase.from("verifier_requests").insert({
      slug,
      snippet: parsed.data.snippet,
      section_label: parsed.data.sectionLabel,
      verifier_name: parsed.data.verifierName,
      verifier_email: parsed.data.verifierEmail,
      requested_by: userId,
  });
  if (error) {
    if (error.code === "42501") {
      return NextResponse.json(
        { error: "Only the profile owner can request verifiers" },
        { status: 403 }
      );
    }
    return NextResponse.json({ error: "Failed to submit verifier request" }, { status: 500 });
  }

  const updatedState = await getRuntimeProfileState(slug, userId, accessToken);
  return NextResponse.json(updatedState);
}
