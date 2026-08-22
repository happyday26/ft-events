const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

export const ESTATE_REPORT_DEFAULT_DAYS = 4;

export type EstateListingSource =
  | "Centaline"
  | "Midland"
  | "28Hse"
  | "Ricacorp";
export type EstateListingDateType = "publish" | "update";

export interface EstateListing {
  source: EstateListingSource;
  ref: string;
  title: string;
  price: string;
  nSize: number | null;
  date: string;
  dateType: EstateListingDateType;
  url: string;
}

export interface EstateListingReport {
  estateId: string;
  estateLabel: string;
  since: string;
  until: string;
  days: number;
  generatedAt: string;
  counts: {
    centaline: number;
    midland: number;
    hse28: number;
    ricacorp: number;
    total: number;
  };
  listings: EstateListing[];
  notes: string[];
}

export interface EstateReportConfig {
  id: string;
  label: string;
  centalineEstateCode: string;
  midlandEstateId: string;
  midlandListPath: string;
  hse28ListUrl: string;
  /** Ricacorp estate locationId for api/post (optional) */
  ricacorpLocationId?: string;
  ricacorpListUrl?: string;
  /** Used for 28Hse title fallback / matching */
  nameZh: string;
  nameEn: string;
  /** Keep only this bedroom count when set. */
  bedrooms?: number;
  /** Inclusive saleable/net area floor in sq ft. */
  minNSize?: number;
}

export const HARBOURSIDE_ESTATE: EstateReportConfig = {
  id: "harbourside",
  label: "The Harbourside",
  centalineEstateCode: "2-ESPPWPPJPD",
  midlandEstateId: "E000000632",
  midlandListPath: "The-Harbourside-E-E000000632",
  hse28ListUrl: "https://www.28hse.com/buy/apartment/a2/dg28/c2583",
  ricacorpLocationId: "e7759f71-6682-482c-85ed-679cbaf93b4a",
  ricacorpListUrl:
    "https://www.ricacorp.com/zh-hk/property/list/buy/%E5%90%9B%E8%87%A8%E5%A4%A9%E4%B8%8B-estate-%E4%B9%9D%E9%BE%8D%E7%AB%99-hma-hk",
  nameZh: "君臨天下",
  nameEn: "The Harbourside",
};

export const SORRENTO_ESTATE: EstateReportConfig = {
  id: "sorrento",
  label: "Sorrento",
  centalineEstateCode: "3-ESPPWPPEPD",
  midlandEstateId: "E12827",
  midlandListPath: "Sorrento-E-E12827",
  hse28ListUrl: "https://www.28hse.com/buy/apartment/a2/dg28/c2581",
  ricacorpLocationId: "853c946d-2e41-4550-9ce1-4549fc460bc4",
  ricacorpListUrl:
    "https://www.ricacorp.com/zh-hk/property/list/buy/%E6%93%8E%E5%A4%A9%E5%8D%8A%E5%B3%B6-bigest-%E4%B9%9D%E9%BE%8D%E7%AB%99-hma-hk",
  nameZh: "擎天半島",
  nameEn: "Sorrento",
  bedrooms: 3,
  minNSize: 1001,
};

export const VILLAGE_GARDENS_ESTATE: EstateReportConfig = {
  id: "village-gardens",
  label: "又一村花園",
  centalineEstateCode: "3-MXLITHSSHS",
  midlandEstateId: "E00130",
  midlandListPath: "Village-Gardens-E-E00130",
  hse28ListUrl: "https://www.28hse.com/buy/apartment/a2/dg119/c3092",
  nameZh: "又一村花園",
  nameEn: "Village Gardens",
};

function day(s: string | null | undefined): string | null {
  if (!s) return null;
  const m = String(s).match(/(\d{4})[-/](\d{1,2})[-/](\d{1,2})/);
  if (m) {
    return `${m[1]}-${m[2].padStart(2, "0")}-${m[3].padStart(2, "0")}`;
  }
  const dmy = String(s).match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
  if (dmy) {
    return `${dmy[3]}-${dmy[2].padStart(2, "0")}-${dmy[1].padStart(2, "0")}`;
  }
  return null;
}

