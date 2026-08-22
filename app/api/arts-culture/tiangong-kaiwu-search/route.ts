import { NextResponse } from "next/server";
import {
  TIANGONG_SEARCH_DEFAULT_DAYS,
  buildTiangongKaiwuSearch,
} from "@/lib/tiangong-kaiwu-search";

export const dynamic = "force-dynamic";
export const maxDuration = 120;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const raw = searchParams.get("days");
    const days = raw ? Number(raw) : TIANGONG_SEARCH_DEFAULT_DAYS;

    if (!Number.isFinite(days) || days < 7 || days > 90) {
      return NextResponse.json(
        { error: "days must be a number between 7 and 90." },
        { status: 400 },
      );
    }

    const report = await buildTiangongKaiwuSearch(days);
    return NextResponse.json(report);
  } catch {
    return NextResponse.json(
      { error: "Failed to search for 天工開物." },
      { status: 500 },
    );
  }
}
