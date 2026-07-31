import { HOBBIES, isHobbyKey } from "./hobbies";
import type { NewEventInput } from "./types";

export function validateEventInput(body: Partial<NewEventInput>): string | null {
  if (!body.title?.trim()) {
    return "Title is required.";
  }

  if (!body.date || !/^\d{4}-\d{2}-\d{2}$/.test(body.date)) {
    return "Date must be YYYY-MM-DD.";
  }

  if (!body.location?.trim()) {
    return "Location is required.";
  }

  if (!body.description?.trim()) {
    return "Description is required.";
  }

  if (!body.hobby || !isHobbyKey(body.hobby)) {
    return `Category must be one of: ${HOBBIES.join(", ")}.`;
  }

  return null;
}

export function normalizeEventInput(body: Partial<NewEventInput>): NewEventInput {
  return {
    title: body.title!.trim(),
    date: body.date!,
    location: body.location!.trim(),
    description: body.description!.trim(),
    hobby: body.hobby!,
  };
}
