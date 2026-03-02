# Project Guide For New AI Agents

## What This Repo Is

`profiles` is a Next.js App Router app for Agentapedia profile pages.

Each profile has:
- static source data in `src/lib/profiles/data/*`
- human view + machine view UI
- optional runtime owner-managed overlays (claim/edit/verifier requests) stored in Supabase

## Core Runtime Features

1. Profile claiming
- Only unclaimed profiles can be claimed.
- A user can claim at most one profile.

2. Profile content editing
- Only claim owner can edit `humanContent`.

3. Verifier requests
- Owner can submit verifier requests for selected snippets.
- Verifier requests are visible only to the owner.

## Auth + Security Model

- Auth provider: Clerk.
- Database: Supabase Postgres via Supabase Data API.
- Security enforcement: Postgres RLS policies (not only app checks).
- Authenticated DB requests use Clerk session JWT as bearer token.

Important: Supabase must be configured with Clerk Third-Party Auth and Clerk tokens must include `role: authenticated`.

## Key Files

- `src/app/[slug]/page.tsx`
  - profile page SSR; fetches runtime state.

- `src/components/ProfileActions.tsx`
  - claim/edit/verifier client UI and API calls.

- `src/lib/profile-state.ts`
  - merges static profile with Supabase runtime state.

- `src/lib/supabase.ts`
  - server-side Supabase client factory.

- `src/app/api/profiles/[slug]/claim/route.ts`
- `src/app/api/profiles/[slug]/content/route.ts`
- `src/app/api/profiles/[slug]/verifiers/route.ts`
- `src/app/api/profiles/[slug]/state/route.ts`
  - API surface for runtime profile workflows.

- `supabase/migrations/202603020001_profile_claiming.sql`
  - schema + indexes + triggers + RLS policies.

## Data Model (Supabase)

- `profile_claims`
  - one row per claimed profile
  - unique `slug`, unique `clerk_user_id`

- `profile_contents`
  - owner-edited HTML content per slug
  - unique `slug`, references `profile_claims.slug`

- `verifier_requests`
  - owner-submitted verification tasks tied to slug/snippet

## Behavioral Notes

- The canonical profile list/slugs comes from static files; database does not define valid slugs.
- API routes call `assertProfileExists(slug)` before DB writes.
- `state` API and SSR both read runtime state through `getRuntimeProfileState`.
- Runtime DB failures should not silently fallback for write operations; they should return API errors.

## Env Vars Expected

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (preferred) or `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Commands

- `npm run dev`
- `npm run build`

## If You Change Security/Auth

1. Keep RLS and API logic consistent (DB should enforce owner constraints).
2. Re-check that verifier requests are not leaked to non-owners.
3. Validate claim constraints still hold under race conditions.
