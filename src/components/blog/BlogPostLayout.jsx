import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'
import SEOHead from '../seo/SEOHead'
import FAQSection from '../seo/FAQSection'
import KeyTakeaways from '../seo/KeyTakeaways'
import AIAnswerBlock from '../seo/AIAnswerBlock'
import RelatedResources from '../seo/RelatedResources'

export { FAQSection, KeyTakeaways, AIAnswerBlock, RelatedResources }

export function BlogMeta({ tag, tagColor = 'text-indigo-400 bg-indigo-500/10 border-indigo-500/25', readTime, category, date }) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-6">
      {tag && (
        <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${tagColor}`}>{tag}</span>
      )}
      {category && (
        <span className="text-xs text-gray-500 font-medium">{category}</span>
      )}
      {readTime && (
        <span className="text-xs text-gray-500">{readTime} read</span>
      )}
      {date && (
        <time className="text-xs text-gray-500" dateTime={date}>
          {new Date(date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
        </time>
      )}
    </div>
  )
}

export function H2({ children }) {
  return <h2 className="text-2xl font-bold text-white mt-10 mb-4 tracking-tight">{children}</h2>
}

export function H3({ children }) {
  return <h3 className="text-lg font-semibold text-gray-100 mt-6 mb-3">{children}</h3>
}

export function P({ children }) {
  return <p className="text-sm text-gray-300 leading-relaxed mb-4">{children}</p>
}

export function Ul({ items }) {
  return (
    <ul className="space-y-2 mb-6">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2" />
          <span className="text-sm text-gray-300 leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function CalloutBox({ title, children, color = 'indigo' }) {
  const c = {
    indigo:  'bg-indigo-500/10 border-indigo-500/30 text-indigo-100',
    emerald: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-100',
    amber:   'bg-amber-500/10 border-amber-500/30 text-amber-100',
    rose:    'bg-rose-500/10 border-rose-500/30 text-rose-100',
  }[color] || 'bg-indigo-500/10 border-indigo-500/30 text-indigo-100'

  return (
    <div className={`border rounded-xl p-5 my-6 ${c}`}>
      {title && <p className="text-sm font-bold mb-2 text-white">{title}</p>}
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  )
}

export function CompareTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-sm border border-white/10 rounded-xl overflow-hidden">
        <thead>
          <tr className="bg-white/5">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-left text-xs font-semibold text-gray-300">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/6">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-white/3 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-3 text-sm ${j === 0 ? 'font-semibold text-gray-100' : 'text-gray-400'}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function Verdict({ title, children, color = 'indigo' }) {
  const colors = {
    indigo:  { bg: 'bg-indigo-500/15 border-indigo-500/30', text: 'text-white', sub: 'text-indigo-200', label: 'text-indigo-400' },
    emerald: { bg: 'bg-emerald-500/15 border-emerald-500/30', text: 'text-white', sub: 'text-emerald-200', label: 'text-emerald-400' },
    violet:  { bg: 'bg-violet-500/15 border-violet-500/30', text: 'text-white', sub: 'text-violet-200', label: 'text-violet-400' },
  }[color] || { bg: 'bg-indigo-500/15 border-indigo-500/30', text: 'text-white', sub: 'text-indigo-200', label: 'text-indigo-400' }

  return (
    <div className={`border rounded-2xl p-6 my-8 ${colors.bg}`}>
      <p className={`text-xs font-bold uppercase tracking-wide ${colors.label} mb-2`}>Our Verdict</p>
      <p className={`text-base font-bold ${colors.text} mb-2`}>{title}</p>
      <p className={`text-sm ${colors.sub} leading-relaxed`}>{children}</p>
    </div>
  )
}

export default function BlogPostLayout({ seo, meta, sidebar = {}, faqs = null, children }) {
  return (
    <>
      <SEOHead
        {...seo}
        ogType="article"
        faqs={faqs}
        article={{
          title: seo.title,
          description: seo.description,
          datePublished: meta?.date || '2026-01-01',
          dateModified: meta?.dateModified || '2026-06-29',
          section: meta?.category || 'Payments & Fintech',
        }}
      />

      <Navbar />

      <main className="bg-gray-950 min-h-screen pt-20">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="border-b border-white/8 bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 py-3">
            <ol className="flex items-center gap-2 text-xs text-gray-500 flex-wrap">
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link></li>
              <li className="text-gray-700">/</li>
              <li><Link to="/blog" className="hover:text-indigo-400 transition-colors">Blog</Link></li>
              {meta?.category && (
                <>
                  <li className="text-gray-700">/</li>
                  <li className="text-gray-400">{meta.category}</li>
                </>
              )}
            </ol>
          </div>
        </nav>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Article body */}
            <article className="lg:col-span-2" itemScope itemType="https://schema.org/Article">
              <BlogMeta {...meta} />
              <meta itemProp="datePublished" content={meta?.date || '2026-01-01'} />
              <meta itemProp="author" content="Parivestra" />
              {children}
            </article>

            {/* Sidebar */}
            <aside className="space-y-5">
              {/* Article info */}
              <div className="bg-gray-900/60 border border-white/8 rounded-xl p-5">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">About This Guide</p>
                <div className="space-y-2 text-xs text-gray-500">
                  {meta?.readTime && <p>Read time: <span className="font-semibold text-gray-300">{meta.readTime}</span></p>}
                  {meta?.category && <p>Category: <span className="font-semibold text-gray-300">{meta.category}</span></p>}
                  <p>Publisher: <span className="font-semibold text-gray-300">Parivestra</span></p>
                  <p>Last updated: <span className="font-semibold text-gray-300">June 2026</span></p>
                  <p className="pt-2 text-[10px] text-gray-600 leading-relaxed border-t border-white/6 mt-2">
                    Independent research — no vendor affiliation, no affiliate links, no sponsored rankings.
                  </p>
                </div>
              </div>

              {sidebar.resources && (
                <RelatedResources
                  topics={sidebar.resources.topics || []}
                  articles={sidebar.resources.articles || []}
                />
              )}

              {sidebar.stats && (
                <div className="bg-gray-900/60 border border-white/8 rounded-xl p-5">
                  <p className="text-xs font-semibold text-gray-500 mb-4 uppercase tracking-wide">{sidebar.stats.label}</p>
                  <div className="space-y-4">
                    {sidebar.stats.items.map((s, i) => (
                      <div key={i} className="border-b border-white/6 pb-3 last:border-0 last:pb-0">
                        <p className="text-xl font-bold text-white">{s.value}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{s.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <Link
                to="/blog"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-white/5 border border-white/10 text-gray-300 text-sm font-semibold rounded-xl hover:bg-white/10 hover:text-white transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                All Articles
              </Link>

              <Link
                to="/"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-linear-to-r from-indigo-500 to-violet-600 text-white text-sm font-semibold rounded-xl hover:from-indigo-400 hover:to-violet-500 transition-all duration-200 shadow-lg shadow-indigo-500/20"
              >
                Payments Hub
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
