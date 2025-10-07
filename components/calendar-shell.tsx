"use client";

import { useMemo, useState, useEffect } from "react";
import CalendarMonth from "@/components/calendar-month";
import type { EventItem } from "@/components/event-card";
import Image from 'next/image';

function monthLabel(y: number, m: number) {
    return new Date(y, m, 1).toLocaleString("en-US", { month: "long", year: "numeric" });
}

export default function CalendarShell({ all }: { all: EventItem[] }) {
    const now = new Date();
    const [year, setYear] = useState(now.getFullYear());
    const [month, setMonth] = useState(now.getMonth());

    const monthEvents = useMemo(
        () => all.filter((e) => {
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

    // Google needs an absolute URL to your ICS feed
    const [origin, setOrigin] = useState("");
    useEffect(() => { setOrigin(window.location.origin); }, []);
    const googleSubscribeUrl = origin
        ? `https://calendar.google.com/calendar/u/0/r?cid=${encodeURIComponent(`${origin}/events.ics`)}`
        : "https://calendar.google.com/calendar/u/0/r";

    return (
        <div>
            <div className="flex items-center justify-between gap-2 mb-3">
                {/* Month pager (larger arrows) */}
                <div className="flex items-center gap-2">
                    <button
                        className="px-3 py-2 text-2xl leading-none btn-ghost"
                        onClick={() => shift(-1)}
                        aria-label="Previous month"
                    >‹</button>
                    <div className="text-base font-semibold uppercase sm:text-lg text-white/80">
                        {monthLabel(year, month)}
                    </div>
                    <button
                        className="px-3 py-2 text-2xl leading-none btn-ghost"
                        onClick={() => shift(1)}
                        aria-label="Next month"
                    >›</button>
                </div>

                {/* Top-right subscribe actions */}
                <div className="flex items-center gap-2">
                    <a
                        className="inline-flex items-center gap-2 px-2 py-2 btn-ghost"
                        href="/events.ics"
                        title="Subscribe to all events (.ics)"
                    >
                        <Image
                            src="/images/ical.png"
                            alt="iCal"
                            width={16}
                            height={16}
                        />
                    </a>
                    <a
                        className="inline-flex items-center gap-2 px-2 py-2 btn-ghost"
                        href={googleSubscribeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Subscribe in Google Calendar"
                    >
                        <Image
                            src="/images/gcal.png"
                            alt="Google Calendar"
                            width={16}
                            height={16}
                        />
                    </a>
                </div>
            </div>

            <CalendarMonth year={year} month={month} events={all} />
        </div>
    );
}
