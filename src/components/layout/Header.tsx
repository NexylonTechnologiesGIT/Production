import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/utils/cn'
import { NAV_ITEMS } from '@/data'
import { LinkButton } from '@/components/ui/Button'
import type { NavItem } from '@/types'
import logo from '@/assets/logo.png'

function DropdownMenu({ items, isOpen }: { items: NavItem[]; isOpen: boolean }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 6, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.98 }}
          transition={{ duration: 0.14, ease: 'easeOut' }}
          className="absolute top-full left-0 mt-2 w-56 rounded-2xl bg-brand-950/95 backdrop-blur-2xl border border-white/[0.06] shadow-[0_10px_40px_rgba(0,0,0,0.45)] overflow-hidden z-[60]"
          role="menu"
        >
          <div className="p-1.5">
            {items.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                role="menuitem"
                className={({ isActive }) =>
                  cn(
                    'flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150',
                    isActive
                      ? 'text-white bg-white/[0.08]'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
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
            'px-3 py-2 rounded-xl text-sm font-medium transition-all duration-150',
            isActive
              ? 'text-white'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
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
        className="flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-white/[0.04] transition-all duration-150"
      >
        {item.label}

        <ChevronDown
          size={14}
          className={cn(
            'transition-transform duration-200',
            open ? 'rotate-180' : ''
          )}
          aria-hidden
        />
      </button>

      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
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
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      {/* Prevent fixed header overlap */}
      <div className="h-[68px] lg:h-[76px]" />

      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b',
          scrolled
            ? 'bg-brand-950/80 backdrop-blur-2xl border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.18)]'
            : 'bg-transparent border-transparent'
        )}
        role="banner"
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-[68px] lg:h-[76px]">

            {/* ───────── Logo ───────── */}
            <Link
              to="/"
              aria-label="Nexylon Technologies Home"
              className="relative z-[70] flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 rounded-xl"
            >
              <img
                src={logo}
                alt="Nexylon Technologies"
                width="160"
                height="40"
                draggable={false}
                className="
                  h-9
                  lg:h-10
                  w-auto
                  object-contain
                  select-none
                  transition-transform duration-200
                  hover:scale-[1.01]
                "
              />
            </Link>

            {/* ───────── Desktop Nav ───────── */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {NAV_ITEMS.filter((i) => i.label !== 'Home').map((item) => (
                <NavItemDesktop key={item.href} item={item} />
              ))}
            </nav>

            {/* ───────── Desktop CTA ───────── */}
            <div className="hidden lg:flex items-center gap-2">
              <NavLink
                to="/contact"
                className="px-3 py-2 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors duration-150"
              >
                Talk to an Expert
              </NavLink>

              <LinkButton to="/contact" size="sm">
                Get Started
              </LinkButton>
            </div>

            {/* ───────── Mobile Toggle ───────── */}
            <button
              className="
                lg:hidden
                relative
                z-[70]
                p-2.5
                rounded-xl
                text-slate-400
                hover:text-slate-200
                hover:bg-white/[0.05]
                transition-all duration-150
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-500/60
              "
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* ───────── Mobile Menu ───────── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="
                lg:hidden
                overflow-hidden
                border-t border-white/[0.06]
                bg-brand-950/95
                backdrop-blur-2xl
                z-[60]
              "
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
                          'flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150',
                          isActive
                            ? 'text-white bg-white/[0.08]'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]'
                        )
                      }
                    >
                      {item.label}
                    </NavLink>

                    {item.children && (
                      <div className="ml-4 mt-1 mb-2 space-y-1 pl-4 border-l border-white/[0.06]">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.href}
                            to={child.href}
                            className="
                              flex items-center
                              px-3 py-2
                              rounded-lg
                              text-xs font-medium
                              text-slate-500
                              hover:text-slate-300
                              hover:bg-white/[0.04]
                              transition-all duration-150
                            "
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="pt-4 border-t border-white/[0.06]">
                  <LinkButton
                    to="/contact"
                    size="md"
                    className="w-full justify-center"
                  >
                    Get Started
                  </LinkButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}