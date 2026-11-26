// Funniest Cat Voicemail Greeting — make.fun entry
// Writes one voicemail greeting, recorded by a cat, to /output/entry.txt.
// Gate: UTF-8 text, 1–120 characters, one line.

import { mkdirSync, writeFileSync } from "node:fs";

const greeting =
  "Hi, you've reached Mittens. I'm asleep on your keyboard, " +
  "so leave a message and I'll ignore it at 4 AM.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", greeting, "utf8");

console.log(`Wrote ${greeting.length} chars to /output/entry.txt`);
console.log(greeting);
