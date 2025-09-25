"use client";

import { useMemo, useState } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

type EventItem = {
    id: string;
    title: string;
    start: string;
    end: string;
    location?: string;
    description?: string;
};

type Props = { events: EventItem[] };

// --- date utils ---
function startOfMonth(d: Date) { return new Date(d.getFullYear(), d.getMonth(), 1); }
function addMonths(d: Date, n: number) { return new Date(d.getFullYear(), d.getMonth() + n, 1); }
function sameDay(a: Date, b: Date) { return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate(); }
function pad(n: number) { return n.toString().padStart(2, "0"); }
function toUTC(date: Date) { return new Date(date.getTime() - date.getTimezoneOffset() * 60000); }
function fmtGoogle(dt: Date) { // YYYYMMDDTHHMMSSZ
    const u = toUTC(dt);
    return `${u.getUTCFullYear()}${pad(u.getUTCMonth() + 1)}${pad(u.getUTCDate())}T${pad(u.getUTCHours())}${pad(u.getUTCMinutes())}00Z`;
}
function timeLabel(iso: string) {
    return new Date(iso).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

function buildICS(e: EventItem) {
    const uid = `${e.id}@shpe-uwm`;
    const dtStart = toUTC(new Date(e.start)).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
    const dtEnd = toUTC(new Date(e.end)).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
    const lines = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//SHPE UWM//Calendar//EN",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH",
        "BEGIN:VEVENT",
        `UID:${uid}`,
        `DTSTAMP:${dtStart}`,
        `DTSTART:${dtStart}`,
        `DTEND:${dtEnd}`,
        `SUMMARY:${e.title}`,
        e.location ? `LOCATION:${e.location}` : null,
        e.description ? `DESCRIPTION:${e.description.replace(/\n/g, "\\n")}` : null,
        "END:VEVENT",
        "END:VCALENDAR",
    ].filter(Boolean).join("\r\n");
    return `data:text/calendar;charset=utf-8,${encodeURIComponent(lines)}`;
}
function googleUrl(e: EventItem) {
    const s = fmtGoogle(new Date(e.start));
    const t = fmtGoogle(new Date(e.end));
    const p = new URLSearchParams({
        action: "TEMPLATE",
        text: e.title,
        dates: `${s}/${t}`,
        details: e.description || "",
        location: e.location || "",
        trp: "false",
    });
    return `https://calendar.google.com/calendar/render?${p.toString()}`;
}

function groupByDay(events: EventItem[]) {
    const map = new Map<string, EventItem[]>();
    for (const e of events) {
        const d = new Date(e.start);
        const key = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
        if (!map.has(key)) map.set(key, []);
        map.get(key)!.push(e);
    }
    return map;
}

