import { NextResponse } from "next/server";
import { JCCH_REPORT_DEFAULT_DAYS, buildJcchReport } from "@/lib/jcch-report";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const raw = searchParams.get("days");
    const days = raw ? Number(raw) : JCCH_REPORT_DEFAULT_DAYS;

    if (!Number.isFinite(days) || days < 1 || days > 30) {
      return NextResponse.json(
        { error: "days must be a number between 1 and 30." },
        { status: 400 },
      );
    }

    const report = await buildJcchReport(days);
    return NextResponse.json(report);
  } catch {
    return NextResponse.json(
      { error: "Failed to build JC Cadenza Hub report." },
      { status: 500 },
    );
  }
}
