import { ArrowUpRight, ExternalLink, ShieldCheck, BarChart3, Wallet } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Reveal, SectionTag } from './Reveal'

const projects = [
  { key: 'awtad', image: '/work-awtad.jpg', color: '#C08A3E' },
  { key: 'germangold', image: '/work-germangold.jpg', color: '#D4AF37' },
  { key: 'alsadiya', cover: 'alsadiya', color: '#8E2547' },
] as const

// Faithful recreation of Al Sadiya's branded login panel (the system is behind a
// login, so we don't show real customer data — this mirrors the public marketing
// panel of the live app).
function AlSadiyaCover() {
  return (
    <div dir="rtl" className="relative h-full w-full overflow-hidden bg-[#7a1f3d]"
      style={{ background: 'radial-gradient(120% 120% at 85% 10%, #9c2e52 0%, #7a1f3d 45%, #5c1530 100%)' }}>
      {/* subtle texture */}
      <div className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '26px 26px' }} />
      {/* brand top corner */}
      <div className="absolute top-[6%] right-[6%] flex items-center gap-2">
        <div className="text-right leading-tight">
          <div className="text-white font-bold text-[2.6cqw] sm:text-[2.2cqw]">مؤسسة السعدية للتجارة</div>
          <div className="text-white/55 text-[1.7cqw]">نخل، سلطنة عُمان</div>
        </div>
        <img src="/alsadiya-logo.png" alt="" className="h-[7cqw] w-[7cqw] object-contain drop-shadow" />
      </div>
      {/* centered hero content */}
      <div className="absolute inset-0 flex flex-col items-end justify-center gap-[2cqw] px-[7%] text-right">
        <h4 className="text-white font-black leading-tight text-[5.4cqw]">نظام إدارة فواتير المياه</h4>
        <p className="text-white/70 text-[2.3cqw] leading-relaxed max-w-[78%]">
          نظام متكامل لإدارة المشتركين، وقراءات العدادات، والفواتير والدفعات — مصمّم خصيصاً للشركات في سلطنة عُمان.
        </p>
        <div className="flex flex-wrap-reverse justify-end gap-[1.4cqw] pt-[1cqw]">
          {[{ icon: ShieldCheck, label: 'آمن' }, { icon: BarChart3, label: 'تقارير ذكية' }, { icon: Wallet, label: 'ريال عُماني' }].map((b) => {
            const Icon = b.icon
            return (
              <span key={b.label} className="inline-flex items-center gap-[0.8cqw] rounded-full border border-white/20 bg-white/5 px-[2cqw] py-[0.9cqw] text-white/85 text-[2cqw] font-semibold">
                <Icon className="h-[2.4cqw] w-[2.4cqw]" />
                {b.label}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export function Work() {
  const { t } = useTranslation()

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <SectionTag>{t('work.tag')}</SectionTag>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed section-subtitle">
              {t('work.intro')}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 lg:mt-20 flex flex-col gap-16 lg:gap-28 max-w-6xl mx-auto">
          {projects.map((p, i) => {
            const base = `work.projects.${p.key}`
            const tags = t(`${base}.tags`, { returnObjects: true }) as string[]
            const url = t(`${base}.url`)
            const reversed = i % 2 === 1
            return (
              <Reveal key={p.key}>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
                  {/* Screenshot in a browser frame */}
                  <a href={url} target="_blank" rel="noopener noreferrer"
                    className={`group relative block [direction:ltr] ${reversed ? 'lg:order-2' : ''}`}>
                    <div className="pointer-events-none absolute -inset-4 rounded-[2rem] blur-2xl opacity-50 transition-opacity duration-500 group-hover:opacity-80"
                      style={{ background: `radial-gradient(60% 60% at 50% 40%, ${p.color}33, transparent)` }} />
                    <div className="relative rounded-2xl overflow-hidden bg-[#0f0f0f] ring-1 ring-black/10 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1.5">
                      {/* browser chrome */}
                      <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-white/5">
                        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                        <span className="ms-3 truncate rounded-md bg-white/5 px-3 py-1 text-xs text-white/40">
                          {t(`${base}.urlLabel`)}
                        </span>
                      </div>
                      <div className="aspect-[1200/630] w-full overflow-hidden [container-type:inline-size]">
                        {'image' in p ? (
                          <img src={p.image} alt={t(`${base}.name`)}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            loading="lazy" />
                        ) : (
                          <div className="h-full w-full transition-transform duration-700 group-hover:scale-[1.03]">
                            <AlSadiyaCover />
                          </div>
                        )}
                      </div>
                    </div>
                  </a>

                  {/* Details */}
                  <div className={reversed ? 'lg:order-1' : ''}>
                    <div className="flex items-center gap-2 text-sm font-semibold mb-3" style={{ color: p.color }}>
                      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: p.color }} />
                      {t(`${base}.category`)}
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight mb-4 card-title">
                      {t(`${base}.name`)}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6 card-description">
                      {t(`${base}.description`)}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {tags.map((tag) => (
                        <span key={tag}
                          className="rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href={url} target="_blank" rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 font-semibold text-foreground hover:opacity-80 gentle-animation">
                      <ExternalLink className="w-4 h-4" />
                      {t('work.visit')}
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
