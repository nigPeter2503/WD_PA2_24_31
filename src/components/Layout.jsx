import { Link, useLocation } from 'react-router-dom';

const imageSource = 'https://www.magnific.com/free-vector/twitch-banner-template-class-2023-graduation_40444019.htm';

function Layout({ children }) {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';
  const isAdvicePage = pathname === '/advice';

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
      <main className={`site-main${isHomePage ? ' site-main-home' : ''}${isAdvicePage ? ' site-main-advice' : ''}`}>
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
