import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gradStudio } from '../data/gradStudio.js';

function ServicesPage() {
  const servicesRef = useRef(null);

  useEffect(() => {
    document.title = 'Dịch vụ chụp ảnh | GradStudio';
  }, []);

  const handleScrollToServices = () => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    servicesRef.current?.scrollIntoView({
      behavior: isReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  return (
    <div className='home-page'>
      <section className='hero-section' aria-labelledby='home-title'>
        <div className='hero-copy'>
          <p className='eyebrow'>Studio ảnh tốt nghiệp &amp; chân dung</p>
          <h1 id='home-title'><span>Lưu lại ngày</span><em>ra trường</em><span>theo cách của bạn</span></h1>
          <p className='hero-description'>Kỷ yếu lớp, tốt nghiệp, chân dung CV – tư vấn ngay trên web và xem lịch chụp phù hợp.</p>
          <div className='hero-actions'>
            <button className='button button-primary' onClick={handleScrollToServices} type='button'>Xem gói chụp</button>
            <Link className='button button-secondary' to='/advice'>Chat với studio</Link>
          </div>
          <p className='role-note'>Nhân viên studio sẽ tiếp tục tư vấn tại trang Tư vấn.</p>
          <ul aria-label='Thông tin dịch vụ' className='value-strip'>
            <li>Tư vấn trực tiếp trên web</li>
            <li>Chọn gói rõ ràng</li>
            <li>Xem lịch chụp của bạn</li>
          </ul>
        </div>
        <button className='scroll-cue' onClick={handleScrollToServices} type='button'>
          <span>Cuộn xuống</span>
          <svg aria-hidden='true' focusable='false' viewBox='0 0 24 24'>
            <path d='M12 4v15m-6-6 6 6 6-6' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.7' />
          </svg>
        </button>
      </section>

      <section aria-labelledby='services-title' className='services-section' id='services' ref={servicesRef}>
        <div className='section-heading services-heading'>
          <p className='eyebrow'>Dịch vụ GradStudio</p>
          <h2 id='services-title'>Chọn câu chuyện bạn muốn lưu lại</h2>
        </div>
        <div className='service-grid'>
          {gradStudio.services.map((service, index) => (
            <article className='service-card card' key={service.id}>
              <div aria-hidden='true' className={`service-mark service-mark-${service.id}`}>
                {['KL', 'TN', 'CV'][index]}
              </div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <p className='service-price'>{service.price}</p>
              <Link
                aria-label={`Nhân viên studio: tư vấn gói ${service.name}`}
                className='button button-secondary service-select'
                to='/advice'
              >
                Tư vấn gói này
              </Link>
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
        <Link className='button button-primary' to='/advice'>Chat với studio</Link>
      </section>
      <Link aria-label='Mở trang Tư vấn' className='home-chat-launcher' to='/advice'>
        <svg aria-hidden='true' focusable='false' viewBox='0 0 24 24'>
          <path d='M4 5.75A2.75 2.75 0 0 1 6.75 3h10.5A2.75 2.75 0 0 1 20 5.75v7.5A2.75 2.75 0 0 1 17.25 16H11l-5 4v-4.25A2.75 2.75 0 0 1 4 13.25z' fill='none' stroke='currentColor' strokeLinejoin='round' strokeWidth='1.7' />
        </svg>
      </Link>
    </div>
  );
}

export default ServicesPage;
