import { HashRouter, Link, Route, Routes } from 'react-router-dom'

function Layout({ children }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" to="/">GradStudio</Link>
        <nav aria-label="Điều hướng chính" className="site-nav">
          <Link className="nav-link" to="/">Dịch vụ</Link>
          <Link className="nav-link" to="/advice">Tư vấn</Link>
          <Link className="nav-link" to="/review">Lịch chụp của tôi</Link>
        </nav>
      </header>
      <main className="site-main">{children}</main>
      <footer className="site-footer">GradStudio · Tư vấn và đặt lịch chụp tại Thành phố Hồ Chí Minh</footer>
    </div>
  )
}

function ScreenPlaceholder({ title, description, pageTitle }) {
  document.title = pageTitle
  return (
    <section className="placeholder-card card">
      <p className="eyebrow">GradStudio</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  )
}

function ServicesPage() {
  return <ScreenPlaceholder title="Dịch vụ chụp ảnh" description="Màn 1 · Linh xem các dịch vụ và trao đổi với studio." pageTitle="Dịch vụ | GradStudio" />
}

function AdvicePage() {
  return <ScreenPlaceholder title="Tư vấn lịch chụp" description="Màn 2 · Admin Thảo tư vấn và xử lý lịch bị trùng." pageTitle="Tư vấn | GradStudio" />
}

function ReviewPage() {
  return <ScreenPlaceholder title="Lịch chụp của tôi" description="Màn 3 · Linh xem lại booking GS-1024 và khoản đặt cọc." pageTitle="Lịch chụp của tôi | GradStudio" />
}

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ServicesPage />} />
          <Route path="/advice" element={<AdvicePage />} />
          <Route path="/review" element={<ReviewPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}

export default App
