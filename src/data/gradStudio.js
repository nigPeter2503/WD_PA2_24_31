import sampleWarmPaper from '../assets/sample-warm-paper.svg?no-inline'
import sampleBlueFrame from '../assets/sample-blue-frame.svg?no-inline'
import sampleFlowerStudy from '../assets/sample-flower-study.svg?no-inline'
import samplePaperRosette from '../assets/sample-paper-rosette.svg?no-inline'
import sampleTerracottaArch from '../assets/sample-terracotta-arch.svg?no-inline'
import sampleInkNotes from '../assets/sample-ink-notes.svg?no-inline'

export const conversationStatuses = {
  unanswered: 'Chưa trả lời',
  advising: 'Đang tư vấn',
  confirmed: 'Đã chốt lịch',
  complete: 'Hoàn thành',
}

export const bookingStatuses = {
  waitingDeposit: 'Chờ cọc 30%',
  booked: 'Đã đặt lịch',
  complete: 'Hoàn thành',
}

export const gradStudio = {
  studio: {
    name: 'GradStudio',
    location: 'Thành phố Hồ Chí Minh',
    rooms: ['Phòng A', 'Phòng B'],
  },
  services: [
    { id: 'yearbook', name: 'Kỷ yếu lớp', contextLabel: 'Gói Kỷ yếu lớp', description: 'Lưu lại khoảnh khắc đáng nhớ cùng lớp qua bộ ảnh tập thể nhiều sắc màu.', price: '350.000đ/người' },
    { id: 'graduation', name: 'Tốt nghiệp', contextLabel: 'Gói Tốt nghiệp', description: 'Bộ ảnh ngày ra trường riêng, có thể trao đổi thêm về makeup.', price: '1.800.000đ' },
    { id: 'portrait-cv', name: 'Chân dung/CV', contextLabel: 'Gói Chân dung/CV', description: 'Ảnh chân dung chỉn chu cho hồ sơ, portfolio và những bước tiếp theo trong hành trình nghề nghiệp.', price: '690.000đ' },
  ],
  samples: [
    { id: 'warm-paper', title: 'Nắng trên trang giấy', src: sampleWarmPaper, alt: 'Minh họa quyển sổ màu kem dưới vệt nắng vàng' },
    { id: 'blue-frame', title: 'Khung trời tháng mười', src: sampleBlueFrame, alt: 'Minh họa khung cửa xanh mở ra bầu trời sáng' },
    { id: 'flower-study', title: 'Một nhành hoa nhỏ', src: sampleFlowerStudy, alt: 'Minh họa bình hoa đỏ bên chồng sách' },
    { id: 'paper-rosette', title: 'Dải ruy băng', src: samplePaperRosette, alt: 'Minh họa dải ruy băng tốt nghiệp trên nền giấy' },
    { id: 'terracotta-arch', title: 'Sắc gạch ấm', src: sampleTerracottaArch, alt: 'Minh họa mái vòm màu đất nung với họa tiết hình học' },
    { id: 'ink-notes', title: 'Ghi chú ngày vui', src: sampleInkNotes, alt: 'Minh họa những tấm thiệp và nét mực xanh' },
  ],
  processSteps: [
    { id: 'ask', title: 'Hỏi tư vấn', description: 'Chia sẻ ý tưởng, gói chụp và mong muốn của bạn.' },
    { id: 'check', title: 'Studio kiểm tra lịch', description: 'Studio rà soát lịch nhân sự và không gian chụp.' },
    { id: 'agree', title: 'Thống nhất giờ', description: 'Cùng trao đổi và chọn khung giờ phù hợp.' },
    { id: 'deposit', title: 'Đặt cọc 30% để giữ lịch', description: 'Lịch được giữ sau khi khoản cọc được thanh toán thành công.' },
  ],
  package: {
    name: 'Gói Tốt nghiệp Premium',
    durationHours: 2,
    editedPhotos: 30,
    price: 1800000,
  },
  booking: {
    id: 'GS-1024',
    status: bookingStatuses.waitingDeposit,
    price: 1800000,
    depositPercent: 30,
    deposit: 540000,
    remaining: 1260000,
  },
  people: {
    customer: { name: 'Linh', initials: 'L' },
    admin: { name: 'Thảo', initials: 'T' },
    makeupArtist: { name: 'Mai', initials: 'M' },
    photographer: { name: 'Tuấn', initials: 'T' },
  },
  schedule: {
    date: '2026-10-24',
    dateLabel: '24/10/2026',
    requestedTime: '09:00',
    clash: {
      status: 'Trùng lịch',
      resource: 'Mai',
      busyFrom: '08:00',
      busyTo: '12:00',
      explanation: 'Mai bận 08:00–12:00',
    },
    makeup: { from: '13:00', to: '14:00', staff: 'Mai' },
    shoot: { from: '14:00', to: '16:00', staff: 'Tuấn', room: 'Phòng B' },
  },
  chat: {
    screen1: [
      { id: 'linh-question', sender: 'Linh', time: '17:20', text: 'Gói tốt nghiệp có makeup còn lịch 24/10 lúc 09:00 không?' },
      { id: 'studio-reply', sender: 'GradStudio', time: '17:21', text: 'Để mình kiểm tra lịch cho bạn nhé' },
    ],
    screen2: [
      { id: 'admin-intro', sender: 'Thảo', time: '09:30', text: 'Chào Linh, khung 09:00 đang trùng lịch của Mai. Mai bận 08:00–12:00.' },
      { id: 'admin-suggestion', sender: 'Thảo', time: '09:32', text: 'Studio đề xuất makeup 13:00–14:00 với Mai, sau đó chụp 14:00–16:00 với Tuấn tại Phòng B.' },
      { id: 'linh-confirmation', sender: 'Linh', time: '09:40', text: 'Dạ em chốt lịch 14:00 ạ.' },
    ],
  },
  conversations: [
    { id: 'GS-1024', name: 'Linh', initials: 'L', title: 'Tốt nghiệp cá nhân', status: conversationStatuses.confirmed },
    { id: 'GS-1021', name: 'Nguyễn Hoàng Minh Châu', initials: 'MC', title: 'Chân dung cá nhân', status: conversationStatuses.advising },
    { id: 'GS-1018', name: 'Phạm Quốc Bảo', initials: 'B', title: 'Ảnh hồ sơ', status: conversationStatuses.unanswered },
    { id: 'GS-1014', name: 'Trần Gia Hân', initials: 'H', title: 'Chân dung đôi', status: conversationStatuses.complete },
    { id: 'GS-1009', name: 'Võ Đức Anh', initials: 'A', title: 'Gia đình', status: conversationStatuses.advising },
  ],
}
