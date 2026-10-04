import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { parseEventsWorkbook } from "../lib/events-workbook";

export const workbookPath = fileURLToPath(
  new URL("../docs/Website-Events.xlsx", import.meta.url),
);
export const generatedPath = fileURLToPath(
  new URL("../lib/generated/events.json", import.meta.url),
);

export async function generateEvents(
  input = workbookPath,
  output = generatedPath,
) {
  const buffer = await readFile(input);
  const events = await parseEventsWorkbook(
    buffer.buffer.slice(
      buffer.byteOffset,
      buffer.byteOffset + buffer.byteLength,
    ),
  );
  const json = JSON.stringify(events, null, 2) + "\n";
  await mkdir(dirname(output), { recursive: true });
  const previous = await readFile(output, "utf8").catch(() => "");
  if (previous !== json) {
    await writeFile(`${output}.tmp`, json);
    await rename(`${output}.tmp`, output);
  }
  return events;
}
