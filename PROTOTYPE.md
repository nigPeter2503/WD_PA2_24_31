# GradStudio — Responsive prototype

## 1. Team

| Họ và tên | MSSV |
| --- | --- |
| Tô Lãng Nghị | 24120101 |

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
| /#/ | Screen 1 — Services and chat | Khách xem ba dịch vụ và ảnh mẫu, mở tư vấn với studio. | “Chat với studio”, “Tư vấn gói này”, lời mời tư vấn cuối trang và nút chat desktop mở /#/advice. |
| /#/advice | Screen 2 — Advice and clash handling | Admin xem hội thoại đã chốt, tìm/lọc danh sách và tạo booking sau khi Linh đồng ý chụp 14:00 ngày 24/10/2026. | Submit “Tạo booking” mở /#/review để khách xem lịch và khoản cọc. |
| /#/review | Screen 3 — Review appointment and pay deposit | Hiện là placeholder “Lịch chụp của tôi”; phần xem booking và thanh toán chưa triển khai. | Chưa có hành động riêng; dùng điều hướng chung. |

Điều hướng chung: logo và “Dịch vụ” mở /#/; “Tư vấn” mở /#/advice; “Lịch chụp của tôi” mở /#/review. Liên kết ghi nguồn ảnh ở footer mở trang Magnific bên ngoài, không thuộc luồng ba màn.

## 4. Your design choices

- Dùng nền kem, chữ nâu, EB Garamond cho tiêu đề và Manrope cho nội dung; giao diện bo góc và không dùng shadow để giữ phong cách của mẫu tham khảo. Avatar dùng chữ viết tắt.
- Screen 1 dùng các liên kết sang Tư vấn thay cho chat nhúng để tránh che nội dung. Nút chat nổi chỉ xuất hiện từ 1280px và dẫn sang Screen 2.
- Screen 2 tham khảo mẫu do Google Stitch tạo từ prompt được lưu trong brief.md. Desktop có ba khu vực; tablet có hai cột và lịch phía dưới; mobile xếp dọc. Chat và form cuộn cùng trang, riêng bảng timeline năm hàng cuộn ngang khi cần để giữ nhãn đọc đủ.
- Screen 2 mở sau khi Linh đồng ý: makeup 13:00–14:00 với Mai, chụp 14:00–16:00 với Tuấn tại Phòng B, giá 1.800.000đ, cọc 540.000đ, còn lại 1.260.000đ. Xung đột 09:00 được giữ dưới dạng ghi chú lịch sử. Ô Linh nét đứt ghi “Đã thống nhất · Chờ cọc”; chỉ thanh toán cọc thành công mới giữ lịch. Các giờ khác là tham khảo, không yêu cầu khách xác nhận lần nữa.
- Theo yêu cầu khớp mẫu Stitch, riêng ô lịch và ô chú giải dùng màu từ file gốc và góc bo 2px; các thành phần khác dùng radius token của project. Các nút demo, menu không có trang đích và nhãn bị cắt trong mẫu không được sao chép.

Nguồn hình ảnh:

- src/assets/Background_final.jpg: [“Twitch banner template class 2023 graduation” — Magnific](https://www.magnific.com/free-vector/twitch-banner-template-class-2023-graduation_40444019.htm). Dùng theo giấy phép free content của nguồn; chứng nhận giấy phép tải xuống là tài liệu đối chiếu. Footer ghi “Designed by Magnific”.
- Sáu minh họa SVG trong src/assets/ (sample-warm-paper.svg, sample-blue-frame.svg, sample-flower-study.svg, sample-paper-rosette.svg, sample-terracotta-arch.svg, sample-ink-notes.svg) là minh họa gốc của prototype, không có người thật; giấy phép CC BY 4.0 như ghi nhận của project.

## 5. Not wired yet

- Gửi tin nhắn tư vấn chưa nối backend: nút “Gửi” bị vô hiệu hóa và có ghi chú hiển thị.
- Các hội thoại khác chỉ để tham khảo, chưa mở chat riêng. Tìm kiếm và lọc trạng thái chạy cục bộ.
- Form booking chỉ điều hướng sang /#/review; chưa tạo dữ liệu booking trên server. Các trường được đọc từ dữ liệu mẫu để giữ đúng lịch đã thống nhất.
- Screen 3 chưa có thông tin booking hay nút thanh toán. Chưa tích hợp cổng thanh toán, gửi xác nhận hoặc nhắc lịch.

## 6. CSS

Dùng CSS thuần, không framework CSS, không CDN. Font EB Garamond và Manrope được đóng gói trong build.

Thang spacing trong src/styles/tokens.css: --space-1 đến --space-8 tương ứng 4, 8, 12, 16, 24, 36, 48, 72px. Margin, padding và gap dùng các token này.

Mobile first: kiểu cơ sở cho 360px; breakpoint min-width: 768px cho tablet và min-width: 1280px cho desktop. Bảng timeline có wrapper overflow-x: auto; không dùng overflow-x: hidden để che tràn trang.
