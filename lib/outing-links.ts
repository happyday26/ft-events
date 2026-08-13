export interface OutingLink {
  id: string;
  label: string;
  href: string;
  note: string;
  /** iframe when the site allows embedding; snapshot when it blocks frames */
  preview: "iframe" | "snapshot";
}

export const OUTING_LINKS: OutingLink[] = [
  {
    id: "hkallshan",
    label: "山全部都係山",
    href: "https://www.hkallshan.com/",
    note: "Hong Kong hiking routes · beginner to advanced",
    preview: "iframe",
  },
];
