import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useCounter } from '@/hooks/useCounter'
import type { Stat } from '@/types'

interface AnimatedCounterProps {
  stat: Stat
  className?: string
}

export default function AnimatedCounter({ stat, className }: AnimatedCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const numericEnd = parseInt(stat.value.replace(/\D/g, ''), 10)
  const count = useCounter(numericEnd, 2200, 0, isInView)

  return (
    <div ref={ref} className={className}>
      <div className="font-display text-5xl sm:text-6xl font-black text-white tracking-tight leading-none">
        {count.toLocaleString()}
        <span className="gradient-text">{stat.suffix}</span>
      </div>
      <div className="mt-2 text-lg font-semibold text-slate-200">{stat.label}</div>
      <div className="mt-1 text-sm text-slate-500">{stat.description}</div>
    </div>
  )
}
