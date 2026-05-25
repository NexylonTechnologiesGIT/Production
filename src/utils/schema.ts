const SITE_URL  = 'https://www.nexylontechnologies.com'
const SITE_NAME = 'Nexylon Technologies'

export const ORGANIZATION_ID = `${SITE_URL}/#organization`
export const WEBSITE_ID      = `${SITE_URL}/#website`

// ── Stable singleton schemas ──────────────────────────────────────────────────

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type':    'Organization',
  '@id':      ORGANIZATION_ID,
  name:        SITE_NAME,
  legalName:   'Nexylon Technologies, Inc.',
  url:         SITE_URL,
  logo: {
    '@type':  'ImageObject',
    url:      `${SITE_URL}/logo.png`,
    width:     200,
    height:    60,
  },
  description:
    'Nexylon Technologies is a multinational enterprise software company delivering AI, cloud, and digital transformation solutions to global organizations.',
  foundingDate:      '1999',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 5000 },
  areaServed:        'Worldwide',
  knowsAbout: [
    'Enterprise Software Development',
    'Artificial Intelligence',
    'Machine Learning',
    'Cloud Architecture',
    'Cybersecurity',
    'Digital Transformation',
    'IT Consulting',
    'Data Analytics',
  ],
  contactPoint: [
    {
      '@type':            'ContactPoint',
      telephone:          '+1-800-Nexylon',
      contactType:        'customer service',
      availableLanguage:  ['English'],
      contactOption:      'TollFree',
      areaServed:         'US',
    },
    {
      '@type':           'ContactPoint',
      email:             'enterprise@nexylontechnologies.com',
      contactType:       'sales',
      availableLanguage: ['English'],
    },
  ],
  address: {
    '@type':           'PostalAddress',
    streetAddress:     '350 Market Street, Suite 2400',
    addressLocality:   'San Francisco',
    addressRegion:     'CA',
    postalCode:        '94105',
    addressCountry:    'US',
  },
  sameAs: [
    'https://www.linkedin.com/company/Nexylon-Technologies',
    'https://twitter.com/nexylonsw',
    'https://www.youtube.com/@nexylontechnologies',
    'https://github.com/Nexylon-Technologies',
  ],
}

