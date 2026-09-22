"use client";

import { useState } from "react";
import CalendarMonth from "@/components/calendar-month";
import type { EventItem } from "@/components/event-card";
import AgendaList from "@/components/agenda-list";


function monthLabel(y: number, m: number) {
  return new Date(y, m, 1).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export default function CalendarShell({ all, initialYear, initialMonth }: {
  all: EventItem[];
  initialYear: number;
  initialMonth: number;
}) {
  const [year, setYear] = useState(initialYear);
  const [month, setMonth] = useState(initialMonth);

  function shift(delta: number) {
    const d = new Date(year, month + delta, 1);
    setYear(d.getFullYear());
    setMonth(d.getMonth());
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <button
            className="px-3 py-2 text-2xl leading-none btn-ghost focus-brand"
            onClick={() => shift(-1)}
            aria-label="Previous month"
          >
            ‹
          </button>
          <div className="text-base sm:text-lg font-semibold uppercase text-[color-mix(in_oklab,var(--foreground)_80%,transparent)]">
            {monthLabel(year, month)}
          </div>
          <button
            className="px-3 py-2 text-2xl leading-none btn-ghost focus-brand"
            onClick={() => shift(1)}
            aria-label="Next month"
          >
            ›
          </button>
        </div>
      </div>

      {/* Mobile: agenda list */}
      <p className="mb-3 text-sm text-white/70">All event times are shown in Central time (Milwaukee).</p>
      <div className="md:hidden">
        <AgendaList year={year} month={month} events={all} />
      </div>

      {/* Tablet/Desktop: month grid */}
      <div className="hidden md:block">
        <CalendarMonth year={year} month={month} events={all} />
      </div>
    </div>
  );
}
