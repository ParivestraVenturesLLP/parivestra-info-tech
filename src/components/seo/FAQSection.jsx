import { useState } from 'react'

export default function FAQSection({ faqs = [], title = 'Frequently Asked Questions' }) {
  const [open, setOpen] = useState(0)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <section aria-label={title} className="py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
          <span className="text-xs font-semibold text-indigo-700 tracking-wide uppercase">FAQ</span>
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">{title}</h2>
      </div>

      <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`border rounded-xl overflow-hidden transition-all duration-200 ${
              open === i ? 'border-indigo-200 bg-indigo-50/40' : 'border-gray-100 bg-white hover:border-gray-200'
            }`}
            itemScope
            itemType="https://schema.org/Question"
            itemProp="mainEntity"
          >
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full text-left px-5 py-4 flex items-start justify-between gap-4"
              aria-expanded={open === i}
            >
              <span className="text-sm font-semibold text-gray-900 leading-snug" itemProp="name">
                {faq.q}
              </span>
              <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-200 ${
                open === i ? 'bg-indigo-600 border-indigo-600' : 'border-gray-200'
              }`}>
                <svg className={`w-3 h-3 transition-transform duration-200 ${open === i ? 'rotate-45 text-white' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </button>
            {open === i && (
              <div
                className="px-5 pb-5"
                itemScope
                itemType="https://schema.org/Answer"
                itemProp="acceptedAnswer"
              >
                <p className="text-sm text-gray-600 leading-relaxed speakable" itemProp="text">
                  {faq.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
