import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

// Plug-and-play hero video: drop `hero.mp4` (and optionally `hero-poster.jpg`)
// into /public and the hero switches from the gradient to the video automatically
// — no code change needed. Until then, the clean brand gradient shows.
// ?v= cache-buster: bump this whenever hero.mp4 / hero-poster.jpg are replaced,
// so browsers fetch the new files instead of a stale cached frame.
const HERO_VIDEO = '/hero.mp4?v=2'
const HERO_POSTER = '/hero-poster.jpg?v=2'

export function Hero() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [hasVideo, setHasVideo] = useState(false)

  useEffect(() => {
    let cancelled = false
    // Detect whether a real video file exists. A content-type check avoids false
    // positives from the SPA fallback (which would serve index.html for a missing file).
    fetch(HERO_VIDEO, { method: 'HEAD' })
      .then((res) => {
        const type = res.headers.get('content-type') || ''
        if (!cancelled && res.ok && type.includes('video')) setHasVideo(true)
      })
      .catch(() => {})
    return () => { cancelled = true }
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-white">
      {/* Background: cinematic video if present, else ambient brand gradient */}
      {hasVideo ? (
        <div className="absolute inset-0">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay muted loop playsInline preload="metadata"
            poster={HERO_POSTER}
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          {/* Lighter overlays: let the video show through, just enough tint for readable text */}
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/75 via-transparent to-[#0a0a0a]/25" />
        </div>
      ) : (
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#DB4B4B]/20 blur-[140px]" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#8B5A7F]/15 blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </div>
      )}

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 mb-6 sm:mb-8">
              <span className="h-2 w-2 rounded-full bg-[#059669] animate-pulse" />
              {t('hero.badge')}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight">
              {t('hero.headline')}{' '}
              <span className="text-[#DB4B4B]">{t('hero.headlineAccent')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-5 sm:mt-8 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              {t('hero.subheadline')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button onClick={() => navigate('/product')}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#DB4B4B] hover:bg-[#c43e3e] text-white font-semibold px-8 py-4 rounded-lg text-lg gentle-animation">
                {t('hero.ctaPrimary')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 gentle-animation rtl:rotate-180" />
              </button>
              <button onClick={() => navigate('/contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg text-lg gentle-animation">
                {t('hero.ctaSecondary')}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-6 sm:mt-8 inline-flex items-center gap-2 text-sm text-white/50">
              <span className="h-1.5 w-1.5 rounded-full bg-[#059669] animate-pulse" />
              {t('hero.trust')}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
