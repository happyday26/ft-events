import { NextResponse } from "next/server";
import { deleteFeed, updateFeed } from "@/lib/feeds";
import { normalizeFeedInput, validateFeedInput } from "@/lib/validate-feed";
import type { NewRssFeedInput } from "@/lib/types";

type RouteContext = { params: Promise<{ id: string }> };

export async function PUT(request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const body = (await request.json()) as Partial<NewRssFeedInput>;
    const error = validateFeedInput(body);

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    const updated = await updateFeed(id, normalizeFeedInput(body));

    if (!updated) {
      return NextResponse.json({ error: "RSS feed not found." }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: "Failed to update RSS feed." }, { status: 500 });
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const removed = await deleteFeed(id);

    if (!removed) {
      return NextResponse.json({ error: "RSS feed not found." }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete RSS feed." }, { status: 500 });
  }
}
