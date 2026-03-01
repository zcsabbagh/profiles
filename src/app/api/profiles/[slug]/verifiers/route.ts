import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { z } from "zod";
import { assertProfileExists, getRuntimeProfileState } from "@/lib/profile-state";
import { prisma } from "@/lib/db";

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
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await context.params;

  try {
    await assertProfileExists(slug);
  } catch {
    return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  }

  const claim = await prisma.profileClaim.findUnique({ where: { slug } });
  if (!claim || claim.clerkUserId !== userId) {
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

  await prisma.verifierRequest.create({
    data: {
      slug,
      snippet: parsed.data.snippet,
      sectionLabel: parsed.data.sectionLabel,
      verifierName: parsed.data.verifierName,
      verifierEmail: parsed.data.verifierEmail,
      requestedBy: userId,
    },
  });

  const updatedState = await getRuntimeProfileState(slug, userId);
  return NextResponse.json(updatedState);
}
