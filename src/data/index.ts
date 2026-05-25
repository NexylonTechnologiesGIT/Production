import type { NavItem, Service, Solution, Industry, Testimonial, Stat, TeamMember, BlogPost, Job, CaseStudy } from '@/types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'AI & Machine Learning', href: '/services#ai-ml' },
      { label: 'Cloud Architecture', href: '/services#cloud' },
      { label: 'Enterprise Software', href: '/services#enterprise' },
      { label: 'Cybersecurity', href: '/services#security' },
      { label: 'Data Analytics', href: '/services#analytics' },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      { label: 'Nexylon Cloud Suite', href: '/solutions#cloud-suite' },
      { label: 'Nexylon AI Platform', href: '/solutions#ai-platform' },
      { label: 'Digital Transformation Hub', href: '/solutions#dth' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'Financial Services', href: '/industries#finance' },
      { label: 'Healthcare', href: '/industries#healthcare' },
      { label: 'Manufacturing', href: '/industries#manufacturing' },
      { label: 'Government', href: '/industries#government' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export const SERVICES: Service[] = [
  {
    id: 'ai-ml',
    icon: 'Brain',
    title: 'AI & Machine Learning',
    description:
      'Harness the power of intelligent automation. We design and deploy production-grade AI models, NLP pipelines, and predictive analytics systems that deliver measurable business outcomes.',
    features: [
      'Generative AI Integration (LLMs, RAG)',
      'Predictive Analytics & Forecasting',
      'Computer Vision Systems',
      'Intelligent Process Automation',
      'AI Governance & Ethics Frameworks',
    ],
    href: '/services#ai-ml',
  },
  {
    id: 'cloud',
    icon: 'Cloud',
    title: 'Cloud Architecture & Migration',
    description:
      'Accelerate your journey to the cloud with confidence. We architect, migrate, and optimize enterprise workloads across AWS, Azure, and Google Cloud with zero downtime strategies.',
    features: [
      'Multi-Cloud & Hybrid Architecture',
      'Zero-Downtime Cloud Migration',
      'Cloud Cost Optimization',
      'FinOps & Resource Governance',
      'Kubernetes & Serverless Platforms',
    ],
    href: '/services#cloud',
  },
  {
    id: 'enterprise',
    icon: 'Building2',
    title: 'Enterprise Software Development',
    description:
      'Custom enterprise applications engineered for scale, security, and longevity. From ERP modernization to microservices architecture, we build systems that power your core business.',
    features: [
      'Microservices & API-First Architecture',
      'ERP & CRM Modernization',
      'Legacy System Re-engineering',
      'SaaS Platform Engineering',
      'DevSecOps & CI/CD Pipelines',
    ],
    href: '/services#enterprise',
  },
  {
    id: 'security',
    icon: 'Shield',
    title: 'Cybersecurity Solutions',
    description:
      'Protect your enterprise with defense-in-depth security strategies. Our certified experts deliver zero-trust architecture, threat intelligence, and 24/7 SOC monitoring.',
    features: [
      'Zero Trust Architecture Design',
      'Penetration Testing & Red Team',
      'SIEM & SOC-as-a-Service',
      'Compliance & Risk Management',
      'Identity & Access Management',
    ],
    href: '/services#security',
  },
  {
    id: 'analytics',
    icon: 'BarChart3',
    title: 'Data Analytics & Intelligence',
    description:
      'Transform raw data into strategic advantage. We build enterprise data platforms, real-time analytics pipelines, and executive dashboards that drive informed decision-making.',
    features: [
      'Enterprise Data Warehouse & Lake',
      'Real-Time Streaming Analytics',
      'Business Intelligence Dashboards',
      'Data Mesh Architecture',
      'Master Data Management',
    ],
    href: '/services#analytics',
  },
  {
    id: 'consulting',
    icon: 'Briefcase',
    title: 'IT Strategy & Consulting',
    description:
      'Align technology investments with business goals. Our senior advisors deliver technology roadmaps, digital maturity assessments, and transformation blueprints for C-suite executives.',
    features: [
      'Digital Transformation Roadmaps',
      'Technology Due Diligence',
      'IT Operating Model Design',
      'Vendor Selection & Management',
      'CXO Advisory Services',
    ],
    href: '/services#consulting',
  },
  {
    id: 'digital',
    icon: 'Layers',
    title: 'Digital Transformation',
    description:
      'End-to-end digital transformation programs that reimagine your business operations, customer journeys, and workforce enablement for the digital-first economy.',
    features: [
      'Customer Experience (CX) Redesign',
      'Process Digitization & Automation',
      'Change Management Programs',
      'Agile Transformation',
      'Digital Workplace Solutions',
    ],
    href: '/services#digital',
  },
  {
    id: 'managed',
    icon: 'Settings',
    title: 'Managed IT Services',
    description:
      'Reliable, proactive IT management that keeps your business running 24/7. Our managed services model reduces operational risk while freeing your team to focus on innovation.',
    features: [
      '24/7 Infrastructure Monitoring',
      'Help Desk & End-User Support',
      'Patch & Vulnerability Management',
      'Disaster Recovery & BCP',
      'SLA-Backed Performance Guarantees',
    ],
    href: '/services#managed',
  },
]

export const SOLUTIONS: Solution[] = [
  {
    id: 'cloud-suite',
    title: 'Nexylon Cloud Suite',
    tagline: 'Enterprise Cloud Management, Unified',
    description:
      'A comprehensive SaaS platform for managing your entire cloud estate — provisioning, cost optimization, compliance, and governance — from a single pane of glass.',
    benefits: [
      'Reduce cloud spend by up to 40% through intelligent optimization',
      'Unified visibility across AWS, Azure, and GCP environments',
      'Automated compliance for SOC 2, ISO 27001, and GDPR',
      'AI-driven capacity planning and resource rightsizing',
      'One-click multi-region deployment with rollback support',
    ],
    href: '/solutions#cloud-suite',
  },
  {
    id: 'ai-platform',
    title: 'Nexylon AI Platform',
    tagline: 'Build, Deploy & Scale AI at Enterprise Speed',
    description:
      'An end-to-end MLOps platform that accelerates the path from model experimentation to production-grade AI — with built-in governance, explainability, and drift detection.',
    benefits: [
      'Reduce model deployment time from weeks to hours',
      'Built-in model registry, versioning, and lineage tracking',
      'Enterprise-grade security with data residency controls',
      'Supports PyTorch, TensorFlow, and Hugging Face models',
      'Real-time inference APIs with auto-scaling infrastructure',
    ],
    href: '/solutions#ai-platform',
  },
  {
    id: 'dth',
    title: 'Digital Transformation Hub',
    tagline: 'Orchestrate Your Entire Transformation Journey',
    description:
      'A command center for digital transformation initiatives — tracking program milestones, quantifying business value, managing change, and aligning stakeholders across the enterprise.',
    benefits: [
      'Real-time transformation program dashboards for leadership',
      'Value realization tracking with ROI measurement framework',
      'Integrated change management and communication tools',
      'Portfolio management for all digital initiatives',
      'Benchmarking against 10,000+ global transformation programs',
    ],
    href: '/solutions#dth',
  },
  {
    id: 'data-platform',
    title: 'Nexylon Data Intelligence',
    tagline: 'Enterprise Data, Unified and Intelligent',
    description:
      'A modern data platform that unifies your data sources, accelerates analytics delivery, and enables self-service insights across every business unit.',
    benefits: [
      'Ingest and unify data from 200+ enterprise connectors',
      'Sub-second query performance on petabyte-scale datasets',
      'Automated data cataloging with AI-powered classification',
      'Row-level security and column-level data masking',
      'Embedded AI assistant for natural language data queries',
    ],
    href: '/solutions#data-platform',
  },
]

export const INDUSTRIES: Industry[] = [
  {
    id: 'finance',
    icon: 'Landmark',
    title: 'Financial Services & Banking',
    description:
      'Modernizing core banking systems, accelerating digital lending, enabling real-time fraud detection, and ensuring regulatory compliance across global financial institutions.',
    challenges: [
      'Core banking legacy modernization',
      'Real-time fraud detection & AML',
      'Open banking API platforms',
      'Regulatory compliance (Basel III, DORA)',
    ],
    href: '/industries#finance',
  },
  {
    id: 'healthcare',
    icon: 'HeartPulse',
    title: 'Healthcare & Life Sciences',
    description:
      'Accelerating clinical research, enabling interoperable health records, powering AI-driven diagnostics, and ensuring HIPAA-compliant data management for healthcare leaders.',
    challenges: [
      'EHR/EMR system integration',
      'Clinical trial data management',
      'AI-powered diagnostic tools',
      'HIPAA & GDPR compliance',
    ],
    href: '/industries#healthcare',
  },
  {
    id: 'manufacturing',
    icon: 'Factory',
    title: 'Manufacturing & Supply Chain',
    description:
      'Driving Industry 4.0 transformation with smart factory solutions, predictive maintenance, supply chain visibility, and AI-powered demand forecasting.',
    challenges: [
      'Digital twin implementation',
      'Predictive maintenance (IIoT)',
      'Supply chain visibility & resilience',
      'ERP modernization & MES integration',
    ],
    href: '/industries#manufacturing',
  },
  {
    id: 'retail',
    icon: 'ShoppingBag',
    title: 'Retail & Consumer Goods',
    description:
      'Enabling omnichannel commerce, personalized customer experiences, AI-driven inventory optimization, and loyalty programs for leading global retailers.',
    challenges: [
      'Omnichannel commerce platforms',
      'AI-driven personalization engines',
      'Inventory & demand optimization',
      'Unified commerce & POS modernization',
    ],
    href: '/industries#retail',
  },
  {
    id: 'government',
    icon: 'Globe2',
    title: 'Government & Public Sector',
    description:
      'Delivering citizen-centric digital services, modernizing legacy government systems, and enabling data-driven policy through secure, compliant public sector technology.',
    challenges: [
      'Citizen portal & digital services',
      'Legacy government system modernization',
      'Secure cloud for government (FedRAMP)',
      'Open data & transparency platforms',
    ],
    href: '/industries#government',
  },
  {
    id: 'energy',
    icon: 'Zap',
    title: 'Energy & Utilities',
    description:
      'Powering the energy transition with smart grid analytics, renewable energy management platforms, predictive asset maintenance, and carbon tracking solutions.',
    challenges: [
      'Smart grid & IoT analytics',
      'Renewable energy management',
      'Asset performance management',
      'Carbon accounting & ESG reporting',
    ],
    href: '/industries#energy',
  },
  {
    id: 'telecom',
    icon: 'Radio',
    title: 'Telecommunications',
    description:
      'Helping telcos monetize 5G, reduce churn with AI-powered analytics, automate network operations, and deliver next-generation connected experiences.',
    challenges: [
      '5G monetization platforms',
      'Network automation (BSS/OSS)',
      'AI-powered churn prediction',
      'Telecom API marketplaces',
    ],
    href: '/industries#telecom',
  },
  {
    id: 'professional',
    icon: 'Scale',
    title: 'Professional Services',
    description:
      'Empowering consulting, legal, and accounting firms with intelligent knowledge management, automated workflow, and AI-enhanced client delivery platforms.',
    challenges: [
      'Knowledge management systems',
      'Client portal & collaboration',
      'AI-powered contract analysis',
      'Matter/project management modernization',
    ],
    href: '/industries#professional',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote:
      "Nexylon Technologies's cloud transformation program delivered results that exceeded every metric we defined. We reduced infrastructure costs by 43% and cut deployment cycles from six weeks to two days. Their engineers don't just advise — they deliver.",
    author: 'Katherine Voss',
    role: 'Chief Technology Officer',
    company: 'Khadad Boka Financial Group',
    rating: 5,
  },
  {
    id: '2',
    quote:
      'The AI platform they built for us processes 12 million patient records daily with 99.97% uptime. Their healthcare domain expertise combined with engineering excellence is unmatched. Nexylon is now our strategic technology partner of choice.',
    author: 'Dr. Shubham Harpale',
    role: 'VP, Digital Health Innovation',
    company: 'Harpale Healthcare Systems',
    rating: 5,
  },
  {
    id: '3',
    quote:
      "We evaluated seven global SI partners before selecting Nexylon. The decision paid dividends immediately. They delivered a modern, microservices-based supply chain platform in 11 months — on time, on budget, and on scope.",
    author: 'Hitesh Bhonkar',
    role: 'SVP, Global Technology',
    company: 'TsX Industrial Corp',
    rating: 5,
  },
  {
    id: '4',
    quote:
      "Nexylon'scybersecurity team uncovered 23 critical vulnerabilities our previous vendor had missed. Their zero-trust implementation has since withstood three sophisticated penetration tests without a single breach.",
    author: 'Puswhkar Ghogare',
    role: 'Chief Information Security Officer',
    company: 'R&R Capital',
    rating: 5,
  },
  {
    id: '5',
    quote:
      'The digital transformation roadmap Nexylon developed for us wasn\'t just a PowerPoint — it was a phased, executable blueprint with clear ROI at every stage. Eighteen months in, we\'ve realized 270% of the projected return.',
    author: 'Ajinkya Hole',
    role: 'Chief Digital Officer',
    company: 'AHVista Retail Group',
    rating: 5,
  },
  {
    id: '6',
    quote:
      "Their data intelligence platform consolidated 47 siloed data sources and gave our leadership team real-time business visibility for the first time. Decision cycles that took weeks now happen in hours.",
    author: 'Hrishikersh Lokhande',
    role: 'Global Head of Data & Analytics',
    company: 'Black Energy Solutions',
    rating: 5,
  },
]

export const STATS: Stat[] = [
  { value: '25', suffix: '+', label: 'Years of Excellence', description: 'Decades of enterprise technology leadership' },
  { value: '150', suffix: '+', label: 'Countries Served', description: 'Global footprint across six continents' },
  { value: '10000', suffix: '+', label: 'Enterprise Clients', description: 'World-class organizations trust us' },
  { value: '98', suffix: '%', label: 'Client Retention Rate', description: 'Built on trust and consistent delivery' },
  { value: '5000', suffix: '+', label: 'Technology Experts', description: 'Certified professionals across domains' },
  { value: '500', suffix: '+', label: 'Awards & Recognitions', description: 'Industry accolades from global analysts' },
]

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    company: 'Khadad Boka Financial Group',
    industry: 'Financial Services',
    challenge: 'Legacy core banking system causing 72-hour batch processing delays',
    result: 'Real-time processing platform handling 50M daily transactions',
    metric: '43%',
    metricLabel: 'Infrastructure cost reduction',
  },
  {
    id: '2',
    company: 'Harpale Healthcare Systems',
    industry: 'Healthcare',
    challenge: 'Fragmented patient data across 14 disparate EHR systems',
    result: 'Unified health intelligence platform with AI-powered clinical insights',
    metric: '99.97%',
    metricLabel: 'Platform uptime achieved',
  },
  {
    id: '3',
    company: 'TsX Industrial Corp',
    industry: 'Manufacturing',
    challenge: 'Supply chain disruptions costing $80M annually in lost revenue',
    result: 'AI-powered supply chain visibility and predictive risk platform',
    metric: '67%',
    metricLabel: 'Reduction in supply chain disruptions',
  },
  {
    id: '4',
    company: 'R&R Retail Group',
    industry: 'Retail',
    challenge: 'Disconnected e-commerce, in-store, and loyalty systems',
    result: 'Unified omnichannel commerce platform across 800+ store locations',
    metric: '270%',
    metricLabel: 'ROI delivered in 18 months',
  },
]

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Alexandra Chen',
    role: 'Chief Executive Officer',
    bio: 'Former VP at Oracle with 24 years of enterprise software leadership. Alexandra has led Nexylon through three consecutive years of 30%+ revenue growth.',
    linkedin: 'https://linkedin.com',
  },
  {
    id: '2',
    name: 'James Whitfield',
    role: 'Chief Technology Officer',
    bio: 'Ex-Google Fellow and MIT alumnus. James leads our 1,200-strong engineering organization and our global R&D strategy across AI, cloud, and platform innovation.',
    linkedin: 'https://linkedin.com',
  },
  {
    id: '3',
    name: 'Priya Nair',
    role: 'Chief Operating Officer',
    bio: '20+ years in enterprise technology operations. Priya has orchestrated global delivery programs for Fortune 100 clients, driving consistent on-time, on-budget outcomes.',
    linkedin: 'https://linkedin.com',
  },
  {
    id: '4',
    name: 'David Okafor',
    role: 'Chief Revenue Officer',
    bio: 'Former Managing Director at Accenture with expertise in enterprise sales strategy. David oversees our global revenue organization across 28 regional offices.',
    linkedin: 'https://linkedin.com',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'generative-ai-enterprise-2025',
    title: 'The Generative AI Imperative: How Enterprise Leaders Are Moving from Pilot to Production',
    excerpt: 'A majority of enterprise AI pilots stall before reaching production. Here is what separates the organizations successfully scaling generative AI from those stuck in perpetual experimentation.',
    category: 'AI & Machine Learning',
    readTime: '8 min read',
    date: 'May 8, 2025',
    author: 'James Whitfield',
  },
  {
    id: '2',
    slug: 'cloud-cost-optimization-strategy',
    title: 'Cloud Cost Optimization at Scale: A Framework for Reducing Enterprise Cloud Spend by 30–45%',
    excerpt: 'Enterprise cloud costs are ballooning. Our FinOps practitioners share the architectural patterns, tooling strategies, and governance models that consistently deliver significant savings.',
    category: 'Cloud & Infrastructure',
    readTime: '11 min read',
    date: 'April 24, 2025',
    author: 'Sarah Kim',
  },
  {
    id: '3',
    slug: 'zero-trust-implementation-guide',
    title: 'Zero Trust Architecture: A Practical Implementation Guide for Large Enterprises',
    excerpt: 'Zero trust is no longer optional for enterprise security. This guide walks through the phased implementation approach our CISO advisory team recommends for organizations with 1,000+ employees.',
    category: 'Cybersecurity',
    readTime: '14 min read',
    date: 'April 11, 2025',
    author: 'Arjun Desai',
  },
  {
    id: '4',
    slug: 'digital-transformation-failure-factors',
    title: 'Why 70% of Digital Transformations Fail — and the Four Patterns That Succeed',
    excerpt: 'After 25 years and 10,000+ transformation programs, we have identified the common failure modes and the structural patterns that define successful enterprise transformation.',
    category: 'Digital Transformation',
    readTime: '10 min read',
    date: 'March 28, 2025',
    author: 'Alexandra Chen',
  },
  {
    id: '5',
    slug: 'data-mesh-enterprise-adoption',
    title: 'Data Mesh in Practice: Lessons from 50 Enterprise Implementations',
    excerpt: 'Data mesh promises to democratize analytics at scale. After implementing it across 50 enterprise clients, here is what works, what does not, and how to avoid the most costly mistakes.',
    category: 'Data & Analytics',
    readTime: '12 min read',
    date: 'March 14, 2025',
    author: 'Meera Patel',
  },
  {
    id: '6',
    slug: 'industry-40-manufacturing-ai',
    title: 'Industry 4.0 Accelerated: AI-Driven Manufacturing for a Resilient Supply Chain',
    excerpt: 'Smart factories are no longer the future — they are competitive necessity. We examine how leading manufacturers are using AI, IIoT, and digital twins to build resilient operations.',
    category: 'Manufacturing & IoT',
    readTime: '9 min read',
    date: 'February 27, 2025',
    author: 'Thomas Bauer',
  },
]

