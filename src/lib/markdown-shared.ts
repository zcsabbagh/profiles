import { marked } from "marked";

export function renderMarkdownToHtml(markdown: string): string {
  const rendered = marked.parse(markdown, { async: false });
  return typeof rendered === "string" ? rendered : String(rendered);
}

export function extractReferencesFromMarkdown(markdown: string): Array<{ title: string; url: string }> {
  const refs = new Map<string, string>();
  const markdownLinkRegex = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;
  const htmlLinkRegex = /<a\s+[^>]*href=["'](https?:\/\/[^"']+)["'][^>]*>(.*?)<\/a>/gi;

  let match: RegExpExecArray | null = null;
  while ((match = markdownLinkRegex.exec(markdown)) !== null) {
    const [, title, url] = match;
    if (!refs.has(url)) refs.set(url, title.trim() || url);
  }

  while ((match = htmlLinkRegex.exec(markdown)) !== null) {
    const [, url, title] = match;
    const cleanTitle = title.replace(/<[^>]+>/g, "").trim();
    if (!refs.has(url)) refs.set(url, cleanTitle || url);
  }

  return [...refs.entries()].map(([url, title]) => ({ title, url }));
}
