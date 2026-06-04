import { useTranslation } from 'react-i18next'
import { Reveal } from './Reveal'

export function Vision2040() {
  const { t } = useTranslation()

  return (
    <section id="vision" className="relative py-20 sm:py-28 lg:py-36 bg-[#0a0a0a] text-white overflow-hidden scroll-mt-20">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#DB4B4B]/15 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-[#059669]/12 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-white/80 mb-6">
              <span className="h-2 w-2 rounded-full bg-[#059669] animate-pulse" />
              {t('vision.tag')}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black leading-[1.05] tracking-tight">
              {t('vision.title')}
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-white/65 leading-relaxed max-w-2xl mx-auto">
              {t('vision.body')}
            </p>
            <p className="mt-6 text-base font-medium text-[#DB4B4B]">
              {t('vision.note')}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
