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
    { id: 'graduation', name: 'Tốt nghiệp cá nhân', price: '1.800.000đ' },
    { id: 'couple', name: 'Chân dung đôi', price: '2.400.000đ' },
    { id: 'family', name: 'Gia đình nhiều thế hệ', price: '3.200.000đ' },
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
      { id: 'linh-question', sender: 'Linh', time: '09:12', text: 'Gói tốt nghiệp có makeup còn lịch 24/10 lúc 09:00 không?' },
      { id: 'studio-reply', sender: 'GradStudio', time: '09:16', text: 'Studio sẽ kiểm tra lịch của nhân viên và phòng rồi tư vấn lại cho bạn nhé.' },
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
  suggestedTimeSlots: [
    { id: 'slot-1300', makeup: '13:00–14:00', shoot: '14:00–16:00', makeupArtist: 'Mai', photographer: 'Tuấn', room: 'Phòng B' },
    { id: 'slot-1500', makeup: '14:00–15:00', shoot: '15:00–17:00', makeupArtist: 'Mai', photographer: 'Tuấn', room: 'Phòng A' },
    { id: 'slot-0900-next', makeup: '08:00–09:00', shoot: '09:00–11:00', makeupArtist: 'Mai', photographer: 'Tuấn', room: 'Phòng B', dateLabel: '25/10/2026' },
  ],
}
