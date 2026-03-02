import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { auth } from "@clerk/nextjs/server";
import { getProfile } from "@/lib/profiles";
import ViewToggle from "@/components/ViewToggle";
import Infobox from "@/components/Infobox";
import MachineView from "@/components/MachineView";
import ProfileActions from "@/components/ProfileActions";
import { getRuntimeProfileState } from "@/lib/profile-state";
import { getSupabaseAccessToken } from "@/lib/clerk-token";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const profile = getProfile(slug);
  if (!profile) return { title: "Not Found" };
  return {
    title: `${profile.name} — Agentapedia`,
    description: `Professional profile of ${profile.name}. ${profile.currentRole}${profile.org ? ` at ${profile.org}` : ""}.`,
  };
}

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const profile = getProfile(slug);
  if (!profile) notFound();
  const { userId, getToken } = await auth();
  const accessToken = userId ? await getSupabaseAccessToken(getToken) : null;
  const runtimeState = await getRuntimeProfileState(slug, userId ?? null, accessToken);
  if (!runtimeState) notFound();

  const humanView = (
    <div>
      <Infobox {...profile.infobox} />
      <ProfileActions
        slug={slug}
        initialState={runtimeState}
        isSignedIn={Boolean(userId)}
      />
      {profile.references.length > 0 && (
        <div className="mt-8 pt-4 border-t border-border clear-both">
          <h2 className="font-sans text-lg font-semibold mb-2">References</h2>
          <ol className="references-list list-decimal list-inside">
            {profile.references.map((ref, i) => (
              <li key={i}>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ref.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );

  const machineView = <MachineView data={profile.structuredData} />;

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profile.structuredData),
        }}
      />

      <div className="min-h-screen">
        <div className="max-w-4xl mx-auto px-6 pt-3 pb-1">
          <Link
            href="/"
            className="font-sans text-xs text-muted hover:text-link transition-colors"
          >
            ← Agentapedia
          </Link>
        </div>

        <div className="max-w-4xl mx-auto px-6 pb-4">
          <h1 className="font-sans text-2xl font-bold tracking-tight">
            {profile.name}
          </h1>
          <p className="font-sans text-sm text-muted mt-0.5">
            From public sources — last updated March 2026
          </p>
        </div>

        <ViewToggle humanContent={humanView} machineContent={machineView} />

        <footer className="border-t border-border mt-8">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <p className="font-sans text-xs text-muted">
              Information synthesized from publicly available sources.
              Verification status and confidence levels are available in the
              machine view.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
