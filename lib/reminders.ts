import { promises as fs } from "fs";
import path from "path";
import {
  buildReminderId,
  sortReminders,
  type NewReminderInput,
  type Reminder,
} from "./types";

const DATA_DIR = path.join(process.cwd(), "data");
const REMINDERS_FILE = path.join(DATA_DIR, "reminders.json");

async function ensureDataFile(): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });

  try {
    await fs.access(REMINDERS_FILE);
  } catch {
    await fs.writeFile(REMINDERS_FILE, "[]", "utf-8");
  }
}

export async function loadReminders(): Promise<Reminder[]> {
  await ensureDataFile();
  const raw = await fs.readFile(REMINDERS_FILE, "utf-8");
  const parsed = JSON.parse(raw) as Reminder[];

  return sortReminders(
    parsed.filter(
      (reminder) =>
        reminder.id &&
        reminder.title &&
        reminder.deadline &&
        /^\d{4}-\d{2}-\d{2}$/.test(reminder.deadline) &&
        typeof reminder.done === "boolean",
    ),
  );
}

async function saveReminders(reminders: Reminder[]): Promise<void> {
  await ensureDataFile();
  await fs.writeFile(
    REMINDERS_FILE,
    JSON.stringify(reminders, null, 2),
    "utf-8",
  );
}

export async function addReminder(input: NewReminderInput): Promise<Reminder> {
  const reminders = await loadReminders();
  const id = buildReminderId(
    input.deadline,
    input.title,
    reminders.map((reminder) => reminder.id),
  );

  const newReminder: Reminder = {
    id,
    ...input,
    createdAt: new Date().toISOString(),
  };
  reminders.push(newReminder);
  await saveReminders(reminders);

  return newReminder;
}

export async function updateReminder(
  id: string,
  input: NewReminderInput,
): Promise<Reminder | null> {
  const reminders = await loadReminders();
  const index = reminders.findIndex((reminder) => reminder.id === id);

  if (index === -1) {
    return null;
  }

  const updated: Reminder = {
    ...reminders[index],
    ...input,
    id,
  };
  reminders[index] = updated;
  await saveReminders(reminders);

  return updated;
}

export async function deleteReminder(id: string): Promise<boolean> {
  const reminders = await loadReminders();
  const next = reminders.filter((reminder) => reminder.id !== id);

  if (next.length === reminders.length) {
    return false;
  }

  await saveReminders(next);
  return true;
}