export const webSiteSchema = {
  '@context':   'https://schema.org',
  '@type':      'WebSite',
  '@id':        WEBSITE_ID,
  url:          SITE_URL,
  name:         SITE_NAME,
  description:  'Enterprise AI, Cloud & Digital Transformation solutions for global organizations.',
  publisher:    { '@id': ORGANIZATION_ID },
  potentialAction: {
    '@type':  'SearchAction',
    target: {
      '@type':      'EntryPoint',
      urlTemplate:  `${SITE_URL}/blog?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

// ── Factory functions ─────────────────────────────────────────────────────────

export function breadcrumbSchema(crumbs: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type':    'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type':   'ListItem',
      position:  i + 1,
      name:      crumb.name,
      item:      crumb.url,
    })),
  }
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type':    'FAQPage',
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question',
      name:    question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }
}

export function articleSchema(article: {
  headline:      string
  description:   string
  url:           string
  datePublished: string
  dateModified?: string
  author:        string
  image?:        string
}) {
  return {
    '@context':     'https://schema.org',
    '@type':        'BlogPosting',
    headline:       article.headline,
    description:    article.description,
    url:            article.url,
    datePublished:  article.datePublished,
    dateModified:   article.dateModified ?? article.datePublished,
    author:         { '@type': 'Person', name: article.author },
    publisher:      { '@id': ORGANIZATION_ID },
    image: {
      '@type': 'ImageObject',
      url:     article.image ?? `${SITE_URL}/og-image.jpg`,
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': article.url },
    isPartOf:         { '@id': WEBSITE_ID },
  }
}

export function serviceSchema(service: {
  name:        string
  description: string
  url:         string
  category:    string
}) {
  return {
    '@context':    'https://schema.org',
    '@type':       'Service',
    name:          service.name,
    description:   service.description,
    url:           service.url,
    serviceType:   service.category,
    provider:      { '@id': ORGANIZATION_ID },
    areaServed:    'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name:    `${service.name} Services`,
    },
  }
}

export function webPageSchema(page: {
  name:         string
  description:  string
  url:          string
  breadcrumbs?: { name: string; url: string }[]
}) {
  return {
    '@context':  'https://schema.org',
    '@type':     'WebPage',
    name:        page.name,
    description: page.description,
    url:         page.url,
    isPartOf:    { '@id': WEBSITE_ID },
    ...(page.breadcrumbs && { breadcrumb: breadcrumbSchema(page.breadcrumbs) }),
  }
}

// ── Item list (services / solutions / industries overview pages) ──────────────

export function itemListSchema(
  items: { name: string; url: string; description?: string }[],
  listName: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type':    'ItemList',
    name:        listName,
    itemListElement: items.map((item, i) => ({
      '@type':   'ListItem',
      position:  i + 1,
      name:      item.name,
      url:       item.url,
      ...(item.description && { description: item.description }),
    })),
  }
}

// ── Software product / SaaS solution ─────────────────────────────────────────

export function softwareApplicationSchema(app: {
  name:        string
  description: string
  url:         string
  category:    string
}) {
  return {
    '@context':          'https://schema.org',
    '@type':             'SoftwareApplication',
    name:                 app.name,
    description:          app.description,
    url:                  app.url,
    applicationCategory:  app.category,
    operatingSystem:      'Web Browser',
    offers: {
      '@type':        'Offer',
      price:          '0',
      priceCurrency:  'USD',
      description:    'Contact for enterprise pricing',
    },
    provider:   { '@id': ORGANIZATION_ID },
    isPartOf:   { '@id': WEBSITE_ID },
  }
}

// ── Person (team / author) ────────────────────────────────────────────────────

export function personSchema(person: {
  name:      string
  jobTitle:  string
  bio:       string
  linkedin?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type':    'Person',
    name:        person.name,
    jobTitle:    person.jobTitle,
    description: person.bio,
    worksFor:    { '@id': ORGANIZATION_ID },
    ...(person.linkedin && { sameAs: [person.linkedin] }),
  }
}

// ── Job posting ───────────────────────────────────────────────────────────────

export function jobPostingSchema(job: {
  title:          string
  description:    string
  department:     string
  location:       string
  employmentType: string
  datePosted:     string
}) {
  const isUK         = job.location.toLowerCase().includes('uk') || job.location.toLowerCase().includes('london')
  const isRemote     = job.location.toLowerCase().includes('remote')
  const cityPart     = job.location.split(/[,/]/)[0].trim()

  return {
    '@context': 'https://schema.org',
    '@type':    'JobPosting',
    title:       job.title,
    description: job.description,
    datePosted:  job.datePosted,
    employmentType: job.employmentType === 'Full-time' ? 'FULL_TIME' : 'PART_TIME',
    hiringOrganization: { '@id': ORGANIZATION_ID },
    jobLocation: isRemote
      ? { '@type': 'VirtualLocation' }
      : {
          '@type': 'Place',
          address: {
            '@type':          'PostalAddress',
            addressLocality:   cityPart,
            addressCountry:    isUK ? 'GB' : 'US',
          },
        },
    baseSalary: {
      '@type':    'MonetaryAmount',
      currency:   isUK ? 'GBP' : 'USD',
      value: {
        '@type':     'QuantitativeValue',
        unitText:    'YEAR',
        description: 'Competitive — contact for details',
      },
    },
  }
}

// ── Blog / Blog list page ─────────────────────────────────────────────────────

export function blogSchema(posts: { headline: string; url: string; datePublished: string; author: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type':    'Blog',
    name:       'Nexylon Technologies Insights',
    description: 'Expert analysis, practitioner guides, and thought leadership on enterprise AI, cloud, cybersecurity, and digital transformation.',
    url:         `${SITE_URL}/blog`,
    publisher:   { '@id': ORGANIZATION_ID },
    blogPost:    posts.map(p => ({
      '@type':       'BlogPosting',
      headline:       p.headline,
      url:            p.url,
      datePublished:  p.datePublished,
      author:         { '@type': 'Person', name: p.author },
      publisher:      { '@id': ORGANIZATION_ID },
    })),
  }
}

// ── Contact page ──────────────────────────────────────────────────────────────

export function contactPageSchema() {
  return {
    '@context':  'https://schema.org',
    '@type':     'ContactPage',
    name:        'Contact Nexylon Technologies',
    description: 'Get in touch with Nexylon Technologies for enterprise technology inquiries, partnership discussions, or to speak with a solution advisor.',
    url:         `${SITE_URL}/contact`,
    isPartOf:    { '@id': WEBSITE_ID },
    mainEntity:  { '@id': ORGANIZATION_ID },
  }
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type':    ['ProfessionalService', 'LocalBusiness'],
    '@id':      `${SITE_URL}/#local-business`,
    name:       SITE_NAME,
    image:      `${SITE_URL}/og-image.jpg`,
    url:        SITE_URL,
    telephone:  '+1-800-Nexylon',
    email:      'enterprise@nexylontechnologies.com',
    priceRange: '$$$$',
    address: {
      '@type':         'PostalAddress',
      streetAddress:   '350 Market Street, Suite 2400',
      addressLocality: 'San Francisco',
      addressRegion:   'CA',
      postalCode:      '94105',
      addressCountry:  'US',
    },
    geo: {
      '@type':    'GeoCoordinates',
      latitude:   37.7952,
      longitude: -122.3974,
    },
    openingHoursSpecification: {
      '@type':      'OpeningHoursSpecification',
      dayOfWeek:    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens:        '08:00',
      closes:       '20:00',
    },
    sameAs: ['https://www.linkedin.com/company/Nexylon-Technologies'],
  }
}