import "server-only";
import { events } from "./events-data";
import { createMicrosoftEventsSource } from "./microsoft-events";

let microsoftSource: ReturnType<typeof createMicrosoftEventsSource> | undefined;

export async function getCalendarEvents() {
  const tenantId = process.env.MICROSOFT_TENANT_ID;
  const clientId = process.env.MICROSOFT_CLIENT_ID;
  const clientSecret = process.env.MICROSOFT_CLIENT_SECRET;
  // Keep the existing calendar working until the private connection is configured.
  if (!tenantId && !clientId && !clientSecret) return events;
  if (!tenantId || !clientId || !clientSecret)
    throw new Error("Microsoft events configuration is incomplete");
  microsoftSource ??= createMicrosoftEventsSource({
    tenantId,
    clientId,
    clientSecret,
    workbookPath: process.env.EVENTS_WORKBOOK_PATH || "Website-Events.xlsx",
  });
  return microsoftSource();
}
