/* ─── Floating ecommerce UI cards ─────────────────────────────────────────── */

function OrderConfirmedCard() {
  return (
    <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/10 p-4 w-64 float-slow select-none">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
          <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-bold text-white">Order Confirmed</p>
          <p className="text-[10px] text-gray-500">#ORD-847291 · just now</p>
        </div>
      </div>
      <div className="space-y-2 mb-3">
        {[
          { name: 'Wireless Earbuds Pro', qty: '×1', price: '₹2,499' },
          { name: 'Phone Case – Black',   qty: '×2', price: '₹598' },
        ].map(item => (
          <div key={item.name} className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-medium text-gray-200 truncate">{item.name}</p>
              <p className="text-[10px] text-gray-500">{item.qty}</p>
            </div>
            <p className="text-[11px] font-semibold text-gray-300 shrink-0">{item.price}</p>
          </div>
        ))}
      </div>
      <div className="border-t border-white/8 pt-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded bg-indigo-500 flex items-center justify-center">
            <span className="text-[8px] font-bold text-white">UPI</span>
          </div>
          <span className="text-[10px] text-gray-500">Razorpay UPI</span>
        </div>
        <span className="text-xs font-bold text-white">₹3,097</span>
      </div>
    </div>
  )
}

function NewSaleBadge() {
  return (
    <div className="bg-gray-900/90 backdrop-blur-sm rounded-xl shadow-xl border border-white/10 px-4 py-3 w-52 float-reverse select-none">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center shrink-0">
          <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <div>
          <p className="text-[10px] text-gray-500 font-medium">New Sale</p>
          <p className="text-sm font-bold text-white">₹8,750</p>
          <p className="text-[10px] text-gray-500">Stripe · 2 min ago</p>
        </div>
      </div>
      <div className="mt-2.5 h-1.5 rounded-full bg-white/8 overflow-hidden">
        <div className="h-full bg-linear-to-r from-teal-500 to-emerald-400 rounded-full" style={{ width: '72%' }} />
      </div>
      <p className="text-[9px] text-gray-500 mt-1">72% of daily target</p>
    </div>
  )
}

