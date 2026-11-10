import { useEffect } from 'react';
import { gradStudio } from '../data/gradStudio.js';
import ConversationInbox from '../components/ConversationInbox.jsx';
import AdviceConversation from '../components/AdviceConversation.jsx';
import AdviceBookingForm from '../components/AdviceBookingForm.jsx';
import ResourceSchedule from '../components/ResourceSchedule.jsx';
import SuggestedSlots from '../components/SuggestedSlots.jsx';
import '../styles/advice.css';

function AdvicePage() {
  const { booking, conversations, package: photoPackage, people, schedule, suggestedTimeSlots } = gradStudio;
  const selectedConversation = conversations.find((conversation) => conversation.id === booking.id);

  useEffect(() => {
    document.title = 'Tư vấn lịch chụp | GradStudio';
  }, []);

  return (
    <div className='advice-page'>
      <header className='advice-page-header'>
        <div>
          <p className='eyebrow'>Không gian làm việc của studio</p>
          <h1>Tư vấn và đặt lịch</h1>
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
          <AdviceBookingForm booking={booking} photoPackage={photoPackage} schedule={schedule} shootType={selectedConversation.title} />
        </div>
        <aside className='advice-right-panel' aria-label='Lịch tài nguyên và khung giờ đề xuất'>
          <ResourceSchedule schedule={schedule} customer={people.customer} shootType={selectedConversation.title} />
          <SuggestedSlots slots={suggestedTimeSlots} schedule={schedule} />
        </aside>
      </div>
    </div>
  );
}

export default AdvicePage;
