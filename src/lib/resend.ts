import { Resend } from "resend";
import { escapeHtml } from "@/lib/sanitize";

function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

export async function sendVerifierRequestEmail(params: {
  to: string;
  verifierName: string;
  slug: string;
  snippet: string;
  sectionLabel?: string;
  profileUrl: string;
}) {
  const resend = getResendClient();
  if (!resend) return;

  const from = process.env.RESEND_FROM ?? "Agentapedia <onboarding@resend.dev>";

  await resend.emails.send({
    from,
    to: params.to,
    subject: `Verification requested for ${params.slug.replaceAll("_", " ")}`,
    html: `
      <p>Hi ${escapeHtml(params.verifierName)},</p>
      <p>You were requested as a verifier for content on Agentapedia.</p>
      ${params.sectionLabel ? `<p><strong>Section:</strong> ${escapeHtml(params.sectionLabel)}</p>` : ""}
      <p><strong>Snippet:</strong></p>
      <blockquote>${escapeHtml(params.snippet)}</blockquote>
      <p>Profile URL: <a href="${escapeHtml(params.profileUrl)}">${escapeHtml(params.profileUrl)}</a></p>
      <p>Please reply to this email with confirmation or corrections.</p>
    `,
  });
}
