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
        <p>{people.customer.name} · Xem lại lịch đã thống nhất với studio.</p>
      </header>
      <WeekCalendar date={schedule.date} />
      <div className='review-layout'>
        <AppointmentTimeline schedule={schedule} />
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
