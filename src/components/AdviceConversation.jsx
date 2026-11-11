import { Link } from 'react-router-dom';
import { adviceWorkspace } from '../data/adviceWorkspace.js';

function AdviceConversation({ customer, admin, status }) {
  return (
    <section className='advice-chat' aria-labelledby='chat-title'>
      <header className='chat-header'>
        <span className='avatar' aria-hidden='true'>{adviceWorkspace.customerInitials}</span>
        <div className='chat-person'>
          <h2 id='chat-title'>{adviceWorkspace.customerName}</h2>
          <p className='chat-topic'>Hỏi về: Gói Tốt nghiệp</p>
        </div>
        <span className='status-chip status-confirmed'>{status}</span>
      </header>
      <Link className='button button-primary booking-jump' to='?section=booking'>Đến form Booking mới</Link>
      <p className='chat-date'>Trao đổi trước buổi chụp</p>
      <ol className='advice-message-list'>
        {adviceWorkspace.messages.map((message) => {
          const isCustomer = message.sender === customer.name;
          const sender = isCustomer ? customer.name : `Studio ${admin.name}`;
          return (
            <li className={`advice-message${isCustomer ? ' advice-message-customer' : ''}`} key={message.id}>
              <div className='advice-message-bubble'>
                <p className='message-meta'>
                  <strong>{sender}</strong>
                  <time>{message.time}</time>
                </p>
                <p>{message.text}</p>
              </div>
            </li>
          );
        })}
      </ol>
      <div className='advice-composer'>
        <label htmlFor='advice-message'>Tin nhắn tư vấn</label>
        <div className='composer-controls'>
          <input id='advice-message' name='message' type='text' placeholder='Nhập nội dung trao đổi…' autoComplete='off' aria-describedby='composer-note' />
          <button className='button' type='button' disabled aria-describedby='composer-note'>Gửi</button>
        </div>
        <p className='form-note' id='composer-note'>Gửi tin nhắn chưa khả dụng trong bản mẫu.</p>
      </div>
    </section>
  );
}

export default AdviceConversation;
