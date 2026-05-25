import { motion } from 'framer-motion'
import { Linkedin, Award, Users, Globe, TrendingUp } from 'lucide-react'
import SEO from '@/components/seo/SEO'
import SectionHeader from '@/components/ui/SectionHeader'
import CTASection from '@/components/sections/CTASection'
import { TEAM } from '@/data'
import { organizationSchema, breadcrumbSchema, personSchema, webPageSchema } from '@/utils/schema'

const SITE_URL = 'https://www.nexylontechnologies.com'

const milestones = [
  { year: '1999', event: 'Founded in San Francisco with a vision to simplify enterprise technology' },
  { year: '2004', event: 'Expanded to Europe; opened London and Frankfurt offices' },
  { year: '2009', event: 'Launched our first cloud platform, serving 500+ enterprise clients' },
  { year: '2014', event: 'IPO on NASDAQ; expanded to Asia-Pacific with Singapore HQ' },
  { year: '2018', event: 'Introduced Nexylon AI Platform; recognized in Gartner Magic Quadrant' },
  { year: '2022', event: 'Surpassed 10,000 enterprise clients; opened Innovation Lab in Singapore' },
  { year: '2024', event: 'Launched next-gen AI Platform 3.0; expanded to 150+ countries' },
  { year: '2025', event: 'Named #1 Global Enterprise Software Partner by TechAnalytica' },
]

const values = [
  { icon: <Award size={20} className="text-blue-400" aria-hidden />, title: 'Excellence', description: 'We hold ourselves to the highest standards in every engagement, every deliverable, every interaction.' },
  { icon: <Users size={20} className="text-cyan-400" aria-hidden />, title: 'Client-Centricity', description: 'Your success is our success. Every decision we make is guided by the value it creates for our clients.' },
  { icon: <Globe size={20} className="text-cyan-400" aria-hidden />, title: 'Global Perspective', description: 'We think globally and act locally, bringing world-class expertise with deep regional understanding.' },
  { icon: <TrendingUp size={20} className="text-emerald-400" aria-hidden />, title: 'Innovation', description: 'We invest relentlessly in R&D to keep our clients ahead of technological change, not chasing it.' },
]

const aboutSchemas = [
  organizationSchema,
  webPageSchema({
    name:        'About Nexylon Technologies – 25 Years of Enterprise Excellence',
    description: 'Nexylon Technologies is a multinational enterprise technology company founded in 1999. Learn about our mission, leadership team, values, and 25-year history of enterprise innovation.',
    url:         `${SITE_URL}/about`,
    breadcrumbs: [
      { name: 'Home',  url: SITE_URL },
      { name: 'About', url: `${SITE_URL}/about` },
    ],
  }),
  breadcrumbSchema([
    { name: 'Home',  url: SITE_URL },
    { name: 'About', url: `${SITE_URL}/about` },
  ]),
  ...TEAM.map(member =>
    personSchema({
      name:      member.name,
      jobTitle:  member.role,
      bio:       member.bio,
      linkedin:  member.linkedin !== 'https://linkedin.com' ? member.linkedin : undefined,
    }),
  ),
]

export default function About() {
  return (
    <>
      <SEO
        title="About Us – 25 Years of Enterprise Excellence"
        description="Nexylon Technologies is a multinational enterprise technology company founded in 1999. Learn about our mission, leadership team, values, and 25-year history of enterprise innovation."
        canonical="/about"
        keywords="about Nexylon Technologies, enterprise software company, technology company history, IT consulting firm, global technology partner, enterprise technology leadership"
        structuredData={aboutSchemas}
      />

      {/* Hero */}
      <section className="py-24 lg:py-32 bg-hero-gradient relative overflow-hidden" aria-label="About us hero">
        <div className="mesh-blob w-96 h-96 top-0 right-0 bg-blue-700/15" aria-hidden />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl"
          >
            <span className="badge bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">About Us</span>
            <h1 className="font-display font-black text-5xl lg:text-6xl text-white leading-tight tracking-tight mt-3">
              25 Years of <span className="gradient-text">Enterprise Excellence</span>
            </h1>
            <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl">
              Founded in 1999 in San Francisco, Nexylon Technologies was built on a singular conviction: that
              technology should create measurable business value, not complexity. Today, we are the partner
              that 10,000+ global organizations trust to deliver transformation at scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-brand-950" aria-labelledby="mission-heading">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 id="mission-heading" className="font-display font-bold text-3xl text-white mb-4">Our Mission</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                To empower global enterprises with intelligent software, transformative cloud solutions, and
                strategic technology expertise — enabling organizations to innovate faster, operate smarter,
                and compete more effectively in a digital-first world.
              </p>
            </div>
            <div>
              <h2 className="font-display font-bold text-3xl text-white mb-4">Our Vision</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                To be the world's most trusted enterprise technology partner — the firm global leaders call
                first when they need to solve their most complex challenges, seize emerging opportunities,
                and drive lasting organizational change.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mt-16" aria-labelledby="values-heading">
            <h2 id="values-heading" className="font-display font-bold text-2xl text-white mb-8">Our Core Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map(({ icon, title, description }) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="mb-3">{icon}</div>
                  <h3 className="font-display font-bold text-white text-base mb-1.5">{title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="section-padding"
        style={{ background: 'linear-gradient(180deg, #060D1A 0%, #0A1628 100%)' }}
        aria-labelledby="timeline-heading"
      >
        <div className="container-wide">
          <SectionHeader
            eyebrow="Our Journey"
            title={<>A Legacy of <span className="gradient-text">Innovation</span></>}
            description="Twenty-five years of building enterprise software, navigating technology cycles, and delivering outcomes that matter."
            id="timeline-heading"
          />
          <div className="mt-14 relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-transparent" aria-hidden />
            <div className="space-y-8">
              {milestones.map(({ year, event }, i) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="flex items-start gap-6 pl-14 relative"
                >
                  <div className="absolute left-3 top-1 w-6 h-6 rounded-full bg-blue-600 border-2 border-brand-900 flex items-center justify-center" aria-hidden>
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <time className="text-sm font-bold text-blue-400 w-12 flex-shrink-0">{year}</time>
                  <p className="text-slate-300 text-sm leading-relaxed">{event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-brand-950" id="leadership" aria-labelledby="leadership-heading">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Leadership"
            title={<>Meet Our <span className="gradient-text">Executive Team</span></>}
            description="Seasoned leaders with deep enterprise technology expertise, united by a shared commitment to client success."
            id="leadership-heading"
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <motion.article
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                aria-label={`${member.name}, ${member.role}`}
              >
                <div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-black font-display text-xl mb-4"
                  aria-hidden
                >
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <h3 className="font-display font-bold text-white text-base">{member.name}</h3>
                <p className="text-blue-400 text-xs font-semibold mt-0.5 mb-3">{member.role}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{member.bio}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-blue-400 transition-colors"
                  aria-label={`${member.name} LinkedIn profile`}
                >
                  <Linkedin size={13} aria-hidden />
                  LinkedIn Profile
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Partner with a Team That Delivers"
        description="With 25 years of enterprise excellence and a team of 5,000+ specialists, Nexylon is ready to accelerate your transformation."
      />
    </>
  )
}
