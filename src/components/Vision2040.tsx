import { useTranslation } from 'react-i18next'
import { Reveal } from './Reveal'

export function Vision2040() {
  const { t } = useTranslation()

  return (
    <section id="vision" className="relative py-24 sm:py-32 lg:py-40 bg-[#080809] text-white overflow-hidden scroll-mt-20">
      {/* fine dot-grid texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
        backgroundSize: '34px 34px',
        maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 40%, transparent 100%)',
      }} />
      {/* soft radial spotlight behind the words */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[820px] max-w-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DB4B4B]/12 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[280px] w-[280px] rounded-full bg-[#059669]/10 blur-[120px]" />
      {/* top & bottom edge fades for a distinct 'moment' */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-white/80 mb-8 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#059669] animate-pulse" />
              {t('vision.tag')}
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.02] tracking-tight">
              <span className="bg-gradient-to-b from-white via-white to-white/55 bg-clip-text text-transparent">
                {t('vision.title')}
              </span>
            </h2>
            <p className="mt-7 text-lg sm:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
              {t('vision.body')}
            </p>
            <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-[#DB4B4B]/30 bg-[#DB4B4B]/10 px-5 py-2 text-sm font-semibold text-[#e89090]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#DB4B4B]" />
              {t('vision.note')}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
