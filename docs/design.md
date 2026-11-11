# GradStudio Design System

Adapted from the *TypeGallery* design system (typography-forward, editorial, warm cream and brown) and rewritten for the GradStudio PA#2 prototype: React + plain CSS, three screens, 360 / 768 / 1280 px.

**Precedence:** if anything here conflicts with `AGENTS.md` or the PA#2 rubric, `AGENTS.md` and the rubric win. This file is read-only for agents.

**Style in one line:** type hierarchy carries the design; cream surfaces, deep brown text, rust accent; rounded corners, no shadows, no decoration that competes with the text.

---

## Colors

| Token | Value | Use |
|---|---|---|
| `--color-primary` | `#3C1518` | Text, primary buttons, dark sections |
| `--color-surface` | `#F5F0E8` | Page background (cream) |
| `--color-surface-raised` | `#FFFFFF` | Cards, inputs (white appears only here) |
| `--color-surface-sunken` | `#EDE8DE` | Hover, disabled, sand blocks |
| `--color-accent` | `#A44A3F` | Links, focus ring, highlights, errors |
| `--color-text-muted` | `#6B5E55` | Secondary text |
| `--color-border` | `#8B7E74` | Input and control borders (borders only, never text) |
| `--color-divider` | `#D6CFC4` | Dividers, card borders (decorative only) |
| `--color-success` | `#2F6B3C` | Confirmed states |
| `--color-warning` | `#9A4507` | Waiting / needs action |
| `--color-error-bg` | `#FDF6F5` | Error and clash background |

Contrast, computed with the WCAG formula (re-check key pairs in the DevTools colour picker):

| Pair | Ratio | Result |
|---|---|---|
| primary on surface | 14.1 | pass |
| accent on surface / on white | 5.1 / 5.8 | pass |
| surface on primary (inverse text) | 14.1 | pass |
| surface on accent (button text) | 5.1 | pass |
| text-muted on surface / sunken / white | 5.5 / 5.1 / 6.3 | pass |
| success on surface | 5.6 | pass |
| warning on surface / on white | 5.7 / 6.5 | pass |
| accent on error-bg | 5.4 | pass |
| border `#8B7E74` on surface (non-text, needs 3:1) | 3.5 | pass |

Rules:
- Never use `#8B7E74` or `#D6CFC4` for text.
- Never use colour, hatching or opacity as the only carrier of meaning. Every status and clash has a text label.

---

## Typography

Two typefaces only: **EB Garamond** (headlines) and **Manrope** (body and UI). No mono font.

Fonts are bundled, never loaded from a CDN (the grader blocks the network):
- Place `.woff2` files in `src/assets/fonts/` (subsets `latin` and `vietnamese`; EB Garamond 400, 500, 400 italic; Manrope 400, 500, 600).
- Declare them with `@font-face` and `font-display: swap`.
- Fallback stacks: `'EB Garamond', Georgia, serif` and `'Manrope', system-ui, sans-serif`. Pages must stay readable if a font fails.
- Adding a font package (e.g. `@fontsource`) is a new dependency: ask first.

| Token | Font | Size | Weight | Line height |
|---|---|---|---|---|
| `--text-hero` | EB Garamond | `clamp(2.25rem, 8vw, 4.5rem)` | 400 | 1.15 |
| `--text-h1` | EB Garamond | `clamp(2rem, 6vw, 3.5rem)` | 400 | 1.2 |
| `--text-h2` | EB Garamond | `clamp(1.5rem, 4vw, 2.25rem)` | 500 | 1.25 |
| `--text-h3` | EB Garamond | `1.5rem` | 500 | 1.3 |
| `--text-body-lg` | Manrope | `1.125rem` | 400 | 1.7 |
| `--text-body` | Manrope | `1rem` | 400 | 1.7 |
| `--text-ui` | Manrope | `1rem` | 500 | 1.5 |
| `--text-caption` | Manrope | `0.875rem` | 500 | 1.5 |

- Body text, form labels, chat messages and buttons are never below 16 px. The only 14 px text is the caption (timestamps, secondary labels) and the status chips, and every status chip is a visible text label.
- Headings keep line height of at least 1.15 so Vietnamese stacked diacritics (ệ, ữ, ỗ) are not clipped.
- Prices and times use `font-variant-numeric: tabular-nums`.
- Long Vietnamese names and titles wrap: `overflow-wrap: anywhere`.
- Emphasis uses EB Garamond italic or small-caps, not colour alone.

---

## Spacing

One scale only. Every margin, padding and gap uses these tokens. Values outside it are limited to a handful of exceptions (1 px borders, 44 px / 48 px control heights).

