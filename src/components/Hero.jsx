/* ─── Floating ecommerce UI cards ─────────────────────────────────────────── */

function OrderConfirmedCard() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-64 float-slow select-none">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center">
          <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-bold text-gray-900">Order Confirmed</p>
          <p className="text-[10px] text-gray-400">#ORD-847291 · just now</p>
        </div>
      </div>

      {/* Items */}
      <div className="space-y-2 mb-3">
        {[
          { name: 'Wireless Earbuds Pro', qty: '×1', price: '₹2,499' },
          { name: 'Phone Case – Black', qty: '×2', price: '₹598' },
        ].map(item => (
          <div key={item.name} className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-medium text-gray-800 truncate">{item.name}</p>
              <p className="text-[10px] text-gray-400">{item.qty}</p>
            </div>
            <p className="text-[11px] font-semibold text-gray-700 shrink-0">{item.price}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-50 pt-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded bg-indigo-600 flex items-center justify-center">
            <span className="text-[8px] font-bold text-white">UPI</span>
          </div>
          <span className="text-[10px] text-gray-500">Razorpay UPI</span>
        </div>
        <span className="text-xs font-bold text-gray-900">₹3,097</span>
      </div>
    </div>
  )
}

function NewSaleBadge() {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-3 w-52 float-reverse select-none">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center shrink-0">
          <svg className="w-4 h-4 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <div>
          <p className="text-[10px] text-gray-400 font-medium">New Sale</p>
          <p className="text-sm font-bold text-gray-900">₹8,750</p>
          <p className="text-[10px] text-gray-400">Stripe · 2 min ago</p>
        </div>
      </div>
      <div className="mt-2.5 h-1 rounded-full bg-gray-100 overflow-hidden">
        <div className="h-full bg-violet-500 rounded-full" style={{ width: '72%' }} />
      </div>
      <p className="text-[9px] text-gray-400 mt-1">72% of daily target</p>
    </div>
  )
}

