export interface FinanceNewsItem {
  id: string;
  title: string;
  link: string;
  summary: string;
  publishedAt: string | null;
  source: string;
}

const FT_MARKETS_RSS = "https://www.ft.com/markets?format=rss";
const WSJ_MARKETS_RSS =
  "https://feeds.content.dowjones.io/public/rss/RSSMarketsMain";
const HKET_FINANCE_RSS = "https://www.hket.com/rss/finance";
const HKEJ_INSTANT = "https://www2.hkej.com/instantnews";

const BROWSER_UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

/** Strip tracking/syndication query params for cleaner article links. */
export function cleanArticleUrl(raw: string): string {
  try {
    const url = new URL(raw);
    const host = url.hostname.replace(/^www\./, "");

    if (
      host.endsWith("ft.com") ||
      host.endsWith("wsj.com") ||
      host.endsWith("dj.com") ||
      host.endsWith("hket.com") ||
      host.endsWith("hkej.com")
    ) {
      url.search = "";
      url.hash = "";
    }

    return url.toString();
  } catch {
    return raw;
  }
}

function stripCdata(value: string): string {
  return value
    .replace(/^<!\[CDATA\[/, "")
    .replace(/\]\]>$/, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function extractTag(block: string, tag: string): string {
  const pattern = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i");
  const match = block.match(pattern);
  return match ? stripCdata(match[1]) : "";
}

function parseRssItems(
  xml: string,
  limit: number,
  source: string,
): FinanceNewsItem[] {
  const items: FinanceNewsItem[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/gi;
  let match: RegExpExecArray | null;

  while ((match = itemRegex.exec(xml)) !== null) {
    const block = match[1];
    const title = extractTag(block, "title");
    const rawLink = extractTag(block, "link");
    if (!title || !rawLink) continue;

    const link = cleanArticleUrl(rawLink);
    const summary =
      extractTag(block, "description") ||
      extractTag(block, "content:encoded") ||
      "";
    const publishedAt = extractTag(block, "pubDate") || null;

    items.push({
      id: `${source}-${items.length + 1}-${link}`,
      title,
      link,
      summary: summary.slice(0, 180),
      publishedAt,
      source,
    });
  }

  return items
    .sort((a, b) => {
      const aTime = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
      const bTime = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
      return bTime - aTime;
    })
    .slice(0, limit);
}

function decodeHtmlEntities(value: string): string {
  return value
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex: string) =>
      String.fromCodePoint(Number.parseInt(hex, 16)),
    )
    .replace(/&#(\d+);/g, (_, num: string) =>
      String.fromCodePoint(Number.parseInt(num, 10)),
    )
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function titleFromSlug(href: string): string {
  try {
    const slug = decodeURIComponent(
      (new URL(href).pathname.split("/").pop() || "").replace(/\+/g, " "),
    );
    return slug.replace(/[-_]+/g, " ").trim();
  } catch {
    return "";
  }
}

function parseHkejInstantItems(html: string, limit: number): FinanceNewsItem[] {
  const items: FinanceNewsItem[] = [];
  const seen = new Set<string>();
  const linkRegex =
    /href="([^"]*\/(?:instantnews|dailynews)\/[^"]*article\/\d+[^"]*)"[^>]*>([\s\S]*?)<\/a>/gi;
  let match: RegExpExecArray | null;

  while ((match = linkRegex.exec(html)) !== null && items.length < limit) {
    let link: string;
    try {
      link = cleanArticleUrl(
        new URL(match[1], "https://www2.hkej.com").toString(),
      );
    } catch {
      continue;
    }

    const articleId = link.match(/\/article\/(\d+)/)?.[1];
    if (!articleId || seen.has(articleId)) continue;

    let title = decodeHtmlEntities(
      match[2]
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim(),
    );
    if (title.length < 4) title = titleFromSlug(link);
    if (title.length < 4) continue;

    seen.add(articleId);
    items.push({
      id: `HKEJ-${articleId}`,
      title,
      link,
      summary: "",
      publishedAt: null,
      source: "HKEJ",
    });
  }

  return items;
}

async function fetchRssNews(
  feedUrl: string,
  source: string,
  limit: number,
): Promise<FinanceNewsItem[]> {
  try {
    const separator = feedUrl.includes("?") ? "&" : "?";
    const response = await fetch(`${feedUrl}${separator}r=${Date.now()}`, {
      cache: "no-store",
      headers: {
        Accept: "application/rss+xml, application/xml, text/xml, text/html",
        "User-Agent": BROWSER_UA,
      },
    });

    if (!response.ok) return [];

    const xml = await response.text();
    return parseRssItems(xml, limit, source);
  } catch {
    return [];
  }
}

async function fetchHtml(
  url: string,
): Promise<string | null> {
  try {
    const response = await fetch(`${url}${url.includes("?") ? "&" : "?"}r=${Date.now()}`, {
      cache: "no-store",
      headers: {
        Accept: "text/html,application/xhtml+xml",
        "User-Agent": BROWSER_UA,
      },
    });
    if (!response.ok) return null;
    return response.text();
  } catch {
    return null;
  }
}

export async function fetchTopFinanceNews(
  limit = 5,
): Promise<FinanceNewsItem[]> {
  return fetchRssNews(FT_MARKETS_RSS, "Financial Times", limit);
}

export async function fetchTopWsjNews(limit = 5): Promise<FinanceNewsItem[]> {
  return fetchRssNews(WSJ_MARKETS_RSS, "Wall Street Journal", limit);
}

/** HKET finance RSS — show whatever the feed returns (often fewer than 5). */
export async function fetchTopHketNews(limit = 5): Promise<FinanceNewsItem[]> {
  return fetchRssNews(HKET_FINANCE_RSS, "HKET", limit);
}

/** Top HKEJ headlines (landing is JS-heavy; instantnews has the article list). */
export async function fetchTopHkejNews(limit = 5): Promise<FinanceNewsItem[]> {
  const html = await fetchHtml(HKEJ_INSTANT);
  if (!html) return [];
  return parseHkejInstantItems(html, limit);
}

export function formatNewsTime(publishedAt: string | null): string {
  if (!publishedAt) return "";
  const date = new Date(publishedAt);
  if (Number.isNaN(date.getTime())) return "";

  return date.toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}
