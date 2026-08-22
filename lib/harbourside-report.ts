import {
  ESTATE_REPORT_DEFAULT_DAYS,
  HARBOURSIDE_ESTATE,
  buildEstateListingReport,
  sinceDateForDays,
  type EstateListing,
  type EstateListingDateType,
  type EstateListingReport,
  type EstateListingSource,
} from "@/lib/estate-listing-report";

export const HARBOURSIDE_REPORT_DEFAULT_DAYS = ESTATE_REPORT_DEFAULT_DAYS;

export type HarboursideSource = EstateListingSource;
export type HarboursideDateType = EstateListingDateType;
export type HarboursideListing = EstateListing;
export type HarboursideReport = EstateListingReport;

export { sinceDateForDays };

export async function buildHarboursideReport(
  days = HARBOURSIDE_REPORT_DEFAULT_DAYS,
): Promise<HarboursideReport> {
  return buildEstateListingReport(HARBOURSIDE_ESTATE, days);
}
