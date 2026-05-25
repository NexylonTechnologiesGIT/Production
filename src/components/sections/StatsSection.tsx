import { motion } from 'framer-motion'
import { STATS } from '@/data'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function StatsSection() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0A1A38 0%, #0F2550 45%, #0A1A38 100%)' }}
      aria-label="Company statistics"
    >
      {/* Decorative blobs */}
      <div className="mesh-blob w-96 h-96 top-0 left-0 bg-blue-600/12" aria-hidden />
      <div className="mesh-blob w-96 h-96 bottom-0 right-0 bg-cyan-700/8" aria-hidden />

      <div className="container-wide relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-sky-400/70 mb-12"
        >
          Proven Results at Global Scale
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <AnimatedCounter stat={stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
