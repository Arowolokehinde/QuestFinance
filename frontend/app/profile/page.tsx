'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, Zap, Star, Award, TrendingUp, CheckCircle2, Lock, ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface Badge {
  id: string
  protocol: string
  name: string
  icon: string
  description: string
  xpEarned: number
  mintedAt: string
  tokenId: number
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
}

interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  unlocked: boolean
  progress: number
  maxProgress: number
  reward: number
}

// Mock user data
const mockUserData = {
  totalXP: 235,
  level: 4,
  rank: 1247,
  badgesEarned: 2,
  streak: 3,
  nextLevelXP: 300,
}

// Mock badges
const mockBadges: Badge[] = [
  {
    id: '1',
    protocol: 'zest',
    name: 'Zest Master',
    icon: '🏦',
    description: 'Completed all Zest Protocol quests',
    xpEarned: 50,
    mintedAt: '2025-10-12',
    tokenId: 42,
    rarity: 'rare'
  },
  {
    id: '2',
    protocol: 'stackingdao',
    name: 'Liquid Staking Pro',
    icon: '💧',
    description: 'Mastered StackingDAO liquid staking',
    xpEarned: 60,
    mintedAt: '2025-10-10',
    tokenId: 38,
    rarity: 'epic'
  },
]

// Mock locked protocols
const lockedProtocols = [
  { id: 'granite', name: 'Granite', icon: '⛰️', xp: 70 },
  { id: 'hermetica', name: 'Hermetica', icon: '💎', xp: 65 },
  { id: 'arkadiko', name: 'Arkadiko', icon: '🏛️', xp: 55 },
]

// Mock achievements
const mockAchievements: Achievement[] = [
  {
    id: '1',
    title: 'First Steps',
    description: 'Complete your first quest',
    icon: '🎯',
    unlocked: true,
    progress: 1,
    maxProgress: 1,
    reward: 10
  },
  {
    id: '2',
    title: 'Quest Hunter',
    description: 'Complete 5 quests',
    icon: '🏹',
    unlocked: false,
    progress: 2,
    maxProgress: 5,
    reward: 50
  },
  {
    id: '3',
    title: 'Badge Collector',
    description: 'Earn all 5 protocol badges',
    icon: '🎖️',
    unlocked: false,
    progress: 2,
    maxProgress: 5,
    reward: 100
  },
  {
    id: '4',
    title: 'Streak Master',
    description: 'Maintain a 7-day streak',
    icon: '🔥',
    unlocked: false,
    progress: 3,
    maxProgress: 7,
    reward: 75
  },
]

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case 'legendary': return 'from-yellow-600 via-yellow-400 to-yellow-600'
    case 'epic': return 'from-purple-600 via-purple-400 to-purple-600'
    case 'rare': return 'from-blue-600 via-blue-400 to-blue-600'
    default: return 'from-slate-600 via-slate-400 to-slate-600'
  }
}

const getRarityBorder = (rarity: string) => {
  switch (rarity) {
    case 'legendary': return 'border-yellow-500/50 shadow-yellow-500/30'
    case 'epic': return 'border-purple-500/50 shadow-purple-500/30'
    case 'rare': return 'border-blue-500/50 shadow-blue-500/30'
    default: return 'border-slate-500/50 shadow-slate-500/30'
  }
}

