import { useTranslation } from 'react-i18next'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const displayFont = isRTL ? 'var(--font-arabic-display)' : 'var(--font-english-display)'
  const bodyFont = isRTL ? 'var(--font-arabic-body)' : 'var(--font-english-body)'

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <img
              src="/royah-logo-black.png"
              alt="Royah Advanced Technologies"
              className="h-10 w-auto"
            />
            <p className="mt-4 text-sm text-muted-foreground" style={{ fontFamily: bodyFont }}>
              {t('footer.company')}
            </p>
          </div>

          <div className="space-y-3 text-sm" style={{ fontFamily: bodyFont }}>
            <a
              href="mailto:info@royah.om"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              <span>{t('footer.email')}</span>
            </a>
            <a
              href="tel:+96890663136"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              dir="ltr"
            >
              <Phone className="h-4 w-4" />
              <span>{t('footer.phone')}</span>
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{t('footer.location')}</span>
            </div>
          </div>

          <div className="flex items-end justify-start lg:justify-end">
            <p className="text-xs text-muted-foreground" style={{ fontFamily: bodyFont }}>
              {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
