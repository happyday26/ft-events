export interface ArtsCultureLink {
  id: string;
  label: string;
  href: string;
  note: string;
  /** iframe when the site allows embedding; snapshot when it blocks frames */
  preview: "iframe" | "snapshot";
}

/** Arts & culture watchlist — compact previews like Golden Life. */
export const ARTS_CULTURE_LINKS: ArtsCultureLink[] = [
  {
    id: "popticket",
    label: "Popticket.hk",
    href: "https://www.popticket.hk/",
    note: "撲飛 · ticketing & live events",
    preview: "iframe",
  },
  {
    id: "lcsd-edutainment",
    label: "康文署寓樂頻道",
    href: "https://www.lcsd.gov.hk/edutainment/tc/",
    note: "LCSD edutainment · museums, arts & sports",
    preview: "snapshot",
  },
  {
    id: "artistic-moments",
    label: "表演藝術 - 藝術當下 Artistic Moments",
    href: "https://www.artisticmoments.net/%e8%a1%a8%e6%bc%94%e8%97%9d%e8%a1%93/",
    note: "Performing arts reviews & interviews",
    preview: "iframe",
  },
  {
    id: "hk-museum-of-art",
    label: "展覽及活動 | 香港藝術館",
    href: "https://hk.art.museum/tc/web/ma/exhibitions-and-events.html",
    note: "Hong Kong Museum of Art · exhibitions & events",
    preview: "snapshot",
  },
  {
    id: "heritage-museum",
    label: "香港文化博物館 - 焦點情報",
    href: "https://hk.heritage.museum/tc/exhibitions.html",
    note: "Heritage Museum · current exhibitions",
    preview: "snapshot",
  },
  {
    id: "cuhk-artmuseum-current",
    label: "中大文物館 · 現時展覽",
    href: "https://www.artmuseum.cuhk.edu.hk/zh/exhibition/current/",
    note: "CUHK Art Museum · current exhibitions",
    preview: "iframe",
  },
  {
    id: "sun-museum",
    label: "一新美術館 | 香港 | 現時展覽",
    href: "https://www.sunmuseum.org.hk/current-exhibition",
    note: "Sun Museum · current shows",
    preview: "iframe",
  },
  {
    id: "umag-hku",
    label: "University Museum and Art Gallery, HKU",
    href: "https://umag.hku.hk/",
    note: "UMAG · HKU museum & gallery",
    preview: "iframe",
  },
  {
    id: "banga-gallery",
    label: "Indra and Harry Banga Gallery",
    href: "https://www.cityu.edu.hk/bg/",
    note: "CityU · art, science & technology",
    preview: "iframe",
  },
  {
    id: "artmuseum-cuhk",
    label: "artmuseum.cuhk",
    href: "https://www.artmuseum.cuhk.edu.hk/",
    note: "CUHK Art Museum · homepage",
    preview: "iframe",
  },
  {
    id: "hkrep",
    label: "主頁 香港話劇團 | 香港話劇團",
    href: "https://www.hkrep.com/tc/",
    note: "Hong Kong Repertory Theatre",
    preview: "iframe",
  },
  {
    id: "chung-ying",
    label: "中英劇團",
    href: "https://www.chungying.com/",
    note: "Chung Ying Theatre Company",
    preview: "snapshot",
  },
  {
    id: "hkdance",
    label: "最新上演 | 香港舞蹈團",
    href: "https://www.hkdance.com/zh-hant/%E6%9C%80%E6%96%B0%E4%B8%8A%E6%BC%94",
    note: "Hong Kong Dance Company · what's on",
    preview: "snapshot",
  },
  {
    id: "hkphil",
    label: "HK Phil",
    href: "https://www.hkphil.org/tc",
    note: "香港管弦樂團 · concerts & tickets",
    preview: "snapshot",
  },
  {
    id: "hku-muse",
    label: "HKU MUSE Programmes",
    href: "https://muse.hku.hk/programmes-2026-2027/",
    note: "HKU MUSE · season programmes",
    preview: "snapshot",
  },
  {
    id: "pmq",
    label: "Current & Upcoming | PMQ 元創方",
    href: "https://www.pmq.org.hk/happenings/programmes-events/?lang=ch",
    note: "PMQ · programmes & events",
    preview: "snapshot",
  },
  {
    id: "acoo",
    label: "ACOO - Make Tomorrow Better",
    href: "https://www.acoo.hk/",
    note: "Hong Kong culture & creative media",
    preview: "snapshot",
  },
];
