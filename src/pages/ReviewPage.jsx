import { useEffect } from 'react';
import AppointmentTimeline from '../components/AppointmentTimeline.jsx';
import ReviewBookingCard from '../components/ReviewBookingCard.jsx';
import WeekCalendar from '../components/WeekCalendar.jsx';
import { gradStudio } from '../data/gradStudio.js';
import '../styles/review.css';

function ReviewPage() {
  const { booking, conversations, package: photoPackage, people, schedule } = gradStudio;
  const conversation = conversations.find(({ id }) => id === booking.id);

  useEffect(() => {
    document.title = 'Lịch chụp của tôi | GradStudio';
  }, []);

  return (
    <div className='review-page'>
      <header className='review-intro'>
        <h1>Lịch chụp của tôi</h1>
        <p>{people.customer.name} · Lịch đã thống nhất, đang chờ cọc {booking.depositPercent}%.</p>
      </header>
      <div className='review-layout'>
        <div className='review-appointment'>
          <WeekCalendar date={schedule.date} />
          <AppointmentTimeline schedule={schedule} />
        </div>
        <ReviewBookingCard
          booking={booking}
          photoPackage={photoPackage}
          shootType={conversation.title}
          date={schedule.date}
          dateLabel={schedule.dateLabel}
        />
      </div>
    </div>
  );
}

export default ReviewPage;
