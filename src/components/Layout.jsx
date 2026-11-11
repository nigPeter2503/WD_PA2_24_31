import { useLayoutEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const imageSource = 'https://www.magnific.com/free-vector/twitch-banner-template-class-2023-graduation_40444019.htm';

function Layout({ children }) {
  const { pathname, search } = useLocation();
  const previousPathRef = useRef(pathname);
  const mainRef = useRef(null);
  const isHomePage = pathname === '/';
  const isAdvicePage = pathname === '/advice';

  useLayoutEffect(() => {
    const previousPath = previousPathRef.current;
    previousPathRef.current = pathname;
    const isAdviceHandoff = previousPath === '/' && pathname === '/advice';
    const isReviewHandoff = previousPath === '/advice' && pathname === '/review';

    if (!search && (isAdviceHandoff || isReviewHandoff)) {
      const heading = mainRef.current.querySelector('h1');
      heading.focus({ preventScroll: true });
      heading.scrollIntoView({ block: 'center' });
    }
  }, [pathname, search]);

  return (
    <div className={`site-shell${isHomePage ? ' home-shell' : ''}`}>
      <header className='site-header'>
        <Link className='brand' to='/'>GradStudio</Link>
        <nav aria-label='Điều hướng chính' className='site-nav'>
          <Link className='nav-link' to='/'>Dịch vụ</Link>
          <Link className='nav-link' to='/advice'>Tư vấn</Link>
          <Link className='nav-link' to='/review'>Lịch chụp của tôi</Link>
        </nav>
      </header>
      <main ref={mainRef} className={`site-main${isHomePage ? ' site-main-home' : ''}${isAdvicePage ? ' site-main-advice' : ''}`}>
        {children}
      </main>
      <footer className='site-footer'>
        <p>GradStudio · Tư vấn và đặt lịch chụp tại Thành phố Hồ Chí Minh</p>
        <p>
          Ảnh nền: <a href={imageSource} rel='noreferrer' target='_blank'>Designed by Magnific</a>
        </p>
      </footer>
    </div>
  );
}

export default Layout;
