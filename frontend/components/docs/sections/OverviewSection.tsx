import { motion } from 'framer-motion'
import FeatureCard from '../ui/FeatureCard'
import TechStackBadge from '../ui/TechStackBadge'
import { FEATURES, TECH_STACK } from '../data/constants'

export default function OverviewSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-3xl font-black mb-3 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
          Welcome to QuestFi
        </h2>
        <p className="text-lg text-slate-300 mb-3">
          A gamified DeFi learning platform built on Stacks blockchain with Turnkey-powered authentication.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid sm:grid-cols-2 gap-3">
        {FEATURES.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} delay={idx * 0.1} />
        ))}
      </div>

      {/* Tech Stack */}
      <div>
        <h3 className="text-xl font-black mb-3">Tech Stack</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {TECH_STACK.map((tech, idx) => (
            <TechStackBadge key={idx} {...tech} delay={idx * 0.05} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
