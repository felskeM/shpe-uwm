import { readSheet } from "read-excel-file/universal";
import type { Category, EventItem } from "../components/event-card";
import { eventInstant } from "./event-time";

const HEADERS = [
  "Status",
  "Event ID",
  "Title",
  "Category",
  "Start",
  "End",
  "Location",
  "Description",
];
const CATEGORIES: readonly string[] = [
  "Workshop",
  "Career",
  "Social",
  "Outreach",
];
export const MAX_WORKBOOK_BYTES = 2 * 1024 * 1024;

export async function parseEventsWorkbook(
  bytes: ArrayBuffer,
): Promise<EventItem[]> {
  if (bytes.byteLength > MAX_WORKBOOK_BYTES)
    throw new Error("Events workbook exceeds 2 MB");
  const rows: unknown[][] = await readSheet(bytes, "Sheet1");
  return parseEventRows(rows);
}

export function parseEventRows(rows: unknown[][]): EventItem[] {
  const headerRow = rows.findIndex((row) =>
    HEADERS.every((name, index) => row[index] === name),
  );
  if (headerRow < 0)
    throw new Error(
      "Sheet1 must contain the eight EventsTable column headings",
    );
  if (rows.length - headerRow - 1 > 2000)
    throw new Error("Events sheet exceeds 2,000 event rows");
  const events: EventItem[] = [];
  const ids = new Set<string>();
  for (let row = headerRow + 1; row < rows.length; row++) {
    const cells = rows[row] ?? [];
    const fail = (message: string): never => {
      throw new Error(`Events row ${row + 1}: ${message}`);
    };
    const text = (index: number, max: number, optional = false): string => {
      const value = cells[index];
      if ((value === null || value === undefined || value === "") && optional)
        return "";
      if (
        typeof value !== "string" ||
        (!optional && !value.trim()) ||
        value.trim().length > max
      ) {
        return fail(
          `${HEADERS[index]} must be ${optional ? "text" : "nonempty text"} of at most ${max} characters`,
        );
      }
      return value.trim();
    };
    const status = text(0, 20, true);
    if (status === "" || status === "Draft") continue;
    if (status !== "Published") fail("Status must be Draft or Published");
    const id = text(1, 100);
    if (ids.has(id)) fail(`duplicate Event ID ${id}`);
    ids.add(id);
    const category = text(3, 20);
    if (!CATEGORIES.includes(category)) fail("select a supported Category");
    const date = (index: number): string => {
      const value = cells[index];
      if (
        !(value instanceof Date) ||
        !Number.isFinite(value.getTime()) ||
        value.getUTCFullYear() < 2000 ||
        value.getUTCFullYear() > 2100
      ) {
        return fail(
          `${HEADERS[index]} must be an Excel date and time between 2000 and 2100`,
        );
      }
      // Excel dates have no timezone. Interpret their stored components as Central time.
      const local = new Date(Math.round(value.getTime() / 1000) * 1000)
        .toISOString()
        .slice(0, 19);
      try {
        eventInstant(local);
      } catch {
        fail(`${HEADERS[index]} falls in a missing daylight-saving hour`);
      }
      return local;
    };
    const start = date(4);
    const end = date(5);
    if (eventInstant(end) <= eventInstant(start))
      fail("End must be later than Start");
    events.push({
      id,
      title: text(2, 200),
      category: category as Category,
      start,
      end,
      location: text(6, 500),
      description: text(7, 4000, true),
    });
  }
  return events.sort(
    (a, b) => a.start.localeCompare(b.start) || a.id.localeCompare(b.id),
  );
}
