# Agentapedia Profiles

Next.js App Router site with static profile content plus authenticated owner workflows:

- claim a profile (one profile per user)
- edit profile article content (owner only)
- submit verifier requests for selected snippets (owner only)

Data is persisted in Supabase Postgres and secured with RLS policies.

## Stack

- Next.js 16 (App Router)
- Clerk auth
- Supabase Postgres + Data API (`@supabase/supabase-js`)
- TypeScript + Zod

## Required Environment Variables

```bash
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://<project-ref>.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_... # preferred
# or legacy:
# NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

## Auth Integration Requirements (Clerk -> Supabase)

This app uses Supabase RLS with Clerk-issued JWTs. Ensure:

1. Supabase project has a Clerk Third-Party Auth integration enabled.
2. Clerk session tokens include `role: authenticated` claim.
3. App sends Clerk session token to Supabase as bearer token (already implemented server-side).

If these are not configured, authenticated writes will fail with RLS errors.

## Database Setup

Apply migration:

- `supabase/migrations/202603020001_profile_claiming.sql`

It creates:

- `profile_claims`
- `profile_contents`
- `verifier_requests`
- RLS policies for public reads and owner-only writes/owner-only verifier visibility.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```