export default function RewardsPage() {
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null)
  const [activeTab, setActiveTab] = useState<'badges' | 'achievements'>('badges')

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-slate-950 to-black" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 relative">
          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-12"
          >
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-6xl border-4 border-slate-800">
                🥋
              </div>
              <div className="absolute -bottom-2 -right-2 px-3 py-1 bg-indigo-600 rounded-full font-black text-white text-sm border-2 border-slate-900">
                Lvl {mockUserData.level}
              </div>
            </div>

            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-black mb-2">Your Profile</h1>
              <p className="text-slate-400 mb-4">Track your progress, badges, and achievements</p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                <div className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-3">
                  <div className="text-slate-400 text-xs mb-1">Total XP</div>
                  <div className="text-2xl font-black text-emerald-400">{mockUserData.totalXP}</div>
                </div>
                <div className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-3">
                  <div className="text-slate-400 text-xs mb-1">Global Rank</div>
                  <div className="text-2xl font-black text-indigo-400">#{mockUserData.rank}</div>
                </div>
                <div className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-3">
                  <div className="text-slate-400 text-xs mb-1">Badges</div>
                  <div className="text-2xl font-black text-purple-400">{mockUserData.badgesEarned}/5</div>
                </div>
                <div className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-3">
                  <div className="text-slate-400 text-xs mb-1">Streak</div>
                  <div className="text-2xl font-black text-yellow-400">{mockUserData.streak} 🔥</div>
                </div>
              </div>

              {/* XP Progress Bar */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2 text-sm">
                  <span className="text-slate-400">Level {mockUserData.level} Progress</span>
                  <span className="text-slate-300 font-bold">{mockUserData.totalXP} / {mockUserData.nextLevelXP} XP</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(mockUserData.totalXP / mockUserData.nextLevelXP) * 100}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tabs */}
          <div className="flex items-center gap-4 border-b border-slate-700/50">
            <button
              onClick={() => setActiveTab('badges')}
              className={`px-6 py-3 font-bold text-sm transition-all relative ${
                activeTab === 'badges'
                  ? 'text-white'
                  : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              NFT Badges
              {activeTab === 'badges' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`px-6 py-3 font-bold text-sm transition-all relative ${
                activeTab === 'achievements'
                  ? 'text-white'
                  : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              Achievements
              {activeTab === 'achievements' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <AnimatePresence mode="wait">
          {activeTab === 'badges' ? (
            <motion.div
              key="badges"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Earned Badges */}
              <div>
                <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-yellow-400" />
                  Your NFT Badges ({mockBadges.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mockBadges.map((badge, index) => (
                    <motion.div
                      key={badge.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setSelectedBadge(badge)}
                      className={`group relative bg-gradient-to-br from-slate-900 to-slate-950 border-2 ${getRarityBorder(badge.rarity)} rounded-2xl p-6 cursor-pointer hover:scale-105 transition-all shadow-2xl`}
                    >
                      {/* Rarity shine effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${getRarityColor(badge.rarity)} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />

                      {/* Badge Icon */}
                      <div className="relative mb-4">
                        <div className="w-full aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center text-7xl border border-slate-700 shadow-inner">
                          {badge.icon}
                        </div>
                        <div className="absolute top-2 right-2 px-2 py-1 bg-black/80 backdrop-blur-sm rounded-full text-xs font-bold border border-slate-600">
                          #{badge.tokenId}
                        </div>
                      </div>

                      {/* Badge Info */}
                      <h3 className="font-black text-lg mb-1">{badge.name}</h3>
                      <p className="text-slate-400 text-sm mb-3 line-clamp-2">{badge.description}</p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-3 border-t border-slate-700/50">
                        <div className="flex items-center gap-1">
                          <Zap className="w-4 h-4 text-emerald-400" />
                          <span className="text-emerald-400 font-bold text-sm">+{badge.xpEarned} XP</span>
                        </div>
                        <div className={`px-2 py-1 rounded-full text-xs font-bold uppercase ${getRarityColor(badge.rarity)} bg-clip-text text-transparent`}>
                          {badge.rarity}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Locked Badges */}
              <div>
                <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
                  <Lock className="w-6 h-6 text-slate-400" />
                  Locked Badges
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {lockedProtocols.map((protocol, index) => (
                    <motion.div
                      key={protocol.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="relative bg-slate-900/30 border border-slate-800 rounded-2xl p-6 opacity-60 hover:opacity-80 transition-all"
                    >
                      <div className="absolute inset-0 backdrop-blur-sm rounded-2xl" />
                      <div className="relative">
                        <div className="w-full aspect-square bg-slate-800/50 rounded-xl flex items-center justify-center text-6xl mb-4 grayscale">
                          {protocol.icon}
                        </div>
                        <Lock className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-slate-600" />
                        <h3 className="font-black text-lg mb-1">{protocol.name} Badge</h3>
                        <p className="text-slate-500 text-sm mb-3">Complete quest to unlock</p>
                        <Link
                          href={`/quest/${protocol.id}`}
                          className="flex items-center justify-center gap-2 w-full py-2 bg-indigo-600/80 hover:bg-indigo-600 text-white font-bold rounded-lg transition-all text-sm"
                        >
                          Start Quest
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="achievements"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-purple-400" />
                Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockAchievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative bg-gradient-to-br from-slate-900 to-slate-950 border rounded-xl p-6 ${
                      achievement.unlocked
                        ? 'border-emerald-700/50'
                        : 'border-slate-700/50 opacity-70'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`text-5xl ${achievement.unlocked ? '' : 'grayscale'}`}>
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-black text-lg">{achievement.title}</h3>
                          {achievement.unlocked && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-slate-400 text-sm mb-3">{achievement.description}</p>

                        {/* Progress Bar */}
                        {!achievement.unlocked && (
                          <div className="mb-3">
                            <div className="flex items-center justify-between text-xs mb-1">
                              <span className="text-slate-400">Progress</span>
                              <span className="text-slate-300 font-bold">
                                {achievement.progress}/{achievement.maxProgress}
                              </span>
                            </div>
                            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-indigo-600 rounded-full"
                                style={{ width: `${(achievement.progress / achievement.maxProgress) * 100}%` }}
                              />
                            </div>
                          </div>
                        )}

                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-yellow-400" />
                          <span className="text-yellow-400 font-bold text-sm">+{achievement.reward} XP</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Badge Detail Modal */}
      <AnimatePresence>
        {selectedBadge && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBadge(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className={`max-w-lg w-full bg-gradient-to-br from-slate-900 to-slate-950 border-2 ${getRarityBorder(selectedBadge.rarity)} rounded-2xl p-8 shadow-2xl`}
            >
              <div className="text-8xl text-center mb-6">{selectedBadge.icon}</div>
              <h2 className="text-3xl font-black text-center mb-2">{selectedBadge.name}</h2>
              <p className="text-slate-400 text-center mb-4">{selectedBadge.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                  <div className="text-slate-400 text-xs mb-1">Token ID</div>
                  <div className="text-white font-black">#{selectedBadge.tokenId}</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                  <div className="text-slate-400 text-xs mb-1">XP Earned</div>
                  <div className="text-emerald-400 font-black">+{selectedBadge.xpEarned}</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                  <div className="text-slate-400 text-xs mb-1">Minted</div>
                  <div className="text-white font-black text-sm">{selectedBadge.mintedAt}</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                  <div className="text-slate-400 text-xs mb-1">Rarity</div>
                  <div className={`font-black uppercase text-sm ${getRarityColor(selectedBadge.rarity)} bg-clip-text text-transparent`}>
                    {selectedBadge.rarity}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedBadge(null)}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
