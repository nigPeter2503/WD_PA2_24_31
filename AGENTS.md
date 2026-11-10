# AGENTS.md

Rules for AI agents working on **GradStudio PA#2 (responsive prototype)**.
Stack: **React + Vite, plain CSS**. Checked against the PA#2 rubric and the GradStudio brief.

## Stack

- React 18 (function components + hooks), Vite, JavaScript.
- Approved dependencies: `react`, `react-dom`, `react-router-dom` (HashRouter). Nothing else.
- Styling: **plain CSS only**. No Tailwind, Bootstrap, CSS-in-JS, icon libraries, or UI kits.
- No CDN: all CSS and fonts must be bundled into the build (the grader runs with the network blocked).
- No other JavaScript framework.

## Scope: three screens only

| Route (hash) | Screen | Who | State shown when opened directly |
|---|---|---|---|
| `/#/` (`index`) | Services | Customer (Linh) | Three services; consultation links open the Tư vấn screen |
| `/#/advice` | Advice and clash handling | Admin (Thảo) | After Linh agrees: 14:00 chosen, conversation **Đã chốt lịch**, **Tạo booking** enabled, note that 09:00 clashed (Mai busy 08:00–12:00) |
| `/#/review` | Review appointment and pay deposit | Customer (Linh) | Booking GS-1024 waiting for deposit |

- Every route must render its full content when opened directly. Never depend on a click on an earlier screen.
- Extra pages earn nothing. Do not add screens, sign-in, or features outside the brief.
- One story on all pages: Linh, Tốt nghiệp cá nhân, Sat 24/10/2026 09:00 clashes; make-up 13:00–14:00 with Mai, shoot 14:00–16:00 with Tuấn in Phòng B; Admin Thảo; booking **GS-1024**; Gói Tốt nghiệp Premium (2 h, 30 edited photos); 1.800.000đ, deposit 30% = 540.000đ, remaining 1.260.000đ.
- Data is realistic Vietnamese placeholder data, never lorem ipsum. Include at least one long item (long Vietnamese name or title).
- Status names (use exactly): Conversations: `Chưa trả lời`, `Đang tư vấn`, `Đã chốt lịch`, `Hoàn thành`. Bookings: `Chờ cọc 30%` (Screen 3 may show `Đã thống nhất lịch · Chờ cọc 30%`), `Đã đặt lịch`, `Hoàn thành`.
- The slot is held only after the deposit succeeds. Never write that the studio "giữ lịch" at the Chốt lịch step.

## "Fix these" list (must not appear)

1. No photos of real people. Use illustrations, initials, or licensed images with the source named in `PROTOTYPE.md`.
2. No demo controls: no `Màn 1/2/3`, `Đặt lại demo`, `Mô phỏng phản hồi của Linh`, `Mô phỏng thanh toán`.
3. Actions with no next page (`Thanh toán cọc 30%`, send message) are **disabled buttons with a short visible note**. Never `href="#"`.
4. Screen 2: chat and the whole `Booking mới` form are readable by scrolling the page at every width. No inner scroll column hiding the form.
5. Resource calendar: every booking label fully readable at every width (no truncated "Linh · yê…"). A clash is never shown by colour or hatching alone; add text or an icon.
6. Floating elements are allowed only from min-width 1280 px; below that, all elements stay in normal page flow. Reserve page-container space so floating elements never cover content at 1280, 1440, or 1920 px. Header and nav stay non-sticky.
7. Links to nowhere (Booking, Lịch studio, Tài nguyên, Nhân sự, Xem đường đi, Ảnh đã chọn, footer links): remove them, or show them plainly as "chưa có".
8. Flow changes role twice and there is no sign-in: consultation links make it clear that studio staff continue the conversation on the Tư vấn screen.

## Navigation

- Moving between pages uses router `<Link>` (renders `<a href>`) or a form submit button. **Never** a `<button onClick>` that navigates.
- Use `HashRouter`. Set `base: './'` in `vite.config.js` (one approved edit) so `dist/` opens from any static server.
- No link or button on the main flow may lead to `#` or a missing route.

