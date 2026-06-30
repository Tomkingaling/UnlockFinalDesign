The headline stack and small labels.

```jsx
<Eyebrow>The problem</Eyebrow>
<SectionHeading>Wealth management is broken.</SectionHeading>
<SectionHeading as="h1" size="hero">See everything.<br/><span className="u-grad-green">Protect everything.</span></SectionHeading>

<StatBlock value="£2.5M" label="BPR cap from April 2026" />
<Badge tone="green" dot>Live</Badge>
<Badge tone="neutral">Most popular</Badge>
```

- `Eyebrow` is always green + UPPERCASE; use `hero` for the wider hero kicker.
- `SectionHeading` is Inter **Light**; put `<br/>` between the two halves of a parallel headline.
- Wrap the accent word in `className="u-grad-green"` for the gradient-green treatment.
