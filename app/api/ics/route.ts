import { NextResponse } from 'next/server';

// Robust RFC5545 escaping
function esc(raw: string): string {
  const cleaned = raw
    .replace(/\r\n?/g, "\n")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "");
  return cleaned
    .replace(/\\/g, "\\\\")
    .replace(/([;,])/g, "\\$1")
    .replace(/\n/g, "\\n");
}

// iCalendar standards are CRLF fold >75 octets
function foldLines(s: string): string {
  const CRLF = "\r\n";
  return s
    .split("\n")
    .map((line) => {
      const bytes = new TextEncoder().encode(line);
      if (bytes.length <= 75) return line;
      let out: string[] = [];
      let i = 0;
      while (i < bytes.length) {
        const chunk = bytes.slice(i, i + 75);
        out.push(new TextDecoder().decode(chunk));
        i += 75;
      }
      // next lines start with a single space
      return out[0] + CRLF + out.slice(1).map((c) => " " + c).join(CRLF);
    })
    .join(CRLF);
}

// Only accept strict UTC ISO timestamps from event, return YYYYMMDDTHHMMSSZ
function isoToIcsZ(s: string): string {
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z$/.test(s)) {
    throw new Error("Invalid ISO datetime (must be UTC Z).");
  }
  const z = new Date(s);
  if (Number.isNaN(+z)) throw new Error("Invalid date.");
  return s.replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

function safeFilename(raw: string): string {
  const base = raw
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);
  return base || "event";
}

function toICS(params: {
  title: string;
  startIso: string;
  endIso: string;
  location?: string;
  description?: string;
  uid?: string;
  prodId?: string;
}) {
  const EOL = "\r\n";
  const {
    title,
    startIso,
    endIso,
    location = "",
    description = "",
    uid = `${Date.now()}@shpeuwm.org`,
    prodId = "-//SHPE UWM//shpeuwm.org//EN",
  } = params;

  const DTSTART = isoToIcsZ(startIso);
  const DTEND = isoToIcsZ(endIso);
  const DTSTAMP = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    `PRODID:${prodId}`,
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${esc(uid)}`,
    `DTSTAMP:${DTSTAMP}`,
    `DTSTART:${DTSTART}`,
    `DTEND:${DTEND}`,
    `SUMMARY:${esc(title)}`,
    location ? `LOCATION:${esc(location)}` : "",
    description ? `DESCRIPTION:${esc(description)}` : "",
    "END:VEVENT",
    "END:VCALENDAR",
  ].filter(Boolean);

  // join with CRLF and fold long lines
  const joined = lines.join("\n");
  return foldLines(joined) + EOL;
}

export function GET(req: Request) {
  const url = new URL(req.url);
  const title = url.searchParams.get("title") ?? "Event";
  const startIso = url.searchParams.get("start") ?? new Date().toISOString();
  const endIso = url.searchParams.get("end") ?? new Date(Date.now() + 60 * 60e3).toISOString();
  const location = url.searchParams.get("location") ?? "";
  const description = url.searchParams.get("desc") ?? "";
  const slugRaw = url.searchParams.get("slug") ?? "event";

  if (title.length > 200 || location.length > 500 || description.length > 4000) {
    return new NextResponse("Payload too large", { status: 413 });
  }

  let ics: string;
  try {
    ics = toICS({ title, startIso, endIso, location, description });
  } catch {
    return new NextResponse("Bad Request", { status: 400 });
  }
  const filename = `${safeFilename(slugRaw)}.ics`;
  return new NextResponse(ics, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `inline; filename="${filename}"; filename*=UTF-8''${encodeURIComponent(
        filename
      )}`,
      "Cache-Control": "public, max-age=31536000, immutable",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
