import type { NewReminderInput } from "./types";

export function validateReminderInput(
  body: Partial<NewReminderInput>,
): string | null {
  if (!body.title?.trim()) {
    return "Title is required.";
  }

  if (!body.deadline || !/^\d{4}-\d{2}-\d{2}$/.test(body.deadline)) {
    return "Deadline must be YYYY-MM-DD.";
  }

  if (body.done != null && typeof body.done !== "boolean") {
    return "Done must be true or false.";
  }

  return null;
}

export function normalizeReminderInput(
  body: Partial<NewReminderInput>,
): NewReminderInput {
  return {
    title: body.title!.trim(),
    deadline: body.deadline!,
    notes: (body.notes ?? "").trim(),
    done: Boolean(body.done),
  };
}
