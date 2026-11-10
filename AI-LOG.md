## 2026-11-10 — Comparing AGENTS.md with the PA#2 rubric and brief
Tool: Copilot SDK in VS Code.
Asked for: Compare the AGENTS.md draft with the attached rubric and brief, evaluate it, and identify any conflicts.
Kept: The comparison of the three-screen scope, booking flow, responsive requirements, semantic HTML, design system, and submission requirements against the rubric and brief.
Changed: After the team's feedback, added a DevTools → Elements → Accessibility check for each route to the AGENTS.md checklist; the team will add the remaining screen details later.
Rejected: The claim that the rule against real-person photos conflicts with the requirement to cite licensed images was incorrect; the requirements are complementary under the team's chosen policy. The claim that the team's technology-stack choices conflict with the rubric was also incorrect; the rubric allows the team to choose.

## 2026-11-10 — Initializing the React/Vite project
Tool: None.
Asked for: Init react vite project.
Kept: The Vite template's project structure and starter files that were still useful.
Changed: Added react-router-dom for routing and removed the unused demo file to prepare the project for the assignment.
Rejected: None; no proposed changes were discarded.

## 2026-11-10 — Building the GradStudio foundation
Tool: Codex.
Asked for: You are helping my team build the PA#2 responsive prototype of GradStudio. Read AGENTS.md, docs/design.md, and docs/gradstudio-brief.md in order. Build the foundation only: design tokens and shared control styles, a shared layout and three placeholder routes, centralized Vietnamese story data, and the requested entry point, HTML metadata, and Vite base changes. Do not build the real screens, add packages, or commit. Run the build and report changed files, skipped items, and unclear conflicts.
Kept: The design system values and the three-screen GradStudio story, with initials instead of photos and placeholder-only routes.
Changed: Replaced the Vite starter with the shared responsive shell, HashRouter routes, reusable foundation styles, and centralized prototype data; set the document language/title and relative Vite base. After the team corrected the brief filename, updated AGENTS.md to resolve its spacing-scale conflict with docs/design.md. The team checked the prototype at 360, 768, and 1280 px and confirmed the layouts were okay.
Rejected: The initial assumption that the absent docs/gradstudio-brief.md meant the requested brief was unavailable was corrected by the team; the intended brief file was present under its correct name. The initial spacing-scale conflict was resolved by the team's AGENTS.md edit. No other proposed change was rejected.


## 2026-11-10 — Adding bundled variable font faces
Tool: Copilot SDK in VS Code.
Asked for: Add @font-face declarations for EB Garamond and Manrope using the four bundled latin and Vietnamese variable WOFF2 files, then build and check dist/assets.
Kept: The existing font-family tokens and the four local font files.
Changed: Added four font-face declarations at the start of tokens.css with subset unicode ranges, variable weight ranges, and font-display: swap; verified with npm run build and checked the emitted font assets.
Rejected: No external fonts, CDN URLs, additional font families, package changes, or commit.
## 2026-11-10 — Build Screen 1 services and chat
Tool: Codex
Asked for: Read AGENTS.md, docs/design.md and docs/gradstudio-brief.md (Screen 1 section), then look at the attached image and build Screen 1 at route / without touching /advice or /review or committing.
Kept: Existing React Router structure, bundled fonts, design tokens, and shared Vietnamese story data.
Changed: Added Screen 1 hero, service cards, chat and responsive in-flow layout; updated Screen 1 service and message data; `npm.cmd run build` succeeded.
Rejected: Photo background, demo controls, decorative promises, floating chat and typing indicator were omitted per prompt; viewport checks were not run because no browser session was available.

## 2026-11-10 — Change project-wide design rules
Tool: Codex.
Asked for: TASK A: change the project-wide design rules. This is a deliberate team decision, not an exception, so update the rules themselves.
1. Rounded corners are now part of the design language for ALL components (buttons, inputs, cards, chips, panels, message bubbles). Define radius tokens in src/styles/tokens.css: --radius-sm (4px), --radius-md (8px), --radius-lg (12px). Use only these tokens for border-radius; no raw px radius values in component CSS. Still no gradients. Shadows: none, unless docs/design.md already defines a shadow token; do not invent new ones.
2. Floating elements (position: fixed) are now allowed where a design needs them, with these hard conditions: they may float only from min-width 1280px. Below 1280px every element is in normal page flow (no fixed/sticky/absolute covering content). A floating element must never cover content: reserve space (padding on the page container) so everything can scroll fully clear of it, at 1280, 1440 and 1920px. The header and nav stay non-sticky.
3. Update AGENTS.md: replace the old rules (`square corners`, `no sticky/fixed`, etc.) with the new ones above. AGENTS.md states the rules only; token values live in docs/design.md and tokens.css, not in AGENTS.md.
4. Update docs/design.md: change the shape/corner section and the component specs to use the radius tokens, and add the floating-element conditions. Keep the colors, type and spacing sections unchanged.
5. Update PROTOTYPE.md (design choices that differ from the brief) with one line explaining that the team chose rounded corners and a floating chat panel from 1280px, and why (closer to the reference prototype).
6. Search AGENTS.md, docs/design.md, PROTOTYPE.md, src/styles/tokens.css and every component CSS for statements or values that contradict the new rules (square corners, border-radius: 0, "no fixed", etc.). Fix them and list every change with file and line.
7. Apply the radius tokens to the existing Screen 1 components so the page is consistent. Do not touch /advice or /review markup beyond shared styles.
Kept: The shared shell's existing desktop right-side reservation and the Screen 1 chat's desktop-only fixed positioning.
Changed: Replaced the project-wide square-corner guidance with --radius-sm, --radius-md, and --radius-lg tokens; applied token radii to shared controls and existing Screen 1 components; documented the floating-element breakpoint, reserved-space, and non-sticky header/nav rules; recorded the team's design choice in PROTOTYPE.md.
Rejected: No colors, typography, spacing rules, gradients, shadows, or /advice and /review markup were changed. Searched the requested documentation and CSS for contradictory radius and positioning rules; no build or viewport checks were run.

