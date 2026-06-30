App data surfaces.

```jsx
<StatCard label="Portfolio total" value="£2,945,000" />
<InsightCallout onDismiss={hide}>
  Estimated IHT exposure is <strong style={{color:'#fff'}}>£4,313,024</strong>.
</InsightCallout>
```

- `StatCard` is the label-left / number-right KPI row. For the marketing "big number over a
  label" use `StatBlock` (text group) instead.
- `InsightCallout` is the green left-border notice; pass `onDismiss` for a closable banner.
