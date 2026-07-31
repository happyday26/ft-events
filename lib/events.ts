import { promises as fs } from "fs";
import path from "path";
import { buildEventId, sortEventsByDate, type Event, type NewEventInput } from "./types";
import { isHobbyKey } from "./hobbies";

const DATA_DIR = path.join(process.cwd(), "data");
const EVENTS_FILE = path.join(DATA_DIR, "events.json");

async function ensureDataFile(): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });

  try {
    await fs.access(EVENTS_FILE);
  } catch {
    await fs.writeFile(EVENTS_FILE, "[]", "utf-8");
  }
}

export async function loadEvents(): Promise<Event[]> {
  await ensureDataFile();
  const raw = await fs.readFile(EVENTS_FILE, "utf-8");
  const parsed = JSON.parse(raw) as Event[];

  return sortEventsByDate(
    parsed.filter(
      (event) =>
        event.id &&
        event.title &&
        event.date &&
        event.location &&
        event.description &&
        isHobbyKey(event.hobby),
    ),
  );
}

async function saveEvents(events: Event[]): Promise<void> {
  await ensureDataFile();
  await fs.writeFile(EVENTS_FILE, JSON.stringify(events, null, 2), "utf-8");
}

export async function addEvent(input: NewEventInput): Promise<Event> {
  const events = await loadEvents();
  const id = buildEventId(
    input.date,
    input.title,
    events.map((event) => event.id),
  );

  const newEvent: Event = { id, ...input };
  events.push(newEvent);
  await saveEvents(events);

  return newEvent;
}

export async function deleteEvent(id: string): Promise<boolean> {
  const events = await loadEvents();
  const next = events.filter((event) => event.id !== id);

  if (next.length === events.length) {
    return false;
  }

  await saveEvents(next);
  return true;
}

export async function updateEvent(
  id: string,
  input: NewEventInput,
): Promise<Event | null> {
  const events = await loadEvents();
  const index = events.findIndex((event) => event.id === id);

  if (index === -1) {
    return null;
  }

  const updated: Event = { id, ...input };
  events[index] = updated;
  await saveEvents(events);

  return updated;
}

export async function getEventById(id: string): Promise<Event | null> {
  const events = await loadEvents();
  return events.find((event) => event.id === id) ?? null;
}
