import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CASE_STUDIES } from '@/data'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'

export default function CaseStudiesSection() {
  return (
    <section
      className="section-padding bg-brand-950"
      aria-labelledby="case-studies-heading"
    >
      <div className="container-wide">
        <SectionHeader
          eyebrow="Case Studies"
          title={<>Real Results. <span className="gradient-text">Measurable Impact.</span></>}
          description="We measure our success by the outcomes our clients achieve. Here is a sample of what enterprise organizations accomplish with Nexylon."
          id="case-studies-heading"
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASE_STUDIES.map(({ id, company, industry, challenge, result, metric, metricLabel }, i) => (
            <motion.article
              key={id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="bg-brand-900 border border-brand-700 rounded-2xl p-8 hover:border-brand-600 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 group"
              aria-label={`Case study: ${company}`}
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <Badge variant="blue" className="mb-2">{industry}</Badge>
                  <h3 className="font-display font-bold text-xl text-white">{company}</h3>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-black font-display text-3xl gradient-text">{metric}</div>
                  <div className="text-xs text-slate-400 mt-0.5 max-w-[120px] text-right">{metricLabel}</div>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Challenge</p>
                  <p className="text-sm text-slate-300 leading-relaxed">{challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Outcome</p>
                  <p className="text-sm text-slate-300 leading-relaxed">{result}</p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                <TrendingUp size={14} aria-hidden />
                <span>Read Full Case Study</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden />
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Link to="/solutions" className="btn-outline">
            View All Case Studies
            <ArrowRight size={16} aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
