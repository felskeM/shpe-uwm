# Shared Excel event calendar

## Event editors

Use `Website-Events.xlsx` in the SHPE UWM SharePoint Shared Documents library:

[Open the shared workbook](https://panthers.sharepoint.com/sites/SocietyofHispanicEngineers/_layouts/15/doc.aspx?sourcedoc=%7Ba74524ad-0655-464c-b596-b10713452e8a%7D&action=edit)

The edited file is in `outputs/excel-events/Website-Events.xlsx`. Replace the existing blank workbook in SharePoint with this file, keeping the same name and location. The local output does not automatically overwrite the SharePoint copy. Share it with the event editors using **Specific people → Can edit**. Website visitors receive only Published event fields, not access to the workbook.

1. On `Sheet1`, enter one event per row in `EventsTable`. Use its blank Draft row; press Tab in the last cell to extend the table.
2. Fill Event ID, Title, Category, Start, End, and Location. Description is optional. IDs must be unique and stay unchanged when an event is edited.
3. Enter real Excel dates and times, such as `9/25/2026 5:30 PM`, in Milwaukee/Central time. Include the date in both Start and End. Do not use formulas in event fields; formula caches may not reflect recent edits.
4. Choose **Published** to show the event. **Draft** or a blank Status hides it. Deleting a row removes the event. Keep the eight headings and `Sheet1` name unchanged.
5. Let Excel save. After the Microsoft connection is activated, reload the website calendar after about a minute to see changes. Already-open browser tabs do not refresh themselves.

The entire Published list comes from this workbook after activation. The initial 20 website events are included. The later duplicate `gbm-1` ID has been changed to `gbm-1-2026-02-12`. An empty Published list deliberately clears the calendar.

Invalid Published rows stop that refresh. The site displays an unavailable message after its previous one-minute snapshot expires; server logs identify the offending row. Correct the entry or set it to Draft. Duplicate IDs and End-before-Start dates are also highlighted in Excel. Validation dropdowns are prepared for 221 event rows; copying an existing table row carries the validation forward. The reader supports up to 2,000 event rows and a 2 MB workbook.

## One-time webmaster / UWM IT setup

The SharePoint editing link alone does not grant the deployed website permission to read the file. No Microsoft credentials or tenant permissions have been configured by this change.

1. Register a single-tenant Microsoft Entra application for the SHPE website.
2. Grant Microsoft Graph **application** permission `Sites.Selected`, with tenant admin consent. Then explicitly grant the app the **read** role on `/sites/SocietyofHispanicEngineers`. `Sites.Selected` consent alone grants no site access. Broad tenant-wide file permissions are unnecessary.
3. Create the app credential using your organization's approved process. Store these as Cloudflare Worker secrets (never as `NEXT_PUBLIC_*` variables or in Git):

   ```sh
   npx wrangler secret put MICROSOFT_TENANT_ID
   npx wrangler secret put MICROSOFT_CLIENT_ID
   npx wrangler secret put MICROSOFT_CLIENT_SECRET
   ```

4. The default path is `Website-Events.xlsx` in the site's default document library root (Shared Documents). If the workbook is in a subfolder, set `EVENTS_WORKBOOK_PATH` to the path relative to that library, for example `Website/Website-Events.xlsx`. Do not paste the `doc.aspx` URL into this setting.
5. Deploy the website changes. Add a temporary event as Draft, verify it is hidden, change it to Published, wait one minute, and reload `/events`. Check its title, date, time, and calendar download. Set it back to Draft afterward.

For local Node development, put those settings in gitignored `.env.local`. For the Worker preview, put them in gitignored `.dev.vars`. If all three Microsoft settings are absent, the current hardcoded calendar continues working. A partial configuration or an inaccessible workbook produces an unavailable message; it never silently falls back to the old list after activation.

The server uses OAuth client credentials and Graph's file download endpoint, then reads the `.xlsx` on the server. It does not use the Graph Excel workbook APIs, which have different authentication restrictions. Tokens and validated events are cached only inside the server isolate, with a 60-second event lifetime. Keep client credentials rotated and update Worker secrets when they change.

## Verification

```sh
npm ci
npm test
npm run check
npm run cf:build
```

Tests import the actual delivered workbook, validate publication and edits, exercise Microsoft fetch caching and errors with a mock, and check Central-time conversion at daylight-saving boundaries. A successful local test does not verify the real UWM tenant permission grant; run the live test in step 5 after activation.

References: [Microsoft selected permissions](https://learn.microsoft.com/en-us/graph/permissions-selected-overview), [Graph file download](https://learn.microsoft.com/en-us/graph/api/driveitem-get-content), [client credentials flow](https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-client-creds-grant-flow).
