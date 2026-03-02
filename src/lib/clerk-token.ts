type ClerkGetToken = (options?: { template?: string }) => Promise<string | null>;

export async function getSupabaseAccessToken(getToken: ClerkGetToken): Promise<string | null> {
  const configuredTemplate = process.env.CLERK_SUPABASE_JWT_TEMPLATE;
  const templates = [
    undefined,
    configuredTemplate || undefined,
    "supabase",
  ].filter((value, index, arr) => arr.indexOf(value) === index);

  for (const template of templates) {
    try {
      const token = template ? await getToken({ template }) : await getToken();
      if (token) return token;
    } catch {
      // Continue trying alternatives.
    }
  }

  return null;
}
