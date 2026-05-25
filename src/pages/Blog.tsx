import { motion } from 'framer-motion'
import { Clock, ArrowRight, User, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '@/components/seo/SEO'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import CTASection from '@/components/sections/CTASection'
import { BLOG_POSTS } from '@/data'
import { blogSchema, breadcrumbSchema, itemListSchema, webPageSchema } from '@/utils/schema'

const SITE_URL = 'https://www.nexylontechnologies.com'

function toISO(humanDate: string): string {
  const d = new Date(humanDate)
  return isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString()
}

const categoryColors: Record<string, 'blue' | 'sky' | 'cyan' | 'green' | 'amber'> = {
  'AI & Machine Learning': 'blue',
  'Cloud & Infrastructure': 'cyan',
  'Cybersecurity': 'cyan',
  'Digital Transformation': 'amber',
  'Data & Analytics': 'green',
  'Manufacturing & IoT': 'neutral' as never,
}

const blogSchemas = [
  webPageSchema({
    name:        'Enterprise Technology Insights & Blog – Nexylon Technologies',
    description: 'Expert analysis, practical guides, and thought leadership on AI, cloud, cybersecurity, digital transformation, and enterprise software from Nexylon Technologies\'s practitioners.',
    url:         `${SITE_URL}/blog`,
    breadcrumbs: [
      { name: 'Home', url: SITE_URL },
      { name: 'Blog', url: `${SITE_URL}/blog` },
    ],
  }),
  breadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Blog', url: `${SITE_URL}/blog` },
  ]),
  blogSchema(
    BLOG_POSTS.map(p => ({
      headline:      p.title,
      url:           `${SITE_URL}/blog/${p.slug}`,
      datePublished: toISO(p.date),
      author:        p.author,
    })),
  ),
  itemListSchema(
    BLOG_POSTS.map(p => ({
      name:        p.title,
      url:         `${SITE_URL}/blog/${p.slug}`,
      description: p.excerpt,
    })),
    'Nexylon Technologies Insights Articles',
  ),
]

export default function Blog() {
  const [featured, ...rest] = BLOG_POSTS

  return (
    <>
      <SEO
        title="Enterprise Technology Insights & Blog"
        description="Expert analysis, practical guides, and thought leadership on AI, cloud, cybersecurity, digital transformation, and enterprise software from Nexylon Technologies's practitioners."
        canonical="/blog"
        keywords="enterprise technology blog, AI insights, cloud best practices, cybersecurity blog, digital transformation articles, enterprise software articles, IT strategy insights"
        structuredData={blogSchemas}
      />

      {/* Page hero */}
      <section className="py-24 lg:py-32 bg-hero-gradient relative overflow-hidden" aria-label="Blog hero">
        <div className="mesh-blob w-96 h-96 top-0 right-0 bg-blue-700/15" aria-hidden />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl"
          >
            <span className="badge bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">Insights</span>
            <h1 className="font-display font-black text-5xl lg:text-6xl text-white leading-tight tracking-tight mt-3">
              Enterprise Technology <span className="gradient-text">Insights</span>
            </h1>
            <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl">
              Expert analysis, practitioner guides, and thought leadership from Nexylon'steam of 5,000+
              enterprise technology specialists. Stay ahead of the curve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-12 bg-brand-950" aria-label="Featured article">
        <div className="container-wide">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 border border-brand-700 p-8 lg:p-12 hover:border-brand-600 transition-all duration-300 group"
            aria-labelledby="featured-post-title"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant={categoryColors[featured.category] ?? 'blue'}>{featured.category}</Badge>
                  <span className="text-xs text-slate-500">Featured</span>
                </div>
                <h2 id="featured-post-title" className="font-display font-black text-2xl lg:text-3xl text-white leading-tight">
                  {featured.title}
                </h2>
                <p className="mt-4 text-slate-400 leading-relaxed">{featured.excerpt}</p>
                <div className="mt-5 flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <User size={12} aria-hidden />{featured.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} aria-hidden />{featured.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} aria-hidden />{featured.readTime}
                  </span>
                </div>
                <Link
                  to={`/blog/${featured.slug}`}
                  className="mt-6 btn-primary text-sm"
                  aria-label={`Read article: ${featured.title}`}
                >
                  Read Article
                  <ArrowRight size={15} aria-hidden />
                </Link>
              </div>
              <div className="lg:flex items-center justify-center hidden" aria-hidden>
                <div className="w-full aspect-video rounded-xl bg-gradient-to-br from-blue-700/20 to-cyan-600/20 border border-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-black font-display gradient-text leading-none">AI</div>
                    <div className="text-slate-400 text-sm mt-2">Enterprise Report 2025</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Article grid */}
      <section className="section-padding bg-brand-950" aria-label="All articles">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Latest Articles"
            title={<>Knowledge for <span className="gradient-text">Enterprise Leaders</span></>}
            description="Actionable insights from our practitioners across AI, cloud, security, and digital transformation."
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-6 hover:border-white/20 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 flex flex-col group"
                aria-labelledby={`post-${post.id}-title`}
              >
                <Badge variant={categoryColors[post.category] ?? 'blue'} className="w-fit mb-4">
                  {post.category}
                </Badge>
                <h3 id={`post-${post.id}-title`} className="font-display font-bold text-base text-white leading-snug mb-3 flex-1">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/8">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={11} aria-hidden />{post.readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 group/link"
                    aria-label={`Read: ${post.title}`}
                  >
                    Read
                    <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" aria-hidden />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Subscribe to Our Insights Newsletter"
        description="Get the latest enterprise technology research, practitioner guides, and event invitations delivered directly to your inbox — no noise, just value."
        primaryLabel="Subscribe Now"
        secondaryLabel="View All Resources"
      />
    </>
  )
}
