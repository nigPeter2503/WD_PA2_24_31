function AppointmentTimeline({ schedule }) {
  const { clash, makeup, requestedTime, shoot } = schedule;

  return (
    <section className='review-timeline' aria-labelledby='review-timeline-title'>
      <h2 id='review-timeline-title'>Giờ đã thống nhất</h2>
      <ol className='review-milestones' role='list'>
        <li>
          <div className='review-milestone'>
            <p className='review-milestone-time time-value'>
              <strong><time dateTime={makeup.from}>{makeup.from}</time>–<time dateTime={makeup.to}>{makeup.to}</time></strong>
            </p>
            <div className='review-milestone-details'>
              <h3>Makeup</h3>
              <p>{makeup.staff}</p>
            </div>
          </div>
        </li>
        <li>
          <div className='review-milestone'>
            <p className='review-milestone-time time-value'>
              <strong><time dateTime={shoot.from}>{shoot.from}</time>–<time dateTime={shoot.to}>{shoot.to}</time></strong>
            </p>
            <div className='review-milestone-details'>
              <h3>Nhiếp ảnh gia</h3>
              <p>{shoot.staff} · {shoot.room}</p>
            </div>
          </div>
        </li>
      </ol>
      <div className='review-original-request'>
        <p className='review-unavailable'>
          <span>Yêu cầu ban đầu</span>
          <s className='time-value'><time dateTime={requestedTime}>{requestedTime}</time></s>
          <span className='review-unavailable-label'>Không khả dụng</span>
        </p>
        <p>{clash.explanation}.</p>
      </div>
    </section>
  );
}

export default AppointmentTimeline;
