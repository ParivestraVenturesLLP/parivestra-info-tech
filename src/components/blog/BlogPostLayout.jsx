import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'
import SEOHead from '../seo/SEOHead'
import FAQSection from '../seo/FAQSection'
import KeyTakeaways from '../seo/KeyTakeaways'
import AIAnswerBlock from '../seo/AIAnswerBlock'
import RelatedResources from '../seo/RelatedResources'

export { FAQSection, KeyTakeaways, AIAnswerBlock, RelatedResources }

export function BlogMeta({ tag, tagColor = 'bg-indigo-100 text-indigo-700', readTime, category, date }) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-6">
      {tag && (
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tagColor}`}>{tag}</span>
      )}
      {category && (
        <span className="text-xs text-gray-400 font-medium">{category}</span>
      )}
      {readTime && (
        <span className="text-xs text-gray-400">{readTime} read</span>
      )}
      {date && (
        <time className="text-xs text-gray-400" dateTime={date}>
          {new Date(date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
        </time>
      )}
    </div>
  )
}

export function H2({ children }) {
  return <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 tracking-tight">{children}</h2>
}

export function H3({ children }) {
  return <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">{children}</h3>
}

export function P({ children }) {
  return <p className="text-sm text-gray-600 leading-relaxed mb-4">{children}</p>
}

export function Ul({ items }) {
  return (
    <ul className="space-y-2 mb-6">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2" />
          <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function CalloutBox({ title, children, color = 'indigo' }) {
  const c = {
    indigo: 'bg-indigo-50 border-indigo-200 text-indigo-900',
    emerald: 'bg-emerald-50 border-emerald-200 text-emerald-900',
    amber: 'bg-amber-50 border-amber-200 text-amber-900',
    rose: 'bg-rose-50 border-rose-200 text-rose-900',
  }[color] || 'bg-indigo-50 border-indigo-200 text-indigo-900'

  return (
    <div className={`border rounded-xl p-5 my-6 ${c}`}>
      {title && <p className="text-sm font-bold mb-2">{title}</p>}
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  )
}

export function CompareTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-sm border border-gray-100 rounded-xl overflow-hidden">
        <thead>
          <tr className="bg-gray-50">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-left text-xs font-semibold text-gray-600">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-gray-50 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-3 text-sm ${j === 0 ? 'font-semibold text-gray-800' : 'text-gray-600'}`}>
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
    indigo: { bg: 'bg-indigo-600', text: 'text-white', sub: 'text-indigo-100' },
    emerald: { bg: 'bg-emerald-600', text: 'text-white', sub: 'text-emerald-100' },
    violet: { bg: 'bg-violet-600', text: 'text-white', sub: 'text-violet-100' },
  }[color] || { bg: 'bg-indigo-600', text: 'text-white', sub: 'text-indigo-100' }

  return (
    <div className={`${colors.bg} rounded-2xl p-6 my-8`}>
      <p className={`text-xs font-bold uppercase tracking-wide ${colors.sub} mb-2`}>Our Verdict</p>
      <p className={`text-base font-bold ${colors.text} mb-2`}>{title}</p>
      <p className={`text-sm ${colors.sub} leading-relaxed`}>{children}</p>
    </div>
  )
}

export default function BlogPostLayout({
  seo,
  meta,
  sidebar = {},
  children,
}) {
  return (
    <>
      <SEOHead
        {...seo}
        ogType="article"
        article={{
          title: seo.title,
          description: seo.description,
          datePublished: meta?.date || '2026-01-01',
          dateModified: '2026-06-16',
          section: meta?.category || 'Payments & Fintech',
        }}
      />

      <Navbar />

      <main className="pt-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 py-3">
            <ol className="flex items-center gap-2 text-xs text-gray-500 flex-wrap">
              <li><Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link></li>
              <li className="text-gray-300">/</li>
              <li><Link to="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link></li>
              {meta?.category && (
                <>
                  <li className="text-gray-300">/</li>
                  <li className="text-gray-500">{meta.category}</li>
                </>
              )}
            </ol>
          </div>
        </nav>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Article body */}
            <article
              className="lg:col-span-2"
              itemScope
              itemType="https://schema.org/Article"
            >
              <BlogMeta {...meta} />
              <meta itemProp="datePublished" content={meta?.date || '2026-01-01'} />
              <meta itemProp="author" content="Parivestra" />

              {children}
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Article info card */}
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <p className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-3">About This Guide</p>
                <div className="space-y-2 text-xs text-gray-500">
                  {meta?.readTime && <p>Read time: <span className="font-semibold text-gray-700">{meta.readTime}</span></p>}
                  {meta?.category && <p>Category: <span className="font-semibold text-gray-700">{meta.category}</span></p>}
                  <p>Publisher: <span className="font-semibold text-gray-700">Parivestra</span></p>
                  <p>Last updated: <span className="font-semibold text-gray-700">June 2026</span></p>
                  <p className="pt-2 text-[10px] text-gray-400 leading-relaxed">
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
                <div className="bg-gray-900 rounded-xl p-5 text-white">
                  <p className="text-xs font-semibold text-gray-400 mb-3">{sidebar.stats.label}</p>
                  <div className="space-y-3">
                    {sidebar.stats.items.map((s, i) => (
                      <div key={i}>
                        <p className="text-xl font-bold">{s.value}</p>
                        <p className="text-xs text-gray-400">{s.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <Link
                to="/blog"
                className="block text-center w-full py-3 px-4 bg-white border border-gray-200 text-gray-700 text-sm font-semibold rounded-xl hover:bg-gray-50 transition-colors"
              >
                ← All Articles
              </Link>

              <Link
                to="/"
                className="block text-center w-full py-3 px-4 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                Payments Hub →
              </Link>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
