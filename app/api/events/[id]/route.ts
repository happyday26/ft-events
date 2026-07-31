import { NextResponse } from "next/server";
import { deleteEvent, updateEvent } from "@/lib/events";
import { normalizeEventInput, validateEventInput } from "@/lib/validate-event";
import type { NewEventInput } from "@/lib/types";

type RouteContext = { params: Promise<{ id: string }> };

export async function PUT(request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const body = (await request.json()) as Partial<NewEventInput>;
    const error = validateEventInput(body);

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    const updated = await updateEvent(id, normalizeEventInput(body));

    if (!updated) {
      return NextResponse.json({ error: "Event not found." }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: "Failed to update event." }, { status: 500 });
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const removed = await deleteEvent(id);

    if (!removed) {
      return NextResponse.json({ error: "Event not found." }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete event." }, { status: 500 });
  }
}
