import { NextResponse } from 'next/server';

// minimal escaping for ICS
function esc(s: string) {
  return s.replace(/([,;])/g, '\\$1').replace(/\n/g, '\\n');
}

function toICS(params: {
  title: string;
  startIso: string; // ISO string (UTC recommended)
  endIso: string;
  location?: string;
  description?: string;
  uid?: string; // stable unique id
  prodId?: string; // e.g. -//SHPE UWM//shpeuwm.org//EN
}) {
  const EOL = '\r\n';
  const {
    title,
    startIso,
    endIso,
    location = '',
    description = '',
    uid = `${Date.now()}@shpeuwm.org`,
    prodId = '-//SHPE UWM//shpeuwm.org//EN',
  } = params;

  // VERSION 2.0, PRODID, UID, DTSTAMP, DTSTART/DTEND (prefer Z/UTC)
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    `PRODID:${prodId}`,
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${new Date()
      .toISOString()
      .replace(/[-:]/g, '')
      .replace(/\.\d{3}Z$/, 'Z')}`,
    `DTSTART:${startIso.replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z')}`,
    `DTEND:${endIso.replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z')}`,
    `SUMMARY:${esc(title)}`,
    location ? `LOCATION:${esc(location)}` : '',
    description ? `DESCRIPTION:${esc(description)}` : '',
    'END:VEVENT',
    'END:VCALENDAR',
  ].filter(Boolean);

  return lines.join(EOL) + EOL;
}

export function GET(req: Request) {
  const url = new URL(req.url);
  const title = url.searchParams.get('title') ?? 'Event';
  const startIso = url.searchParams.get('start') ?? new Date().toISOString();
  const endIso = url.searchParams.get('end') ?? new Date(Date.now() + 60 * 60e3).toISOString();
  const location = url.searchParams.get('location') ?? '';
  const description = url.searchParams.get('desc') ?? '';
  const slug = url.searchParams.get('slug') ?? 'event';

  const ics = toICS({ title, startIso, endIso, location, description });
  return new NextResponse(ics, {
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': `inline; filename="${slug}.ics"`,
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
