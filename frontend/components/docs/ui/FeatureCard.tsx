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
      className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-indigo-500/50 transition-all"
    >
      <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-indigo-400" />
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-slate-400 text-sm mb-3">{description}</p>
      <span className="text-xs font-bold text-indigo-400">{stats}</span>
    </motion.div>
  )
}
