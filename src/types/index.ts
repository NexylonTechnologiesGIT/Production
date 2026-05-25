export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface Service {
  id: string
  icon: string
  title: string
  description: string
  features: string[]
  href: string
}

export interface Solution {
  id: string
  title: string
  tagline: string
  description: string
  benefits: string[]
  href: string
}

export interface Industry {
  id: string
  icon: string
  title: string
  description: string
  challenges: string[]
  href: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  rating: number
}

export interface Stat {
  value: string
  suffix: string
  label: string
  description: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  linkedin: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  author: string
}

export interface Job {
  id: string
  title: string
  department: string
  location: string
  type: string
  level: string
  description: string
  requirements: string[]
}

export interface CaseStudy {
  id: string
  company: string
  industry: string
  challenge: string
  result: string
  metric: string
  metricLabel: string
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface SEOProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  /** Pass a single schema object or an array for multiple JSON-LD blocks */
  structuredData?: object | object[]
  keywords?: string
  noIndex?: boolean
  /** og:type — defaults to 'website'; use 'article' for blog posts */
  type?: 'website' | 'article'
  /** Article author name */
  author?: string
  /** ISO 8601 date string for article schema */
  datePublished?: string
  /** ISO 8601 date string for article schema */
  dateModified?: string
}