## Responsive (mobile first, 360 / 768 / 1280 px)

- `<meta name="viewport" content="width=device-width, initial-scale=1">` stays in `index.html`.
- Write base CSS for 360 px, then `@media (min-width: 768px)` and `@media (min-width: 1280px)`. Layout must change (e.g. one column at 360, multi-column at 1280).
- No horizontal scroll at any width. No fixed `width`; use `max-width`, `%`, `rem`, `minmax`, `flex-wrap`.
- `img, svg { max-width: 100%; height: auto; }`. Long text wraps (`overflow-wrap: anywhere`).
- Wide tables/calendars scroll inside their own `overflow-x: auto` wrapper only.
- **Never** use `overflow-x: hidden` on `html`, `body`, or a wrapper to hide overflow.
- At 360 px, standalone buttons and links are at least 44 px tall (`min-height: 44px`).

## Semantic HTML

- Landmarks where they belong: `<header>`, `<nav>`, `<main>`, `<footer>`.
- One `<h1>` per page, no skipped heading levels.
- Action = `<button>`. Go to another page = `<a href>`. No `<div>` or `<span>` as a button.
- Every input has a visible `<label>` (placeholder alone is not a label). Every `<img>` has `alt`.
- Target: 0 errors in the W3C checker on the rendered page of every route.

## Design system (plain CSS)

- Spacing: use only `var(--space-1)` through `var(--space-8)`, defined in `src/styles/tokens.css`. Do not write raw px values for margin, padding, or gap, and do not add new spacing variables. `tokens.css` is the single source of truth for the values; do not copy them into this file. If a layout seems to need an off-scale value, use the nearest step and say so in your reply.
- Breakpoints: `768px`, `1280px` (min-width).
- Body text at least 16 px. Text and buttons pass 4.5:1 contrast.
- **No `!important`.** No raw px values for spacing outside the scale.
- Each page has one clearly most important element.
- Rounded corners are part of the design language for all components. Use only `--radius-sm`, `--radius-md`, `--radius-lg`, and `--radius-full` for `border-radius`; token values live in `src/styles/tokens.css`. Floating elements are allowed only at `min-width: 1280px`, with page-container space reserved so they never cover content at 1280, 1440, or 1920 px. Below 1280px, elements stay in normal flow; the header and nav are non-sticky. No decorative gradients or shadows; Screen 1 may use a dark overlay gradient on its hero image for text contrast.

## Permissions

### Allowed (no need to ask)

- Create/edit files in `src/pages/`, `src/components/`, `src/data/`, `src/styles/`, `src/App.jsx`.
- Edit `index.html` only for `<title>` and meta; edit `src/main.jsx` only to mount the router.
- Run `npm run dev`, `npm run build`, `npx vite preview`, `npm run lint`.
- `git add` and `git commit` (see Git).
- Append entries to `AI-LOG.md` (see Logging).
- Draft `PROTOTYPE.md` sections for the team to review.

### Ask first

- Installing or removing any package; editing `package.json`.
- Editing `vite.config.js` or ESLint config (beyond `base: './'`).
- Renaming, moving, or deleting files; adding top-level folders.
- Changing the design tokens (spacing scale, breakpoints, colours).

### Forbidden

- Editing `package-lock.json` by hand, `.gitignore`, `.git/`, `node_modules/`.
- Hand-editing `dist/` (regenerate with `npm run build` only).
- Reading, creating, or editing `.env*` or any secrets.
- Creating or editing `screenshots/` and `checks/`: these must be real captures made by a team member. Never fabricate a W3C result or a screenshot.
- Editing `brief.md` (the team's real prompts) and `SELF_ASSESSMENT_REPORT.md` (team's own marks).
- `git push`, `git push --force`, `git commit --amend`, `git rebase`, `git reset --hard`, changing `git config user.name/email`.
- Destructive commands (`rm -rf`), network requests to outside APIs, CDN links.
- `dangerouslySetInnerHTML`, direct DOM manipulation, `console.log` left in code.

