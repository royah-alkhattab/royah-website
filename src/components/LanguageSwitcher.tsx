import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'
import { useEffect } from 'react'

export function LanguageSwitcher({ light = false }: { light?: boolean }) {
  const { i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  const toggleLanguage = () => {
    const next = i18n.language?.startsWith('ar') ? 'en' : 'ar'
    i18n.changeLanguage(next)
    document.body.classList.toggle('rtl-mode', next === 'ar')
  }

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium gentle-animation hover:opacity-100 ${light ? 'text-white opacity-80' : 'text-foreground opacity-70'}`}
      aria-label="Switch Language"
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium">
        {i18n.language?.startsWith('ar') ? 'English' : 'العربية'}
      </span>
    </button>
  )
}
