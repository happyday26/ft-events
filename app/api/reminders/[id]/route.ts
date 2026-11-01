import { NextResponse } from "next/server";
import { deleteReminder, updateReminder } from "@/lib/reminders";
import {
  normalizeReminderInput,
  validateReminderInput,
} from "@/lib/validate-reminder";
import type { NewReminderInput } from "@/lib/types";

type RouteContext = { params: Promise<{ id: string }> };

export async function PUT(request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const body = (await request.json()) as Partial<NewReminderInput>;
    const error = validateReminderInput(body);

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    const updated = await updateReminder(id, normalizeReminderInput(body));

    if (!updated) {
      return NextResponse.json({ error: "Reminder not found." }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch {
    return NextResponse.json(
      { error: "Failed to update reminder." },
      { status: 500 },
    );
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const removed = await deleteReminder(id);

    if (!removed) {
      return NextResponse.json({ error: "Reminder not found." }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to delete reminder." },
      { status: 500 },
    );
  }
}
