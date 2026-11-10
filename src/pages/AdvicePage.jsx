import { useEffect } from 'react';

function AdvicePage() {
  useEffect(() => {
    document.title = 'Tư vấn lịch chụp | GradStudio';
  }, []);

  return (
    <section className='placeholder-card card'>
      <p className='eyebrow'>GradStudio</p>
      <h1>Tư vấn lịch chụp</h1>
      <p>Trang tư vấn đang được hoàn thiện.</p>
    </section>
  );
}

export default AdvicePage;
