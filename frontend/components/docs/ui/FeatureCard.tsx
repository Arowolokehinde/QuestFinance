import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  stats: string
  delay?: number
}

export default function FeatureCard({ icon: Icon, title, description, stats, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-emerald-500/50 transition-all"
    >
      <div className="w-10 h-10 bg-emerald-600/20 rounded-lg flex items-center justify-center mb-3">
        <Icon className="w-5 h-5 text-emerald-400" />
      </div>
      <h3 className="text-base font-bold mb-1.5">{title}</h3>
      <p className="text-slate-400 text-sm mb-2">{description}</p>
      <span className="text-xs font-bold text-emerald-400">{stats}</span>
    </motion.div>
  )
}
