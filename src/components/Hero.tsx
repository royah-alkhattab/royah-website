import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

// "Future Light" hero — bright spatial scene: aurora blooms, holographic grid
// floor, orbital rings and floating glass HUD chips. No imagery needed; the
// whole scene is CSS so it loads instantly and adapts to any screen.

const ticker = [
  { label: 'AWTAD.OM', status: 'LIVE' },
  { label: 'GERMANGOLD.OM', status: 'LIVE' },
  { label: 'AL SADIYA', status: 'PRIVATE SYSTEM' },
  { label: 'ROYAH PROPERTY', status: 'COMING SOON' },
]

export function Hero() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#f6f8fa] text-[#101418]">
      {/* aurora blooms */}
      <div className="pointer-events-none absolute inset-0">
        <div className="bloom-drift absolute -top-[340px] left-1/2 h-[780px] w-[1500px] max-w-[160vw] -translate-x-1/2 rounded-full blur-[30px]"
          style={{ background: 'radial-gradient(closest-side, rgba(125,226,239,.5), rgba(125,226,239,.12) 55%, transparent)' }} />
        <div className="bloom-drift-2 absolute -left-[220px] top-[330px] h-[560px] w-[700px] rounded-full blur-[40px]"
          style={{ background: 'radial-gradient(closest-side, rgba(255,160,150,.38), transparent 70%)' }} />
        <div className="bloom-drift absolute -right-[200px] top-[380px] h-[540px] w-[660px] rounded-full blur-[40px]"
          style={{ background: 'radial-gradient(closest-side, rgba(167,139,250,.26), transparent 70%)' }} />
      </div>

      {/* holographic grid floor + horizon */}
      <div className="pointer-events-none absolute bottom-[-200px] left-1/2 h-[820px] w-[2400px] -translate-x-1/2"
        style={{
          transform: 'translateX(-50%) perspective(800px) rotateX(60deg)',
          backgroundImage:
            'repeating-linear-gradient(90deg, rgba(16,98,124,.14) 0 1.5px, transparent 1.5px 84px), repeating-linear-gradient(0deg, rgba(16,98,124,.11) 0 1.5px, transparent 1.5px 84px)',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,.85), transparent 80%)',
          maskImage: 'linear-gradient(to top, rgba(0,0,0,.85), transparent 80%)',
        }} />
      <div className="pointer-events-none absolute bottom-[240px] left-1/2 h-1 w-[1000px] max-w-[90vw] -translate-x-1/2 blur-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(34,211,238,.8), transparent)', boxShadow: '0 0 46px 10px rgba(34,211,238,.35)' }} />

      {/* orbital rings */}
      <div className="pointer-events-none absolute left-1/2 top-[290px] hidden h-[300px] w-[900px] -translate-x-1/2 rotate-[-7deg] rounded-full border-[1.5px] border-[#22d3ee]/35 border-t-transparent md:block" />
      <div className="pointer-events-none absolute left-1/2 top-[320px] hidden h-[340px] w-[1080px] -translate-x-1/2 rotate-[5deg] rounded-full border-[1.5px] border-dashed border-[#DB4B4B]/30 border-b-transparent md:block" />

      {/* floating HUD chips (desktop only) */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
        className="floaty absolute left-[7%] top-[34%] z-[3] hidden -rotate-3 rounded-2xl border border-white/90 bg-white/60 px-5 py-4 shadow-[0_18px_44px_-16px_rgba(30,60,80,.25)] backdrop-blur-xl lg:block">
        <div className="mono-tech text-[11px] tracking-[.2em] text-[#0e8aa0]">AI CORE</div>
        <div className="mt-1.5 text-lg font-bold text-[#0c9e74]">● ONLINE</div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.85 }}
        className="floaty-2 absolute right-[6%] top-[30%] z-[3] hidden rotate-2 rounded-2xl border border-white/90 bg-white/60 px-5 py-4 shadow-[0_18px_44px_-16px_rgba(30,60,80,.25)] backdrop-blur-xl lg:block">
        <div className="mono-tech text-[11px] tracking-[.2em] text-[#0e8aa0]">MUSCAT, OMAN</div>
        <div className="mt-1.5 text-lg font-bold" dir="ltr">23.58°N 58.38°E</div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }}
        className="floaty-3 absolute right-[10%] top-[62%] z-[3] hidden -rotate-2 rounded-2xl border border-white/90 bg-white/60 px-5 py-4 shadow-[0_18px_44px_-16px_rgba(30,60,80,.25)] backdrop-blur-xl lg:block">
        <div className="mono-tech text-[11px] tracking-[.2em] text-[#0e8aa0]">SYSTEMS LIVE</div>
        <div className="mt-1.5 text-lg font-bold" dir="ltr">04 — SHIPPED</div>
      </motion.div>

      {/* content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-6 py-28 sm:px-8 sm:py-32 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#101418]/10 bg-white/70 px-5 py-2.5 text-sm font-medium tracking-wide text-[#3f6470] shadow-[0_8px_30px_-12px_rgba(16,20,24,.18)] backdrop-blur-md sm:mb-9">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#10b981] shadow-[0_0_10px_#10b981]" />
              {t('hero.badge')}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl font-black leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
              {t('hero.headline')}{' '}
              <span className="bg-gradient-to-r from-[#0ea5b7] via-[#22d3ee] to-[#DB4B4B] bg-clip-text text-transparent">
                {t('hero.headlineAccent')}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#46535f] sm:mt-8 sm:text-xl">
              {t('hero.subheadline')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-9 flex flex-col items-center justify-center gap-3 sm:mt-11 sm:flex-row sm:gap-4">
              <button onClick={() => navigate('/work')}
                className="gentle-animation group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#DB4B4B] px-9 py-4 text-lg font-semibold text-white shadow-[0_16px_40px_-10px_rgba(219,75,75,.55)] hover:bg-[#c43e3e] sm:w-auto">
                {t('hero.ctaPrimary')}
                <ArrowRight className="gentle-animation h-5 w-5 group-hover:translate-x-1 rtl:rotate-180" />
              </button>
              <button onClick={() => navigate('/contact')}
                className="gentle-animation inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#101418]/10 bg-white/75 px-9 py-4 text-lg font-semibold text-[#101418] shadow-[0_12px_32px_-14px_rgba(16,20,24,.25)] backdrop-blur-md hover:bg-white sm:w-auto">
                {t('hero.ctaSecondary')}
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* deployed-systems ticker */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-[#101418]/5 bg-white/65 backdrop-blur-md">
        <div className="mono-tech flex items-center gap-10 overflow-x-auto whitespace-nowrap px-6 py-4 text-[11px] tracking-[.22em] text-[#7b8794] sm:justify-center sm:gap-16 sm:px-12 sm:text-xs"
          dir="ltr">
          {ticker.map((x) => (
            <span key={x.label}>
              <span className="text-[#0e8aa0]">▸ </span>{x.label} — {x.status}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
