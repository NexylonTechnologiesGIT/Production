import { type ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glass?: boolean
  onClick?: () => void
}

export default function Card({ children, className, hover = true, glass = false, onClick }: CardProps) {
  const Tag = onClick ? 'button' : 'div'
  return (
    <Tag
      onClick={onClick}
      className={cn(
        'rounded-2xl border p-6 transition-all duration-300',
        glass
          ? 'bg-white/5 border-white/10 backdrop-blur-md'
          : 'bg-brand-900 border-brand-700',
        hover && 'hover:-translate-y-1 hover:border-brand-600 hover:shadow-card-hover cursor-default',
        onClick && 'cursor-pointer text-left w-full',
        className
      )}
    >
      {children}
    </Tag>
  )
}
