import { Link } from 'react-router-dom';
import { gradStudio } from '../data/gradStudio.js';
import './ServiceChat.css';

function ServiceChat({ inputRef, isExpanded, launcherRef, onMinimize, onReopen, selectedService }) {
  return (
    <section aria-labelledby='service-chat-title' className='service-chat' id='chat'>
      <h2 className='service-chat-sr-only' id='service-chat-title'>Trao đổi với GradStudio</h2>
      <div className='service-chat-panel' hidden={!isExpanded} id='chat-panel'>
        <header className='service-chat-header'>
          <div className='service-chat-identity'>
            <div aria-hidden='true' className='service-chat-avatar'>G</div>
            <p className='service-chat-name'>GradStudio</p>
            <span className='status-chip status-advising service-chat-status'>Đang tư vấn</span>
          </div>
          <button
            aria-controls='chat-panel'
            aria-expanded='true'
            aria-label='Thu nhỏ chat'
            className='service-chat-minimize'
            onClick={onMinimize}
            type='button'
          >
            <svg aria-hidden='true' focusable='false' viewBox='0 0 24 24'>
              <path d='M5 12h14' fill='none' stroke='currentColor' strokeLinecap='round' strokeWidth='1.8' />
            </svg>
          </button>
        </header>

        <p aria-live='polite' className='service-chat-topic'>Đang hỏi về: Gói {selectedService.name}</p>

        <ol aria-label='Tin nhắn trong cuộc trò chuyện' className='message-list service-chat-message-list'>
          {gradStudio.chat.screen1.map((message) => (
            <li className={`message message-${message.id}`} key={message.id}>
              <div className='message-content'>
                <p className='message-meta'>
                  <strong>{message.sender}</strong>
                  <time dateTime={message.time}>{message.time}</time>
                </p>
                <p>{message.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className='service-chat-composer'>
          <label htmlFor='service-chat-message'>Tin nhắn của bạn</label>
          <div className='service-chat-composer-controls'>
            <input autoComplete='off' id='service-chat-message' name='message' ref={inputRef} type='text' />
            <button aria-describedby='service-chat-send-note' aria-label='Gửi' className='button service-chat-send' disabled type='button'>
              <svg aria-hidden='true' focusable='false' viewBox='0 0 24 24'>
                <path d='M4 12h15m-6-6 6 6-6 6' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.8' />
              </svg>
            </button>
          </div>
          <p className='form-note' id='service-chat-send-note'>Gửi tin nhắn chưa khả dụng trong bản mẫu.</p>
        </div>

        <div className='service-chat-handoff'>
          <p className='form-note' id='service-chat-advice-note'>Nhân viên studio sẽ mở cuộc tư vấn mẫu gói Tốt nghiệp của Linh.</p>
          <Link aria-describedby='service-chat-advice-note' className='button service-chat-advice-link' to='/advice'>Nhận tư vấn</Link>
        </div>
      </div>
      {!isExpanded && (
        <button
          aria-controls='chat-panel'
          aria-expanded='false'
          aria-label='Mở chat'
          className='service-chat-launcher'
          onClick={onReopen}
          ref={launcherRef}
          type='button'
        >
          <svg aria-hidden='true' focusable='false' viewBox='0 0 24 24'>
            <path d='M4 5.75A2.75 2.75 0 0 1 6.75 3h10.5A2.75 2.75 0 0 1 20 5.75v7.5A2.75 2.75 0 0 1 17.25 16H11l-5 4v-4.25A2.75 2.75 0 0 1 4 13.25z' fill='none' stroke='currentColor' strokeLinejoin='round' strokeWidth='1.7' />
          </svg>
        </button>
      )}
    </section>
  );
}

export default ServiceChat;
