const sources = [
  {
    org: 'NPCI',
    full: 'National Payments Corporation of India',
    cite: 'UPI transaction volume, payment system indicators, and AutoPay adoption data',
    country: 'IN',
    url: 'https://www.npci.org.in/what-we-do/upi/product-statistics',
  },
  {
    org: 'RBI',
    full: 'Reserve Bank of India',
    cite: 'Payment system data, digital transaction reports, regulatory frameworks, and PPI guidelines',
    country: 'IN',
    url: 'https://www.rbi.org.in/Scripts/PaymentSystems_UM.aspx',
  },
  {
    org: 'Baymard Institute',
    full: 'Baymard Institute UX Research',
    cite: 'Cart abandonment rate benchmarks (70% industry average) and checkout UX research',
    country: 'GLOBAL',
    url: 'https://baymard.com/lists/cart-abandonment-rate',
  },
  {
    org: 'PCI SSC',
    full: 'PCI Security Standards Council',
    cite: 'PCI DSS requirements, SAQ types (A, A-EP, D), and merchant compliance guidelines',
    country: 'GLOBAL',
    url: 'https://www.pcisecuritystandards.org',
  },
  {
    org: 'Worldpay / FIS',
    full: 'Worldpay Global Payments Report',
    cite: 'Global payment method usage by market, ecommerce payment trends, and BNPL adoption data',
    country: 'GLOBAL',
    url: 'https://worldpay.com/global-payments-report',
  },
  {
    org: 'McKinsey & Co.',
    full: 'McKinsey Global Payments Report',
    cite: 'Payment revenue analysis, cross-border payment cost estimates, and fintech market sizing',
    country: 'GLOBAL',
    url: 'https://www.mckinsey.com/industries/financial-services/our-insights/global-payments',
  },
  {
    org: 'Stripe',
    full: 'Stripe Annual Reports & Docs',
    cite: 'Payment Intents API documentation, pricing, SCA compliance guidelines, and Stripe Radar data',
    country: 'GLOBAL',
    url: 'https://stripe.com/docs',
  },
  {
    org: 'Razorpay',
    full: 'Razorpay Docs & Reports',
    cite: 'UPI AutoPay documentation, Indian payment method data, and Razorpay pricing structure',
    country: 'IN',
    url: 'https://razorpay.com/docs',
  },
  {
    org: 'Statista',
    full: 'Statista Digital Payments',
    cite: 'India digital payments market size, fintech adoption statistics, and ecommerce transaction data',
    country: 'GLOBAL',
    url: 'https://www.statista.com/outlook/fmo/digital-payments/india',
  },
  {
    org: 'Juniper Research',
    full: 'Juniper Research Fintech Reports',
    cite: 'BNPL market projections, global fintech payment volume forecasts, and embedded finance data',
    country: 'GLOBAL',
    url: 'https://www.juniperresearch.com',
  },
  {
    org: 'VISA',
    full: 'Visa Inc. Annual & Investor Reports',
    cite: 'Card network transaction data, tokenization statistics, account updater service details',
    country: 'GLOBAL',
    url: 'https://investor.visa.com',
  },
  {
    org: 'MeitY / Digital India',
    full: 'Ministry of Electronics & IT, Govt. of India',
    cite: 'Digital India payment push statistics, PMJDY data, and financial inclusion numbers',
    country: 'IN',
    url: 'https://www.meity.gov.in/digital-payment',
  },
]

export default function Sources() {
  return (
    <section id="sources" className="py-16 lg:py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
              <span className="text-xs font-semibold text-gray-500 tracking-wide uppercase">Data Sources & Credits</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
              Where our data comes from
            </h2>
            <p className="mt-2 text-sm text-gray-500 max-w-xl leading-relaxed">
              All statistics, benchmarks, and market data referenced across this platform are drawn from publicly available research, official documentation, and reputable industry sources listed below. Parivestra does not fabricate or sponsor any of the data cited.
            </p>
          </div>
          <div className="shrink-0 text-right hidden sm:block">
            <p className="text-xs text-gray-400">Last reviewed</p>
            <p className="text-xs font-semibold text-gray-600">June 2025</p>
          </div>
        </div>

        {/* Source cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sources.map(src => (
            <div key={src.org} className="bg-white border border-gray-100 rounded-xl p-4 flex gap-4 hover:border-gray-200 transition-colors">
              {/* Badge */}
              <div className="shrink-0">
                <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <span className="text-[9px] font-bold text-gray-500 text-center leading-tight px-0.5">
                    {src.org.slice(0, 4)}
                  </span>
                </div>
                <div className="mt-1.5 text-center">
                  <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full ${
                    src.country === 'IN'
                      ? 'bg-orange-50 text-orange-600'
                      : 'bg-blue-50 text-blue-600'
                  }`}>
                    {src.country}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-gray-900 mb-0.5">{src.org}</p>
                <p className="text-[10px] text-gray-400 mb-1.5 leading-snug">{src.full}</p>
                <p className="text-[11px] text-gray-500 leading-relaxed">{src.cite}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 bg-white border border-gray-100 rounded-xl p-5">
          <div className="flex items-start gap-3">
            <div className="shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mt-0.5">
              <svg className="w-3 h-3 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-800 mb-1">Editorial Independence & Trademark Notice</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Parivestra is an independent educational resource. We are not affiliated with, endorsed by, or in a commercial relationship with any payment provider, gateway, or fintech company mentioned on this platform. All product names, company names, logos, and trademarks referenced — including Stripe, Razorpay, Cashfree, PayPal, Adyen, Paddle, Lemon Squeezy, Shopify, PhonePe, Paytm, and others — are the property of their respective owners and are used here solely for identification and educational reference. No trademark holder has reviewed, approved, or sponsored any content on this platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
