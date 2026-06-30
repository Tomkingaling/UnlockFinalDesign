# Coverage map — design system vs. the 408 information-types catalog

Honest audit of `information-types-V1` (24 categories · 408 types) against what the Unlock design
system currently ships. Status: **✓ have** · **◑ partial** · **✗ gap**. This is the spec for
"complete" — and the build order to get there.

| # | Category (types) | Status | Have | Top gaps to build |
|---|---|---|---|---|
| 1 | Identity & brand (11) | ◑ | wordmark, isotype, initials avatar, Lucide icons | brand pattern/texture, illustration, photography slots |
| 2 | Text & typography (22) | ✓ | titles, eyebrow, lead, body, pull-quote, caption, link, tag, legal | byline, reading-time, inline code, block quote |
| 3 | Numbers & metrics (14) | ◑ | hero metric, stat trio, KPI tile, currency, score, change | counter, ranking, range, before/after, YoY, sparkline |
| 4 | **Charts & graphs (36)** | ✗ | donut, ring gauge, line, score bars | **the rest: bar/column, pie, area, waterfall, funnel, scatter, 2×2, heatmap, radar, treemap, sankey, waffle, combo…** |
| 5 | Tables (14) | ◑ | data, comparison, pricing-tier, term/detail, allocation | heat-shaded, sortable, expandable, spec sheet |
| 6 | Lists (10) | ◑ | bulleted, numbered, checklist, step-by-step | definition list, nested, reference list |
| 7 | Comparison patterns (10) | ◑ | us-vs-them, tier, feature matrix | scenario (good/med/bad), SWOT, pros/cons, 2×2 |
| 8 | Sequences & flows (18) | ◑ | process steps, horizontal timeline, stepper | vertical timeline, roadmap, gantt, journey map, swimlane, cycle |
| 9 | **Maps & spatial (15)** | ✗ | — | concentric circles, venn, org chart, tree, network, mind map |
| 10 | Composition & grids (12) | ✓ | card/feature/team grid, numbered-badge, sidebar, triptych | bento, masonry, logo grid, avatar cluster |
| 11 | Status & state (11) | ✓ | status pill, RAG, traffic-light, progress bar, ring, health score | maturity scale, live indicator (polish) |
| 12 | Callouts & emphasis (14) | ✓ | info, success, warning, error, pull-quote, inline badge, spotlight | margin note, worked-example box |
| 13 | **Document chrome (42)** | ◑ | covers (doc explorer), section header, page footer | TOC, title page, dividers, back-matter (index/glossary/refs), spine |
| 14 | **Slide patterns (19)** | ✗ | — | full branded deck: title, section, stat, chart, quote, comparison, team, closing |
| 15 | Web page chrome (17) | ✓ | header, hero, feature, pricing, CTA, FAQ, footer, newsletter | announcement bar, empty state, 404 (polish) |
| 16 | Navigation (13) | ✓ | top nav, side nav, breadcrumb, tabs, pagination, nav items | mega menu, anchor/jump nav |
| 17 | Interactive inputs (22) | ✓ | buttons (4 states), toggle, checkbox, radio, segmented, select, input, slider, icon button | autocomplete, multi-select, date picker, number stepper, rating |
| 18 | Forms (11) | ◑ | single-input, inline capture | contact, login, multi-step wizard, survey, filter panel |
| 19 | Feedback & overlays (13) | ◑ | tooltip, spinner, banner, alert | modal, drawer, toast, skeleton loader, popover |
| 20 | **Media (14)** | ✗ | file/download card | video player + thumbnail, carousel, lightbox, code block, audio |
| 21 | Marketing & conversion (13) | ✓ | hero, value-prop, benefits, pricing card, testimonial, newsletter | countdown, limited-offer, exit-intent modal |
| 22 | Social & interaction (10) | ✗ | avatar (partial) | *(low priority for this brand — skip unless needed)* |
| 23 | Compliance & legal (38) | ◑ | FP disclaimer, capital-at-risk, not-advice, illustrative label, company reg, copyright | privacy/cookie, classification stamp, attribution/"as at", regulator ID, watermark |
| 24 | Decorative (8) | ✓ | grid-pulse squares, divider, watermark, border, brand-pattern fill | stamp/seal, flourish |

## The honest picture
**Strong (✓):** status, callouts, grids, web chrome, navigation, inputs, marketing, decorative — the *interactive web* surface is well covered.
**Weak / gap (✗):** **Charts (36)** is the single biggest hole, then **Slide patterns**, **Maps/spatial**, **Media**, and the **back-matter half of Document chrome**. Forms, overlays and the full compliance set are partial.

## Recommended build order (highest leverage first)
1. **Chart kit (Cat 4)** — one themed, token-driven SVG chart family: bar/column, pie/donut, area, line/multi-line, waterfall, funnel, 2×2/quadrant, radar, waffle, combo. *Biggest gap, used everywhere (decks, docs, app).*
2. **Slide template set (Cat 14)** — branded deck on `deck_stage`: title, section, stat, chart, quote, comparison, team, closing.
3. **Document chrome (Cat 13)** — covers, TOC, section openers, back-matter, page header/footer — the print/PDF surface.
4. **Overlays + Forms (19, 18)** — modal, drawer, toast, skeleton; contact/login/multi-step.
5. **Compliance kit (Cat 23)** — the full disclaimer/classification/attribution component set (mostly text, fast).
6. **Maps & spatial (Cat 9)** — concentric circles, venn, org tree, network.
7. **Media (Cat 20)** — video, carousel, lightbox, code block.

Everything new is built **theme-driven** (reads `--role-*`) and dropped into `design-system-live.html`, so it inherits the brand-swap automatically.
