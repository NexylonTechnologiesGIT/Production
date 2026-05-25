import { motion } from 'framer-motion'
import { MapPin, Building2 } from 'lucide-react'
import { GLOBAL_OFFICES } from '@/data'
import SectionHeader from '@/components/ui/SectionHeader'

const typeColor: Record<string, string> = {
  HQ: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
  Regional: 'text-sky-400 border-sky-500/30 bg-sky-500/10',
  'Delivery Center': 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
}

export default function GlobalPresence() {
  return (
    <section
      className="section-padding"
      style={{ background: 'linear-gradient(135deg, #060D1A 0%, #0A1628 60%, #060D1A 100%)' }}
      aria-labelledby="global-heading"
    >
      <div className="container-wide">
        <SectionHeader
          eyebrow="Global Footprint"
          title={<>Operating Where <span className="gradient-text">You Are</span></>}
          description="With 28 offices across six continents and delivery centers providing round-the-clock support, Nexylon brings enterprise expertise to every corner of the globe."
          id="global-heading"
        />

        {/* Region stats */}
        <div className="mt-12 grid grid-cols-3 sm:grid-cols-6 gap-4 mb-12">
          {[
            { region: 'North America', offices: 3 },
            { region: 'Europe', offices: 4 },
            { region: 'Asia Pacific', offices: 3 },
            { region: 'South Asia', offices: 2 },
            { region: 'Middle East', offices: 1 },
            { region: 'Latin America', offices: 1 },
          ].map(({ region, offices }) => (
            <motion.div
              key={region}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-center p-4 rounded-xl bg-white/3 border border-white/8"
            >
              <div className="text-2xl font-black font-display gradient-text">{offices}</div>
              <div className="text-xs text-slate-400 mt-1 leading-tight">{region}</div>
            </motion.div>
          ))}
        </div>

        {/* Office grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {GLOBAL_OFFICES.map(({ city, country, type }, i) => (
            <motion.div
              key={`${city}-${country}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-xl p-3 hover:border-white/20 transition-all duration-200 hover:bg-white/8 group"
              aria-label={`${city}, ${country} — ${type}`}
            >
              <div className="flex items-center gap-1.5 mb-2">
                <MapPin size={12} className="text-blue-400" aria-hidden />
                <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full border ${typeColor[type]}`}>
                  {type === 'Delivery Center' ? 'Delivery' : type}
                </span>
              </div>
              <p className="text-sm font-semibold text-white">{city}</p>
              <p className="text-xs text-slate-500">{country}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom stat row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-8 pt-10 border-t border-white/8"
        >
          {[
            { icon: <Building2 size={18} className="text-blue-400" aria-hidden />, value: '28 Offices', sub: 'Across 6 continents' },
            { icon: <MapPin size={18} className="text-cyan-400" aria-hidden />, value: '150+ Countries', sub: 'Clients served globally' },
            { icon: <Building2 size={18} className="text-cyan-400" aria-hidden />, value: '12 Delivery Centers', sub: 'Follow-the-sun support' },
          ].map(({ icon, value, sub }) => (
            <div key={value} className="flex items-center gap-3 text-center sm:text-left">
              {icon}
              <div>
                <div className="text-base font-bold font-display text-white">{value}</div>
                <div className="text-xs text-slate-400">{sub}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