## 2026-11-10 — Screen 1 chat panel and layout
Tool: Codex with Brave preview.
Asked for: TASK B: Screen 1 chat panel and layout.
Kept: The existing Screen 1 services, six illustrations, process section, service selection behavior, and shared story data.
Changed: Reworked the chat header with collapse/reopen state, aligned Linh and GradStudio bubbles, and made both “Chat với studio” buttons expand, scroll to, and focus the input while respecting reduced motion. Removed the desktop two-column page grid, set the chat max-width to 360px at 1280px and above, and reserved token-based room on the right and below the shell. Added --radius-chat as an alias of --radius-lg. `npm.cmd run build` succeeded; the requested rg scan found only the desktop chat fixed-position rule. The preview rendered in Brave, but exact viewport measurements were not completed after Computer Use was stopped with Escape.
Rejected: No other layout alternatives. The optional hero background was omitted because `src/assets/images/hero-bg.webp` is absent, as instructed.

## 2026-11-10 — Simplifying Screen 1 consultation flow
Tool: Codex with Brave preview.
Asked for: “Update the shared design rules and Screen 1: standardize rounded corners, define floating-element conditions, use the supplied background asset, shorten the advice navigation label, and replace the intrusive Screen 1 chat panel with direct links to Screen 2; do not edit advice/review markup or package.json, and do not commit.”
Kept: The three service cards, full-width follow-on sections, route structure, bundled typography, and rounded-corner design system.
Changed: Removed the Screen 1 chat panel and routed consultation links to `/advice`; used `src/assets/background.avif` in the hero and changed the navigation label to “Tư vấn”. Updated AGENTS.md, docs/design.md, and PROTOTYPE.md to match. `npm.cmd run build` succeeded and the requested `rg` scan returned no matches. The built preview opened in Brave before the final CTA label copy adjustment; it showed the background and no chat panel. Exact viewport widths were not measured, and direct-route checks for `/advice` and `/review` remain unverified because Computer Use was stopped with Escape.
Rejected: The earlier floating chat direction was replaced after the user said the panel felt intrusive. No `/advice` or `/review` markup was changed, and no commit or package edit was made.

## 2026-11-10 — Fixing the hero background and chat launcher
Tool: Codex.
Asked for: “Explain why the hero background appeared only at the right edge, replace it with `src/assets/Background_final.jpg`, and resize and align the chat icon within its circular button.”
Kept: The full-screen Screen 1 hero, desktop-only launcher to `/advice`, existing design tokens, and responsive layout.
Changed: Replaced the opaque gradient with a translucent overlay using the new background asset; excluded the launcher from the content-section sizing rule and sized its circle around the icon. `npm.cmd run build` succeeded, and the requested `rg` scan found only the desktop fixed-position launcher.
Rejected: None; no routes, package files, or page markup changed.

## 2026-11-10 — Removing the unsupported no-clash claim
Tool: Codex.
Asked for: Gradually complete the two remaining routes, remove the “No schedule conflicts” claim, recheck the updated brief and AI log, treat the hero gradient as optional, recommend the preferred React and component structure, and identify any remaining conflicts or an ordered commit plan.
Kept: Treat Screen 2 and Screen 3 as intentionally being completed in stages; a dark hero overlay gradient remains optional.
Changed: Replaced “Không lo trùng lịch” in the Screen 1 value strip with “Chọn gói rõ ràng” after checking the current brief and source. `npm.cmd run build` succeeded; `npm.cmd run lint` still reports the existing direct `document.title` assignment in `src/App.jsx`.
Rejected: Did not change the two in-progress routes, package versions, or gradient choice, and did not commit. This entry is a draft for the team to review and confirm.

## 2026-11-10 — Aligning React, page components, and image attribution
Tool: Codex, npm, web.
Asked for: Follow AGENTS.md, document the supplied Magnific source, make the agreed corrections.
Kept: Screen 2 and Screen 3 remain staged for later completion; the hero gradient stays optional.
Changed: Aligned React and React DOM to 18.3.1 and their type packages to 18.3.0 with npm-generated lockfile updates; split route views and layout into individual component files; moved page title updates into effects; documented the Magnific asset and added a visible footer credit. `npm.cmd run build` and `npm.cmd run lint` succeeded.
Rejected: Did not add Screen 2 or Screen 3 content, select a gradient treatment, or modify the historical brief.

