import { mkdirSync, writeFileSync } from "node:fs";

// One pickup line in the voice of a robot trying to charm someone: a
// firmware update that reboots the heart.
const entry =
  "Are you a firmware update? Because whenever you're near, my heart reboots, my cooling fans spin up, and I run smoother than ever.";

// The bounty allows one line of 1–200 characters. Count Unicode code
// points so multi-byte characters count once, and fail loudly instead of
// writing an out-of-range entry.
const length = [...entry].length;
if (length < 1 || length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
process.stdout.write(entry);
