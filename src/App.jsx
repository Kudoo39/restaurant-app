import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import ChatBot from './components/features/chat/ChatBot'
import { useTranslation } from 'react-i18next'
import './index.css'

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'))
const MenuPage = lazy(() => import('./pages/MenuPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const HoursPage = lazy(() => import('./pages/HoursPage'))
const SpecialPage = lazy(() => import('./pages/SpecialPage'))

// Loading component
const PageLoader = () => {
  const { t } = useTranslation()
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="spinner w-12 h-12 border-4 mx-auto mb-4"></div>
        <p className="text-neutral-600">{t('ui.loading')}</p>
      </div>
    </div>
  )
}

const App = () => {
  const { i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.lang = i18n.resolvedLanguage || 'fi'
  }, [i18n.resolvedLanguage])

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/*" element={<MenuPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/hour" element={<HoursPage />} />
              <Route path="/special" element={<SpecialPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ChatBot key={i18n.language} />
      </div>
    </Router>
  )
}

export default App
