import { NextResponse } from "next/server";
import {
  isPropertyFilterMode,
  type PropertyFilterMode,
} from "@/lib/consolidated-report-types";
import {
  PROPERTY_DAY_COMPARE_DEFAULT_DAYS,
  PROPERTY_DAY_COMPARE_DEFAULT_FILTER,
  findLatestCompareHtml,
  findLatestCompareMarkdown,
  openLocalFile,
  runPropertyDayCompare,
} from "@/lib/property-day-compare";

export const dynamic = "force-dynamic";
export const maxDuration = 180;

/** View the latest compare report in the browser (same table layout as search). */
export async function GET() {
  try {
    const latestHtml = await findLatestCompareHtml();
    if (latestHtml) {
      return new NextResponse(latestHtml.content, {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "no-store",
          "X-Compare-Path": latestHtml.path,
        },
      });
    }
    const latestMd = await findLatestCompareMarkdown();
    if (!latestMd) {
      return NextResponse.json(
        {
          error:
            "No compare file yet. Click “Compare & open report” on Home first.",
        },
        { status: 404 },
      );
    }
    return new NextResponse(latestMd.content, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
        "X-Compare-Path": latestMd.path,
      },
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to read compare file.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    let days = PROPERTY_DAY_COMPARE_DEFAULT_DAYS;
    let propertyFilter: PropertyFilterMode =
      PROPERTY_DAY_COMPARE_DEFAULT_FILTER;
    const open = searchParams.get("open") !== "0";

    const daysParam = searchParams.get("days");
    if (daysParam != null) {
      const n = Number(daysParam);
      if (!Number.isFinite(n) || n < 2 || n > 30) {
        return NextResponse.json(
          { error: "days must be a number between 2 and 30." },
          { status: 400 },
        );
      }
      days = Math.floor(n);
    }

    const filterParam = searchParams.get("propertyFilter");
    if (filterParam != null) {
      if (!isPropertyFilterMode(filterParam)) {
        return NextResponse.json(
          {
            error:
              "propertyFilter must be all, exclude-2bed, or exclude-2bed-be.",
          },
          { status: 400 },
        );
      }
      propertyFilter = filterParam;
    }

    const result = await runPropertyDayCompare({
      days,
      propertyFilter,
      open,
    });

    if (open && !result.openedPath) {
      const latest =
        (await findLatestCompareHtml(result.outDir)) ||
        (await findLatestCompareMarkdown(result.outDir));
      if (latest) {
        await openLocalFile(latest.path);
        result.openedPath = latest.path;
      }
    }

    return NextResponse.json(result);
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to run day compare.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
