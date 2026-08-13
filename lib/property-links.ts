export interface PropertyLink {
  id: string;
  label: string;
  href: string;
  note: string;
}

/** Watched estates and listing portals — open in a new tab. */
export const PROPERTY_LINKS: PropertyLink[] = [
  {
    id: "28hse-buy",
    label: "28Hse Hong Kong Buy",
    href: "https://www.28hse.com/buy",
    note: "For sale · latest property listings",
  },
  {
    id: "harbourside-midland",
    label: "The Harbourside · Midland Realty",
    href: "https://www.midland.com.hk/en/estate/Kowloon-Kowloon-Station-The-Harbourside-E000000632",
    note: "Kowloon Station · estate page",
  },
  {
    id: "harbourside-centaline",
    label: "The Harbourside · Centaline Property",
    href: "https://hk.centanet.com/findproperty/list/buy/%E5%90%9B%E8%87%A8%E5%A4%A9%E4%B8%8B_2-ESPPWPPJPD?q=df1jk532pmbyr",
    note: "君臨天下 · 買樓 · 最新放盤",
  },
  {
    id: "harbourside-t2-sale",
    label: "The Harbourside · Tower 2 for Sale",
    href: "https://www.midland.com.hk/en/list/buy/The-Harbourside-Block-2-E-E000000632",
    note: "Midland · Tower 2 sale listings",
  },
  {
    id: "village-gardens-centaline",
    label: "又一村花園｜中原地產",
    href: "https://hk.centanet.com/estate/%E5%8F%88%E4%B8%80%E6%9D%91%E8%8A%B1%E5%9C%92/3-MXLITHSSHS",
    note: "又一村 · 屋苑專頁",
  },
  {
    id: "village-gardens-midland",
    label: "又一村花園｜美聯物業",
    href: "https://www.midland.com.hk/en/estate/Kowloon-Yau-Yat-Chuen-Village-Gardens-E00130",
    note: "又一村 · estate page",
  },
  {
    id: "village-gardens-ricacorp",
    label: "又一村花園｜利嘉閣地產",
    href: "https://www.ricacorp.com/zh-hk/property/list/buy/%E5%8F%88%E4%B8%80%E6%9D%91%E8%8A%B1%E5%9C%92-bigest-%E5%8F%88%E4%B8%80%E6%9D%91-hma-hk",
    note: "優質物業放售 · 二手售盤",
  },
  {
    id: "village-gardens-28hse",
    label: "又一村花園｜28Hse 最新放售",
    href: "https://www.28hse.com/buy/apartment/a2/dg119/c3092",
    note: "住宅最新放售樓盤搜尋結果",
  },
  {
    id: "yingwah",
    label: "英華地產 Ying Wah Property",
    href: "https://ywproperty.com/properties-search/",
    note: "樓盤搜索",
  },
  {
    id: "repulse-bay-gardens-eh",
    label: "Repulse Bay Gardens · Executive Homes",
    href: "https://www.executivehomeshk.com/buildings/repulse-bay/repulse-bay-gardens",
    note: "淺水灣麗景園",
  },
  {
    id: "repulse-bay-garden-centaline",
    label: "淺水灣麗景園 11-12座｜中原地產",
    href: "https://hk.centanet.com/findproperty/detail/%E6%B7%BA%E6%B0%B4%E7%81%A3%E9%BA%97%E6%99%AF%E5%9C%92-11-12%E5%BA%A7_TEA465?theme=buy",
    note: "淺水灣 · 買樓",
  },
];
