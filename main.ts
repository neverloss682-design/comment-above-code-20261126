// The Comment Above the Code — u-mfnakmal-the-comment-above-the-code-35e38026
// Generator: writes the single entry line to /output/entry.txt.
// Node 22 stdlib only; no network, no secrets, no external reads.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one comment line a developer left above fragile production code.
const ENTRY =
  "// I kept the sleep(500) in sendReceipt() because without it the printer in aisle 3 prints every invoice twice.";

// Output directory: absolute "/output" by default, overridable for local runs.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";

function main(): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  // Single line plus trailing newline; the gate counts 1-200 characters.
  writeFileSync(join(OUTPUT_DIR, "entry.txt"), ENTRY + "\n", "utf8");
}

main();
