"use client";

import Image from "@/components/BpImage";
import { googleCalendarUrl, icsDataHrefFor, slugify } from "@/lib/calendar";
import type { EventItem, Category } from "@/components/event-card";
import { cn } from "@/lib/cn";

// category
const CAT = {
  Workshop: { surface: "surface-workshop", dot: "dot-workshop" },
  Career: { surface: "surface-career", dot: "dot-career" },
  Social: { surface: "surface-social", dot: "dot-social" },
  Outreach: { surface: "surface-outreach", dot: "dot-outreach" },
} as const satisfies Record<Category, { surface: string; dot: string }>;

type Props = {
  year: number; // 2025
  month: number; // 0 = Jan and so forth
  events: EventItem[];
};

export default function CalendarMonth({ year, month, events }: Props) {
  const first = new Date(year, month, 1);
  const startWeekday = first.getDay(); // 0 Sun ... 6 Sat
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // 6x7 grid for calendar
  const cells: (Date | null)[] = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  while (cells.length % 7 !== 0) cells.push(null);
  while (cells.length < 42) cells.push(null);

  return (
    <div className="p-4 rounded-2xl border-soft surface-navy-18">
      <div className="grid grid-cols-7 gap-2 mb-2 text-xs text-[color:color-mix(in_oklab,var(--foreground)_70%,transparent)]">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div
            key={d}
            className="text-center text-[color:color-mix(in_oklab,var(--foreground)_70%,transparent)]"
          >
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
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
        "min-h-28 rounded-xl p-2 border-soft surface-navy-18",
        isOtherMonth && "opacity-40",
      )}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-semibold text-[color:color-mix(in_oklab,var(--foreground)_90%,transparent)]">
          {date ? date.getDate() : ""}
        </span>
      </div>

      <div className="space-y-1">
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
  const time = `${fmtTime(start)}–${fmtTime(end)}`;

  return (
    <div className={cn("group border-soft rounded-lg p-2", cat.surface)}>
      <div className="flex items-center gap-2">
        <span className={cn("inline-block h-2 w-2 rounded-full", cat.dot)} />
        <span className="text-sm truncate text-[color:color-mix(in_oklab,var(--foreground)_90%,transparent)]">
          {e.title}
        </span>
      </div>
      <div className="mt-0.5 flex flex-wrap items-center gap-2 text-[11px] text-[color:color-mix(in_oklab,var(--foreground)_70%,transparent)]">
        <span>{time}</span>
        <span>• {e.location}</span>
        <a
          className="inline-flex items-center gap-1 px-2 py-1 ml-auto btn-ghost focus-brand"
          href={googleCalendarUrl(e)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Add to Google Calendar"
          title="Add to Google Calendar"
        >
          <Image
            src="/images/gcal.png"
            alt="Google Calendar"
            width={16}
            height={16}
          />
        </a>
        <a
          className="inline-flex items-center gap-1 px-2 py-1 btn-ghost focus-brand"
          href={icsDataHrefFor([e]).href}
          download={`${slugify(e.title)}.ics`}
          aria-label="Download iCal (.ics)"
          title="Download iCal (.ics)"
        >
          <Image src="/images/ical.png" alt="iCal" width={16} height={16} />
        </a>
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
