# Canonical components

Every component below is copy-ready. Match these exactly before inventing variants.

## Primary button

The single, unambiguous call to action on a screen. Brand-green fill, white text, transition on hover only.

```tsx
<a
  href="…"
  className="rounded-md bg-accent px-5 py-2.5 text-[13px] font-medium text-accent-foreground transition hover:bg-accent-hover"
>
  Join the waiting list
</a>
```

Rules:
- One per screen.
- `<button>` when no target URL; otherwise `<a>` / `<Link>`.
- Size: `sm` = `py-1.5`, `md` = `py-2.5` (default). No `lg`.

## Secondary button

Companion to the primary action. Transparent fill, muted text, hover lifts to foreground.

```tsx
<a
  href="…"
  className="rounded-md px-5 py-2.5 text-[13px] font-medium text-muted-foreground transition hover:text-foreground"
>
  See how it works
</a>
```

Add `border border-border` only on dense surfaces where it needs more weight.

## Card

Rounded surface for grouped content. 28px inner padding, 1px border, surface bg. **No drop shadows.**

```tsx
<div className="rounded-xl border border-border bg-surface p-7">
  <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
  <h3 className="mt-5 text-[15px] font-medium" style={{ fontFamily: "var(--font-sans)" }}>
    Connect your platforms
  </h3>
  <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
    Link ISAs, SIPPs, GIAs, and trusts in minutes. Read-only.
  </p>
</div>
```

Lucide icons at `strokeWidth={1.75}` is the convention. Title is sentence case, max ~4 words.

## Process card (numbered, interactive)

Lifts on hover, accent ring on focus-visible, presses on active. Serif watermark behind the content.

```tsx
<button
  type="button"
  className="group relative -m-3 w-full rounded-lg border border-transparent p-3 text-left
             transition-[transform,border-color,background-color,box-shadow] duration-150
             hover:-translate-y-0.5
             hover:border-[color-mix(in_oklab,var(--color-accent)_30%,transparent)]
             hover:bg-[color-mix(in_oklab,var(--color-accent)_4%,transparent)]
             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
             focus-visible:ring-offset-2 focus-visible:ring-offset-background
             active:translate-y-0 active:scale-[0.985]"
>
  <span
    className="pointer-events-none absolute -left-2 -top-4 select-none text-[80px] font-light leading-none
               transition-colors group-hover:[color:color-mix(in_oklab,var(--color-accent)_18%,transparent)]"
    style={{ fontFamily: "var(--font-display)", color: "color-mix(in oklab, var(--color-accent) 7%, transparent)" }}
  >
    01
  </span>
  <div className="relative pt-10">
    <Icon className="mb-4 h-5 w-5 text-accent" strokeWidth={1.75} />
    <h3 className="text-[18px] font-medium">Connect</h3>
    <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
      Link your platforms. Read-only. Bank-grade encryption.
    </p>
  </div>
</button>
```

## Eyebrow label

11px uppercase brand-green label that precedes section headings. Tracking `0.18em`.

```tsx
<span className="text-[11px] uppercase tracking-[0.18em] text-accent">
  Portfolio intelligence for UK investors
</span>
```

## Insight banner

Surface bg + warning left-border. Compliance and illustrative-data callouts.

```tsx
<div className="rounded-lg border-l-4 border-warning bg-surface p-6">
  <div className="text-[11px] uppercase tracking-[0.18em] text-warning">Non-negotiable</div>
  <p className="mt-3 text-[14px]">ILLUSTRATIVE DATA — synthetic portfolio data.</p>
</div>
```

Variants swap the left-border + label color: `warning` (default), `accent`, `danger`.

## Section opening pattern

Every long-form section opens with eyebrow → headline → body, in that order. Never skip the eyebrow.

```tsx
<section className="mx-auto max-w-[1280px] px-6 py-24">
  <div className="text-[11px] uppercase tracking-[0.18em] text-accent">How it works</div>
  <h2 className="mt-6 max-w-3xl text-[clamp(2rem,4vw,3rem)] leading-[1.04]">
    One system. <span className="text-accent">Documented in full.</span>
  </h2>
  <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
    Body copy. One or two sentences. Plain English. No exclamation marks.
  </p>
</section>
```

## What NOT to build

- Gradient buttons / cards
- Glassmorphism (no `backdrop-blur` on cards)
- Drop shadows on surfaces (use `border-border`)
- Animated marquee logo strips
- Comparison tables with green checkmarks vs red crosses
- Decorative emoji in headings or CTAs