function CheckoutCard() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-60 float-medium select-none">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-bold text-gray-900">Secure Checkout</p>
        <div className="flex items-center gap-1">
          <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="text-[9px] text-emerald-600 font-semibold">SSL Secured</span>
        </div>
      </div>

      {/* Cart summary */}
      <div className="bg-gray-50 rounded-xl p-3 mb-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded bg-indigo-100 flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <span className="text-[11px] font-medium text-gray-700">3 items in cart</span>
        </div>
        <div className="flex justify-between text-[10px] text-gray-500 mb-0.5">
          <span>Subtotal</span><span className="font-medium text-gray-700">₹4,200</span>
        </div>
        <div className="flex justify-between text-[10px] text-gray-500 mb-0.5">
          <span>Shipping</span><span className="text-emerald-600 font-medium">Free</span>
        </div>
        <div className="flex justify-between text-[11px] font-bold text-gray-900 border-t border-gray-200 mt-1.5 pt-1.5">
          <span>Total</span><span>₹4,200</span>
        </div>
      </div>

      {/* Pay buttons */}
      <div className="space-y-2">
        <button className="w-full bg-indigo-600 text-white text-[11px] font-bold py-2 rounded-lg flex items-center justify-center gap-1.5">
          <span className="text-sm">⚡</span> Pay with UPI
        </button>
        <div className="flex gap-2">
          {['💳 Card', '🏦 NetBanking'].map(m => (
            <button key={m} className="flex-1 border border-gray-200 text-[10px] font-semibold text-gray-600 py-1.5 rounded-lg hover:bg-gray-50">
              {m}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function ShippingCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-3.5 w-52 float-fast select-none">
      <div className="flex items-center gap-2 mb-2.5">
        <div className="w-7 h-7 rounded-full bg-cyan-100 flex items-center justify-center shrink-0">
          <svg className="w-4 h-4 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
          </svg>
        </div>
        <div>
          <p className="text-[10px] text-gray-400">Order shipped!</p>
          <p className="text-xs font-bold text-gray-900">#ORD-847290</p>
        </div>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-1 mb-2">
        {['Packed', 'Shipped', 'Out', 'Delivered'].map((step, i) => (
          <div key={step} className="flex items-center gap-1 flex-1">
            <div className={`w-2 h-2 rounded-full shrink-0 ${i <= 1 ? 'bg-cyan-500' : 'bg-gray-200'}`} />
            {i < 3 && <div className={`h-0.5 flex-1 ${i < 1 ? 'bg-cyan-500' : 'bg-gray-200'}`} />}
          </div>
        ))}
      </div>
      <div className="flex justify-between text-[9px] text-gray-400 mb-2.5">
        {['Packed', 'Shipped', 'Out', 'Delivered'].map(s => <span key={s}>{s}</span>)}
      </div>

      <div className="bg-cyan-50 rounded-lg px-2.5 py-1.5 flex items-center justify-between">
        <span className="text-[10px] text-cyan-700 font-medium">Expected delivery</span>
        <span className="text-[10px] font-bold text-cyan-800">Tomorrow</span>
      </div>
    </div>
  )
}

function PaymentSuccessToast() {
  return (
    <div className="bg-gray-900 rounded-xl shadow-xl px-4 py-3 w-56 float-slow select-none">
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-bold text-white">Payment Received</p>
          <p className="text-[10px] text-gray-400">₹12,500 · Adyen</p>
        </div>
      </div>
      <div className="mt-2 flex gap-1">
        {['Stripe', 'RazorPay', 'UPI'].map(tag => (
          <span key={tag} className="text-[8px] px-1.5 py-0.5 bg-white/10 text-gray-400 rounded-full font-medium">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function ReviewCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-3.5 w-52 float-reverse select-none">
      <div className="flex items-center gap-0.5 mb-1.5">
        {[1,2,3,4,5].map(i => (
          <svg key={i} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-[10px] text-gray-400 ml-1">5.0</span>
      </div>
      <p className="text-[11px] text-gray-700 leading-relaxed mb-2">
        "Checkout was smooth. Paid via UPI in seconds."
      </p>
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-indigo-200 flex items-center justify-center">
          <span className="text-[9px] font-bold text-indigo-700">P</span>
        </div>
        <span className="text-[10px] text-gray-500 font-medium">Priya S. · Verified buyer</span>
      </div>
    </div>
  )
}

/* ─── Main Hero ────────────────────────────────────────────────────────────── */

export default function Hero() {
  return (
    <section className="relative hero-gradient pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* ── LEFT FLOATING CARDS (hidden on mobile) ── */}
      <div className="hidden xl:block absolute left-4 2xl:left-12 top-28 space-y-5 pointer-events-none z-10">
        <div className="opacity-90">
          <OrderConfirmedCard />
        </div>
        <div className="ml-6 opacity-80">
          <NewSaleBadge />
        </div>
      </div>

      {/* ── RIGHT FLOATING CARDS (hidden on mobile) ── */}
      <div className="hidden xl:block absolute right-4 2xl:right-12 top-24 space-y-5 pointer-events-none z-10">
        <div className="opacity-90">
          <CheckoutCard />
        </div>
        <div className="ml-4 opacity-80">
          <ShippingCard />
        </div>
      </div>

      {/* ── EXTRA CARDS — very large screens ── */}
      <div className="hidden 2xl:block absolute left-16 bottom-32 pointer-events-none z-10 opacity-70">
        <PaymentSuccessToast />
      </div>
      <div className="hidden 2xl:block absolute right-16 bottom-28 pointer-events-none z-10 opacity-70">
        <ReviewCard />
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center z-20">

        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-xs font-semibold text-indigo-700 tracking-wide uppercase">
              Free Ecommerce Payments Resource
            </span>
          </div>
        </div>

        {/* H1 */}
        <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-gray-900 leading-[1.08] tracking-tight">
          The Intelligence Layer Behind{' '}
          <span className="gradient-text">Modern Ecommerce Payments</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-7 text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Picking the wrong payment gateway costs you real money. We compare providers, break down the fees,
          and help you make the call — no vendor bias, no affiliate rankings.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#ecosystem"
            className="group flex items-center gap-2 px-6 py-3.5 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-lg shadow-gray-900/10"
          >
            Compare Payment Providers
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#research"
            className="group flex items-center gap-2 px-6 py-3.5 bg-white text-gray-800 text-sm font-semibold rounded-xl border border-gray-200 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all duration-200 shadow-sm"
          >
            Read Free Guides
            <svg className="w-4 h-4 text-gray-400 group-hover:text-indigo-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </a>
        </div>

        {/* Trust pills */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          {[
            { label: '40+ Payment Providers', icon: '🏦' },
            { label: 'Gateway Comparisons', icon: '⚡' },
            { label: 'India & Global Guides', icon: '📖' },
            { label: 'No Signup. Always Free.', icon: '✅' },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-2 text-sm text-gray-500">
              <span>{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── BROWSER PREVIEW (below text on all screens) ── */}
      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 mt-16 z-20">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl shadow-gray-200/50 overflow-hidden">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-gray-100 bg-gray-50/60">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            <div className="flex-1 mx-4">
              <div className="max-w-xs mx-auto bg-white border border-gray-200 rounded-md px-3 py-1 text-xs text-gray-400 text-center">
                payments.parivestra.com
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="p-6 lg:p-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Payment Gateways',  count: '40+',  color: 'bg-indigo-50 border-indigo-100',  text: 'text-indigo-700',  dot: 'bg-indigo-500'  },
              { label: 'Integration Guides', count: '120+', color: 'bg-violet-50 border-violet-100',  text: 'text-violet-700',  dot: 'bg-violet-500'  },
              { label: 'Provider Reviews',  count: '80+',  color: 'bg-cyan-50 border-cyan-100',     text: 'text-cyan-700',    dot: 'bg-cyan-500'    },
              { label: 'Research Reports',  count: '30+',  color: 'bg-emerald-50 border-emerald-100', text: 'text-emerald-700', dot: 'bg-emerald-500' },
            ].map(card => (
              <div key={card.label} className={`${card.color} border rounded-xl p-4`}>
                <div className={`w-2 h-2 rounded-full ${card.dot} mb-3`} />
                <div className={`text-2xl font-bold ${card.text}`}>{card.count}</div>
                <div className="text-xs text-gray-500 mt-1 font-medium">{card.label}</div>
              </div>
            ))}
          </div>

          {/* Recent guides */}
          <div className="px-6 lg:px-10 pb-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {[
              { title: 'Stripe vs Razorpay: Which is better for India?', tag: 'Head to Head',   color: 'text-indigo-600' },
              { title: 'Merchant of Record vs Payment Gateway',           tag: 'Decision Guide', color: 'text-violet-600' },
              { title: '7 Ways to Fix Checkout Drop-off',                 tag: 'Conversion',     color: 'text-cyan-600'   },
            ].map(item => (
              <div key={item.title} className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className={`text-xs font-semibold ${item.color} mb-0.5`}>{item.tag}</p>
                  <p className="text-sm font-medium text-gray-800 leading-snug">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
