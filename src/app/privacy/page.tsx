import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Agentapedia",
  description: "Privacy Policy for Agentapedia.",
};

export default function PrivacyPage() {
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
          <p className="font-sans text-sm text-muted mt-1">Privacy Policy</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-8 prose-custom">
        <h1 className="font-sans text-xl font-bold mb-1">Privacy Policy</h1>
        <p className="text-xs text-muted mb-8">Effective: March 1, 2026</p>

        <Section title="1. Introduction">
          Agentapedia (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates
          agentapedia.com. This Privacy Policy explains what information we
          collect, how we use it, and your choices regarding your data.
        </Section>

        <Section title="2. Information We Collect">
          <h3 className="font-sans text-sm font-medium mt-4 mb-2">
            2a. Information you provide
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Account data:</strong> When you sign in via Google or
              another provider, we receive your name, email address, and profile
              photo from the authentication provider.
            </li>
            <li>
              <strong>Profile content:</strong> If you claim and edit a profile,
              we store the content you submit.
            </li>
            <li>
              <strong>Verification data:</strong> If you verify your identity via
              GitHub or LinkedIn, we store the verification status and public
              profile information.
            </li>
          </ul>

          <h3 className="font-sans text-sm font-medium mt-4 mb-2">
            2b. Information collected automatically
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Usage data:</strong> Standard web server logs (IP address,
              browser type, pages visited, timestamps).
            </li>
          </ul>

          <h3 className="font-sans text-sm font-medium mt-4 mb-2">
            2c. Google OAuth scopes
          </h3>
          <p>
            When you sign in with Google, we request the following permissions:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>email</strong> — To identify your account and communicate
              with you.
            </li>
            <li>
              <strong>profile</strong> — To display your name and photo on your
              claimed profile.
            </li>
            <li>
              <strong>openid</strong> — To securely authenticate your identity.
            </li>
            <li>
              <strong>contacts.readonly</strong> — To help you discover
              connections who also have Agentapedia profiles. Contact data is
              processed transiently and is <strong>not</strong> stored on our
              servers.
            </li>
          </ul>
          <p className="mt-3">
            You may revoke any of these permissions at any time from your{" "}
            <a
              href="https://myaccount.google.com/permissions"
              className="text-link hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Account permissions page
            </a>
            .
          </p>
        </Section>

        <Section title="3. How We Use Your Information">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Authentication:</strong> To verify your identity and manage
              your session.
            </li>
            <li>
              <strong>Profile management:</strong> To let you claim, edit, and
              verify your profile.
            </li>
            <li>
              <strong>Connection discovery:</strong> To match your contacts
              against existing profiles (processed in-memory, not persisted).
            </li>
            <li>
              <strong>Service improvement:</strong> To monitor usage patterns and
              improve the Service.
            </li>
            <li>
              <strong>Communication:</strong> To send you service-related emails
              (e.g., verification confirmations).
            </li>
          </ul>
        </Section>

        <Section title="4. Data Storage and Security">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Account and profile data is stored in Supabase (PostgreSQL) with
              row-level security policies enforcing access control.
            </li>
            <li>
              Authentication is managed by Clerk, which handles credential
              storage and session management.
            </li>
            <li>
              All data is transmitted over HTTPS. We do not sell your data to
              third parties.
            </li>
          </ul>
        </Section>

        <Section title="5. Data Sharing">
          <p>We share your information only in these circumstances:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>Public profile data:</strong> Your name, role, and profile
              content are publicly visible by design.
            </li>
            <li>
              <strong>Service providers:</strong> Clerk (authentication),
              Supabase (database), and Vercel (hosting) process data on our
              behalf.
            </li>
            <li>
              <strong>Legal requirements:</strong> If required by law or to
              protect rights and safety.
            </li>
          </ul>
        </Section>

        <Section title="6. Data Retention">
          We retain your account data for as long as your account is active. If
          you delete your account, we will remove your personal data within 30
          days, except where retention is required by law.
        </Section>

        <Section title="7. Your Rights">
          <p>You may:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>Access</strong> your data by signing in and viewing your
              profile.
            </li>
            <li>
              <strong>Edit</strong> your profile content at any time.
            </li>
            <li>
              <strong>Delete</strong> your account by contacting us.
            </li>
            <li>
              <strong>Revoke</strong> third-party permissions via your Google
              Account settings.
            </li>
          </ul>
        </Section>

        <Section title="8. Children's Privacy">
          The Service is not directed to children under 13. We do not knowingly
          collect personal information from children under 13.
        </Section>

        <Section title="9. Changes to This Policy">
          We may update this Privacy Policy from time to time. We will notify
          you of material changes by posting the updated policy with a new
          effective date.
        </Section>

        <Section title="10. Contact">
          For questions about this Privacy Policy or to exercise your data
          rights, contact us at{" "}
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
            href="/terms"
            className="font-sans text-xs text-muted hover:text-link transition-colors"
          >
            Terms of Service
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
