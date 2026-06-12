import { Building2, FileSignature, BellRing, LayoutDashboard, ArrowRight, Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Reveal } from './Reveal'

const features = [
  { icon: Building2, key: 'units', color: '#DB4B4B' },
  { icon: FileSignature, key: 'contracts', color: '#059669' },
  { icon: BellRing, key: 'payments', color: '#d97706' },
  { icon: LayoutDashboard, key: 'dashboard', color: '#8B5A7F' },
]

export function Product() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const navigate = useNavigate()

  const scrollToContact = () => navigate('/contact')

  return (
    <section id="product" className="relative py-16 sm:py-24 lg:py-32 bg-background scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Copy + features */}
          <Reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d97706]/10 px-3.5 py-1.5 text-xs font-bold text-[#d97706] mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d97706] animate-pulse" />
              {t('product.live')}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight tracking-tight section-title mb-4">
              {t('product.tagline')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-7 sm:mb-9">{t('product.description')}</p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {features.map((f) => {
                const Icon = f.icon
                return (
                  <div key={f.key}
                    className="group h-full rounded-2xl bg-card clean-border p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_-18px_rgba(20,20,30,0.35)]">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundColor: `${f.color}14` }}>
                      <Icon className="h-5 w-5" style={{ color: f.color }} />
                    </div>
                    <h4 className="mb-1 text-sm sm:text-base font-bold card-title">{t(`product.features.${f.key}.title`)}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-snug card-description">{t(`product.features.${f.key}.description`)}</p>
                  </div>
                )
              })}
            </div>

            <button onClick={scrollToContact}
              className="group w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#e25555] to-[#c43a3a] text-white font-semibold px-8 py-3.5 sm:py-4 text-base sm:text-lg shadow-[0_18px_44px_-14px_rgba(219,75,75,0.7)] hover:shadow-[0_22px_52px_-14px_rgba(219,75,75,0.85)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] gentle-animation">
              {t('product.cta')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 gentle-animation rtl:rotate-180" />
            </button>
          </Reveal>

          {/* App preview mockup */}
          <Reveal delay={0.15}>
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              <div className="absolute -inset-6 bg-gradient-to-tr from-[#DB4B4B]/15 via-[#8B5A7F]/10 to-transparent blur-2xl rounded-[2rem]" />
              <div className="relative rounded-[2.2rem] bg-[#0f0f0f] p-2.5 shadow-2xl ring-1 ring-white/10">
                <div className="rounded-[1.8rem] bg-background overflow-hidden">

                  {/* App bar */}
                  <div className="flex items-center justify-between px-5 pt-5 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-b from-[#e25555] to-[#c43a3a] shadow-[0_6px_14px_-6px_rgba(219,75,75,0.8)]">
                        <Building2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-bold text-sm">{t('product.name')}</span>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#8B5A7F] to-[#6d4663] text-[10px] font-bold text-white">
                      {isRTL ? 'س' : 'S'}
                    </div>
                  </div>

                  {/* Stat tiles */}
                  <div className="grid grid-cols-3 gap-2.5 px-4">
                    {[
                      { v: isRTL ? '٪٩٢' : '92%', l: t('product.mockup.occupancy'), c: '#059669', trend: isRTL ? '+٢٪' : '+2%' },
                      { v: isRTL ? '٢٤' : '24', l: t('product.mockup.units'), c: '#DB4B4B', trend: null },
                      { v: isRTL ? '٣' : '3', l: t('product.mockup.overdue'), c: '#d97706', trend: null },
                    ].map((s, i) => (
                      <div key={i} className="rounded-2xl bg-card clean-border p-3">
                        <div className="text-[10px] font-semibold text-muted-foreground mb-1 truncate">{s.l}</div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-lg font-black leading-none" style={{ color: s.c }}>{s.v}</span>
                          {s.trend && (
                            <span className="rounded-full px-1 py-px text-[8px] font-bold" style={{ color: s.c, backgroundColor: `${s.c}14` }}>{s.trend}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Income chart card */}
                  <div className="px-4 mt-2.5">
                    <div className="rounded-2xl bg-card clean-border p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-bold">{t('product.mockup.income')}</span>
                        <span className="rounded-full bg-[#059669]/10 px-1.5 py-0.5 text-[9px] font-bold text-[#059669]">{isRTL ? '+١٨٪' : '+18%'}</span>
                      </div>
                      <div className="flex items-end gap-1.5 h-20">
                        {[42, 58, 46, 72, 60, 95].map((h, i) => (
                          <div key={i}
                            className={`flex-1 rounded-md ${i === 5 ? 'bg-gradient-to-t from-[#c43a3a] to-[#e25555] shadow-[0_6px_14px_-6px_rgba(219,75,75,0.7)]' : 'bg-[#DB4B4B]/15'}`}
                            style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tenant rows */}
                  <div className="px-4 py-2.5 space-y-2">
                    {[
                      { paid: true, av: 'from-[#059669] to-[#047857]' },
                      { paid: false, av: 'from-[#d97706] to-[#b45309]' },
                    ].map((r, i) => (
                      <div key={i} className="flex items-center justify-between rounded-2xl bg-card clean-border px-3.5 py-2.5">
                        <div className="flex items-center gap-2.5">
                          <div className={`h-8 w-8 rounded-full bg-gradient-to-br ${r.av} opacity-80`} />
                          <div className="space-y-1.5">
                            <div className="h-1.5 w-20 rounded-full bg-foreground/15" />
                            <div className="h-1.5 w-12 rounded-full bg-border" />
                          </div>
                        </div>
                        {r.paid ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-[#059669]/10 px-2 py-1 text-[9px] font-bold text-[#059669]">
                            <Check className="w-2.5 h-2.5" />
                            {t('product.mockup.paid')}
                          </span>
                        ) : (
                          <span className="rounded-full bg-[#d97706]/10 px-2 py-1 text-[9px] font-bold text-[#d97706]">
                            {t('product.mockup.due')}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Bottom tab bar */}
                  <div className="flex items-center justify-around border-t border-border px-6 py-3">
                    <LayoutDashboard className="w-[18px] h-[18px] text-[#DB4B4B]" />
                    <Building2 className="w-[18px] h-[18px] text-muted-foreground/50" />
                    <FileSignature className="w-[18px] h-[18px] text-muted-foreground/50" />
                    <BellRing className="w-[18px] h-[18px] text-muted-foreground/50" />
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
