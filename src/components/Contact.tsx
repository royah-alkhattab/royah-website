import { MessageCircle, Phone, Mail, MapPin, Clock, CheckCircle, Calendar } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function Contact() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const whatsappNumber = "96890663136" // Royah's WhatsApp number

  const handleWhatsAppClick = () => {
    const whatsappMessage = isRTL
      ? "مرحباً! زرت موقعكم للتو وأنا مهتم بخدماتكم. هل يمكنكم مساعدتي؟"
      : "Hi! I just visited your website and I'm interested in your services. Can you help me?"
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, '_blank')
  }

  const handleBookCall = () => {
    window.open('https://cal.com/alkhattabsaif/30min', '_blank')
  }

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-card/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-muted-foreground mb-5">
            <span className="h-2 w-2 rounded-full bg-accent-emerald animate-pulse" />
            {t('contact.tagline')}
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-4 sm:mb-6 section-title">
            {t('contact.title')}
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed section-subtitle">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto mb-10 sm:mb-16">

          {/* WhatsApp Contact */}
          <div
            onClick={handleWhatsAppClick}
            role="button" tabIndex={0}
            className="bg-background clean-border rounded-3xl p-6 sm:p-7 elevated-shadow hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] gentle-animation cursor-pointer group"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 bg-green-500/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-green-500/20 gentle-animation">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{t('contact.whatsapp')}</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
              {t('contact.whatsappDesc')}
            </p>
            <div className="flex items-center gap-2 text-sm text-green-500 font-medium">
              <CheckCircle className="w-4 h-4" />
              <span>{t('contact.whatsappResponse')}</span>
            </div>
          </div>

          {/* Email Contact */}
          <div className="bg-background clean-border rounded-3xl p-6 sm:p-7 elevated-shadow hover:-translate-y-1 gentle-animation group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 bg-accent-blue/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-accent-blue/20 gentle-animation">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-accent-blue" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{t('contact.email')}</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
              {t('contact.emailDesc')}
            </p>
            <a href="mailto:info@royah.om" className="flex items-center gap-2 text-sm text-accent-blue font-medium hover:underline">
              <span>info@royah.om</span>
            </a>
          </div>

          {/* Phone Contact */}
          <div className="bg-background clean-border rounded-3xl p-6 sm:p-7 elevated-shadow hover:-translate-y-1 gentle-animation group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 bg-accent-purple/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-accent-purple/20 gentle-animation">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-accent-purple" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{t('contact.phone')}</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
              {t('contact.phoneDesc')}
            </p>
            <a href="tel:+96890663136" className="flex items-center gap-2 text-sm text-accent-purple font-medium hover:underline">
              <span dir="ltr" style={{ direction: 'ltr', unicodeBidi: 'isolate' }}>
                +968 90663136
              </span>
            </a>
          </div>

          {/* Book a Call */}
          <div
            onClick={handleBookCall}
            role="button" tabIndex={0}
            className="bg-background clean-border rounded-3xl p-6 sm:p-7 elevated-shadow hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] gentle-animation cursor-pointer group"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 bg-accent-emerald/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-accent-emerald/20 gentle-animation">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-accent-emerald" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{t('contact.bookCall')}</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
              {t('contact.bookCallDesc')}
            </p>
            <div className="flex items-center gap-2 text-sm text-accent-emerald font-medium">
              <CheckCircle className="w-4 h-4" />
              <span>{t('contact.bookCallResponse')}</span>
            </div>
          </div>

        </div>

        {/* Business Hours & Location */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">

          {/* Business Hours */}
          <div className="bg-background clean-border rounded-2xl p-6 subtle-shadow">
            <div className="w-12 h-12 bg-accent-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-accent-emerald" />
            </div>
            <h4 className="font-black text-foreground mb-4 text-center">{t('contact.hours')}</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex gap-2">
                <span>{t('contact.businessHours.weekdays')}</span>
                <span className="font-medium">{t('contact.businessHours.weekdaysTime')}</span>
              </div>
              <div className="flex gap-2">
                <span>{t('contact.businessHours.weekend')}</span>
                <span className="font-medium">{t('contact.businessHours.weekendTime')}</span>
              </div>
              <div className="text-center mt-4 text-accent-emerald font-medium">
                {t('contact.businessHours.timezone')}
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-background clean-border rounded-2xl p-6 subtle-shadow">
            <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-accent-blue" />
            </div>
            <h4 className="font-black text-foreground mb-4 text-center">{t('contact.location')}</h4>
            <div className="text-center space-y-2 text-sm text-muted-foreground">
              <p>{t('contact.locationDetails.city')}</p>
              <p>{t('contact.locationDetails.region')}</p>
              <p className="text-accent-blue font-medium">{t('contact.locationDetails.remote')}</p>
            </div>
          </div>

        </div>

        {/* CTA Section */}
        <div className="text-center mt-10 sm:mt-16">
          <div className={`bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto ${isRTL ? 'text-center' : ''}`}>
            <h3 className={`text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 section-title ${isRTL ? 'text-center' : ''}`}>
              {t('contact.cta.title')}
            </h3>
            <p className={`text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto section-subtitle ${isRTL ? 'text-center' : ''}`}>
              {t('contact.cta.description')}
            </p>
            <div className="flex justify-center">
              <button
                onClick={handleWhatsAppClick}
                className={`w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-b from-[#0aa372] to-[#047857] text-white font-semibold px-8 py-3.5 sm:py-4 text-base sm:text-lg shadow-[0_18px_44px_-14px_rgba(5,150,105,0.7)] hover:shadow-[0_22px_52px_-14px_rgba(5,150,105,0.85)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] gentle-animation ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <MessageCircle className="w-5 h-5" />
                {t('contact.cta.button')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}