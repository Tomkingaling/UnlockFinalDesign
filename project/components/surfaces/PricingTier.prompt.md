A subscription pricing tier. Render three in a grid; mark the middle one `highlighted`.

```jsx
<PricingTier name="Core" price="£199" period="/month" desc="…" features={["…","…"]} onCta={join} />
<PricingTier name="Pro" price="£499" period="/month" highlighted desc="…" features={[…]} onCta={join} />
<PricingTier name="Family Office" price="Custom" cta="Contact us" desc="…" features={[…]} onCta={contact} />
```
