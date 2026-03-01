import { prisma } from "@/lib/db";
import { getProfile } from "@/lib/profiles";

export interface RuntimeProfileState {
  claimedByUserId: string | null;
  claimedAt: string | null;
  isOwner: boolean;
  canClaim: boolean;
  userClaimedSlug: string | null;
  humanContent: string;
  verifierRequests: Array<{
    id: string;
    snippet: string;
    sectionLabel: string | null;
    verifierName: string;
    verifierEmail: string;
    status: string;
    createdAt: string;
  }>;
}

export async function getRuntimeProfileState(
  slug: string,
  userId: string | null
): Promise<RuntimeProfileState | null> {
  const baseProfile = getProfile(slug);
  if (!baseProfile) return null;

  const [claim, userClaim, content, verifierRequests] = await Promise.all([
    prisma.profileClaim.findUnique({ where: { slug } }),
    userId ? prisma.profileClaim.findUnique({ where: { clerkUserId: userId } }) : null,
    prisma.profileContent.findUnique({ where: { slug } }),
    prisma.verifierRequest.findMany({
      where: { slug },
      orderBy: { createdAt: "desc" },
      take: 50,
    }),
  ]);

  const claimedByUserId = claim?.clerkUserId ?? null;
  const isOwner = Boolean(userId && claim?.clerkUserId === userId);
  const userClaimedSlug = userClaim?.slug ?? null;
  const canClaim = Boolean(
    userId && (!claim || claim.clerkUserId === userId) && (!userClaim || userClaim.slug === slug)
  );

  return {
    claimedByUserId,
    claimedAt: claim?.claimedAt.toISOString() ?? null,
    isOwner,
    canClaim,
    userClaimedSlug,
    humanContent: content?.htmlContent ?? baseProfile.humanContent,
    verifierRequests: verifierRequests.map((request) => ({
      id: request.id,
      snippet: request.snippet,
      sectionLabel: request.sectionLabel,
      verifierName: request.verifierName,
      verifierEmail: request.verifierEmail,
      status: request.status,
      createdAt: request.createdAt.toISOString(),
    })),
  };
}

export async function assertProfileExists(slug: string) {
  const profile = getProfile(slug);
  if (!profile) {
    throw new Error("PROFILE_NOT_FOUND");
  }
  return profile;
}
