import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Brain, Cloud, Building2, Shield, BarChart3, Briefcase, Layers, Settings,
  ArrowRight,
} from 'lucide-react'
import { SERVICES } from '@/data'
import SectionHeader from '@/components/ui/SectionHeader'

const IconMap: Record<string, React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean }>> = {
  Brain, Cloud, Building2, Shield, BarChart3, Briefcase, Layers, Settings,
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function ServicesOverview() {
  return (
    <section className="section-padding" style={{ background: 'linear-gradient(180deg, #020C1B 0%, #060F1E 100%)' }} aria-labelledby="services-heading">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Our Services"
          title={<>Everything You Need to <span className="gradient-text">Transform</span> at Scale</>}
          description="From AI strategy to cloud infrastructure and enterprise software engineering, Nexylon delivers the full spectrum of technology capabilities your organization needs."
          id="services-heading"
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = IconMap[service.icon]
            return (
              <motion.article
                key={service.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={cardVariants}
                className="group bg-brand-900/70 hover:bg-brand-800/80 border border-brand-700/60 hover:border-cyan-800/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover flex flex-col backdrop-blur-sm"
                aria-label={service.title}
              >
                <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-5 group-hover:bg-sky-500/20 transition-colors duration-300">
                  {Icon && <Icon size={20} className="text-sky-400" aria-hidden />}
                </div>
                <h3 className="font-display font-bold text-base text-white mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">
                  {service.description.slice(0, 120)}…
                </p>
                <Link
                  to={service.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-400 hover:text-cyan-300 transition-colors group/link"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn more
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" aria-hidden />
                </Link>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Link to="/services" className="btn-outline">
            View All Services
            <ArrowRight size={16} aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
