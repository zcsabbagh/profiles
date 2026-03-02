import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  try {
    const { name, context } = await req.json();
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return jsonResponse({ error: "A valid person name is required" }, 400);
    }

    const trimmedName = name.trim();
    const trimmedContext = context?.trim() || "";

    // Step 1: Exa research (parallel searches)
    console.log(`[generate-profile] Starting Exa research for "${trimmedName}"`);
    const exaResults = await runExaSearches(trimmedName, trimmedContext);

    // Step 2: Parallel deep research
    console.log(`[generate-profile] Starting Parallel deep research`);
    const parallelReport = await runParallelResearch(trimmedName, trimmedContext, exaResults);

    // Step 3: Claude synthesis
    console.log(`[generate-profile] Starting Claude synthesis`);
    const profile = await synthesizeProfile(trimmedName, exaResults, parallelReport);

    // Step 4: Insert into Supabase
    console.log(`[generate-profile] Inserting profile "${profile.slug}" into database`);
    await insertProfile(profile);

    console.log(`[generate-profile] Done — slug: ${profile.slug}`);
    return jsonResponse({ slug: profile.slug, name: profile.name });
  } catch (err) {
    console.error(`[generate-profile] Error:`, err);
    const message = err instanceof Error ? err.message : "Internal error";
    return jsonResponse({ error: message }, 500);
  }
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function env(key: string): string {
  const val = Deno.env.get(key);
  if (!val) throw new Error(`Missing env var: ${key}`);
  return val;
}

// ---------------------------------------------------------------------------
// Step 1 — Exa Search
// ---------------------------------------------------------------------------

interface ExaSearchResult {
  query: string;
  results: Array<{ title: string; url: string; text: string }>;
}

async function runExaSearches(name: string, context: string): Promise<ExaSearchResult[]> {
  const apiKey = env("EXA_API_KEY");
  const queries = [
    `"${name}"`,
    `"${name}" site:github.com`,
    `"${name}" site:linkedin.com`,
    `"${name}" blog OR paper OR talk`,
    `"${name}" site:huggingface.co OR site:arxiv.org`,
    `"${name}" interview OR podcast OR press`,
  ];
  if (context) {
    queries.push(`"${name}" ${context}`);
  }

  const searches = queries.map(async (query) => {
    try {
      const res = await fetch("https://api.exa.ai/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
        body: JSON.stringify({
          query,
          numResults: 8,
          contents: { text: { maxCharacters: 8000 } },
        }),
      });
      if (!res.ok) {
        console.warn(`[exa] Search failed for "${query}": ${res.status}`);
        return { query, results: [] };
      }
      const data = await res.json();
      const results = (data.results || []).map((r: any) => ({
        title: r.title || "",
        url: r.url || "",
        text: r.text || "",
      }));
      return { query, results };
    } catch (err) {
      console.warn(`[exa] Search error for "${query}":`, err);
      return { query, results: [] };
    }
  });

  return Promise.all(searches);
}

// ---------------------------------------------------------------------------
// Step 2 — Parallel Deep Research
// ---------------------------------------------------------------------------

