import type { SEOProps } from '@/types'

const SITE_NAME = 'Nexylon Technologies'
const SITE_URL  = 'https://www.nexylontechnologies.com'
const DEFAULT_OG = `${SITE_URL}/og-image.jpg`

export default function SEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG,
  structuredData,
  keywords,
  noIndex = false,
  type = 'website',
  author,
  datePublished,
  dateModified,
}: SEOProps) {
  const fullTitle    = `${title} | ${SITE_NAME}`
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL
  const schemas      = Array.isArray(structuredData)
    ? structuredData
    : structuredData
      ? [structuredData]
      : []

  return (
    <>
      {/* Core */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta
        name="robots"
        content={
          noIndex
            ? 'noindex,nofollow'
            : 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1'
        }
      />
      <link rel="canonical" href={canonicalUrl} />
      {author && <meta name="author" content={author} />}

      {/* Open Graph */}
      <meta property="og:type"         content={type} />
      <meta property="og:locale"       content="en_US" />
      <meta property="og:site_name"    content={SITE_NAME} />
      <meta property="og:title"        content={fullTitle} />
      <meta property="og:description"  content={description} />
      <meta property="og:url"          content={canonicalUrl} />
      <meta property="og:image"        content={ogImage} />
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type"   content="image/jpeg" />
      <meta property="og:image:alt"    content={`${SITE_NAME} – ${title}`} />

      {/* Article-specific Open Graph */}
      {type === 'article' && datePublished && (
        <meta property="article:published_time" content={datePublished} />
      )}
      {type === 'article' && dateModified && (
        <meta property="article:modified_time" content={dateModified} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Twitter / X */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:site"        content="@nexylonsw" />
      <meta name="twitter:creator"     content="@nexylonsw" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={ogImage} />
      <meta name="twitter:image:alt"   content={`${SITE_NAME} – ${title}`} />

      {/* JSON-LD — one <script> per schema object */}
      {schemas.map((schema, i) => (
        <script key={`ld-${i}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </>
  )
}
