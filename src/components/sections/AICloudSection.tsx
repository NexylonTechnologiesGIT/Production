import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight, Cpu, Database, Network, Lock } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const features = [
  'Deploy LLM-powered workflows in 72 hours, not 6 months',
  'Multi-cloud architecture across AWS, Azure, and GCP',
  'Built-in AI governance, explainability, and audit trails',
  'SOC 2 Type II, ISO 27001, and GDPR compliant by default',
  'Reduce cloud infrastructure costs by 30–45% on average',
]

const platformFeatures = [
  { Icon: Cpu, label: 'AI Inference', sub: '< 50ms latency' },
  { Icon: Database, label: 'Data Platform', sub: 'Petabyte-scale' },
  { Icon: Network, label: 'Multi-Cloud', sub: 'AWS · Azure · GCP' },
  { Icon: Lock, label: 'Zero Trust', sub: 'Enterprise-grade' },
]

export default function AICloudSection() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A1628 0%, #060D1A 100%)' }}
      aria-labelledby="ai-cloud-heading"
    >
      {/* Decorative blob */}
      <div className="mesh-blob w-[500px] h-[500px] top-0 right-[-100px] bg-blue-700/10" aria-hidden />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: content */}
          <div>
            <SectionHeader
              eyebrow="AI & Cloud Platform"
              title={
                <>
                  The Intelligent Enterprise{' '}
                  <span className="gradient-text">Starts Here</span>
                </>
              }
              description="Nexylon'sunified AI and cloud platform gives your organization the infrastructure, tooling, and expertise to move from experimentation to enterprise-grade AI at speed."
              align="left"
              id="ai-cloud-heading"
            />

            <ul className="mt-8 space-y-3.5" aria-label="Platform capabilities">
              {features.map((f) => (
                <motion.li
                  key={f}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={18} className="text-blue-400 mt-0.5 shrink-0" aria-hidden />
                  <span className="text-slate-300 text-sm leading-relaxed">{f}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link to="/solutions#ai-platform" className="btn-primary">
                Explore the AI Platform
                <ArrowRight size={16} aria-hidden />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Request a Demo
              </Link>
            </motion.div>
          </div>

          {/* Right: visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            aria-hidden
          >
            {/* Platform card */}
            <div className="glass rounded-3xl p-8 relative">
              <div className="flex items-center justify-between mb-6">
                <span className="font-display font-bold text-white text-lg">Nexylon AI Platform</span>
                <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-400/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
                  Live
                </span>
              </div>

              {/* Feature tiles */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {platformFeatures.map(({ Icon, label, sub }) => (
                  <div key={label} className="bg-white/5 rounded-xl p-4 border border-white/8">
                    <Icon size={20} className="text-sky-400 mb-2" />
                    <div className="text-sm font-semibold text-white">{label}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{sub}</div>
                  </div>
                ))}
              </div>

              {/* Faux metric bar */}
              <div className="space-y-3">
                {[
                  { label: 'Model Throughput', pct: 92, color: 'bg-blue-500' },
                  { label: 'Cache Hit Rate', pct: 87, color: 'bg-teal-500' },
                  { label: 'Cost Efficiency', pct: 78, color: 'bg-cyan-500' },
                ].map(({ label, pct, color }) => (
                  <div key={label}>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>{label}</span>
                      <span className="font-medium text-white">{pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/8">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                        className={`h-full rounded-full ${color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-6 glass rounded-2xl px-5 py-3 shadow-elevated border border-blue-500/20"
            >
              <div className="text-xs text-slate-400">Monthly AI Inferences</div>
              <div className="text-2xl font-black font-display gradient-text">2.4B+</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
