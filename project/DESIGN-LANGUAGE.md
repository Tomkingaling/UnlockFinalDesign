# Unlock Website Design System

The visual language of the **Unlock** marketing site — a portfolio-intelligence platform for
UK investors. This system captures the dark, near-black aesthetic with a single confident green
accent (`#00bb77`), light-weight Aeonik headings, and restrained motion, so new landing pages and
microsites render identically to the flagship site.

> Scope: this is the **marketing-website** style (public landing pages, product/pricing/about
> pages, lead-capture forms). The authenticated app uses the same palette on solid `#444` borders;
> a sample of it lives in the UI kit.

## Sources
- **GitHub:** `github.com/cloudworkz-org/unlock-site` (`main`) — the real Vite/React/Tailwind v4
  source of the live site. Tokens here are lifted from `src/index.css`; components mirror
  `src/components/public/*` and `src/components/site/*`.
- Rebuilt reference: `Unlock.dc.html` in this project (full multi-page recreation).

---

## CODIFIED CONVENTIONS — Jun 2026 (single source of truth)

These rules were locked in across all pages and written back into the token files so new
sites inherit them automatically. **Build new pages against the tokens, not inline hexes.**

1. **Fonts** — `--u-font-body` = **Aeonik** (default for body + headings). `--u-font-display` /
   `--u-font-serif` = **Noto Serif JP** (display numbers, pull-quotes, eyebrow stats, legal).
   Both self-hosted in `/fonts` via `tokens/fonts.css`.
2. **CTAs** — **square** corners (`--u-radius-cta:0`), text **UPPERCASE**, **normal (400)** weight,
   `letter-spacing:0.04em`. Use the `.u-cta` utility or `--u-weight-button` / `--u-tracking-button`.
3. **Inputs / badges / chips / table headers / stamps** — **square** (`--u-radius-s:0`,
   `--u-radius-input:0`). Cards & feature panels keep their soft radius (`--u-radius-m/l`).
4. **Data-viz** — **green→greyscale** ramp (`--u-viz-1..8` / `--role-viz-1..6`), never multicolour.
5. **Logo** — real Unlock wordmark in nav/footer; Unlock isotype replaces any `Ø`/placeholder glyph.

Reference utilities live in `tokens/effects.css` (`.u-cta`, `.u-input`); radius/weight/viz tokens
in `tokens/spacing.css`, `tokens/typography.css`, `tokens/colors.css`, `tokens/scales.css`.

---


**Voice:** confident, precise, quietly premium. Written for sophisticated investors — never
salesy, never hype. Short declarative sentences. Frequent **two-part headlines** with a line break
and a parallel structure:
- "See everything. / Protect everything."
- "Too wealthy for robo-advice. / Too small for a family office."
- "The rules are changing. / Your portfolio should too."
- "Everything in one place. / Nothing left to chance."

**Person:** addresses the reader as **"you" / "your"**; the company is **"we" / "Unlock"**.

**Casing:** Sentence case for headlines and body. **Eyebrow labels are UPPERCASE** with wide
tracking (e.g. `THE PROBLEM`, `WHAT YOU GET`, `WHY UNLOCK`) and always green.

**Tone specifics:** plain-English financial clarity ("See exactly what HMRC will claim"). Numbers
are concrete (£2.5M, 40%, £199/month). UK spelling (optimise, analyse, modelling). No emoji, no
exclamation marks. Compliance language is present but tucked into the footer / risk boxes, never
the hero.

**Microcopy patterns:** CTAs are verb-first and specific — "Join the waiting list",
"Become a founding investor", "Get early access", "See how it works", "Try a demo". Reassurance
lines sit under CTAs ("No commitment — just priority access when we launch.").

---

## VISUAL FOUNDATIONS

**Mood:** dark, near-black, editorial. Feels like a premium fintech terminal — calm, data-aware,
expensive. One accent colour does all the signalling.

**Colour:** the palette is a stack of near-black greys (`#1a1a1a` page/footer → `#1f1f1f` deep
sections → `#2b2b2b` primary sections → `#333` raised chips) with **brand green `#00bb77`** as the
only chromatic colour in most views. Green is a *signal*, not decoration: eyebrows, CTAs, icons,
hairline accents, the gradient hero word. Status colours (amber `#f59e0b`, red `#ef4444`,
info-blue `#3b82f6`) appear only in data/risk contexts. Text is white at full strength for
headings, `rgba(255,255,255,0.5)` for body, `0.3` for faint labels.

**Type:** Aeonik for body + headings (Inter is the fallback face). The signature move is **display
headings in Aeonik Light (300)** at large fluid sizes with tight tracking (`-0.015em`) and `1.1`
line-height — modern, airy, not bold. Body copy is Aeonik 400/500 at 14–16px, `1.6` line-height,
`rgba(255,255,255,0.5)`. Eyebrow labels: Aeonik Medium 12px, UPPERCASE, `0.25em` tracking, green.
Noto Serif JP is held in reserve for display numbers, pull-quotes and legal/compliance footnotes.
Data uses `tabular-nums`.

