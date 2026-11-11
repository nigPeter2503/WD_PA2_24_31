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


## 2026-11-11 — Screen 2 workspace prototyping and framework translation — Tô Lãng Nghị, 24120101 (draft)
Tool: Google Stitch, Codex.
Asked for: “Generate a high-fidelity studio management dashboard UI for Screen 2 via Google Stitch, then translate the exported layout into React and plain CSS conforming to GradStudio design tokens.” English summary of the original requests.
Kept: The three-column workspace architecture (conversation inbox on the left, center chat and booking form, right resource calendar and suggestions), warm cream palette, and typography foundations.
Changed: Decomposed the monolithic export into modular React function components (`ConversationInbox`, `AdviceConversation`, `AdviceBookingForm`, `ResourceSchedule`, `SuggestedSlots`); removed Tailwind and external CDN font links in favor of plain CSS, bundled fonts, and design tokens in `tokens.css`; connected centralized story data from `gradStudio.js`.
Rejected: Excluded Tailwind classes, non-standard layout grids, demo controls, dead `#` links, and real-person imagery per project constraints.
By hand: Nghị provided the Stitch specification, directed component boundaries, and verified visual alignment against the editorial reference.

## 2026-11-11 — Screen 2 FRAME 2 alignment, timeline schedule, and verification — Tô Lãng Nghị, 24120101 (draft)
Tool: Codex, npm, headless Chrome.
Asked for: “Refactor Screen 2 (/#/advice) to strictly render FRAME 2 after Linh agreed to the 14:00 slot, reconstruct the authentic 5-row resource timeline, enable the booking form submit to /#/review, and complete responsive verification.” English translation of the combined requests.
Kept: The core booking facts (Linh, GS-1024, 1.800.000đ total, 540.000đ deposit), the five resource rows (Mai, Tuấn, Hà, Phòng A, Phòng B), lunch break, and confirmed conversation status.
Changed: Standardized the screen to post-agreement FRAME 2: replaced the active 09:00 red clash indicator with a neutral historical note; styled Linh's reserved appointment with a dashed border labeled “Đã thống nhất · Chờ cọc” (clarifying that slots are held only upon deposit payment); contained the timeline inside a horizontal `overflow-x: auto` wrapper; enabled the "Tạo booking" form submit to route directly to `/#/review`; disabled chat sending with a visible explanation. Built successfully with 0 lint errors; verified responsive layouts at 360, 768, 1280, and 1440 px with zero horizontal document overflow.
Rejected: Discarded active clash indicators and interactive re-selection controls in FRAME 2; rejected nested inner scrollbars that obscure form fields; disallowed spacing or radius outside the token scale.
By hand: Nghị checked the timeline labels against the reference layout, confirmed mobile single-column readability, and reviewed and approved this log entry.

## 2026-11-11 — Screen 3 research and implementation brief — Nguyễn Đức Đạt, 24120037 (draft)
Tool: Codex.
Asked for: “Your task in this turn is to research the full context, analyze the existing interface, design Screen 3 and prepare a detailed implementation brief for my review.” English translation of the original request.
Kept: The Screen 3 requirements and Fix these matrices, source audit, proposed week calendar, timeline and deposit card, and file and validation plans in SCREEN3_BRIEF_DRAFT_DAT_24120037.md. The design is awaiting Đạt’s approval.
Changed: Compared the PA#1 proposal with the Final Project Brief, rubric and source at ea92e95. Specified a single pending-deposit state and distinguished the original 09:00 clash from the agreed schedule. Checked the October 19–25 week, payment arithmetic, proposed token contrast, Markdown structure and source links. Rewrote the draft and this entry in English at Đạt’s request. Implementation, build, browser and W3C verification are pending.
Rejected: Excluded the PA#1 payment simulation, the simulated transition to booked, tabs and map. PA#2 requires a disabled deposit button with a visible note and a self-contained state on direct entry.
By hand: Đạt provided the requirements, booking facts, authorized file scope, English-language preference and approval gate. His review and confirmation are pending.

## 2026-11-11 — Implementing approved Screen 3 — Nguyễn Đức Đạt, 24120037 (draft)
Tool: Codex, npm, Playwright with headless Chrome, local Nu HTML Checker 26.11.9.
Asked for: APPROVE SCREEN 3 BRIEF — DAT 24120037. Follow-up instruction: Continue.
Kept: The approved week calendar, timeline, booking and deposit layout, shared fixture and design tokens. Screen 3 uses the required localized product copy. It opens directly and through the existing Screen 2 booking-form handoff.
Changed: Replaced the ReviewPage placeholder and added WeekCalendar, AppointmentTimeline, ReviewBookingCard and review.css. Lint passed. The build initially failed on the checkout path's # character; a temporary subst drive mapping allowed the same source to build successfully into dist/. Chrome checks passed all three routes at 360/768/1280/1440px, the full navigation flow, refresh, keyboard focus, disabled payment, offline local fonts and Review contrast of at least 5.12:1. Review also passed 200% text reflow at 360px and date checks in two time zones. Visual inspection caught a localized month/day hyphen, which was changed to a slash. Nu validation of rendered HTML found 0 errors and 2 redundant-role warnings on Review, 0 errors on Services, and 5 existing generic-div aria-label errors on Advice. Manual DevTools Accessibility review and team-owned submission captures and checker evidence are pending.
Rejected: Excluded payment processing, payment simulation, booking-state transitions and additional routes in accordance with the approved scope. Recorded the existing Screen 1 missing-chat finding and Screen 2 validator errors for their owners.
By hand: Đạt approved the design and authorized continuation. The implementation and automated checks were performed by Codex. Đạt's review of the completed UI and this log entry is pending.

## 2026-11-11 — Reworking Screen 1 chat — Ngô Gia Minh
Prompt author timestamp: Ngô Gia Minh — 2026-11-11 18:25:54 (+07:00)
Tool: Codex, npm.cmd, rg.
Asked for: “Rework the Screen 1 chat (route / only).”
Kept: The hero visuals and copy, service cards, sample work, process section, closing call to action, existing message data, and the navigation label “Tư vấn”.
Changed: Placed the chat in the hero row, moved its expanded state and focus handling into ServicesPage, replaced the chat’s final link with “Nhận tư vấn”, removed the send note, updated the requested documentation, and rebuilt successfully. The source search found no fixed or sticky positioning.
Rejected: Removed the earlier floating layout and outdated chat link and note. Browser viewport measurements were not run because Computer Use could not determine Brave’s current URL; the responsive measurements remain unverified.

## 2026-11-11 — Screen 1 chat controls and service selection — Ngô Gia Minh
Prompt author timestamp: Ngô Gia Minh — 2026-11-11 18:35:38 (+07:00)
Tool: Codex, npm.cmd, rg.
Asked for: “Two small changes on Screen 1 (route / only).”
Kept: The hero layout and copy, chat collapse behavior and messages, “Nhận tư vấn” link, service-card copy, and all content on /advice and /review.
Changed: Replaced the Screen 1 “Gửi” label with an accessible arrow icon; made the service cards and chat topic share one selected-service state; added pressed/selected styling and reused the open-chat scroll/focus behavior. Updated PROTOTYPE.md. The build succeeded and the requested source searches were run.
Rejected: Did not alter other routes, tokens, or package files. Browser viewport and contrast measurements were not run because a browser session was unavailable.



## 2026-11-11 — Sửa Screen 2 (bản nháp để nhóm xác nhận)

Tool: Codex, Playwright với Chrome 157, Nu HTML Checker 26.11.9.

Asked for (nguyên văn):

> Sửa toàn bộ finding thuộc Screen 2 — Advice and clash handling tại `/#/advice` của GradStudio PA#2. Báo cáo bằng tiếng Việt. Trước khi sửa, đọc `AGENTS.md`, hai PDF trong `docs/`, `docs/design.md`, `PROTOTYPE.md` và các mục Screen 2 trong `brief.md`, `AI-LOG.md`. Kiểm tra HEAD hiện tại và giữ các thay đổi có sẵn trong working tree.
>
> Phạm vi gồm mã và dữ liệu Screen 2, hai điểm chuyển route đi vào và đi ra từ Advice, cùng các dòng tài liệu mô tả Screen 2 và bàn giao sang Review. Giữ nguyên nội dung, bố cục và tính năng của Screen 1 và Screen 3. Nếu cần sửa router hoặc layout dùng chung để xử lý focus, giới hạn hành vi ở `/#/ → /#/advice` và `/#/advice → /#/review`. Không thêm dependency, màn, backend, điều khiển demo hoặc bước xác nhận giờ. Không commit. Để thành viên nhóm tự lưu ảnh và kết quả chính thức trong `screenshots/` và `checks/`.
>
> 1. Sửa dữ liệu gợi ý lịch. Ngày 24/10/2026, ca chụp 15:00–17:00 ở Phòng A trùng lịch Cặp đôi 14:00–16:00. Tuấn cũng trùng ca Linh 14:00–16:00 và ca CV 16:30–17:30. Bỏ gợi ý sai hoặc thay bằng một ca mẫu đã kiểm tra đủ ngày, Mai, nhiếp ảnh gia, phòng và thời lượng 1 giờ makeup + 2 giờ chụp. Với ca 25/10 lúc 09:00, cung cấp dữ liệu mẫu đủ để chứng minh cả người và phòng rảnh, hoặc bỏ khỏi danh sách “Gợi ý giờ trống”. Hiển thị ngày trên mỗi thẻ. Các phương án tham khảo ở dạng chỉ đọc. Giữ ca Linh đã đồng ý lúc 14:00.
>
> 2. Căn nhãn trục giờ và biên ô lịch trên cùng một lưới thời gian. Giữ nhãn đầu/cuối đọc đủ. Hiển thị bằng chữ hoặc tên truy cập thích hợp để nhận biết từng ca đã đặt, ca Linh chờ cọc và giờ nghỉ trưa. Giữ ghi chú lịch sử 09:00 vì Mai bận 08:00–12:00. Trạng thái phải hiểu được khi ẩn màu và họa tiết. Giữ bảng có header hàng/cột, vùng cuộn có tên truy cập, dùng được bằng phím và chỉ cuộn ngang khi cần.
>
> 3. Sửa 5 lỗi Nu từ `aria-label` trên `div` generic của ô nghỉ trưa. Giữ thông tin “Nghỉ trưa 12:00–13:00” bằng nội dung có ngữ nghĩa. Xử lý 10 cảnh báo `article` thiếu heading bằng markup phù hợp với các mục hội thoại và tin nhắn. Kiểm tra lại landmarks, một `h1`, thứ tự heading, label gắn đúng trường, tên truy cập, tab order và focus. Giữ `Gửi` disabled có ghi chú hiển thị.
>
> 4. Sửa bàn giao qua Advice. Khi kích hoạt `Nhận tư vấn` hoặc submit `Tạo booking`, tiêu đề màn đích phải vào viewport và nhận focus sau khi React render. Giữ `Nhận tư vấn` là router link, `Tạo booking` là nút submit và giữ lời dẫn chuyển vai. Tại đầu Advice, nói rõ Admin đang mở cuộc tư vấn mẫu Tốt nghiệp đã thống nhất của Linh, kể cả khi khách vừa chọn xem gói khác ở Screen 1. Khi sang Review, khách xem lịch và khoản cọc ngay, không cần xác nhận giờ lần nữa.
>
> 5. Làm form `Booking mới` dễ tới từ đầu chat. Ưu tiên một liên kết nội trang rõ nghĩa, có focus thấy được và cao tối thiểu 44 px ở 360 px. Giữ toàn bộ form ngay dưới chat, cuộn cùng trang. Dùng radius và màu token cho các ô lịch, chú giải và tiêu đề hàng để xử lý sai lệch 2 px và màu ngoài token. Giữ bố cục Stitch làm tham chiếu cho thứ tự ba khu vực. Tuân thủ `AGENTS.md` và rubric về nội dung, spacing, typography, contrast và responsive.
>
> 6. Đồng bộ các dòng liên quan trong `PROTOTYPE.md`. Mô tả đúng Advice, `Gửi` bằng chữ có ghi chú, form mẫu và điểm bàn giao sang Review đã hiển thị booking cùng nút cọc disabled. Cập nhật ghi chú về màu và radius theo CSS sau sửa. Giữ nguyên prompt lịch sử trong `brief.md`. Nếu bổ sung bản ghi sửa Screen 2 trong `AI-LOG.md`, dùng prompt thực tế và kết quả đã chạy. Để nhóm xác nhận những mục lịch sử thiếu căn cứ.
>
> Nghiệm thu
> - Advice mở trực tiếp và reload được. Hiển thị Admin Thảo, Linh đã đồng ý, `Đã chốt lịch`, `Chờ cọc 30%`, GS-1024, Gói Tốt nghiệp Premium, 2 giờ, 30 ảnh chỉnh sửa, 1.800.000đ, cọc 540.000đ, còn 1.260.000đ. Ngày 24/10/2026, makeup 13:00–14:00 với Mai, chụp 14:00–16:00 với Tuấn tại Phòng B. Chỉ giữ lịch sau khi cọc thành công và kiểm tra lại tài nguyên.
> - Tìm có dấu, không dấu và chữ `đ`, bộ lọc, trạng thái rỗng, `Gửi` disabled và luồng bàn phím `Nhận tư vấn → Tạo booking → Review` đều hoạt động.
> - Chạy `npm run build`, `npm run lint` và `npx vite preview`. Kiểm tra bản build với JavaScript bật, chỉ cho phép localhost. Tại 360/768/1280 px, ghi `clientWidth`, `scrollWidth`, phần tử vượt mép ngoài wrapper lịch và số cột. Kiểm tra đọc đủ chat/form, nhãn lịch, cuộn lịch bằng bàn phím, nút và link độc lập cao ít nhất 44 px ở 360 px, chữ nội dung từ 16 px và contrast từ 4.5:1.
> - Kiểm tra DOM và cây trợ năng Chrome. Chạy Nu trên `<!DOCTYPE html>` cộng `document.documentElement.outerHTML` của Advice. Mục tiêu 0 errors. Ghi riêng warnings còn lại và cách tái hiện nếu có.
>
> Khi xong, liệt kê từng finding đã xử lý, file và dòng liên quan, kết quả chạy mới và mọi phần chưa xác minh. Kiểm tra `git diff` để bảo đảm thay đổi nằm trong phạm vi Screen 2.

Kept: Bố cục ba khu vực theo Stitch, hội thoại mẫu của Linh và ca đã thống nhất 14:00 ngày 24/10/2026. Giữ lời dẫn chuyển vai, nút gửi bị vô hiệu hóa và form ngay dưới chat.

Changed: Dùng chung lưới 30 phút cho nhãn giờ và ô lịch. Ghi trạng thái bằng chữ trong mỗi ô, sửa markup hội thoại, đưa focus đến tiêu đề khi bàn giao và thêm liên kết từ chat tới form. Nu phát hiện dấu `#` thứ hai trong bản liên kết đầu tiên. Bản sửa dùng `?section=booking` trên route Advice. Chrome ở 768 px phát hiện trường “Loại buổi chụp” hẹp. Đã dùng trường toàn hàng cho loại buổi chụp và tên khách hàng. `npm run build`, `npm run lint` và Vite preview chạy thành công. Chrome với JavaScript bật và chỉ cho phép localhost xác nhận luồng bàn phím, mở trực tiếp và reload, tìm/lọc và kích thước trang 360/360, 768/768, 1280/1280. Nu trên HTML đã render của Advice trả về 0 lỗi và 0 cảnh báo.

Rejected: Bỏ ca 15:00 ngày 24/10 vì trùng Phòng A và Tuấn. Bỏ ca 09:00 ngày 25/10 vì dữ liệu mẫu chưa chứng minh tài nguyên rảnh. Thành viên nhóm xác nhận các mục lịch sử và lưu minh chứng chính thức.

## 2026-11-11 — Hoàn thiện dự án GradStudio PA#2 (bản nháp để nhóm xác nhận)

Tool: Codex, Git, npm.

Asked for: Tạo commit cho việc fix screen 2 của tôi và 1 commit là tôi đã hoàn thiện dự án. Sau đó giúp tôi hoàn thiện AI-log, brief. Với 2 entry là fix screen 2 và hoàn thiện dự án. Không thêm bất cứ entry lặt vặt vào.

Kept: Luồng ba màn của GradStudio, lịch đã thống nhất của Linh, booking GS-1024 và trạng thái chờ cọc của bản mẫu.

Changed: Codex kiểm tra và đóng gói các thay đổi đã có. Screen 1 hoàn thiện focus khi xem dịch vụ, chọn gói và thu nhỏ hoặc mở lại chat, tăng độ rõ của hero và thêm ghi chú cho nút gửi bị vô hiệu hóa. Screen 3 bỏ hai role dư thừa trên danh sách. Đồng bộ PROTOTYPE.md với hành vi ba màn. Chạy lại npm run build và npm run lint thành công. Đối chiếu ba ảnh Nu HTML Checker đã có với tên tệp JS và CSS của bản build mới. Cả ba ảnh đều ghi 0 lỗi, 0 cảnh báo. Bộ ảnh của ba màn có đủ chiều rộng 360, 768 và 1280 px.

Rejected: Không có phương án nào bị loại trong bước hoàn thiện. Giữ lại ảnh chụp và kết quả checker đã có trong working tree.
