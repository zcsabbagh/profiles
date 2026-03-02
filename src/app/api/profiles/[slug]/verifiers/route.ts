import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { z } from "zod";
import { assertProfileExists, getRuntimeProfileState } from "@/lib/profile-state";
import { createSupabaseServerClient } from "@/lib/supabase";
import { getSupabaseAccessToken } from "@/lib/clerk-token";
import { sendVerifierRequestEmail } from "@/lib/resend";

const RATE_LIMIT_WINDOW_HOURS = 1;
const MAX_REQUESTS_PER_WINDOW = 5;

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
      { error: "Only the profile owner can request verifiers" },
      { status: 403 }
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = createVerifierRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid verifier request payload" }, { status: 400 });
  }

  // Rate limit: max requests per slug per time window
  const windowStart = new Date(
    Date.now() - RATE_LIMIT_WINDOW_HOURS * 60 * 60 * 1000
  ).toISOString();
  const { count: recentCount } = await supabase
    .from("verifier_requests")
    .select("*", { count: "exact", head: true })
    .eq("slug", slug)
    .gte("created_at", windowStart);
  if ((recentCount ?? 0) >= MAX_REQUESTS_PER_WINDOW) {
    return NextResponse.json(
      { error: "Too many verifier requests. Please try again later." },
      { status: 429 }
    );
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

  let emailWarning: string | null = null;
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL;
    if (!baseUrl) {
      throw new Error("NEXT_PUBLIC_APP_URL is not configured");
    }
    const profileUrl = `${baseUrl.replace(/\/$/, "")}/${slug}`;

    await sendVerifierRequestEmail({
      to: parsed.data.verifierEmail,
      verifierName: parsed.data.verifierName,
      slug,
      snippet: parsed.data.snippet,
      sectionLabel: parsed.data.sectionLabel,
      profileUrl,
    });
  } catch (emailError) {
    console.error(
      "Failed to send verifier email:",
      emailError instanceof Error ? emailError.message : "Unknown error"
    );
    emailWarning = "Verifier request saved but email notification may not have been sent.";
  }

  const updatedState = await getRuntimeProfileState(slug, userId, accessToken);
  return NextResponse.json({ ...updatedState, emailWarning });
}
