import { stripHtml, type SiteSnapshot } from "./site-snapshot";

const SOURCE_URL = "https://www.e123.hk/zh-hant/health/physical";

/** Compact article list for Golden Life preview (site blocks iframes). */
export async function fetchE123PhysicalPreview(
  limit = 4,
): Promise<SiteSnapshot | null> {
  try {
    const response = await fetch(`${SOURCE_URL}?r=${Date.now()}`, {
      cache: "no-store",
      headers: {
        Accept: "text/html",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });
    if (!response.ok) return null;

    const html = await response.text();
    const items: SiteSnapshot["items"] = [];
    const rowRegex =
      /class="views-row"[\s\S]*?e123-box-title[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>[\s\S]*?views-field-field-description[\s\S]*?<span[^>]*>([\s\S]*?)<\/span>/gi;
    let match: RegExpExecArray | null;

    while ((match = rowRegex.exec(html)) !== null && items.length < limit) {
      const title = stripHtml(match[1]);
      const summary = stripHtml(match[2]);
      if (title.length < 4) continue;
      items.push({
        title,
        summary: summary.slice(0, 120),
      });
    }

    if (items.length === 0) return null;

    return {
      heading: "健康運動",
      items,
      sourceUrl: SOURCE_URL,
    };
  } catch {
    return null;
  }
}
