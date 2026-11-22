import "server-only";

import { buildArtMateReport } from "@/lib/art-mate-report";
import {
  HARBOURSIDE_ESTATE,
  SORRENTO_ESTATE,
  VILLAGE_GARDENS_ESTATE,
  applyPropertyFilterMode,
  buildEstateListingReport,
  sinceDateForDays,
} from "@/lib/estate-listing-report";
import { buildHappyRetiredReport } from "@/lib/happy-retired-report";
import { buildJcchReport } from "@/lib/jcch-report";
import { buildPopticketReport } from "@/lib/popticket-report";
import { buildUrbtixReport } from "@/lib/urbtix-report";
import {
  CONSOLIDATED_REPORT_DEFAULT_DAYS,
  CONSOLIDATED_SECTIONS,
  propertyFilterModeLabel,
  propertyFilterModeSummary,
  type ConsolidatedReport,
  type ConsolidatedReportScope,
  type ConsolidatedSectionKey,
  type PropertyFilterMode,
} from "@/lib/consolidated-report-types";

export {
  CONSOLIDATED_REPORT_DEFAULT_DAYS,
  CONSOLIDATED_SECTIONS,
  type ConsolidatedReport,
  type ConsolidatedReportScope,
  type ConsolidatedSectionKey,
  type ConsolidatedSectionMeta,
} from "@/lib/consolidated-report-types";

function reasonMessage(reason: unknown): string {
  if (reason instanceof Error) return reason.message;
  return String(reason);
}

function includesScope(
  requested: ConsolidatedReportScope,
  target: Exclude<ConsolidatedReportScope, "all">,
): boolean {
  return requested === "all" || requested === target;
}

export async function buildConsolidatedReport(
  days = CONSOLIDATED_REPORT_DEFAULT_DAYS,
  scope: ConsolidatedReportScope = "all",
  propertyFilter: PropertyFilterMode = "exclude-2bed-be",
): Promise<ConsolidatedReport> {
  const safeDays = Number.isFinite(days)
    ? Math.min(30, Math.max(1, Math.floor(days)))
    : CONSOLIDATED_REPORT_DEFAULT_DAYS;
  const { since, until } = sinceDateForDays(safeDays);

  const runProperty = includesScope(scope, "property");
  const runPerformance = includesScope(scope, "performance");
  const runGoldenLife = includesScope(scope, "golden-life");

  const scopeLabel =
    scope === "property"
      ? `Property search · ${propertyFilterModeLabel(propertyFilter)}`
      : scope === "performance"
        ? "Performance search"
        : scope === "golden-life"
          ? "Golden Life search"
          : "Consolidated digest of Property, Performance, and Golden Life";

  const notes: string[] = [
    scopeLabel,
    `Window: last ${safeDays} HK calendar days.`,
  ];
  if (runProperty) {
    notes.push(`Property filter: ${propertyFilterModeSummary(propertyFilter)}.`);
  }

  const harboursideConfig = applyPropertyFilterMode(
    HARBOURSIDE_ESTATE,
    propertyFilter,
  );
  const sorrentoConfig = applyPropertyFilterMode(
    SORRENTO_ESTATE,
    propertyFilter,
  );
  const villageGardensConfig = applyPropertyFilterMode(
    VILLAGE_GARDENS_ESTATE,
    propertyFilter,
  );
  // 又一村花園 is omitted from both exclude-mode searches.
  const runVillageGardens =
    runProperty &&
    propertyFilter !== "exclude-2bed" &&
    propertyFilter !== "exclude-2bed-be";

  if (
    runProperty &&
    (propertyFilter === "exclude-2bed" ||
      propertyFilter === "exclude-2bed-be")
  ) {
    notes.push("又一村花園 omitted for this exclude search.");
  }
  if (
    runProperty &&
    (propertyFilter === "exclude-2bed" ||
      propertyFilter === "exclude-2bed-be")
  ) {
    notes.push(
      "Harbourside excludes both 2-bed and B & E flats; B & E is Harbourside-only.",
    );
  }

  const settled = await Promise.allSettled([
    runProperty
      ? buildEstateListingReport(harboursideConfig, safeDays)
      : Promise.resolve(null),
    runProperty
      ? buildEstateListingReport(sorrentoConfig, safeDays)
      : Promise.resolve(null),
    runVillageGardens
      ? buildEstateListingReport(villageGardensConfig, safeDays)
      : Promise.resolve(null),
    runPerformance ? buildUrbtixReport(safeDays) : Promise.resolve(null),
    runPerformance ? buildPopticketReport(safeDays) : Promise.resolve(null),
    runPerformance ? buildArtMateReport(safeDays) : Promise.resolve(null),
    runGoldenLife
      ? buildHappyRetiredReport(safeDays)
      : Promise.resolve(null),
    runGoldenLife ? buildJcchReport(safeDays) : Promise.resolve(null),
  ]);

  const errors: ConsolidatedReport["errors"] = {};
  const keys: ConsolidatedSectionKey[] = [
    "harbourside",
    "sorrento",
    "village-gardens",
    "urbtix",
    "popticket",
    "art-mate",
    "happy-retired",
    "jcch",
  ];
  const active = [
    runProperty,
    runProperty,
    runVillageGardens,
    runPerformance,
    runPerformance,
    runPerformance,
    runGoldenLife,
    runGoldenLife,
  ];

  for (let i = 0; i < settled.length; i++) {
    if (!active[i]) continue;
    const result = settled[i];
    if (result.status === "rejected") {
      errors[keys[i]] = reasonMessage(result.reason);
    }
  }

  const harbourside =
    settled[0].status === "fulfilled" ? settled[0].value : null;
  const sorrento =
    settled[1].status === "fulfilled" ? settled[1].value : null;
  const villageGardens =
    settled[2].status === "fulfilled" ? settled[2].value : null;
  const urbtix = settled[3].status === "fulfilled" ? settled[3].value : null;
  const popticket =
    settled[4].status === "fulfilled" ? settled[4].value : null;
  const artMate = settled[5].status === "fulfilled" ? settled[5].value : null;
  const happyRetired =
    settled[6].status === "fulfilled" ? settled[6].value : null;
  const jcch = settled[7].status === "fulfilled" ? settled[7].value : null;

  const counts = {
    harbourside: harbourside?.counts.total ?? 0,
    sorrento: sorrento?.counts.total ?? 0,
    villageGardens: villageGardens?.counts.total ?? 0,
    urbtix: urbtix?.counts.total ?? 0,
    popticket: popticket?.counts.total ?? 0,
    artMate: artMate?.counts.total ?? 0,
    happyRetired: happyRetired?.counts.total ?? 0,
    jcch: jcch?.counts.total ?? 0,
    total: 0,
  };
  counts.total =
    counts.harbourside +
    counts.sorrento +
    counts.villageGardens +
    counts.urbtix +
    counts.popticket +
    counts.artMate +
    counts.happyRetired +
    counts.jcch;

  if (Object.keys(errors).length > 0) {
    notes.push(
      `Some sources failed: ${Object.keys(errors)
        .map((k) => CONSOLIDATED_SECTIONS.find((s) => s.key === k)?.title || k)
        .join(", ")}.`,
    );
  }

  return {
    scope,
    ...(runProperty ? { propertyFilter } : {}),
    since,
    until,
    days: safeDays,
    generatedAt: new Date().toISOString(),
    counts,
    property: { harbourside, sorrento, villageGardens },
    artsCulture: { urbtix, popticket, artMate },
    goldenLife: { happyRetired, jcch },
    errors,
    notes,
  };
}

export { sinceDateForDays };
