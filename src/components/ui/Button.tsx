import { type ButtonHTMLAttributes, type AnchorHTMLAttributes, forwardRef } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { cn } from '@/utils/cn'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size    = 'sm' | 'md' | 'lg'

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-blue-600 hover:bg-blue-500 text-white shadow-glow-blue hover:shadow-lg',
  secondary:
    'bg-white/5 hover:bg-white/10 border border-white/20 text-white backdrop-blur-sm',
  outline:
    'border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-600',
  ghost:
    'text-slate-300 hover:text-white hover:bg-white/5',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-sm gap-2',
  lg: 'px-8 py-4 text-base gap-2.5',
}

const baseClasses =
  'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950 disabled:opacity-50 disabled:cursor-not-allowed'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      {...props}
    >
      {children}
    </button>
  )
)
Button.displayName = 'Button'

interface LinkButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: LinkProps['to']
  variant?: Variant
  size?: Size
  external?: boolean
}

export function LinkButton({ to, variant = 'primary', size = 'md', className, children, external, ...props }: LinkButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className)
  if (external) {
    return (
      <a href={to as string} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={classes} {...props}>
      {children}
    </Link>
  )
}
