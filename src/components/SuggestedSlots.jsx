function SuggestedSlots({ slots, schedule }) {
  return (
    <section className='suggested-slots' aria-labelledby='suggested-slots-title'>
      <header>
        <h2 id='suggested-slots-title'>Gợi ý giờ trống</h2>
        <p className='form-note'>Khung 14:00 đã được Linh đồng ý. Các giờ khác chỉ để tham khảo.</p>
      </header>
      <ol className='suggested-slot-list'>
        {slots.map((slot) => {
          const slotDate = slot.dateLabel ?? schedule.dateLabel;
          const isAgreedSlot = slotDate === schedule.dateLabel
            && slot.makeup === `${schedule.makeup.from}–${schedule.makeup.to}`
            && slot.shoot === `${schedule.shoot.from}–${schedule.shoot.to}`
            && slot.makeupArtist === schedule.makeup.staff
            && slot.photographer === schedule.shoot.staff
            && slot.room === schedule.shoot.room;
          return (
            <li className={`suggested-slot${isAgreedSlot ? ' suggested-slot-selected' : ''}`} key={slot.id}>
              <div className='suggested-slot-heading'>
                <h3>{slot.shoot.split('–')[0]}{slot.dateLabel && <span> · {slot.dateLabel}</span>}</h3>
                {isAgreedSlot && <span className='status-chip status-confirmed'>Linh đã chọn</span>}
              </div>
              <dl>
                <div><dt>Makeup</dt><dd>{slot.makeup} · {slot.makeupArtist}</dd></div>
                <div><dt>Chụp</dt><dd>{slot.shoot} · {slot.photographer}</dd></div>
                <div><dt>Phòng</dt><dd>{slot.room}</dd></div>
              </dl>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default SuggestedSlots;
