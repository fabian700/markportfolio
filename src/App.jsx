import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'
import SiteFooter from './components/SiteFooter.jsx'
import SiteHeader from './components/SiteHeader.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import HomePage from './pages/HomePage.jsx'
import LifeStoryPage from './pages/LifeStoryPage.jsx'
import ValuesPage from './pages/ValuesPage.jsx'
import './App.css'

function SiteLayout() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/life-story" element={<LifeStoryPage />} />
        <Route path="/values" element={<ValuesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <SiteFooter />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <SiteLayout />
    </BrowserRouter>
  )
}

export default App
