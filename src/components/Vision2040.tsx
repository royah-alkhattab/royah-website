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
        <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-[#DB4B4B]/20 blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-[#059669]/15 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-white/80 mb-5">
              <span className="h-2 w-2 rounded-full bg-[#059669] animate-pulse" />
              {t('vision.tag')}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
              {t('vision.title')}
            </h2>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              {t('vision.body')}
            </p>
            <p className="mt-6 text-base font-medium text-[#DB4B4B]">
              {t('vision.note')}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 sm:p-8">
              <div className="space-y-2">
                {principles?.map((p, i) => {
                  const Icon = principleIcons[i]?.icon ?? Users
                  const color = principleIcons[i]?.color ?? '#DB4B4B'
                  return (
                    <div key={i}>
                      {i > 0 && <div className="my-5 h-px bg-white/10" />}
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                          style={{ backgroundColor: `${color}1f` }}>
                          <Icon className="h-5 w-5" style={{ color }} />
                        </div>
                        <div>
                          <div className="font-bold leading-tight">{p.title}</div>
                          <div className="mt-1 text-sm leading-relaxed text-white/60">{p.desc}</div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
