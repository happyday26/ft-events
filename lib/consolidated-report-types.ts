import type { ArtMateReport } from "@/lib/art-mate-report";
import type { EstateListingReport } from "@/lib/estate-listing-report";
import type { HappyRetiredReport } from "@/lib/happy-retired-report";
import type { JcchReport } from "@/lib/jcch-report";
import type { PopticketReport } from "@/lib/popticket-report";
import type { UrbtixReport } from "@/lib/urbtix-report";

/** Client-safe constants/types only — do not import the builder from client components. */
export const CONSOLIDATED_REPORT_DEFAULT_DAYS = 4;

/** Home property-search filter presets. */
export type PropertyFilterMode =
  | "all"
  | "exclude-2bed"
  | "exclude-2bed-be";

export const PROPERTY_FILTER_MODES: PropertyFilterMode[] = [
  "all",
  "exclude-2bed",
  "exclude-2bed-be",
];

export function isPropertyFilterMode(
  value: string | null | undefined,
): value is PropertyFilterMode {
  return (
    value === "all" ||
    value === "exclude-2bed" ||
    value === "exclude-2bed-be"
  );
}

export function propertyFilterModeLabel(mode: PropertyFilterMode): string {
  switch (mode) {
    case "all":
      return "Get all properties";
    case "exclude-2bed":
      return "Exclude 2-bed units";
    case "exclude-2bed-be":
      return "Exclude 2-bed & units B&E";
  }
}

export function propertyFilterModeSummary(mode: PropertyFilterMode): string {
  switch (mode) {
    case "all":
      return "No bedroom or B/E filter";
    case "exclude-2bed":
      return "Harbourside: excl. 2-bed & B/E · Sorrento: excl. 2-bed · 又一村花園 omitted";
    case "exclude-2bed-be":
      return "Harbourside: excl. 2-bed & B/E · Sorrento: excl. 2-bed · 又一村花園 omitted";
  }
}

export type ConsolidatedReportScope =
  | "property"
  | "performance"
  | "golden-life"
  | "all";

export type ConsolidatedSectionKey =
  | "harbourside"
  | "sorrento"
  | "village-gardens"
  | "urbtix"
  | "popticket"
  | "art-mate"
  | "happy-retired"
  | "jcch";

export interface ConsolidatedSectionMeta {
  key: ConsolidatedSectionKey;
  area: "Property" | "Performance" | "Golden Life";
  title: string;
  scope: Exclude<ConsolidatedReportScope, "all">;
}

export const CONSOLIDATED_SECTIONS: ConsolidatedSectionMeta[] = [
  {
    key: "harbourside",
    area: "Property",
    scope: "property",
    title: "Harbourside · 君臨天下",
  },
  {
    key: "sorrento",
    area: "Property",
    scope: "property",
    title: "Sorrento · 擎天半島 · 1,000呎+",
  },
  {
    key: "village-gardens",
    area: "Property",
    scope: "property",
    title: "Village Gardens · 又一村花園",
  },
  {
    key: "urbtix",
    area: "Performance",
    scope: "performance",
    title: "URBTIX · 城市售票網",
  },
  {
    key: "popticket",
    area: "Performance",
    scope: "performance",
    title: "Popticket · 撲飛",
  },
  {
    key: "art-mate",
    area: "Performance",
    scope: "performance",
    title: "Art-mate · 門票搜尋",
  },
  {
    key: "happy-retired",
    area: "Golden Life",
    scope: "golden-life",
    title: "樂活新中年 · Happy Retired",
  },
  {
    key: "jcch",
    area: "Golden Life",
    scope: "golden-life",
    title: "賽馬會流金匯 · JC Cadenza Hub",
  },
];

export interface ConsolidatedReport {
  scope: ConsolidatedReportScope;
  /** Set when scope includes property; describes home-search filter preset. */
  propertyFilter?: PropertyFilterMode;
  since: string;
  until: string;
  days: number;
  generatedAt: string;
  counts: {
    harbourside: number;
    sorrento: number;
    villageGardens: number;
    urbtix: number;
    popticket: number;
    artMate: number;
    happyRetired: number;
    jcch: number;
    total: number;
  };
  property: {
    harbourside: EstateListingReport | null;
    sorrento: EstateListingReport | null;
    villageGardens: EstateListingReport | null;
  };
  artsCulture: {
    urbtix: UrbtixReport | null;
    popticket: PopticketReport | null;
    artMate: ArtMateReport | null;
  };
  goldenLife: {
    happyRetired: HappyRetiredReport | null;
    jcch: JcchReport | null;
  };
  errors: Partial<Record<ConsolidatedSectionKey, string>>;
  notes: string[];
}
