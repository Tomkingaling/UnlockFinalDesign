# Unlock Design System

The complete, canonical design system for **Unlock** — a portfolio-intelligence platform for UK
investors. Dark, near-black, editorial; a single confident green accent (`#00bb77`); Aeonik body +
Noto Serif JP display; restrained, purposeful motion.

> **Unlock only.** This repo contains the Unlock design system exclusively. It lives under the
> `cloudworkz-org` GitHub org, but carries no Cloudworkz parent-brand tokens, rules, or guidelines.

This repository is the **single source of truth**. Every token, rule, component, guideline, font,
and reference spec lives here. Tokens are lifted from the live site (`src/index.css`); nothing is
invented.

> **Importing into Claude Design / Lovable:** this repo is structured as a Claude Design project —
> component previews carry `<!-- @dsCard … -->` markers and `styles.css` is the single entry point.
> See [Using this system](#using-this-system) at the bottom.

---

## At a glance — the rules that matter

| Rule | Value |
|---|---|
| **Brand green** | `#00bb77` (`hsl(157 99% 37%)`) — the *only* chromatic colour in most views. Hover `#008655`. |
| **Surfaces (dark)** | `#1a1a1a` page/footer → `#1f1f1f` deep → `#2b2b2b` primary → `#333` raised chips |
| **Body font** | **Aeonik** (`--u-font-body`) — body *and* headings |
| **Display font** | **Noto Serif JP** (`--u-font-display` / `--u-font-serif`) — display numbers, pull-quotes, legal |
| **CTAs** | **Square** corners, **UPPERCASE**, normal (400) weight, `letter-spacing:0.04em` — `.u-cta` |
| **Inputs / badges / chips / table headers** | **Square** (`--u-radius-s:0`); cards keep soft radius (8/12px) |
| **Data-viz** | **green→greyscale** ramp (`--u-viz-1..8`) — never multicolour |
| **Status** | amber `#f59e0b`, red `#ef4444`, info-blue `#3b82f6` — data/risk contexts only |
| **Text strengths** | white `#fff` headings · `rgba(255,255,255,.5)` body · `.3` faint labels |
| **Motion** | one easing everywhere: `cubic-bezier(.16,1,.3,1)`. Slide-ups only (never fade from opacity:0). |
| **Borders** | hairline `rgba(255,255,255,.09)` on dark; solid `#444` on app surfaces |
| **Icons** | Lucide, 1.7–2px stroke, no fill, `currentColor` — never emoji, never filled sets |
| **Light theme** | `.demo-light` swaps surfaces to white/`#212022`/`#f5f6f8`, keeps brand + status colours |

Full prose specification: **[DESIGN-LANGUAGE.md](DESIGN-LANGUAGE.md)** (voice, visual foundations,
iconography, layout, motion, the codified conventions).

---

## Repository map

```
styles.css                  ← single entry point (@imports all tokens + fonts). Link THIS.
DESIGN-LANGUAGE.md          ← the full written spec (voice, visuals, motion, conventions)

tokens/                     ← ~197 CSS custom properties, the machine-readable rules
  fonts.css                 · @font-face for Aeonik + Noto Serif JP (self-hosted)
  colors.css                · 52 vars — brand green, surfaces, text, status, viz ramp, demo-light
  typography.css            · 30 vars — font families, fluid display scale, weights, tracking
  spacing.css               · 24 vars — 4px rhythm, radii, container widths, CTA/input radius
  scales.css                · 58 vars — tonal ramps 50–900 + semantic role tokens
  effects.css               · easing, durations + utilities (.u-cta, .u-input, hover-lift)
  role-bridge.css           · 14 vars — maps --role-* aliases onto brand tokens
  brand-template.css        · 16 vars — blank template for spinning up a new tenant brand

guidelines/                 ← foundation specimen cards (shown in the Design System pane)
  colors-brand.html · colors-surfaces.html · colors-text-status.html
  type-display.html · type-body-eyebrow.html · spacing.html · effects.html

components/                 ← 23 React primitives in 11 groups (.jsx + .d.ts + .prompt.md + .card.html)
  brand/        UnlockLogo
  buttons/      ArcButton (primary / outline, arc-hover ring)
  surfaces/     Card · FeatureCard · PricingTier · TeamCard · StatCard · InsightCallout
  text/         Eyebrow · SectionHeading · SectionHeader · StatBlock · Badge · PullQuote
  data/         ComparisonTable (Unlock-vs-incumbents matrix)
  forms/        Field (labelled input/select) · LeadCaptureInline
  navigation/   NavBar · Footer
  disclosure/   Accordion (FAQ) · Tabs (underline switcher)
  feedback/     Toast (confirmation, slide-up)
  effects/      GridPulse · DataTicker

references/
  canonical/    ← authoritative spec from cloudworkz-org/sweet-design-specs
    tokens.md · components.md · layout.md · voice.md · accessibility.md
  RECONCILIATION.md  ← where this build matches / clashes with the canonical spec + open decisions

fonts/                      ← self-hosted Aeonik faces (Light/Regular/Medium/Thin .otf).
                              Noto Serif JP loads from Google Fonts — its self-hosted .otf
                              files were not in the source repo (see NOTICE.md / fonts.css).
assets/                     ← Unlock logo SVGs (wordmark, isotype, black/white/green) + claudia.jpg
public/brand/               ← brandboard reference images
ui_kits/website/            ← full homepage recreation composing the components
templates/landing-page/     ← copy-and-edit starting point: full marketing page (Design Component)
emails/ · slides/ · docs/   ← email, slide, and document chrome built to the system
SKILL.md                    ← portable skill manifest (Agent-Skills compatible)
```

> **Font note:** Aeonik is self-hosted in `/fonts`. **Noto Serif JP is substituted via Google
> Fonts** because the repo referenced `NotoSerifJP-*.otf` files that were not present. To self-host,
> drop those `.otf` files into `/fonts` and restore the `@font-face` rules in `tokens/fonts.css`.

---

## Component catalogue

Every component ships four files: `*.jsx` (the implementation), `*.d.ts` (types), `*.prompt.md`
(usage spec + examples), and a `*.card.html` preview registered in the Design System pane.

| Group | Components | Card |
|---|---|---|
| brand | `UnlockLogo` (wordmark, padlock "O") | brand.card.html |
| buttons | `ArcButton` — primary + outline, square/UPPERCASE, arc-hover ring | buttons.card.html · button-states.card.html |
| surfaces | `Card`, `FeatureCard`, `PricingTier`, `TeamCard`, `StatCard`, `InsightCallout` | surfaces.card.html · surfaces-extra.card.html |
| text | `Eyebrow`, `SectionHeading`, `SectionHeader`, `StatBlock`, `Badge`, `PullQuote` | text.card.html · text-extra.card.html |
| data | `ComparisonTable` | comparison.card.html |
| forms | `Field`, `LeadCaptureInline` | forms.card.html · forms-extra.card.html |
| navigation | `NavBar`, `Footer` | navigation.card.html |
| disclosure | `Accordion`, `Tabs` | disclosure.card.html |
| feedback | `Toast` | feedback.card.html |
| effects | `GridPulse`, `DataTicker` | effects.card.html |

---

## Using this system

**In plain HTML/CSS** — link the single entry point and build against the tokens:
```html
<link rel="stylesheet" href="styles.css">
<!-- then use var(--u-green), var(--u-font-body), .u-cta, etc. Never inline hexes. -->
```

**In React** — import any component and its tokens:
```jsx
import { Accordion } from "./components/disclosure/Accordion.jsx";
// styles.css supplies the --u-* custom properties the component reads.
```

**Into Claude Design** — this repo is a Claude Design project layout (per-component `@dsCard`
preview markers + `styles.css` entry). Clone it locally, then run the `/design-sync` skill from an
interactive `claude` terminal to push it into a claude.ai/design project; set the project type to
**Design System** so the org can build against it. (Direct claude.ai/design import is auth-walled
and cannot run from a Cowork/web session.)

**Into Lovable** — import a Claude Design URL (`import-claude-design-from-url`) once the system is
in Claude Design, or pass it as a workspace design system on `create_project`.

---

## Provenance & related sources

> **This project was built from the GitHub repository
> [`github.com/cloudworkz-org/unlock-design-system`](https://github.com/cloudworkz-org/unlock-design-system)**
> (private, `cloudworkz-org` org). Tokens, components, fonts, assets and guideline cards were
> imported from it directly. **Explore that repository for the fullest, most current source** —
> the live `.dc.html` document recreations, effects labs, and reconciliation notes there give
> deeper context for building new Unlock work than this snapshot alone.

- **Live site source:** `github.com/cloudworkz-org/unlock-site` (`main`) — Vite / React / Tailwind v4.
  Tokens here are lifted from its `src/index.css`; components mirror `src/components/public/*`.
- **Platform app source:** `github.com/WernerSnCW/unlock-platform` — same token set on solid `#444`
  borders; the authenticated app is dark-themed, the `.demo-light` theme is demo/marketing only.
- **Canonical spec:** `cloudworkz-org/sweet-design-specs` → mirrored in `references/canonical/`.

See **[NOTICE.md](NOTICE.md)** for font licensing.