async function runParallelResearch(
  name: string,
  context: string,
  exaResults: ExaSearchResult[]
): Promise<string> {
  const apiKey = env("PARALLEL_API_KEY");

  // Summarize key facts from Exa to seed the deep research
  const exaSummary = exaResults
    .flatMap((s) => s.results.map((r) => `- ${r.title}: ${r.url}`))
    .slice(0, 30)
    .join("\n");

  const query = [
    `Comprehensive professional profile of ${name}.`,
    context ? `Context: ${context}.` : "",
    "Cover: education (institution, degree, field, years), complete career history with dates and what they built at each role,",
    "notable projects/publications with specific metrics (stars, citations, benchmarks, lab results),",
    "technical skills with evidence, memberships/fellowships, public writing, and all social/web links.",
    "Cross-reference claims across multiple sources. Note confidence level and gaps for each fact.",
    "",
    "Key sources already found:",
    exaSummary,
  ]
    .filter(Boolean)
    .join(" ");

  // Create the deep research run
  const createRes = await fetch("https://api.parallel.ai/v1/tasks/runs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      task_type: "deep-research",
      input: query,
    }),
  });

  if (!createRes.ok) {
    const text = await createRes.text();
    throw new Error(`Parallel create failed (${createRes.status}): ${text}`);
  }

  const { id: runId } = await createRes.json();
  console.log(`[parallel] Created run: ${runId}`);

  // Poll for completion (max 120s)
  const maxWait = 120_000;
  const pollInterval = 5_000;
  const start = Date.now();

  while (Date.now() - start < maxWait) {
    await new Promise((r) => setTimeout(r, pollInterval));

    const statusRes = await fetch(`https://api.parallel.ai/v1/tasks/runs/${runId}`, {
      headers: { Authorization: `Bearer ${apiKey}` },
    });
    if (!statusRes.ok) continue;

    const statusData = await statusRes.json();
    console.log(`[parallel] Status: ${statusData.status}`);

    if (statusData.status === "completed") {
      // Fetch the result
      const resultRes = await fetch(`https://api.parallel.ai/v1/tasks/runs/${runId}/result`, {
        headers: { Authorization: `Bearer ${apiKey}` },
      });
      if (resultRes.ok) {
        const resultData = await resultRes.json();
        return resultData.markdown || resultData.result || JSON.stringify(resultData);
      }
      return "Deep research completed but result could not be retrieved.";
    }

    if (statusData.status === "failed") {
      console.warn(`[parallel] Research failed: ${JSON.stringify(statusData)}`);
      return "Deep research failed — proceeding with Exa results only.";
    }
  }

  console.warn(`[parallel] Timed out after ${maxWait / 1000}s`);
  return "Deep research timed out — proceeding with Exa results only.";
}

// ---------------------------------------------------------------------------
// Step 3 — Claude Synthesis
// ---------------------------------------------------------------------------

