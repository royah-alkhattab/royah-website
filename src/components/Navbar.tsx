import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Logo } from './Logo'
import { LanguageSwitcher } from './LanguageSwitcher'

const links = [
  { to: '/', key: 'nav.home' },
  { to: '/product', key: 'nav.product' },
  { to: '/about', key: 'nav.about' },
  { to: '/contact', key: 'nav.contact' },
]

export function Navbar() {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Pages whose top section is the dark hero/header. Over those, the navbar is
  // transparent with white text until the user scrolls; everywhere else it's solid.
  const darkTop = ['/', '/product', '/about'].includes(pathname)
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
                className={`p-2.5 rounded-full gentle-animation ${overlay ? 'glass-effect text-white' : 'border border-border'}`}>
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
      <motion.div initial={false} animate={{ x: open ? '0%' : '100%' }}
        transition={{ type: 'spring', damping: 26, stiffness: 220 }}
        className="md:hidden fixed top-0 right-0 z-[105] h-full w-72 max-w-[85vw] bg-background border-l border-border pt-20 px-6">
        <div className="flex flex-col gap-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-lg font-medium text-lg gentle-animation ${isActive ? 'bg-card text-foreground' : 'text-muted-foreground hover:bg-card'}`
              }>
              {t(l.key)}
            </NavLink>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)}
            className="mt-4 text-center bg-[#DB4B4B] hover:bg-[#c43e3e] text-white font-semibold px-6 py-3 rounded-lg gentle-animation">
            {t('nav.contact')}
          </Link>
        </div>
      </motion.div>
    </>
  )
}
