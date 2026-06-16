import { Link } from 'react-router-dom'

const navigation = {
  'Topic Hubs': [
    { label: 'Payment Gateway Guide',     to: '/topics/payment-gateway' },
    { label: 'Fintech Overview',          to: '/topics/fintech' },
    { label: 'Payment Processing',        to: '/topics/payment-processing' },
    { label: 'Payment APIs',              to: '/topics/payment-api' },
    { label: 'Ecommerce Payments',        to: '/topics/ecommerce-payments' },
    { label: 'Payment Integration',       to: '/topics/payment-integration' },
  ],
  'Research & Data': [
    { label: 'All Research Guides',       to: '/research' },
    { label: 'Payment Statistics',        to: '/statistics' },
    { label: 'Research Reports',          to: '/reports' },
    { label: 'Gateway Comparisons',       to: '/research' },
    { label: 'Checkout Optimization',     to: '/research' },
  ],
  'Payment Categories': [
    { label: 'UPI Payments',              to: '/topics/payment-gateway' },
    { label: 'Subscription Billing',      to: '/topics/ecommerce-payments' },
    { label: 'Merchant of Record',        to: '/topics/payment-integration' },
    { label: 'Cross-Border Payments',     to: '/research' },
    { label: 'Fraud Prevention',          to: '/research' },
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
    { '@type': 'WebPage', name: 'Payment Gateway', url: 'https://blog.parivestra.com/topics/payment-gateway' },
    { '@type': 'WebPage', name: 'Fintech',          url: 'https://blog.parivestra.com/topics/fintech' },
    { '@type': 'WebPage', name: 'Payment Processing', url: 'https://blog.parivestra.com/topics/payment-processing' },
    { '@type': 'WebPage', name: 'Payment APIs',      url: 'https://blog.parivestra.com/topics/payment-api' },
    { '@type': 'WebPage', name: 'Ecommerce Payments', url: 'https://blog.parivestra.com/topics/ecommerce-payments' },
    { '@type': 'WebPage', name: 'Payment Integration', url: 'https://blog.parivestra.com/topics/payment-integration' },
    { '@type': 'WebPage', name: 'Statistics',        url: 'https://blog.parivestra.com/statistics' },
    { '@type': 'WebPage', name: 'Research',          url: 'https://blog.parivestra.com/research' },
    { '@type': 'WebPage', name: 'Reports',           url: 'https://blog.parivestra.com/reports' },
  ],
})

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/5">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Main footer */}
        <div className="py-14 grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[15px] font-semibold text-white tracking-tight">Parivestra</span>
                <span className="text-[10px] text-indigo-400 font-medium tracking-wide uppercase">Payments Blog</span>
              </div>
            </Link>
            <p className="text-xs text-gray-500 leading-relaxed mb-5">
              Independent payment intelligence for ecommerce brands, founders, and growth teams. No affiliate rankings. No vendor sponsorship.
            </p>
            <div className="space-y-2">
              <Link to="/statistics" className="block text-xs text-gray-600 hover:text-indigo-400 transition-colors">Payment Statistics →</Link>
              <Link to="/reports" className="block text-xs text-gray-600 hover:text-indigo-400 transition-colors">Research Reports →</Link>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(navigation).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-xs font-semibold text-gray-400 tracking-wide uppercase mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item.label}>
                    {item.external
                      ? <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-600 hover:text-gray-400 transition-colors leading-relaxed">{item.label}</a>
                      : <Link to={item.to} className="text-xs text-gray-600 hover:text-gray-400 transition-colors leading-relaxed">{item.label}</Link>
                    }
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SEO-rich topic cluster links */}
        <div className="border-t border-white/5 py-6">
          <p className="text-[10px] text-gray-700 mb-3">Explore payment topics:</p>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'Payment Gateway', to: '/topics/payment-gateway' },
              { label: 'Payment Processing', to: '/topics/payment-processing' },
              { label: 'Payment Integration', to: '/topics/payment-integration' },
              { label: 'Payment Solutions', to: '/topics/ecommerce-payments' },
              { label: 'Fintech', to: '/topics/fintech' },
              { label: 'Merchant Services', to: '/topics/payment-gateway' },
              { label: 'Ecommerce Payments', to: '/topics/ecommerce-payments' },
              { label: 'Payment APIs', to: '/topics/payment-api' },
              { label: 'UPI Payments', to: '/topics/payment-gateway' },
              { label: 'Subscription Billing', to: '/topics/ecommerce-payments' },
              { label: 'Cross-Border Payments', to: '/research' },
              { label: 'Checkout Optimization', to: '/research' },
            ].map(link => (
              <Link
                key={link.label}
                to={link.to}
                className="text-[10px] text-gray-700 hover:text-gray-500 transition-colors px-2 py-0.5 border border-white/5 rounded-full"
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
