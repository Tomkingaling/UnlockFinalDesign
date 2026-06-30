# Accessibility floor

WCAG 2.2 AA is the floor, not the goal. `@axe-core/playwright` runs in CI against every public route on every PR.

## Non-negotiable rules

1. **All text meets 4.5:1 contrast** (3:1 for large text ≥18pt / 14pt bold and non-text).
2. **Every interactive element has a visible focus state** — `focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background`. Never `outline: none` without a replacement.
3. **Keyboard contracts**: Tab reaches every control; Enter activates links/buttons; Space toggles buttons. Custom interactive cards must use `<button>`, not `<div onClick>`.
4. **Motion respects `prefers-reduced-motion`** — transforms and translations are removed; opacity transitions stay. Wrap any `translate-y` / `scale` in a `@media (prefers-reduced-motion: no-preference)` query, or use a `motion-safe:` Tailwind variant.
5. **Heading hierarchy is sequential.** No `h4` without an `h3` above it. The hero `h1` is unique per page.
6. **Landmarks are unique.** Every `<nav>` has an `aria-label` ("Primary", "Footer", "Design guide sections"). Supporting widgets are wrapped in `<aside aria-label="…">`.
7. **Form inputs always have an associated label.** Use a `<label htmlFor>` or `aria-label` — never placeholder-only.
8. **Images have alt text.** Decorative images get `alt=""`. Lucide icons get `aria-hidden="true"` when paired with text, otherwise an `aria-label`.

## The one documented exception

White text on the brand green `#01BC77` measures **2.7:1** — below the 3:1 threshold for large text. This is the primary CTA color and is intentionally held as a brand exception. Mitigations:

- Used **only** on the primary button at ≥13px medium weight
- Paired with a 1px darker outline (`#008655`) on hover
- Carries the standard 2px accent focus ring with background offset

Tag this exception in axe runs via `disableRules` scoped per-test, never globally:

```ts
await new AxeBuilder({ page })
  .disableRules(["color-contrast"]) // ONLY on routes containing the primary CTA
  .analyze();
```

## CI test suite

Routes axe runs against on every PR:

```
/  /pricing  /method  /vision  /faq  /privacy  /spec
/design  /design/tokens  /design/components  /design/accessibility  /design/print
```

Visual snapshot suite covers every interactive surface across these matrices:
- States: default · hover · focus-visible · active
- Motion: default · `prefers-reduced-motion`
- Direction: LTR · RTL
- Theme: dark (default) · light (`.demo-light` on `<html>`)
- Browsers: Chromium · Firefox baselines

## Per-route rule exemptions (allowed)

- `/spec` exempts `link-in-text-block` (intentional dense prose with inline links)
- The primary-CTA region exempts `color-contrast` (documented above)

Any other axe failure is a hard CI failure — fix the markup, don't add an exemption.

## Quick self-check before opening a PR

- [ ] Tab through the whole page. Can I see where focus is at every stop?
- [ ] Did I add a `<nav>` or `<aside>`? Does it have a unique `aria-label`?
- [ ] Is every heading level reached sequentially (h1 → h2 → h3)?
- [ ] Did I add motion? Wrapped in `motion-safe:` or a reduced-motion guard?
- [ ] Did I add a form input? Does it have an associated label?
