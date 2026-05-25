import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/data'
import SectionHeader from '@/components/ui/SectionHeader'

export default function Testimonials() {
  return (
    <section
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, #0A1628 0%, #060F1E 100%)' }}
      aria-labelledby="testimonials-heading"
    >
      <div className="container-wide">
        <SectionHeader
          eyebrow="Client Success"
          title={<>What Enterprise Leaders <span className="gradient-text">Say About Us</span></>}
          description="Real outcomes from real clients. These are the voices of executives who trusted Nexylon to deliver."
          id="testimonials-heading"
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 flex flex-col hover:border-white/20 transition-colors duration-300 hover:-translate-y-1"
              aria-label={`Testimonial from ${testimonial.author}, ${testimonial.role} at ${testimonial.company}`}
            >
              {/* Rating */}
              <div className="flex gap-0.5 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-amber-400 fill-amber-400" aria-hidden />
                ))}
              </div>

              {/* Quote icon */}
              <Quote size={24} className="text-blue-500/40 mb-3" aria-hidden />

              {/* Quote text */}
              <blockquote className="text-slate-300 text-sm leading-relaxed flex-1">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <footer className="mt-5 pt-4 border-t border-white/8 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm font-display flex-shrink-0"
                  aria-hidden
                >
                  {testimonial.author.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <cite className="not-italic text-sm font-semibold text-white">
                    {testimonial.author}
                  </cite>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