| Token | Value | Typical use |
|---|---|---|
| `--space-1` | 4px | Tight inline elements |
| `--space-2` | 8px | Icon-to-label, small gaps |
| `--space-3` | 12px | Gaps inside a control group |
| `--space-4` | 16px | Default gap, page gutter at 360 px |
| `--space-5` | 24px | Within component groups, card padding at 360 px |
| `--space-6` | 36px | Card padding from 768 px, between components |
| `--space-7` | 48px | Between sections on mobile |
| `--space-8` | 72px | Between sections from 1280 px |

---

## Shape and elevation

- Rounded corners are used across all components. Use `--radius-sm` for compact controls and chips, `--radius-md` for buttons, cards, and panels, `--radius-lg` for larger panels and message bubbles, and `--radius-full` for circular controls. Component CSS must use these tokens only; no raw radius values.
- No shadows. Hierarchy comes from type scale, weight, colour and spacing.
- Focus: `outline: 2px solid var(--color-accent); outline-offset: 2px;` on every focusable element. Never remove an outline without this replacement.
- The Screen 1 chat is always in normal page flow; from `min-width: 1280px` it sits in the right column of the hero row; it opens expanded by default and can be minimized in place to a round icon button.
- No decorative gradients, patterns or ornaments. Screen 1 may use one dark overlay gradient on the hero image to keep the text readable. Hover states are decorative only; no information appears only on hover. No tooltips (they do not work on touch).
- Respect `prefers-reduced-motion`; no motion is required.

---

## Layout (breakpoints and screens)

Mobile first. Write base CSS for 360 px, then `@media (min-width: 768px)` and `@media (min-width: 1280px)`.

- Page gutter: `--space-4` at 360 px, `--space-6` from 768 px.
- Content container: `max-width: 1200px; margin-inline: auto;` (not a fixed `width`).
- Shared shell on every page: `<header>` with the brand and `<nav>`, `<main>`, `<footer>`. The nav is always visible and wraps; no JavaScript toggle. Items that lead nowhere are shown as muted text "chưa có", not as links.
- Only the page scrolls. No inner scroll column hides content. Wide calendars or tables scroll inside their own `overflow-x: auto` wrapper, and nothing else does.


| Screen | 360 px | 768 px | 1280 px |
|---|---|---|---|
| 1. Services | One column: image-backed intro, three services, then the remaining full-width sections | Services in 2 to 3 columns; all sections stay full-width | Intro, services, sample work, process, and closing call to action stay in the page flow; consultation links open `/advice` |
| 2. Advice and clash | One column in order: conversation list, chat, Booking mới form (fully visible), resource calendar and suggested times | Two columns: list and chat | Three columns: list, chat with form, calendar; the page scrolls |
| 3. Review and pay | One column: week strip, timeline, booking card | Booking card beside the timeline | Same, with comfortable measure |

- Resource calendar at 360 px: show each booking as a row with a full readable label ("Linh · Tốt nghiệp cá nhân"), inside a scroll wrapper if it is a grid. No truncated labels.
- Clash: a `Trùng lịch` chip with an icon and a sentence of explanation ("Mai bận 08:00–12:00"). Hatching may be added but never replaces the text.
- Screen 1 process copy must not say the studio holds the slot at *Chốt lịch*; the slot is held only after the deposit succeeds.

---

## Components

### Buttons
`--radius-md`, understated, Manrope 500, 16 px. **Every standalone button and link is at least 44 px tall** (`min-height: 44px`, `min-width: 44px`). Links inside a sentence are exempt.
- **Primary:** `#3C1518` fill, `#F5F0E8` text, no border.
- **Secondary:** transparent, `#3C1518` text, 1px `#3C1518` border.
- **Ghost:** transparent, `#A44A3F` text, underline on hover.
- **Sizes:** Medium 44px (padding `--space-5` horizontal), Large 48px (`--space-6` horizontal). No Small size for standalone controls.
- **Disabled:** `#EDE8DE` fill, `#6B5E55` text, 1px dashed `#756961` border, `cursor: not-allowed`, `disabled` attribute. Do not use low opacity. Always put a short visible note next to it (for example next to `Thanh toán cọc 30%`: "Thanh toán chưa khả dụng ở bản prototype này").

### Cards
`#FFFFFF` fill, 1px `#D6CFC4` border, `--radius-md`, no shadow. Padding `--space-5` at 360 px, `--space-6` from 768 px. Structure comes from typographic hierarchy.

### Inputs and labels
- Every input has a visible `<label>` above it (a placeholder is not a label).
- Height at least 44px, 16px Manrope 400, 1px `#8B7E74` border, `#FFFFFF` fill, `--radius-sm`.
- Hover: border `#3C1518`. Focus: 2px accent outline. Error: border `#A44A3F`, fill `#FDF6F5`, plus error text. Disabled: `#EDE8DE` fill, `#D6CFC4` border, muted text.
- Checkboxes and radios: 20px, 1px `#8B7E74` border, checked `#3C1518` fill with cream mark, with a clickable label (at least 44px target area).

