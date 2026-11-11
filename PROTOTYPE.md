# GradStudio — Responsive prototype

## 1. Team

| Họ và tên | MSSV |
| --- | --- |
| Tô Lãng Nghị | 24120101 |
| Ngô Gia Minh | 24120095 |
| Nguyễn Đức Đạt | 24120037 |

## 2. How to open it

Project dùng React + Vite. Tại thư mục chứa package.json, chạy:

```sh
npm ci
npm run build
npx vite preview
```

Mở địa chỉ local mà Vite thông báo, thêm các đường dẫn ở bảng Screens. Khi chấm, phục vụ thư mục dist/ bằng local static server và bật JavaScript; không mở trực tiếp file HTML bằng file://. npm ci cần mạng nếu máy chưa có cache dependency; các trang trong bản build không cần mạng ngoài vì CSS, font và hình ảnh được đóng gói cục bộ. Bản nộp phải có dist/ được build sau thay đổi cuối.

## 3. Screens

| Path | Màn GradStudio | Người dùng làm gì / trạng thái hiện tại | Liên kết mở đến |
| --- | --- | --- | --- |
| /#/ | Screen 1 — Services and chat | Khách xem ba dịch vụ và ảnh mẫu, mở tư vấn với studio. | “Tư vấn gói này” chọn chủ đề, cuộn đến chat và focus ô nhập. “Nhận tư vấn” chuyển sang vai Admin tại /#/advice và đưa focus đến tiêu đề màn. Không tạo booking. |
| /#/advice | Screen 2 — Advice and clash handling | Admin Thảo mở cuộc tư vấn mẫu gói Tốt nghiệp đã thống nhất của Linh. Có thể tìm, lọc hội thoại và mở form “Booking mới” ngay từ đầu chat. | Submit “Tạo booking” chuyển sang vai khách tại /#/review và đưa focus đến tiêu đề màn. |
| /#/review | Screen 3 — Review appointment and pay deposit | Khách xem ngay lịch đã thống nhất, booking GS-1024 và khoản cọc, không cần xác nhận lại giờ. | Nút “Thanh toán cọc 30%” bị vô hiệu hóa và có ghi chú. |

Điều hướng chung: logo và “Dịch vụ” mở /#/; “Tư vấn” mở /#/advice; “Lịch chụp của tôi” mở /#/review. Liên kết ghi nguồn ảnh ở footer mở trang Magnific bên ngoài, không thuộc luồng ba màn.

## 4. Your design choices

- Dùng nền kem, chữ nâu, EB Garamond cho tiêu đề và Manrope cho nội dung; giao diện bo góc và không dùng shadow để giữ phong cách của mẫu tham khảo. Avatar dùng chữ viết tắt.
- Chat là panel gọn bên phải hero từ 1280px, ở trong luồng trang dưới 1280px, và có thể thu nhỏ tại chỗ thành nút tròn. Mặc định chat mở rộng.
- Screen 2 tham khảo mẫu do Google Stitch tạo từ prompt được lưu trong brief.md. Desktop có ba khu vực; tablet có hai cột và lịch phía dưới; mobile xếp dọc. Chat và form cuộn cùng trang, riêng bảng timeline năm hàng cuộn ngang khi cần để giữ nhãn đọc đủ.
- Screen 2 mở sau khi Linh đồng ý makeup 13:00–14:00 với Mai và chụp 14:00–16:00 với Tuấn tại Phòng B ngày 24/10/2026. Giá 1.800.000đ, cọc 540.000đ, còn lại 1.260.000đ. Lịch sử giải thích yêu cầu 09:00 trùng lịch vì Mai bận 08:00–12:00. Thẻ 14:00 hiển thị ngày và tài nguyên đã thống nhất ở dạng chỉ đọc. Studio chỉ giữ lịch sau khi thanh toán cọc thành công và kiểm tra lại tài nguyên.
- Nhãn giờ và ô lịch dùng chung lưới 30 phút. Trạng thái đã đặt lịch, chờ cọc và nghỉ trưa có chữ trong từng ô. Ô lịch, ô chú giải và tiêu đề hàng dùng màu token và góc bo `--radius-sm`.

Nguồn hình ảnh:

- src/assets/Background_final.jpg: [“Twitch banner template class 2023 graduation” — Magnific](https://www.magnific.com/free-vector/twitch-banner-template-class-2023-graduation_40444019.htm). Dùng theo giấy phép free content của nguồn; chứng nhận giấy phép tải xuống là tài liệu đối chiếu. Footer ghi “Designed by Magnific”.
- Sáu minh họa SVG trong src/assets/ (sample-warm-paper.svg, sample-blue-frame.svg, sample-flower-study.svg, sample-paper-rosette.svg, sample-terracotta-arch.svg, sample-ink-notes.svg) là minh họa gốc của prototype, không có người thật; giấy phép CC BY 4.0 như ghi nhận của project.

## 5. Not wired yet

- Screen 1 dùng nút gửi có icon mũi tên. Screen 2 dùng nút chữ “Gửi”. Cả hai nút bị vô hiệu hóa và có ghi chú “Gửi tin nhắn chưa khả dụng trong bản mẫu.”
- Các hội thoại khác chỉ để tham khảo, chưa mở chat riêng. Tìm kiếm và lọc trạng thái chạy cục bộ.
- Form “Booking mới” hiển thị dữ liệu mẫu đã thống nhất ở các trường chỉ đọc. Submit mở booking mẫu GS-1024 trên /#/review.
- Review hiển thị “Thanh toán chưa khả dụng trong bản mẫu này.” bên cạnh nút cọc bị vô hiệu hóa.

## 6. CSS

Dùng CSS thuần, không framework CSS, không CDN. Font EB Garamond và Manrope được đóng gói trong build.

Thang spacing trong src/styles/tokens.css: --space-1 đến --space-8 tương ứng 4, 8, 12, 16, 24, 36, 48, 72px. Margin, padding và gap dùng các token này.

Mobile first: kiểu cơ sở cho 360px; breakpoint min-width: 768px cho tablet và min-width: 1280px cho desktop. Bảng timeline có wrapper overflow-x: auto; không dùng overflow-x: hidden để che tràn trang.
