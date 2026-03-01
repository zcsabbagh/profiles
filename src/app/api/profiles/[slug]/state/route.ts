import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { getRuntimeProfileState } from "@/lib/profile-state";

export async function GET(
  _request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  const { userId } = await auth();

  const state = await getRuntimeProfileState(slug, userId ?? null);
  if (!state) {
    return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  }

  return NextResponse.json(state);
}
