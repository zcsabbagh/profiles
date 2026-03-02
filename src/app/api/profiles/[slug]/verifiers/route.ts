import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { assertProfileExists, getRuntimeProfileState } from "@/lib/profile-state";
import { createSupabaseServerClient } from "@/lib/supabase";
import { getSupabaseAccessToken } from "@/lib/clerk-token";

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

  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? new URL(request.url).origin;
      const profileUrl = `${baseUrl.replace(/\/$/, "")}/${slug}`;
      const from = process.env.RESEND_FROM ?? "Agentapedia <onboarding@resend.dev>";

      await resend.emails.send({
        from,
        to: parsed.data.verifierEmail,
        subject: `Verification requested for ${slug.replaceAll("_", " ")}`,
        html: `
          <p>Hi ${parsed.data.verifierName},</p>
          <p>You were requested as a verifier for content on Agentapedia.</p>
          ${parsed.data.sectionLabel ? `<p><strong>Section:</strong> ${parsed.data.sectionLabel}</p>` : ""}
          <p><strong>Snippet:</strong></p>
          <blockquote>${parsed.data.snippet}</blockquote>
          <p>Profile URL: <a href="${profileUrl}">${profileUrl}</a></p>
          <p>Please reply to this email with confirmation or corrections.</p>
        `,
      });
    } catch (emailError) {
      console.error("Failed to send verifier email", emailError);
    }
  }

  const updatedState = await getRuntimeProfileState(slug, userId, accessToken);
  return NextResponse.json(updatedState);
}