async function synthesizeProfile(
  name: string,
  exaResults: ExaSearchResult[],
  parallelReport: string
): Promise<ProfileData> {
  const apiKey = env("ANTHROPIC_API_KEY");

  // Format Exa results for the prompt
  const exaFormatted = exaResults
    .map((s) => {
      const results = s.results
        .map((r) => `### ${r.title}\nURL: ${r.url}\n${r.text.slice(0, 4000)}`)
        .join("\n\n");
      return `## Exa Search: ${s.query}\n${results || "(no results)"}`;
    })
    .join("\n\n---\n\n");

  const systemPrompt = buildSystemPrompt();
  const userPrompt = buildUserPrompt(name, exaFormatted, parallelReport);

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 16000,
      system: systemPrompt,
      messages: [{ role: "user", content: userPrompt }],
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Claude API failed (${res.status}): ${text}`);
  }

  const data = await res.json();
  const content = data.content?.[0]?.text;
  if (!content) throw new Error("Claude returned empty response");

  // Extract JSON from the response (handle markdown code blocks)
  const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/);
  const jsonStr = jsonMatch ? jsonMatch[1].trim() : content.trim();

  let profile: ProfileData;
  try {
    profile = JSON.parse(jsonStr);
  } catch {
    throw new Error(`Failed to parse Claude response as JSON. Response starts with: ${content.slice(0, 200)}`);
  }

  // Validate required fields
  if (!profile.slug || !profile.name || !profile.humanContent || !profile.structuredData || !profile.infobox) {
    throw new Error("Claude response missing required ProfileData fields");
  }

  return profile;
}

function buildSystemPrompt(): string {
  return `You are a professional profile writer for Agentapedia, a Wikipedia-style encyclopedia of professional profiles. You produce structured ProfileData objects in JSON format.

## ProfileData TypeScript Interface

\`\`\`typescript
interface Education {
  institution: string;
  degree: string;
  field?: string;
  years?: string;
  gpa?: string;
  notes?: string;
}

interface Reference {
  title: string;
  url: string;
}

interface InfoboxLink {
  label: string;
  url: string;
}

interface Infobox {
  fullName: string;
  currentRole: string;
  org: string;
  education: string[];
  knownFor: string[];
  website?: string;
  links: InfoboxLink[];
}

interface ProfileData {
  slug: string;           // lowercase, underscore-separated: "firstname_lastname"
  name: string;
  currentRole: string;
  org: string;
  education: Education[];
  humanContent: string;   // Raw HTML Wikipedia-style article
  structuredData: object; // JSON-LD Schema.org Person
  infobox: Infobox;
  references: Reference[];
}
\`\`\`

## Quality Rules

### humanContent (HTML article)
- Opening paragraph: name (bolded), role, org (linked), key prior roles (linked), education, 1-2 distinguishing facts. Wikipedia lead section style.
- Sections: Education (h2), Career (h2 with h3 subsections per role), Notable work (h2 with h3 per project with metrics).
- Encyclopedic third-person neutral tone. Use last name after first mention.
- Every organization, tool, framework, institution hyperlinked on first mention.
- Prefer specific numbers over vague claims.
- No bullet points — flowing paragraphs only.
- Aim for 1,500-4,000 words.

### structuredData (JSON-LD)
- Schema.org Person type with @context and @type.
- Include: sameAs (all social URLs), worksFor, alumniOf (with _verificationStatus, _confidence), hasOccupation (reverse-chronological, with _whatTheyBuilt, _confidence, _gaps), knowsAbout (skills with _evidence), memberOf, _projects (with _metrics, _recognition).
- REQUIRED: _dataQuality block with sourcesConsulted, sourceList, lastUpdated ("2026-03"), overallConfidence, gaps, corrections, recommendation.

### infobox
- knownFor: 3-5 entries with metrics where available.
- links: all confirmed social/web URLs.

### references
- 8+ entries covering major claims. Format: { title: "Descriptive title — Source", url: "..." }

### Critical rules
- Never fabricate metrics. If unknown, omit.
- Set _confidence per entry (0.95+ = 2+ sources, 0.85-0.94 = 1 strong source, 0.75-0.84 = single unverified).
- Document gaps honestly in _dataQuality.gaps.
- All links use plain <a href="URL">text</a> format (no target/rel attributes needed).

## Output Format
Return ONLY a JSON code block with the complete ProfileData object. No explanatory text before or after.`;
}

function buildUserPrompt(name: string, exaFormatted: string, parallelReport: string): string {
  return `Research the following person and produce a complete ProfileData JSON object.

**Person:** ${name}

---

# Exa Web Search Results

${exaFormatted}

---

# Deep Research Report

${parallelReport}

---

Synthesize all the above research into a single ProfileData JSON object. Follow the quality rules exactly. Ensure every claim is sourced and confidence-scored. Return ONLY the JSON in a code block.`;
}

// ---------------------------------------------------------------------------
// Step 4 — Insert into Supabase
// ---------------------------------------------------------------------------

interface ProfileData {
  slug: string;
  name: string;
  currentRole: string;
  org: string;
  education: Array<{
    institution: string;
    degree: string;
    field?: string;
    years?: string;
    gpa?: string;
    notes?: string;
  }>;
  humanContent: string;
  structuredData: Record<string, unknown>;
  infobox: Record<string, unknown>;
  references: Array<{ title: string; url: string }>;
}

async function insertProfile(profile: ProfileData): Promise<void> {
  const supabaseUrl = env("SUPABASE_URL");
  const serviceRoleKey = env("SUPABASE_SERVICE_ROLE_KEY");

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  });

  const { error } = await supabase.from("profiles").upsert(
    {
      slug: profile.slug,
      name: profile.name,
      role_title: profile.currentRole,
      org: profile.org,
      education_json: profile.education,
      human_content: profile.humanContent,
      structured_data_json: profile.structuredData,
      infobox_json: profile.infobox,
      references_json: profile.references,
    },
    { onConflict: "slug" }
  );

  if (error) {
    throw new Error(`Supabase insert failed: ${error.message}`);
  }
}
