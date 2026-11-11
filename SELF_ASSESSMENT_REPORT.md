# Self-assessment — PA#2

Submitted by: 24120037 — Nguyễn Đức Đạt\
Submitted by: 24120095 — Ngô Gia Minh\
Submitted by: 24120101 — Tô Lãng Nghị

Total I claim: 96 / 100

| Criterion | Max | I claim | Evidence |
|---|---:|---:|---|
| Three linked screens that trace back to the GradStudio brief | 20 | 20 | [PROTOTYPE.md, §3](PROTOTYPE.md#3-screens) maps the three directly openable routes defined in [App.jsx](src/App.jsx). [ServiceChat.jsx](src/components/ServiceChat.jsx) links to Advice. [AdviceBookingForm.jsx](src/components/AdviceBookingForm.jsx) submits to Review. [ReviewBookingCard.jsx](src/components/ReviewBookingCard.jsx) shows the 540.000đ deposit for GS-1024 and explains why payment is disabled in the prototype. |
| Responsive at 360, 768 and 1280 px | 25 | 24 | [screenshots/](screenshots/) contains full-page captures for Services, Advice and Review at all three widths. [advice.css](src/styles/advice.css) changes the layout at 768 and 1280 px and gives the resource calendar its own horizontal scroll region. [AI-LOG.md, Sửa Screen 2](AI-LOG.md#2026-11-11--sửa-screen-2-bản-nháp-để-nhóm-xác-nhận) records the three measured page widths for Advice. We did not save a complete set of final-build overflow and tap-target measurements for all three routes. |
| Semantic, valid HTML | 20 | 20 | The rendered HTML had 0 errors and 0 warnings in Nu HTML Checker for [Services](checks/validator-index.png), [Advice](checks/validator-advice.png) and [Review](checks/validator-review.png). [Layout.jsx](src/components/Layout.jsx) provides the shared landmarks. [ServiceChat.jsx](src/components/ServiceChat.jsx) and [AdviceBookingForm.jsx](src/components/AdviceBookingForm.jsx) use visible labels, and [ServicesPage.jsx](src/pages/ServicesPage.jsx) supplies alt text for sample images. |
| Design you can check | 10 | 9 | [tokens.css](src/styles/tokens.css) defines the spacing scale, 16 px base body text, the 44 px control height and the bundled font faces. [PROTOTYPE.md, §6](PROTOTYPE.md#6-css) documents the plain CSS and breakpoints. The [Screen 3 implementation log](AI-LOG.md#2026-11-11--implementing-approved-screen-3--nguyễn-đức-đạt-24120037-draft) records a minimum contrast ratio of 5.12:1 for Review. We did not keep contrast measurements for every text and button state in the final build. |
| The brief and the rules file | 10 | 10 | [brief.md](brief.md) preserves the Screen 1 prompts and the Screen 2 correction prompt, including the responsive, semantic HTML and validation requirements. [AGENTS.md](AGENTS.md) records the stack, the three routes, the Fix these list, and the W3C and DevTools Accessibility checks. |
| AI-LOG.md | 10 | 9 | [AI-LOG.md, Sửa Screen 2](AI-LOG.md#2026-11-11--sửa-screen-2-bản-nháp-để-nhóm-xác-nhận) records the extra hash flagged by Nu and the booking field found too narrow at 768 px, with both corrections in 40ff53e. Some older entries summarize prompts, and the latest entries are marked as drafts for team confirmation. |
| Commit history | 5 | 4 | The first commit e9c3157 adds the rules file. 6434757, bda59df and 10e66d8 cover the three screens. 0a1d202 records the Screen 1 responsive pass. a1ab48e has a vague subject, and 8f8fe1b combines final refinements, documentation and evidence. |
| **Total** | **100** | **96** | |

## What I did not manage

We captured all nine route-and-width screenshots and saved the three Nu results. We did not keep a single final-build record of horizontal overflow, standalone tap-target heights and text/button contrast for every route at the required widths. Some older AI-log entries also kept summaries of the prompts.

## What I would do differently

After the final build, we would run the same checks on all nine route-and-width combinations and save the measurements alongside the screenshots. We would record each prompt and the correction it led to while doing the work, then use commit subjects that name the actual change.