function hkYmd(date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Hong_Kong",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

/** Inclusive window: today (HK) and the previous (days - 1) calendar days. */
export function sinceDateForDays(days: number, now = new Date()): {
  since: string;
  until: string;
} {
  const safeDays = Number.isFinite(days)
    ? Math.min(30, Math.max(1, Math.floor(days)))
    : ESTATE_REPORT_DEFAULT_DAYS;
  const until = hkYmd(now);
  const [y, m, d] = until.split("-").map(Number);
  const start = new Date(Date.UTC(y, m - 1, d));
  start.setUTCDate(start.getUTCDate() - (safeDays - 1));
  const since = start.toISOString().slice(0, 10);
  return { since, until };
}

function money(n: number | null | undefined): string {
  if (n == null) return "";
  if (n >= 1e8) return `$${(n / 1e8).toFixed(2)}億`.replace(/\.00億/, "億");
  return `$${Math.round(n / 1e4).toLocaleString("en-US")}萬`;
}

function parseBedrooms(text: string | null | undefined): number | null {
  if (!text) return null;
  const m =
    text.match(/睡房\s*[:：]?\s*(\d+)/) ||
    text.match(/房間\s*[:：]?\s*(\d+)/) ||
    text.match(/(\d+)\s*房/) ||
    text.match(/(\d+)\s*床/) ||
    text.match(/(\d+)\s*-?\s*bed(?:room)?s?\b/i);
  if (!m) return null;
  const n = Number(m[1]);
  return Number.isFinite(n) ? n : null;
}

function matchesUnitFocus(
  estate: EstateReportConfig,
  nSize: number | null,
  bedrooms: number | null,
): boolean {
  if (estate.minNSize != null && (nSize == null || nSize < estate.minNSize)) {
    return false;
  }
  if (estate.bedrooms != null && bedrooms !== estate.bedrooms) {
    return false;
  }
  return true;
}

async function mapPool<T, R>(
  items: T[],
  concurrency: number,
  fn: (item: T) => Promise<R>,
): Promise<R[]> {
  const out: R[] = [];
  let i = 0;
  async function worker() {
    while (i < items.length) {
      const idx = i++;
      out[idx] = await fn(items[idx]);
    }
  }
  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, () => worker()),
  );
  return out;
}

async function fetchCentaline(
  estate: EstateReportConfig,
  since: string,
): Promise<EstateListing[]> {
  const body = {
    postType: "Sale",
    sort: "PublishDate",
    order: "Descending",
    size: 100,
    displayTextStyle: "WebResultList",
    offset: 0,
    pageSource: "search",
    hmas: [] as string[],
    mtrs: [] as string[],
    primarySchoolNets: [] as string[],
    markets: [] as string[],
    universities: [] as string[],
    bigestAndEstate: [estate.centalineEstateCode],
    phaseAndEstate: [] as string[],
  };
  const r = await fetch("https://hk.centanet.com/findproperty/api/Post/Search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": UA,
      Accept: "application/json",
      Origin: "https://hk.centanet.com",
      Referer: "https://hk.centanet.com/findproperty/list/buy/",
    },
    body: JSON.stringify(body),
    next: { revalidate: 0 },
  });
  if (!r.ok) throw new Error(`Centaline search failed (${r.status})`);
  const j = (await r.json()) as {
    data?: Array<{
      refNo?: string;
      nSize?: number;
      bedroomCount?: number;
      publishDate?: string;
      detailUrl?: string;
      displayText?: {
        addr?: { line1?: string; line2?: string };
        priceInfo?: { price?: string };
      };
    }>;
  };

  const rows: EstateListing[] = [];
  for (const p of j.data || []) {
    const dt = p.displayText || {};
    const publish = day(p.publishDate);
    if (!publish || publish < since || !p.refNo || !p.detailUrl) continue;
    const title = `${dt.addr?.line1 || ""} ${dt.addr?.line2 || ""}`.trim();
    const nSize = p.nSize ?? null;
    const bedrooms = p.bedroomCount ?? parseBedrooms(title);
    if (!matchesUnitFocus(estate, nSize, bedrooms)) continue;
    rows.push({
      source: "Centaline",
      ref: p.refNo,
      title,
      price: dt.priceInfo?.price || "",
      nSize,
      date: publish,
      dateType: "publish",
      url: p.detailUrl,
    });
  }
  return rows;
}

