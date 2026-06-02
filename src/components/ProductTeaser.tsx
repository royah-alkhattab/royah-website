import { Building2, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Reveal, SectionTag } from './Reveal'

export function ProductTeaser() {
  const { t } = useTranslation()
  return (
    <section className="relative py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-[#0f0f0f] text-white px-8 py-14 lg:px-16 lg:py-20">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#DB4B4B]/25 blur-[120px]" />
              <div className="absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-[#8B5A7F]/20 blur-[110px]" />
            </div>
            <div className="relative z-10 max-w-2xl">
              <SectionTag>{t('productTeaser.tag')}</SectionTag>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#DB4B4B] flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                  {t('productTeaser.title')}
                </h2>
              </div>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                {t('productTeaser.desc')}
              </p>
              <Link to="/product"
                className="group inline-flex items-center gap-2 bg-white text-[#0f0f0f] font-semibold px-7 py-3.5 rounded-lg text-lg hover:bg-white/90 gentle-animation">
                {t('productTeaser.cta')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 gentle-animation rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
