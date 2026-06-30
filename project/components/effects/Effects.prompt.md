The signature background motifs.

```jsx
<section style={{ position: "relative", overflow: "hidden" }}>
  <GridPulse />
  ...hero content (give it position:relative; zIndex:10)...
</section>
<DataTicker />
```

- `GridPulse` is decorative and faint (3% opacity); always inside a `position:relative` section.
- `DataTicker` sits directly under the hero. Requires the `u-ticker` / `u-gridpulse` keyframes from
  `effects.css` (shipped via `styles.css`).
