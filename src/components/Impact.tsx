import { useTranslation } from 'react-i18next'
import { Reveal } from './Reveal'

const keys = ['customers', 'production', 'paper', 'uptime'] as const

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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mt-14">
          {keys.map((k, i) => (
            <Reveal key={k} delay={i * 0.08}>
              <div className="h-full bg-background clean-border rounded-2xl p-6 text-center elevated-shadow">
                <div className="text-4xl lg:text-5xl font-black text-[#DB4B4B]">
                  {t(`impact.stats.${k}.value`)}
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-snug">
                  {t(`impact.stats.${k}.label`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
