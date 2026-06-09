import { MessageCircle, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'

// "Future Light" CTA — frosted-glass card sitting inside soft portal rings.
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
    <section className="relative overflow-hidden bg-[#f6f8fa] py-20 sm:py-28 lg:py-32">
      {/* portal rings */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-[#22d3ee]/30 sm:block" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-[#22d3ee]/45 sm:block" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-dashed border-[#DB4B4B]/40 sm:block" />

      <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl rounded-[30px] border border-white/95 bg-white/70 px-7 py-14 text-center shadow-[0_40px_100px_-36px_rgba(30,60,80,.4)] backdrop-blur-xl sm:px-12 sm:py-16">
          <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight text-[#101418] sm:text-4xl lg:text-5xl">
            {t('finalCta.title')}
          </h2>
          <p className="mx-auto mb-9 max-w-xl text-lg leading-relaxed text-[#5d6b78]">
            {t('finalCta.desc')}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <button onClick={handleWhatsAppClick}
              className={`gentle-animation inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#DB4B4B] px-8 py-4 text-lg font-semibold text-white shadow-[0_16px_40px_-10px_rgba(219,75,75,.55)] hover:bg-[#c43e3e] sm:w-auto ${isRTL ? 'flex-row-reverse' : ''}`}>
              <MessageCircle className="h-5 w-5" />
              {t('finalCta.button')}
            </button>
            <a href="mailto:info@royah.om"
              className={`gentle-animation inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-[#101418]/10 bg-white/80 px-8 py-4 text-lg font-semibold text-[#101418] shadow-[0_12px_32px_-14px_rgba(16,20,24,.2)] backdrop-blur-md hover:bg-white sm:w-auto ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Mail className="h-5 w-5" />
              {t('finalCta.secondary')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
