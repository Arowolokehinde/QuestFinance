'use client'

import { Trophy, TrendingUp, Award, Flame } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const leaderboardData = [
  { rank: 1, name: 'CryptoNinja', xp: 2845, badges: 5, streak: 12, avatar: 'CN', change: 'up' },
  { rank: 2, name: 'BitcoinWizard', xp: 2720, badges: 5, streak: 8, avatar: 'BW', change: 'up' },
  { rank: 3, name: 'DeFiMaster', xp: 2580, badges: 4, streak: 15, avatar: 'DM', change: 'same' },
  { rank: 4, name: 'StacksQueen', xp: 2340, badges: 4, streak: 6, avatar: 'SQ', change: 'down' },
  { rank: 5, name: 'YieldHunter', xp: 2210, badges: 4, streak: 9, avatar: 'YH', change: 'up' },
]

export default function LeaderboardSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-yellow-500/20 border border-yellow-500/40 rounded-full text-[10px] text-yellow-400 font-bold mb-4">
            COMPETITIVE LEARNING
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Compete & Climb the Ranks
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Join thousands of learners competing for the top spot. Earn XP, maintain streaks, and win exclusive rewards each season.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Leaderboard */}
          <div className="lg:col-span-2">
            <div className="bg-[#1e2139] border border-slate-700/50 rounded-2xl p-6">
              {/* Leaderboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-black">This Week's Leaders</h3>
                    <p className="text-slate-400 text-xs">Season 3 • Ends in 4 days</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-lg transition-colors">
                  View Full Board
                </button>
              </div>

              {/* Leaderboard List */}
              <div className="space-y-2">
                {leaderboardData.map((user) => (
                  <div
                    key={user.rank}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all hover:scale-[1.02] ${
                      user.rank === 1
                        ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/40'
                        : user.rank === 2
                        ? 'bg-gradient-to-r from-slate-400/20 to-slate-500/20 border border-slate-500/40'
                        : user.rank === 3
                        ? 'bg-gradient-to-r from-orange-600/20 to-orange-700/20 border border-orange-600/40'
                        : 'bg-slate-800/50 border border-slate-700/50'
                    }`}
                  >
                    {/* Rank */}
                    <div className="w-8 text-center">
                      {user.rank <= 3 ? (
                        <span className="text-2xl">
                          {user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : '🥉'}
                        </span>
                      ) : (
                        <span className="text-slate-400 font-bold text-lg">#{user.rank}</span>
                      )}
                    </div>

                    {/* Avatar */}
                    <Avatar className="w-12 h-12 border-2 border-purple-500/50">
                      <AvatarFallback className="bg-gradient-to-br from-purple-500 to-cyan-500 text-white font-bold">
                        {user.avatar}
                      </AvatarFallback>
                    </Avatar>

                    {/* Name & Stats */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-white font-bold text-sm">{user.name}</h4>
                        {user.streak >= 7 && (
                          <div className="flex items-center gap-1 px-1.5 py-0.5 bg-orange-500/20 border border-orange-500/40 rounded">
                            <Flame className="w-3 h-3 text-orange-400" />
                            <span className="text-orange-400 text-[10px] font-bold">{user.streak}d</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-xs">
                        <span className="text-emerald-400 font-semibold">{user.xp.toLocaleString()} XP</span>
                        <span className="text-slate-500">•</span>
                        <span className="text-purple-400 font-semibold">{user.badges} Badges</span>
                      </div>
                    </div>

                    {/* Trend */}
                    <div>
                      {user.change === 'up' && (
                        <div className="flex items-center gap-1 text-emerald-400">
                          <TrendingUp className="w-4 h-4" />
                          <span className="text-xs font-bold">+2</span>
                        </div>
                      )}
                      {user.change === 'down' && (
                        <div className="flex items-center gap-1 text-red-400 rotate-180">
                          <TrendingUp className="w-4 h-4" />
                          <span className="text-xs font-bold rotate-180">-3</span>
                        </div>
                      )}
                      {user.change === 'same' && (
                        <div className="text-slate-500 text-xs">-</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Your Rank */}
              <div className="mt-4 p-4 bg-cyan-500/10 border border-cyan-500/40 rounded-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400 font-bold text-sm">Your Rank</span>
                    <span className="text-white font-black text-lg">#847</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="text-emerald-400 font-semibold">150 XP</span>
                    <span className="text-purple-400 font-semibold">1 Badge</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Stats & Rewards */}
          <div className="space-y-6">
            {/* Season Info */}
            <div className="bg-[#1e2139] border border-slate-700/50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center">
                  <Award className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Season 3 Rewards</h4>
                  <p className="text-slate-400 text-xs">Top 10 winners</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                  <span className="text-sm text-white font-semibold">1st Place</span>
                  <span className="text-yellow-400 font-bold text-sm">500 STX</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-700/30 border border-slate-600/40 rounded-lg">
                  <span className="text-sm text-white font-semibold">2nd Place</span>
                  <span className="text-slate-300 font-bold text-sm">300 STX</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-orange-600/10 border border-orange-600/30 rounded-lg">
                  <span className="text-sm text-white font-semibold">3rd Place</span>
                  <span className="text-orange-400 font-bold text-sm">200 STX</span>
                </div>
                <div className="text-center pt-2">
                  <p className="text-xs text-slate-500">+ Exclusive NFT badges for top 10</p>
                </div>
              </div>
            </div>

            {/* Competition Stats */}
            <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-2xl p-6">
              <h4 className="text-white font-bold mb-4">This Season</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-slate-400 text-xs">Active Competitors</span>
                    <span className="text-white font-black text-xl">3,247</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-slate-400 text-xs">Quests Completed</span>
                    <span className="text-emerald-400 font-black text-xl">12,893</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-slate-400 text-xs">Badges Earned</span>
                    <span className="text-purple-400 font-black text-xl">4,521</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg shadow-purple-500/20">
              Start Competing
            </button>
          </div>

        </div>
      </div>

      {/* Background effects */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  )
}