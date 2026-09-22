import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import {
  parseEventRows,
  parseEventsWorkbook,
  MAX_WORKBOOK_BYTES,
} from "../lib/events-workbook";
import { createMicrosoftEventsSource } from "../lib/microsoft-events";
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
    new URL("../outputs/excel-events/Website-Events.xlsx", import.meta.url),
  );
  return bytes.buffer.slice(
    bytes.byteOffset,
    bytes.byteOffset + bytes.byteLength,
  );
};

void test("delivered workbook imports all 20 existing events with unique IDs and exact times", async () => {
  const events = await parseEventsWorkbook(await workbook());
  assert.equal(events.length, 20);
  assert.equal(new Set(events.map((e) => e.id)).size, 20);
  assert.equal(
    events.find((e) => e.id === "gbm-1")?.start,
    "2025-09-17T16:00:00",
  );
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

void test("private Graph source authenticates, reuses token and refreshes saved workbook after 60 seconds", async () => {
  const bytes = await workbook();
  const calls: string[] = [];
  let now = 1000;
  let denied = false;
  const fetcher: typeof fetch = (input, init) => {
    const url =
      typeof input === "string"
        ? input
        : input instanceof URL
          ? input.href
          : input.url;
    calls.push(url);
    assert.equal(init?.cache, "no-store");
    if (url.includes("/token")) {
      assert.equal(init?.method, "POST");
      return Promise.resolve(
        Response.json({ access_token: "test-token", expires_in: 3600 }),
      );
    }
    assert.equal(
      new Headers(init?.headers).get("Authorization"),
      "Bearer test-token",
    );
    if (url.includes("?$select=id"))
      return Promise.resolve(Response.json({ id: "site-id" }));
    assert.ok(url.endsWith("/drive/root:/Website-Events.xlsx:/content"));
    return Promise.resolve(
      denied
        ? new Response("Denied", { status: 403 })
        : new Response(bytes.slice(0)),
    );
  };
  const source = createMicrosoftEventsSource(
    {
      tenantId: "tenant",
      clientId: "app",
      clientSecret: "test-secret",
      workbookPath: "Website-Events.xlsx",
    },
    fetcher,
    () => now,
  );
  const [a, b] = await Promise.all([source(), source()]);
  assert.equal(a.length, 20);
  assert.deepEqual(a, b);
  assert.equal(calls.length, 3);
  await source();
  assert.equal(calls.length, 3);
  now += 60_001;
  await source();
  assert.equal(calls.length, 4);
  denied = true;
  now += 60_001;
  await assert.rejects(source(), /403/);
  // A failed refresh must not silently serve the old published list.
  await assert.rejects(source(), /403/);
  assert.equal(calls.filter((url) => url.includes("/token")).length, 1);
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
