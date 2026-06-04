import { MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function FinalCTA() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  const handleWhatsAppClick = () => {
    const message = isRTL
      ? 'مرحباً! زرت موقعكم للتو وأنا مهتم بخدماتكم. هل يمكنكم مساعدتي؟'
      : "Hi! I just visited your website and I'm interested in your services. Can you help me?"
    window.open(`https://api.whatsapp.com/send?phone=96890663136&text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section className="relative py-14 sm:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="rounded-3xl bg-gradient-to-r from-[#DB4B4B]/10 via-[#8B5A7F]/10 to-[#059669]/10 clean-border px-8 py-14 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight section-title mb-4">
            {t('finalCta.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 section-subtitle">
            {t('finalCta.desc')}
          </p>
          <button onClick={handleWhatsAppClick}
            className={`inline-flex items-center gap-3 bg-[#059669] hover:bg-[#047857] text-white font-semibold px-8 py-4 rounded-lg text-lg gentle-animation ${isRTL ? 'flex-row-reverse' : ''}`}>
            <MessageCircle className="w-5 h-5" />
            {t('finalCta.button')}
          </button>
        </div>
      </div>
    </section>
  )
}
