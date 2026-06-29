import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const topicLinks = [
  { label: 'Payment Gateway', path: '/topics/payment-gateway', icon: '🏦' },
  { label: 'Fintech',         path: '/topics/fintech',          icon: '💡' },
  { label: 'Processing',      path: '/topics/payment-processing', icon: '⚙️' },
  { label: 'APIs',            path: '/topics/payment-api',      icon: '🔌' },
  { label: 'Ecommerce',       path: '/topics/ecommerce-payments', icon: '🛒' },
  { label: 'Integration',     path: '/topics/payment-integration', icon: '🔗' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false)
  const [topicsOpen, setTopicsOpen] = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-950/95 backdrop-blur-xl border-b border-white/8 shadow-2xl shadow-black/30'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-17">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-xl bg-linear-to-br from-indigo-500 via-violet-600 to-purple-700 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-shadow duration-300">
              <svg className="w-4.5 h-4.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div className="absolute -inset-0.5 rounded-xl bg-linear-to-br from-indigo-400 to-violet-600 opacity-0 group-hover:opacity-30 blur transition-opacity duration-300" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[15px] font-bold text-white tracking-tight">Parivestra</span>
              <span className="text-[9px] text-indigo-400 font-semibold tracking-widest uppercase">Payments Hub</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
            {/* Topics dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setTopicsOpen(true)}
                onMouseLeave={() => setTopicsOpen(false)}
                onClick={() => setTopicsOpen(!topicsOpen)}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white font-medium rounded-lg hover:bg-white/8 transition-all duration-150 flex items-center gap-1.5"
                aria-haspopup="true"
                aria-expanded={topicsOpen}
              >
                Topics
                <svg className={`w-3 h-3 transition-transform duration-200 ${topicsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {topicsOpen && (
                <div
                  onMouseEnter={() => setTopicsOpen(true)}
                  onMouseLeave={() => setTopicsOpen(false)}
                  className="absolute top-full left-0 mt-2 w-60 bg-gray-900/98 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50 p-2 z-50"
                >
                  {topicLinks.map(link => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setTopicsOpen(false)}
                      className="flex items-center gap-3 px-3.5 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/8 rounded-xl transition-all duration-150 font-medium"
                    >
                      <span className="text-base">{link.icon}</span>
                      {link.label}
                    </Link>
                  ))}
                  <div className="border-t border-white/8 mt-2 pt-2">
                    <Link
                      to="/research"
                      onClick={() => setTopicsOpen(false)}
                      className="flex items-center gap-2 px-3.5 py-2 text-xs text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10 rounded-xl transition-all duration-150 font-semibold"
                    >
                      All Research Guides
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {[
              { label: 'Providers', href: isHome ? '#providers' : '/#providers' },
              { label: 'Research',  href: isHome ? '#research'  : '/#research'  },
            ].map(item => (
              isHome
                ? <a key={item.label} href={item.href} className="px-4 py-2 text-sm text-gray-300 hover:text-white font-medium rounded-lg hover:bg-white/8 transition-all duration-150">{item.label}</a>
                : <Link key={item.label} to={item.href} className="px-4 py-2 text-sm text-gray-300 hover:text-white font-medium rounded-lg hover:bg-white/8 transition-all duration-150">{item.label}</Link>
            ))}

            <Link to="/statistics" className="px-4 py-2 text-sm text-gray-300 hover:text-white font-medium rounded-lg hover:bg-white/8 transition-all duration-150">
              Statistics
            </Link>
            <Link to="/reports" className="px-4 py-2 text-sm text-gray-300 hover:text-white font-medium rounded-lg hover:bg-white/8 transition-all duration-150">
              Reports
            </Link>
          </nav>

          {/* CTA group */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/research" className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-150">
              Free Guides
            </Link>
            <Link
              to="/topics/payment-gateway"
              className="relative px-5 py-2 bg-linear-to-r from-indigo-500 to-violet-600 text-white text-sm font-semibold rounded-xl hover:from-indigo-400 hover:to-violet-500 transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
            >
              Explore Topics
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2.5 rounded-xl hover:bg-white/10 transition-colors text-gray-300"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/8 bg-gray-950/98 backdrop-blur-2xl px-5 py-5 space-y-1">
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest px-3 pb-2">Topics</p>
          {topicLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-3 text-sm text-gray-300 font-medium rounded-xl hover:bg-white/8 hover:text-white transition-all"
            >
              <span>{link.icon}</span>
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/8 space-y-1">
            {[
              { label: 'Research Guides', to: '/research' },
              { label: 'Statistics', to: '/statistics' },
              { label: 'Reports', to: '/reports' },
            ].map(item => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-3 text-sm text-gray-300 font-medium rounded-xl hover:bg-white/8 hover:text-white transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="pt-3 border-t border-white/8">
            <Link
              to="/topics/payment-gateway"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center px-4 py-3 bg-linear-to-r from-indigo-500 to-violet-600 text-white text-sm font-semibold rounded-xl shadow-lg shadow-indigo-500/25"
            >
              Explore Topics
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
