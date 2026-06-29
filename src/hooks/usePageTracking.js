import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const GA_ID = 'G-Q3GMR4JLR5'

export function usePageTracking() {
  const location = useLocation()

  useEffect(() => {
    if (typeof window.gtag !== 'function') return
    window.gtag('event', 'page_view', {
      page_path:     location.pathname + location.search,
      page_location: window.location.href,
      send_to:       GA_ID,
    })
  }, [location.pathname, location.search])
}
