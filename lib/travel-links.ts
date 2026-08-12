export interface TravelLink {
  id: string;
  label: string;
  href: string;
  note: string;
}

/** Practical Hong Kong travel links — open in a new tab. */
export const TRAVEL_LINKS: TravelLink[] = [
  {
    id: "hkg",
    label: "Hong Kong International Airport",
    href: "https://www.hongkongairport.com/",
    note: "Flights, transport & terminal guides",
  },
  {
    id: "mtr",
    label: "MTR",
    href: "https://www.mtr.com.hk/en/customer/main/index.html",
    note: "Rail map, Airport Express & journey planner",
  },
  {
    id: "discoverhk",
    label: "Discover Hong Kong",
    href: "https://www.discoverhongkong.com/eng/index.html",
    note: "Official tourism ideas & itineraries",
  },
  {
    id: "immigration",
    label: "Immigration Department",
    href: "https://www.immd.gov.hk/eng/index.html",
    note: "Visas, e-Channel & arrival info",
  },
  {
    id: "flights",
    label: "Google Flights",
    href: "https://www.google.com/travel/flights",
    note: "Compare fares and routes",
  },
  {
    id: "octo",
    label: "Octopus",
    href: "https://www.octopus.com.hk/en/consumer/index.html",
    note: "Transit & payments around the city",
  },
  {
    id: "ourchinastory",
    label: "Our China Story",
    href: "https://www.ourchinastory.com/zh/home",
    note: "Stories and travel ideas across China",
  },
  {
    id: "bigline",
    label: "Big Line",
    href: "https://bigline.hk/",
    note: "Hong Kong travel and outbound trips",
  },
  {
    id: "dili360",
    label: "中国国家地理 · 景点",
    href: "https://www.dili360.com/travel/sight/",
    note: "China sights and travel destinations",
  },
  {
    id: "wingon",
    label: "永安旅遊 Wing On Travel",
    href: "https://www.wingontravel.com/",
    note: "Packages, flights & hotels from Hong Kong",
  },
  {
    id: "walkin-frontiers",
    label: "Walk in Hong Kong · Frontiers",
    href: "https://walkin.hk/project/hk-frontiers-stories-through-time-tide-and-transit/",
    note: "Stories through time, tide and transit",
  },
];
