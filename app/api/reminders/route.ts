import { NextResponse } from "next/server";
import { addReminder, loadReminders } from "@/lib/reminders";
import {
  normalizeReminderInput,
  validateReminderInput,
} from "@/lib/validate-reminder";
import type { NewReminderInput } from "@/lib/types";

export async function GET() {
  const reminders = await loadReminders();
  return NextResponse.json(reminders);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<NewReminderInput>;
    const error = validateReminderInput(body);

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    const reminder = await addReminder(normalizeReminderInput(body));
    return NextResponse.json(reminder, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create reminder." },
      { status: 500 },
    );
  }
}
