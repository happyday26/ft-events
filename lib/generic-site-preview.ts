import { stripHtml, type SiteSnapshot } from "./site-snapshot";

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

/** Lightweight title / meta / heading snapshot when a site blocks iframes. */
export async function fetchGenericSitePreview(
  sourceUrl: string,
  heading: string,
  limit = 16,
): Promise<SiteSnapshot | null> {
  try {
    const response = await fetch(`${sourceUrl}${sourceUrl.includes("?") ? "&" : "?"}r=${Date.now()}`, {
      cache: "no-store",
      headers: {
        Accept: "text/html",
        "User-Agent": UA,
      },
    });
    if (!response.ok) return null;

    const html = await response.text();
    const items: SiteSnapshot["items"] = [];

    const metaDesc =
      html.match(
        /<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i,
      )?.[1] ||
      html.match(
        /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["']/i,
      )?.[1] ||
      "";

    const pageTitle = stripHtml(
      html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "",
    );

    if (pageTitle) {
      items.push({
        title: pageTitle.slice(0, 120),
        summary: stripHtml(metaDesc).slice(0, 160),
      });
    }

    const headingRegex = /<h[123][^>]*>([\s\S]*?)<\/h[123]>/gi;
    let match: RegExpExecArray | null;
    while ((match = headingRegex.exec(html)) !== null && items.length < limit) {
      const title = stripHtml(match[1]);
      if (title.length < 3 || title.length > 140) continue;
      if (items.some((item) => item.title === title)) continue;
      items.push({ title, summary: "" });
    }

    if (items.length === 0) return null;

    return { heading, items, sourceUrl };
  } catch {
    return null;
  }
}
