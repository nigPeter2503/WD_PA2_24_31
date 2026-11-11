import { useNavigate } from 'react-router-dom';
import { adviceWorkspace } from '../data/adviceWorkspace.js';

const formatCurrency = (amount) => `${new Intl.NumberFormat('vi-VN').format(amount)}đ`;

function AdviceBookingForm({ booking, photoPackage, schedule, shootType, titleRef }) {
  const navigate = useNavigate();

  const handleCreateBooking = (event) => {
    event.preventDefault();
    navigate('/review');
  };

  return (
    <div className='booking-area'>
      <form className='booking-form' onSubmit={handleCreateBooking} aria-labelledby='booking-form-title' aria-describedby='booking-description'>
        <header className='booking-header'>
          <div>
            <p className='eyebrow'>Booking mới · {booking.id}</p>
            <h2 id='booking-form-title' ref={titleRef} tabIndex={-1}>Chụp ảnh tốt nghiệp</h2>
          </div>
          <span className='status-chip status-confirmed'>Linh đã đồng ý</span>
        </header>
        <p className='form-note' id='booking-description'>Thông tin đã thống nhất trong cuộc trò chuyện với Linh. Booking tạo mới sẽ ở trạng thái {booking.status}.</p>
        <div className='agreed-summary' role='note'>
          <strong>Đã thống nhất giờ chụp {schedule.shoot.from}</strong>
          <p>Thứ Bảy, {schedule.dateLabel} · {schedule.shoot.room}</p>
          <p className='schedule-status'>Đã thống nhất · Chờ cọc</p>
        </div>
        <div className='booking-fields'>
          <div className='field-group field-wide'>
            <label htmlFor='booking-customer'>Khách hàng</label>
            <input id='booking-customer' name='customer' value={adviceWorkspace.customerName} readOnly />
          </div>
          <div className='field-group field-wide'>
            <label htmlFor='booking-type'>Loại buổi chụp</label>
            <input id='booking-type' name='type' value={shootType} readOnly />
          </div>
          <div className='field-group field-wide'>
            <label htmlFor='booking-package'>Gói dịch vụ</label>
            <textarea id='booking-package' name='package' rows='2' value={`${photoPackage.name} · ${photoPackage.durationHours} giờ · ${photoPackage.editedPhotos} ảnh chỉnh sửa`} readOnly />
          </div>
          <div className='field-group'>
            <label htmlFor='booking-date'>Ngày chụp</label>
            <input id='booking-date' name='date' value={schedule.dateLabel} readOnly />
          </div>
          <div className='field-group'>
            <label htmlFor='booking-time'>Giờ bắt đầu chụp</label>
            <input className='agreed-time' id='booking-time' name='time' value={schedule.shoot.from} aria-describedby='booking-time-note' readOnly />
            <p className='field-note' id='booking-time-note'>Đã đổi từ {schedule.requestedTime} theo trao đổi với Linh.</p>
          </div>
          <div className='field-group'>
            <label htmlFor='booking-photographer'>Nhiếp ảnh gia</label>
            <input id='booking-photographer' name='photographer' value={schedule.shoot.staff} readOnly />
            <p className='field-note'>Chụp {schedule.shoot.from}–{schedule.shoot.to}</p>
          </div>
          <div className='field-group'>
            <label htmlFor='booking-makeup'>Chuyên viên makeup</label>
            <input id='booking-makeup' name='makeup' value={schedule.makeup.staff} readOnly />
            <p className='field-note'>Makeup {schedule.makeup.from}–{schedule.makeup.to}</p>
          </div>
          <div className='field-group field-wide'>
            <label htmlFor='booking-room'>Phòng chụp</label>
            <input id='booking-room' name='room' value={schedule.shoot.room} readOnly />
          </div>
          <div className='field-group field-wide'>
            <label htmlFor='booking-notes'>Ghi chú từ tư vấn</label>
            <textarea id='booking-notes' name='notes' rows='4' value={adviceWorkspace.consultationNotes} readOnly />
          </div>
        </div>
        <div className='booking-total'>
          <div>
            <p>Tổng cộng</p>
            <p className='booking-price price'>{formatCurrency(booking.price)}</p>
          </div>
          <dl className='deposit-summary'>
            <div><dt>Cọc {booking.depositPercent}%</dt><dd>{formatCurrency(booking.deposit)}</dd></div>
            <div><dt>Còn lại</dt><dd>{formatCurrency(booking.remaining)}</dd></div>
          </dl>
        </div>
        <div className='booking-submit-row'>
          <button className='button button-primary' type='submit' aria-describedby='booking-next-note'>Tạo booking</button>
          <p className='form-note' id='booking-next-note'>Tiếp theo: khách hàng xem lịch chụp và khoản cọc.</p>
        </div>
        <p className='deposit-notice'>Studio chỉ giữ lịch sau khi thanh toán cọc thành công và kiểm tra lại nhân sự, phòng chụp.</p>
      </form>
    </div>
  );
}

export default AdviceBookingForm;
