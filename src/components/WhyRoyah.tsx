import { BrainCircuit, Globe2, ShieldCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Reveal, SectionTag } from './Reveal'

const points = [
  { icon: BrainCircuit, key: 'ai' },
  { icon: Globe2, key: 'oman' },
  { icon: ShieldCheck, key: 'lasting' },
]

export function WhyRoyah() {
  const { t } = useTranslation()
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <SectionTag>{t('why.tag')}</SectionTag>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight section-title mb-5">
              {t('why.title')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('why.description')}
            </p>
          </Reveal>

          <div className="space-y-5">
            {points.map((p, i) => {
              const Icon = p.icon
              return (
                <Reveal key={p.key} delay={i * 0.1}>
                  <div className="flex gap-4 bg-card clean-border rounded-2xl p-6 subtle-shadow">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-[#DB4B4B]/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#DB4B4B]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 card-title">{t(`why.points.${p.key}.title`)}</h3>
                      <p className="text-muted-foreground leading-relaxed card-description">
                        {t(`why.points.${p.key}.description`)}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
