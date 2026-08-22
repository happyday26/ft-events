"use client";

import EstateListingReportPanel from "./EstateListingReport";

export default function VillageGardensReportPanel() {
  return (
    <EstateListingReportPanel
      title="又一村花園 report"
      apiPath="/api/property/village-gardens-report"
    />
  );
}
