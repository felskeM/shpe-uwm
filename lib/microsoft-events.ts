import { MAX_WORKBOOK_BYTES, parseEventsWorkbook } from "./events-workbook";
import type { EventItem } from "../components/event-card";

export type MicrosoftEventsConfig = {
  tenantId: string;
  clientId: string;
  clientSecret: string;
  workbookPath: string;
};

const GRAPH = "https://graph.microsoft.com/v1.0";
const SITE = "panthers.sharepoint.com:/sites/SocietyofHispanicEngineers";

/** Cache per server isolate; never persist credentials or publish private workbook bytes. */
export function createMicrosoftEventsSource(
  config: MicrosoftEventsConfig,
  fetcher: typeof fetch = fetch,
  now = Date.now,
) {
  let token: { value: string; until: number } | undefined;
  let snapshot: { events: EventItem[]; until: number } | undefined;
  let pending: Promise<EventItem[]> | undefined;
  let siteId: string | undefined;

  async function accessToken() {
    if (token && token.until > now()) return token.value;
    const response = await fetcher(
      `https://login.microsoftonline.com/${encodeURIComponent(config.tenantId)}/oauth2/v2.0/token`,
      {
        method: "POST",
        cache: "no-store",
        signal: AbortSignal.timeout(10_000),
        body: new URLSearchParams({
          grant_type: "client_credentials",
          client_id: config.clientId,
          client_secret: config.clientSecret,
          scope: "https://graph.microsoft.com/.default",
        }),
      },
    );
    if (!response.ok)
      throw new Error(`Microsoft authentication failed (${response.status})`);
    const body = (await response.json()) as {
      access_token?: unknown;
      expires_in?: unknown;
    };
    if (
      typeof body.access_token !== "string" ||
      typeof body.expires_in !== "number"
    )
      throw new Error("Invalid Microsoft token response");
    token = {
      value: body.access_token,
      until: now() + Math.max(0, body.expires_in - 60) * 1000,
    };
    return token.value;
  }

  async function graph(path: string) {
    const response = await fetcher(`${GRAPH}${path}`, {
      headers: { Authorization: `Bearer ${await accessToken()}` },
      cache: "no-store",
      signal: AbortSignal.timeout(15_000),
    });
    if (!response.ok) {
      if (response.status === 401) token = undefined;
      throw new Error(`Microsoft workbook request failed (${response.status})`);
    }
    return response;
  }

  async function refresh() {
    if (!siteId) {
      const site = (await (
        await graph(`/sites/${SITE}?$select=id`)
      ).json()) as { id?: unknown };
      if (typeof site.id !== "string")
        throw new Error("Microsoft did not return the SHPE site ID");
      siteId = site.id;
    }
    const path = config.workbookPath
      .split("/")
      .filter(Boolean)
      .map(encodeURIComponent)
      .join("/");
    if (!path) throw new Error("Missing workbook path");
    // Graph /content redirects to a short-lived download URL. Standard fetch strips
    // Authorization on a cross-origin redirect; the URL is never sent to the browser.
    const response = await graph(
      `/sites/${encodeURIComponent(siteId)}/drive/root:/${path}:/content`,
    );
    const reader = response.body?.getReader();
    if (!reader) throw new Error("Empty workbook download");
    const chunks: Uint8Array[] = [];
    let size = 0;
    try {
      while (true) {
        const result = await reader.read();
        if (result.done) break;
        size += result.value.byteLength;
        if (size > MAX_WORKBOOK_BYTES)
          throw new Error("Events workbook exceeds 2 MB");
        chunks.push(result.value);
      }
    } finally {
      await reader.cancel();
    }
    const bytes = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) {
      bytes.set(chunk, offset);
      offset += chunk.byteLength;
    }
    const events = await parseEventsWorkbook(bytes.buffer);
    snapshot = { events, until: now() + 60_000 };
    return events;
  }

  return async function getEvents() {
    if (snapshot && snapshot.until > now()) return snapshot.events;
    if (!pending)
      pending = refresh().finally(() => {
        pending = undefined;
      });
    return pending;
  };
}
