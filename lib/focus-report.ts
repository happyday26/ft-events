import { fetchFocusTopics } from "@/lib/focus-news";
import type { FinanceNewsItem } from "@/lib/finance-news";

export interface FocusStory {
  id: string;
  title: string;
  body: string;
  sourceLabel: string;
  sourceHref: string;
}

export interface FocusBriefing {
  id: string;
  topic: string;
  lang?: string;
  updatedAt: string;
  lede: string;
  stories: FocusStory[];
  sourceLabel: string;
  sourceHref: string;
}

function formatUpdatedAt(
  items: FinanceNewsItem[],
  lang?: string,
): string {
  const newest = items.find((item) => item.publishedAt)?.publishedAt;
  const date = newest ? new Date(newest) : new Date();
  const safe = Number.isNaN(date.getTime()) ? new Date() : date;

  if (lang === "zh-Hant") {
    return safe.toLocaleDateString("zh-Hant-HK", {
      timeZone: "Asia/Hong_Kong",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return safe.toLocaleDateString("en-GB", {
    timeZone: "Asia/Hong_Kong",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function buildLede(items: FinanceNewsItem[], lang?: string): string {
  if (items.length === 0) {
    return lang === "zh-Hant"
      ? "今日來源暫無新稿，稍後再刷新。"
      : "No fresh stories in the feed yet — try refreshing shortly.";
  }

  const titles = items.map((item) => item.title.replace(/\s+/g, " ").trim());
  if (lang === "zh-Hant") {
    return `${titles.join("；")}。`;
  }
  return `${titles.join("; ")}.`;
}

function storyId(topicId: string, item: FinanceNewsItem, index: number): string {
  try {
    const path = new URL(item.link).pathname.replace(/\/+/g, "-").replace(/^-|-$/g, "");
    return `${topicId}-${path || index + 1}`.slice(0, 80);
  } catch {
    return `${topicId}-${index + 1}`;
  }
}

function storyBody(item: FinanceNewsItem, lang?: string): string {
  const summary = item.summary.replace(/\s+/g, " ").trim();
  if (summary) return summary;
  return lang === "zh-Hant" ? "詳見原文。" : "Open the source for the full report.";
}

/** Live Focus briefings — refreshed from topic RSS on every request. */
export async function fetchFocusBriefings(
  limit = 5,
): Promise<FocusBriefing[]> {
  const topics = await fetchFocusTopics(limit);

  return topics.map((topic) => ({
    id: topic.id,
    topic: topic.topic,
    lang: topic.lang,
    updatedAt: formatUpdatedAt(topic.items, topic.lang),
    lede: buildLede(topic.items, topic.lang),
    sourceLabel: topic.sourceLabel,
    sourceHref: topic.sourceHref,
    stories: topic.items.map((item, index) => ({
      id: storyId(topic.id, item, index),
      title: item.title.replace(/\s+/g, " ").trim(),
      body: storyBody(item, topic.lang),
      sourceLabel: item.source || topic.sourceLabel,
      sourceHref: item.link,
    })),
  }));
}
