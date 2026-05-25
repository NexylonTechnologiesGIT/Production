import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import Badge from './Badge'

interface SectionHeaderProps {
  eyebrow?: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  className?: string
  titleClassName?: string
  light?: boolean
  id?: string
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  titleClassName,
  light = false,
  id,
}: SectionHeaderProps) {
  return (
    <div className={cn(align === 'center' ? 'text-center' : 'text-left', className)}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className={cn('mb-4', align === 'center' ? 'flex justify-center' : '')}
        >
          <Badge variant="blue">{eyebrow}</Badge>
        </motion.div>
      )}
      <motion.h2
        id={id}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className={cn(
          'font-display font-bold leading-tight tracking-tight',
          light ? 'text-slate-900' : 'text-white',
          'text-3xl sm:text-4xl lg:text-5xl',
          titleClassName
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className={cn(
            'mt-4 max-w-2xl text-lg leading-relaxed',
            align === 'center' ? 'mx-auto' : '',
            light ? 'text-slate-600' : 'text-slate-400'
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
