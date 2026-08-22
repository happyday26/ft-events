import "server-only";

import {
  HARBOURSIDE_ESTATE,
  SORRENTO_ESTATE,
  VILLAGE_GARDENS_ESTATE,
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
  type ConsolidatedReport,
  type ConsolidatedSectionKey,
} from "@/lib/consolidated-report-types";

export {
  CONSOLIDATED_REPORT_DEFAULT_DAYS,
  CONSOLIDATED_SECTIONS,
  type ConsolidatedReport,
  type ConsolidatedSectionKey,
  type ConsolidatedSectionMeta,
} from "@/lib/consolidated-report-types";

function reasonMessage(reason: unknown): string {
  if (reason instanceof Error) return reason.message;
  return String(reason);
}

export async function buildConsolidatedReport(
  days = CONSOLIDATED_REPORT_DEFAULT_DAYS,
): Promise<ConsolidatedReport> {
  const safeDays = Number.isFinite(days)
    ? Math.min(30, Math.max(1, Math.floor(days)))
    : CONSOLIDATED_REPORT_DEFAULT_DAYS;
  const { since, until } = sinceDateForDays(safeDays);
  const notes: string[] = [
    "Consolidated digest of Property, Arts & Culture, and Golden Life reports.",
    `Window: last ${safeDays} HK calendar days.`,
  ];

  const settled = await Promise.allSettled([
    buildEstateListingReport(HARBOURSIDE_ESTATE, safeDays),
    buildEstateListingReport(SORRENTO_ESTATE, safeDays),
    buildEstateListingReport(VILLAGE_GARDENS_ESTATE, safeDays),
    buildUrbtixReport(safeDays),
    buildPopticketReport(safeDays),
    buildHappyRetiredReport(safeDays),
    buildJcchReport(safeDays),
  ]);

  const errors: ConsolidatedReport["errors"] = {};
  const keys: ConsolidatedSectionKey[] = [
    "harbourside",
    "sorrento",
    "village-gardens",
    "urbtix",
    "popticket",
    "happy-retired",
    "jcch",
  ];

  for (let i = 0; i < settled.length; i++) {
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
  const happyRetired =
    settled[5].status === "fulfilled" ? settled[5].value : null;
  const jcch = settled[6].status === "fulfilled" ? settled[6].value : null;

  const counts = {
    harbourside: harbourside?.counts.total ?? 0,
    sorrento: sorrento?.counts.total ?? 0,
    villageGardens: villageGardens?.counts.total ?? 0,
    urbtix: urbtix?.counts.total ?? 0,
    popticket: popticket?.counts.total ?? 0,
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
    since,
    until,
    days: safeDays,
    generatedAt: new Date().toISOString(),
    counts,
    property: { harbourside, sorrento, villageGardens },
    artsCulture: { urbtix, popticket },
    goldenLife: { happyRetired, jcch },
    errors,
    notes,
  };
}

export { sinceDateForDays };
