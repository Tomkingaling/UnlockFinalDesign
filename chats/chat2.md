# Rebuild site using design system

_Started 2026-06-28 22:08 UTC_

---

## User

rebuild this site using the design system - https://main.unlock-deck.pages.dev/

## Assistant

Let me look at the reference site and understand the existing design system.

_[tool: read_file]_

_[tool: check_design_system]_

_[tool: web_fetch]_

_[tool: list_files]_

_[tool: web_fetch]_

_[tool: list_files]_

_[tool: web_fetch]_

_[tool: read_file]_

_[tool: web_fetch]_

The reference site is the "prototype & build spec" hub page — distinct from the marketing homepage already in `ui_kits/website/`. Let me check the tokens and key components so I rebuild it faithfully in the system's vocabulary.

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: list_files]_

_[tool: read_file]_

The reference page is a focused, gated "prototype & build spec" hub. I'll rebuild it faithfully in the Unlock system — dark editorial, single green accent, square CTAs — as a Website card alongside the existing homepage.

_[tool: write_file]_

_[tool: show_html]_

_[tool: ready_for_verification]_

Rebuilt the live hub page (`main.unlock-deck.pages.dev`) as `ui_kits/website/prototype-hub.html` — registered as a "Prototype Hub" Website card.

It's a faithful recreation in the Unlock system: dark editorial surface with the ambient grid-pulse field and green glow, green wordmark + "Return On Intelligence" serif tagline, light-weight display H1, and the two gated routes (deck + spec) as hover-lift cards with square uppercase CTAs. The verbatim compliance disclaimer sits in Noto Serif above the footer. Links point at `../../deck.html` and `../../spec`.

## User

you omly did the home page - not any of the eontent

## Assistant

You're right — the live site has the deck and the full spec behind those links. Let me pull that content.Got the full spec. Let me check the deck before planning the rebuild.I have all three pages' content now. The site is: the hub (done), the **build spec** doc, and the **15-slide gated investor deck**. Let me build the two missing pages.

_[tool: update_todos]_

_[tool: web_fetch]_

_[tool: web_fetch]_

_[tool: update_todos]_

First, fix the hub's links to sibling files, then build the spec doc.

_[tool: str_replace_edit]_

_[tool: write_file]_

Spec doc done. Now the 15-slide gated deck — let me use the deck shell.

_[tool: copy_starter_component]_

_[tool: read_file]_

_[tool: read_file]_

Now the deck. It's large — gate overlay, 15 slides, risk bar, two modals, and the interactive EIS model. Writing it as a plain-HTML deck (matching the other two pages) using the deck-stage shell.

_[tool: write_file]_

Both pages built. Let me verify the deck loads cleanly (gate, slides, interactive model).

_[tool: update_todos]_

_[tool: snip]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: save_screenshot]_

_[tool: save_screenshot]_

_[tool: save_screenshot]_

The gate renders well. Let me check a slide and the EIS interactive by entering the deck.

_[tool: save_screenshot]_

Renders well across slides. Let me clean up the temp screenshots and tighten two wrapping labels.

_[tool: delete_file]_

_[tool: str_replace_edit]_

_[tool: check_design_system]_

All three Website cards register cleanly. Let me run final verification on the deck.

_[tool: ready_for_verification]_

The whole site is now rebuilt in the Unlock design system — all three pages, not just the hub:

- **Prototype Hub** (`prototype-hub.html`) — the gated landing with the two routes.
- **Build Spec** (`spec.html`) — the full long-form doc: sticky scroll-spy TOC, all 9 sections, code blocks, tables, the 7 verbatim disclaimers, locked EIS line, prohibited-phrase pills.
- **Investor Deck** (`deck.html`) — the 15-slide gated walkthrough: certification gate (HNW / sophisticated + acknowledgment, stored locally), persistent risk bar, "Important information" modal (7 disclaimers), booking modal with confirm state, and the working interactive SEIS model (ticket slider + outcome toggle → live effective-cost / net-loss / exit-value maths).

All three are registered as Website cards and cross-linked (hub → deck + spec; spec ↔ deck). Each follows the system: dark editorial surfaces, single green accent, square uppercase CTAs, Aeonik body + Noto Serif for taglines and legal.

One note: the deck reuses the live prototype's client-side gate (a local session flag) by design — production still needs the server-side Supabase enforcement described in §6 of the spec.

