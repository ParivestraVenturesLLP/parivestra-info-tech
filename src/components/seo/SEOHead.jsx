import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://blog.parivestra.com'
const DEFAULT_IMAGE = `${BASE_URL}/og-default.png`
const SITE_NAME = 'Parivestra Blog — Payments & Fintech Intelligence'

export default function SEOHead({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  article = null,
  breadcrumbs = [],
  schema = null,
  keywords = '',
  noindex = false,
}) {
  const fullTitle = title
    ? `${title} | Parivestra Blog`
    : 'Payment Gateway Comparison & Fintech Guides — Parivestra Blog'

  const fullCanonical = canonical
    ? `${BASE_URL}${canonical}`
    : `${BASE_URL}/`

  const defaultKeywords = 'payment gateway, payment processing, payment integration, payment solutions, fintech, merchant services, ecommerce payments, payment APIs, UPI payments, subscription billing, cross-border payments, checkout optimization'

  const breadcrumbSchema = breadcrumbs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: crumb.name,
          item: `${BASE_URL}${crumb.path}`,
        })),
      }
    : null

  const articleSchema = article
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title || title,
        description: article.description || description,
        author: {
          '@type': 'Organization',
          name: 'Parivestra',
          url: 'https://parivestra.com',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Parivestra',
          logo: {
            '@type': 'ImageObject',
            url: `${BASE_URL}/favicon.svg`,
          },
        },
        datePublished: article.datePublished || '2026-01-01',
        dateModified: article.dateModified || '2026-06-16',
        mainEntityOfPage: { '@type': 'WebPage', '@id': fullCanonical },
        image: ogImage,
        keywords: keywords || defaultKeywords,
        articleSection: article.section || 'Fintech & Payments',
        inLanguage: 'en-IN',
        isPartOf: {
          '@type': 'Blog',
          '@id': `${BASE_URL}/#blog`,
        },
      }
    : null

  return (
    <Helmet>
      <html lang="en-IN" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'} />
      <meta name="author" content="Parivestra" />
      <link rel="canonical" href={fullCanonical} />

      {/* Hreflang */}
      <link rel="alternate" hreflang="en" href={fullCanonical} />
      <link rel="alternate" hreflang="en-IN" href={fullCanonical} />
      <link rel="alternate" hreflang="x-default" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@parivestra" />
      <meta name="twitter:creator" content="@parivestra" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={fullTitle} />

      {/* Article-specific OG tags */}
      {article && <meta property="article:published_time" content={article.datePublished || '2026-01-01'} />}
      {article && <meta property="article:modified_time" content={article.dateModified || '2026-06-16'} />}
      {article && <meta property="article:author" content="https://parivestra.com" />}
      {article && <meta property="article:section" content={article.section || 'Fintech & Payments'} />}

      {/* Speakable */}
      <meta name="speakable-selector" content="h1, h2, .speakable, .ai-answer, .key-takeaway" />

      {/* JSON-LD: Breadcrumbs */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {/* JSON-LD: Article */}
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}

      {/* JSON-LD: Custom schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  )
}
