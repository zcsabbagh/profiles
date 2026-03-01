import { auth } from "@clerk/nextjs/server";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";
import { assertProfileExists, getRuntimeProfileState } from "@/lib/profile-state";
import { prisma } from "@/lib/db";

export async function POST(
  _request: Request,
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

  try {
    await prisma.$transaction(async (tx) => {
      const existingClaimOnSlug = await tx.profileClaim.findUnique({ where: { slug } });
      if (existingClaimOnSlug && existingClaimOnSlug.clerkUserId !== userId) {
        throw new Error("PROFILE_ALREADY_CLAIMED");
      }

      const existingClaimByUser = await tx.profileClaim.findUnique({
        where: { clerkUserId: userId },
      });
      if (existingClaimByUser && existingClaimByUser.slug !== slug) {
        throw new Error("USER_ALREADY_CLAIMED_ANOTHER_PROFILE");
      }

      if (!existingClaimOnSlug) {
        await tx.profileClaim.create({
          data: {
            slug,
            clerkUserId: userId,
          },
        });
      }
    });

    const updatedState = await getRuntimeProfileState(slug, userId);
    return NextResponse.json(updatedState);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
      return NextResponse.json(
        { error: "Profile is already claimed or you already claimed another profile" },
        { status: 409 }
      );
    }

    if (error instanceof Error && error.message === "PROFILE_ALREADY_CLAIMED") {
      return NextResponse.json({ error: "This profile is already claimed" }, { status: 409 });
    }

    if (error instanceof Error && error.message === "USER_ALREADY_CLAIMED_ANOTHER_PROFILE") {
      return NextResponse.json(
        { error: "You can only claim one profile" },
        { status: 409 }
      );
    }

    return NextResponse.json({ error: "Failed to claim profile" }, { status: 500 });
  }
}
