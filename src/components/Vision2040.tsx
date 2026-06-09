import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useTranslation } from 'react-i18next'

// One word that darkens into focus as the section scrolls through the viewport
function Word({ word, range, progress }: { word: string; range: [number, number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.14, 1])
  return (
    <span className="relative mr-[0.28em] inline-block">
      <span className="absolute inset-0 text-[#101418]/10">{word}</span>
      <motion.span style={{ opacity }} className="text-[#101418]">{word}</motion.span>
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
    <section id="vision" className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-[#eef3f6] to-[#f6f8fa] py-28 text-[#101418] sm:py-36 lg:py-44">
      {/* soft holographic blooms */}
      <div className="bloom-drift pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[1000px] max-w-[140vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[40px]"
        style={{ background: 'radial-gradient(closest-side, rgba(125,226,239,.38), transparent 75%)' }} />
      <div className="bloom-drift-2 pointer-events-none absolute left-[62%] top-[58%] h-[300px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[40px]"
        style={{ background: 'radial-gradient(closest-side, rgba(255,150,140,.3), transparent 75%)' }} />

      <div ref={ref} className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#101418]/10 bg-white/70 px-4 py-1.5 text-sm font-semibold text-[#3f6470] shadow-[0_8px_30px_-12px_rgba(16,20,24,.15)] backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#22d3ee] shadow-[0_0_10px_#22d3ee]" />
            {t('vision.tag')}
          </div>

          {/* scroll-revealed manifesto */}
          <p className="flex flex-wrap justify-center text-3xl font-black leading-[1.18] tracking-tight sm:text-4xl lg:text-6xl">
            {words.map((w, i) => (
              <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}
