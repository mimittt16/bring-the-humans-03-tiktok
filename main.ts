import { copyFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// This entry's program does one thing: hand the video's address to the grader
// by copying VIDEO.json into the output directory.
const VIDEO_FILE = "VIDEO.json";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
if (outputDir === undefined || outputDir === "") {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(outputDir, { recursive: true });
copyFileSync(join(repoDir, VIDEO_FILE), join(outputDir, VIDEO_FILE));
