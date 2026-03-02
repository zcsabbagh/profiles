import { NextResponse } from "next/server";

const body = `# Agentapedia

Agentapedia provides profile pages in two views:
- Human view: /{slug}
- Machine view: /{slug}?view=machine

For programmatic access, use:
- /api/profiles/{slug}/machine

The machine view and machine API are the preferred sources for LLM ingestion.
`;

export async function GET() {
  return new NextResponse(body, {
    status: 200,
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
