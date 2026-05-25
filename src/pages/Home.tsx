import SEO from '@/components/seo/SEO'
import Hero from '@/components/sections/Hero'
import TrustedBy from '@/components/sections/TrustedBy'
import ServicesOverview from '@/components/sections/ServicesOverview'
import AICloudSection from '@/components/sections/AICloudSection'
import StatsSection from '@/components/sections/StatsSection'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import Testimonials from '@/components/sections/Testimonials'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import GlobalPresence from '@/components/sections/GlobalPresence'
import CTASection from '@/components/sections/CTASection'
import {
  organizationSchema,
  webSiteSchema,
  faqSchema,
  itemListSchema,
  webPageSchema,
} from '@/utils/schema'

const SITE_URL = 'https://www.nexylontechnologies.com'

const homeFAQ = faqSchema([
  {
    question: 'What enterprise technology services does Nexylon Technologies offer?',
    answer:
      'Nexylon Technologies offers eight core service areas: AI & Machine Learning, Cloud Architecture & Migration, Enterprise Software Development, Cybersecurity Solutions, Data Analytics & Intelligence, IT Strategy & Consulting, Digital Transformation, and Managed IT Services — each delivered by certified practitioners with deep domain expertise.',
  },
  {
    question: 'How many countries does Nexylon Technologies operate in?',
    answer:
      'Nexylon Technologies operates in 150+ countries with 28 regional offices across six continents, including global headquarters in San Francisco and major hubs in London, Frankfurt, Singapore, Tokyo, Dubai, Sydney, Toronto, and São Paulo.',
  },
  {
    question: 'What industries does Nexylon Technologies specialize in?',
    answer:
      'We serve eight major verticals: Financial Services & Banking, Healthcare & Life Sciences, Manufacturing & Supply Chain, Retail & Consumer Goods, Government & Public Sector, Energy & Utilities, Telecommunications, and Professional Services.',
  },
  {
    question: 'Does Nexylon Technologies offer AI and machine learning services?',
    answer:
      'Yes. Our AI practice covers generative AI integration with LLMs and RAG architectures, predictive analytics and forecasting, computer vision systems, intelligent process automation, and AI governance frameworks — all focused on production-grade deployments with measurable business outcomes.',
  },
  {
    question: 'How long has Nexylon Technologies been in business?',
    answer:
      'Nexylon Technologies was founded in 1999 and has over 25 years of enterprise technology experience. We went public on NASDAQ in 2014 and have since grown to serve 10,000+ enterprise clients worldwide with a team of 5,000+ technology experts.',
  },
  {
    question: 'What cloud platforms does Nexylon Technologies support?',
    answer:
      'We provide multi-cloud expertise across Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP), including hybrid and multi-cloud architecture design, zero-downtime migration, cloud cost optimization, and FinOps governance.',
  },
])

const servicesListSchema = itemListSchema(
  [
    { name: 'AI & Machine Learning Services',        url: `${SITE_URL}/services#ai-ml`,      description: 'Generative AI, LLMs, predictive analytics, and intelligent automation for enterprise.' },
    { name: 'Cloud Architecture & Migration',         url: `${SITE_URL}/services#cloud`,       description: 'Multi-cloud and hybrid cloud design, zero-downtime migration, and FinOps governance.' },
    { name: 'Enterprise Software Development',        url: `${SITE_URL}/services#enterprise`,  description: 'Microservices, ERP modernization, SaaS engineering, and DevSecOps.' },
    { name: 'Cybersecurity Solutions',                url: `${SITE_URL}/services#security`,    description: 'Zero-trust architecture, SOC-as-a-Service, penetration testing, and compliance.' },
    { name: 'Data Analytics & Intelligence',          url: `${SITE_URL}/services#analytics`,   description: 'Enterprise data platforms, real-time analytics pipelines, and BI dashboards.' },
    { name: 'IT Strategy & Consulting',               url: `${SITE_URL}/services#consulting`,  description: 'Technology roadmaps, digital maturity assessments, and CXO advisory services.' },
    { name: 'Digital Transformation',                 url: `${SITE_URL}/services#digital`,     description: 'End-to-end transformation programs, CX redesign, and agile transformation.' },
    { name: 'Managed IT Services',                    url: `${SITE_URL}/services#managed`,     description: '24/7 infrastructure monitoring, help desk, patch management, and SLA-backed support.' },
  ],
  'Nexylon Technologies Enterprise Technology Services',
)

const homePageSchema = webPageSchema({
  name:        'Nexylon Technologies – Enterprise AI, Cloud & Digital Transformation',
  description: 'Nexylon Technologies delivers AI-powered enterprise solutions, cloud transformation, and digital innovation services to global organizations across 150+ countries.',
  url:         SITE_URL,
})

const schemas = [organizationSchema, webSiteSchema, homePageSchema, homeFAQ, servicesListSchema]

export default function Home() {
  return (
    <>
      <SEO
        title="Enterprise AI, Cloud & Digital Transformation"
        description="Nexylon Technologies delivers AI-powered enterprise solutions, cloud transformation, and digital innovation services to global organizations across 150+ countries."
        canonical="/"
        keywords="enterprise software, AI solutions, cloud transformation, digital transformation, IT consulting, managed IT services, enterprise technology, SaaS platform"
        structuredData={schemas}
      />
      <Hero />
      <TrustedBy />
      <ServicesOverview />
      <AICloudSection />
      <StatsSection />
      <CaseStudiesSection />
      <Testimonials />
      <WhyChooseUs />
      <GlobalPresence />
      <CTASection />
    </>
  )
}
