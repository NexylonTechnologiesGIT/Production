import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '@/components/seo/SEO'
import CTASection from '@/components/sections/CTASection'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import { SOLUTIONS } from '@/data'
import { softwareApplicationSchema, breadcrumbSchema, itemListSchema, webPageSchema } from '@/utils/schema'

const SITE_URL = 'https://www.nexylontechnologies.com'

const solutionCategories: Record<string, string> = {
  'cloud-suite':    'BusinessApplication',
  'ai-platform':    'AIApplication',
  'dth':            'BusinessApplication',
  'data-platform':  'BusinessApplication',
}

const solutionsSchemas = [
  webPageSchema({
    name:        'Enterprise Software Solutions – Nexylon Technologies',
    description: 'Nexylon Technologies\'s enterprise solutions portfolio includes the Nexylon Cloud Suite, AI Platform, Digital Transformation Hub, and Data Intelligence Platform.',
    url:         `${SITE_URL}/solutions`,
    breadcrumbs: [
      { name: 'Home',      url: SITE_URL },
      { name: 'Solutions', url: `${SITE_URL}/solutions` },
    ],
  }),
  breadcrumbSchema([
    { name: 'Home',      url: SITE_URL },
    { name: 'Solutions', url: `${SITE_URL}/solutions` },
  ]),
  itemListSchema(
    SOLUTIONS.map(s => ({ name: s.title, url: `${SITE_URL}${s.href}`, description: s.description })),
    'Nexylon Technologies Enterprise Solutions Portfolio',
  ),
  ...SOLUTIONS.map(s =>
    softwareApplicationSchema({
      name:        s.title,
      description: s.description,
      url:         `${SITE_URL}${s.href}`,
      category:    solutionCategories[s.id] ?? 'BusinessApplication',
    }),
  ),
]

export default function Solutions() {
  return (
    <>
      <SEO
        title="Enterprise Software Solutions"
        description="Nexylon Technologies's enterprise solutions portfolio includes the Nexylon Cloud Suite, AI Platform, Digital Transformation Hub, and Data Intelligence Platform."
        canonical="/solutions"
        keywords="enterprise software solutions, cloud management software, AI platform, digital transformation platform, SaaS solutions, enterprise SaaS, MLOps platform, data intelligence"
        structuredData={solutionsSchemas}
      />

      {/* Page hero */}
      <section className="py-24 lg:py-32 bg-hero-gradient relative overflow-hidden" aria-label="Solutions hero">
        <div className="mesh-blob w-96 h-96 top-0 right-0 bg-blue-700/15" aria-hidden />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl"
          >
            <span className="badge bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">Solutions</span>
            <h1 className="font-display font-black text-5xl lg:text-6xl text-white leading-tight tracking-tight mt-3">
              Enterprise Software <span className="gradient-text">Built for Scale</span>
            </h1>
            <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl">
              Our SaaS solutions give global enterprises unified control over cloud operations, AI workloads,
              and digital transformation programs — with enterprise-grade security and compliance built in.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions detail */}
      <section className="section-padding bg-brand-950" aria-label="Solutions portfolio">
        <div className="container-wide space-y-8">
          {SOLUTIONS.map((solution, i) => (
            <motion.article
              key={solution.id}
              id={solution.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.05 * i }}
              className={`rounded-2xl p-8 lg:p-12 border ${
                i % 2 === 0
                  ? 'bg-brand-900 border-brand-700'
                  : 'glass border-white/10'
              } hover:border-brand-600 transition-all duration-300 hover:-translate-y-0.5`}
              aria-labelledby={`solution-${solution.id}-title`}
            >
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="badge bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3 text-xs">
                    {solution.tagline}
                  </span>
                  <h2
                    id={`solution-${solution.id}-title`}
                    className="font-display font-black text-3xl text-white mt-2 leading-tight"
                  >
                    {solution.title}
                  </h2>
                  <p className="text-slate-400 mt-4 leading-relaxed">{solution.description}</p>
                  <div className="mt-6 flex gap-3">
                    <Link to="/contact" className="btn-primary" aria-label={`Request a demo of ${solution.title}`}>
                      Request Demo
                      <ArrowRight size={16} aria-hidden />
                    </Link>
                    <Link to="/contact" className="btn-secondary" aria-label={`Learn more about ${solution.title}`}>
                      Learn More
                    </Link>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">Key Benefits</p>
                  <ul className="space-y-3" aria-label={`Benefits of ${solution.title}`}>
                    {solution.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-blue-400 mt-0.5 shrink-0" aria-hidden />
                        <span className="text-slate-300 text-sm leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Case studies */}
      <div id="case-studies">
        <CaseStudiesSection />
      </div>

      <CTASection
        title="See Our Solutions in Action"
        description="Schedule a personalized demo with one of our solution experts and see exactly how Nexylon can deliver value for your organization."
        primaryLabel="Book a Live Demo"
        secondaryLabel="Explore Pricing Options"
      />
    </>
  )
}