### Status chips (text always visible)
`--radius-sm`, 14px Manrope 600, `min-height: 28px` (non-interactive), padding `--space-1` `--space-3`, normal case (no all-caps; it hurts Vietnamese diacritics).

| Status | Where | Style |
|---|---|---|
| Chưa trả lời | Conversation | Transparent, primary text, 1px primary border |
| Đang tư vấn | Conversation | `#EDE8DE` fill, primary text |
| Đã chốt lịch | Conversation | `#2F6B3C` fill, cream text |
| Hoàn thành | Conversation, booking | `#3C1518` fill, cream text |
| Chờ cọc 30% | Booking | Transparent, `#9A4507` text, 1px `#9A4507` border |
| Đã đặt lịch | Booking | `#2F6B3C` fill, cream text |
| Trùng lịch | Calendar, form note | `#FDF6F5` fill, `#A44A3F` text and border, warning icon (decorative, `aria-hidden`) |

Use the exact names from the brief. Screen 3 may show `Đã thống nhất lịch · Chờ cọc 30%`.

### Filter chips (conversation filters, if shown)
Only if they work; they are links or buttons at least 44px tall at 360 px. Use `--radius-sm`. Default: transparent, muted text `#6B5E55`, 1px `#D6CFC4` border. Selected: `#3C1518` fill, cream text. A filter that does nothing is a disabled chip with a note, or is removed.

### Lists
Row height at least 48px (conversation list rows are links, at least 44px), horizontal padding `--space-5`, 1px `#D6CFC4` divider, hover `#EDE8DE`, active row `#3C1518` with cream text, Manrope 16px.

### Chat
The Screen 1 chat is always in normal page flow; from `min-width: 1280px` it sits in the right column of the hero row; it opens expanded by default and can be minimized in place to a round icon button. Its “Nhận tư vấn” link opens `/advice`, where studio staff continue the conversation. Chat panels use `--radius-lg`, and message bubbles use `--radius-md`. Customer messages use `#3C1518` with light text; studio messages use `#FFFFFF` with a 1px divider border. Each message shows sender and time. The composer has a visible label and a disabled “Gửi” button with no separate visible note.

### Images and avatars
No photographs of real people. Use initials in a rounded block, inline SVG illustrations, or typographic hero treatments. Any licensed image must have its source named in `PROTOTYPE.md`. Every `<img>` has `alt`; decorative SVGs use `aria-hidden="true"`. `img, svg { max-width: 100%; height: auto; }`.

---

## CSS tokens (starting point for `src/styles/tokens.css`)

```css
:root {
  --color-primary: #3C1518;
  --color-surface: #F5F0E8;
  --color-surface-raised: #FFFFFF;
  --color-surface-sunken: #EDE8DE;
  --color-accent: #A44A3F;
  --color-text-muted: #6B5E55;
  --color-border: #8B7E74;
  --color-divider: #D6CFC4;
  --color-success: #2F6B3C;
  --color-warning: #9A4507;
  --color-error-bg: #FDF6F5;

  --font-heading: 'EB Garamond', Georgia, serif;
  --font-body: 'Manrope', system-ui, sans-serif;

  --space-1: 4px;  --space-2: 8px;  --space-3: 12px; --space-4: 16px;
  --space-5: 24px; --space-6: 36px; --space-7: 48px; --space-8: 72px;

  --control-height: 44px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
}
```

Breakpoints (media queries cannot read custom properties; write the values): `768px` and `1280px`, `min-width`.

---

## Do and don't

1. **Do** let type hierarchy carry the structure: scale, weight and spacing.
2. **Do** give each page one clearly most important element (the services on Screen 1, the booking form on Screen 2, the deposit action on Screen 3).
3. **Do** use the cream background consistently; white appears only on raised surfaces (cards, inputs).
4. **Do** use real Vietnamese placeholder data for the GradStudio story (Linh, Mai, Tuấn, GS-1024, 1.800.000đ, 540.000đ, 1.260.000đ), including at least one long name or title.
5. **Don't** use more than two typefaces, raw `border-radius` values, shadows, or decorative graphics. Gradients are limited to the Screen 1 hero contrast overlay. Use the radius tokens for all components.
6. **Don't** set body text, labels or messages below 16 px (14 px is for captions and status chips only), or any control under 44 px tall at 360 px.
7. **Don't** convey state by colour, hatching, opacity or hover alone.
8. **Don't** use `!important`, `overflow-x: hidden` to hide overflow, fixed widths, `href="#"`, or any CDN resource.
9. **Don't** copy the authors' screenshot layouts: avoid every item on the brief's *Fix these* list.
