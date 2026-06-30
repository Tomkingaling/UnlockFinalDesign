# Brand voice

The product talks like a careful, knowledgeable friend who happens to manage money for a living. Calm authority. Plain English. Specific over vague.

## Promise (one line)

> Unlock gives UK investors a single, plain-English view of every ISA, SIPP, GIA, and trust they own — so the next portfolio decision is the obvious one.

Adapt the noun for sibling products, but keep the shape: *one-line, names the audience, names the thing, names the outcome*.

## Voice rules

- **Plain English.** No jargon without a definition in the same sentence.
- **Calm authority.** We never shout, never sell fear.
- **Specific over vague.** Numbers, dates, names — not adjectives.
- **Honest about limits.** Illustrative data is labelled. So is uncertainty.

## Never

- Exclamation marks in product UI
- Promises of returns, outperformance, or "beating the market"
- Mixed metaphors ("unlock your financial journey", "supercharge your wealth")
- Decorative emoji in headings or CTAs
- All-caps for emphasis (use eyebrows for labels, italics for citations)
- Idiom that doesn't translate cleanly outside the UK ("knocking it out of the park")
- Words that bend the truth: "effortless", "instant", "magic", "AI-powered" (unless we mean it literally and can demo it)

## Capitalisation

- Page titles, section headings, card titles: **sentence case**
- Buttons: **sentence case** ("Join the waiting list", not "Join The Waiting List")
- Eyebrows: **UPPERCASE** (handled by the `uppercase` Tailwind class — never type in caps)
- Brand and product names always title-case: Unlock, ISA, SIPP, GIA

## Punctuation

- Em-dash `—` with spaces around it for asides ("read-only — bank-grade encryption")
- Oxford comma always
- One space after a period
- End every sentence in body copy with a period. End card titles **without** a period. Hold the rule across the whole page.

## CTA copy

The primary button verb is concrete and action-first. Good:

- Join the waiting list
- See how it works
- Read the method
- Try the demo

Bad:

- Get started
- Learn more
- Click here
- Discover Unlock

## Compliance copy (UK financial services)

When you write anything that mentions investments or returns:

- Use the insight banner with the `warning` left-border
- Lead with "ILLUSTRATIVE DATA —" if the figures are synthetic
- Never name a specific provider in a way that implies recommendation
- Never use "guaranteed", "risk-free", "outperform"

Example:

```tsx
<div className="rounded-lg border-l-4 border-warning bg-surface p-6">
  <div className="text-[11px] uppercase tracking-[0.18em] text-warning">Non-negotiable</div>
  <p className="mt-3 text-[14px]">
    ILLUSTRATIVE DATA — This demo uses synthetic portfolio data. Unlock does not
    provide investment advice. Past performance is not indicative of future results.
  </p>
</div>
```
