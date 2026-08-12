import { stripHtml, type SiteSnapshot } from "./site-snapshot";

const SOURCE_URL = "https://healthyu.com.hk/events/";

/** Compact event list for Golden Life preview (site blocks iframes). */
export async function fetchHealthyUPreview(
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

    const blockRegex =
      /<h1[^>]*>[\s\S]*?<span[^>]*>([\s\S]*?)<\/span>[\s\S]*?<\/h1>\s*<h3[^>]*>([\s\S]*?)<\/h3>/gi;
    let match: RegExpExecArray | null;

    while ((match = blockRegex.exec(html)) !== null && items.length < limit) {
      const title = stripHtml(match[1]);
      const summary = stripHtml(match[2]);
      if (title.length < 4) continue;
      items.push({
        title: title.replace(/[）)]\s*$/, ")").trim(),
        summary: summary.slice(0, 120),
      });
    }

    if (items.length === 0) {
      const titleRegex =
        /<h1[^>]*>[\s\S]*?<span[^>]*color:\s*#800080[^>]*>([\s\S]*?)<\/span>[\s\S]*?<\/h1>/gi;
      while (
        (match = titleRegex.exec(html)) !== null &&
        items.length < limit
      ) {
        const title = stripHtml(match[1]);
        if (title.length < 4) continue;
        items.push({ title, summary: "" });
      }
    }

    if (items.length === 0) return null;

    return {
      heading: "健康大學堂講座 / 活動",
      items,
      sourceUrl: SOURCE_URL,
    };
  } catch {
    return null;
  }
}
