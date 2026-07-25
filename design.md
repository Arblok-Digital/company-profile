# Design — Arblok Digital

A locked design system for the Arblok Digital company profile. Every page reads this file before emitting code.

## Genre
Editorial-craft — warm, hand-crafted, typography-led. A software studio that values artisan quality over template speed.

## Macrostructure family
- Marketing pages: **Long Document** — narrative-first, sections flow like chapters
- Content pages: **Letter** — intimate, personal

## Theme
| Token | Value |
|-------|-------|
| `--color-paper` | oklch(0.97 0.01 85) — warm cream |
| `--color-paper-2` | oklch(0.93 0.015 80) — darker cream |
| `--color-ink` | oklch(0.18 0.02 285) — almost-black with warm tint |
| `--color-ink-2` | oklch(0.45 0.03 270) — muted ink |
| `--color-rule` | oklch(0.85 0.01 85) — hairline rule |
| `--color-accent` | oklch(0.55 0.14 43) — terracotta |
| `--color-accent-ink` | oklch(0.97 0.01 85) — cream on accent |
| `--color-focus` | oklch(0.55 0.14 43) — same as accent |

## Typography
- **Display:** "Instrument Serif", Georgia, serif — weight 400, italic 400, style roman for headings
- **Body:** "Geist", Inter, sans-serif — weight 350 / 400
- **Mono:** "Geist Mono", JetBrains Mono, monospace — weight 400
- **Type scale anchor:** 1.25 (major third)
- **Heading tracking:** -0.02em display, 0.08em uppercase labels
- **Measure:** 65ch body

## Spacing
4-point named scale. Pages must use `var(--space-*)`, never raw values.
- `--space-3xs: 0.25rem`
- `--space-2xs: 0.5rem`
- `--space-xs: 0.75rem`
- `--space-sm: 1rem`
- `--space-md: 1.5rem`
- `--space-lg: 2rem`
- `--space-xl: 3rem`
- `--space-2xl: 4.5rem`
- `--space-3xl: 6rem`

## Motion
- Easings: `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)`
- Reveal: none (just there at load)
- Reduced-motion: no motion at all

## CTA voice
- Primary: outlined button, no fill, thin border
- Secondary: unstyled link with underline on hover
- Never: gradient buttons, pill shapes, shadow glow

## What pages MUST share
- Logotype (ARBLOK DIGITAL stacked)
- Accent colour at ≤ 5 % per viewport
- Display + body fonts
- CTA voice (outlined, never pill/gradient)
- Section rhythm: heading → body → (optional) list, same padding rhythm

## What pages MAY differ on
- Macrostructure within editorial-craft family
- Image treatment (inline vs margin-aligned vs none)
- Hero archetype (split vs full-width vs letter)
