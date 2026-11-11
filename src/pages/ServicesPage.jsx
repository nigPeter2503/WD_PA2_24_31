import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import ServiceChat from '../components/ServiceChat.jsx';
import { gradStudio } from '../data/gradStudio.js';

function ServicesPage() {
  const servicesTitleRef = useRef(null);
  const inputRef = useRef(null);
  const launcherRef = useRef(null);
  const [isChatExpanded, setIsChatExpanded] = useState(true);
  const [chatFocusRequest, setChatFocusRequest] = useState(0);
  const [selectedService, setSelectedService] = useState(() => (
    gradStudio.services.find((service) => service.id === 'graduation') ?? gradStudio.services[0]
  ));

  useEffect(() => {
    document.title = 'Dịch vụ chụp ảnh | GradStudio';
  }, []);

  useLayoutEffect(() => {
    if (chatFocusRequest === 0) {
      return;
    }

    const target = isChatExpanded ? inputRef.current : launcherRef.current;
    target.focus({ preventScroll: true });
    target.scrollIntoView({
      behavior: 'instant',
      block: isChatExpanded ? 'center' : 'nearest',
    });
  }, [chatFocusRequest, isChatExpanded]);

  const handleScrollToServices = () => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const title = servicesTitleRef.current;
    title.focus({ preventScroll: true });
    title.scrollIntoView({
      behavior: isReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  const handleOpenChat = () => {
    setIsChatExpanded(true);
    setChatFocusRequest((request) => request + 1);
  };

  const handleSelectService = (service) => {
    setSelectedService(service);
    handleOpenChat();
  };

  const handleMinimizeChat = () => {
    setIsChatExpanded(false);
    setChatFocusRequest((request) => request + 1);
  };

  return (
    <div className='home-page'>
      <section className='hero-section' aria-labelledby='home-title'>
        <div className='hero-row'>
          <div className='hero-copy'>
            <p className='eyebrow'>Studio ảnh tốt nghiệp &amp; chân dung</p>
            <h1 id='home-title'><span>Lưu lại ngày</span><em>ra trường</em><span>theo cách của bạn</span></h1>
            <p className='hero-description'>Kỷ yếu lớp, tốt nghiệp, chân dung CV – tư vấn ngay trên web và xem lịch chụp phù hợp.</p>
            <div className='hero-actions'>
              <button className='button button-primary' onClick={handleScrollToServices} type='button'>Xem gói chụp</button>
              <button className='button button-secondary' onClick={handleOpenChat} type='button'>Chat với studio</button>
            </div>
            <p className='role-note'>Nhân viên studio sẽ tiếp tục tư vấn tại trang Tư vấn.</p>
            <ul aria-label='Thông tin dịch vụ' className='value-strip'>
              <li>Tư vấn trực tiếp trên web</li>
              <li>Chọn gói rõ ràng</li>
              <li>Xem lịch chụp của bạn</li>
            </ul>
          </div>
          <ServiceChat
            inputRef={inputRef}
            isExpanded={isChatExpanded}
            launcherRef={launcherRef}
            onMinimize={handleMinimizeChat}
            onReopen={handleOpenChat}
            selectedService={selectedService}
          />
        </div>
        <button className='scroll-cue' onClick={handleScrollToServices} type='button'>
          <span>Cuộn xuống</span>
          <svg aria-hidden='true' focusable='false' viewBox='0 0 24 24'>
            <path d='M12 4v15m-6-6 6 6 6-6' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.7' />
          </svg>
        </button>
      </section>

      <section aria-labelledby='services-title' className='services-section' id='services'>
        <div className='section-heading services-heading'>
          <p className='eyebrow'>Dịch vụ GradStudio</p>
          <h2 id='services-title' ref={servicesTitleRef} tabIndex={-1}>Chọn câu chuyện bạn muốn lưu lại</h2>
        </div>
        <div className='service-grid'>
          {gradStudio.services.map((service, index) => (
            <article className={`service-card card${selectedService.id === service.id ? ' service-card-selected' : ''}`} key={service.id}>
              <div aria-hidden='true' className={`service-mark service-mark-${service.id}`}>
                {['KL', 'TN', 'CV'][index]}
              </div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <p className='service-price'>từ {service.price}</p>
              <button
                aria-pressed={selectedService.id === service.id}
                className='button button-secondary service-select'
                onClick={() => handleSelectService(service)}
                type='button'
              >
                Tư vấn gói này
              </button>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby='sample-title' className='sample-section'>
        <div className='section-heading'>
          <p className='eyebrow'>Một vài gợi ý</p>
          <h2 id='sample-title'>Sắc màu ngày tốt nghiệp</h2>
        </div>
        <div className='sample-grid'>
          {gradStudio.samples.map((sample) => (
            <figure className='sample-card' key={sample.id}>
              <img alt={sample.alt} height='480' src={sample.src} width='640' />
              <figcaption>{sample.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section aria-labelledby='process-title' className='process-section'>
        <div className='section-heading'>
          <p className='eyebrow'>Các bước tiếp theo</p>
          <h2 id='process-title'>Từ câu hỏi đến buổi chụp</h2>
        </div>
        <ol className='process-list'>
          {gradStudio.processSteps.map((step, index) => (
            <li key={step.id}>
              <span className='process-number'>0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby='closing-title' className='closing-section'>
        <p className='eyebrow'>Cùng bắt đầu</p>
        <h2 id='closing-title'>Bạn muốn kể câu chuyện nào?</h2>
        <button className='button button-primary' onClick={handleOpenChat} type='button'>Chat với studio</button>
      </section>
    </div>
  );
}

export default ServicesPage;
