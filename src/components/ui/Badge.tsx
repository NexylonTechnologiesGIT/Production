import { type ReactNode } from 'react'
import { cn } from '@/utils/cn'

type BadgeVariant = 'blue' | 'sky' | 'cyan' | 'green' | 'amber' | 'neutral'

const variants: Record<BadgeVariant, string> = {
  blue:    'bg-blue-500/10 text-blue-400 border border-blue-500/20',
  sky:     'bg-sky-500/10 text-sky-400 border border-sky-500/20',
  cyan:    'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20',
  green:   'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
  amber:   'bg-amber-500/10 text-amber-400 border border-amber-500/20',
  neutral: 'bg-white/5 text-slate-300 border border-white/10',
}

interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
  className?: string
  dot?: boolean
}

export default function Badge({ children, variant = 'blue', className, dot }: BadgeProps) {
  return (
    <span className={cn('badge', variants[variant], className)}>
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse-slow" aria-hidden />
      )}
      {children}
    </span>
  )
}
