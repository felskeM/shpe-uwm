import { generateEvents } from "./events";

generateEvents()
  .then((events) => {
    console.log(
      `Calendar: ${events.length} Published events from docs/Website-Events.xlsx`,
    );
  })
  .catch((error: unknown) => {
    console.error(
      "Calendar workbook validation failed:",
      error instanceof Error ? error.message : error,
    );
    process.exitCode = 1;
  });
