"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateProfileForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [context, setContext] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || status === "loading") return;

    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/generate-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), context: context.trim() || undefined }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to generate profile");
      }

      router.push(`/${data.slug}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 border border-border rounded-lg p-5">
      <h2 className="font-sans text-sm font-semibold mb-3">Create a new profile</h2>

      <div className="flex flex-col gap-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Person's full name"
          required
          disabled={status === "loading"}
          className="font-sans text-sm border border-border rounded px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-foreground/20 disabled:opacity-50"
        />

        <input
          type="text"
          value={context}
          onChange={(e) => setContext(e.target.value)}
          placeholder="Context (optional) — e.g., role, company, field"
          disabled={status === "loading"}
          className="font-sans text-sm border border-border rounded px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-foreground/20 disabled:opacity-50"
        />

        <button
          type="submit"
          disabled={!name.trim() || status === "loading"}
          className="font-sans text-sm font-medium bg-foreground text-background rounded px-4 py-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Researching &amp; generating profile...
            </span>
          ) : (
            "Generate profile"
          )}
        </button>
      </div>

      {status === "loading" && (
        <p className="font-sans text-xs text-muted mt-3">
          This takes 60-90 seconds. We&apos;re searching the web, running deep research, and synthesizing a full profile.
        </p>
      )}

      {status === "error" && error && (
        <p className="font-sans text-xs text-red-600 mt-3">{error}</p>
      )}
    </form>
  );
}
