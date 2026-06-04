import { useTranslation } from 'react-i18next'
import { Reveal } from './Reveal'

export function Vision2040() {
  const { t } = useTranslation()
  return (
    <section id="vision" className="relative py-16 sm:py-24 lg:py-32 bg-[#0a0a0a] text-white overflow-hidden scroll-mt-20">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-[#DB4B4B]/20 blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-[#059669]/15 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-white/80 mb-5">
              <span className="h-2 w-2 rounded-full bg-[#059669] animate-pulse" />
              {t('vision.tag')}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
              {t('vision.title')}
            </h2>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              {t('vision.body')}
            </p>
            <p className="mt-6 text-base font-medium text-[#DB4B4B]">
              {t('vision.note')}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-10 text-center">
              <div className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-[#DB4B4B] to-[#e89090] bg-clip-text text-transparent">
                {t('vision.stat')}
              </div>
              <p className="mt-5 text-white/70 leading-relaxed max-w-xs mx-auto">
                {t('vision.statLabel')}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
