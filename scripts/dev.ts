import { watchFile, unwatchFile } from "node:fs";
import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import { generateEvents, workbookPath } from "./events";

async function main() {
  await generateEvents();
  const require = createRequire(import.meta.url);
  const child = spawn(
    process.execPath,
    [
      require.resolve("next/dist/bin/next"),
      "dev",
      "--webpack",
      ...process.argv.slice(2),
    ],
    { stdio: "inherit" },
  );
  let refresh = Promise.resolve();
  // Polling survives Excel's replace-on-save behavior and synced folders on Windows.
  watchFile(workbookPath, { interval: 1000 }, () => {
    refresh = refresh
      .then(async () => {
        await new Promise((resolve) => setTimeout(resolve, 300));
        const events = await generateEvents();
        console.log(`Calendar refreshed: ${events.length} Published events.`);
      })
      .catch((error: unknown) => {
        console.error(
          "Workbook could not refresh; showing the last valid local events. Fix and save the workbook:",
          error instanceof Error ? error.message : error,
        );
      });
  });
  const stop = () => {
    unwatchFile(workbookPath);
    child.kill();
  };
  process.once("SIGINT", stop);
  process.once("SIGTERM", stop);
  child.once("error", (error) => {
    console.error(error);
    stop();
    process.exitCode = 1;
  });
  child.once("exit", (code) => {
    unwatchFile(workbookPath);
    process.exitCode = code ?? 0;
  });
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
