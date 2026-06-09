import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Reveal } from './Reveal'

// Homepage work teaser — a glass-framed screen floating in 3D next to a
// "deployed systems" status list. Links through to /work.
const rows = [
  { name: 'German Gold', status: 'E-COMMERCE', live: true },
  { name: 'Awtad Development', status: 'PROPERTY', live: true },
  { name: 'Al Sadiya Systems', status: 'BILLING', live: true },
  { name: 'Royah Property', status: 'LAUNCHING', live: false },
]

export function WorkShowcase() {
  const { t } = useTranslation()

  return (
    <section className="bg-[#f6f8fa] py-16 sm:py-24 lg:py-28">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mono-tech text-xs tracking-[.32em] text-[#0e8aa0]" dir="ltr">// SELECTED WORK</div>
              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                {t('workTeaser.title')}
              </h2>
            </div>
            <Link to="/work"
              className="gentle-animation group inline-flex items-center gap-2 self-start rounded-full border border-[#101418]/10 bg-white/75 px-6 py-3 font-semibold text-[#101418] shadow-[0_12px_32px_-14px_rgba(16,20,24,.25)] backdrop-blur-md hover:bg-white sm:self-auto">
              {t('workTeaser.view')}
              <ArrowRight className="gentle-animation h-4 w-4 group-hover:translate-x-1 rtl:rotate-180" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col items-center gap-10 lg:flex-row lg:gap-12" style={{ perspective: '1900px' }}>
          <Reveal className="w-full lg:w-[58%]">
            <Link to="/work" className="block">
              <div className="gentle-animation relative overflow-hidden rounded-3xl border-8 border-white/90 shadow-[0_50px_110px_-34px_rgba(30,60,80,.45)] hover:scale-[1.015] lg:[transform:rotateX(5deg)_rotateY(-6deg)] lg:rtl:[transform:rotateX(5deg)_rotateY(6deg)]">
                <img src="/card-software.jpg" alt="Royah work — live business system"
                  className="h-64 w-full object-cover sm:h-80 lg:h-[420px]" />
                <div className="mono-tech absolute left-4 top-4 rounded-lg bg-white/85 px-4 py-2 text-[11px] tracking-[.18em] text-[#0e8aa0] shadow-[0_8px_22px_-8px_rgba(16,20,24,.3)] backdrop-blur-md rtl:left-auto rtl:right-4"
                  dir="ltr">
                  CASE 01 — GERMANGOLD.OM
                </div>
              </div>
            </Link>
          </Reveal>

          <div className="flex w-full flex-col gap-4 lg:w-[42%]">
            {rows.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.08}>
                <Link to="/work"
                  className="gentle-animation flex items-center gap-4 rounded-2xl border border-white/95 bg-white/75 px-6 py-5 shadow-[0_18px_44px_-22px_rgba(30,60,80,.3)] backdrop-blur-md hover:-translate-y-0.5 hover:bg-white">
                  <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${r.live
                    ? 'bg-[#10b981] shadow-[0_0_12px_rgba(16,185,129,.8)]'
                    : 'bg-[#f59e0b] shadow-[0_0_12px_rgba(245,158,11,.8)]'}`} />
                  <span className="text-lg font-bold text-[#101418]">{r.name}</span>
                  <span className="mono-tech ms-auto text-[11px] tracking-[.16em] text-[#9aa8b5]" dir="ltr">{r.status}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
