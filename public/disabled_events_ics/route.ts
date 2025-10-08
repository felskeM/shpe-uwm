// app/events.ics/route.ts
import { NextResponse } from "next/server";
import { events } from "@/lib/events-data"; // see step 4 below
import { eventsToICS } from "@/lib/calendar";

export async function GET() {
  const body = eventsToICS(events);
  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="shpe-uwm-events.ics"',
      "Cache-Control": "public, max-age=300", // 5 min
    },
  });
}
