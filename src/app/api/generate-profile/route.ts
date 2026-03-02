import { NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const SUPABASE_ANON_JWT = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function POST(request: Request) {
  if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY || !SUPABASE_ANON_JWT) {
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  let body: { name?: string; context?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!body.name || typeof body.name !== "string" || body.name.trim().length < 2) {
    return NextResponse.json(
      { error: "A valid person name is required" },
      { status: 400 }
    );
  }

  const edgeFunctionUrl = `${SUPABASE_URL}/functions/v1/generate-profile`;

  const res = await fetch(edgeFunctionUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_PUBLISHABLE_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_JWT}`,
    },
    body: JSON.stringify({
      name: body.name.trim(),
      context: body.context?.trim() || undefined,
    }),
  });

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    const message = data?.error || `Edge function failed (${res.status})`;
    return NextResponse.json({ error: message }, { status: res.status });
  }

  return NextResponse.json(data);
}
