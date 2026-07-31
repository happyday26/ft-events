import { NextResponse } from "next/server";
import { addEvent, loadEvents } from "@/lib/events";
import { normalizeEventInput, validateEventInput } from "@/lib/validate-event";
import type { NewEventInput } from "@/lib/types";

export async function GET() {
  const events = await loadEvents();
  return NextResponse.json(events);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<NewEventInput>;
    const error = validateEventInput(body);

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    const event = await addEvent(normalizeEventInput(body));
    return NextResponse.json(event, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create event." }, { status: 500 });
  }
}
