import { NextResponse } from "next/server";
import { addFeed, loadFeeds } from "@/lib/feeds";
import { normalizeFeedInput, validateFeedInput } from "@/lib/validate-feed";
import type { NewRssFeedInput } from "@/lib/types";

export async function GET() {
  const feeds = await loadFeeds();
  return NextResponse.json(feeds);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<NewRssFeedInput>;
    const error = validateFeedInput(body);

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    const feed = await addFeed(normalizeFeedInput(body));
    return NextResponse.json(feed, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create RSS feed." }, { status: 500 });
  }
}
