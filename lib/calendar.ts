// lib/calendar.ts
import type { EventItem } from "@/components/event-card";


function toUtcBasic(dt: string) {
    // "2025-10-15T17:00:00-05:00" -> "20251015T220000Z"
    const z = new Date(dt).toISOString(); // 2025-10-15T22:00:00.000Z
    return z.replace(/[-:]/g, "").replace(".000", "");
}

export function googleCalendarUrl(e: EventItem) {
    const dates = `${toUtcBasic(e.start)}/${toUtcBasic(e.end)}`;
    const params = new URLSearchParams({
        action: "TEMPLATE",
        text: e.title,
        dates,
        details: e.description ?? "",
        location: e.location,
        trp: "false",
    });
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function escapeICS(s: string) {
    return s
        .replace(/\\/g, "\\\\")
        .replace(/\n/g, "\\n")
        .replace(/,/g, "\\,")
        .replace(/;/g, "\\;");
}

export function eventToVEVENT(e: EventItem) {
    const uid = `${e.id}@shpe-uwm`;
    const dtStart = toUtcBasic(e.start);
    const dtEnd = toUtcBasic(e.end);
    const now = toUtcBasic(new Date().toISOString());

    return [
        "BEGIN:VEVENT",
        `UID:${uid}`,
        `DTSTAMP:${now}`,
        `DTSTART:${dtStart}`,
        `DTEND:${dtEnd}`,
        `SUMMARY:${escapeICS(e.title)}`,
        e.description ? `DESCRIPTION:${escapeICS(e.description)}` : "",
        `LOCATION:${escapeICS(e.location)}`,
        "END:VEVENT",
    ].filter(Boolean).join("\r\n");
}

export function eventsToICS(events: EventItem[]) {
    return [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//SHPE UWM//Events//EN",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH",
        ...events.map(eventToVEVENT),
        "END:VCALENDAR",
    ].join("\r\n");
}

export function icsDataHrefFor(events: EventItem[], fileName = "events.ics") {
    const ics = eventsToICS(events);
    return {
        href: `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`,
        fileName,
    };
}

export function slugify(s: string) {
    return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
