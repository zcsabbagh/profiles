import { NextResponse } from "next/server";
import { getProfileAsync } from "@/lib/profiles";

export async function GET(
  _request: Request,
  context: { params: Promise<{ slug: string }> },
) {
  const { slug } = await context.params;
  const profile = await getProfileAsync(slug);

  if (!profile) {
    return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  }

  return NextResponse.json(
    {
      slug: profile.slug,
      name: profile.name,
      updatedAt: "2026-03",
      machineContent: profile.structuredData,
    },
    {
      status: 200,
      headers: {
        "cache-control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    },
  );
}
