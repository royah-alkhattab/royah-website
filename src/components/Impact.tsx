import { useTranslation } from 'react-i18next'
import { Reveal } from './Reveal'

const stats = [
  { key: 'customers', color: '#059669' },
  { key: 'production', color: '#DB4B4B' },
  { key: 'paper', color: '#d97706' },
  { key: 'uptime', color: '#8B5A7F' },
] as const

export function Impact() {
  const { t } = useTranslation()
  return (
    <section id="impact" className="relative py-16 sm:py-24 lg:py-32 bg-card/40 scroll-mt-20">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-muted-foreground mb-5">
              <span className="h-2 w-2 rounded-full bg-[#059669]" />
              {t('impact.tag')}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight section-title">
              {t('impact.title')}
            </h2>
            <p className="mt-5 text-lg sm:text-xl text-muted-foreground leading-relaxed section-subtitle">
              {t('impact.subtitle')}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 max-w-5xl mx-auto mt-10 sm:mt-14">
          {stats.map((s, i) => (
            <Reveal key={s.key} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden bg-background clean-border rounded-2xl p-4 sm:p-6 text-center elevated-shadow transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-x-0 top-0 h-[3px]"
                  style={{ background: `linear-gradient(90deg, ${s.color}, ${s.color}33)` }} />
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black" style={{ color: s.color }}>
                  {t(`impact.stats.${s.key}.value`)}
                </div>
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-muted-foreground leading-snug">
                  {t(`impact.stats.${s.key}.label`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
