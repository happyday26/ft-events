import { NextResponse } from "next/server";
import {
  HARBOURSIDE_REPORT_DEFAULT_DAYS,
  buildHarboursideReport,
} from "@/lib/harbourside-report";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const raw = searchParams.get("days");
    const days = raw
      ? Number(raw)
      : HARBOURSIDE_REPORT_DEFAULT_DAYS;

    if (!Number.isFinite(days) || days < 1 || days > 30) {
      return NextResponse.json(
        { error: "days must be a number between 1 and 30." },
        { status: 400 },
      );
    }

    const report = await buildHarboursideReport(days);
    return NextResponse.json(report);
  } catch {
    return NextResponse.json(
      { error: "Failed to build Harbourside report." },
      { status: 500 },
    );
  }
}
