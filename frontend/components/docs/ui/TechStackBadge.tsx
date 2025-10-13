import { motion } from 'framer-motion'

interface TechStackBadgeProps {
  name: string
  category: string
  color: string
  delay?: number
}

export default function TechStackBadge({ name, category, color, delay = 0 }: TechStackBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      className={`p-4 bg-gradient-to-br ${color} rounded-lg text-center`}
    >
      <p className="font-bold text-sm">{name}</p>
      <p className="text-xs opacity-80 mt-1">{category}</p>
    </motion.div>
  )
}
