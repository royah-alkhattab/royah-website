import { Boxes, Sparkles, Compass, Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Reveal, SectionTag } from './Reveal'

const items = [
  { icon: Boxes, key: 'software', color: '#DB4B4B' },
  { icon: Sparkles, key: 'ai', color: '#8B5A7F' },
  { icon: Compass, key: 'strategy', color: '#059669' },
]

export function WhatWeDo() {
  const { t } = useTranslation()
  return (
    <section id="what" className="relative py-16 sm:py-24 lg:py-32 bg-card/40 scroll-mt-20">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <SectionTag>{t('whatWeDo.tag')}</SectionTag>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight section-title">
              {t('whatWeDo.title')}
            </h2>
            <p className="mt-5 text-lg sm:text-xl text-muted-foreground leading-relaxed section-subtitle">
              {t('whatWeDo.subtitle')}
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto mt-10 sm:mt-14">
          {items.map((item, i) => {
            const Icon = item.icon
            const features = t(`whatWeDo.items.${item.key}.features`, { returnObjects: true }) as string[]
            return (
              <Reveal key={item.key} delay={i * 0.1}>
                <div className="h-full bg-background clean-border rounded-3xl p-6 sm:p-8 elevated-shadow hover:-translate-y-1 gentle-animation">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-5 sm:mb-6"
                    style={{ backgroundColor: `${item.color}1a` }}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 card-title">{t(`whatWeDo.items.${item.key}.title`)}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 card-description">
                    {t(`whatWeDo.items.${item.key}.description`)}
                  </p>
                  <ul className="space-y-2.5">
                    {features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2.5 text-sm font-medium">
                        <Check className="w-4 h-4 shrink-0" style={{ color: item.color }} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
