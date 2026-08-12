export interface SiteSnapshotItem {
  title: string;
  summary: string;
}

export interface SiteSnapshot {
  heading: string;
  items: SiteSnapshotItem[];
  sourceUrl: string;
}

export function stripHtml(value: string): string {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}
