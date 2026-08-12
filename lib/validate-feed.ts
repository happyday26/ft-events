import { HOBBIES, isHobbyKey } from "./hobbies";
import { resolveFeedWebsite, type NewRssFeedInput } from "./types";

function isHttpUrl(value: string): boolean {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export function validateFeedInput(body: Partial<NewRssFeedInput>): string | null {
  if (!body.url?.trim()) {
    return "RSS URL is required.";
  }

  if (!isHttpUrl(body.url.trim())) {
    return "RSS URL must be a valid http:// or https:// link.";
  }

  if (body.website?.trim() && !isHttpUrl(body.website.trim())) {
    return "Website must be a valid http:// or https:// link.";
  }

  if (!body.description?.trim()) {
    return "Description is required.";
  }

  if (!body.category || !isHobbyKey(body.category)) {
    return `Category must be one of: ${HOBBIES.join(", ")}.`;
  }

  return null;
}

export function normalizeFeedInput(body: Partial<NewRssFeedInput>): NewRssFeedInput {
  const url = body.url!.trim();
  return {
    url,
    website: resolveFeedWebsite(url, body.website),
    category: body.category!,
    description: body.description!.trim(),
  };
}
