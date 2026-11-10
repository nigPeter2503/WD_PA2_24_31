const weekdays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
const shortDate = new Intl.DateTimeFormat('vi-VN', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  timeZone: 'UTC',
});
const fullDate = new Intl.DateTimeFormat('vi-VN', {
  weekday: 'long',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
});
const dayAndMonth = new Intl.DateTimeFormat('vi-VN', {
  day: '2-digit',
  month: '2-digit',
  timeZone: 'UTC',
});

function WeekCalendar({ date }) {
  const appointment = new Date(`${date}T00:00:00Z`);
  const monday = new Date(appointment);
  const daysSinceMonday = (monday.getUTCDay() + 6) % weekdays.length;
  monday.setUTCDate(monday.getUTCDate() - daysSinceMonday);

  const week = weekdays.map((weekday, offset) => {
    const day = new Date(monday);
    day.setUTCDate(monday.getUTCDate() + offset);
    return { weekday, day, iso: day.toISOString().slice(0, 10) };
  });

  const sunday = week.at(-1).day;
  const sameMonth = monday.getUTCMonth() === sunday.getUTCMonth();
  const rangeStart = sameMonth ? monday.getUTCDate() : shortDate.format(monday);

  return (
    <section className='review-calendar' aria-labelledby='review-week-title'>
      <header className='review-calendar-heading'>
        <h2 id='review-week-title'>Lịch tuần</h2>
        <p className='time-value'>{rangeStart}–{shortDate.format(sunday)}</p>
      </header>
      <div className='review-week-scroll' role='region' aria-label='Lịch tuần, cuộn ngang khi cần' tabIndex={0}>
        <ul className='review-week' role='list'>
          {week.map(({ weekday, day, iso }) => {
            const hasAppointment = iso === date;
            return (
              <li className={hasAppointment ? 'review-day review-day-marked' : 'review-day'} key={iso}>
                <time dateTime={iso} className='review-day-date time-value'>
                  <span className='review-sr-only'>
                    {fullDate.format(day)}{hasAppointment && ' · Có lịch hẹn'}
                  </span>
                  <span className='review-weekday' aria-hidden='true'>{weekday}</span>
                  <span aria-hidden='true'>{day.getUTCDate()}</span>
                </time>
              </li>
            );
          })}
        </ul>
      </div>
      <p className='review-calendar-key time-value' aria-hidden='true'>
        <strong>{dayAndMonth.format(appointment).replace('-', '/')}</strong> · Có lịch hẹn
      </p>
    </section>
  );
}

export default WeekCalendar;
