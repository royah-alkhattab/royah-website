import { Boxes, Sparkles, Compass, Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Reveal, SectionTag } from './Reveal'

const items = [
  { icon: Boxes, key: 'software', color: '#DB4B4B' },
  { icon: Sparkles, key: 'ai', color: '#8B5A7F' },
  { icon: Compass, key: 'strategy', color: '#059669' },
]

// A tiny stylized "preview" of what each service does — built in code, no media.
function Preview({ item }: { item: (typeof items)[number] }) {
  const c = item.color

  if (item.key === 'software') {
    // mini dashboard: header, table rows, bar chart
    return (
      <div className="w-full space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="h-2.5 w-20 rounded-full" style={{ backgroundColor: c }} />
          <div className="flex gap-1">
            <div className="h-2 w-2 rounded-full bg-foreground/15" />
            <div className="h-2 w-2 rounded-full bg-foreground/15" />
          </div>
        </div>
        {[0.85, 0.55, 0.7].map((w, k) => (
          <div key={k} className="flex items-center justify-between gap-3">
            <div className="h-2 rounded-full bg-foreground/10" style={{ width: `${w * 55}%` }} />
            <div className="h-2 w-9 rounded-full" style={{ backgroundColor: `${c}66` }} />
          </div>
        ))}
        <div className="flex h-9 items-end gap-1.5 pt-1">
          {[0.4, 0.7, 0.5, 1, 0.65].map((h, k) => (
            <div key={k} className="flex-1 rounded-t-sm" style={{ height: `${h * 100}%`, backgroundColor: k === 3 ? c : `${c}40` }} />
          ))}
        </div>
      </div>
    )
  }

  if (item.key === 'ai') {
    // mini chat with typing dots
    return (
      <div className="w-full space-y-2.5">
        <div className="h-6 w-3/4 rounded-2xl rounded-bl-md bg-foreground/10" />
        <div className="ml-auto h-6 w-3/5 rounded-2xl rounded-br-md" style={{ backgroundColor: `${c}40` }} />
        <div className="flex h-6 w-20 items-center gap-1.5 rounded-2xl rounded-bl-md bg-foreground/10 px-3">
          {[0, 150, 300].map((d) => (
            <span key={d} className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ backgroundColor: c, animationDelay: `${d}ms` }} />
          ))}
        </div>
      </div>
    )
  }

  // strategy: roadmap nodes + trending line
  return (
    <div className="w-full">
      <div className="relative flex items-center justify-between">
        <div className="absolute left-1 right-1 top-1/2 h-0.5 -translate-y-1/2 bg-foreground/10" />
        <div className="absolute left-1 top-1/2 h-0.5 w-3/5 -translate-y-1/2 rounded-full" style={{ backgroundColor: c }} />
        {[true, true, false, false].map((done, k) => (
          <div key={k} className="relative flex h-5 w-5 items-center justify-center rounded-full border-2 bg-background"
            style={{ borderColor: done ? c : 'rgba(120,120,120,0.25)' }}>
            {done && <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: c }} />}
          </div>
        ))}
      </div>
      <svg viewBox="0 0 100 26" preserveAspectRatio="none" className="mt-3 h-8 w-full">
        <polyline points="0,24 25,17 50,19 75,8 100,3" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

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

        {/* preview header */}
        <div className="relative z-10 p-4" style={{ background: `linear-gradient(135deg, ${item.color}16, ${item.color}05)` }}>
          <div className="rounded-2xl border border-black/[0.06] bg-background/70 p-4 backdrop-blur-sm">
            <Preview item={item} />
          </div>
          {/* icon badge straddling the header / content edge */}
          <div className="absolute -bottom-5 left-6 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
            style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}cc)`, boxShadow: `0 10px 24px -8px ${item.color}cc` }}>
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>

        {/* content */}
        <div className="relative z-10 px-6 pb-6 pt-9 sm:px-8 sm:pb-8">
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
            <div key={item.key} className="sticky pb-5" style={{ top: `calc(5rem + ${i}rem)` }}>
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
