import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const topicLinks = [
  { label: 'Payment Gateway', path: '/topics/payment-gateway' },
  { label: 'Fintech',         path: '/topics/fintech' },
  { label: 'Processing',      path: '/topics/payment-processing' },
  { label: 'APIs',            path: '/topics/payment-api' },
  { label: 'Ecommerce',       path: '/topics/ecommerce-payments' },
  { label: 'Integration',     path: '/topics/payment-integration' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [topicsOpen, setTopicsOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-indigo-600 to-violet-600 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[15px] font-semibold text-gray-900 tracking-tight">Parivestra</span>
              <span className="text-[10px] text-indigo-600 font-medium tracking-wide uppercase">Payments Blog</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {/* Topics dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setTopicsOpen(true)}
                onMouseLeave={() => setTopicsOpen(false)}
                onClick={() => setTopicsOpen(!topicsOpen)}
                className="px-3.5 py-2 text-sm text-gray-600 hover:text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-all duration-150 flex items-center gap-1"
                aria-haspopup="true"
                aria-expanded={topicsOpen}
              >
                Topics
                <svg className={`w-3 h-3 transition-transform ${topicsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {topicsOpen && (
                <div
                  onMouseEnter={() => setTopicsOpen(true)}
                  onMouseLeave={() => setTopicsOpen(false)}
                  className="absolute top-full left-0 mt-1 w-52 bg-white border border-gray-100 rounded-xl shadow-xl shadow-gray-100/50 p-2 z-50"
                >
                  {topicLinks.map(link => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setTopicsOpen(false)}
                      className="block px-3 py-2 text-sm text-gray-700 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <Link
                      to="/research"
                      onClick={() => setTopicsOpen(false)}
                      className="block px-3 py-2 text-xs text-gray-500 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors font-medium"
                    >
                      All Research Guides →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Home section anchors */}
            {[
              { label: 'Providers', href: isHome ? '#providers' : '/#providers' },
              { label: 'Research',  href: isHome ? '#research'  : '/#research'  },
            ].map(item => (
              isHome
                ? <a key={item.label} href={item.href} className="px-3.5 py-2 text-sm text-gray-600 hover:text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-all duration-150">{item.label}</a>
                : <Link key={item.label} to={item.href} className="px-3.5 py-2 text-sm text-gray-600 hover:text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-all duration-150">{item.label}</Link>
            ))}

            <Link to="/statistics" className="px-3.5 py-2 text-sm text-gray-600 hover:text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-all duration-150">
              Statistics
            </Link>
            <Link to="/reports" className="px-3.5 py-2 text-sm text-gray-600 hover:text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-all duration-150">
              Reports
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/research" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Read Guides
            </Link>
            <Link
              to="/topics/payment-gateway"
              className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-sm"
            >
              Explore Topics
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-1">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide px-3 pb-1">Topics</p>
          {topicLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2.5 text-sm text-gray-700 font-medium rounded-lg hover:bg-indigo-50 hover:text-indigo-700"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-gray-100 space-y-1">
            {[
              { label: 'Research Guides', to: '/research' },
              { label: 'Statistics', to: '/statistics' },
              { label: 'Reports', to: '/reports' },
            ].map(item => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 text-sm text-gray-700 font-medium rounded-lg hover:bg-gray-50"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="pt-3 border-t border-gray-100 mt-3">
            <Link
              to="/topics/payment-gateway"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center px-4 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg"
            >
              Explore Topics
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
