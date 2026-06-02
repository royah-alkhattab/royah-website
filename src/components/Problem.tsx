import { FileText, Receipt, EyeOff } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Reveal, SectionTag } from './Reveal'

const points = [
  { icon: FileText, key: 'paper' },
  { icon: Receipt, key: 'manual' },
  { icon: EyeOff, key: 'blind' },
]

export function Problem() {
  const { t } = useTranslation()
  return (
    <section className="relative py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <SectionTag>{t('problem.tag')}</SectionTag>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight section-title">
              {t('problem.title')}
            </h2>
            <p className="mt-5 text-lg sm:text-xl text-muted-foreground leading-relaxed section-subtitle">
              {t('problem.subtitle')}
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-14">
          {points.map((p, i) => {
            const Icon = p.icon
            return (
              <Reveal key={p.key} delay={i * 0.1}>
                <div className="h-full bg-card clean-border rounded-2xl p-8 subtle-shadow">
                  <div className="w-12 h-12 rounded-xl bg-[#DB4B4B]/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#DB4B4B]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 card-title">{t(`problem.points.${p.key}.title`)}</h3>
                  <p className="text-muted-foreground leading-relaxed card-description">
                    {t(`problem.points.${p.key}.description`)}
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