async function fetchMidland(
  estate: EstateReportConfig,
  since: string,
): Promise<EstateListing[]> {
  const pageUrl = `https://www.midland.com.hk/en/list/buy/${estate.midlandListPath}`;
  const page = await fetch(pageUrl, {
    headers: { "User-Agent": UA, "Accept-Language": "en" },
    next: { revalidate: 0 },
  });
  if (!page.ok) throw new Error(`Midland page failed (${page.status})`);
  const html = await page.text();
  const match = html.match(
    /<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/,
  );
  if (!match) throw new Error("Midland NEXT_DATA missing");
  const next = JSON.parse(match[1]) as {
    runtimeConfig?: { API_URL?: string; BUILD_TOKEN?: string };
  };
  const apiUrl = next.runtimeConfig?.API_URL;
  const token = next.runtimeConfig?.BUILD_TOKEN;
  if (!apiUrl || !token) throw new Error("Midland API config missing");

  const qs = new URLSearchParams({
    ad: "true",
    lang: "en",
    currency: "HKD",
    unit: "feet",
    search_behavior: "normal",
    est_ids: estate.midlandEstateId,
    tx_type: "S",
    sort: "latest",
    page: "1",
    limit: "60",
  });
  const r = await fetch(`${apiUrl}/search/v2/properties?${qs}`, {
    headers: {
      "User-Agent": UA,
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      Referer: pageUrl,
      Origin: "https://www.midland.com.hk",
    },
    next: { revalidate: 0 },
  });
  if (!r.ok) throw new Error(`Midland search failed (${r.status})`);
  const j = (await r.json()) as {
    result?: Array<{
      serial_no?: string;
      estate?: string | { name?: string };
      misc?: { building_name?: string; floor_level?: string };
      building?: { name?: string };
      flat?: string;
      bedroom?: number;
      price_hkd?: number;
      price?: number;
      net_area?: number;
      update_date?: string;
      url_desc?: string;
    }>;
  };

  const rows: EstateListing[] = [];
  for (const p of j.result || []) {
    if (!p?.serial_no) continue;
    const update = day(p.update_date);
    if (!update || update < since) continue;
    const estateName =
      typeof p.estate === "string"
        ? p.estate
        : p.estate?.name || estate.nameEn;
    const bldg = p.misc?.building_name || p.building?.name || "";
    const floor = p.misc?.floor_level || "";
    const url = (p.url_desc || "").startsWith("http")
      ? p.url_desc!.replace("/zh-hk/", "/en/")
      : `https://www.midland.com.hk/en/property/${p.url_desc || p.serial_no}`;
    const nSize = p.net_area ?? null;
    const bedrooms = p.bedroom ?? null;
    if (!matchesUnitFocus(estate, nSize, bedrooms)) continue;
    rows.push({
      source: "Midland",
      ref: p.serial_no,
      title: [
        estateName,
        bldg,
        floor,
        p.flat ? `Flat ${p.flat}` : "",
        bedrooms != null ? `${bedrooms}床` : "",
      ]
        .filter(Boolean)
        .join(" "),
      price: money(p.price_hkd ?? p.price),
      nSize,
      date: update,
      dateType: "update",
      url,
    });
  }
  return rows;
}

