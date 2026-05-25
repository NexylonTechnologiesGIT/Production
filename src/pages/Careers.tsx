import { motion } from 'framer-motion'
import { MapPin, Briefcase, Clock, ArrowRight, Users, Rocket, Heart, GraduationCap } from 'lucide-react'
import SEO from '@/components/seo/SEO'
import SectionHeader from '@/components/ui/SectionHeader'
import CTASection from '@/components/sections/CTASection'
import Badge from '@/components/ui/Badge'
import { JOBS } from '@/data'
import { jobPostingSchema, breadcrumbSchema, webPageSchema } from '@/utils/schema'

const SITE_URL     = 'https://www.nexylontechnologies.com'
const DATE_POSTED  = '2026-05-01'

const perks = [
  { Icon: Rocket, title: 'Accelerated Growth', description: 'Structured career paths, mentorship from industry leaders, and fast-track programs for high performers.' },
  { Icon: GraduationCap, title: 'Continuous Learning', description: '$10,000 annual learning budget, access to leading certification programs, and our internal Nexylon University.' },
  { Icon: Heart, title: 'Exceptional Benefits', description: 'Comprehensive health coverage, generous equity participation, flexible PTO, and family-first parental leave policies.' },
  { Icon: Users, title: 'Global Collaboration', description: 'Work across 28 offices in 6 continents, collaborate with world-class teams, and experience cultures from around the world.' },
]

const levelColor: Record<string, 'blue' | 'cyan' | 'green' | 'amber' | 'neutral'> = {
  'Senior': 'blue',
  'Mid-Senior': 'cyan',
  'Mid': 'green',
  'Junior': 'amber',
}

const careersSchemas = [
  webPageSchema({
    name:        'Careers at Nexylon Technologies – Enterprise Technology Jobs',
    description: 'Join the team that powers enterprise transformation for 10,000+ global organizations. Explore open roles in AI, cloud engineering, cybersecurity, data analytics, consulting, and sales.',
    url:         `${SITE_URL}/careers`,
    breadcrumbs: [
      { name: 'Home',    url: SITE_URL },
      { name: 'Careers', url: `${SITE_URL}/careers` },
    ],
  }),
  breadcrumbSchema([
    { name: 'Home',    url: SITE_URL },
    { name: 'Careers', url: `${SITE_URL}/careers` },
  ]),
  ...JOBS.map(job =>
    jobPostingSchema({
      title:          job.title,
      description:    `${job.description} Requirements: ${job.requirements.join('. ')}`,
      department:     job.department,
      location:       job.location,
      employmentType: job.type,
      datePosted:     DATE_POSTED,
    }),
  ),
]

export default function Careers() {
  return (
    <>
      <SEO
        title="Careers at Nexylon Technologies"
        description="Join the team that powers enterprise transformation for 10,000+ global organizations. Explore open roles in AI, cloud engineering, cybersecurity, data analytics, consulting, and sales."
        canonical="/careers"
        keywords="Nexylon Technologies careers, enterprise software jobs, AI engineer jobs, cloud architect jobs, tech company careers, IT consulting jobs, cybersecurity jobs, data engineering jobs"
        structuredData={careersSchemas}
      />

      {/* Page hero */}
      <section className="py-24 lg:py-32 bg-hero-gradient relative overflow-hidden" aria-label="Careers hero">
        <div className="mesh-blob w-96 h-96 top-0 right-0 bg-cyan-700/10" aria-hidden />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl"
          >
            <span className="badge bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">Careers</span>
            <h1 className="font-display font-black text-5xl lg:text-6xl text-white leading-tight tracking-tight mt-3">
              Build the Future of <span className="gradient-text">Enterprise Technology</span>
            </h1>
            <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl">
              At Nexylon, you will work on the technology challenges that matter most — alongside the
              brightest minds in enterprise AI, cloud, and digital transformation. This is where your best
              work happens.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden />
                <span className="text-sm text-slate-300 font-medium">5,000+ employees globally</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" aria-hidden />
                <span className="text-sm text-slate-300 font-medium">28 offices worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" aria-hidden />
                <span className="text-sm text-slate-300 font-medium">Top Employer Award 2025</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="section-padding bg-brand-950" aria-labelledby="perks-heading">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Why Nexylon"
            title={<>Where Talent <span className="gradient-text">Thrives</span></>}
            description="We invest in our people the same way we invest in our clients — comprehensively, ambitiously, and with a long-term perspective."
            id="perks-heading"
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {perks.map(({ Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="glass rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-blue-400" aria-hidden />
                </div>
                <h3 className="font-display font-bold text-white text-sm mb-1.5">{title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section
        className="section-padding"
        style={{ background: 'linear-gradient(180deg, #060D1A 0%, #0A1628 100%)' }}
        aria-labelledby="jobs-heading"
      >
        <div className="container-wide">
          <SectionHeader
            eyebrow="Open Positions"
            title={<>Find Your <span className="gradient-text">Role</span></>}
            description="We are always looking for exceptional talent. Explore our current openings below."
            id="jobs-heading"
          />
          <div className="mt-12 space-y-4">
            {JOBS.map((job, i) => (
              <motion.article
                key={job.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="glass rounded-2xl p-6 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-200 group"
                aria-labelledby={`job-${job.id}-title`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant={levelColor[job.level] ?? 'blue'}>{job.level}</Badge>
                      <Badge variant="neutral">{job.department}</Badge>
                    </div>
                    <h3 id={`job-${job.id}-title`} className="font-display font-bold text-lg text-white">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <MapPin size={11} aria-hidden /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} aria-hidden /> {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase size={11} aria-hidden /> {job.department}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-2xl">{job.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <a
                      href="/contact"
                      className="btn-primary text-sm"
                      aria-label={`Apply for ${job.title}`}
                    >
                      Apply Now
                      <ArrowRight size={14} aria-hidden />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Don't See Your Role?"
        description="We are always looking for exceptional talent. Send us your CV and tell us how you want to contribute to Nexylon's mission."
        primaryLabel="Submit Your Application"
        secondaryLabel="Join Our Talent Network"
      />
    </>
  )
}
