function AppointmentTimeline({ schedule }) {
  const { clash, makeup, requestedTime, shoot } = schedule;

  return (
    <section className='review-timeline' aria-labelledby='review-timeline-title'>
      <h2 id='review-timeline-title'>Các mốc lịch hẹn</h2>
      <div className='review-original-request'>
        <h3>Yêu cầu ban đầu</h3>
        <p className='review-unavailable'>
          <s className='time-value'><time dateTime={requestedTime}>{requestedTime}</time></s>
          <span className='status-chip status-clash'>Không khả dụng</span>
        </p>
        <p className='review-muted'>{clash.explanation}.</p>
      </div>
      <div className='review-agreed'>
        <h3>Giờ đã thống nhất</h3>
        <ol className='review-milestones' role='list'>
          <li>
            <div>
              <p className='time-value'>
                <strong><time dateTime={makeup.from}>{makeup.from}</time>–<time dateTime={makeup.to}>{makeup.to}</time></strong>
              </p>
              <p>Chuyên viên makeup {makeup.staff}</p>
            </div>
          </li>
          <li>
            <div>
              <p className='time-value'>
                <strong><time dateTime={shoot.from}>{shoot.from}</time>–<time dateTime={shoot.to}>{shoot.to}</time></strong>
              </p>
              <p>Nhiếp ảnh gia {shoot.staff} · {shoot.room}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default AppointmentTimeline;
