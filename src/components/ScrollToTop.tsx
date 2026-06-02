import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scroll to top whenever the route changes (default browser SPA behavior
// keeps the old scroll position, which feels broken on a multi-page site).
export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
