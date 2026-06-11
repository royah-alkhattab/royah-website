import { Boxes, Sparkles, Compass, Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Reveal, SectionTag } from './Reveal'

const items = [
  { icon: Compass, key: 'strategy', color: '#059669', video: '/card-strategy.mp4', poster: '/card-strategy.jpg' },
  { icon: Boxes, key: 'software', color: '#DB4B4B', video: '/card-software.mp4', poster: '/card-software.jpg' },
  { icon: Sparkles, key: 'ai', color: '#8B5A7F', video: '/card-ai.mp4', poster: '/card-ai.jpg' },
]

export function WhatWeDo() {
  const { t } = useTranslation()

  const card = (item: (typeof items)[number]) => {
    const Icon = item.icon
    const features = t(`whatWeDo.items.${item.key}.features`, { returnObjects: true }) as string[]
    return (
      <div className="group relative h-full overflow-hidden rounded-3xl bg-background clean-border elevated-shadow transition-all duration-300 hover:-translate-y-1.5">
        {/* soft color glow that blooms on hover */}
        <div className="pointer-events-none absolute -right-12 -top-12 z-0 h-44 w-44 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
          style={{ backgroundColor: `${item.color}30` }} />
        {/* accent ring on hover */}
        <div className="pointer-events-none absolute inset-0 z-20 rounded-3xl border-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ borderColor: `${item.color}66` }} />

        {/* animated preview cover — slimmer on phones */}
        <div className="relative z-10">
          <div className="aspect-[21/9] sm:aspect-[16/9] w-full overflow-hidden bg-[#0a0a0a]">
            <video
              className="h-full w-full object-cover"
              autoPlay muted loop playsInline preload="metadata"
              poster={item.poster}
            >
              <source src={item.video} type="video/mp4" />
            </video>
          </div>
          {/* fade the video into the card */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 sm:h-14 bg-gradient-to-t from-background to-transparent" />
          {/* icon badge straddling the edge (flips to the right in RTL) */}
          <div className="absolute -bottom-4 sm:-bottom-5 left-5 sm:left-6 rtl:left-auto rtl:right-5 sm:rtl:right-6 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl transition-transform duration-300 group-hover:scale-105"
            style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}cc)`, boxShadow: `0 10px 24px -8px ${item.color}cc` }}>
            <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </div>
        </div>

        {/* content */}
        <div className="relative z-10 px-5 pb-5 pt-8 sm:px-8 sm:pb-8 sm:pt-9">
          <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3 card-title">{t(`whatWeDo.items.${item.key}.title`)}</h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6 card-description">
            {t(`whatWeDo.items.${item.key}.description`)}
          </p>
          {/* features as compact chips */}
          <div className="flex flex-wrap gap-2">
            {features.map((f, fi) => (
              <span key={fi}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs sm:text-[13px] font-semibold"
                style={{ backgroundColor: `${item.color}12`, color: item.color, border: `1px solid ${item.color}2e` }}>
                <Check className="h-3 w-3 shrink-0" />
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="what" className="relative pt-16 pb-12 sm:py-24 lg:py-32 bg-card/40 scroll-mt-20">
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
            <div key={item.key} className="sticky pb-5" style={{ top: `calc(5rem + ${i}rem)` }}>
              {card(item)}
            </div>
          ))}
          {/* minimal tail so the last card settles, then flows into the next section */}
          <div className="h-4" />
        </div>
      </div>
    </section>
  )
}
