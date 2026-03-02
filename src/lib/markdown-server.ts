import TurndownService from "turndown";

const turndown = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
});

export function toEditableMarkdown(rawContent: string): string {
  const value = rawContent.trim();
  const looksLikeHtml = /<[a-z][\s\S]*>/i.test(value);
  if (!looksLikeHtml) return rawContent;

  try {
    return turndown.turndown(rawContent).trim();
  } catch {
    return rawContent;
  }
}
