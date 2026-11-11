function SuggestedSlots({ schedule }) {
  const { date, dateLabel, makeup, shoot } = schedule;

  return (
    <section className='suggested-slots' aria-labelledby='suggested-slots-title'>
      <header>
        <h2 id='suggested-slots-title'>Khung giờ đã thống nhất</h2>
      </header>
      <div className='suggested-slot'>
        <div className='suggested-slot-heading'>
          <h3>{shoot.from} · <time dateTime={date}>{dateLabel}</time></h3>
          <span className='status-chip status-confirmed'>Linh đã chọn</span>
        </div>
        <dl>
          <div><dt>Makeup</dt><dd>{makeup.from}–{makeup.to} · {makeup.staff}</dd></div>
          <div><dt>Chụp</dt><dd>{shoot.from}–{shoot.to} · {shoot.staff}</dd></div>
          <div><dt>Phòng</dt><dd>{shoot.room}</dd></div>
        </dl>
      </div>
    </section>
  );
}

export default SuggestedSlots;
