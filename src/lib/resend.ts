import { Resend } from "resend";

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
      <p>Hi ${params.verifierName},</p>
      <p>You were requested as a verifier for content on Agentapedia.</p>
      ${params.sectionLabel ? `<p><strong>Section:</strong> ${params.sectionLabel}</p>` : ""}
      <p><strong>Snippet:</strong></p>
      <blockquote>${params.snippet}</blockquote>
      <p>Profile URL: <a href="${params.profileUrl}">${params.profileUrl}</a></p>
      <p>Please reply to this email with confirmation or corrections.</p>
    `,
  });
}
