import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const GA_ID = 'G-Q3GMR4JLR5'

export function usePageTracking() {
  const location = useLocation()

  useEffect(() => {
    if (typeof window.gtag !== 'function') return
    window.gtag('config', GA_ID, {
      page_path:  location.pathname + location.search,
      page_title: document.title,
    })
  }, [location.pathname, location.search])
}