export function CalendarMonth({ events }: Props) {
    const today = new Date();
    const [cursor, setCursor] = useState(startOfMonth(today));
    const first = startOfMonth(cursor);

    // 6x7 grid from Sunday
    const grid = useMemo(() => {
        const start = new Date(first);
        start.setDate(first.getDate() - first.getDay());
        return Array.from({ length: 42 }, (_, i) => {
            const d = new Date(start);
            d.setDate(start.getDate() + i);
            return d;
        });
    }, [first]);

    const byDay = useMemo(() => groupByDay(events), [events]);
    const monthLabel = cursor.toLocaleString(undefined, { month: "long", year: "numeric" });

    return (
        <div
            className="p-4 border shadow-sm rounded-2xl"
            role="region"
            aria-label={`Calendar for ${monthLabel}`}
            style={{
                borderColor: "color-mix(in oklab, var(--shpe-secondary) 38%, transparent)",
                background: "color-mix(in oklab, var(--shpe-secondary) 18%, transparent)",
            }}
        >
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div
                        className="p-2 rounded-xl ring-1"
                        style={{
                            background: "color-mix(in oklab, var(--shpe-accent) 20%, transparent)",
                            borderColor: "transparent",
                            boxShadow: "inset 0 0 0 1px color-mix(in oklab, white 10%, transparent)",
                        }}
                    >
                        <Calendar className="w-5 h-5" style={{ color: "var(--shpe-accent)" }} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{monthLabel}</h3>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setCursor(startOfMonth(new Date()))}
                        className="px-2 py-1 text-xs btn-ghost"
                        style={{
                            color: "rgba(235,235,235,.85)",
                            background: "var(--shpe-dark)",
                            border: "1px solid color-mix(in oklab, white 8%, transparent)",
                            cursor: "pointer",
                        }}
                    >
                        Today
                    </button>
                    <button
                        onClick={() => setCursor(addMonths(cursor, -1))}
                        aria-label="Previous month"
                        className="px-2 py-1 rounded-lg"
                        style={{
                            background: "var(--shpe-dark)",
                            border: "1px solid color-mix(in oklab, white 8%, transparent)",
                            cursor: "pointer",
                        }}
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => setCursor(addMonths(cursor, 1))}
                        aria-label="Next month"
                        className="px-2 py-1 rounded-lg"
                        style={{
                            background: "var(--shpe-dark)",
                            border: "1px solid color-mix(in oklab, white 8%, transparent)",
                            cursor: "pointer",
                        }}
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-7 text-xs tracking-wide text-center uppercase text-zinc-400">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                    <div key={d} className="py-2">{d}</div>
                ))}
            </div>

            <div
                className="grid grid-cols-7 gap-[1px] rounded-xl"
                role="grid"
                style={{
                    background: "color-mix(in oklab, white 22%, transparent)", // grid gutters
                    border: "1px solid color-mix(in oklab, var(--shpe-secondary) 40%, transparent)",
                }}
            >
                {grid.map((d, i) => {
                    const inMonth = d.getMonth() === cursor.getMonth();
                    const key = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
                    const dayEvents = byDay.get(key) || [];
                    const isToday = sameDay(d, today);
                    const isWeekend = d.getDay() === 0 || d.getDay() === 6;

                    return (
                        <div
                            key={i}
                            role="gridcell"
                            className={cn("relative min-h-[120px] p-2.5 text-sm")}
                            style={{
                                // base day cell
                                background: "color-mix(in oklab, var(--shpe-dark) 92%, transparent)",
                                opacity: inMonth ? 1 : 0.45,
                                // weekend subtle tint
                                ...(isWeekend
                                    ? { backgroundImage: `linear-gradient(0deg, color-mix(in oklab, var(--shpe-mid-navy) 12%, transparent), transparent)` }
                                    : {}),
                                // today's soft halo
                                ...(isToday
                                    ? { boxShadow: "inset 0 0 0 1px color-mix(in oklab, var(--shpe-accent) 35%, transparent)" }
                                    : {}),
                            }}
                        >
                            <div
                                className={cn(
                                    "inline-flex items-center justify-center rounded-md px-2 py-[2px] text-xs",
                                    isToday ? "ring-1" : ""
                                )}
                                style={{
                                    color: isToday ? "var(--shpe-accent)" : "rgba(200,200,200,.7)",
                                    background: isToday ? "color-mix(in oklab, var(--shpe-accent) 22%, transparent)" : "transparent",
                                    boxShadow: isToday ? "inset 0 0 0 1px color-mix(in oklab, white 10%, transparent)" : undefined,
                                }}
                            >
                                {d.getDate()}
                            </div>

                            <div className="mt-2 space-y-1.5">
                                {dayEvents.map((e) => (
                                    <EventPill key={e.id} e={e} />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function EventPill({ e }: { e: EventItem }) {
    const icsHref = buildICS(e);
    const gUrl = googleUrl(e);

    return (
        <div
            className="group rounded-lg border-soft bg-zinc-900/85 p-2 ring-1 ring-white/5 hover:border-[color-mix(in_oklab,var(--shpe-accent)_40%,transparent)]"
            title={`${e.title}${e.location ? ` • ${e.location}` : ""}`}
            style={{
                background: "color-mix(in oklab, var(--shpe-secondary) 16%, transparent)",
                border: "1px solid color-mix(in oklab, white 10%, transparent)",
                boxShadow: "inset 0 0 0 1px color-mix(in oklab, white 6%, transparent)",
            }}
        >
            <div className="min-w-0">
                <div className="line-clamp-2 text-[13px] font-medium leading-snug text-white">{e.title}</div>
                <div className="text-[11px]" style={{ color: "rgba(220,220,220,.7)" }}>
                    {timeLabel(e.start)}{e.location ? ` • ${e.location}` : ""}
                </div>
            </div>

            <div className="mt-1.5 flex items-center gap-1">
                <a
                    href={gUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Add to Google Calendar"
                    className="px-2 py-1 text-[11px] font-medium text-white btn-brand"
                    style={{
                        color: "var(--shpe-accent)",
                        background: "color-mix(in oklab, var(--shpe-accent) 20%, transparent)",
                        boxShadow: "inset 0 0 0 1px color-mix(in oklab, white 10%, transparent)",
                    }}
                >
                    Google
                </a>
                <a
                    href={icsHref}
                    download={`${e.title.replace(/\s+/g, "_")}.ics`}
                    aria-label="Download .ics"
                    className="px-2 py-1 text-[11px] btn-ghost"
                    style={{
                        color: "rgba(230,230,230,.85)",
                        background: "var(--shpe-dark)",
                        border: "1px solid color-mix(in oklab, white 10%, transparent)",
                    }}
                >
                    iCal
                </a>
            </div>
        </div>
    );
}
