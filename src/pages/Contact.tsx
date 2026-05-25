import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import SEO from '@/components/seo/SEO'
import SectionHeader from '@/components/ui/SectionHeader'
import { contactPageSchema, localBusinessSchema, faqSchema, breadcrumbSchema } from '@/utils/schema'

const SITE_URL = 'https://www.nexylontechnologies.com'

const contactPageSchemas = [
  contactPageSchema(),
  localBusinessSchema(),
  breadcrumbSchema([
    { name: 'Home',    url: SITE_URL },
    { name: 'Contact', url: `${SITE_URL}/contact` },
  ]),
  faqSchema([
    {
      question: 'How quickly does Nexylon Technologies respond to inquiries?',
      answer:
        'For enterprise inquiries submitted through our contact form or sent to enterprise@nexylontechnologies.com, we guarantee a response within one business day. For urgent support needs, our 24/7 enterprise hotline is available at +1 (800) Nexylon.',
    },
    {
      question: 'Does Nexylon Technologies work with companies outside the United States?',
      answer:
        'Yes. Nexylon Technologies operates in 150+ countries with 28 regional offices on six continents. We have local teams in London, Frankfurt, Singapore, Tokyo, Dubai, Sydney, Toronto, São Paulo, Mumbai, and Bangalore.',
    },
    {
      question: 'Can I request a product demonstration before committing to a contract?',
      answer:
        'Absolutely. We offer tailored product demonstrations for the Nexylon Cloud Suite, Nexylon AI Platform, and Digital Transformation Hub. Select "Product Demo" as your topic of interest in the contact form and an advisor will schedule a session aligned to your business context.',
    },
    {
      question: 'What information should I prepare before contacting Nexylon Technologies?',
      answer:
        'Having a brief description of your technology challenge, your organization size, your industry, and your approximate timeline will help our advisors prepare the most relevant response. We do not require formal RFPs to begin a conversation.',
    },
  ]),
]

const contactInfo = [
  {
    Icon: Phone,
    label: 'Global Hotline',
    value: '+1 (800) Nexylon',
    detail: 'Available Monday–Friday, 8AM–8PM EST',
    href: 'tel:+18006663684',
  },
  {
    Icon: Mail,
    label: 'Enterprise Inquiries',
    value: 'enterprise@nexylontechnologies.com',
    detail: 'Response within 24 business hours',
    href: 'mailto:enterprise@nexylontechnologies.com',
  },
  {
    Icon: MapPin,
    label: 'Headquarters',
    value: '350 Market Street, Suite 2400',
    detail: 'San Francisco, CA 94105, USA',
    href: 'https://maps.google.com',
  },
  {
    Icon: Clock,
    label: 'Support Hours',
    value: '24/7 Enterprise Support',
    detail: 'Follow-the-sun coverage across all time zones',
    href: undefined,
  },
]

