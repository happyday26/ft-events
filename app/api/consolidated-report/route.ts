import { NextResponse } from "next/server";
import {
  CONSOLIDATED_REPORT_DEFAULT_DAYS,
  buildConsolidatedReport,
  type ConsolidatedReportScope,
} from "@/lib/consolidated-report";
import {
  isPropertyFilterMode,
  type PropertyFilterMode,
} from "@/lib/consolidated-report-types";

export const dynamic = "force-dynamic";
export const maxDuration = 180;

const SCOPES = new Set<ConsolidatedReportScope>([
  "property",
  "performance",
  "golden-life",
  "all",
]);

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const raw = searchParams.get("days");
    const days = raw ? Number(raw) : CONSOLIDATED_REPORT_DEFAULT_DAYS;
    const scopeParam = searchParams.get("scope") || "all";
    const propertyFilterParam = searchParams.get("propertyFilter");

    if (!Number.isFinite(days) || days < 1 || days > 30) {
      return NextResponse.json(
        { error: "days must be a number between 1 and 30." },
        { status: 400 },
      );
    }

    if (!SCOPES.has(scopeParam as ConsolidatedReportScope)) {
      return NextResponse.json(
        {
          error:
            "scope must be property, performance, golden-life, or all.",
        },
        { status: 400 },
      );
    }

    let propertyFilter: PropertyFilterMode = "exclude-2bed-be";
    if (propertyFilterParam != null) {
      if (!isPropertyFilterMode(propertyFilterParam)) {
        return NextResponse.json(
          {
            error:
              "propertyFilter must be all, exclude-2bed, or exclude-2bed-be.",
          },
          { status: 400 },
        );
      }
      propertyFilter = propertyFilterParam;
    }

    const report = await buildConsolidatedReport(
      days,
      scopeParam as ConsolidatedReportScope,
      propertyFilter,
    );
    return NextResponse.json(report);
  } catch {
    return NextResponse.json(
      { error: "Failed to build consolidated report." },
      { status: 500 },
    );
  }
}
