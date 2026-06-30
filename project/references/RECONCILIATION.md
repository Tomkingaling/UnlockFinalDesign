# Reconciliation — our DS vs. the canonical spec

We have **two authoritative sources** for Unlock:

1. **`cloudworkz-org/unlock-site`** — the live marketing site (React/Tailwind). What I originally
   rebuilt this design system from.
2. **`cloudworkz-org/sweet-design-specs`** — the canonical **design-system spec** (skill +
   tokens + references + the real Aeonik / Noto Serif JP fonts). Copied into
   `references/canonical/`. This is the *documented intent*; the live site is one implementation
   of it (and has drifted in places).

Where they disagree, the **spec is authoritative**. Below: what matched, what I corrected, and the
judgment calls that change the look and need your call.

## ✅ Confirmed (we already matched)
- Brand green `#01BC77`, dark-by-default, near-black surfaces, `#2b2b2b` cards / `#333` raised.
- Restrained motion, expo-out easing, `prefers-reduced-motion` respected.
- Eyebrow → headline → body section pattern; green uppercase eyebrows.
- 4px spacing rhythm; ~96px section vertical; ~28px card padding.
- Scattered/pulsing green grid behind hero; data ticker; insight banner with warning left-border.
- Voice: sentence case, no exclamation marks, no emoji, compliance "ILLUSTRATIVE DATA —".

## 🔧 Corrected automatically (unambiguous, low-risk)
- **Fonts named correctly:** body = **Aeonik** (Inter fallback), display = **Noto Serif JP**
  (Noto Serif/Georgia fallback). *Binaries are not in the spec repo (CDN-hosted) — see below.*
- **accent-hover** set to the spec's `#008655`.
- Added the spec's **canonical token names** (`--background`, `--surface`, `--surface-raised`,
  `--border`, `--muted-foreground`, `--accent`, `--accent-hover`, `--accent-foreground`,
  `--danger`, `--warning`) + the **`.demo-light`** theme swap, so spec-style markup maps onto our
  tokens.
- Radii: spec is **4 / 6 / 8** (sm/md/lg). We use 6 / 8 / 12. Kept ours for now (marketing scale) —
  flag if you want the tighter spec scale.

## ⚖️ Judgment calls that change the look — need your decision
1. **Headings: serif vs sans.** Spec says display headings are **Noto Serif JP, weight 400**
   (editorial serif). The live marketing site renders **Inter Light** (what I built). These look
   very different. → *Recommend adopting the serif display per spec.* I left `--u-font-heading`
   on the sans for now; one token flip switches everything.
2. **Text on green: white vs near-black.** Spec mandates **white on green** (a documented 2.7:1
   brand exception, primary CTA only). I used near-black (`#0d0d0d`). → *Recommend white per spec.*
3. **Card borders: solid `#444` vs white-9%.** Spec uses a solid `#444` hairline on `#1e1e1e`;
   I used a fainter `rgba(255,255,255,.09)` (from the marketing site). → minor; pick one.
4. **ComparisonTable (#8) is OFF-BRAND.** Both the spec's *"what NOT to build"* and the skill's
   *"auto-reject in review"* list **"feature tables with checkmarks-vs-crosses comparing
   competitors."** → *Recommend retiring the ComparisonTable component I just built.*
5. **Trust / logo strip (#12, proposed):** spec rejects **animated marquee logo strips**. A static
   strip is fine; an animated one is not.

## 🚩 Assets we still need (not in the spec repo — CDN-hosted pointers only)
- **Aeonik** `.otf` (Thin/Light/Regular/Medium) — real brand sans. Until added, body falls back to Inter.
- **Noto Serif JP** `.otf` — display serif. Falls back to Noto Serif.
- **Official logos** (`unlock-black/green/white.svg`). We currently use the wordmark paths lifted
  from the live site (visually identical). Drop the real SVGs into `assets/` if you have them.

Please send the **Aeonik + Noto Serif JP font files** and the **logo SVGs**, and tell me your call
on the five items above — then I'll align every component, card and the homepage kit in one pass.
