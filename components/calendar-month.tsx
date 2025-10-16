"use client";

import Image from "@/components/BpImage";
import { googleCalendarUrl, icsDataHrefFor, slugify } from "@/lib/calendar";
import type { EventItem, Category } from "@/components/event-card";
import { cn } from "@/lib/cn";

// category -> surface/dot utilities from globals.css
const CAT = {
  Workshop: { surface: "surface-workshop", dot: "dot-workshop" },
  Career: { surface: "surface-career", dot: "dot-career" },
  Social: { surface: "surface-social", dot: "dot-social" },
  Outreach: { surface: "surface-outreach", dot: "dot-outreach" },
} as const satisfies Record<Category, { surface: string; dot: string }>;

type Props = {
  year: number; // e.g. 2025
  month: number; // 0 = Jan
  events: EventItem[];
};

export default function CalendarMonth({ year, month, events }: Props) {
  const first = new Date(year, month, 1);
  const startWeekday = first.getDay(); // 0 Sun ... 6 Sat
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Build only as many cells as needed; pad to whole weeks (5 or 6 rows)
  const cells: (Date | null)[] = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div className="p-5 rounded-2xl border-soft surface-navy-18">
      <div className="grid grid-cols-7 gap-2 mb-2 text-xs text-[color:color-mix(in_oklab,var(--foreground)_70%,transparent)]">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="text-center">
            {d}
          </div>
        ))}
      </div>

      {/* Consistent row height per week, responsive: 120px minimum */}
      <div className="grid grid-cols-7 gap-2 [grid-auto-rows:minmax(120px,1fr)]">
        {cells.map((date, idx) => (
          <DayCell key={idx} date={date} month={month} events={events} />
        ))}
      </div>
    </div>
  );
}

function DayCell({
  date,
  month,
  events,
}: {
  date: Date | null;
  month: number;
  events: EventItem[];
}) {
  const dayEvents = date
    ? events.filter((e) => isSameDay(new Date(e.start), date))
    : [];
  const isOtherMonth = date ? date.getMonth() !== month : false;

  return (
    <div
      className={cn(
        "rounded-xl p-2 border-soft surface-navy-18 min-h-0", // min-h-0 to allow children to define height
        isOtherMonth && "opacity-40",
      )}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-semibold text-[color:color-mix(in_oklab,var(--foreground)_90%,transparent)]">
          {date ? date.getDate() : ""}
        </span>
      </div>

      <div className="space-y-1 min-h-0">
        {dayEvents.map((e) => (
          <EventPill key={e.id} e={e} />
        ))}
      </div>
    </div>
  );
}

function EventPill({ e }: { e: EventItem }) {
  const cat = CAT[e.category];
  const start = new Date(e.start);
  const end = new Date(e.end);

  return (
    <div className={cn("group border-soft rounded-lg p-2", cat.surface)}>
      <div className="flex items-start gap-2">
        <span
          className={cn(
            "mt-1 inline-block h-2 w-2 rounded-full shrink-0",
            cat.dot,
          )}
        />
        <span className="text-sm leading-snug line-clamp-2 text-[color:color-mix(in_oklab,var(--foreground)_90%,transparent)]">
          {e.title}
        </span>
      </div>

      {/* SINGLE LINE — time, location, and icons all inline */}
      <div className="mt-1 flex items-center gap-2 text-[11px] text-[color:color-mix(in_oklab,var(--foreground)_70%,transparent)]">
        <span className="truncate">
          {fmtTime(start)}–{fmtTime(end)}
        </span>
        {e.location && <span className="truncate">· {e.location}</span>}

        <div className="ml-auto flex items-center gap-1">
          <a
            href={googleCalendarUrl(e)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Add to Google Calendar"
            title="Add to Google Calendar"
            className="inline-flex h-6 w-6 items-center justify-center rounded-md border-soft bg-black/30 hover:bg-black/45 focus-brand"
          >
            <Image
              src="/images/gcal.png"
              alt="Google Calendar"
              width={14}
              height={14}
            />
          </a>
          <a
            href={icsDataHrefFor([e]).href}
            download={`${slugify(e.title)}.ics`}
            aria-label="Download iCal (.ics)"
            title="Download iCal (.ics)"
            className="inline-flex h-6 w-6 items-center justify-center rounded-md border-soft bg-black/30 hover:bg-black/45 focus-brand"
          >
            <Image src="/images/ical.png" alt="iCal" width={14} height={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

function fmtTime(d: Date) {
  return d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}
