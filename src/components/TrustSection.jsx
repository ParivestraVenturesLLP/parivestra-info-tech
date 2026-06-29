const pillars = [
  {
    number: '01',
    icon: '📖',
    title: 'We Actually Read the Docs',
    desc: 'We go through the actual API docs, pricing pages, changelogs, and developer forums — not the marketing landing pages. That\'s where the real story is.',
    detail: 'No vendor briefings, no PR packages. Just the actual product, the actual pricing, and what real users say about it.',
    color: 'indigo',
  },
  {
    number: '02',
    icon: '💸',
    title: 'We Care About Your Bottom Line',
    desc: 'Every guide we write asks one question first: what does this actually cost a real business? Not a hypothetical one. Yours.',
    detail: 'If a guide doesn\'t tell you what a decision saves or costs, it\'s not useful. We don\'t write content for word count.',
    color: 'violet',
  },
  {
    number: '03',
    icon: '🧑‍💼',
    title: 'Written for Founders, Not Consultants',
    desc: 'We don\'t write for audiences who already know everything. We write for people who are running a business and need a clear answer fast.',
    detail: 'Technical depth when it matters, plain language when it doesn\'t. You\'ll always walk away knowing what to do next.',
    color: 'blue',
  },
  {
    number: '04',
    icon: '✅',
    title: 'Clear Verdicts, Not Just Lists',
    desc: 'Anyone can list 10 payment gateways with a feature table. We tell you which one to pick and why — given your business type, market, and stage.',
    detail: 'If the answer is "it depends," we tell you exactly what it depends on and walk you through each case.',
    color: 'emerald',
  },
  {
    number: '05',
    icon: '📈',
    title: 'Built for Businesses at Every Stage',
    desc: 'From first Shopify sale to scaling D2C brand, the payment questions change as you grow. Our content covers all of it.',
    detail: 'We don\'t just cover enterprise. We cover what matters when you\'re doing ₹5L/month as much as ₹5Cr/month.',
    color: 'orange',
  },
]

const colorMap = {
  indigo: { border: 'border-indigo-500/20', bg: 'bg-indigo-500/8', text: 'text-indigo-400', glow: 'hover:shadow-indigo-500/10' },
  violet: { border: 'border-violet-500/20', bg: 'bg-violet-500/8', text: 'text-violet-400', glow: 'hover:shadow-violet-500/10' },
  blue:   { border: 'border-blue-500/20',   bg: 'bg-blue-500/8',   text: 'text-blue-400',   glow: 'hover:shadow-blue-500/10'   },
  emerald:{ border: 'border-emerald-500/20',bg: 'bg-emerald-500/8',text: 'text-emerald-400',glow: 'hover:shadow-emerald-500/10'},
  orange: { border: 'border-orange-500/20', bg: 'bg-orange-500/8', text: 'text-orange-400', glow: 'hover:shadow-orange-500/10' },
}

export default function TrustSection() {
  return (
    <section id="resources" className="py-24 lg:py-32 relative overflow-hidden bg-gray-950">
      <div className="line-grid absolute inset-0 pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-125 h-125 bg-indigo-500/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-500/6 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-xs font-semibold text-indigo-300 tracking-wide uppercase">Why Parivestra</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
            We did the research so{' '}
            <span className="gradient-text">you don't have to</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">
            Parivestra has been helping brands grow through distribution and growth intelligence.
            The Payments Hub applies that same thinking to the payment layer — because it matters just as much.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {pillars.map(p => {
            const c = colorMap[p.color]
            return (
              <div
                key={p.number}
                className={`group bg-gray-900/60 border border-white/8 rounded-2xl p-6 hover:bg-gray-900/90 hover:border-white/14 transition-all duration-300 shadow-lg ${c.glow} hover:shadow-xl`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}>
                    {p.icon}
                  </div>
                  <span className={`text-xs font-mono font-bold ${c.text} opacity-50`}>{p.number}</span>
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-3">{p.desc}</p>
                <p className="text-[11px] text-gray-600 leading-relaxed border-t border-white/5 pt-3">{p.detail}</p>
              </div>
            )
          })}
        </div>

        {/* Stats bar */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/6 rounded-2xl overflow-hidden border border-white/8">
          {[
            { value: '40+',  label: 'Providers Covered',  color: 'text-indigo-400' },
            { value: '150+', label: 'Free Guides',         color: 'text-violet-400' },
            { value: '8',    label: 'Payment Categories',  color: 'text-blue-400'   },
            { value: '₹0',   label: 'Cost to Access',      color: 'text-emerald-400'},
          ].map(stat => (
            <div key={stat.label} className="bg-gray-900/80 px-6 py-8 text-center hover:bg-gray-900 transition-colors duration-200">
              <div className={`text-3xl font-bold ${stat.color} stat-number`}>{stat.value}</div>
              <div className="text-xs text-gray-500 font-medium mt-1.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Footer blurb */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
            Parivestra helps brands grow through distribution, performance marketing, and growth intelligence.{' '}
            <strong className="text-gray-300">The Payments Intelligence Hub</strong> is one part of that — the part about making sure your checkout doesn't undo everything else you're doing right.
          </p>
        </div>
      </div>
    </section>
  )
}
