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

  const card = (item: (typeof items)[number]) => {
    const Icon = item.icon
    const features = t(`whatWeDo.items.${item.key}.features`, { returnObjects: true }) as string[]
    return (
      <div className="group relative h-full overflow-hidden rounded-3xl bg-background clean-border p-6 sm:p-8 elevated-shadow transition-all duration-300 hover:-translate-y-1.5">
        {/* soft color glow that blooms on hover */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
          style={{ backgroundColor: `${item.color}30` }} />
        {/* accent ring on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl border-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ borderColor: `${item.color}66` }} />

        <div className="relative z-10">
          <div className="mb-5 sm:mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
            style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}cc)`, boxShadow: `0 10px 28px -10px ${item.color}99` }}>
            <Icon className="h-7 w-7 text-white" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-3 card-title">{t(`whatWeDo.items.${item.key}.title`)}</h3>
          <p className="text-muted-foreground leading-relaxed mb-6 card-description">
            {t(`whatWeDo.items.${item.key}.description`)}
          </p>
          <ul className="space-y-3">
            {features.map((f, fi) => (
              <li key={fi} className="flex items-center gap-3 text-sm font-medium">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${item.color}1a` }}>
                  <Check className="h-3 w-3" style={{ color: item.color }} />
                </span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

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

        {/* Tablet & desktop: 3-column grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-14">
          {items.map((item, i) => (
            <Reveal key={item.key} delay={i * 0.1}>{card(item)}</Reveal>
          ))}
        </div>

        {/* Phone: stacking deck — cards pile up as you scroll */}
        <div className="md:hidden mt-10 max-w-md mx-auto">
          {items.map((item, i) => (
            <div
              key={item.key}
              className="sticky pb-5"
              style={{ top: `calc(5rem + ${i}rem)` }}
            >
              {card(item)}
            </div>
          ))}
          {/* tail gives the last card room to pin and the stack a moment to hold */}
          <div className="h-[45vh]" />
        </div>
      </div>
    </section>
  )
}
