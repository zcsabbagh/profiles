# Agentapedia Profiles — Project Guide

## What This Is

A Next.js 16 App Router app that serves Wikipedia-style professional profiles at `agentapedia.com/{slug}`. Each profile has a **human view** (HTML article + sidebar infobox) and a **machine view** (JSON-LD structured data). Profile owners can claim, edit, and request verification through a Clerk + Supabase runtime layer.

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16, React 19, TypeScript |
| Auth | Clerk (session JWT → Supabase RLS) |
| Database | Supabase Postgres (RLS-enforced) |
| Styling | Tailwind CSS 4 |
| Validation | Zod v4 |
| Markdown | Marked + Turndown |
| Scraping | Browserbase (GitHub/LinkedIn connections) |
| Email | Resend |
| Testing | Vitest (unit) + Playwright (e2e) |

## How Auth Works

1. **Clerk** manages user sessions and issues JWTs with `role: authenticated`.
2. The Clerk JWT `sub` claim is the `clerk_user_id` used in Supabase RLS policies.
3. Server code calls `getSupabaseAccessToken(getToken)` (in `src/lib/clerk-token.ts`) to get a Clerk-issued token, then passes it to `createSupabaseServerClient(accessToken)` (in `src/lib/supabase.ts`).
4. Supabase RLS policies enforce all authorization — API routes do defensive checks but the DB is the real gatekeeper.
5. Clerk must be configured with Supabase Third-Party Auth. The JWT template must include `role: authenticated`.

## How Profiles Work

### Static Data (Source of Truth)

Profile content lives in TypeScript files:
- `src/lib/profiles/data/batch-a.ts` — 8 profiles
- `src/lib/profiles/data/batch-b.ts` — 4 profiles
- `src/lib/profiles/data/batch-c.ts` — 14 profiles

All batches are merged in `src/lib/profiles.ts` into a single `profiles` record. Each profile is a `ProfileData` object (defined in `src/lib/profiles/types.ts`):

```
ProfileData = {
  slug, name, currentRole, org, education[],
  humanContent (HTML), structuredData (JSON-LD),
  infobox, references[]
}
```

`getProfileAsync(slug)` tries the Supabase `profiles` table first, falls back to in-memory.

### Supabase Runtime Tables

These store owner-managed state on top of static profiles:

| Table | Purpose | RLS |
|---|---|---|
| `profile_claims` | One row per claimed profile. Unique slug + unique clerk_user_id. | Public read, owner insert |
| `profile_contents` | Owner-edited HTML content per slug. FK to claims. | Public read, owner write |
| `verifier_requests` | Owner-submitted verification tasks for snippets. | Owner-only read/write |
| `social_verifications` | LinkedIn/GitHub identity verification badges. | Public read, owner write |
| `social_connections` | Scraped connection data from GitHub/LinkedIn. | Owner-only |
| `profiles` | Optional canonical registry (DB-first profiles). | Public read only |

Migrations are in `supabase/migrations/` (5 files, `202603020001` through `202603020005`).

### Page Rendering Flow

1. `src/app/[slug]/page.tsx` — SSR entry point
2. Fetches static profile via `getProfileAsync(slug)`
3. Fetches runtime state via `getRuntimeProfileState(slug, userId, accessToken)` from `src/lib/profile-state.ts` — merges claims, edited content, verifications, connections
4. Renders: `Infobox` (sidebar) + `humanContent` (article) + `ViewToggle` (human/machine switch) + `ProfileActions` (owner UI)

### API Routes

All under `src/app/api/profiles/[slug]/`:

| Route | Method | Purpose |
|---|---|---|
| `/state` | GET | Fetch runtime state (claims, content, verifications) |
| `/claim` | POST | Claim a profile (1 per user, 1 claim per profile) |
| `/content` | PUT | Update HTML content (owner only) |
| `/verifiers` | POST | Submit verifier request for a snippet |
| `/verify/github` | POST | GitHub identity verification |
| `/verify/linkedin` | POST | LinkedIn identity verification |
| `/machine` | GET | Machine view structured data |

## Key Navigation

| What you need | Where to look |
|---|---|
| Profile page rendering | `src/app/[slug]/page.tsx` |
| Profile types/interfaces | `src/lib/profiles/types.ts` |
| All profile data | `src/lib/profiles/data/batch-{a,b,c}.ts` |
| Profile access functions | `src/lib/profiles.ts` |
| Runtime state merging | `src/lib/profile-state.ts` |
| Owner UI (claim/edit/verify) | `src/components/ProfileActions.tsx` |
| Sidebar component | `src/components/Infobox.tsx` |
| Machine view component | `src/components/MachineView.tsx` |
| Supabase client factory | `src/lib/supabase.ts` |
| Clerk token helper | `src/lib/clerk-token.ts` |
| DB schema + RLS policies | `supabase/migrations/` |
| Creating new profiles | `NEW_PROFILE.md` |

## Commands

- `npm run dev` — local development
- `npm run build` — production build

## Env Vars

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (or `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
- `CLERK_SUPABASE_JWT_TEMPLATE` (optional, defaults to trying `undefined` then `"supabase"`)

## Rules

- The canonical profile list comes from static files. The database does not define valid slugs — `assertProfileExists(slug)` checks the in-memory registry before any DB write.
- RLS is the primary security enforcement. API-level checks are defensive only.
- Verifier requests must never leak to non-owners.
- Runtime DB failures must not silently succeed for writes — return API errors.
- Profile content max: 120,000 chars (humanContent), 200,000 chars (DB profiles table).
