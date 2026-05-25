import { Link } from 'react-router-dom'
import { Zap, Linkedin, Twitter, Youtube, Github, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'AI & Machine Learning', href: '/services#ai-ml' },
    { label: 'Cloud Architecture', href: '/services#cloud' },
    { label: 'Enterprise Software', href: '/services#enterprise' },
    { label: 'Cybersecurity', href: '/services#security' },
    { label: 'Data Analytics', href: '/services#analytics' },
    { label: 'IT Consulting', href: '/services#consulting' },
  ],
  Solutions: [
    { label: 'Nexylon Cloud Suite', href: '/solutions#cloud-suite' },
    { label: 'Nexylon AI Platform', href: '/solutions#ai-platform' },
    { label: 'Digital Transformation Hub', href: '/solutions#dth' },
    { label: 'Data Intelligence', href: '/solutions#data-platform' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Leadership', href: '/about#leadership' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Press & Media', href: '/about#press' },
    { label: 'Contact Us', href: '/contact' },
  ],
  Resources: [
    { label: 'Case Studies', href: '/solutions#case-studies' },
    { label: 'White Papers', href: '/blog' },
    { label: 'Webinars', href: '/blog' },
    { label: 'Documentation', href: '/contact' },
    { label: 'Partner Program', href: '/contact' },
    { label: 'Trust & Security', href: '/services#security' },
  ],
}

const social = [
  { label: 'LinkedIn', href: 'https://linkedin.com/company/Nexylon-Technologies', Icon: Linkedin },
  { label: 'Twitter / X', href: 'https://twitter.com/nexylonsw', Icon: Twitter },
  { label: 'YouTube', href: 'https://youtube.com/@nexylontechnologies', Icon: Youtube },
  { label: 'GitHub', href: 'https://github.com/Nexylon-Technologies', Icon: Github },
]

export default function Footer() {
  return (
    <footer className="bg-brand-950 border-t border-white/8" role="contentinfo">
      {/* Main footer content */}
      <div className="container-wide py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group w-fit" aria-label="Nexylon Technologies">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <Zap size={16} className="text-white" aria-hidden />
              </div>
              <span className="font-display font-bold text-base text-white">
                Nexylon<span className="text-blue-400"> Technologies</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Empowering global enterprises with AI-powered software, cloud transformation, and
              digital innovation. Trusted by 10,000+ organizations across 150+ countries.
            </p>

            {/* Contact */}
            <address className="mt-6 not-italic space-y-2">
              <a href="tel:+18006663684" className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors group w-fit">
                <Phone size={14} className="text-slate-500 group-hover:text-blue-400 transition-colors" aria-hidden />
                +1 (800) NEXYLON
              </a>
              <a href="mailto:enterprise@nexylontechnologies.com" className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors group w-fit">
                <Mail size={14} className="text-slate-500 group-hover:text-blue-400 transition-colors" aria-hidden />
                enterprise@nexylontechnologies.com
              </a>
              <span className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin size={14} className="text-slate-500 mt-0.5 shrink-0" aria-hidden />
                350 Market St, Suite 2400<br />San Francisco, CA 94105
              </span>
            </address>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6" aria-label="Social media links">
              {social.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <Icon size={16} aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-sm font-semibold text-white mb-4">{section}</h3>
              <ul className="space-y-2.5" role="list">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      to={href}
                      className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-150"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Nexylon Technologies, Inc. All rights reserved.
          </p>
          <nav aria-label="Legal navigation" className="flex items-center gap-4 flex-wrap justify-center">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility', 'Sitemap'].map((item) => (
              <Link
                key={item}
                to="/contact"
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
