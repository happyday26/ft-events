import { promises as fs } from "fs";
import path from "path";
import {
  buildFeedId,
  resolveFeedWebsite,
  type NewRssFeedInput,
  type RssFeed,
} from "./types";
import { isHobbyKey } from "./hobbies";

const DATA_DIR = path.join(process.cwd(), "data");
const FEEDS_FILE = path.join(DATA_DIR, "feeds.json");

async function ensureDataFile(): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });

  try {
    await fs.access(FEEDS_FILE);
  } catch {
    await fs.writeFile(FEEDS_FILE, "[]", "utf-8");
  }
}

export async function loadFeeds(): Promise<RssFeed[]> {
  await ensureDataFile();
  const raw = await fs.readFile(FEEDS_FILE, "utf-8");
  const parsed = JSON.parse(raw) as RssFeed[];

  return parsed
    .filter(
      (feed) =>
        feed.id &&
        feed.url &&
        feed.description &&
        isHobbyKey(feed.category),
    )
    .map((feed) => ({
      ...feed,
      website: resolveFeedWebsite(feed.url, feed.website),
    }));
}

async function saveFeeds(feeds: RssFeed[]): Promise<void> {
  await ensureDataFile();
  await fs.writeFile(FEEDS_FILE, JSON.stringify(feeds, null, 2), "utf-8");
}

export async function addFeed(input: NewRssFeedInput): Promise<RssFeed> {
  const feeds = await loadFeeds();
  const id = buildFeedId(
    input.url,
    feeds.map((feed) => feed.id),
  );

  const newFeed: RssFeed = { id, ...input };
  feeds.push(newFeed);
  await saveFeeds(feeds);
  return newFeed;
}

export async function updateFeed(
  id: string,
  input: NewRssFeedInput,
): Promise<RssFeed | null> {
  const feeds = await loadFeeds();
  const index = feeds.findIndex((feed) => feed.id === id);

  if (index === -1) return null;

  const updated: RssFeed = { id, ...input };
  feeds[index] = updated;
  await saveFeeds(feeds);
  return updated;
}

export async function deleteFeed(id: string): Promise<boolean> {
  const feeds = await loadFeeds();
  const next = feeds.filter((feed) => feed.id !== id);

  if (next.length === feeds.length) return false;

  await saveFeeds(next);
  return true;
}
