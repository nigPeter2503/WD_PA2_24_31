import { HashRouter, Route, Routes } from 'react-router-dom';
import AdvicePage from './pages/AdvicePage.jsx';
import ReviewPage from './pages/ReviewPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import Layout from './components/Layout.jsx';

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<ServicesPage />} />
          <Route path='/advice' element={<AdvicePage />} />
          <Route path='/review' element={<ReviewPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