async function fetch28Hse(
  estate: EstateReportConfig,
  since: string,
): Promise<EstateListing[]> {
  const listUrl = estate.hse28ListUrl;
  const page = await fetch(listUrl, {
    headers: { "User-Agent": UA, "Accept-Language": "zh-HK" },
    next: { revalidate: 0 },
  });
  if (!page.ok) throw new Error(`28Hse list failed (${page.status})`);
  const html = await page.text();
  const ids = [
    ...new Set(
      [...html.matchAll(/\/buy\/apartment\/property-(\d+)/g)].map((m) => m[1]),
    ),
  ].slice(0, 40);

  const nameZh = estate.nameZh;
  const fetched = await mapPool(ids, 4, async (id) => {
    const url = `https://www.28hse.com/buy/apartment/property-${id}`;
    try {
      const r = await fetch(url, {
        headers: {
          "User-Agent": UA,
          "Accept-Language": "zh-HK",
          Referer: listUrl,
        },
        next: { revalidate: 0 },
      });
      if (!r.ok) return null;
      const t = await r.text();
      const plain = t
        .replace(/<script[\s\S]*?<\/script>/gi, " ")
        .replace(/<style[\s\S]*?<\/style>/gi, " ");
      const escaped = nameZh.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const titleMatch =
        plain.match(
          new RegExp(
            `${escaped}[\\s\\S]{0,100}?(?:座|期)[\\s\\S]{0,50}?(?:室|房|層)?`,
          ),
        ) || plain.match(new RegExp(escaped));
      const title = (titleMatch?.[0] || `${nameZh} #${id}`)
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 80);
      const price =
        (plain.match(/售\s*\$?\s*([\d,.]+)\s*萬/) || [])[0]?.replace(
          /\s+/g,
          " ",
        ) || "";
      const publish =
        day((plain.match(/刊登(?:日期|日)?\s*[:：]?\s*([0-9/\-]+)/) || [])[1]) ||
        day((plain.match(/放盤(?:日期|日)?\s*[:：]?\s*([0-9/\-]+)/) || [])[1]);
      if (!publish || publish < since) return null;
      const nSize =
        Number(
          (
            plain.match(/實用面積[^\d]*([\d,]+)/) ||
            plain.match(/實用\s*([\d,]+)\s*呎/) ||
            []
          )[1]?.replace(/,/g, ""),
        ) || null;
      const bedrooms =
        parseBedrooms(
          (plain.match(/睡房\s*[:：]?\s*\d+/) ||
            plain.match(/房間\s*[:：]?\s*\d+/) ||
            [])[0],
        ) ?? parseBedrooms(title);
      if (!matchesUnitFocus(estate, nSize, bedrooms)) return null;
      const row: EstateListing = {
        source: "28Hse",
        ref: id,
        title,
        price,
        nSize,
        date: publish,
        dateType: "publish",
        url,
      };
      return row;
    } catch {
      return null;
    }
  });

  return fetched.filter((x): x is EstateListing => x != null);
}

async function fetchRicacorp(
  estate: EstateReportConfig,
  since: string,
): Promise<EstateListing[]> {
  if (!estate.ricacorpLocationId) return [];

  const listUrl =
    estate.ricacorpListUrl ||
    "https://www.ricacorp.com/zh-hk/property/list/buy";
  const pageSize = 10;
  const maxPages = 5;
  const rows: EstateListing[] = [];

  for (let page = 0; page < maxPages; page++) {
    const qs = new URLSearchParams({
      locationId: estate.ricacorpLocationId,
      agreementType: "3",
      orderBy: "overallDateModified desc",
      offset: String(page * pageSize),
      language: "HK",
    });
    if (estate.minNSize != null) {
      qs.set("saleableAreaFrom", String(estate.minNSize));
    }
    const r = await fetch(
      `https://www.ricacorp.com/zh-hk/property/api/post?${qs}`,
      {
        headers: {
          "User-Agent": UA,
          Accept: "application/json",
          "x-custom-header": "www.ricacorp.com/zh-hk/property",
          Referer: listUrl,
          Origin: "https://www.ricacorp.com",
        },
        next: { revalidate: 0 },
      },
    );
    if (!r.ok) throw new Error(`Ricacorp search failed (${r.status})`);
    const j = (await r.json()) as {
      total?: number;
      results?: Array<{
        postNo?: string;
        aliasV4?: string;
        displayTextHk?: string;
        displayText?: string;
        floorZoneText?: string;
        flatZoneTextHk?: string;
        flatZoneText?: string;
        saleableArea?: number;
        marketPrice?: number;
        overallDateModified?: number;
        bedroom?: number;
        room?: number;
        noOfRoom?: number;
      }>;
    };

    const batch = j.results || [];
    if (batch.length === 0) break;

    let reachedOlder = false;
    for (const p of batch) {
      if (!p?.postNo || p.overallDateModified == null) continue;
      const update = hkYmd(new Date(p.overallDateModified));
      if (update < since) {
        reachedOlder = true;
        continue;
      }
      const title = [
        p.displayTextHk || p.displayText || estate.nameZh,
        p.floorZoneText,
        p.flatZoneTextHk || p.flatZoneText,
      ]
        .filter(Boolean)
        .join(" ");
      const nSize = p.saleableArea ?? null;
      const bedrooms =
        p.bedroom ?? p.room ?? p.noOfRoom ?? parseBedrooms(title);
      if (!matchesUnitFocus(estate, nSize, bedrooms)) continue;
      const path = p.aliasV4 || p.postNo;
      rows.push({
        source: "Ricacorp",
        ref: p.postNo,
        title,
        price: money(p.marketPrice),
        nSize,
        date: update,
        dateType: "update",
        url: `https://www.ricacorp.com/zh-hk/property/detail/${encodeURI(
          path,
        )}`,
      });
    }

    if (reachedOlder) break;
    const total = j.total ?? 0;
    if ((page + 1) * pageSize >= total) break;
  }

  return rows;
}

