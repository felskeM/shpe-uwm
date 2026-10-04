# Excel event calendar

`docs/Website-Events.xlsx` is the only calendar source. Share this file with members. If someone edits a separate copy, copy it back to this exact repository path before publishing. No Microsoft connection is used.

## Editing events

1. On `Sheet1`, enter one event per row in `EventsTable`. Use the blank Draft row; press Tab in the last cell to extend the table.
2. Fill Event ID, Title, Category, Start, End, and Location. Description is optional. IDs must be unique and remain unchanged when editing an event.
3. Enter real Excel dates and times, such as `9/25/2026 5:30 PM`, in Milwaukee/Central time. Include the date in both Start and End. Use values, not formulas. The workbook displays month/day/year: `10/02/26` means October 2; `02/10/26` means February 10. The calendar places each event on its **Start** date, even when End is in a later month.
4. Set Status to **Published** to show the event. **Draft** or blank Status hides it. Deleting a row removes it; no Published rows clears the calendar.
5. Save. Keep the eight headings and `Sheet1` name unchanged.

Dropdowns are prepared through row 228; copy an existing row to carry validation forward. Duplicate IDs and End-before-Start dates are highlighted. The importer supports up to 2,000 event rows and a 2 MB workbook.

## Preview and publish

With `npm run dev` running, saves regenerate the calendar within a few seconds. Reload `/events` if needed. Invalid saves print an error in the terminal and keep the last valid local preview until corrected.

**Saving a shared file alone does not change the hosted website.** The webmaster must commit the updated workbook and push to `main`; the existing GitHub Actions workflow builds and deploys it to Cloudflare. Repository deployment secrets must already be configured. A separately shared copy must be brought back into `docs/Website-Events.xlsx` first.

```sh
npm run check
npm test
git add docs/Website-Events.xlsx
git commit -m "Update calendar events"
git push
```

Wait for the deployment workflow to succeed, then reload the live calendar. Production Node servers and Worker previews also need a rebuild/redeploy for workbook changes.

If an event seems missing, check its Status and Start date, then navigate to that month on the calendar. A successful deployment can contain an event that is outside the currently displayed month.

The hosted server cannot monitor files on a member's computer. Automatic publishing from this local workbook requires a watcher on the computer holding the repository, with that computer awake, connected, and authenticated to GitHub. Sharing independent copies does not synchronize their edits into the repository.

## Implementation and validation

Development startup, type checking, and production builds generate `lib/generated/events.json` from the workbook. This generated file is ignored by Git and bundled into the server build, so Cloudflare needs no filesystem access at runtime. There is no hardcoded fallback list or remote source.

`npm run events:generate` validates the workbook independently. Invalid Published rows or a missing workbook fail the build; correct the reported row or change its Status to Draft. A failed build does not replace the previously deployed site.

```sh
npm ci
npm run check
npm test
npm run cf:build
```

Tests exercise the actual workbook, generation failures, publication/edit/removal behavior, validation, and Central-time conversion.
