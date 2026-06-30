Unlock's FAQ / disclosure list — hairline-divided rows that expand to reveal an answer, chevron turning green on open. Use for FAQ sections, "how it works" detail, compliance disclosures.

```jsx
<Accordion items={[
  { q: "Is my money held by Unlock?", a: "No — Unlock never custodies your assets. We read-only connect to your existing accounts." },
  { q: "What does it cost?", a: "£199/month, billed annually. No performance fees, ever." },
]} />
```

- Single-open by default; pass `multi` to allow several open at once.
- `defaultOpen={[0]}` opens the first row on load.
- Keep questions short and declarative; answers in plain UK English, no hype.
