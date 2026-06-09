import { motion } from 'framer-motion'
import { Menu, X, ChevronRight, Phone, Mail, Instagram } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Logo } from './Logo'
import { LanguageSwitcher } from './LanguageSwitcher'

const links = [
  { to: '/', key: 'nav.home' },
  { to: '/work', key: 'nav.work' },
  { to: '/product', key: 'nav.product' },
  { to: '/about', key: 'nav.about' },
  { to: '/contact', key: 'nav.contact' },
]

export function Navbar() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language?.startsWith('ar')
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Pages whose top section is the dark hero/header. Over those, the navbar is
  // transparent with white text until the user scrolls; everywhere else it's solid.
  const darkTop = ['/work', '/product', '/about'].includes(pathname)
  const overlay = darkTop && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [open])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-300 ${
        overlay ? 'bg-transparent text-white' : 'bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border-b border-border text-foreground'
      }`}>
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="hover:opacity-80 gentle-animation" aria-label="Royah home">
              <Logo onDark={overlay} className="h-8" />
            </Link>

            <nav className="hidden md:flex items-center gap-7">
              {links.map((l) => (
                <NavLink key={l.to} to={l.to} end={l.to === '/'}
                  className={({ isActive }) =>
                    `font-medium gentle-animation hover:opacity-100 ${isActive ? 'opacity-100' : 'opacity-70'}`
                  }>
                  {t(l.key)}
                </NavLink>
              ))}
              <LanguageSwitcher light={overlay} />
              <Link to="/contact"
                className="bg-[#DB4B4B] hover:bg-[#c43e3e] text-white font-semibold px-5 py-2.5 rounded-lg gentle-animation">
                {t('nav.contact')}
              </Link>
            </nav>

            <div className="flex items-center gap-2 md:hidden">
              <LanguageSwitcher light={overlay} />
              <button onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}
                className={`p-2.5 rounded-full gentle-animation ${overlay && !open ? 'glass-effect text-white' : 'border border-border bg-background text-foreground'}`}>
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="md:hidden fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
      )}
      <motion.div initial={false} animate={{ x: open ? '0%' : (isRTL ? '-100%' : '100%') }}
        transition={{ type: 'spring', damping: 28, stiffness: 240 }}
        className="md:hidden fixed top-0 right-0 z-[105] flex h-full w-80 max-w-[86vw] flex-col bg-background border-l border-border pt-24 pb-8 px-5 rtl:right-auto rtl:left-0 rtl:border-l-0 rtl:border-r">
        <nav className="flex flex-col gap-1.5">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `group flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-semibold gentle-animation ${
                  isActive ? 'bg-[#DB4B4B]/10 text-[#DB4B4B]' : 'text-foreground hover:bg-card'
                }`
              }>
              <span>{t(l.key)}</span>
              <ChevronRight className="w-5 h-5 opacity-40 group-hover:opacity-70 gentle-animation rtl:rotate-180" />
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" onClick={() => setOpen(false)}
          className="mt-5 text-center bg-[#DB4B4B] hover:bg-[#c43e3e] text-white font-semibold px-6 py-3.5 rounded-xl gentle-animation">
          {t('nav.contact')}
        </Link>

        <div className="mt-auto pt-6 border-t border-border flex flex-col gap-3">
          <a href="tel:+96890663136"
            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground gentle-animation rtl:flex-row-reverse rtl:text-right">
            <span className="w-9 h-9 shrink-0 rounded-lg bg-[#DB4B4B]/10 flex items-center justify-center">
              <Phone className="w-4 h-4 text-[#DB4B4B]" />
            </span>
            <span dir="ltr" style={{ direction: 'ltr', unicodeBidi: 'isolate' }}>+968 90663136</span>
          </a>
          <a href="mailto:info@royah.om"
            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground gentle-animation rtl:flex-row-reverse rtl:text-right">
            <span className="w-9 h-9 shrink-0 rounded-lg bg-[#059669]/10 flex items-center justify-center">
              <Mail className="w-4 h-4 text-[#059669]" />
            </span>
            <span dir="ltr" style={{ direction: 'ltr', unicodeBidi: 'isolate' }}>info@royah.om</span>
          </a>
          <a href="https://instagram.com/royah.om" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground gentle-animation rtl:flex-row-reverse rtl:text-right">
            <span className="w-9 h-9 shrink-0 rounded-lg bg-[#8B5A7F]/10 flex items-center justify-center">
              <Instagram className="w-4 h-4 text-[#8B5A7F]" />
            </span>
            <span dir="ltr" style={{ direction: 'ltr', unicodeBidi: 'isolate' }}>@royah.om</span>
          </a>
        </div>
      </motion.div>
    </>
  )
}
