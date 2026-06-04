import { Users, ShieldCheck, Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Reveal } from './Reveal'

const principleIcons = [
  { icon: Users, color: '#DB4B4B' },
  { icon: ShieldCheck, color: '#059669' },
  { icon: Languages, color: '#8B5A7F' },
]

export function Vision2040() {
  const { t } = useTranslation()
  const principles = t('vision.principles', { returnObjects: true }) as { title: string; desc: string }[]

  return (
    <section id="vision" className="relative py-16 sm:py-24 lg:py-32 bg-[#0a0a0a] text-white overflow-hidden scroll-mt-20">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#DB4B4B]/15 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-[#059669]/12 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Centered statement */}
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-white/80 mb-6">
              <span className="h-2 w-2 rounded-full bg-[#059669] animate-pulse" />
              {t('vision.tag')}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black leading-[1.05] tracking-tight">
              {t('vision.title')}
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-white/65 leading-relaxed max-w-2xl mx-auto">
              {t('vision.body')}
            </p>
          </div>
        </Reveal>

        {/* Principles — clean 3-up row */}
        <div className="mt-12 sm:mt-16 grid gap-4 sm:grid-cols-3 max-w-5xl mx-auto">
          {principles?.map((p, i) => {
            const Icon = principleIcons[i]?.icon ?? Users
            const color = principleIcons[i]?.color ?? '#DB4B4B'
            return (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: `${color}1f` }}>
                    <Icon className="h-6 w-6" style={{ color }} />
                  </div>
                  <div className="mt-5 text-lg font-bold">{p.title}</div>
                  <div className="mt-1.5 text-sm leading-relaxed text-white/55">{p.desc}</div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
