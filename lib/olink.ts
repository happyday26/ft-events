import { stripHtml, type SiteSnapshot } from "./site-snapshot";

const SOURCE_URL = "https://olink.e123.hk/zh-hant/epartner/57/feed/3440";

/** Compact newsletter preview (olink blocks iframes). */
export async function fetchOlinkFeedPreview(
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
    const article = html.match(/<article[\s\S]*?<\/article>/i)?.[0] || html;
    const heading =
      stripHtml(
        article.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ||
          html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.split("|")[0] ||
          "",
      ) || "傲齡匯通訊";

    const lines = [...article.matchAll(/>([^<]{6,})</g)]
      .map((m) => m[1].replace(/\s+/g, " ").trim())
      .filter(
        (line) =>
          /[\u4e00-\u9fff]/.test(line) &&
          !/讚好|分享|收藏|已複製|Breadcrumb|聊天室/.test(line) &&
          line !== heading,
      );

    const items = lines.slice(0, limit).map((line) => ({
      title: line.slice(0, 80),
      summary: "",
    }));

    if (items.length === 0) return null;

    return {
      heading,
      items,
      sourceUrl: SOURCE_URL,
    };
  } catch {
    return null;
  }
}
