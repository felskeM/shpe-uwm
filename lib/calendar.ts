import { eventInstant } from "./event-time";
import { withBasePath } from "./basePath";
import type { EventItem } from "@/components/event-card";

function toUtcBasic(dt: string) {
  // "2025-10-15T17:00:00-05:00" -> "20251015T220000Z"
  const z = eventInstant(dt).toISOString(); // 2025-10-15T22:00:00.000Z
  return z.replace(/[-:]/g, "").replace(".000", "");
}

export function googleCalendarUrl(e: EventItem) {
  const dates = `${toUtcBasic(e.start)}/${toUtcBasic(e.end)}`;
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: e.title,
    dates,
    details: e.description ?? "",
    location: e.location,
    trp: "false",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function icsUrlFor(e: EventItem) {
  const params = new URLSearchParams({
    slug: slugify(e.title),
    title: e.title,
    start: eventInstant(e.start).toISOString(),
    end: eventInstant(e.end).toISOString(),
    location: e.location,
    desc: e.description ?? "",
  });
  return withBasePath("/api/ics") + "?" + params.toString();
}

export function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
