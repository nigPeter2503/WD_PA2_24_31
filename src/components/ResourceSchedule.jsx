import { adviceWorkspace } from '../data/adviceWorkspace.js';

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
            <span className='calendar-swatch swatch-clash' aria-hidden='true'>
              <svg className='schedule-hatching' focusable='false'>
                <defs><pattern id='legend-clash-hatching' width='8' height='8' patternUnits='userSpaceOnUse' patternTransform='rotate(-45)'><rect width='3' height='8' /></pattern></defs>
                <rect width='100%' height='100%' fill='url(#legend-clash-hatching)' />
              </svg>
            </span>
            Trùng lịch
          </li>
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
          <p className='timeline-caption'>Ca ngày · 08:00–18:00</p>
        </div>
        <div className='calendar-scroll' role='region' aria-label='Bảng timeline nhân sự và phòng, có thể cuộn ngang' tabIndex={0}>
          <table className='calendar-board' aria-label='Lịch tài nguyên ngày 24 tháng 10 năm 2026' aria-describedby='calendar-reading-note'>
            <thead>
              <tr>
                <th scope='col'>Nhân sự / Phòng</th>
                <th scope='col'>
                  <div className='calendar-hours'>
                    {adviceWorkspace.timelineTicks.map((time) => <span key={time}>{time}</span>)}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {adviceWorkspace.resources.map((resource) => (
                <tr key={resource.id}>
                  <th scope='row'>{resource.name}</th>
                  <td>
                    <div className='calendar-track'>
                      <div className='calendar-event event-break period-break' aria-label='Nghỉ trưa 12:00–13:00'>
                        <svg className='schedule-hatching' aria-hidden='true' focusable='false'>
                          <defs><pattern id={`break-${resource.id}`} width='8' height='8' patternUnits='userSpaceOnUse' patternTransform='rotate(-45)'><rect width='3' height='8' /></pattern></defs>
                          <rect width='100%' height='100%' fill={`url(#break-${resource.id})`} />
                        </svg>
                      </div>
                      {resource.events.map((event) => (
                        <div className={`calendar-event event-${event.kind} period-${event.period}`} aria-describedby={event.descriptionId} key={event.id}>
                          <span className='calendar-event-label'>{event.label}</span>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className='calendar-reading-note' id='calendar-reading-note'>Ô nét đứt của Linh: Đã thống nhất · Chờ cọc. CV = Chân dung/CV. Nghỉ trưa 12:00–13:00. Cuộn ngang bảng nếu cần.</p>
        <details className='calendar-booking-details' open>
          <summary>Chi tiết các lịch hẹn</summary>
          <ul>
            <li id='schedule-linh'>
              <strong>{customer.name} · {shootType}</strong>
              <p>Đã thống nhất · Chờ cọc. Makeup {schedule.makeup.from}–{schedule.makeup.to} với {schedule.makeup.staff}; chụp {schedule.shoot.from}–{schedule.shoot.to} với {schedule.shoot.staff}, {schedule.shoot.room}.</p>
            </li>
            {adviceWorkspace.calendarBookings.map((booking) => <li id={booking.id} key={booking.id}><strong>{booking.name}</strong><p>{booking.detail}</p></li>)}
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
