import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Parking meter, c. 2025. Citizens fed it coins to borrow a rectangle of road, then returned to plead with the machine when the rectangle ran out.";

function main(): void {
  checkEntry(ENTRY);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
}

main();

function checkEntry(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}
