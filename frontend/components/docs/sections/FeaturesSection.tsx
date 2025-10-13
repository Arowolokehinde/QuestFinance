import { motion } from 'framer-motion'
import { Trophy, Shield, Zap, Check } from 'lucide-react'
import { PROTOCOLS } from '../data/constants'

export default function FeaturesSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-3xl font-black mb-3">Core Features</h2>
        <p className="text-slate-300 mb-4">
          QuestFi combines gamification, blockchain, and education into a seamless learning experience.
        </p>
      </div>

      {/* Quest System */}
      <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
        <div className="flex items-center gap-3 mb-3">
          <Trophy className="w-8 h-8 text-yellow-400" />
          <h3 className="text-xl font-bold">Quest System</h3>
        </div>
        <p className="text-slate-300 mb-3">
          Learn about major DeFi protocols through interactive, step-by-step quests. Each quest teaches you the core concepts, mechanisms, and best practices.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {PROTOCOLS.map((protocol, idx) => (
            <div
              key={idx}
              className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center gap-3"
            >
              <span className="text-3xl">{protocol.icon}</span>
              <div className="flex-1">
                <p className="font-bold">{protocol.name}</p>
                <p className="text-xs text-slate-400">{protocol.rarity}</p>
              </div>
              <span className="text-sm font-bold text-emerald-400">+{protocol.xp} XP</span>
            </div>
          ))}
        </div>
      </div>

      {/* NFT Badges */}
      <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
        <div className="flex items-center gap-3 mb-3">
          <Shield className="w-8 h-8 text-emerald-400" />
          <h3 className="text-xl font-bold">Soul-Bound NFT Badges</h3>
        </div>
        <p className="text-slate-300 mb-3">
          Earn unique NFT badges for completing protocol quests. These badges are soul-bound (non-transferable) and serve as permanent proof of your DeFi expertise.
        </p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-slate-300">
            <Check className="w-4 h-4 text-green-400" />
            SIP-009 compliant NFTs
          </li>
          <li className="flex items-center gap-2 text-slate-300">
            <Check className="w-4 h-4 text-green-400" />
            Non-transferable (soul-bound)
          </li>
          <li className="flex items-center gap-2 text-slate-300">
            <Check className="w-4 h-4 text-green-400" />
            On-chain metadata storage
          </li>
          <li className="flex items-center gap-2 text-slate-300">
            <Check className="w-4 h-4 text-green-400" />
            Rarity tiers (Common to Legendary)
          </li>
        </ul>
      </div>

      {/* XP & Leveling */}
      <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
        <div className="flex items-center gap-3 mb-3">
          <Zap className="w-8 h-8 text-yellow-400" />
          <h3 className="text-xl font-bold">XP & Leveling System</h3>
        </div>
        <p className="text-slate-300 mb-3">
          Earn XP for completing quest steps and level up your profile. The progressive leveling formula ensures balanced progression.
        </p>
        <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
          <p className="text-sm font-mono text-emerald-400 mb-2">XP Formula:</p>
          <code className="text-yellow-400 font-mono">
            XP Required = 100 + (Level - 1) × 50
          </code>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">Level 1 → 2:</span>
              <span className="text-white font-bold">100 XP</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Level 5 → 6:</span>
              <span className="text-white font-bold">300 XP</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Level 10 → 11:</span>
              <span className="text-white font-bold">550 XP</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
