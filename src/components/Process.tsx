import { Search, Hammer, Rocket, LifeBuoy } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Reveal, SectionTag } from './Reveal'

const steps = [
  { icon: Search, key: 'understand' },
  { icon: Hammer, key: 'build' },
  { icon: Rocket, key: 'launch' },
  { icon: LifeBuoy, key: 'support' },
]

export function Process() {
  const { t } = useTranslation()
  return (
    <section className="relative py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <SectionTag>{t('process.tag')}</SectionTag>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight section-title">
              {t('process.title')}
            </h2>
            <p className="mt-5 text-lg sm:text-xl text-muted-foreground leading-relaxed section-subtitle">
              {t('process.subtitle')}
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-14">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.key} delay={i * 0.1}>
                <div className="relative h-full bg-card clean-border rounded-2xl p-7 subtle-shadow">
                  <span className="absolute top-6 ltr:right-6 rtl:left-6 text-5xl font-black text-border select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-[#DB4B4B]/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#DB4B4B]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 card-title">{t(`process.steps.${s.key}.title`)}</h3>
                  <p className="text-muted-foreground leading-relaxed card-description">
                    {t(`process.steps.${s.key}.description`)}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
