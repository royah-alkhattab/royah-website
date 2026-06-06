import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Reveal, SectionTag } from './Reveal'

const projects = [
  { key: 'awtad', image: '/work-awtad.jpg', color: '#C08A3E' },
  { key: 'germangold', image: '/work-germangold.jpg', color: '#D4AF37' },
] as const

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
                      <div className="aspect-[1200/630] w-full overflow-hidden">
                        <img src={p.image} alt={t(`${base}.name`)}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                          loading="lazy" />
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
