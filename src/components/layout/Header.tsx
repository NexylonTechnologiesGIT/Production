import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/utils/cn'
import { NAV_ITEMS } from '@/data'
import { LinkButton } from '@/components/ui/Button'
import type { NavItem } from '@/types'

function DropdownMenu({ items, isOpen }: { items: NavItem[]; isOpen: boolean }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.97 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="absolute top-full left-0 mt-2 w-56 glass rounded-xl shadow-elevated overflow-hidden z-50"
          role="menu"
        >
          {items.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              role="menuitem"
              className={({ isActive }) =>
                cn(
                  'flex items-center px-4 py-3 text-sm font-medium transition-colors duration-150',
                  isActive
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function NavItemDesktop({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  if (!item.children) {
    return (
      <NavLink
        to={item.href}
        className={({ isActive }) =>
          cn(
            'px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
            isActive ? 'text-blue-400' : 'text-slate-300 hover:text-white'
          )
        }
      >
        {item.label}
      </NavLink>
    )
  }

  return (
    <div ref={ref} className="relative">
      <button
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
      >
        {item.label}
        <ChevronDown
          size={14}
          className={cn('transition-transform duration-200', open ? 'rotate-180' : '')}
          aria-hidden
        />
      </button>
      <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
        <DropdownMenu items={item.children} isOpen={open} />
      </div>
    </div>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-40 transition-all duration-300',
        scrolled
          ? 'bg-brand-900/92 backdrop-blur-lg border-b border-white/[0.08] shadow-glass'
          : 'bg-transparent'
      )}
      role="banner"
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none"
            aria-label="Nexylon Technologies – Home"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-glow-teal group-hover:shadow-glow-blue transition-shadow duration-300">
              <Zap size={16} className="text-white" aria-hidden />
            </div>
            <span className="font-display font-bold text-lg text-white tracking-tight">
              Nexylon
              <span className="text-blue-400"> Technologies</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_ITEMS.filter((i) => i.label !== 'Home').map((item) => (
              <NavItemDesktop key={item.href} item={item} />
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <NavLink
              to="/contact"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors px-3 py-2"
            >
              Talk to an Expert
            </NavLink>
            <LinkButton to="/contact" size="sm">
              Get Started
            </LinkButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-white/8 bg-brand-950/95 backdrop-blur-md"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="container-wide py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.href}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      cn(
                        'flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                        isActive ? 'text-blue-400 bg-blue-500/10' : 'text-slate-300 hover:text-white hover:bg-white/5'
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                  {item.children && (
                    <div className="ml-4 mt-0.5 space-y-0.5">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.href}
                          to={child.href}
                          className="flex items-center px-3 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-colors"
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 pb-1 border-t border-white/8">
                <LinkButton to="/contact" size="md" className="w-full justify-center">
                  Get Started
                </LinkButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
