const numberFormat = new Intl.NumberFormat('vi-VN');
const weekdayFormat = new Intl.DateTimeFormat('vi-VN', { weekday: 'long', timeZone: 'UTC' });
const formatCurrency = (amount) => `${numberFormat.format(amount)}đ`;

function ReviewBookingCard({ booking, photoPackage, shootType, date, dateLabel }) {
  const { id, status, price, depositPercent, deposit, remaining } = booking;
  const weekday = weekdayFormat.format(new Date(`${date}T00:00:00Z`));

  return (
    <section className='review-booking card' aria-labelledby='review-booking-title'>
      <header className='review-booking-heading'>
        <h2 id='review-booking-title'>Thông tin booking</h2>
        <p className='review-booking-id'><strong>{id}</strong></p>
        <span className='status-chip status-waiting'>Đã thống nhất lịch · {status}</span>
      </header>
      <dl className='review-booking-details'>
        <div>
          <dt>Gói dịch vụ</dt>
          <dd>
            <strong>{photoPackage.name}</strong>
            <p>{photoPackage.durationHours} giờ chụp · {photoPackage.editedPhotos} ảnh chỉnh sửa</p>
          </dd>
        </div>
        <div>
          <dt>Loại buổi chụp</dt>
          <dd>{shootType}</dd>
        </div>
        <div>
          <dt>Ngày chụp</dt>
          <dd><time dateTime={date}>{weekday}, {dateLabel}</time></dd>
        </div>
      </dl>
      <dl className='review-amounts'>
        <div>
          <dt>Tổng giá</dt>
          <dd className='price'>{formatCurrency(price)}</dd>
        </div>
        <div className='review-deposit-amount'>
          <dt>Cọc {depositPercent}%</dt>
          <dd className='price'>{formatCurrency(deposit)}</dd>
        </div>
        <div>
          <dt>Còn lại {100 - depositPercent}%</dt>
          <dd className='price'>{formatCurrency(remaining)}</dd>
        </div>
      </dl>
      <p className='review-muted'>Thanh toán sau buổi chụp, sau khi chọn ảnh.</p>
      <div className='review-payment'>
        <button className='button' type='button' disabled aria-describedby='review-payment-note'>
          Thanh toán cọc {depositPercent}%
        </button>
        <p className='review-muted' id='review-payment-note'>Thanh toán chưa khả dụng trong bản mẫu này.</p>
        <p>Studio chỉ giữ chỗ sau khi bạn thanh toán cọc thành công và hệ thống kiểm tra lại tài nguyên.</p>
      </div>
    </section>
  );
}

export default ReviewBookingCard;
