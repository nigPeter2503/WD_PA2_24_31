## Ngô Gia Minh — 2026-11-10 13:15:12 (+07:00)

**Exact prompt:**

đối chiếu bản draft file agents.md và file rubric, brief đính kèm, tiến hành đánh giá, kiểm tra conflict giữa agents.md và các file đính kèm nếu có.

## Ngô Gia Minh — 2026-11-10 14:46:12 (+07:00)

**Exact prompt:**
You are helping my team build the PA#2 responsive prototype of GradStudio.
Read these first, in this order, and follow them:
1. AGENTS.md (rules, permissions, never-list, done checklist)
2. docs/design.md (visual system: colours, type, spacing, components, layout)
3. docs/gradstudio-brief.md (product brief, the three screens, the "Fix these" list)
If design.md conflicts with AGENTS.md or the rubric constraints, AGENTS.md wins.

TASK 1: FOUNDATION ONLY. Do not build the real screens yet.

1. src/styles/tokens.css
   - Take every value from docs/design.md: colours, the two font stacks, the spacing
     scale (--space-1 to --space-8), --control-height, --radius. Use the exact values;
     do not invent new ones.
   - Add a mobile-first base: box-sizing reset, body in Manrope 16px / line-height 1.7
     on the cream surface, headings in EB Garamond using the type tokens from design.md,
     img/svg { max-width: 100%; height: auto }, overflow-wrap: anywhere on text,
     tabular numbers for prices, the focus style (2px accent outline, 2px offset).
   - Base styles for the shared controls from design.md (buttons: primary, secondary,
     ghost, disabled; inputs and labels; status chips; cards) as reusable classes.
     Every standalone button and link is min-height 44px.
   - Fonts: list src/assets/fonts first. Write @font-face (font-display: swap) only for
     files that actually exist there, with the fallback stacks from design.md.
     If no font files exist, skip @font-face and tell me. Do not add files or packages.
2. A shared layout component used by all routes:
   <header> with the brand "GradStudio" and a <nav>, then <main>, then <footer>.
   The nav is always visible and wraps on small screens (no JavaScript toggle).
   Nav links use router <Link> and are: Dịch vụ (/), Tư vấn của Admin (/advice),
   Lịch chụp của tôi (/review). The footer is plain text only, no dead links.
   No "#" links, no demo controls, no sign-in.
3. Router: HashRouter with three routes: / (Screen 1), /advice (Screen 2), /review (Screen 3).
   Each page is a placeholder with one <h1> and a one-line description of its screen,
   and sets its own document.title. Each route must render when opened directly.
4. src/data/: one place for the shared GradStudio data in the Vietnamese story from
   the brief, so the three pages cannot drift apart:
   - studio, three services with the brief's prices, package (Gói Tốt nghiệp Premium,
     2 hours, 30 edited photos), booking GS-1024 (1.800.000đ, deposit 540.000đ,
     remaining 1.260.000đ)
   - people: customer Linh, admin Thảo, make-up artist Mai, photographer Tuấn, rooms
   - the exact status names from the brief (conversations and bookings), as constants
   - the schedule: 24/10/2026 09:00 clash because Mai is busy 08:00-12:00; make-up
     13:00-14:00 with Mai; shoot 14:00-16:00 with Tuấn in Phòng B
   - chat messages for Screen 1 and Screen 2, a conversation list of about five
     customers (with initials, never photos), including at least one long Vietnamese
     name or title, and the suggested time slots
   No lorem ipsum. No photos of real people.
5. src/main.jsx: mount the router only. index.html: set <html lang="vi"> and the
   <title>; this lang change is approved by me for this task. Make sure vite.config.js
   has base: './' (pre-approved in AGENTS.md).

CONSTRAINTS (from the rubric and AGENTS.md)
- React + react-router-dom + plain CSS only. No new dependency, no CDN, no inline
  styles for layout, no !important, no overflow-x: hidden, no fixed widths.
- Navigation is <a href> (router Link), never a button with onClick.
- Mobile first at 360px, then min-width 768px and 1280px.
- Spacing only from the scale in docs/design.md.
- Touch only the files listed above. Ask before anything else.

HOW DONE IS CHECKED
- npm run build succeeds; npx vite preview serves all three routes opened directly.
- At 360, 768 and 1280 px: no horizontal scroll; the nav and footer are usable.
- One h1 per page, header/nav/main/footer present.

WHEN YOU FINISH
List every file you created or changed with one sentence each, say anything you
skipped (for example fonts), and name anything in design.md or the brief that
seemed unclear or in conflict. Do not commit.

## Ngô Gia Minh — 2026-11-10 15:18:19 (+07:00)

**Exact prompt:**

Thêm @font-face vào đầu src/styles/tokens.css cho EB Garamond và Manrope, dùng 4 file woff2 trong src/assets/fonts (latin + vietnamese, bản variable). Mỗi file một khối @font-face có unicode-range tương ứng, font-weight dạng khoảng (EB Garamond 400 800, Manrope 200 800), font-display: swap. Đường dẫn tương đối, không CDN, không sửa package.json, không thêm font thứ ba, không commit. Sau khi xong chạy npm run build và cho biết dist/assets có đủ 4 file woff2 không.