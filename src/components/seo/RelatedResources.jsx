import { Link } from 'react-router-dom'

const topicLinks = {
  'payment-gateway':    { label: 'Payment Gateway',    path: '/topics/payment-gateway' },
  'fintech':            { label: 'Fintech',            path: '/topics/fintech' },
  'payment-processing': { label: 'Payment Processing', path: '/topics/payment-processing' },
  'payment-api':        { label: 'Payment APIs',       path: '/topics/payment-api' },
  'ecommerce-payments': { label: 'Ecommerce Payments', path: '/topics/ecommerce-payments' },
  'payment-integration':{ label: 'Payment Integration',path: '/topics/payment-integration' },
  'statistics':         { label: 'Statistics',         path: '/statistics' },
  'research':           { label: 'Research',           path: '/research' },
  'reports':            { label: 'Reports',            path: '/reports' },
}

export default function RelatedResources({ topics = [], articles = [] }) {
  return (
    <aside aria-label="Related resources" className="bg-gray-900/60 border border-white/8 rounded-xl p-5">
      <h3 className="text-sm font-bold text-gray-200 mb-4 flex items-center gap-2">
        <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
        Related Resources
      </h3>

      {topics.length > 0 && (
        <div className="mb-4">
          <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-wide mb-2">Topic Hubs</p>
          <div className="flex flex-wrap gap-2">
            {topics.map(t => {
              const link = topicLinks[t]
              if (!link) return null
              return (
                <Link
                  key={t}
                  to={link.path}
                  className="inline-flex text-xs font-semibold px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 hover:bg-indigo-500/20 hover:text-indigo-200 transition-colors"
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}

      {articles.length > 0 && (
        <div>
          <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-wide mb-2">Related Articles</p>
          <ul className="space-y-2">
            {articles.map((art, i) => (
              <li key={i}>
                <a href={art.href || '#'} className="flex items-start gap-2 group" rel="noopener">
                  <svg className="w-3 h-3 text-indigo-500 mt-0.5 shrink-0 group-hover:text-indigo-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors leading-snug">
                    {art.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  )
}
