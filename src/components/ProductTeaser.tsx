import { Building2, ArrowRight, MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Reveal, SectionTag } from './Reveal'

// The real Royah Property app shown inside a phone (it's a mobile-first PWA)
function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[250px] sm:w-[264px]">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-[#DB4B4B]/20 blur-3xl" />
      {/* device */}
      <div className="relative rounded-[2.6rem] border-[7px] border-[#15161a] bg-[#15161a] shadow-2xl">
        <div className="relative overflow-hidden rounded-[2.1rem] bg-[#f6f6f7] text-[#0f0f0f]">
          {/* dynamic island */}
          <div className="absolute left-1/2 top-2.5 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />

          {/* app header */}
          <div className="flex items-center justify-between bg-white px-4 pb-3 pt-9">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#DB4B4B]">
                <Building2 className="h-3.5 w-3.5 text-white" />
              </span>
              <span className="text-[13px] font-bold">Royah Property</span>
            </div>
            <span className="rounded-md bg-black/5 px-1.5 py-0.5 text-[9px] font-semibold text-black/40">EN · ع</span>
          </div>

          {/* app body */}
          <div className="space-y-2.5 px-3 py-3">
            {/* hero KPI */}
            <div className="rounded-2xl bg-gradient-to-br from-[#059669] to-[#047857] p-3 text-white">
              <div className="text-[9px] font-medium uppercase tracking-wide text-white/70">Collected this month</div>
              <div className="mt-0.5 flex items-end justify-between">
                <span className="text-xl font-black">OMR 3,150</span>
                <span className="mb-0.5 text-[10px] font-bold text-white/90">▲ 18%</span>
              </div>
            </div>
            {/* two KPIs */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="rounded-xl bg-white p-2.5 shadow-sm">
                <div className="text-[9px] font-medium uppercase tracking-wide text-black/40">Outstanding</div>
                <div className="mt-0.5 text-sm font-bold text-[#DB4B4B]">OMR 350</div>
              </div>
              <div className="rounded-xl bg-white p-2.5 shadow-sm">
                <div className="text-[9px] font-medium uppercase tracking-wide text-black/40">Occupancy</div>
                <div className="mt-0.5 text-sm font-bold text-[#8B5A7F]">92%</div>
              </div>
            </div>
            {/* chart */}
            <div className="rounded-xl bg-white p-2.5 shadow-sm">
              <div className="mb-2 text-[9px] font-semibold text-black/50">Income · last 6 months</div>
              <div className="flex h-12 items-end gap-1.5">
                {[0.45, 0.6, 0.5, 0.75, 0.65, 1].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h * 100}%`, backgroundColor: i === 5 ? '#DB4B4B' : '#DB4B4B33' }} />
                ))}
              </div>
            </div>
            {/* overdue + reminder */}
            <div className="flex items-center justify-between rounded-xl border border-[#DB4B4B]/20 bg-[#DB4B4B]/[0.06] p-2.5">
              <div>
                <div className="text-[11px] font-bold leading-tight">Shop 4 · Al Khoud</div>
                <div className="text-[9px] font-medium text-[#DB4B4B]">Overdue · 6 days</div>
              </div>
              <span className="inline-flex items-center gap-1 rounded-lg bg-[#059669] px-2 py-1.5 text-[9px] font-semibold text-white">
                <MessageCircle className="h-3 w-3" /> Remind
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProductTeaser() {
  const { t } = useTranslation()
  const pills = ['Payments', 'Contracts', 'WhatsApp reminders', 'Dashboard']

  return (
    <section className="relative pt-8 pb-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-[#0f0f0f] text-white px-7 py-12 sm:px-8 sm:py-14 lg:px-16 lg:py-16">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#DB4B4B]/25 blur-[120px]" />
              <div className="absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-[#8B5A7F]/20 blur-[110px]" />
            </div>

            <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
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
                <p className="text-lg text-white/70 leading-relaxed mb-6">
                  {t('productTeaser.desc')}
                </p>
                {/* feature pills */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {pills.map((p) => (
                    <span key={p} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/75">
                      {p}
                    </span>
                  ))}
                </div>
                <Link to="/product"
                  className="group inline-flex items-center gap-2 bg-white text-[#0f0f0f] font-semibold px-7 py-3.5 rounded-lg text-lg hover:bg-white/90 gentle-animation">
                  {t('productTeaser.cta')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 gentle-animation rtl:rotate-180" />
                </Link>
              </div>

              {/* phone mockup */}
              <Reveal delay={0.15}>
                <PhoneMockup />
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
