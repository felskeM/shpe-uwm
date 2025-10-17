"use client";

import Image from "@/components/BpImage";
import { googleCalendarUrl, icsDataHrefFor, slugify } from "@/lib/calendar";
import type { EventItem } from "@/components/event-card";

type AugEvent = EventItem & { _start: Date; _end: Date };

function dayKey(d: Date) {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function fmtDateHeader(d: Date) {
    return d.toLocaleDateString([], { weekday: "long", month: "long", day: "numeric" });
}
function fmtTime(d: Date) {
    return d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

export default function AgendaList({
    year,
    month, // 0-based
    events,
}: {
    year: number;
    month: number;
    events: EventItem[];
}) {
    const start = new Date(year, month, 1);
    const end = new Date(year, month + 1, 0, 23, 59, 59);

    const inMonth: AugEvent[] = events
        .map<AugEvent>((e) => ({ ...e, _start: new Date(e.start), _end: new Date(e.end) }))
        .filter((e) => e._start >= start && e._start <= end)
        .sort((a, b) => +a._start - +b._start);

    const days = new Map<string, { date: Date; items: AugEvent[] }>();
    for (const e of inMonth) {
        const k = dayKey(e._start);
        if (!days.has(k)) days.set(k, { date: new Date(e._start), items: [] as AugEvent[] }); // ✅ no any
        days.get(k)!.items.push(e);
    }

    if (inMonth.length === 0) {
        return (
            <div className="rounded-2xl border-soft surface-navy-18 p-4 text-sm text-[color:color-mix(in_oklab,var(--foreground)_80%,transparent)]">
                No events this month yet.
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {[...days.values()].map(({ date, items }) => (
                <section key={dayKey(date)} className="rounded-2xl border-soft surface-navy-18">
                    <header className="px-4 py-2 border-b border-white/10">
                        <h3 className="text-base font-semibold text-[color:var(--foreground)]">{fmtDateHeader(date)}</h3>
                    </header>
                    <ul className="divide-y divide-white/10">
                        {items.map((e) => (
                            <li key={e.id} className="p-4">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <div className="text-sm font-medium text-[color:var(--foreground)]">{e.title}</div>
                                        <div className="mt-0.5 text-xs text-[color:color-mix(in_oklab,var(--foreground)_75%,transparent)]">
                                            {fmtTime(new Date(e.start))}–{fmtTime(new Date(e.end))}
                                            {e.location ? <> — {e.location}</> : null}
                                        </div>
                                        {e.description ? (
                                            <p className="mt-2 text-xs leading-relaxed text-[color:color-mix(in_oklab,var(--foreground)_70%,transparent)] line-clamp-3">
                                                {e.description}
                                            </p>
                                        ) : null}
                                    </div>
                                    <div className="flex gap-1">
                                        <a
                                            href={googleCalendarUrl(e)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Add to Google Calendar"
                                            title="Add to Google Calendar"
                                            className="inline-flex h-8 w-8 items-center justify-center rounded-md border-soft bg-black/30 hover:bg-black/45 focus-brand"
                                        >
                                            <Image src="/images/gcal.png" alt="Google Calendar" width={16} height={16} />
                                        </a>
                                        <a
                                            href={icsDataHrefFor([e]).href}
                                            download={`${slugify(e.title)}.ics`}
                                            aria-label="Download iCal (.ics)"
                                            title="Download iCal (.ics)"
                                            className="inline-flex h-8 w-8 items-center justify-center rounded-md border-soft bg-black/30 hover:bg-black/45 focus-brand"
                                        >
                                            <Image src="/images/ical.png" alt="iCal" width={16} height={16} />
                                        </a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </div>
    );
}
