import { MessageCircle, Phone, Mail, MapPin, Clock, Calendar, ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const WHATSAPP_NUMBER = '96890663136'

export function Contact() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  const handleWhatsAppClick = () => {
    const whatsappMessage = isRTL
      ? 'مرحباً! زرت موقعكم للتو وأنا مهتم بخدماتكم. هل يمكنكم مساعدتي؟'
      : "Hi! I just visited your website and I'm interested in your services. Can you help me?"
    window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(whatsappMessage)}`, '_blank')
  }

  // One tappable card per channel — gradient icon, action line in the channel color.
  const channels = [
    {
      key: 'whatsapp', icon: MessageCircle, color: '#059669',
      gradient: 'linear-gradient(180deg, #0aa372, #047857)',
      title: t('contact.whatsapp'), desc: t('contact.whatsappDesc'), action: t('contact.whatsappResponse'),
      onClick: handleWhatsAppClick,
    },
    {
      key: 'email', icon: Mail, color: '#DB4B4B',
      gradient: 'linear-gradient(180deg, #e25555, #c43a3a)',
      title: t('contact.email'), desc: t('contact.emailDesc'), action: 'info@royah.om', ltrAction: true,
      href: 'mailto:info@royah.om',
    },
    {
      key: 'phone', icon: Phone, color: '#8B5A7F',
      gradient: 'linear-gradient(180deg, #9c6b8f, #7a4d6e)',
      title: t('contact.phone'), desc: t('contact.phoneDesc'), action: '+968 90663136', ltrAction: true,
      href: 'tel:+96890663136',
    },
    {
      key: 'bookCall', icon: Calendar, color: '#d97706',
      gradient: 'linear-gradient(180deg, #ea9010, #c47006)',
      title: t('contact.bookCall'), desc: t('contact.bookCallDesc'), action: t('contact.bookCallResponse'),
      onClick: () => window.open('https://cal.com/alkhattabsaif/30min', '_blank'),
    },
  ]

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-card/30 overflow-hidden">
      {/* ambient brand glows + dot grid, same family as the rest of the site */}
      <div className="pointer-events-none absolute left-1/2 -top-32 h-[380px] w-[700px] max-w-[130vw] -translate-x-1/2 rounded-full bg-[#DB4B4B]/[0.07] blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-32 right-1/5 h-[320px] w-[320px] rounded-full bg-[#059669]/[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #000000 1px, transparent 0)',
        backgroundSize: '32px 32px',
        maskImage: 'radial-gradient(ellipse 70% 55% at 50% 30%, #000 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 55% at 50% 30%, #000 40%, transparent 100%)',
      }} />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-muted-foreground mb-5">
            <span className="h-2 w-2 rounded-full bg-accent-emerald animate-pulse" />
            {t('contact.tagline')}
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-4 sm:mb-6 section-title">
            {t('contact.title')}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed section-subtitle">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Channel cards: app-style rows on phone, columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 max-w-6xl mx-auto mb-10 sm:mb-14">
          {channels.map((c) => {
            const Icon = c.icon
            const inner = (
              <>
                <div className="flex h-12 w-12 lg:h-13 lg:w-13 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
                  style={{ background: c.gradient, boxShadow: `0 10px 24px -10px ${c.color}cc` }}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base lg:text-lg font-bold text-foreground mb-0.5 lg:mb-1.5">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-snug mb-1 lg:mb-3">{c.desc}</p>
                  <div className="text-sm font-semibold" style={{ color: c.color }}>
                    {c.ltrAction
                      ? <span dir="ltr" style={{ direction: 'ltr', unicodeBidi: 'isolate' }}>{c.action}</span>
                      : c.action}
                  </div>
                </div>
                <ChevronRight className="lg:hidden h-5 w-5 shrink-0 text-muted-foreground/40 transition-transform duration-300 group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
              </>
            )
            const cardClass = 'group flex lg:flex-col items-center lg:items-start gap-4 lg:gap-5 rounded-3xl bg-background clean-border p-5 lg:p-6 elevated-shadow text-start cursor-pointer hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] gentle-animation'
            return c.href ? (
              <a key={c.key} href={c.href} className={cardClass}>{inner}</a>
            ) : (
              <button key={c.key} type="button" onClick={c.onClick} className={cardClass}>{inner}</button>
            )
          })}
        </div>

        {/* Hours + location in one quiet info card */}
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 bg-background clean-border rounded-3xl subtle-shadow overflow-hidden">
            <div className="flex items-start gap-4 p-6 sm:p-7 border-b sm:border-b-0 sm:border-e border-border">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent-emerald/10">
                <Clock className="h-5 w-5 text-accent-emerald" />
              </div>
              <div className="text-start">
                <h4 className="font-bold mb-2">{t('contact.hours')}</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>{t('contact.businessHours.weekdays')} <span className="font-medium text-foreground">{t('contact.businessHours.weekdaysTime')}</span></p>
                  <p>{t('contact.businessHours.weekend')} <span className="font-medium text-foreground">{t('contact.businessHours.weekendTime')}</span></p>
                  <p className="text-accent-emerald font-medium pt-1">{t('contact.businessHours.timezone')}</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 sm:p-7">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent-blue/10">
                <MapPin className="h-5 w-5 text-accent-blue" />
              </div>
              <div className="text-start">
                <h4 className="font-bold mb-2">{t('contact.location')}</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>{t('contact.locationDetails.city')}</p>
                  <p>{t('contact.locationDetails.region')}</p>
                  <p className="text-accent-blue font-medium pt-1">{t('contact.locationDetails.remote')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