**Layout:** centered content, `max-width:1240px` (720px for hero/prose, 520px for forms),
24px gutters. Generous vertical rhythm — `112px` section padding. Card grids use
`auto-fit, minmax(...)`. Sections alternate between `#1f1f1f` and `#2b2b2b` to create rhythm; each
content section is separated by a **green-fade hairline divider**. Faint giant watermark words
(`PROBLEM`, `FEATURES`, `WHY`) sit top-right of sections at ~1.5% opacity.

**Backgrounds:** no photography. The hero carries a faint **12×8 grid of pulsing green squares**
(opacity ~0.03) plus a soft radial green glow (`MorphingBlob`). Otherwise flat near-black. A
scrolling **data ticker** (market figures) sits under the hero.

**Cards:** subtle. `border-radius:8px` (12px for larger panels), `1px` border at
`rgba(255,255,255,0.09)`, fill `rgba(255,255,255,0.03)`. On hover, feature/tool cards lift the
fill to `0.06` and the border to `rgba(1,188,119,0.25)`. Pricing's highlighted tier swaps to a
green-tinted fill + green border. No heavy drop-shadows on dark; shadows are reserved for the
green CTA glow.

**Buttons:** two variants. **Primary** = solid green `#00bb77`, near-black text, 600 weight,
`6px` radius; hover adds a green glow (`0 4px 18px -2px rgba(1,188,119,0.45)`). **Outline** =
transparent, `rgba(255,255,255,0.2)` border, muted-white text; hover lightens to white + 8% white
fill. Both can carry the **arc-hover** ring (a thin green stroke sweeping ~270° around the button)
— the literal "unlock" gesture.

**Motion:** restrained and purposeful. One easing curve everywhere: `cubic-bezier(.16,1,.3,1)`
(fast-in, soft-settle). Entrances are gentle slide-ups (`translateY` only — never fade from
opacity:0, so content is never stranded invisible). Reveal duration ~0.7s, hero ~0.9s, staggered
~80ms. Nav links grow a green underline; cards lift 4px; the logo's padlock shackle "clicks" open
on hover. No bounces, no parallax gimmicks, no decorative micro-interactions.

**Press / hover states:** hover = lighten (white fill rises, border brightens) or green glow;
press = subtle `scale(0.97)`. Links transition colour to white or green.

**Borders & radii:** hairline borders, never thick. Radii are small and consistent: 6 / 8 / 12.
Pills (100px) only for status badges.

**Iconography:** see below — thin line icons, never filled.

---

## ICONOGRAPHY

The site uses **Lucide** (`lucide-react`) — thin, rounded, 1.5–2px stroke, no fill, `currentColor`
(almost always green on dark). Icons are small (16–20px) and sit above card titles or inline in
lists. Examples in use: `BarChart3`, `Shield`, `Zap`, `FileText`, `PieChart`, `TrendingUp`,
`Link2`, `Users`, `Briefcase`, `GraduationCap`, `Monitor`, `Smartphone`, `Lock`, `Calculator`,
`Scale`, `Check`, `AlertTriangle`.

**Use Lucide** (CDN `lucide` / `lucide-react`) for any new work — match stroke width 1.7–2,
`stroke-linecap:round`, `currentColor`. Never use emoji. Never use filled/duotone icon sets.

**Logo:** the `UNLOCK` wordmark is a single SVG (`assets/unlock-wordmark.svg`) — the "O" is a
padlock glyph. Render in `currentColor` (green in nav, `#555` in footer). The padlock shackle
animates open on hover on the live site.

---

## INDEX

- `styles.css` — root entry; `@import`s all tokens + fonts. Link this one file.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `scales.css` (tonal ramps 50–900 + semantic roles), `effects.css`, `fonts.css`.
- `guidelines/` — foundation specimen cards (colours, type, spacing, effects) shown in the
  Design System tab.
- `components/` — reusable React primitives:
  - `buttons/` — `ArcButton` (primary / outline, arc-hover)
  - `surfaces/` — `Card`, `FeatureCard`, `PricingTier`, `TeamCard`, `StatCard`, `InsightCallout`
  - `text/` — `Eyebrow`, `SectionHeading`, `SectionHeader`, `StatBlock`, `Badge`, `PullQuote`
  - `data/` — `ComparisonTable` (Unlock-vs-incumbents matrix)
  - `forms/` — `Field` (labelled input / select), `LeadCaptureInline`
  - `navigation/` — `NavBar`, `Footer`
  - `disclosure/` — `Accordion` (FAQ), `Tabs` (underline switcher)
  - `feedback/` — `Toast` (lead-capture / sync confirmation)
  - `effects/` — `GridPulse`, `DataTicker`
  - `brand/` — `UnlockLogo`
- `ui_kits/website/` — homepage recreation composing the components.
- `assets/` — `unlock-wordmark.svg`.
- `references/canonical/` — the **authoritative** Unlock spec (tokens, components, layout, voice,
  accessibility) copied from `cloudworkz-org/sweet-design-specs`.
- `references/RECONCILIATION.md` — where our build matches / clashes with that spec + open decisions.
- `SKILL.md` — portable skill manifest.

> To share: set the file type to **Design System** in the Share menu so your org can use it.
