# Design

Visual system for Vacances en livres. The brand direction is locked (distilled from nine prior rejections); this file records it so future work stays on-brand. The live site is a **Next.js app** (`app/` + `components/`); tokens and styles live in `app/globals.css`. The original static prototype remains in `brand/`.

## Theme

A tidy neighborhood library in late-afternoon light — everything in its place, nothing shouts, you want to sit and read. Editorial and text-forward (Gallimard, The New York Review of Books, Poilâne), never a SaaS landing, a saturated Caribbean poster, or an over-styled magazine. Cream paper, navy ink, one warm accent rationed to calls-to-action.

**Evolution (client-directed, July 2026).** At the client's request the site moved from pure editorial restraint to an **imagery-led, immersive** treatment: full-bleed photography, a photo gallery, parallax, and scroll motion. The brand system (palette, type, tokens) is unchanged and still governs — photography and motion now carry the impact the restrained version lacked. Navy **legibility scrims** over photos are the one accepted departure from the "no gradient" rule: functional (text contrast on images), not decorative.

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
- **Caveat** (`--font-script`) — signature only, **≤ 4 uses on the whole page**: the hero "Stay Focus", the band "L'été, en famille", the footer "Restez connectés". Never for running text.

**Scale:** fluid `clamp()` modular scale, ratio ~1.25, display headings capped ≤ 5rem; display tracking `-0.02em` (above the −0.04em floor). Prose measure 52–66ch. **Self-hosted via `next/font`** (Alegreya / Manrope / Caveat, `display=swap`).

## Layout

Container `min(100% − gutters, 1120px)`, fluid gutters via `clamp()`. Sections separated by a hairline and generous fluid vertical rhythm (`--space-section`). The hero is **full-bleed immersive**: a warm reading photograph under a navy legibility scrim, Ken Burns zoom, title + CTA overlaid, and a cream **"la journée" timeline card** floating over the image (date/place header + a vertical timeline, sun dots on a connecting rule). Full-bleed sections (hero, feature band) break the container; content sections keep it. Never a centered symmetric hero. The provided poster stays the OG/share image only. Grids are breakpoint-free where possible (`repeat(auto-fit, minmax(…, 1fr))`); the gallery is a 6-tile mosaic (2-col on mobile). **No side-stripe accents** (`border-left`), ever. **No stats grid** — the day is an editorial timeline, not big-number cells.

## Components

- **Sticky nav** — cream backdrop-blur, `Vel` wordmark (green italic "el"), four anchors (L'événement · Programme · Sponsors · Infos) with a sun underline on hover/active (`aria-current`), always-visible Réserver CTA. Collapses to a disclosure menu on mobile; links stay reachable without JS.
- **Buttons** — `.btn--cta` sun ground + navy label + nudging arrow; `.btn--ghost` navy-outline; `.btn--ghost-invert` cream-outline for navy panels. `.btn--block` for the full-width reservation CTA.
- **Hero infographic** — cream `--vel-panel` card, hairline border; date/place header, then a vertical timeline (`<ol>`): sun dots (`box-shadow` ring punches through) on a `--vel-line-strong` rule, tabular times. Informational, not decorative.
- **"Prendre part" band** — navy panel, two columns (Vous venez / Vous soutenez) split by a 1px rule, sun primary + cream-ghost secondary CTA. Adapted from a two-banner reference into VEL's dual-audience call.
- **Ticket table** — semantic `<table>`, three formulas; the free tier carries a green pill badge.
- **FAQ** — native `<details>` with a green +/– affordance, no decoration.
- **Map** — lazy OpenStreetMap iframe in a bordered frame with a "repère à confirmer" note.
- **Footer** — navy ground, cream text, contacts / réseaux / colophon.

## Imagery

Curated warm photography (an open book in warm light, a natural-light library corner, hands and pages, a child reading at golden dusk) — on-palette, dignified, never generic-corporate. Served through **`next/image`** (responsive `srcset`, lazy below the fold, hero `priority` for LCP), stored in `public/images/`. Placeholders until the coalition supplies real edition/venue/author photos; alt text and captions are written in the brand voice. Placements: full-bleed hero, a two-column L'événement figure (clip-path reveal + hover zoom), a six-tile gallery mosaic ("En images"), and a full-bleed parallax band ("les enfants entrent gratuitement").

## Motion

Motion is now a real layer — but still orchestrated, `prefers-reduced-motion`-safe, and GPU-friendly (transform / opacity / clip-path; no layout animation). Content stays visible without JS (`.has-js` gate + IntersectionObserver reveals + 2.5s failsafe). Premium moments: hero Ken Burns + entrance, image clip-path wipes, staggered gallery + timeline, hover zoom on photos, nav elevation on scroll, and a lightweight custom **parallax** (`components/Parallax.tsx`, rAF-throttled, fully disabled under reduced motion) on the full-bleed band. Easing `ease-out-expo`; no bounce/elastic. **No heavy animation library** — kept lean for 3G/4G Haiti.
