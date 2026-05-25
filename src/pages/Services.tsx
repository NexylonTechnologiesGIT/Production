import { motion } from 'framer-motion'
import {
  Brain, Cloud, Building2, Shield, BarChart3, Briefcase, Layers, Settings,
  CheckCircle2, ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '@/components/seo/SEO'
import CTASection from '@/components/sections/CTASection'
import { SERVICES } from '@/data'
import { serviceSchema, breadcrumbSchema, itemListSchema, webPageSchema } from '@/utils/schema'

const SITE_URL = 'https://www.nexylontechnologies.com'

const IconMap: Record<string, React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean }>> = {
  Brain, Cloud, Building2, Shield, BarChart3, Briefcase, Layers, Settings,
}

const serviceCategories: Record<string, string> = {
  'ai-ml':      'AI & Machine Learning',
  'cloud':      'Cloud Computing',
  'enterprise': 'Enterprise Software',
  'security':   'Cybersecurity',
  'analytics':  'Data Analytics',
  'consulting': 'IT Consulting',
  'digital':    'Digital Transformation',
  'managed':    'Managed Services',
}

const servicesSchemas = [
  webPageSchema({
    name:        'Enterprise Technology Services – Nexylon Technologies',
    description: 'Nexylon Technologies offers AI & ML, cloud architecture, enterprise software development, cybersecurity, data analytics, and IT consulting services for global organizations.',
    url:         `${SITE_URL}/services`,
    breadcrumbs: [
      { name: 'Home',     url: SITE_URL },
      { name: 'Services', url: `${SITE_URL}/services` },
    ],
  }),
  breadcrumbSchema([
    { name: 'Home',     url: SITE_URL },
    { name: 'Services', url: `${SITE_URL}/services` },
  ]),
  itemListSchema(
    SERVICES.map(s => ({ name: s.title, url: `${SITE_URL}${s.href}`, description: s.description })),
    'Nexylon Technologies Enterprise Technology Services',
  ),
  ...SERVICES.map(s =>
    serviceSchema({
      name:        s.title,
      description: s.description,
      url:         `${SITE_URL}${s.href}`,
      category:    serviceCategories[s.id] ?? s.title,
    }),
  ),
]

export default function Services() {
  return (
    <>
      <SEO
        title="Enterprise Technology Services"
        description="Nexylon Technologies offers AI & ML, cloud architecture, enterprise software development, cybersecurity, data analytics, and IT consulting services for global organizations."
        canonical="/services"
        keywords="enterprise software services, AI machine learning services, cloud architecture, enterprise application development, cybersecurity services, data analytics, IT consulting, managed IT services"
        structuredData={servicesSchemas}
      />

      {/* Page hero */}
      <section className="py-24 lg:py-32 bg-hero-gradient relative overflow-hidden" aria-label="Services hero">
        <div className="mesh-blob w-96 h-96 top-0 right-0 bg-cyan-700/10" aria-hidden />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl"
          >
            <span className="badge bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">Services</span>
            <h1 className="font-display font-black text-5xl lg:text-6xl text-white leading-tight tracking-tight mt-3">
              Full-Spectrum <span className="gradient-text">Enterprise Technology</span> Services
            </h1>
            <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl">
              From AI strategy and cloud architecture to enterprise software engineering and managed IT, Nexylon
              delivers every capability your organization needs to win in the digital economy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service detail cards */}
      <section className="section-padding bg-brand-950" aria-label="Service catalog">
        <div className="container-wide">
          <div className="space-y-6">
            {SERVICES.map((service, i) => {
              const Icon = IconMap[service.icon]
              return (
                <motion.article
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: 0.05 * i }}
                  className="glass rounded-2xl p-8 hover:border-white/20 transition-all duration-300 group"
                  aria-labelledby={`service-${service.id}-title`}
                >
                  <div className="grid md:grid-cols-3 gap-8 items-start">
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                          {Icon && <Icon size={22} className="text-blue-400" aria-hidden />}
                        </div>
                        <h2
                          id={`service-${service.id}-title`}
                          className="font-display font-bold text-xl text-white"
                        >
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-slate-400 leading-relaxed">{service.description}</p>
                      <Link
                        to="/contact"
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group/link"
                        aria-label={`Get started with ${service.title}`}
                      >
                        Start a Conversation
                        <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" aria-hidden />
                      </Link>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">Key Capabilities</p>
                      <ul className="space-y-2.5" aria-label={`Capabilities for ${service.title}`}>
                        {service.features.map((f) => (
                          <li key={f} className="flex items-start gap-2">
                            <CheckCircle2 size={14} className="text-blue-400 mt-0.5 shrink-0" aria-hidden />
                            <span className="text-sm text-slate-300">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Explore How We Can Help?"
        description="Our service advisors are ready to discuss your specific technology challenges and design the right engagement model for your organization."
        primaryLabel="Talk to a Service Advisor"
        secondaryLabel="Download Services Brochure"
      />
    </>
  )
}
