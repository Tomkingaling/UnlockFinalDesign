Unlock's call-to-action button — solid green `primary` or transparent `outline`, both with the signature arc-hover ring. Use for every CTA.

```jsx
<ArcButton onClick={join}>Join the waiting list</ArcButton>
<ArcButton variant="outline" onClick={more}>See how it works</ArcButton>
<ArcButton type="submit" full>Submit</ArcButton>
```

- `variant="primary"` (default) for the main action; `variant="outline"` for the secondary.
- `full` stretches it in forms and pricing tiers.
- Near-black text on green; never put green text on a green fill.
