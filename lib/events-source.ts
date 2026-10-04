import "server-only";
import events from "./generated/events.json";
import type { EventItem } from "../components/event-card";

// Generated exclusively from docs/Website-Events.xlsx before dev/build.
export function getCalendarEvents(): EventItem[] {
  return events as EventItem[];
}
