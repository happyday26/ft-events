import { NextResponse } from "next/server";
import {
  URBTIX_UPCOMING_DEFAULT_DAYS,
  buildUrbtixUpcomingReport,
} from "@/lib/urbtix-upcoming-report";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const raw = searchParams.get("days");
    const days = raw ? Number(raw) : URBTIX_UPCOMING_DEFAULT_DAYS;

    if (!Number.isFinite(days) || days < 1 || days > 14) {
      return NextResponse.json(
        { error: "days must be a number between 1 and 14." },
        { status: 400 },
      );
    }

    const report = await buildUrbtixUpcomingReport(days);
    return NextResponse.json(report);
  } catch {
    return NextResponse.json(
      { error: "Failed to build URBTIX upcoming report." },
      { status: 500 },
    );
  }
}
