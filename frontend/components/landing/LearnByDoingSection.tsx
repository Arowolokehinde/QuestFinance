'use client'

import { Trophy, Zap, Shield, Target, CheckCircle2, Star } from 'lucide-react'
import { Progress } from '@/components/ui/progress'

export default function LearnByDoingSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left - Quest Interface Mockup */}
          <div className="relative">
            {/* Quest Card Interface */}
            <div className="bg-[#1e2139] rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl">
              {/* Header with XP */}
              <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 px-6 py-4 border-b border-slate-700/50">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white text-lg font-black">Zest Protocol Quest</h3>
                  <div className="flex items-center gap-2">
                    <div className="px-2.5 py-1 bg-purple-500/20 border border-purple-500/40 rounded-md">
                      <span className="text-purple-400 text-xs font-bold">Level 2</span>
                    </div>
                    <div className="px-2.5 py-1 bg-emerald-500/20 border border-emerald-500/40 rounded-md">
                      <span className="text-emerald-400 text-xs font-bold">+50 XP</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Progress value={60} className="h-2 flex-1" />
                  <span className="text-xs text-slate-400 font-semibold">3/5</span>
                </div>
              </div>

              {/* Quest Steps */}
              <div className="p-6 space-y-3">
                {/* Completed Step */}
                <div className="flex items-start gap-3 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-emerald-400 text-xs font-bold mb-1">COMPLETED • +15 XP</p>
                    <p className="text-white text-sm font-semibold">Convert 10 STX to sBTC</p>
                    <p className="text-slate-400 text-xs mt-1">Balance: 0.01 sBTC</p>
                  </div>
                </div>

                {/* Active Step */}
                <div className="flex items-start gap-3 p-3 bg-cyan-500/10 border border-cyan-500/40 rounded-lg animate-pulse">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-cyan-400 text-xs font-bold mb-1">IN PROGRESS</p>
                    <p className="text-white text-sm font-semibold">Deposit 0.01 sBTC to earn yield</p>
                    <div className="mt-2">
                      <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white text-xs font-bold rounded-lg transition-all">
                        Complete Action
                      </button>
                    </div>
                  </div>
                </div>

                {/* Upcoming Step */}
                <div className="flex items-start gap-3 p-3 bg-slate-800/30 border border-slate-700/50 rounded-lg opacity-60">
                  <div className="w-8 h-8 rounded-lg bg-slate-700/30 border border-slate-600/40 flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-slate-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-500 text-xs font-bold mb-1">LOCKED</p>
                    <p className="text-slate-400 text-sm font-semibold">Borrow USDA against collateral</p>
                  </div>
                </div>
              </div>

              {/* Badge Preview */}
              <div className="px-6 pb-6">
                <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-lg p-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center text-2xl">
                    🏅
                  </div>
                  <div className="flex-1">
                    <p className="text-yellow-400 text-xs font-bold mb-0.5">QUEST REWARD</p>
                    <p className="text-white text-sm font-bold">Zest Loan Master NFT Badge</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating XP notification */}
            <div className="absolute -top-4 -right-4 bg-emerald-500 text-white px-4 py-2 rounded-full shadow-lg border-2 border-emerald-400 animate-bounce">
              <span className="text-sm font-black">+15 XP</span>
            </div>

            {/* Floating decoration */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-500/40 rounded-full text-[10px] text-cyan-400 font-bold">
              LEARN BY DOING
            </div>

            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
              Master DeFi Through Epic Quests
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Forget boring tutorials. QuestFi transforms DeFi learning into an adventure with gamified quests, real-time simulations, and NFT badges that prove your skills on the blockchain.
            </p>

            {/* Feature points */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Quest-Based Learning</h4>
                  <p className="text-slate-400 text-sm">Complete missions, earn XP, level up, and unlock new protocols—just like your favorite RPG.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Safe DeFi Sandbox</h4>
                  <p className="text-slate-400 text-sm">Practice lending, borrowing, and staking with test tokens. Learn without risking real funds.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Earn NFT Badges</h4>
                  <p className="text-slate-400 text-sm">Prove your DeFi mastery with on-chain NFT credentials for each protocol you conquer.</p>
                </div>
              </div>
            </div>

            {/* Stats comparison */}
            <div className="pt-6 bg-slate-900/50 border border-slate-800 rounded-xl p-5">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-black text-white mb-1">50+</div>
                  <div className="text-xs text-slate-400">Interactive Quests</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-emerald-400 mb-1">5</div>
                  <div className="text-xs text-slate-400">DeFi Protocols</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-purple-400 mb-1">∞</div>
                  <div className="text-xs text-slate-400">XP to Earn</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  )
}