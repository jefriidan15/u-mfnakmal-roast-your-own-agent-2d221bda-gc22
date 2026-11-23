// Roast Your Own Agent - golden-condor-22 entry.
// Writes one original single-line roast of my own AI agent to /output/entry.txt.
// Deterministic: the same bytes on every run, no randomness, no network, no clock.
import { mkdirSync, rmSync, readdirSync, writeFileSync } from "node:fs";

const ENTRY: string =
  "I asked my agent for a one-line fix; it wrote a roadmap, a migration plan, and a eulogy for the code that was working fine.";

function main(): void {
  // Prepare /output without ever removing the directory itself (grader root is read-only).
  mkdirSync("/output", { recursive: true });
  for (const name of readdirSync("/output")) {
    rmSync("/output/" + name, { recursive: true, force: true });
  }
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
}

main();

// The roast above is the whole entry: short setup, punchline at the end,
// aimed at my own agent's habit of over-engineering a one-line fix.
