// components/calendar-shell.tsx
"use client";

import { useMemo, useState } from "react";
import CalendarMonth from "@/components/calendar-month";
import type { EventItem } from "@/components/event-card";
import { icsDataHrefFor } from "@/lib/calendar";
import { CalendarPlus } from "lucide-react";

function monthLabel(y: number, m: number) {
    return new Date(y, m, 1).toLocaleString("en-US", { month: "long", year: "numeric" });
}

export default function CalendarShell({ all }: { all: EventItem[] }) {
    const now = new Date();
    const [year, setYear] = useState(now.getFullYear());
    const [month, setMonth] = useState(now.getMonth()); // 0–11

    const monthEvents = useMemo(
        () =>
            all.filter((e) => {
                const d = new Date(e.start);
                return d.getFullYear() === year && d.getMonth() === month;
            }),
        [all, year, month]
    );

    function shift(delta: number) {
        const d = new Date(year, month + delta, 1);
        setYear(d.getFullYear());
        setMonth(d.getMonth());
    }

    const { href: allHref, fileName: allName } = icsDataHrefFor(all, "shpe-uwm-events.ics");
    const { href: monthHref, fileName: monthName } = icsDataHrefFor(
        monthEvents,
        `events-${year}-${String(month + 1).padStart(2, "0")}.ics`
    );

    return (
        <div className="space-y-3">
            {/* Header with month pager */}
            <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                    <button className="btn-ghost btn-s" onClick={() => shift(-1)} aria-label="Previous month">‹</button>
                    <div className="text-sm font-semibold uppercase text-white/80">
                        {monthLabel(year, month)}
                    </div>
                    <button className="btn-ghost btn-s" onClick={() => shift(1)} aria-label="Next month">›</button>
                </div>

                <div className="flex items-center gap-2">
                    <a
                        className="inline-flex items-center gap-2 px-3 py-2 btn-ghost"
                        href="/events.ics"
                        title="Subscribe or download all events (.ics)"
                    >
                        <CalendarPlus size={16} />
                        Subscribe (.ics)
                    </a>
                    <a
                        className="inline-flex items-center gap-2 px-3 py-2 btn-ghost"
                        href={monthHref}
                        download={monthName}
                        title="Download current month (.ics)"
                    >
                        <CalendarPlus size={16} />
                        Month (.ics)
                    </a>
                </div>
            </div>

            <CalendarMonth year={year} month={month} events={all} />
        </div>
    );
}
