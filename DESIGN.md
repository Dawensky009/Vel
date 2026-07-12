# Design

Visual system for Vacances en livres. The direction is locked (distilled from nine prior rejections); this file records it so future work stays on-brand. Tokens live in `brand/tokens.css`; the page is `brand/site.html`.

## Theme

A tidy neighborhood library in late-afternoon light — everything in its place, nothing shouts, you want to sit and read. Editorial and text-forward (Gallimard, The New York Review of Books, Poilâne), never a SaaS landing, a saturated Caribbean poster, or an over-styled magazine. Cream paper, navy ink, one warm accent rationed to calls-to-action.

## Color

**Strategy: Restrained.** Cream carries the whole page; navy is the ink; a single warm accent (sun) marks CTAs; green is reserved for the signature and the "gratuit" badge; red is used at most once. No gradients, no glassmorphism, no color outside these tokens.

| Token | Value | Role |
|---|---|---|
| `--vel-cream` | `#F4EDE0` | Page background, everywhere |
| `--vel-navy` | `#1B1464` | Body + headings + footer ground |
| `--vel-sun` | `#FECE01` | CTA background only (never text on cream) |
| `--vel-green-palm` | `#347D2B` | Signature italics, drop cap, "gratuit" badge |
| `--vel-accent-red` | `#C0392B` | Rarissime — reserved |
| `--vel-ink-muted` | `#524B83` | Secondary text (navy-derived) |
| `--vel-line` / `--vel-line-strong` | `#DAD3D1` / `#C9C2C7` | Hairline dividers, table rules |
| `--vel-panel` | `#EDE4D4` | Faintly recessed cream surface |

**Contrast (WCAG, verified):** navy/cream 13.6:1 · ink-muted/cream 6.4:1 · navy/sun 10.6:1 (CTA text) · white/green 5.1:1 (badge) · green/cream 4.4:1 (large text and signature only) · red/cream 4.7:1. Sun on cream is 1.3:1 — **sun is a background, never text.** Focus rings are navy so they read on cream.

## Typography

A three-family system, each with one job. All bans on lookalike defaults (Fraunces, Playfair, Inter, DM, IBM Plex, etc.) apply.

- **Alegreya** (`--font-display`) — hero and section headings at 800, literary italics at 400 for quotes and accents. Argentine warmth; the art direction lives here. Headings carry a trailing period as an editorial tic.
- **Manrope** (`--font-body`) — body, UI, nav, labels, all numbers and prices. Weights 400/500/600/700/800.
- **Caveat** (`--font-script`) — signature only, **≤ 4 uses on the whole page**: the hero "Stay Focus" accent, the footer "Restez connectés", and the closing line. Never for running text.

**Scale:** fluid `clamp()` modular scale, ratio ~1.25, hero capped at 4.75rem (below the 6rem ceiling); display tracking `-0.02em` (above the −0.04em floor). Prose measure 52–66ch. Loaded from Google Fonts with preconnect and `display=swap`; self-hosting a subset is the later performance pass.

## Layout

Container `min(100% − gutters, 1120px)`, fluid gutters via `clamp()`. Sections separated by a hairline and generous fluid vertical rhythm (`--space-section`). The hero is **typographic-led**: a large left-aligned Alegreya statement + sun CTA on the left, balanced on the right by a compact **"la journée" infographic** — a date/place header over a vertical timeline of the day (sun dots on a connecting rule). Never a centered symmetric hero. The provided poster is **not** rendered on the page (it clashed with the restraint); it stays the OG/share image only. Grids are breakpoint-free where possible (`repeat(auto-fit, minmax(…, 1fr))`) for the practical-info cards. Cards are used only where they earn it; dividers and whitespace do most of the structural work. **No side-stripe accents** (`border-left`), ever — full borders, tints, or nothing. **No stats grid** — the day is shown as an editorial timeline, not big-number cells.

## Components

- **Sticky nav** — cream backdrop-blur, `Vel` wordmark (green italic "el"), four anchors (L'événement · Programme · Sponsors · Infos) with a sun underline on hover/active (`aria-current`), always-visible Réserver CTA. Collapses to a disclosure menu on mobile; links stay reachable without JS.
- **Buttons** — `.btn--cta` sun ground + navy label + nudging arrow; `.btn--ghost` navy-outline; `.btn--ghost-invert` cream-outline for navy panels. `.btn--block` for the full-width reservation CTA.
- **Hero infographic** — cream `--vel-panel` card, hairline border; date/place header, then a vertical timeline (`<ol>`): sun dots (`box-shadow` ring punches through) on a `--vel-line-strong` rule, tabular times. Informational, not decorative.
- **"Prendre part" band** — navy panel, two columns (Vous venez / Vous soutenez) split by a 1px rule, sun primary + cream-ghost secondary CTA. Adapted from a two-banner reference into VEL's dual-audience call.
- **Ticket table** — semantic `<table>`, three formulas; the free tier carries a green pill badge.
- **FAQ** — native `<details>` with a green +/– affordance, no decoration.
- **Map** — lazy OpenStreetMap iframe in a bordered frame with a "repère à confirmer" note.
- **Footer** — navy ground, cream text, contacts / réseaux / colophon.

## Motion

Reveal-on-scroll that **enriches an already-visible default** — content is fully visible without JS (`.has-js` gate), an IntersectionObserver adds a short translate/fade, a 2.5s failsafe guarantees nothing ships blank, and `prefers-reduced-motion: reduce` collapses everything to instant. Staggering is limited to the author grid and programme lists; there is no uniform site-wide fade reflex. Easing is `ease-out-expo`; no bounce, no elastic. Hover affordances (CTA arrow nudge, nav underline) are quick and quiet.
