import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { z } from "zod";
import { assertProfileExists, getRuntimeProfileState } from "@/lib/profile-state";
import { prisma } from "@/lib/db";

const updateContentSchema = z.object({
  humanContent: z.string().min(1).max(120000),
});

export async function PUT(
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
      { error: "Only the profile owner can edit this content" },
      { status: 403 }
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = updateContentSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid content payload" }, { status: 400 });
  }

  await prisma.profileContent.upsert({
    where: { slug },
    create: {
      slug,
      htmlContent: parsed.data.humanContent,
      updatedBy: userId,
    },
    update: {
      htmlContent: parsed.data.humanContent,
      updatedBy: userId,
    },
  });

  const updatedState = await getRuntimeProfileState(slug, userId);
  return NextResponse.json(updatedState);
}
