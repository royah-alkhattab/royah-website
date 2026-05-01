import { Suspense, lazy, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Globe, Calendar } from 'lucide-react'

// Lazy-load Spline so it doesn't block initial paint
const Spline = lazy(() => import('@splinetool/react-spline'))

// Default Spline scene URL — swap with your own scene from spline.design.
// This one is a public free robot from Spline community.
const SPLINE_SCENE = 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode'

export function Hero({ onBookClick }: { onBookClick: () => void }) {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const [splineLoaded, setSplineLoaded] = useState(false)

  const toggleLanguage = () => {
    const newLanguage = i18n.language?.startsWith('ar') ? 'en' : 'ar'
    i18n.changeLanguage(newLanguage)
    window.history.replaceState(null, '', newLanguage === 'ar' ? '/ar' : '/')
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Soft gradient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(194,65,12,0.08),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(45,90,61,0.06),transparent_60%)]"
      />

      {/* Top navigation */}
      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
        <a href="/" className="flex items-center" aria-label="Royah">
          <img
            src="/royah-logo-black.png"
            alt="Royah"
            className="h-9 w-auto"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#capabilities" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {t('nav.howWeHelp')}
          </a>
          <a href="#meeting" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {t('nav.meeting')}
          </a>
          <a href="#process" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {t('nav.howWeWork')}
          </a>
          <a href="#why" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {t('nav.whyRoyah')}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Switch Language"
          >
            <Globe className="h-3.5 w-3.5" />
            <span>{t('hero.languageToggle')}</span>
          </button>
          <button
            onClick={onBookClick}
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 sm:inline-flex"
          >
            {t('nav.bookCta')}
          </button>
        </div>
      </nav>

      {/* Hero content grid */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-12 lg:grid-cols-2 lg:gap-8 lg:px-12 lg:pt-20">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={isRTL ? 'lg:order-2 lg:text-right' : 'lg:order-1'}
        >
          <h1
            className="text-balance text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            style={{
              fontFamily: isRTL ? 'var(--font-arabic-display)' : 'var(--font-english-display)',
              fontWeight: isRTL ? 600 : 400,
            }}
          >
            {t('hero.headline')}
          </h1>

          <p
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
            style={{ fontFamily: isRTL ? 'var(--font-arabic-body)' : 'var(--font-english-body)' }}
          >
            {t('hero.subheadline')}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={onBookClick}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground transition-all hover:opacity-90"
            >
              <Calendar className="h-4 w-4" />
              <span>{t('hero.cta')}</span>
            </button>
          </div>
        </motion.div>

        {/* Right — Spline 3D robot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: splineLoaded ? 1 : 0, scale: splineLoaded ? 1 : 0.95 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className={`relative h-[400px] w-full lg:h-[600px] ${isRTL ? 'lg:order-1' : 'lg:order-2'}`}
        >
          {/* Skeleton placeholder while Spline loads */}
          {!splineLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-64 w-64 animate-pulse rounded-full bg-secondary opacity-40 sm:h-80 sm:w-80" />
            </div>
          )}

          <Suspense fallback={null}>
            <Spline scene={SPLINE_SCENE} onLoad={() => setSplineLoaded(true)} />
          </Suspense>
        </motion.div>
      </div>
    </section>
  )
}
