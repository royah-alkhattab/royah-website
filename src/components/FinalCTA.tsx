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
        <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(160deg,#ffffff,#faf9f8)] border border-black/[0.07] shadow-[0_30px_90px_-35px_rgba(20,20,30,0.28)] text-[#16161a] px-7 py-14 sm:px-8 sm:py-16 lg:py-20 text-center">
          {/* subtle brand glows */}
          <div className="pointer-events-none absolute left-1/2 -top-28 h-[340px] w-[660px] max-w-[120vw] -translate-x-1/2 rounded-full bg-[#DB4B4B]/[0.10] blur-[130px]" />
          <div className="pointer-events-none absolute -bottom-28 right-1/4 h-[300px] w-[300px] rounded-full bg-[#DB4B4B]/[0.06] blur-[120px]" />
          {/* fine dot-grid, masked to center */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #000000 1px, transparent 0)',
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(ellipse 65% 70% at 50% 45%, #000 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 65% 70% at 50% 45%, #000 40%, transparent 100%)',
          }} />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-4 text-[#16161a]">
              {t('finalCta.title')}
            </h2>
            <p className="text-lg text-[#5b5f66] max-w-xl mx-auto mb-9 leading-relaxed">
              {t('finalCta.desc')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button onClick={handleWhatsAppClick}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-b from-[#e25555] to-[#c43a3a] text-white font-semibold px-9 py-4 text-lg shadow-[0_18px_44px_-14px_rgba(219,75,75,0.7)] hover:shadow-[0_22px_52px_-14px_rgba(219,75,75,0.85)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] gentle-animation ${isRTL ? 'flex-row-reverse' : ''}`}>
                <MessageCircle className="w-5 h-5" />
                {t('finalCta.button')}
              </button>
              <a href="mailto:info@royah.om"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full border border-black/10 bg-black/[0.03] hover:bg-black/[0.06] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] text-[#16161a] font-semibold px-9 py-4 text-lg gentle-animation ${isRTL ? 'flex-row-reverse' : ''}`}>
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
