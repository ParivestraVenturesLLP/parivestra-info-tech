const links = {
  'Payment Research': ['Gateway Comparisons', 'Provider Reviews', 'Integration Guides', 'Checkout Optimization', 'Subscription Billing'],
  'Payment Categories': ['Payment Gateways', 'UPI Infrastructure', 'Merchant of Record', 'Fraud Prevention', 'Cross-Border Payments'],
  'Resources': ['Ecommerce Founders', 'Shopify Merchants', 'SaaS Businesses', 'Growth Teams', 'Developers'],
  'Parivestra': ['About', 'Distribution', 'Growth Intelligence', 'Influencer Ecosystem', 'Contact'],
}

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-14 grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[15px] font-semibold text-white tracking-tight">Parivestra</span>
                <span className="text-[10px] text-indigo-400 font-medium tracking-wide uppercase">Payments Hub</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mb-5">
              Independent payment intelligence for ecommerce brands, founders, and growth teams.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-gray-600 font-medium">By Parivestra</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-xs font-semibold text-gray-400 tracking-wide uppercase mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors leading-relaxed">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 space-y-2">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[11px] text-gray-600">
              © 2026 Parivestra Ventures. All rights reserved. Educational & research resource only — we do not process payments.
            </p>
            <p className="text-[11px] text-gray-700 text-center sm:text-right">
              All trademarks belong to their respective owners and are referenced here for informational purposes only.
            </p>
          </div>
          <p className="text-[10px] text-gray-700 text-center sm:text-left">
            Data & statistics referenced from: NPCI, RBI, Baymard Institute, PCI SSC, Worldpay FIS, McKinsey, Stripe, Razorpay, Statista, Juniper Research, VISA & MeitY — used for educational reference only.
          </p>
        </div>
      </div>
    </footer>
  )
}
