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
