import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, ArrowRight, ArrowLeft, User, Calendar } from 'lucide-react'
import SEO from '@/components/seo/SEO'
import Badge from '@/components/ui/Badge'
import CTASection from '@/components/sections/CTASection'
import { BLOG_POSTS } from '@/data'
import { articleSchema, breadcrumbSchema } from '@/utils/schema'

const SITE_URL = 'https://www.nexylontechnologies.com'

const categoryColors: Record<string, 'blue' | 'sky' | 'cyan' | 'green' | 'amber'> = {
  'AI & Machine Learning':   'blue',
  'Cloud & Infrastructure':  'cyan',
  'Cybersecurity':            'cyan',
  'Digital Transformation':   'amber',
  'Data & Analytics':         'green',
  'Manufacturing & IoT':      'blue',
}

// Convert human-readable blog date ("May 8, 2025") → ISO 8601
function toISO(humanDate: string): string {
  const d = new Date(humanDate)
  return isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString()
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post      = BLOG_POSTS.find(p => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const postUrl      = `${SITE_URL}/blog/${post.slug}`
  const isoPublished = toISO(post.date)

  // Related: same category first, then fill from others
  const sameCat  = BLOG_POSTS.filter(p => p.id !== post.id && p.category === post.category)
  const others   = BLOG_POSTS.filter(p => p.id !== post.id && p.category !== post.category)
  const suggested = [...sameCat, ...others].slice(0, 3)

  const schemas = [
    articleSchema({
      headline:      post.title,
      description:   post.excerpt,
      url:           postUrl,
      datePublished: isoPublished,
      author:        post.author,
    }),
    breadcrumbSchema([
      { name: 'Home',  url: SITE_URL },
      { name: 'Blog',  url: `${SITE_URL}/blog` },
      { name: post.title, url: postUrl },
    ]),
  ]

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        keywords={`${post.category}, enterprise technology, ${post.author}, Nexylon Technologies insights`}
        type="article"
        author={post.author}
        datePublished={isoPublished}
        structuredData={schemas}
      />

      {/* Article header */}
      <section
        className="py-24 lg:py-32 bg-hero-gradient relative overflow-hidden"
        aria-label="Article header"
      >
        <div className="mesh-blob w-96 h-96 top-0 right-0 bg-blue-700/15" aria-hidden />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl"
          >
            {/* Breadcrumb nav */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-500 mb-6 flex-wrap">
              <Link to="/"    className="hover:text-slate-300 transition-colors">Home</Link>
              <span aria-hidden>/</span>
              <Link to="/blog" className="hover:text-slate-300 transition-colors">Insights</Link>
              <span aria-hidden>/</span>
              <span className="text-slate-400 line-clamp-1">{post.category}</span>
            </nav>

            <Badge variant={categoryColors[post.category] ?? 'blue'} className="mb-4">
              {post.category}
            </Badge>

            <h1 className="font-display font-black text-3xl lg:text-5xl text-white leading-tight tracking-tight mt-3">
              {post.title}
            </h1>
            <p className="mt-5 text-lg text-slate-400 leading-relaxed">{post.excerpt}</p>

            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <User size={14} aria-hidden />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} aria-hidden />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} aria-hidden />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article body + sidebar */}
      <section className="section-padding bg-brand-950" aria-label="Article content">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12">

            {/* Main article */}
            <article className="lg:col-span-8" itemScope itemType="https://schema.org/BlogPosting">
              <meta itemProp="headline"      content={post.title} />
              <meta itemProp="datePublished" content={isoPublished} />
              <meta itemProp="author"        content={post.author} />

              <div className="space-y-6 text-slate-300 leading-relaxed text-base">

                <p className="text-lg text-slate-200">{post.excerpt}</p>

                <h2 className="font-display font-bold text-2xl text-white pt-4">Executive Summary</h2>
                <p>
                  Enterprise organizations face mounting pressure to modernize their technology stack
                  while maintaining operational continuity. This article explores the key strategies
                  and frameworks that leading organizations use to navigate this transformation
                  successfully — and the hidden failure modes that derail even well-funded programs.
                </p>

                <h2 className="font-display font-bold text-2xl text-white pt-4">The Current Landscape</h2>
                <p>
                  The enterprise technology landscape has shifted dramatically over the past five years.
                  Cloud adoption has accelerated, AI capabilities have matured from experimental to
                  production-ready, and cybersecurity threats have grown more sophisticated. Organizations
                  that fail to adapt risk falling behind competitors who are leveraging these technologies
                  to drive efficiency and innovation at scale.
                </p>

                <h3 className="font-display font-bold text-xl text-white pt-2">Key Challenges Organizations Face</h3>
                <ul className="space-y-2 text-slate-400 list-disc list-inside">
                  <li>Legacy system integration complexity that slows every modernization initiative</li>
                  <li>Talent shortage in critical domains — AI, cloud architecture, and cybersecurity</li>
                  <li>Budget constraints forcing difficult prioritization between stability and innovation</li>
                  <li>Change management resistance from established business units protecting the status quo</li>
                  <li>Regulatory compliance requirements varying significantly across operating geographies</li>
                </ul>

                <h2 className="font-display font-bold text-2xl text-white pt-4">Strategic Framework</h2>
                <p>
                  Based on Nexylon Technologies's experience delivering 10,000+ enterprise transformation
                  programs across 150+ countries, we have identified four critical success factors that
                  differentiate organizations achieving sustainable outcomes from those perpetually
                  stuck in pilot-project mode.
                </p>

                <h3 className="font-display font-bold text-xl text-white pt-2">
                  1. Executive Alignment and Visible Sponsorship
                </h3>
                <p>
                  Successful transformation programs always have committed, visible executive sponsorship.
                  This is not merely about budget authorization — it is about cultural permission. When
                  the CEO and CTO are publicly aligned on the transformation agenda, middle-management
                  resistance drops sharply and cross-functional collaboration accelerates.
                </p>

                <h3 className="font-display font-bold text-xl text-white pt-2">
                  2. Platform-First Architecture Thinking
                </h3>
                <p>
                  Organizations treating each technology initiative as a standalone project consistently
                  underperform compared to those investing in shared foundational platforms. A modern data
                  platform, an AI/ML foundation, or a cloud landing zone becomes exponentially more
                  valuable as additional use cases are built on top of it — compounding returns over time.
                </p>

                <h3 className="font-display font-bold text-xl text-white pt-2">
                  3. Capability Building Alongside Technology Delivery
                </h3>
                <p>
                  Technology transformation is ultimately a people challenge. The most sophisticated
                  technology stack delivers minimal value without the organizational capability to use
                  it effectively. Leading organizations invest in structured upskilling programs,
                  hire strategically against a capability roadmap, and build internal centers of
                  excellence that outlast any vendor engagement.
                </p>

                <h3 className="font-display font-bold text-xl text-white pt-2">
                  4. Phased Value Delivery in 90-Day Cycles
                </h3>
                <p>
                  The era of multi-year "big bang" transformation programs is over. The most successful
                  programs deliver measurable business value in 90-day increments, building organizational
                  confidence and securing continued investment through demonstrated, quantifiable results.
                  Each cycle funds the next.
                </p>

                <h2 className="font-display font-bold text-2xl text-white pt-4">
                  Recommendations for Enterprise Technology Leaders
                </h2>
                <ol className="space-y-3 text-slate-400 list-decimal list-inside">
                  <li>
                    <strong className="text-white">Begin with a technology maturity assessment</strong> to
                    establish your baseline and identify the highest-impact modernization opportunities.
                  </li>
                  <li>
                    <strong className="text-white">Develop a 3-year technology roadmap</strong> with
                    quarterly milestones and measurable business outcomes defined at each gate.
                  </li>
                  <li>
                    <strong className="text-white">Prioritize foundational platforms</strong> — cloud
                    infrastructure, data architecture, and security — before embarking on advanced
                    AI or automation initiatives.
                  </li>
                  <li>
                    <strong className="text-white">Build a specialized partner ecosystem</strong> rather
                    than relying on a single system integrator for every capability domain.
                  </li>
                  <li>
                    <strong className="text-white">Invest in change management from day one</strong> —
                    technical delivery without adoption is wasted capital.
                  </li>
                </ol>

                <h2 className="font-display font-bold text-2xl text-white pt-4">Conclusion</h2>
                <p>
                  The organizations that will win in the digital economy are those treating technology
                  transformation as a continuous organizational capability — not a one-time project.
                  With the right strategy, governance model, and partners, enterprise technology
                  transformation is not just achievable; it becomes a durable competitive advantage
                  that widens over time.
                </p>
                <p>
                  Nexylon Technologies has spent 25 years helping global organizations navigate exactly
                  these challenges. If you would like to explore how our experience can accelerate
                  your transformation journey, we invite you to connect with our advisory team.
                </p>
              </div>

              {/* Back to blog */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ArrowLeft size={14} aria-hidden />
                  Back to Insights
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4" aria-label="Related articles and consultation">
              <div className="sticky top-24 space-y-6">

                {/* Related posts */}
                <div className="glass rounded-2xl p-6">
                  <h2 className="font-display font-bold text-base text-white mb-4">
                    Related Insights
                  </h2>
                  <div className="space-y-5">
                    {suggested.map(p => (
                      <article key={p.id} className="group">
                        <Badge
                          variant={categoryColors[p.category] ?? 'blue'}
                          className="mb-2 text-xs"
                        >
                          {p.category}
                        </Badge>
                        <h3 className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors leading-snug mb-1.5">
                          <Link
                            to={`/blog/${p.slug}`}
                            aria-label={`Read: ${p.title}`}
                          >
                            {p.title}
                          </Link>
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Clock size={10} aria-hidden />
                          <span>{p.readTime}</span>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                {/* Expert CTA */}
                <div className="glass rounded-2xl p-6">
                  <h2 className="font-display font-bold text-base text-white mb-2">
                    Expert Consultation
                  </h2>
                  <p className="text-sm text-slate-400 mb-4">
                    Ready to discuss how these insights apply to your organization's specific
                    context and goals?
                  </p>
                  <Link
                    to="/contact"
                    className="btn-primary text-sm w-full justify-center"
                    aria-label="Talk to a Nexylon Technologies expert"
                  >
                    Talk to an Expert
                    <ArrowRight size={14} aria-hidden />
                  </Link>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Put These Insights to Work?"
        description="Our enterprise advisors translate industry insights into tailored strategies for your organization's unique context and objectives."
        primaryLabel="Schedule a Consultation"
        secondaryLabel="Browse All Insights"
      />
    </>
  )
}
