const pillars = [
  {
    number: '01',
    icon: '📖',
    title: 'We Actually Read the Docs',
    desc: 'We go through the actual API docs, pricing pages, changelogs, and developer forums — not the marketing landing pages. That\'s where the real story is.',
    detail: 'No vendor briefings, no PR packages. Just the actual product, the actual pricing, and what real users say about it.',
  },
  {
    number: '02',
    icon: '💸',
    title: 'We Care About Your Bottom Line',
    desc: 'Every guide we write asks one question first: what does this actually cost a real business? Not a hypothetical one. Yours.',
    detail: 'If a guide doesn\'t tell you what a decision saves or costs, it\'s not useful. We don\'t write content for word count.',
  },
  {
    number: '03',
    icon: '🧑‍💼',
    title: 'Written for Founders, Not Consultants',
    desc: 'We don\'t write for audiences who already know everything. We write for people who are running a business and need a clear answer fast.',
    detail: 'Technical depth when it matters, plain language when it doesn\'t. You\'ll always walk away knowing what to do next.',
  },
  {
    number: '04',
    icon: '✅',
    title: 'Clear Verdicts, Not Just Lists',
    desc: 'Anyone can list 10 payment gateways with a feature table. We tell you which one to pick and why — given your business type, market, and stage.',
    detail: 'If the answer is "it depends," we tell you exactly what it depends on and walk you through each case.',
  },
  {
    number: '05',
    icon: '📈',
    title: 'Built for Businesses at Every Stage',
    desc: 'From first Shopify sale to scaling D2C brand, the payment questions change as you grow. Our content covers all of it.',
    detail: 'We don\'t just cover enterprise. We cover what matters when you\'re doing ₹5L/month as much as ₹5Cr/month.',
  },
]

export default function TrustSection() {
  return (
    <section id="resources" className="py-24 lg:py-32 relative overflow-hidden bg-gray-900">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-xs font-semibold text-gray-300 tracking-wide uppercase">Why Parivestra</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
            We did the research so{' '}
            <span className="gradient-text">you don't have to</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">
            Parivestra has been helping brands grow through distribution and growth intelligence.
            The Payments Hub is that same thinking applied to the payment layer — because it matters just as much.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          {pillars.map(p => (
            <div key={p.number} className="bg-white/5 border border-white/8 rounded-2xl p-6 hover:bg-white/8 hover:border-white/15 transition-all duration-200">
              <div className="flex items-start justify-between mb-4">
                <span className="text-2xl">{p.icon}</span>
                <span className="text-xs font-mono font-bold text-white/20">{p.number}</span>
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-3">{p.desc}</p>
              <p className="text-[11px] text-gray-500 leading-relaxed border-t border-white/5 pt-3">{p.detail}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden border border-white/8">
          {[
            { value: '40+', label: 'Providers Covered' },
            { value: '150+', label: 'Free Guides' },
            { value: '8', label: 'Payment Categories' },
            { value: '₹0', label: 'Cost to Access' },
          ].map(stat => (
            <div key={stat.label} className="bg-gray-900 px-6 py-8 text-center">
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
            Parivestra helps brands grow through distribution, performance marketing, and growth intelligence.{' '}
            <strong className="text-gray-400">The Payments Intelligence Hub</strong> is one part of that — the part about making sure your checkout doesn't undo everything else you're doing right.
          </p>
        </div>
      </div>
    </section>
  )
}
