# Design tokens

Drop this into `src/styles.css` after the Tailwind imports and `@font-face` blocks. Every other rule in the system assumes these tokens exist.

## Paste-ready `@theme` block

```css
@theme inline {
  --font-sans: "Aeonik", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Noto Serif JP", ui-serif, Georgia, serif;

  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-surface: var(--surface);
  --color-surface-raised: var(--surface-raised);
  --color-border: var(--border);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-hover: var(--accent-hover);
  --color-accent-foreground: var(--accent-foreground);
  --color-danger: var(--danger);
  --color-warning: var(--warning);

  /* shadcn compatibility aliases */
  --color-primary: var(--accent);
  --color-primary-foreground: var(--accent-foreground);
  --color-card: var(--surface);
  --color-card-foreground: var(--foreground);
  --color-input: var(--border);
  --color-ring: var(--accent);

  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
}

:root {
  --background: #1e1e1e;
  --foreground: #ffffff;
  --surface: #2b2b2b;
  --surface-raised: #333333;
  --border: #444444;
  --muted: #2b2b2b;
  --muted-foreground: #b0b0b0;
  --accent: #01BC77;
  --accent-hover: #008655;
  --accent-foreground: #ffffff;
  --danger: #ef4444;
  --warning: #f59e0b;
  --radius: 0.5rem;
}

.demo-light {
  --background: #ffffff;
  --foreground: #212022;
  --surface: #f5f6f8;
  --surface-raised: #ffffff;
  --border: #e3e6ea;
  --muted: #f5f6f8;
  --muted-foreground: #5b6470;
}
```

## Color reference

| Token | Hex (dark) | Hex (light) | Role |
| --- | --- | --- | --- |
| `background` | `#1e1e1e` | `#ffffff` | Page bg |
| `foreground` | `#ffffff` | `#212022` | Primary text |
| `surface` | `#2b2b2b` | `#f5f6f8` | Cards, panels, nav chrome |
| `surface-raised` | `#333333` | `#ffffff` | Hover/raised, code blocks |
| `border` | `#444444` | `#e3e6ea` | Hairlines, dividers |
| `muted-foreground` | `#b0b0b0` | `#5b6470` | Secondary text, captions |
| `accent` | `#01BC77` | (same) | Brand green — constant |
| `accent-hover` | `#008655` | (same) | Hover state |
| `accent-foreground` | `#ffffff` | (same) | Text on accent fills |
| `danger` | `#ef4444` | (same) | Destructive, errors |
| `warning` | `#f59e0b` | (same) | Compliance banners (left border) |

Brand + semantic colors are **constant across themes**. Only surface palette swaps.

## Typography scale

| Step | Size / line | Family | Used for |
| --- | --- | --- | --- |
| Display XL | `clamp(2.75rem, 6.5vw, 5rem)` / 1.04 | Serif | Hero headlines |
| Display L | `clamp(2rem, 4vw, 3rem)` / 1.04 | Serif | Section headings |
| Heading | 18px / 500 | Sans | Card titles |
| Body | 15px / 1.55 | Sans | Default body |
| Caption | 13px | Sans | Helper text, props tables |
| Eyebrow | 11px / `tracking-[0.18em]` / uppercase | Sans | Section labels |

## Radii

| Token | Value | Used on |
| --- | --- | --- |
| `radius-sm` | 4px | Inputs, chips |
| `radius-md` | 6px | Buttons, tags |
| `radius-lg` | 8px | Cards, panels |

## Spacing rhythm

Tailwind's 4px scale. Don't introduce half-steps.

| Step | Value | Typical use |
| --- | --- | --- |
| 1 | 4px | Hairlines, icon gap |
| 2 | 8px | Inline gaps |
| 4 | 16px | Default gap |
| 6 | 24px | Card inner padding |
| 7 | 28px | Card outer padding (canonical) |
| 12 | 48px | Grid gaps |
| 24 | 96px | Section vertical (`py-24`) |
