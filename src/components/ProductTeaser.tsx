import { Building2, ArrowRight, MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Reveal, SectionTag } from './Reveal'

// A faithful mini-mockup of the real Royah Property dashboard
function AppMockup() {
  return (
    <div className="w-full max-w-sm mx-auto overflow-hidden rounded-2xl border border-white/10 bg-white text-[#0f0f0f] shadow-2xl">
      {/* window bar */}
      <div className="flex items-center gap-2 border-b border-black/5 bg-[#f7f7f8] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ef5f5f]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#f4bf4f]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#5fce7e]" />
        <span className="ml-2 text-xs font-semibold text-black/50">Royah Property</span>
        <span className="ms-auto rounded-md bg-black/5 px-1.5 py-0.5 text-[10px] font-medium text-black/40">EN · ع</span>
      </div>
      {/* dashboard body */}
      <div className="space-y-3 p-4">
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'Collected', value: 'OMR 3,150', tint: '#059669' },
            { label: 'Outstanding', value: 'OMR 350', tint: '#DB4B4B' },
            { label: 'Occupancy', value: '92%', tint: '#8B5A7F' },
          ].map((k) => (
            <div key={k.label} className="rounded-xl bg-[#f5f5f6] p-2.5">
              <div className="text-[9px] font-medium uppercase tracking-wide text-black/40">{k.label}</div>
              <div className="mt-1 text-sm font-bold" style={{ color: k.tint }}>{k.value}</div>
            </div>
          ))}
        </div>

        {/* income chart */}
        <div className="rounded-xl bg-[#f5f5f6] p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] font-semibold text-black/50">Income · last 6 months</span>
            <span className="text-[10px] font-bold text-[#059669]">▲ 18%</span>
          </div>
          <div className="flex h-16 items-end gap-1.5">
            {[0.45, 0.6, 0.5, 0.75, 0.65, 1].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h * 100}%`, backgroundColor: i === 5 ? '#DB4B4B' : '#DB4B4B40' }} />
            ))}
          </div>
        </div>

        {/* overdue + WhatsApp reminder */}
        <div className="flex items-center justify-between rounded-xl border border-[#DB4B4B]/20 bg-[#DB4B4B]/[0.06] p-2.5">
          <div>
            <div className="text-xs font-bold">Shop 4 · Al Khoud</div>
            <div className="text-[10px] font-medium text-[#DB4B4B]">Rent overdue · 6 days</div>
          </div>
          <span className="inline-flex items-center gap-1 rounded-lg bg-[#059669] px-2.5 py-1.5 text-[10px] font-semibold text-white">
            <MessageCircle className="h-3 w-3" /> Remind
          </span>
        </div>
      </div>
    </div>
  )
}

export function ProductTeaser() {
  const { t } = useTranslation()
  return (
    <section className="relative pt-8 pb-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-[#0f0f0f] text-white px-7 py-12 sm:px-8 sm:py-14 lg:px-16 lg:py-20">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#DB4B4B]/25 blur-[120px]" />
              <div className="absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-[#8B5A7F]/20 blur-[110px]" />
            </div>

            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              {/* text */}
              <div>
                <SectionTag>{t('productTeaser.tag')}</SectionTag>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#DB4B4B] flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                    {t('productTeaser.title')}
                  </h2>
                </div>
                <p className="text-lg text-white/70 leading-relaxed mb-8">
                  {t('productTeaser.desc')}
                </p>
                <Link to="/product"
                  className="group inline-flex items-center gap-2 bg-white text-[#0f0f0f] font-semibold px-7 py-3.5 rounded-lg text-lg hover:bg-white/90 gentle-animation">
                  {t('productTeaser.cta')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 gentle-animation rtl:rotate-180" />
                </Link>
              </div>

              {/* product mockup */}
              <Reveal delay={0.15}>
                <AppMockup />
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
