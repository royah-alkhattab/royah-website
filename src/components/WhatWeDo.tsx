import { Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Reveal } from './Reveal'

// "Future Light" services — frosted-glass panels with glossy orbs.
const items = [
  { key: 'strategy', id: '01 — STRATEGY', orb: 'red' },
  { key: 'software', id: '02 — SOFTWARE', orb: 'teal' },
  { key: 'ai', id: '03 — INTELLIGENCE', orb: 'red' },
]

const orbStyle: Record<string, React.CSSProperties> = {
  teal: {
    background: 'radial-gradient(circle at 32% 30%, #fff, #bdf3fb 45%, #22d3ee)',
    boxShadow: '0 14px 30px -8px rgba(34,211,238,.55), inset 0 -6px 14px rgba(14,138,160,.35)',
  },
  red: {
    background: 'radial-gradient(circle at 32% 30%, #fff, #ffc9c4 45%, #DB4B4B)',
    boxShadow: '0 14px 30px -8px rgba(219,75,75,.5), inset 0 -6px 14px rgba(150,40,40,.3)',
  },
}

export function WhatWeDo() {
  const { t } = useTranslation()

  const card = (item: (typeof items)[number]) => {
    const features = t(`whatWeDo.items.${item.key}.features`, { returnObjects: true }) as string[]
    return (
      <div className="gentle-animation group relative h-full overflow-hidden rounded-3xl border border-white/95 bg-white/70 p-8 shadow-[0_30px_70px_-28px_rgba(30,60,80,.3)] backdrop-blur-xl hover:-translate-y-1.5 sm:p-10">
        <div className="mono-tech text-xs tracking-[.2em] text-[#9aa8b5]" dir="ltr">{item.id}</div>
        <div className="mt-7 mb-6 h-14 w-14 rounded-full" style={orbStyle[item.orb]} />
        <h3 className="mb-2 text-2xl font-bold text-[#101418] sm:text-[1.7rem]">
          {t(`whatWeDo.items.${item.key}.title`)}
        </h3>
        <p className="mb-6 leading-relaxed text-[#5d6b78]">
          {t(`whatWeDo.items.${item.key}.description`)}
        </p>
        <ul className="space-y-3">
          {features.map((f, fi) => (
            <li key={fi} className="flex items-center gap-3 text-sm font-medium text-[#46535f]">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#22d3ee]/15">
                <Check className="h-3 w-3 text-[#0e8aa0]" />
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <section id="what" className="scroll-mt-20 bg-gradient-to-b from-[#f6f8fa] to-[#eef3f6] pt-16 pb-12 sm:py-24 lg:py-28">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="mono-tech text-xs tracking-[.32em] text-[#0e8aa0]" dir="ltr">// {t('whatWeDo.tag').toUpperCase()}</div>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              {t('whatWeDo.title')}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#5d6b78] sm:text-xl">
              {t('whatWeDo.subtitle')}
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.key} delay={i * 0.1}>{card(item)}</Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
