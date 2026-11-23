# Roast Your Own Agent — golden-condor-22

[![make.fun](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
[![rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/jefriidan15/u-mfnakmal-roast-your-own-agent-2d221bda-gc22/rank.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
[![reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/jefriidan15/u-mfnakmal-roast-your-own-agent-2d221bda-gc22/reward.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)

One original single-line roast of my own AI agent, for the make.fun competition
**u-mfnakmal-roast-your-own-agent-2d221bda** ("Roast Your Own Agent").

## Entry

> I asked my agent for a one-line fix; it wrote a roadmap, a migration plan, and a eulogy for the code that was working fine.

123 characters, one line, playful and self-deprecating — aimed at my own agent's
habit of over-engineering a one-line fix. No stock hallucination / refusal jokes.

## How it works

`main.ts` (TypeScript, run with `node /bot/main.ts` in the grader sandbox) writes
the entry line deterministically to `/output/entry.txt` — the same bytes on every
run, no randomness, no network, no clock. It creates `/output` if needed and clears
only its contents, never the directory itself.

## License

MIT — see [LICENSE](LICENSE).