export const JOBS: Job[] = [
  {
    id: '1',
    title: 'Principal Cloud Architect',
    department: 'Cloud & Infrastructure',
    location: 'San Francisco, CA / Remote',
    type: 'Full-time',
    level: 'Senior',
    description: 'Lead complex multi-cloud architecture engagements for Fortune 500 clients. You will design resilient, cost-optimized cloud platforms and mentor a team of cloud engineers.',
    requirements: [
      '10+ years cloud architecture experience (AWS/Azure/GCP)',
      'AWS Solutions Architect Professional or Azure Solutions Expert certification',
      'Experience leading enterprise cloud migration programs (1000+ servers)',
      'Strong communication skills for executive-level presentations',
    ],
  },
  {
    id: '2',
    title: 'Senior AI/ML Engineer',
    department: 'AI & Data',
    location: 'London, UK / Hybrid',
    type: 'Full-time',
    level: 'Senior',
    description: 'Build and deploy production-grade machine learning systems for enterprise clients in financial services and healthcare. Work on cutting-edge LLM and RAG implementations.',
    requirements: [
      '6+ years ML engineering experience (Python, PyTorch/TensorFlow)',
      'Production experience with LLMs, fine-tuning, and RAG architectures',
      'Experience with MLOps platforms (MLflow, Kubeflow, SageMaker)',
      'Strong knowledge of model deployment patterns and monitoring',
    ],
  },
  {
    id: '3',
    title: 'Cybersecurity Consultant (CISM/CISSP)',
    department: 'Cybersecurity',
    location: 'New York, NY / Hybrid',
    type: 'Full-time',
    level: 'Mid-Senior',
    description: 'Advise enterprise clients on security strategy, zero trust implementation, and regulatory compliance. Lead security assessments, threat modeling, and remediation programs.',
    requirements: [
      'CISM, CISSP, or equivalent certification',
      '7+ years in enterprise cybersecurity consulting',
      'Experience with NIST CSF, ISO 27001, SOC 2, and GDPR',
      'Penetration testing and red team experience preferred',
    ],
  },
  {
    id: '4',
    title: 'Digital Transformation Program Manager',
    department: 'Strategy & Consulting',
    location: 'Chicago, IL / Hybrid',
    type: 'Full-time',
    level: 'Senior',
    description: 'Own end-to-end delivery of large-scale digital transformation programs for global enterprise clients. Manage cross-functional teams, executive stakeholders, and program budgets of $10M+.',
    requirements: [
      'PMP or equivalent certification',
      '10+ years program management experience in IT consulting',
      'Experience managing $10M+ technology transformation programs',
      'Strong executive communication and executive stakeholder management',
    ],
  },
  {
    id: '5',
    title: 'Senior Data Engineer',
    department: 'Data & Analytics',
    location: 'Austin, TX / Remote',
    type: 'Full-time',
    level: 'Senior',
    description: 'Design and build enterprise data platforms, real-time streaming pipelines, and data mesh architectures for leading global organizations.',
    requirements: [
      '7+ years data engineering experience',
      'Expert in Spark, Kafka, dbt, and cloud data warehouses (Snowflake/BigQuery)',
      'Experience designing data mesh and lakehouse architectures',
      'Knowledge of data governance, cataloging, and data quality frameworks',
    ],
  },
  {
    id: '6',
    title: 'Enterprise Account Executive',
    department: 'Sales',
    location: 'Remote (US)',
    type: 'Full-time',
    level: 'Senior',
    description: 'Drive revenue growth by selling Nexylon\'s enterprise software and services portfolio to Fortune 1000 organizations. Own the full sales cycle from prospecting to close.',
    requirements: [
      '8+ years enterprise software / IT services sales experience',
      'Proven track record closing $5M+ annual contracts',
      'Experience selling to CTO, CIO, and CISO stakeholders',
      'Knowledge of cloud, AI, or cybersecurity solution selling preferred',
    ],
  },
]