const topics = [
  'AI & Machine Learning Services',
  'Cloud Architecture & Migration',
  'Enterprise Software Development',
  'Cybersecurity Solutions',
  'Data Analytics',
  'IT Strategy & Consulting',
  'Digital Transformation',
  'Nexylon Cloud Suite (Product Demo)',
  'Nexylon AI Platform (Product Demo)',
  'Partnership & Reseller Program',
  'Careers',
  'Press & Media',
  'Other',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    employees: '',
    topic: '',
    message: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <SEO
        title="Contact Us – Talk to an Enterprise Advisor"
        description="Get in touch with Nexylon Technologies's enterprise team. Talk to our experts about AI, cloud, digital transformation, and enterprise software solutions. Response within 24 hours."
        canonical="/contact"
        keywords="contact Nexylon Technologies, enterprise software inquiry, IT consulting contact, talk to an expert, request demo, enterprise technology consultation"
        structuredData={contactPageSchemas}
      />

      {/* Page hero */}
      <section className="py-24 lg:py-32 bg-hero-gradient relative overflow-hidden" aria-label="Contact hero">
        <div className="mesh-blob w-96 h-96 top-0 right-0 bg-blue-700/15" aria-hidden />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl"
          >
            <span className="badge bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">Contact Us</span>
            <h1 className="font-display font-black text-5xl lg:text-6xl text-white leading-tight tracking-tight mt-3">
              Let's Build Your <span className="gradient-text">Future Together</span>
            </h1>
            <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl">
              Whether you are ready to start a transformation program or just exploring your options, our
              enterprise advisors are here to help you find the right path forward.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact section */}
      <section className="section-padding bg-brand-950" aria-label="Contact information and form">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: contact details */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <SectionHeader
                  eyebrow="Get in Touch"
                  title={<>We'd Love to <span className="gradient-text">Hear From You</span></>}
                  align="left"
                  titleClassName="text-2xl sm:text-3xl"
                />
              </div>

              <address className="not-italic space-y-5">
                {contactInfo.map(({ Icon, label, value, detail, href }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-blue-400" aria-hidden />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('https') ? '_blank' : undefined}
                          rel={href.startsWith('https') ? 'noopener noreferrer' : undefined}
                          className="text-white font-medium text-sm hover:text-blue-400 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-white font-medium text-sm">{value}</p>
                      )}
                      <p className="text-xs text-slate-500 mt-0.5">{detail}</p>
                    </div>
                  </div>
                ))}
              </address>

              {/* Regional offices note */}
              <div className="glass rounded-xl p-5">
                <p className="text-xs font-semibold text-slate-300 mb-2">Regional Offices</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We have 28 offices in 6 continents including New York, London, Frankfurt, Singapore,
                  Sydney, Toronto, Dubai, Tokyo, Mumbai, and São Paulo. Contact us to connect with your
                  nearest regional team.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65 }}
                className="glass rounded-2xl p-8"
              >
                {submitted ? (
                  <div className="text-center py-12" role="alert" aria-live="polite">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 size={32} className="text-emerald-400" aria-hidden />
                    </div>
                    <h2 className="font-display font-bold text-2xl text-white mb-3">Message Received!</h2>
                    <p className="text-slate-400 leading-relaxed max-w-sm mx-auto">
                      Thank you for reaching out. A Nexylon enterprise advisor will contact you within
                      one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                    <h2 className="font-display font-bold text-xl text-white mb-6">Talk to an Enterprise Advisor</h2>

                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      {[
                        { name: 'firstName', label: 'First Name', type: 'text', required: true },
                        { name: 'lastName', label: 'Last Name', type: 'text', required: true },
                      ].map(({ name, label, type, required }) => (
                        <div key={name}>
                          <label htmlFor={name} className="block text-xs font-semibold text-slate-400 mb-1.5">
                            {label} {required && <span className="text-blue-400" aria-hidden>*</span>}
                          </label>
                          <input
                            id={name}
                            name={name}
                            type={type}
                            required={required}
                            value={form[name as keyof typeof form]}
                            onChange={handleChange}
                            aria-required={required}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 focus:bg-white/8 transition-colors"
                            placeholder={`Enter ${label.toLowerCase()}`}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      {[
                        { name: 'email', label: 'Work Email', type: 'email', required: true },
                        { name: 'phone', label: 'Phone Number', type: 'tel', required: false },
                      ].map(({ name, label, type, required }) => (
                        <div key={name}>
                          <label htmlFor={name} className="block text-xs font-semibold text-slate-400 mb-1.5">
                            {label} {required && <span className="text-blue-400" aria-hidden>*</span>}
                          </label>
                          <input
                            id={name}
                            name={name}
                            type={type}
                            required={required}
                            value={form[name as keyof typeof form]}
                            onChange={handleChange}
                            aria-required={required}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 focus:bg-white/8 transition-colors"
                            placeholder={label}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      {[
                        { name: 'company', label: 'Company Name', type: 'text', required: true },
                        { name: 'jobTitle', label: 'Job Title', type: 'text', required: true },
                      ].map(({ name, label, type, required }) => (
                        <div key={name}>
                          <label htmlFor={name} className="block text-xs font-semibold text-slate-400 mb-1.5">
                            {label} {required && <span className="text-blue-400" aria-hidden>*</span>}
                          </label>
                          <input
                            id={name}
                            name={name}
                            type={type}
                            required={required}
                            value={form[name as keyof typeof form]}
                            onChange={handleChange}
                            aria-required={required}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 focus:bg-white/8 transition-colors"
                            placeholder={label}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="employees" className="block text-xs font-semibold text-slate-400 mb-1.5">
                          Company Size
                        </label>
                        <select
                          id="employees"
                          name="employees"
                          value={form.employees}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500/60 transition-colors"
                          aria-label="Company size"
                        >
                          <option value="" className="bg-brand-900">Select company size</option>
                          {['1–100', '101–500', '501–1,000', '1,001–5,000', '5,000–10,000', '10,000+'].map((s) => (
                            <option key={s} value={s} className="bg-brand-900">{s} employees</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="topic" className="block text-xs font-semibold text-slate-400 mb-1.5">
                          Topic of Interest <span className="text-blue-400" aria-hidden>*</span>
                        </label>
                        <select
                          id="topic"
                          name="topic"
                          required
                          value={form.topic}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500/60 transition-colors"
                          aria-required="true"
                        >
                          <option value="" className="bg-brand-900">Select a topic</option>
                          {topics.map((t) => (
                            <option key={t} value={t} className="bg-brand-900">{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="mb-5">
                      <label htmlFor="message" className="block text-xs font-semibold text-slate-400 mb-1.5">
                        How Can We Help? <span className="text-blue-400" aria-hidden>*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        aria-required="true"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 focus:bg-white/8 transition-colors resize-none"
                        placeholder="Tell us about your technology challenges, goals, or specific areas where you need support..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full justify-center text-base py-3.5"
                      aria-label="Submit contact form"
                    >
                      <Send size={17} aria-hidden />
                      Send Message
                    </button>

                    <p className="mt-3 text-center text-xs text-slate-500">
                      By submitting, you agree to our{' '}
                      <a href="/contact" className="text-blue-400 hover:underline">Privacy Policy</a>.
                      We never share your data with third parties.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
