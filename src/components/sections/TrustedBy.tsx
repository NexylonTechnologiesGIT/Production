import { motion } from 'framer-motion'
import { TRUSTED_COMPANIES } from '@/data'

const duplicated = [...TRUSTED_COMPANIES, ...TRUSTED_COMPANIES]

export default function TrustedBy() {
  return (
    <section className="py-14 bg-brand-950 border-y border-white/6" aria-label="Trusted by global enterprises">
      <div className="container-wide mb-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-medium uppercase tracking-widest text-slate-500"
        >
          Trusted by leading enterprises worldwide
        </motion.p>
      </div>

      {/* Scrolling logo strip */}
      <div className="relative overflow-hidden" aria-hidden>
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-brand-950 to-transparent" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-brand-950 to-transparent" />

        <div className="marquee-track">
          {duplicated.map((company, i) => (
            <div
              key={`${company}-${i}`}
              className="flex-shrink-0 mx-10 flex items-center"
            >
              <span className="text-slate-400 font-display font-semibold text-sm tracking-wide whitespace-nowrap hover:text-slate-200 transition-colors cursor-default">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