function CheckoutCard() {
  return (
    <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/10 p-4 w-60 float-medium select-none">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-bold text-white">Secure Checkout</p>
        <div className="flex items-center gap-1">
          <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="text-[9px] text-emerald-400 font-semibold">SSL Secured</span>
        </div>
      </div>
      <div className="bg-white/5 rounded-xl p-3 mb-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded bg-indigo-500/20 flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <span className="text-[11px] font-medium text-gray-300">3 items in cart</span>
        </div>
        <div className="flex justify-between text-[10px] text-gray-500 mb-0.5">
          <span>Subtotal</span><span className="font-medium text-gray-300">₹4,200</span>
        </div>
        <div className="flex justify-between text-[10px] text-gray-500 mb-0.5">
          <span>Shipping</span><span className="text-emerald-400 font-medium">Free</span>
        </div>
        <div className="flex justify-between text-[11px] font-bold text-white border-t border-white/8 mt-1.5 pt-1.5">
          <span>Total</span><span>₹4,200</span>
        </div>
      </div>
      <div className="space-y-2">
        <button className="w-full bg-linear-to-r from-indigo-500 to-violet-600 text-white text-[11px] font-bold py-2 rounded-lg flex items-center justify-center gap-1.5">
          <span>⚡</span> Pay with UPI
        </button>
        <div className="flex gap-2">
          {['💳 Card', '🏦 NetBanking'].map(m => (
            <button key={m} className="flex-1 border border-white/10 bg-white/5 text-[10px] font-semibold text-gray-400 py-1.5 rounded-lg hover:bg-white/10 transition-colors">
              {m}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function PaymentSuccessToast() {
  return (
    <div className="bg-gray-950 border border-white/10 rounded-xl shadow-2xl px-4 py-3 w-56 float-slow select-none">
      <div className="flex items-center gap-2.5">
        <div className="relative w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
          <div className="absolute inset-0 rounded-full bg-emerald-400 ping-slow opacity-60" />
        </div>
        <div>
          <p className="text-xs font-bold text-white">Payment Received</p>
          <p className="text-[10px] text-gray-500">₹12,500 · Adyen</p>
        </div>
      </div>
      <div className="mt-2 flex gap-1">
        {['Stripe', 'RazorPay', 'UPI'].map(tag => (
          <span key={tag} className="text-[8px] px-1.5 py-0.5 bg-white/8 text-gray-400 rounded-full font-medium border border-white/8">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function ReviewCard() {
  return (
    <div className="bg-gray-900/90 backdrop-blur-sm rounded-xl shadow-xl border border-white/10 p-3.5 w-52 float-reverse select-none">
      <div className="flex items-center gap-0.5 mb-1.5">
        {[1,2,3,4,5].map(i => (
          <svg key={i} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-[10px] text-gray-500 ml-1">5.0</span>
      </div>
      <p className="text-[11px] text-gray-300 leading-relaxed mb-2">
        "Checkout was smooth. Paid via UPI in seconds."
      </p>
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
          <span className="text-[9px] font-bold text-emerald-400">P</span>
        </div>
        <span className="text-[10px] text-gray-500 font-medium">Priya S. · Verified buyer</span>
      </div>
    </div>
  )
}

/* ─── Main Hero ────────────────────────────────────────────────────────────── */

export default function Hero() {
  return (
    <section className="relative hero-dark min-h-screen flex flex-col justify-center pt-28 pb-20 lg:pt-36 lg:pb-24 overflow-hidden">

      {/* Animated background orbs */}
      <div className="absolute top-0 left-1/4 w-150 h-150 rounded-full bg-indigo-600/15 blur-[120px] pointer-events-none animate-orb-1" />
      <div className="absolute bottom-0 right-1/4 w-125 h-125 rounded-full bg-violet-600/12 blur-[100px] pointer-events-none animate-orb-2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 rounded-full bg-indigo-500/5 blur-[80px] pointer-events-none" />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-100" />

      {/* Left floating cards */}
      <div className="hidden xl:block absolute left-4 2xl:left-12 top-28 space-y-5 pointer-events-none z-10">
        <div className="opacity-90"><OrderConfirmedCard /></div>
        <div className="ml-6 opacity-80"><NewSaleBadge /></div>
      </div>

      {/* Right floating cards */}
      <div className="hidden xl:block absolute right-4 2xl:right-12 top-24 space-y-5 pointer-events-none z-10">
        <div className="opacity-90"><CheckoutCard /></div>
      </div>

      {/* Extra cards on very large screens */}
      <div className="hidden 2xl:block absolute left-16 bottom-28 pointer-events-none z-10 opacity-75">
        <PaymentSuccessToast />
      </div>
      <div className="hidden 2xl:block absolute right-12 bottom-24 pointer-events-none z-10 opacity-75">
        <ReviewCard />
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center z-20">

        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/25 rounded-full px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400" />
            </span>
            <span className="text-xs font-semibold text-indigo-300 tracking-wide uppercase">
              Free Ecommerce Payments Resource
            </span>
          </div>
        </div>

        {/* H1 */}
        <h1 className="text-4xl sm:text-5xl lg:text-[68px] font-bold text-white leading-[1.06] tracking-tight">
          The Intelligence Layer<br className="hidden sm:block" /> Behind{' '}
          <span className="gradient-text">Modern Payments</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-7 text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Picking the wrong payment gateway costs you real money. We compare providers, break down the fees,
          and help you make the call — <span className="text-gray-200 font-medium">no vendor bias, no affiliate rankings.</span>
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#ecosystem"
            className="group relative flex items-center gap-2 px-7 py-3.5 bg-linear-to-r from-orange-500 to-orange-600 text-white text-sm font-bold rounded-xl hover:from-orange-400 hover:to-orange-500 transition-all duration-200 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/40 shine"
          >
            Compare Payment Providers
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#research"
            className="group flex items-center gap-2 px-7 py-3.5 bg-white/8 text-white text-sm font-semibold rounded-xl border border-white/15 hover:bg-white/14 hover:border-white/25 transition-all duration-200 backdrop-blur-sm"
          >
            Read Free Guides
            <svg className="w-4 h-4 text-gray-400 group-hover:text-indigo-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </a>
        </div>

        {/* Trust pills */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {[
            { label: '40+ Payment Providers', icon: '🏦' },
            { label: 'Gateway Comparisons',   icon: '⚡' },
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

      {/* ── STATS BAR ── */}
      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 mt-20 z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/6 rounded-2xl overflow-hidden border border-white/8">
          {[
            { label: 'Payment Gateways',   count: '40+',  icon: '🏦', color: 'text-indigo-400' },
            { label: 'Integration Guides', count: '120+', icon: '📄', color: 'text-violet-400' },
            { label: 'Provider Reviews',   count: '80+',  icon: '⭐', color: 'text-amber-400'  },
            { label: 'Research Reports',   count: '30+',  icon: '📊', color: 'text-emerald-400'},
          ].map(card => (
            <div key={card.label} className="bg-gray-900/60 backdrop-blur-sm px-6 py-6 text-center hover:bg-white/5 transition-colors duration-200">
              <div className="text-2xl mb-1">{card.icon}</div>
              <div className={`text-3xl font-bold ${card.color} stat-number`}>{card.count}</div>
              <div className="text-xs text-gray-500 mt-1.5 font-medium">{card.label}</div>
            </div>
          ))}
        </div>

        {/* Recent guides row */}
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-3">
          {[
            { title: 'Stripe vs Razorpay: Which is better for India?', tag: 'Head to Head',   color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/20' },
            { title: 'Merchant of Record vs Payment Gateway Explained', tag: 'Decision Guide', color: 'text-violet-400', bg: 'bg-violet-500/10 border-violet-500/20' },
            { title: '7 Ways to Fix Checkout Drop-off in 2025',         tag: 'Conversion',     color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20' },
          ].map(item => (
            <div key={item.title} className="bg-gray-900/60 backdrop-blur-sm border border-white/8 rounded-xl p-4 flex items-start gap-3 hover:bg-white/5 transition-colors duration-200">
              <div className={`px-2 py-0.5 rounded-md border text-[10px] font-semibold ${item.color} ${item.bg} shrink-0 mt-0.5`}>
                {item.tag}
              </div>
              <p className="text-sm text-gray-300 font-medium leading-snug">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-950/80 to-transparent pointer-events-none" />
    </section>
  )
}
