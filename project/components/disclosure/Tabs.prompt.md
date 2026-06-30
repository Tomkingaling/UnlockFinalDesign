Unlock's content switcher — an underline tab rail (reusing the nav-link green-underline motif) with the active panel rendered below. Use for feature breakdowns, "for individuals / for advisers" splits, monthly/annual pricing toggles.

```jsx
<Tabs tabs={[
  { label: "Monthly", content: <PricingTier price="£24" cadence="/mo" /> },
  { label: "Annual", content: <PricingTier price="£199" cadence="/yr" highlighted /> },
]} />
```

- Inactive labels are white-50%; active is full white with the green underline growing in.
- Keep labels to 1–2 words. For data/feature panels, drop `Card`/`FeatureCard` into `content`.
