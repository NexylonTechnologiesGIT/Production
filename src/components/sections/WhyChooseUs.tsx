import { motion } from 'framer-motion'
import {
  Trophy, Users, Globe, Lightbulb, Shield, Headphones,
} from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const reasons = [
  {
    Icon: Trophy,
    title: 'Recognized Industry Leader',
    description:
      "Named a Leader in 12 consecutive Gartner Magic Quadrants and recipient of 500+ industry awards. Our credentials are independently verified by the world's top analyst firms.",
  },
  {
    Icon: Users,
    title: 'World-Class Talent',
    description:
      '5,000+ certified professionals holding credentials across AWS, Azure, GCP, CISSP, PMP, and TOGAF. We invest $50M annually in talent development and innovation.',
  },
  {
    Icon: Globe,
    title: 'Truly Global Delivery',
    description:
      'With 28 offices across 6 continents and delivery centers in 12 countries, we provide follow-the-sun support with local expertise and global scale.',
  },
  {
    Icon: Lightbulb,
    title: 'Innovation at the Core',
    description:
      '15% of annual revenue reinvested in R&D. Our Innovation Labs in San Francisco, London, and Singapore develop next-generation AI and cloud solutions ahead of the curve.',
  },
  {
    Icon: Shield,
    title: 'Enterprise-Grade Security',
    description:
      'ISO 27001, SOC 2 Type II, FedRAMP, and GDPR compliant. Our zero-trust security model and dedicated security operations center protect your most critical assets.',
  },
  {
    Icon: Headphones,
    title: 'Dedicated Client Success',
    description:
      '98% client retention rate backed by dedicated Customer Success Managers, 24/7 NOC support, and SLA-guaranteed response times for every enterprise engagement.',
  },
]

export default function WhyChooseUs() {
  return (
    <section
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, #060F1E 0%, #0A1628 100%)' }}
      aria-labelledby="why-choose-heading"
    >
      <div className="container-wide">
        <SectionHeader
          eyebrow="Why Nexylon"
          title={<>The Partner That <span className="gradient-text">Delivers</span></>}
          description="Behind every successful enterprise transformation is a partner with the people, processes, and platforms to execute flawlessly. That partner is Nexylon."
          id="why-choose-heading"
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-4 p-6 rounded-2xl bg-brand-900/40 border border-white/[0.07] hover:border-cyan-700/30 hover:bg-brand-800/40 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-glow-teal group-hover:scale-105 transition-transform duration-300">
                <Icon size={18} className="text-white" aria-hidden />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-sm leading-snug mb-1.5">
                  {title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
