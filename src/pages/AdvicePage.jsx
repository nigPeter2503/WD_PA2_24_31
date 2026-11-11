import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gradStudio } from '../data/gradStudio.js';
import ConversationInbox from '../components/ConversationInbox.jsx';
import AdviceConversation from '../components/AdviceConversation.jsx';
import AdviceBookingForm from '../components/AdviceBookingForm.jsx';
import ResourceSchedule from '../components/ResourceSchedule.jsx';
import SuggestedSlots from '../components/SuggestedSlots.jsx';
import '../styles/advice.css';

function AdvicePage() {
  const { booking, conversations, package: photoPackage, people, schedule } = gradStudio;
  const selectedConversation = conversations.find((conversation) => conversation.id === booking.id);
  const { search, key } = useLocation();
  const bookingTitleRef = useRef(null);

  useEffect(() => {
    document.title = 'Tư vấn lịch chụp | GradStudio';
  }, []);

  useLayoutEffect(() => {
    if (search === '?section=booking') {
      bookingTitleRef.current.focus({ preventScroll: true });
      bookingTitleRef.current.scrollIntoView({ block: 'center' });
    }
  }, [search, key]);

  return (
    <div className='advice-page'>
      <header className='advice-page-header'>
        <div>
          <p className='eyebrow'>Không gian làm việc của studio</p>
          <h1 tabIndex={-1}>Tư vấn và đặt lịch</h1>
          <p>Admin {people.admin.name} đang mở cuộc tư vấn mẫu gói Tốt nghiệp của {people.customer.name}, đã thống nhất giờ chụp.</p>
        </div>
        <div className='admin-summary'>
          <span className='avatar' aria-hidden='true'>{people.admin.initials}</span>
          <div><strong>{people.admin.name}</strong><p>Quản lý studio</p></div>
        </div>
      </header>
      <div className='advice-layout'>
        <ConversationInbox conversations={conversations} selectedId={booking.id} />
        <div className='advice-center-panel'>
          <AdviceConversation customer={people.customer} admin={people.admin} status={selectedConversation.status} />
          <AdviceBookingForm booking={booking} photoPackage={photoPackage} schedule={schedule} shootType={selectedConversation.title} titleRef={bookingTitleRef} />
        </div>
        <aside className='advice-right-panel' aria-label='Lịch tài nguyên và khung giờ đã thống nhất'>
          <ResourceSchedule schedule={schedule} customer={people.customer} shootType={selectedConversation.title} />
          <SuggestedSlots schedule={schedule} />
        </aside>
      </div>
    </div>
  );
}

export default AdvicePage;
