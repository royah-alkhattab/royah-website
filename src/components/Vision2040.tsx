import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useTranslation } from 'react-i18next'

// One word that brightens as the section scrolls through the viewport
function Word({ word, range, progress }: { word: string; range: [number, number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.12, 1])
  return (
    <span className="relative mr-[0.28em] inline-block">
      <span className="absolute inset-0 text-white/10">{word}</span>
      <motion.span style={{ opacity }} className="text-white">{word}</motion.span>
    </span>
  )
}

export function Vision2040() {
  const { t } = useTranslation()
  const text = t('vision.manifesto')
  const words = text.split(' ')

  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.82', 'end 0.62'] })

  return (
    <section id="vision" className="relative py-28 sm:py-36 lg:py-48 bg-[#070708] text-white overflow-hidden scroll-mt-20">
      {/* ambient + texture */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] max-w-[130vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DB4B4B]/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 right-1/5 h-[280px] w-[280px] rounded-full bg-[#059669]/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
        backgroundSize: '36px 36px',
        maskImage: 'radial-gradient(ellipse 75% 65% at 50% 50%, #000 35%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 50%, #000 35%, transparent 100%)',
      }} />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />

      <div ref={ref} className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-white/80 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#059669] animate-pulse" />
            {t('vision.tag')}
          </div>

          {/* scroll-revealed manifesto */}
          <p className="text-3xl sm:text-4xl lg:text-6xl font-black leading-[1.18] tracking-tight flex flex-wrap justify-center">
            {words.map((w, i) => (
              <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}
