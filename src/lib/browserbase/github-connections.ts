import { createSupabaseServerClient } from "@/lib/supabase";
import { getAllSlugs } from "@/lib/profiles";

interface GitHubUser {
  login: string;
  name: string | null;
  bio: string | null;
  html_url: string;
}

async function fetchGitHubPaginated(
  url: string,
  token: string,
  maxPages = 10
): Promise<GitHubUser[]> {
  const results: GitHubUser[] = [];
  let nextUrl: string | null = url;
  let page = 0;

  while (nextUrl && page < maxPages) {
    const currentUrl: string = nextUrl;
    const response: Response = await fetch(currentUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
      },
    });

    if (!response.ok) break;

    const data: GitHubUser[] = await response.json();
    results.push(...data);

    const linkHeader = response.headers.get("link");
    const nextMatch = linkHeader?.match(/<([^>]+)>;\s*rel="next"/);
    nextUrl = nextMatch?.[1] ?? null;
    page++;
  }

  return results;
}

export async function fetchGitHubConnections(
  githubToken: string,
  slug: string,
  accessToken: string
): Promise<{ scraped: number; matched: number }> {
  const [followers, following] = await Promise.all([
    fetchGitHubPaginated("https://api.github.com/user/followers?per_page=100", githubToken),
    fetchGitHubPaginated("https://api.github.com/user/following?per_page=100", githubToken),
  ]);

  // Deduplicate by login
  const seen = new Set<string>();
  const allConnections: GitHubUser[] = [];
  for (const user of [...followers, ...following]) {
    if (!seen.has(user.login)) {
      seen.add(user.login);
      allConnections.push(user);
    }
  }

  // Cross-reference against Agentapedia slugs
  const allSlugs = getAllSlugs();
  const slugSet = new Set(allSlugs);

  const supabase = createSupabaseServerClient(accessToken);

  // Clear old GitHub connections
  await supabase
    .from("social_connections")
    .delete()
    .eq("slug", slug)
    .eq("provider", "github");

  let matched = 0;
  const rows = allConnections.map((user) => {
    const matchedSlug = slugSet.has(user.login) ? user.login : null;
    if (matchedSlug) matched++;
    return {
      slug,
      provider: "github" as const,
      connection_name: user.name ?? user.login,
      connection_headline: user.bio,
      connection_profile_url: user.html_url,
      connection_username: user.login,
      matched_slug: matchedSlug,
    };
  });

  // Insert in batches of 100
  for (let i = 0; i < rows.length; i += 100) {
    const batch = rows.slice(i, i + 100);
    await supabase.from("social_connections").insert(batch);
  }

  return { scraped: allConnections.length, matched };
}
