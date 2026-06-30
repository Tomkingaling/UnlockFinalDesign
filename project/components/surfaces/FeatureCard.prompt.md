The dark Unlock surface. `Card` is the primitive; `FeatureCard` is the icon+title+body grid item.

```jsx
<Card>Plain panel</Card>
<Card hover>Lifts on hover (features/tools)</Card>
<Card highlighted radius="l">Most-popular pricing tier</Card>

<FeatureCard icon={<Shield/>} title="IHT Exposure Engine" desc="See exactly what HMRC will claim." />
```

- `hover` → fill brightens + border turns green. `highlighted` → green-tinted fill + green border.
- Use `FeatureCard` for any 2–3 column benefit grid.
