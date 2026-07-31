import type { HobbyKey } from "./hobbies";

export interface Event {
  id: string;
  title: string;
  hobby: HobbyKey;
  date: string;
  location: string;
  description: string;
}

export type NewEventInput = Omit<Event, "id">;

export function slugifyTitle(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 48);
}

/** Date portion has no hyphens: 20260815-sunday-hike */
export function buildEventId(date: string, title: string, existingIds: string[]): string {
  const compactDate = date.replace(/-/g, "");
  const slug = slugifyTitle(title);
  let id = `${compactDate}-${slug}`;

  if (!existingIds.includes(id)) {
    return id;
  }

  let counter = 2;
  while (existingIds.includes(`${id}-${counter}`)) {
    counter += 1;
  }

  return `${id}-${counter}`;
}

export function formatDisplayDate(isoDate: string): string {
  const date = new Date(`${isoDate}T12:00:00`);
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export function sortEventsByDate(events: Event[]): Event[] {
  return [...events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
}

export function getFeaturedEvent(events: Event[]): Event | null {
  const sorted = sortEventsByDate(events);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = sorted.find((event) => new Date(`${event.date}T12:00:00`) >= today);
  return upcoming ?? sorted[sorted.length - 1] ?? null;
}
