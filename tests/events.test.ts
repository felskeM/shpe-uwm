import assert from "node:assert/strict";
import { readFile, mkdtemp, rm, writeFile } from "node:fs/promises";
import { test } from "node:test";
import {
  parseEventRows,
  parseEventsWorkbook,
  MAX_WORKBOOK_BYTES,
} from "../lib/events-workbook";
import { generateEvents, workbookPath } from "../scripts/events";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { calendarDate, eventInstant, eventTimeLabel } from "../lib/event-time";
import { googleCalendarUrl, icsUrlFor } from "../lib/calendar";

const headers = [
  "Status",
  "Event ID",
  "Title",
  "Category",
  "Start",
  "End",
  "Location",
  "Description",
];
const row = () => [
  "Published",
  "fall-meeting",
  "Fall meeting",
  "Workshop",
  new Date("2026-09-25T17:30:00Z"),
  new Date("2026-09-25T18:30:00Z"),
  "UWM Union",
  "Bring questions",
];
const workbook = async () => {
  const bytes = await readFile(
    new URL("../docs/Website-Events.xlsx", import.meta.url),
  );
  return bytes.buffer.slice(
    bytes.byteOffset,
    bytes.byteOffset + bytes.byteLength,
  );
};

void test("generation reads the canonical workbook and rejects missing or invalid replacements", async () => {
  const directory = await mkdtemp(join(tmpdir(), "shpe-events-"));
  const output = join(directory, "events.json");
  try {
    const expected = await parseEventsWorkbook(await workbook());
    await generateEvents(workbookPath, output);
    const original = await readFile(output, "utf8");
    assert.deepEqual(JSON.parse(original), expected);
    await assert.rejects(
      generateEvents(join(directory, "missing.xlsx"), output),
    );
    const invalid = join(directory, "invalid.xlsx");
    await writeFile(invalid, "invalid workbook");
    await assert.rejects(generateEvents(invalid, output));
    assert.equal(await readFile(output, "utf8"), original);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});

void test("publishing, editing, unpublishing and deleting rows change the next event list", () => {
  const event = row();
  event[0] = "Draft";
  assert.deepEqual(parseEventRows([headers, event]), []);
  event[0] = "Published";
  assert.equal(parseEventRows([headers, event])[0]?.title, "Fall meeting");
  event[2] = "Updated meeting";
  assert.equal(parseEventRows([headers, event])[0]?.title, "Updated meeting");
  event[0] = "Draft";
  assert.deepEqual(parseEventRows([headers, event]), []);
  assert.deepEqual(parseEventRows([headers]), []);
});

void test("incomplete drafts are allowed; invalid published data is rejected with row numbers", () => {
  assert.deepEqual(parseEventRows([headers, ["Draft"], []]), []);
  const cases: [number, unknown, RegExp][] = [
    [0, "Publish", /Status/],
    [1, "", /Event ID/],
    [2, "", /Title/],
    [3, "Other", /Category/],
    [4, "9/25/26", /Excel date/],
    [5, new Date("2026-09-25T16:00:00Z"), /End must be later/],
    [6, "", /Location/],
  ];
  for (const [column, value, message] of cases) {
    const data: unknown[] = row();
    data[column] = value;
    assert.throws(() => parseEventRows([headers, data]), message);
  }
  assert.throws(
    () => parseEventRows([headers, row(), row()]),
    /row 3: duplicate/,
  );
  assert.throws(() => parseEventRows([["Wrong headings"]]), /column headings/);
});

void test("Milwaukee time handles winter, summer, date boundaries, and daylight-saving gaps", () => {
  assert.equal(
    eventInstant("2026-01-25T17:30:00").toISOString(),
    "2026-01-25T23:30:00.000Z",
  );
  assert.equal(
    eventInstant("2026-09-25T17:30:00").toISOString(),
    "2026-09-25T22:30:00.000Z",
  );
  assert.throws(() => eventInstant("2026-03-08T02:30:00"), /does not exist/);
  assert.equal(
    eventInstant("2026-11-01T01:30:00").toISOString(),
    "2026-11-01T06:30:00.000Z",
  );
  assert.equal(calendarDate("2026-09-26T01:30:00Z").getUTCDate(), 25);
  assert.equal(eventTimeLabel("2026-09-25T17:30:00"), "5:30 PM");
  const event = parseEventRows([headers, row()])[0]!;
  assert.equal(
    new URL(googleCalendarUrl(event)).searchParams.get("dates"),
    "20260925T223000Z/20260925T233000Z",
  );
  assert.equal(
    new URL(icsUrlFor(event), "https://shpeuwm.org").searchParams.get("start"),
    "2026-09-25T22:30:00.000Z",
  );
});

void test("oversized downloads and malformed workbooks are rejected", async () => {
  await assert.rejects(
    parseEventsWorkbook(new ArrayBuffer(MAX_WORKBOOK_BYTES + 1)),
    /exceeds/,
  );
  await assert.rejects(
    parseEventsWorkbook(new TextEncoder().encode("not an xlsx").buffer),
  );
});
