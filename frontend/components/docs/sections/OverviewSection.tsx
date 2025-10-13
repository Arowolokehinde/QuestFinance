import { motion } from 'framer-motion'
import FeatureCard from '../ui/FeatureCard'
import TechStackBadge from '../ui/TechStackBadge'
import { FEATURES, TECH_STACK } from '../data/constants'

export default function OverviewSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Welcome to QuestFi
        </h2>
        <p className="text-xl text-slate-300 mb-6">
          A gamified DeFi learning platform built on Stacks blockchain with Turnkey-powered authentication.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid sm:grid-cols-2 gap-4">
        {FEATURES.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} delay={idx * 0.1} />
        ))}
      </div>

      {/* Tech Stack */}
      <div>
        <h3 className="text-2xl font-black mb-4">Tech Stack</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {TECH_STACK.map((tech, idx) => (
            <TechStackBadge key={idx} {...tech} delay={idx * 0.05} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
