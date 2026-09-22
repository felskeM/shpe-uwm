/** Event dates without an offset are wall-clock times in Milwaukee. */
export const EVENT_TIME_ZONE = "America/Chicago";

export function eventInstant(value: string): Date {
  if (/(Z|[+-]\d{2}:\d{2})$/.test(value)) return new Date(value);
  const wall = new Date(`${value}Z`);
  if (!Number.isFinite(wall.getTime())) throw new Error("Invalid event date");
  const desired = wall.toISOString().slice(0, 19);
  // Chicago uses UTC-5 or UTC-6. Try both, including DST transition dates.
  // For the repeated fall-back hour, choose its first occurrence.
  for (const offset of [5, 6]) {
    const instant = new Date(wall.getTime() + offset * 3_600_000);
    if (eventWallTime(instant) === desired) return instant;
  }
  throw new Error(
    "Event time does not exist in America/Chicago (DST transition)",
  );
}

export function eventWallTime(instant: Date): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: EVENT_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(instant);
  const part = (name: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === name)?.value;
  return `${part("year")}-${part("month")}-${part("day")}T${part("hour")}:${part("minute")}:${part("second")}`;
}

/** Use a UTC carrier for calendar grid arithmetic, independent of host timezone. */
export function calendarDate(value: string): Date {
  const local = /(Z|[+-]\d{2}:\d{2})$/.test(value)
    ? eventWallTime(new Date(value))
    : value;
  return new Date(`${local}Z`);
}

export function eventTimeLabel(value: string): string {
  return eventInstant(value).toLocaleTimeString("en-US", {
    timeZone: EVENT_TIME_ZONE,
    hour: "numeric",
    minute: "2-digit",
  });
}
