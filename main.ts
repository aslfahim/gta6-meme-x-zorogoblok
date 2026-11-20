// gta6-meme-x-01 entry for @zorogoblok — "The Getaway Driver" (Node 22, standard library only).
// Copies POST.json from the bot directory into the output directory so the
// gate can read the X post address. Nothing else is required of the program.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, 'POST.json'), join(outputDir, 'POST.json'));
} catch (err) {
  console.error(`Could not copy POST.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
