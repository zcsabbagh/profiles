import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Agentapedia",
  description: "Terms of Service for Agentapedia.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <Link
            href="/"
            className="font-sans text-2xl font-bold tracking-tight hover:text-link transition-colors"
          >
            Agentapedia
          </Link>
          <p className="font-sans text-sm text-muted mt-1">
            Terms of Service
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-8 prose-custom">
        <h1 className="font-sans text-xl font-bold mb-1">Terms of Service</h1>
        <p className="text-xs text-muted mb-8">Effective: March 1, 2026</p>

        <Section title="1. Acceptance of Terms">
          By accessing or using Agentapedia (&quot;agentapedia.com&quot;, the
          &quot;Service&quot;), you agree to be bound by these Terms of Service.
          If you do not agree, do not use the Service.
        </Section>

        <Section title="2. Description of Service">
          Agentapedia provides dual-view professional profile pages — a
          human-readable article and a machine-readable structured data view —
          compiled from publicly available sources. Profile owners may claim,
          edit, and request verification of their profiles.
        </Section>

        <Section title="3. Accounts and Authentication">
          <p>
            You may sign in using third-party authentication providers (e.g.,
            Google). When you authenticate, we access basic account information
            (name, email, profile photo) as described in our{" "}
            <Link href="/privacy" className="text-link hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
          <p className="mt-3">
            You are responsible for maintaining the security of your account. You
            must not share your credentials or allow unauthorized access.
          </p>
        </Section>

        <Section title="4. Profile Claims and Content">
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Each user may claim at most one profile.</li>
            <li>Each profile may be claimed by at most one user.</li>
            <li>
              Profile owners may edit the human-readable content of their
              profile. All edits must be truthful and not misleading.
            </li>
            <li>
              We reserve the right to remove or revert content that is
              inaccurate, defamatory, or violates these Terms.
            </li>
          </ul>
        </Section>

        <Section title="5. Acceptable Use">
          <p>You agree not to:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              Claim a profile that does not belong to you or impersonate another
              person.
            </li>
            <li>
              Use the Service to harass, defame, or infringe on the rights of
              others.
            </li>
            <li>
              Attempt to circumvent security measures, including row-level
              security policies.
            </li>
            <li>
              Scrape, crawl, or bulk-download content in a manner that degrades
              the Service.
            </li>
          </ul>
        </Section>

        <Section title="6. Intellectual Property">
          Profile content is compiled from publicly available sources and
          attributed accordingly. Profile owners retain rights to their own
          biographical information. The Service&apos;s code, design, and
          branding are the property of Agentapedia.
        </Section>

        <Section title="7. Disclaimers">
          The Service is provided &quot;as is&quot; without warranties of any
          kind. We do not guarantee the accuracy, completeness, or timeliness of
          profile information. Use the information at your own risk.
        </Section>

        <Section title="8. Limitation of Liability">
          To the maximum extent permitted by law, Agentapedia shall not be
          liable for any indirect, incidental, special, or consequential damages
          arising from your use of the Service.
        </Section>

        <Section title="9. Changes to Terms">
          We may update these Terms at any time. Continued use of the Service
          after changes constitutes acceptance of the revised Terms.
        </Section>

        <Section title="10. Contact">
          For questions about these Terms, contact us at{" "}
          <a
            href="mailto:zane@agentapedia.com"
            className="text-link hover:underline"
          >
            zane@agentapedia.com
          </a>
          .
        </Section>
      </main>

      <footer className="border-t border-border mt-12">
        <div className="max-w-3xl mx-auto px-6 py-6 flex gap-4">
          <Link
            href="/privacy"
            className="font-sans text-xs text-muted hover:text-link transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/"
            className="font-sans text-xs text-muted hover:text-link transition-colors"
          >
            Home
          </Link>
        </div>
      </footer>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8">
      <h2 className="font-sans text-sm font-semibold mb-3">{title}</h2>
      <div className="text-[0.9375rem] leading-relaxed">{children}</div>
    </section>
  );
}
