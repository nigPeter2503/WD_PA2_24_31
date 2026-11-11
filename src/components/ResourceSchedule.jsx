import { adviceWorkspace } from '../data/adviceWorkspace.js';

const { timelineTicks, lunchBreak, resources, calendarBookings } = adviceWorkspace;
const halfHours = (time) => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 2 + minutes / 30;
};
const gridLine = (time) => halfHours(time) - halfHours(timelineTicks[0]) + 1;
const lastTick = timelineTicks.at(-1);

function ResourceSchedule({ schedule, customer, shootType }) {
  return (
    <section className='resource-calendar' aria-labelledby='resource-calendar-title'>
      <header className='resource-heading'>
        <p className='eyebrow'>Lịch tài nguyên</p>
        <h2 id='resource-calendar-title'>Thứ Bảy, <time dateTime={schedule.date}>{schedule.dateLabel}</time></h2>
        <ul className='calendar-legend' aria-label='Chú giải lịch'>
          <li><span className='calendar-swatch swatch-booked' aria-hidden='true' />Đã đặt lịch</li>
          <li><span className='calendar-swatch swatch-agreed' aria-hidden='true' />Đã thống nhất · Chờ cọc</li>
          <li>
            <span className='calendar-swatch swatch-break' aria-hidden='true'>
              <svg className='schedule-hatching' focusable='false'>
                <defs><pattern id='legend-break-hatching' width='8' height='8' patternUnits='userSpaceOnUse' patternTransform='rotate(-45)'><rect width='3' height='8' /></pattern></defs>
                <rect width='100%' height='100%' fill='url(#legend-break-hatching)' />
              </svg>
            </span>
            Nghỉ trưa
          </li>
        </ul>
      </header>
      <div className='resource-timeline'>
        <div className='calendar-timeline-heading'>
          <h3>Timeline chi tiết</h3>
          <p className='timeline-caption'>Ca ngày · {timelineTicks[0]}–{lastTick}</p>
        </div>
        <div className='calendar-scroll' role='region' aria-label='Bảng timeline nhân sự và phòng, có thể cuộn ngang' tabIndex={0}>
          <table className='calendar-board' aria-labelledby='resource-calendar-title' aria-describedby='calendar-reading-note' style={{ '--calendar-columns': gridLine(lastTick) - 1 }}>
            <thead>
              <tr>
                <th scope='col'>Nhân sự / Phòng</th>
                <th scope='col'>
                  <div className='calendar-grid calendar-hours'>
                    {timelineTicks.map((time) => (
                      <div className='calendar-tick' key={time} style={{ gridColumnStart: time === lastTick ? -2 : gridLine(time) }}>
                        <time>{time}</time>
                      </div>
                    ))}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {resources.map((resource) => (
                <tr key={resource.id}>
                  <th scope='row'>{resource.name}</th>
                  <td>
                    <div className='calendar-grid calendar-track'>
                      {[...resource.events, lunchBreak].sort((first, second) => first.from.localeCompare(second.from)).map((event) => {
                        const isBreak = event.kind === 'break';
                        const status = event.kind === 'booked' ? 'Đã đặt lịch' : 'Chờ cọc';
                        return (
                          <div className={`calendar-event event-${event.kind}`} style={{ gridColumn: `${gridLine(event.from)} / ${gridLine(event.to)}` }} key={event.id}>
                            {isBreak && (
                              <svg className='schedule-hatching' aria-hidden='true' focusable='false'>
                                <rect width='100%' height='100%' fill='url(#legend-break-hatching)' />
                              </svg>
                            )}
                            <p className='calendar-event-label'>
                              <strong>{event.label}</strong>{' '}
                              {isBreak ? <><time>{event.from}</time>–<wbr /><time>{event.to}</time></> : status}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className='calendar-reading-note' id='calendar-reading-note'>Linh đã thống nhất giờ và đang chờ cọc. CV là Chân dung/CV. Cuộn ngang bảng nếu cần.</p>
        <details className='calendar-booking-details' open>
          <summary>Chi tiết các lịch hẹn</summary>
          <ul>
            <li>
              <strong>{customer.name} · {shootType}</strong>
              <p>Đã thống nhất · Chờ cọc. Makeup {schedule.makeup.from}–{schedule.makeup.to} với {schedule.makeup.staff}; chụp {schedule.shoot.from}–{schedule.shoot.to} với {schedule.shoot.staff}, {schedule.shoot.room}.</p>
            </li>
            {calendarBookings.map((booking) => <li key={booking.id}><strong>{booking.name}</strong><p>{booking.detail}</p></li>)}
          </ul>
        </details>
      </div>
      <div className='schedule-history-note' role='note'>
        <h3>Lịch sử đổi giờ</h3>
        <p>{adviceWorkspace.scheduleHistory}</p>
      </div>
    </section>
  );
}

export default ResourceSchedule;
