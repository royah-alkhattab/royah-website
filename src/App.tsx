import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { Home } from './pages/Home'
import { WorkPage } from './pages/WorkPage'
import { ProductPage } from './pages/ProductPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'

// /ar is kept as an Arabic entry point (SEO + shared links). It sets the
// language to Arabic and renders the home page at the normal "/" experience.
function ArabicEntry() {
  const { i18n } = useTranslation()
  useEffect(() => { if (!i18n.language?.startsWith('ar')) i18n.changeLanguage('ar') }, [i18n])
  return <Home />
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ar" element={<ArabicEntry />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
