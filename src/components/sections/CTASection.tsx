import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CalendarDays } from 'lucide-react'

interface CTASectionProps {
  title?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function CTASection({
  title = 'Ready to Transform Your Enterprise?',
  description = 'Join 10,000+ organizations worldwide that have chosen Nexylon Technologies as their strategic technology partner. Let\'s build your future together.',
  primaryLabel = 'Start Your Transformation',
  primaryHref = '/contact',
  secondaryLabel = 'Schedule a Discovery Call',
  secondaryHref = '/contact',
}: CTASectionProps) {
  return (
    <section
      className="py-24 relative overflow-hidden"
      aria-label="Call to action"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0D2451 0%, #112B60 35%, #0A1B40 65%, #071226 100%)',
        }}
        aria-hidden
      />

      {/* Blobs */}
      <div className="mesh-blob w-96 h-96 top-[-50px] right-[-50px] bg-blue-600/20" aria-hidden />
      <div className="mesh-blob w-96 h-96 bottom-[-50px] left-[-50px] bg-cyan-700/12" aria-hidden />

      <div className="container-narrow relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
            {title}
          </h2>
          <p className="mt-5 text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            {description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={primaryHref}
              className="btn-primary text-base px-8 py-4"
              aria-label={primaryLabel}
            >
              {primaryLabel}
              <ArrowRight size={18} aria-hidden />
            </Link>
            <Link
              to={secondaryHref}
              className="btn-secondary text-base px-8 py-4"
              aria-label={secondaryLabel}
            >
              <CalendarDays size={18} className="text-blue-400" aria-hidden />
              {secondaryLabel}
            </Link>
          </div>

          <p className="mt-6 text-xs text-slate-500">
            No commitment required · Response within 24 hours · Talk to a domain expert
          </p>
        </motion.div>
      </div>
    </section>
  )
}
