import { NextResponse } from "next/server";
import { fetchGenericSitePreview } from "@/lib/generic-site-preview";

export const dynamic = "force-dynamic";
export const maxDuration = 15;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get("url");
    const label = searchParams.get("label") || "Preview";
    const limitRaw = Number(searchParams.get("limit") || "16");
    const limit = Number.isFinite(limitRaw)
      ? Math.min(40, Math.max(1, Math.floor(limitRaw)))
      : 16;

    if (!url || !/^https?:\/\//i.test(url)) {
      return NextResponse.json(
        { error: "url must be an absolute http(s) URL." },
        { status: 400 },
      );
    }

    const snapshot = await fetchGenericSitePreview(url, label, limit);
    return NextResponse.json({ snapshot });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch site preview." },
      { status: 500 },
    );
  }
}
