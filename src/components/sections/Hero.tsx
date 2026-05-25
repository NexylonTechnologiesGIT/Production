import { motion } from 'framer-motion'
import { ArrowRight, Play, CheckCircle2, TrendingUp, ShieldCheck, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

const trustItems = [
  { Icon: ShieldCheck, label: 'ISO 27001 Certified' },
  { Icon: Globe, label: '150+ Countries' },
  { Icon: TrendingUp, label: '98% Client Retention' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient"
      aria-label="Hero section"
    >
      {/* Mesh gradient blobs */}
      <div className="mesh-blob w-[600px] h-[600px] top-[-100px] right-[-200px] bg-blue-700/18" aria-hidden />
      <div className="mesh-blob w-[500px] h-[500px] bottom-[-150px] left-[-150px] bg-cyan-700/10" aria-hidden />
      <div className="mesh-blob w-[300px] h-[300px] top-[30%] left-[40%] bg-sky-600/8" aria-hidden />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
        aria-hidden
      />

      <div className="container-wide relative z-10 py-28 md:py-36 lg:py-40">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Eyebrow badge */}
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-400 text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse-slow" aria-hidden />
              Ranked #1 Global Enterprise Software Partner 2025
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight text-white"
          >
            Transform Your{' '}
            <span className="gradient-text">Enterprise</span>
            <br />
            with Intelligent{' '}
            <span className="gradient-text">Software</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg sm:text-xl text-slate-400 leading-relaxed"
          >
            Nexylon Technologies delivers AI-powered solutions, cloud transformation, and enterprise
            technology services that accelerate digital innovation for global organizations.
            Trusted by Fortune 500 companies across 150+ countries.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={item} className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/solutions"
              className="btn-primary text-base px-8 py-4"
              aria-label="Explore our enterprise solutions"
            >
              Explore Solutions
              <ArrowRight size={18} aria-hidden />
            </Link>
            <Link
              to="/contact"
              className="btn-secondary text-base px-8 py-4"
              aria-label="Talk to an expert"
            >
              <Play size={18} className="text-blue-400" aria-hidden />
              Watch the Platform Tour
            </Link>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
            aria-label="Trust indicators"
          >
            {trustItems.map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={16} className="text-cyan-400" aria-hidden />
                <span className="text-sm font-medium text-slate-300">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating stat cards */}
        <div className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2" aria-hidden>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            {[
              { value: '10,000+', label: 'Enterprise Clients', color: 'from-blue-500 to-blue-700' },
              { value: '$4.2B+', label: 'Client Value Delivered', color: 'from-sky-400 to-blue-600' },
              { value: '99.98%', label: 'Platform Uptime SLA', color: 'from-cyan-400 to-teal-600' },
            ].map(({ value, label, color }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.03 }}
                className="glass rounded-2xl p-5 w-56 animate-float"
                style={{ animationDelay: `${Math.random() * 2}s` }}
              >
                <div className={`text-2xl font-black font-display bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                  {value}
                </div>
                <div className="text-xs font-medium text-slate-400 mt-1">{label}</div>
                <div className="mt-3 flex items-center gap-1">
                  <CheckCircle2 size={12} className="text-emerald-400" />
                  <span className="text-[10px] text-emerald-400 font-medium">Verified</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#020C1B] to-transparent" aria-hidden />
    </section>
  )
}
