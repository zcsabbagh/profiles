import Link from "next/link";
import { getAllProfilesAsync } from "@/lib/profiles";
import SearchDialog, { SearchTrigger } from "@/components/SearchDialog";

export default async function Home() {
  const profiles = await getAllProfilesAsync();
  const searchItems = profiles.map((p) => ({ name: p.name, slug: p.slug }));

  return (
    <div className="min-h-screen">
      <SearchDialog items={searchItems} />

      <header className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <h1 className="font-sans text-2xl font-bold tracking-tight">
              Agentapedia
            </h1>
            <SearchTrigger />
          </div>
          <p className="font-sans text-sm text-muted mt-1">
            From public sources — last updated March 2026
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-8">
        <p className="text-[0.9375rem] leading-relaxed mb-8">
          Each profile provides two views: a <strong>human-readable</strong>{" "}
          Wikipedia-style article synthesized from public sources, and a{" "}
          <strong>machine-readable</strong> structured data view (JSON-LD) that
          an AI agent can parse programmatically. Toggle between them using the
          pill in the top bar.
        </p>

        <div className="grid gap-0 border-t border-border">
          {profiles.map((p) => (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              className="flex items-baseline justify-between py-3 px-1 border-b border-border hover:bg-[#f3f1ec] transition-colors group"
            >
              <span className="font-sans font-semibold text-[0.9375rem] text-foreground group-hover:text-link transition-colors">
                {p.name}
              </span>
              <span className="font-mono text-xs text-muted">
                /{p.slug}
              </span>
            </Link>
          ))}
        </div>
      </main>

      <footer className="border-t border-border mt-12">
        <div className="max-w-3xl mx-auto px-6 py-6">
          <p className="font-sans text-xs text-muted">
            All information sourced from publicly available data. Gaps and
            confidence levels are surfaced transparently in the machine view.
          </p>
        </div>
      </footer>
    </div>
  );
}
