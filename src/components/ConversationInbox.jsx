import { useState } from 'react';
import { conversationStatuses } from '../data/gradStudio.js';
import { adviceWorkspace } from '../data/adviceWorkspace.js';

const statusClassNames = {
  [conversationStatuses.unanswered]: 'status-unanswered',
  [conversationStatuses.advising]: 'status-advising',
  [conversationStatuses.confirmed]: 'status-confirmed',
  [conversationStatuses.complete]: 'status-complete',
};

const normalizeSearch = (value) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/gi, 'd').toLocaleLowerCase('vi');

function ConversationInbox({ conversations, selectedId }) {
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const filters = ['all', conversationStatuses.unanswered, conversationStatuses.confirmed];
  const visibleConversations = conversations.filter((conversation) => {
    const name = conversation.id === selectedId ? adviceWorkspace.customerName : conversation.name;
    return (statusFilter === 'all' || conversation.status === statusFilter)
      && normalizeSearch(`${name} ${conversation.title}`).includes(normalizeSearch(query.trim()));
  });

  const handleSearchChange = (event) => setQuery(event.target.value);
  const handleFilterChange = (filter) => setStatusFilter(filter);

  return (
    <section className='conversation-panel' aria-labelledby='conversation-list-title'>
      <header className='inbox-heading'>
        <div className='panel-header'>
          <p className='eyebrow'>Hội thoại</p>
          <span className='panel-count'>{conversations.length} khách hàng</span>
        </div>
        <h2 id='conversation-list-title'>Khách đang chờ</h2>
        <div className='field-group inbox-search'>
          <label htmlFor='conversation-search'>Tìm khách hàng</label>
          <input id='conversation-search' type='search' placeholder='Nhập tên hoặc buổi chụp' value={query} onChange={handleSearchChange} />
        </div>
        <div className='conversation-filters' role='group' aria-label='Lọc trạng thái hội thoại'>
          {filters.map((filter) => (
            <button
              className={`conversation-filter${statusFilter === filter ? ' is-active' : ''}`}
              type='button'
              aria-pressed={statusFilter === filter}
              onClick={() => handleFilterChange(filter)}
              key={filter}
            >
              {filter === 'all' ? 'Tất cả' : filter}
              <span>{filter === 'all' ? conversations.length : conversations.filter((conversation) => conversation.status === filter).length}</span>
            </button>
          ))}
        </div>
      </header>
      <p className='inbox-result' role='status'>{visibleConversations.length} hội thoại hiển thị</p>
      <ul className='conversation-list'>
        {visibleConversations.map((conversation) => {
          const isSelected = conversation.id === selectedId;
          return (
            <li key={conversation.id} aria-current={isSelected ? 'true' : undefined}>
              <div className={`conversation-row${isSelected ? ' conversation-row-selected' : ''}`}>
                <span className='conversation-avatar' aria-hidden='true'>{isSelected ? adviceWorkspace.customerInitials : conversation.initials}</span>
                <div className='conversation-copy'>
                  <strong>{isSelected ? adviceWorkspace.customerName : conversation.name}</strong>
                  <p>{conversation.title}</p>
                  <span className={`status-chip ${statusClassNames[conversation.status]}`}>{conversation.status}</span>
                  {isSelected && <span className='conversation-current'>Đang mở</span>}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      {visibleConversations.length === 0 && <p className='inbox-empty'>Không có hội thoại phù hợp. Hãy thử tên khác hoặc chọn Tất cả.</p>}
      <p className='inbox-note'>{adviceWorkspace.conversationNote}</p>
    </section>
  );
}

export default ConversationInbox;
