import { useEffect } from 'react';

function ReviewPage() {
  useEffect(() => {
    document.title = 'Lịch chụp của tôi | GradStudio';
  }, []);

  return (
    <section className='placeholder-card card'>
      <p className='eyebrow'>GradStudio</p>
      <h1>Lịch chụp của tôi</h1>
      <p>Trang lịch chụp đang được hoàn thiện.</p>
    </section>
  );
}

export default ReviewPage;