export const TRUSTED_COMPANIES = [
  'Goldman Sachs', 'JP Morgan', 'Microsoft', 'Pfizer', 'Toyota', 'Siemens',
  'HSBC', 'Airbus', 'Unilever', 'Shell', 'Nestlé', 'Honeywell',
  'Caterpillar', 'Deloitte', 'Mastercard', 'AstraZeneca',
]

export const GLOBAL_OFFICES = [
  { city: 'San Francisco', country: 'USA', type: 'HQ' },
  { city: 'New York', country: 'USA', type: 'Regional' },
  { city: 'London', country: 'UK', type: 'Regional' },
  { city: 'Frankfurt', country: 'Germany', type: 'Regional' },
  { city: 'Singapore', country: 'Singapore', type: 'Regional' },
  { city: 'Sydney', country: 'Australia', type: 'Regional' },
  { city: 'Toronto', country: 'Canada', type: 'Regional' },
  { city: 'Dubai', country: 'UAE', type: 'Regional' },
  { city: 'Tokyo', country: 'Japan', type: 'Regional' },
  { city: 'Mumbai', country: 'India', type: 'Delivery Center' },
  { city: 'Bangalore', country: 'India', type: 'Delivery Center' },
  { city: 'São Paulo', country: 'Brazil', type: 'Regional' },
]
