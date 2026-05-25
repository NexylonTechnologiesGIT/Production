import { motion } from 'framer-motion'
import {
  Landmark, HeartPulse, Factory, ShoppingBag, Globe2, Zap, Radio, Scale,
  ArrowRight, CheckCircle2,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '@/components/seo/SEO'
import CTASection from '@/components/sections/CTASection'
import { INDUSTRIES } from '@/data'
import { breadcrumbSchema, itemListSchema, webPageSchema } from '@/utils/schema'

const SITE_URL = 'https://www.nexylontechnologies.com'

const IconMap: Record<string, React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean }>> = {
  Landmark, HeartPulse, Factory, ShoppingBag, Globe2, Zap, Radio, Scale,
}

const industriesSchemas = [
  webPageSchema({
    name:        'Industries We Serve – Nexylon Technologies',
    description: 'Nexylon Technologies delivers specialized enterprise technology solutions across financial services, healthcare, manufacturing, retail, government, energy, telecom, and professional services.',
    url:         `${SITE_URL}/industries`,
    breadcrumbs: [
      { name: 'Home',       url: SITE_URL },
      { name: 'Industries', url: `${SITE_URL}/industries` },
    ],
  }),
  breadcrumbSchema([
    { name: 'Home',       url: SITE_URL },
    { name: 'Industries', url: `${SITE_URL}/industries` },
  ]),
  itemListSchema(
    INDUSTRIES.map(ind => ({
      name:        ind.title,
      url:         `${SITE_URL}${ind.href}`,
      description: ind.description,
    })),
    'Industries Served by Nexylon Technologies',
  ),
]

export default function Industries() {
  return (
    <>
      <SEO
        title="Industries We Serve"
        description="Nexylon Technologies delivers specialized enterprise technology solutions across financial services, healthcare, manufacturing, retail, government, energy, telecom, and professional services."
        canonical="/industries"
        keywords="financial services software, healthcare technology, manufacturing software, retail technology, government IT, energy software, telecom software, enterprise technology by industry, industry-specific IT solutions"
        structuredData={industriesSchemas}
      />

      {/* Page hero */}
      <section className="py-24 lg:py-32 bg-hero-gradient relative overflow-hidden" aria-label="Industries hero">
        <div className="mesh-blob w-96 h-96 top-0 right-0 bg-cyan-600/10" aria-hidden />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl"
          >
            <span className="badge bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">Industries</span>
            <h1 className="font-display font-black text-5xl lg:text-6xl text-white leading-tight tracking-tight mt-3">
              Deep Domain Expertise <span className="gradient-text">Across Industries</span>
            </h1>
            <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl">
              Generic technology solutions rarely solve industry-specific challenges. Nexylon brings
              vertical-specific expertise built over decades of delivering results for leaders in every sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry grid */}
      <section className="section-padding bg-brand-950" aria-label="Industries we serve">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INDUSTRIES.map((industry, i) => {
              const Icon = IconMap[industry.icon]
              return (
                <motion.article
                  key={industry.id}
                  id={industry.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="glass rounded-2xl p-8 hover:border-white/20 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 group"
                  aria-labelledby={`industry-${industry.id}-title`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:from-blue-600/30 group-hover:to-cyan-600/30 transition-all">
                      {Icon && <Icon size={22} className="text-sky-400" aria-hidden />}
                    </div>
                    <div>
                      <h2
                        id={`industry-${industry.id}-title`}
                        className="font-display font-bold text-xl text-white"
                      >
                        {industry.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{industry.description}</p>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2.5">Focus Areas</p>
                    <ul className="space-y-1.5" aria-label={`Focus areas for ${industry.title}`}>
                      {industry.challenges.map((c) => (
                        <li key={c} className="flex items-center gap-2">
                          <CheckCircle2 size={13} className="text-blue-400 shrink-0" aria-hidden />
                          <span className="text-xs text-slate-300">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group/link"
                    aria-label={`Learn more about our ${industry.title} solutions`}
                  >
                    Explore {industry.title.split(' ')[0]} Solutions
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" aria-hidden />
                  </Link>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Find Your Industry-Specific Solution"
        description="Connect with our industry practice leaders who have deep domain knowledge and a proven track record in your sector."
        primaryLabel="Talk to an Industry Expert"
        secondaryLabel="View Industry Case Studies"
      />
    </>
  )
}
