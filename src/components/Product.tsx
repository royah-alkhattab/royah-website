import { Building2, FileSignature, BellRing, LayoutDashboard, ArrowRight, Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Reveal, SectionTag } from './Reveal'

const features = [
  { icon: Building2, key: 'units' },
  { icon: FileSignature, key: 'contracts' },
  { icon: BellRing, key: 'payments' },
  { icon: LayoutDashboard, key: 'dashboard' },
]

export function Product() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const navigate = useNavigate()

  const scrollToContact = () => navigate('/contact')

  return (
    <section id="product" className="relative py-24 lg:py-32 bg-background scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Copy + features */}
          <Reveal>
            <SectionTag>{t('product.tag')}</SectionTag>
            <div className="flex items-center gap-3 flex-wrap mb-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight section-title">
                {t('product.name')}
              </h2>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#059669]/10 px-3 py-1 text-xs font-bold text-[#059669]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#059669] animate-pulse" />
                {t('product.live')}
              </span>
            </div>
            <p className="text-xl font-semibold text-[#DB4B4B] mb-4">{t('product.tagline')}</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t('product.description')}</p>

            <div className="grid sm:grid-cols-2 gap-5 mb-10">
              {features.map((f) => {
                const Icon = f.icon
                return (
                  <div key={f.key} className="flex gap-3">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-[#DB4B4B]/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#DB4B4B]" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-0.5">{t(`product.features.${f.key}.title`)}</h4>
                      <p className="text-sm text-muted-foreground leading-snug">{t(`product.features.${f.key}.description`)}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <button onClick={scrollToContact}
              className="group inline-flex items-center gap-2 bg-foreground text-background font-semibold px-8 py-4 rounded-lg text-lg hover:opacity-90 gentle-animation">
              {t('product.cta')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 gentle-animation rtl:rotate-180" />
            </button>
          </Reveal>

          {/* App preview mockup */}
          <Reveal delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-tr from-[#DB4B4B]/15 via-[#8B5A7F]/10 to-transparent blur-2xl rounded-[2rem]" />
              <div className="relative rounded-3xl bg-[#0f0f0f] p-3 shadow-2xl ring-1 ring-white/10">
                <div className="rounded-2xl bg-background overflow-hidden">
                  {/* App top bar */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#DB4B4B] flex items-center justify-center">
                        <Building2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-bold text-sm">{t('product.name')}</span>
                    </div>
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-border" />
                      <span className="h-2 w-2 rounded-full bg-border" />
                      <span className="h-2 w-2 rounded-full bg-border" />
                    </div>
                  </div>
                  {/* Stat tiles */}
                  <div className="grid grid-cols-3 gap-3 p-5">
                    {[
                      { v: isRTL ? '٪٩٢' : '92%', c: '#059669' },
                      { v: isRTL ? '٢٤' : '24', c: '#DB4B4B' },
                      { v: isRTL ? '٣' : '3', c: '#8B5A7F' },
                    ].map((s, i) => (
                      <div key={i} className="rounded-xl bg-card clean-border p-3">
                        <div className="h-1.5 w-8 rounded-full mb-2" style={{ backgroundColor: s.c }} />
                        <div className="text-xl font-black" style={{ color: s.c }}>{s.v}</div>
                        <div className="mt-1 h-1.5 w-12 rounded-full bg-border" />
                      </div>
                    ))}
                  </div>
                  {/* Income bars */}
                  <div className="px-5">
                    <div className="rounded-xl bg-card clean-border p-4">
                      <div className="flex items-end gap-2 h-24">
                        {[40, 65, 50, 80, 70, 95].map((h, i) => (
                          <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-[#DB4B4B]/40 to-[#DB4B4B]"
                            style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Tenant rows */}
                  <div className="p-5 space-y-2.5">
                    {[true, true, false].map((paid, i) => (
                      <div key={i} className="flex items-center justify-between rounded-xl bg-card clean-border px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-border" />
                          <div className="space-y-1.5">
                            <div className="h-2 w-20 rounded-full bg-border" />
                            <div className="h-2 w-14 rounded-full bg-border/60" />
                          </div>
                        </div>
                        {paid ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-[#059669]/10 px-2.5 py-1 text-[10px] font-bold text-[#059669]">
                            <Check className="w-3 h-3" />
                          </span>
                        ) : (
                          <span className="rounded-full bg-[#DB4B4B]/10 px-2.5 py-1 text-[10px] font-bold text-[#DB4B4B]">
                            !
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
