/**
 * usePageTracking.js
 * Fires a GA4 page_view event on every React Router navigation.
 * Without this, GA4 only counts the first page load — not when users
 * click to /blog/razorpay-vs-cashfree or any other route.
 *
 * Usage: call once inside App.jsx
 *   import { usePageTracking } from './hooks/usePageTracking'
 *   function App() { usePageTracking(); return <Routes>... }
 */

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactGA from 'react-ga4'

const GA_ID = 'G-Q3GMR4JLR5'

let initialized = false

function initGA() {
  if (initialized) return
  ReactGA.initialize(GA_ID)
  initialized = true
}

export function usePageTracking() {
  const location = useLocation()

  useEffect(() => {
    initGA()

    // Send page_view with current path + title
    ReactGA.send({
      hitType:  'pageview',
      page:     location.pathname + location.search,
      title:    document.title,
    })
  }, [location.pathname, location.search])
}
