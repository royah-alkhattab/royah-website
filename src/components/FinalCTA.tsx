import { MessageCircle, Mail } from 'lucide-react'
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
        <div className="relative overflow-hidden rounded-3xl bg-[#0f0f0f] text-white px-7 py-14 sm:px-8 sm:py-16 lg:py-20 text-center">
          {/* spotlight + glows */}
          <div className="pointer-events-none absolute left-1/2 -top-24 h-[360px] w-[680px] max-w-[120vw] -translate-x-1/2 rounded-full bg-[#DB4B4B]/20 blur-[130px]" />
          <div className="pointer-events-none absolute -bottom-20 right-1/4 h-[260px] w-[260px] rounded-full bg-[#059669]/15 blur-[120px]" />
          {/* fine dot-grid, masked to center */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(ellipse 65% 70% at 50% 45%, #000 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 65% 70% at 50% 45%, #000 40%, transparent 100%)',
          }} />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-4">
              <span className="bg-gradient-to-b from-white via-white to-white/55 bg-clip-text text-transparent">
                {t('finalCta.title')}
              </span>
            </h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto mb-9 leading-relaxed">
              {t('finalCta.desc')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button onClick={handleWhatsAppClick}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#059669] hover:bg-[#047857] text-white font-semibold px-8 py-4 rounded-xl text-lg gentle-animation ${isRTL ? 'flex-row-reverse' : ''}`}>
                <MessageCircle className="w-5 h-5" />
                {t('finalCta.button')}
              </button>
              <a href="mailto:info@royah.om"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border border-white/20 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl text-lg gentle-animation ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Mail className="w-5 h-5" />
                {t('finalCta.secondary')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
