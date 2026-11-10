import { gradStudio } from './gradStudio.js';

const { chat, schedule } = gradStudio;

export const adviceWorkspace = {
  customerName: 'Nguyễn Thùy Linh',
  customerInitials: 'NL',
  conversationNote: 'Các hội thoại khác hiển thị để tham khảo. Cuộc trò chuyện đang mở là của Linh.',
  consultationNotes: 'Khách mang thêm một bộ áo dài cá nhân. Chuẩn bị áo cử nhân và bằng tốt nghiệp cho buổi chụp.',
  scheduleHistory: 'Yêu cầu 09:00 trước đó trùng lịch vì Mai bận 08:00–12:00. Linh đã đồng ý chuyển sang chụp lúc 14:00.',
  messages: [
    ...chat.screen1,
    { ...chat.screen2[0], time: '17:22' },
    { ...chat.screen2[1], time: '17:24' },
    { ...chat.screen2[2], time: '17:26' },
  ],
  timelineTicks: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
  resources: [
    {
      id: 'makeup', name: `Makeup · ${schedule.makeup.staff}`,
      events: [
        { id: 'mai-yearbook', label: '12A3', descriptionId: 'schedule-yearbook', period: 'early-morning', kind: 'booked' },
        { id: 'mai-bao', label: 'Bảo 12A', descriptionId: 'schedule-bao', period: 'morning-bao', kind: 'booked' },
        { id: 'mai-graduation', label: 'Tốt nghiệp', descriptionId: 'schedule-graduation', period: 'morning-graduation', kind: 'booked' },
        { id: 'mai-linh', label: 'Linh', descriptionId: 'schedule-linh', period: 'makeup', kind: 'agreed' },
      ],
    },
    {
      id: 'photographer', name: `Thợ chụp · ${schedule.shoot.staff}`,
      events: [
        { id: 'tuan-linh', label: 'Linh', descriptionId: 'schedule-linh', period: 'afternoon', kind: 'agreed' },
        { id: 'tuan-cv', label: 'CV', descriptionId: 'schedule-cv', period: 'late', kind: 'booked' },
      ],
    },
    {
      id: 'photographer-ha', name: 'Thợ chụp · Hà',
      events: [
        { id: 'ha-family', label: 'Gia đình · Ngọc', descriptionId: 'schedule-family', period: 'family', kind: 'booked' },
        { id: 'ha-couple', label: 'Cặp đôi', descriptionId: 'schedule-couple', period: 'afternoon', kind: 'booked' },
      ],
    },
    {
      id: 'room-a', name: 'Phòng A',
      events: [
        { id: 'room-a-family', label: 'Gia đình · Ngọc', descriptionId: 'schedule-family', period: 'family', kind: 'booked' },
        { id: 'room-a-couple', label: 'Cặp đôi', descriptionId: 'schedule-couple', period: 'afternoon', kind: 'booked' },
      ],
    },
    {
      id: 'room-b', name: schedule.shoot.room,
      events: [
        { id: 'room-b-linh', label: 'Linh', descriptionId: 'schedule-linh', period: 'afternoon', kind: 'agreed' },
      ],
    },
  ],
  calendarBookings: [
    { id: 'schedule-yearbook', name: 'Lớp 12A3 · Kỷ yếu lớp', detail: `08:00–09:00 · Makeup với ${schedule.makeup.staff} · Đã đặt lịch` },
    { id: 'schedule-bao', name: 'Bảo 12A', detail: `09:00–10:00 · Makeup với ${schedule.makeup.staff} · Đã đặt lịch` },
    { id: 'schedule-graduation', name: 'Tốt nghiệp', detail: `10:00–12:00 · Makeup với ${schedule.makeup.staff} · Đã đặt lịch` },
    { id: 'schedule-family', name: 'Gia đình · Ngọc', detail: '09:00–11:30 · Hà · Phòng A · Đã đặt lịch' },
    { id: 'schedule-couple', name: 'Cặp đôi · Minh và An', detail: '14:00–16:00 · Hà · Phòng A · Đã đặt lịch' },
    { id: 'schedule-cv', name: 'Chân dung/CV · Khánh', detail: '16:30–17:30 · Tuấn · Đã đặt lịch' },
  ],
};
