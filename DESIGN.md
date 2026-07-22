# Design

## Concept

**The page reads like a clean, confident pull request.** The subject's proven, specific credential is leading a production React 16 → 18 migration — so the portfolio borrows the vernacular of a code review rather than a generic "dark terminal" dev-portfolio template: a neutral paper-white surface (not cream), ink-navy prose, one confident amber accent, and a monospace diff motif used exactly once as the signature move, not smeared across every section.

Deliberately **not** dark-mode-neon-on-black — that's the reflexive "developer portfolio" choice and the thing most likely to read as templated. Light, precise, and editorial instead: closer to a well-typeset engineering doc than a sci-fi HUD (the thing being explicitly removed).

## Color

Light, neutral-cool surface — not warm cream. One saturated accent (amber-gold) carries the brand. A second color (rose) is reserved for exactly one recurring moment: the diff-delete line.

| Token | Value (OKLCH → hex) | Use |
|---|---|---|
| `--bg` | oklch(97.5% 0.003 250) → `#F7F7F7` | Page background |
| `--surface` | `#FFFFFF` | Cards, panels, nav |
| `--surface-sunken` | oklch(96% 0.004 250) → `#F1F1F0` | Alternating section band |
| `--ink` | oklch(19% 0.02 250) → `#14161B` | Headlines, body text |
| `--ink-dim` | oklch(40% 0.015 250) → `#4B4E55` | Secondary text |
| `--ink-faint` | oklch(85% 0.006 250) → `#D3D4D7` | Hairline borders, dividers |
| `--amber` | oklch(48% 0.13 70) → `#7A5308` | Links, small accent text, focus ring |
| `--amber-bright` | oklch(70% 0.16 70) → `#D0932A` | Primary button fill (paired with `--ink` text) |
| `--amber-soft` | oklch(94% 0.05 80) → `#F7E8C8` | Diff-add background wash |
| `--rose` | oklch(48% 0.13 25) → `#9A3B2C` | Diff-delete text (one moment only) |
| `--rose-soft` | oklch(93% 0.03 25) → `#F6E4DF` | Diff-delete background wash |

Body text is always `--ink` or `--ink-dim`, never gray-on-tint. Contrast verified ≥4.5:1 for all text pairings before ship.

## Type

Contrast-axis pairing: characterful serif for display, clean humanist sans for reading, monospace for anything factual/technical (dates, tags, the diff).

- **Display — Fraunces** (variable, optical size + soft axis). Headlines only (H1/H2, the odd standalone numeral). Weight 500–600. Letter-spacing ≥ −0.02em. Never body text.
- **Body/UI — IBM Plex Sans**. 400 body, 500/600 for emphasis and UI labels. Everything a recruiter actually reads.
- **Mono — IBM Plex Mono**. Nav logotype, dates, tags, tech-stack line, the diff panel. Pairs natively with Plex Sans (same foundry, shared metrics).

Scale: clamp-based, display H1 ceiling ≤ 4.5rem. `text-wrap: balance` on headlines, `text-wrap: pretty` on paragraphs.

## Layout

Single-page scroll, generous whitespace, no card-grid reflex. Each section gets the structure its own content actually needs rather than a repeated template:

- **Nav** — fixed, thin, mono logotype (`mg` + a blinking amber cursor glyph), two links (Work, Contact), CV download button. No hamburger-in-a-box gimmick on mobile — links collapse to a simple stacked sheet.
- **Hero** — asymmetric two-column. Left: name (Fraunces), role line (mono), one precise paragraph, primary contact CTAs, location line. Right: the signature `career.diff` panel (see Signature). No fake full IDE chrome — one small, honest bordered panel.
- **Stack line** — tech stack presented as a single real `"dependencies"` object in mono, not a logo marquee.
- **About** — short paragraph + a definition-list of quick facts (location, focus, currently, education). Text-based, not a card grid.
- **Experience** — one real role, given a full, generously-spaced write-up (not a padded timeline for a single entry). Small echo of the diff motif beside the migration bullet only.
- **Projects** — one flagship case study (Arpella Stores), full width. Platform badges (Web/iOS/Android) as mono tags. A horizontal, scroll-snap gallery of real product screenshots (product catalog, M-Pesa checkout, order tracking) with dot navigation and captions — actual app screens, not a stand-in illustration. A secondary "currently exploring" line for the R&D project, clearly labeled, no full case-study treatment for unproven work.
- **Contact** — the conversion section. Three large tap targets: WhatsApp, Call, Email (real `wa.me` / `tel:` / `mailto:` links, not decorative icons), plus LinkedIn/GitHub/CV as secondary links. Copy-to-clipboard fallback on email with visible confirmation state.
- **Footer** — minimal: logotype echo, back-to-top, one line.

No numbered section eyebrows (01/02/03) — the content isn't a sequence, so it doesn't get one. No uppercase tracked kicker above every section.

## Signature: the `career.diff` panel

The one bold, ownable move. In the hero, a small monospace panel types itself out on load:

```
career.diff
- react: "16"
+ react: "18"
```

The `-` line renders in rose with a strike-through fade; the `+` line types in with an amber-soft highlight wash — literally performing the subject's single strongest, most specific credential (leading a production React 16→18 migration) as the first thing a visitor sees, instead of a generic "hi, I'm a developer" hero animation. It appears in full once in the hero, and in miniature exactly once more beside the matching Experience bullet. Nowhere else — the rest of the page stays quiet so this moment stays memorable.

## Motion

Tailored per section, not one uniform fade applied everywhere:

- Hero: diff panel types on load; name/CTA stagger in.
- Scroll reveal: each section's reveal matches its content (list items step in with a small stagger; single-paragraph sections do a plain fade-slide).
- Scroll progress: thin amber bar at the top edge — a real progress indicator, not decoration.
- Buttons: subtle spring lift on hover/focus, no bounce/elastic easing anywhere (ease-out-quart family only).
- No custom cursor, no parallax starfield, no glassmorphism blur cards.
- `prefers-reduced-motion: reduce` → every animation above drops to an instant state or a plain opacity crossfade. The diff panel still types, but skips straight to the final `+ react: "18"` state.

## Components

- **Buttons** — primary: solid `--amber-bright` fill, `--ink` text, 10px radius. Secondary: 1.5px `--ink` border, transparent fill, `--amber-soft` fill on hover. Pill shape reserved for tags only.
- **Tags/badges** — mono, small caps off, `--ink-faint` border, pill radius, used for platform badges and stack items.
- **Panels** (diff panel, CV download) — `--surface` bg, 1px `--ink-faint` border, 10–14px radius. Never combine a visible border with a soft wide drop shadow on the same element.
- **Focus states** — visible 2px `--amber` outline with offset on every interactive element, no exceptions.

## Accessibility

WCAG AA: 4.5:1 body text minimum, 3:1 for large/bold text and UI borders. Keyboard focus visible everywhere. Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`), correct heading order, descriptive link text (no bare "click here"), alt text on the profile photo and every project screenshot. `prefers-reduced-motion` respected throughout (see Motion).
