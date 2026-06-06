import { ArrowUpRight, ExternalLink, Droplets, Lock } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Reveal, SectionTag } from './Reveal'

type Project = {
  key: string
  color: string
  mode: 'photo' | 'product' | 'gradient'
  bg?: string
  private?: boolean
}

const projects: Project[] = [
  { key: 'awtad', color: '#E2B673', mode: 'photo', bg: '/work-awtad-bg.jpg' },
  { key: 'germangold', color: '#E7C24B', mode: 'product', bg: '/work-germangold-bg.png' },
  { key: 'alsadiya', color: '#E08AA6', mode: 'gradient', private: true },
]

// A language-aware cover: real background imagery (or Al Sadiya's branded gradient)
// with the headline + sentence rendered in the current site language, so the Arabic
// site shows Arabic and the English site shows English.
function ProjectCover({ p }: { p: Project }) {
  const { t, i18n } = useTranslation()
  const base = `work.projects.${p.key}`
  const dir = i18n.language?.startsWith('ar') ? 'rtl' : 'ltr'

  return (
    <div dir={dir} className="relative h-full w-full overflow-hidden [container-type:inline-size]"
      style={p.mode === 'gradient'
        ? { background: 'radial-gradient(120% 120% at 85% 12%, #9c2e52 0%, #7a1f3d 48%, #561430 100%)' }
        : { backgroundColor: '#0a0a0a' }}>

      {/* Background imagery */}
      {p.mode === 'photo' && (
        <img src={p.bg} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" loading="lazy" />
      )}
      {p.mode === 'product' && (
        <img src={p.bg} alt="" className="absolute left-1/2 top-[7%] h-[56%] w-auto max-w-[94%] -translate-x-1/2 object-contain transition-transform duration-700 group-hover:scale-[1.04]" loading="lazy" />
      )}
      {p.mode === 'gradient' && (
        <>
          <div className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '26px 26px' }} />
          <Droplets className="absolute top-[-6cqw] h-[34cqw] w-[34cqw] text-white/10" style={{ insetInlineEnd: '4cqw' }} />
        </>
      )}

      {/* Legibility scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

      {/* Language-aware text */}
      <div className="absolute inset-x-0 bottom-0 p-[6cqw] text-start">
        <div className="font-semibold text-[2.2cqw] mb-[1.4cqw]" style={{ color: p.color }}>
          {t(`${base}.category`)}
        </div>
        <h4 className="text-white font-black leading-[1.1] text-[5.2cqw]">
          {t(`${base}.coverTitle`)}
        </h4>
        <p className="text-white/75 leading-relaxed text-[2.5cqw] mt-[1.6cqw] max-w-[82%]">
          {t(`${base}.coverSubtitle`)}
        </p>
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
            // Al Sadiya is a private internal system — its cover doesn't link out.
            const Wrapper: any = p.private ? 'div' : 'a'
            const wrapperProps = p.private ? {} : { href: url, target: '_blank', rel: 'noopener noreferrer' }
            return (
              <Reveal key={p.key}>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
                  {/* Cover in a browser frame */}
                  <Wrapper {...wrapperProps}
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
                        <ProjectCover p={p} />
                      </div>
                    </div>
                  </Wrapper>

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
                    {p.private ? (
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                        <Lock className="w-4 h-4" />
                        {t('work.privateLabel')}
                      </span>
                    ) : (
                      <a href={url} target="_blank" rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 font-semibold text-foreground hover:opacity-80 gentle-animation">
                        <ExternalLink className="w-4 h-4" />
                        {t('work.visit')}
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    )}
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
