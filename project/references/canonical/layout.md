# Layout, navigation, page shell

## Container widths

```tsx
<section className="mx-auto max-w-[1280px] px-6 py-24">…</section>
```

- Max content width: **1280px**
- Horizontal padding: **`px-6`** (24px) at every breakpoint
- Vertical rhythm: **`py-24`** (96px) per section — top and bottom

For dense documentation pages (`/spec`, `/design/*`), keep the 1280px container but use `pt-24 pb-12` on the header section and `pb-24` on the last section.

## Page shell

Every page uses `<SiteLayout>` which provides the top nav, footer, and a "Build spec" pill in the corner. Routes are wrapped like:

```tsx
function SomePage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1280px] px-6 pt-24 pb-12">
        <div className="text-[11px] uppercase tracking-[0.18em] text-accent">Section eyebrow</div>
        <h1 className="mt-6 max-w-3xl text-[clamp(2.5rem,5vw,4rem)] leading-[1.04]">
          Page title here.
        </h1>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          Page intro paragraph. One or two sentences.
        </p>
      </section>
      {/* additional sections */}
    </SiteLayout>
  );
}
```

## Top navigation

- Fixed at the top of every page, transparent background that fades to `bg-background/80` with `backdrop-blur` on scroll
- Logo word-mark on the left (Aeonik Medium, 16px, brand-green dot)
- 3–5 text links centered or right
- Primary CTA on the far right (`Join the waiting list`)
- Mobile: hamburger drawer with the same items stacked

`<nav>` MUST have a unique `aria-label` ("Primary" / "Footer" / "Design guide sections"). The corner widget (BuildSpecPill) lives inside an `<aside aria-label="Build spec shortcut">`.

## Footer

Three columns on desktop, single column on mobile:
1. Word-mark + 1-sentence promise + email signup
2. Product links (Method, Vision, Pricing, FAQ)
3. Legal (Privacy, Terms, Build spec)

Background: `bg-background` (no separate surface). Top border: `border-t border-border`.

## Required routes for an Unlock-family site

| Route | Purpose |
| --- | --- |
| `/` | Hero + 4 process cards + 3 feature cards + footer CTA |
| `/method` | Long-form on how the product works |
| `/vision` | Long-form on why it exists |
| `/pricing` | Pricing tiers — usually 2 cards |
| `/faq` | Stacked Q&A, anchor-linkable |
| `/privacy` | Plain-English privacy policy |
| `/spec` | Build spec (technical handoff) |
| `/design` | Design hub (see below) |

### `/design` sub-tree (always present)

- `/design` — overview + search/filter (see `DesignSearch` component)
- `/design/tokens`
- `/design/components`
- `/design/accessibility`
- `/design/print`

## Route file structure

TanStack Start file-based routing. Match the Unlock convention:

```
src/routes/
  __root.tsx          # HTML shell, fonts, OG defaults
  index.tsx           # Home
  method.tsx
  vision.tsx
  pricing.tsx
  faq.tsx
  privacy.tsx
  spec.tsx
  design.tsx          # Hub
  design.tokens.tsx   # Dot = slash; child route
  design.components.tsx
  design.accessibility.tsx
  design.print.tsx
```

Every shareable route MUST define its own `head()` with route-specific `title`, `description`, `og:title`, `og:description`. Never reuse the home page's metadata.

## SEO defaults per route

```tsx
export const Route = createFileRoute("/method")({
  head: () => ({
    meta: [
      { title: "Method — Unlock" },
      { name: "description", content: "How Unlock turns scattered investment accounts into one clear picture." },
      { property: "og:title", content: "Method — Unlock" },
      { property: "og:description", content: "How Unlock turns scattered investment accounts into one clear picture." },
    ],
  }),
  component: MethodPage,
});
```

`og:image` is set at the leaf route (the actual page), never on `__root.tsx` — the root `head()` concatenates into every match.
