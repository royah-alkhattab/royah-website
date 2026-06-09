import { MessageCircle, Phone, Mail, MapPin, Instagram } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'

const navLinks = [
  { to: '/', key: 'nav.home' },
  { to: '/work', key: 'nav.work' },
  { to: '/product', key: 'nav.product' },
  { to: '/about', key: 'nav.about' },
  { to: '/contact', key: 'nav.contact' },
]

export function Footer() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  const handleWhatsAppClick = () => {
    const whatsappNumber = '96890663136'
    const message = isRTL
      ? 'مرحباً! زرت موقعكم للتو وأنا مهتم بخدماتكم. هل يمكنكم مساعدتي؟'
      : "Hi! I just visited your website and I'm interested in your services. Can you help me?"
    window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <footer className="relative border-t border-[#101418]/10 bg-[#eef3f6] text-[#101418]">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="py-14">
          <div className={`grid grid-cols-1 lg:grid-cols-4 gap-10 ${isRTL ? 'text-right' : ''}`}>

            {/* Company */}
            <div className="lg:col-span-2">
              <Logo onDark={false} className="h-11 mb-5" />
              <p className="text-[#5d6b78] leading-relaxed mb-6 max-w-md">
                {t('footer.description')}
              </p>
              <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <button onClick={handleWhatsAppClick}
                  className={`bg-[#059669] hover:bg-[#047857] text-white font-semibold px-5 py-2.5 rounded-lg gentle-animation inline-flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <MessageCircle className="w-5 h-5" />
                  <span>{t('footer.getInTouch')}</span>
                </button>
                <a href="https://instagram.com/royah.om" target="_blank" rel="noopener noreferrer"
                  className="w-11 h-11 bg-[#101418]/[0.07] hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 rounded-lg flex items-center justify-center gentle-animation group"
                  aria-label="Instagram">
                  <Instagram className="w-5 h-5 text-[#5d6b78] group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Explore */}
            <div>
              <h3 className="font-bold text-lg mb-5">{t('footer.nav.title')}</h3>
              <div className="space-y-3">
                {navLinks.map((l) => (
                  <Link key={l.to} to={l.to}
                    className="block text-[#5d6b78] hover:text-[#101418] gentle-animation">
                    {t(l.key)}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-lg mb-5">{t('footer.contactTitle')}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 shrink-0 bg-[#059669]/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#059669]" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-[#7b8794] text-xs">{t('footer.emailLabel')}</span>
                    <a href="mailto:info@royah.om" className="hover:text-[#059669] gentle-animation">info@royah.om</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 shrink-0 bg-[#DB4B4B]/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#DB4B4B]" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-[#7b8794] text-xs">{t('footer.phoneLabel')}</span>
                    <a href="tel:+96890663136" className="hover:text-[#DB4B4B] gentle-animation">
                      <span dir="ltr" style={{ direction: 'ltr', unicodeBidi: 'isolate' }}>+968 90663136</span>
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 shrink-0 bg-[#8B5A7F]/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#8B5A7F]" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-[#7b8794] text-xs">{t('footer.locationLabel')}</span>
                    <span>{t('footer.location')}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="border-t border-[#101418]/10 py-6">
          <div className={`flex flex-col md:flex-row justify-between items-center gap-3 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <div className="text-[#5d6b78] text-sm">{t('footer.copyright')}</div>
            <div className="text-[#5d6b78] text-sm">{t('footer.tagline')}</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