export async function buildEstateListingReport(
  estate: EstateReportConfig,
  days = ESTATE_REPORT_DEFAULT_DAYS,
): Promise<EstateListingReport> {
  const safeDays = Number.isFinite(days)
    ? Math.min(30, Math.max(1, Math.floor(days)))
    : ESTATE_REPORT_DEFAULT_DAYS;
  const { since, until } = sinceDateForDays(safeDays);
  const notes: string[] = [
    "Centaline and 28Hse use publish date.",
    "Midland and Ricacorp only expose update/modified date (included as a proxy).",
  ];
  if (estate.bedrooms != null || estate.minNSize != null) {
    const parts: string[] = [];
    if (estate.bedrooms != null) parts.push(`${estate.bedrooms}-bed`);
    if (estate.minNSize != null) {
      parts.push(`over ${(estate.minNSize - 1).toLocaleString()} sq ft`);
    }
    notes.push(`Filtered to ${parts.join(" · ")}.`);
  }

  const settled = await Promise.allSettled([
    fetchCentaline(estate, since),
    fetchMidland(estate, since),
    fetch28Hse(estate, since),
    fetchRicacorp(estate, since),
  ]);

  const centaline =
    settled[0].status === "fulfilled" ? settled[0].value : ([] as EstateListing[]);
  const midland =
    settled[1].status === "fulfilled" ? settled[1].value : ([] as EstateListing[]);
  const hse28 =
    settled[2].status === "fulfilled" ? settled[2].value : ([] as EstateListing[]);
  const ricacorp =
    settled[3].status === "fulfilled" ? settled[3].value : ([] as EstateListing[]);

  if (settled[0].status === "rejected") {
    notes.push(`Centaline unavailable: ${String(settled[0].reason)}`);
  }
  if (settled[1].status === "rejected") {
    notes.push(`Midland unavailable: ${String(settled[1].reason)}`);
  }
  if (settled[2].status === "rejected") {
    notes.push(`28Hse unavailable: ${String(settled[2].reason)}`);
  }
  if (settled[3].status === "rejected") {
    notes.push(`Ricacorp unavailable: ${String(settled[3].reason)}`);
  }

  const listings = [...centaline, ...hse28, ...midland, ...ricacorp].sort(
    (a, b) => {
      if (a.date !== b.date) return a.date < b.date ? 1 : -1;
      if (a.dateType !== b.dateType) return a.dateType === "publish" ? -1 : 1;
      return a.source.localeCompare(b.source);
    },
  );

  return {
    estateId: estate.id,
    estateLabel: estate.label,
    since,
    until,
    days: safeDays,
    generatedAt: new Date().toISOString(),
    counts: {
      centaline: centaline.length,
      midland: midland.length,
      hse28: hse28.length,
      ricacorp: ricacorp.length,
      total: listings.length,
    },
    listings,
    notes,
  };
}
