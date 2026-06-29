import { Link } from 'react-router-dom'

const navigation = {
  'Topic Hubs': [
    { label: 'Payment Gateway Guide',   to: '/topics/payment-gateway' },
    { label: 'Fintech Overview',        to: '/topics/fintech' },
    { label: 'Payment Processing',      to: '/topics/payment-processing' },
    { label: 'Payment APIs',            to: '/topics/payment-api' },
    { label: 'Ecommerce Payments',      to: '/topics/ecommerce-payments' },
    { label: 'Payment Integration',     to: '/topics/payment-integration' },
  ],
  'Research & Data': [
    { label: 'All Research Guides',     to: '/research' },
    { label: 'Payment Statistics',      to: '/statistics' },
    { label: 'Research Reports',        to: '/reports' },
    { label: 'Gateway Comparisons',     to: '/research' },
    { label: 'Checkout Optimization',   to: '/research' },
  ],
  'Payment Categories': [
    { label: 'UPI Payments',            to: '/topics/payment-gateway' },
    { label: 'Subscription Billing',    to: '/topics/ecommerce-payments' },
    { label: 'Merchant of Record',      to: '/topics/payment-integration' },
    { label: 'Cross-Border Payments',   to: '/research' },
    { label: 'Fraud Prevention',        to: '/research' },
  ],
  'Parivestra': [
    { label: 'About Parivestra',          href: 'https://parivestra.com', external: true },
    { label: 'Distribution Intelligence', href: 'https://parivestra.com', external: true },
    { label: 'Growth Intelligence',       href: 'https://parivestra.com', external: true },
    { label: 'Contact',                   href: 'mailto:accounts@parivestra.com', external: true },
  ],
}

const schemaJson = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'SiteNavigationElement',
  name: 'Parivestra Blog Navigation',
  url: 'https://blog.parivestra.com',
  hasPart: [
    { '@type': 'WebPage', name: 'Payment Gateway',    url: 'https://blog.parivestra.com/topics/payment-gateway' },
    { '@type': 'WebPage', name: 'Fintech',            url: 'https://blog.parivestra.com/topics/fintech' },
    { '@type': 'WebPage', name: 'Payment Processing', url: 'https://blog.parivestra.com/topics/payment-processing' },
    { '@type': 'WebPage', name: 'Payment APIs',       url: 'https://blog.parivestra.com/topics/payment-api' },
    { '@type': 'WebPage', name: 'Ecommerce Payments', url: 'https://blog.parivestra.com/topics/ecommerce-payments' },
    { '@type': 'WebPage', name: 'Payment Integration',url: 'https://blog.parivestra.com/topics/payment-integration' },
    { '@type': 'WebPage', name: 'Statistics',         url: 'https://blog.parivestra.com/statistics' },
    { '@type': 'WebPage', name: 'Research',           url: 'https://blog.parivestra.com/research' },
    { '@type': 'WebPage', name: 'Reports',            url: 'https://blog.parivestra.com/reports' },
  ],
})

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/6 relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />

      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/3 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Main grid */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-6 gap-10">

          {/* Brand column — wider */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5 group w-fit">
              <div className="w-9 h-9 rounded-xl bg-linear-to-br from-indigo-500 via-violet-600 to-purple-700 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
                <svg className="w-4.5 h-4.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[15px] font-bold text-white tracking-tight">Parivestra</span>
                <span className="text-[9px] text-indigo-400 font-semibold tracking-widest uppercase">Payments Hub</span>
              </div>
            </Link>

            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-xs">
              Independent payment intelligence for ecommerce brands, founders, and growth teams. No affiliate rankings. No vendor sponsorship.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {['40+ Providers', '150+ Guides', 'Always Free'].map(tag => (
                <span key={tag} className="text-[11px] text-gray-500 px-2.5 py-1 rounded-full border border-white/8 bg-white/3">
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-1.5">
              <Link to="/statistics" className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-indigo-400 transition-colors">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                Payment Statistics
              </Link>
              <Link to="/reports" className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-indigo-400 transition-colors">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Research Reports
              </Link>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(navigation).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item.label}>
                    {item.external
                      ? <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-600 hover:text-gray-300 transition-colors leading-relaxed">{item.label}</a>
                      : <Link to={item.to} className="text-xs text-gray-600 hover:text-gray-300 transition-colors leading-relaxed">{item.label}</Link>
                    }
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SEO topic cluster links */}
        <div className="border-t border-white/5 py-6">
          <p className="text-[10px] text-gray-700 mb-3 font-medium tracking-wide uppercase">Explore payment topics:</p>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'Payment Gateway',      to: '/topics/payment-gateway' },
              { label: 'Payment Processing',    to: '/topics/payment-processing' },
              { label: 'Payment Integration',   to: '/topics/payment-integration' },
              { label: 'Payment Solutions',     to: '/topics/ecommerce-payments' },
              { label: 'Fintech',               to: '/topics/fintech' },
              { label: 'Merchant Services',     to: '/topics/payment-gateway' },
              { label: 'Ecommerce Payments',    to: '/topics/ecommerce-payments' },
              { label: 'Payment APIs',          to: '/topics/payment-api' },
              { label: 'UPI Payments',          to: '/topics/payment-gateway' },
              { label: 'Subscription Billing',  to: '/topics/ecommerce-payments' },
              { label: 'Cross-Border Payments', to: '/research' },
              { label: 'Checkout Optimization', to: '/research' },
            ].map(link => (
              <Link
                key={link.label}
                to={link.to}
                className="text-[10px] text-gray-700 hover:text-gray-400 transition-colors px-2.5 py-1 border border-white/5 rounded-full hover:border-white/12 hover:bg-white/3"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 space-y-2">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[11px] text-gray-600">
              © 2026 Parivestra Ventures. All rights reserved. Educational & research resource only — we do not process payments.
            </p>
            <div className="flex items-center gap-4 text-[11px] text-gray-700">
              <Link to="/sitemap.xml" className="hover:text-gray-500 transition-colors">Sitemap</Link>
              <span>·</span>
              <span>All trademarks belong to their respective owners.</span>
            </div>
          </div>
          <p className="text-[10px] text-gray-700 text-center sm:text-left">
            Data & statistics referenced from: NPCI, RBI, Baymard Institute, PCI SSC, Worldpay FIS, McKinsey, Stripe, Razorpay, Statista, Juniper Research, VISA & MeitY — used for educational reference only.
          </p>
        </div>
      </div>
    </footer>
  )
}