### File access summary

| Path | Access |
|---|---|
| `src/pages/**`, `src/components/**`, `src/data/**`, `src/styles/**`, `src/App.jsx` | Read / Write |
| `AI-LOG.md`, `PROTOTYPE.md` | Read / Write (append and draft only) |
| `index.html`, `src/main.jsx`, `vite.config.js` | Read; limited edits as above |
| `dist/` | Read; regenerate via build only |
| `package.json`, `package-lock.json`, `eslint.config.js` | Read only (ask first) |
| `brief.md`, `SELF_ASSESSMENT_REPORT.md`, `screenshots/`, `checks/` | Read only |
| `.env*`, `node_modules/`, `.git/` | No access |

## React code rules

- Function components only; one per file; filename = component name (PascalCase). Destructure props.
- Hooks only at top level; complete `useEffect` dependency arrays with cleanup.
- Never mutate state. Lists need stable unique `key` (not array index).
- Static data lives in `src/data/`. Each route renders its state without clicks, so avoid state that needs prior interaction.
- No `useMemo`, `useCallback`, `React.memo`, Redux, or Context unless a brief requires it.
- Naming: handlers `handleXxx`, handler props `onXxx`, booleans `isXxx`/`hasXxx`. 2-space indent, single quotes, semicolons, `const` by default.

## Git (graded: 5 points)

- First commit: this rules file. Then at least one commit per page, and one for the responsive pass.
- One concern per commit; message says what changed (e.g. `Add advice page with clash note and enabled Tạo booking`). Never `update`.
- Commits are made under each member's own git identity; do not alter it.
## Logging (graded: 10 points)

Follow the course template for `AI-LOG.md`. One entry per task where an assistant did part of the work.

```md
## <YYYY-MM-DD> — <what was being worked on>
Tool: <tool name, or none>
Asked for: <the task given, in one sentence>
Kept: <what was taken as it came>
Changed: <what was rewritten, and why>
Rejected: <what was thrown away, and why>
```

- Write the entry right after the task, never in bulk afterwards.
- `Changed` and `Rejected` are read first: record what the assistant got wrong, which check caught it (a width, the W3C checker, the Accessibility pane), and what the human told it.
- If nothing went wrong, say which checks were run. Never invent problems.
- The agent may draft the entry, but a team member must read, correct, and confirm it before it stays. The team owns the code and the log.
- `Asked for` is the prompt the human actually gave, not a rewritten summary.
- Never put secrets in prompts or logs: no API keys, no real user data, no classmates' work.

## Workflow

1. Read the brief and existing code before changing anything. If a requirement is unclear, ask one short question.
2. Small, focused changes. One page or one concern at a time.
3. After each change state which files changed and why.
4. Explain a bug's cause before giving the fix.

## Done checklist (run before every handoff)

- [ ] `npm run build` then `npx vite preview`; each route opens directly with the network off.
- [ ] At 360, 768, 1280 px: `document.documentElement.scrollWidth > document.documentElement.clientWidth` prints `false`, and `document.documentElement.clientWidth` equals the set width.
- [ ] `[...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > document.documentElement.clientWidth)` prints `[]` (apart from table wrappers).
- [ ] Standalone buttons/links are at least 44 px tall at 360 px; text at least 16 px; contrast at least 4.5:1.
- [ ] One `<h1>`, no skipped levels, landmarks present, every input labelled, every image has `alt`.
- [ ] Inspect each route in DevTools → Elements → Accessibility to verify landmarks and heading structure in the accessibility tree.
- [ ] Rendered HTML of each route: 0 W3C errors (human saves the result in `checks/`).
- [ ] No `#` links, no demo controls, no real-people photos, no `!important`, no `overflow-x: hidden`.
- [ ] `dist/` rebuilt after the last change. Zip the working folder with `.git` (not a fresh clone), without `node_modules`.
