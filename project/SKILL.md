---
name: unlock-design
description: Use this skill to generate well-branded interfaces and assets for Unlock (the UK portfolio-intelligence platform), either for production or throwaway prototypes/mocks/landing pages. Contains essential design guidelines, colors, type, fonts, the logo, and UI kit components for prototyping in the Unlock website style.
user-invocable: true
---

Read `readme.md` within this skill, and explore the other available files:

- `styles.css` — link this one file; it `@import`s all tokens + fonts.
- `tokens/` — colours, typography, spacing, effects, fonts (CSS custom properties, all `--u-*`).
- `components/` — React primitives (ArcButton, Card, FeatureCard, Eyebrow, SectionHeading,
  StatBlock, Badge, Field, NavBar, Footer, Accordion, Tabs, Toast, GridPulse, DataTicker,
  UnlockLogo).
- `guidelines/` — foundation specimen cards.
- `ui_kits/website/` — a full homepage recreation to copy sections from.
- `assets/unlock-wordmark.svg` — the logo.

Core rules: dark near-black surfaces (`#1a1a1a`/`#1f1f1f`/`#2b2b2b`), one accent — brand green
`#00bb77` (hover `#008655`), used as a signal not decoration. **Aeonik** for body + headings;
**display headings are light (300)** at large sizes with tight tracking. Noto Serif JP is reserved
for display numbers, pull-quotes and legal. Eyebrow labels are green UPPERCASE with 0.25em tracking.
Two-part parallel headlines ("See everything. / Protect everything."). Body in white-50%. Cards are
hairline-bordered with 3% fill, 8–12px radius. CTAs are solid-green or outline, both with the
arc-hover ring. Motion is restrained, easing `cubic-bezier(.16,1,.3,1)`, entrances slide-up via
transform only. Lucide icons, thin stroke, green. No emoji. Keep the FCA/FP compliance footer on any
page mentioning EIS/SEIS or returns.

If creating visual artifacts (landing pages, mocks, throwaway prototypes), copy assets out and
create static HTML files that link `styles.css` for the user to view. If working on production code,
copy assets and read the rules here to design as an expert in the Unlock brand.

If invoked without guidance, ask what they want to build, ask a few questions, then act as an expert
designer who outputs HTML artifacts or production code as needed.
