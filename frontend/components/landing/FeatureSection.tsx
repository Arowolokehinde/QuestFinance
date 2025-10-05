'use client'

import { CheckCircle2, Play, Code2, Trophy, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// Quest Progress Card Component
function QuestCard({ 
  status, 
  title, 
  date, 
  progress 
}: { 
  status: 'in-progress' | 'completed' | 'upcoming'
  title: string
  date: string
  progress?: number
}) {
  const config = {
    'in-progress': {
      badge: 'IN PROGRESS',
      badgeClass: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      icon: <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
        <span className="text-emerald-400 text-lg font-bold">{progress || 2}</span>
      </div>
    },
    'completed': {
      badge: 'COMPLETED',
      badgeClass: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      icon: <div className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
        <CheckCircle2 className="w-5 h-5 text-purple-400" />
      </div>
    },
    'upcoming': {
      badge: 'UPCOMING',
      badgeClass: 'bg-slate-700/20 text-slate-500 border-slate-700/30',
      icon: <div className="w-10 h-10 rounded-lg bg-slate-700/20 border border-slate-700/30 flex items-center justify-center">
        <Play className="w-5 h-5 text-slate-500" />
      </div>
    }
  }

  return (
    <div className="relative bg-[#1e2139]/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-5 hover:border-slate-600/50 transition-all">
      <div className="flex items-start justify-between mb-3">
        <span className={`text-xs font-bold px-3 py-1 rounded-md border ${config[status].badgeClass}`}>
          {config[status].badge}
        </span>
        {config[status].icon}
      </div>
      <h4 className="text-white font-semibold mb-1">{title}</h4>
      <p className="text-slate-500 text-sm">Ends {date}</p>
    </div>
  )
}

// Mobile Mockup Component
function MobileMockup() {
  return (
    <div className="relative">
      {/* Phone Frame */}
      <div className="w-[340px] h-[680px] bg-[#1a1d2e] rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden">
        {/* Status Bar */}
        <div className="px-8 pt-3 pb-2 flex items-center justify-between text-slate-500 text-xs">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-3 border border-slate-600 rounded-sm"></div>
            <div className="w-1 h-3 bg-slate-600 rounded-sm"></div>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-4">
          <h3 className="text-white text-xl font-bold mb-4">Intro to Solana</h3>
          <p className="text-slate-400 text-sm mb-6">Complete the quest steps</p>

          {/* Quest Steps */}
          <div className="space-y-4">
            {/* Completed Step */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-emerald-400 font-semibold mb-1">COMPLETE</p>
                <p className="text-white text-sm font-medium">Writing your first code on Solana</p>
              </div>
            </div>

            {/* In Progress Step */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 animate-pulse">
                <Play className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-cyan-400 font-semibold mb-1">IN PROGRESS</p>
                <p className="text-white text-sm font-medium">Become a pro Solana dev</p>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-400 text-xs">Quest Progress</span>
              <span className="text-white text-xs font-semibold">2 of 10</span>
            </div>
            <Progress value={20} className="h-2 bg-slate-800" />
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute -top-4 -left-4 w-20 h-20 bg-purple-500/20 rounded-2xl blur-xl"></div>
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-2xl blur-xl"></div>
    </div>
  )
}

// User Profile Card Component
function UserProfileCard() {
  return (
    <div className="bg-[#1e2139]/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="w-16 h-16 border-2 border-purple-500/50">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 text-xs font-bold rounded border border-purple-500/30">
              ⚡ 5G XP
            </span>
            <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs font-bold rounded border border-yellow-500/30">
              🔥 2d
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-slate-400 text-sm">Rank</span>
            <span className="text-white font-semibold">18,019 / 20,208</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main Features Section
export default function FeaturesSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section - Community Stats */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="flex -space-x-3">
              <Avatar className="w-10 h-10 border-2 border-slate-900">
                <AvatarFallback className="bg-gradient-to-br from-purple-500 to-purple-700 text-white">A</AvatarFallback>
              </Avatar>
              <Avatar className="w-10 h-10 border-2 border-slate-900">
                <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-cyan-700 text-white">B</AvatarFallback>
              </Avatar>
              <Avatar className="w-10 h-10 border-2 border-slate-900">
                <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white">C</AvatarFallback>
              </Avatar>
              <Avatar className="w-10 h-10 border-2 border-slate-900">
                <AvatarFallback className="bg-gradient-to-br from-pink-500 to-pink-700 text-white">D</AvatarFallback>
              </Avatar>
            </div>
            <span className="text-slate-300">
              Join <span className="text-emerald-400 font-bold">25,412</span> others building now
            </span>
          </div>

          {/* Three Column Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Fast Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-5xl font-black text-white mb-4">Fast</h3>
                <p className="text-slate-300 leading-relaxed">
                  No time? No problem! QuestFi teaches you how to master DeFi protocols faster than you can say "WAGMI"!
                </p>
              </div>
              <div className="space-y-4">
                <QuestCard 
                  status="in-progress" 
                  title="Intro to Zest" 
                  date="Nov 30, 2025"
                  progress={2}
                />
                <QuestCard 
                  status="completed" 
                  title="StackingDAO Basics" 
                  date="Dec 30, 2025"
                />
                <QuestCard 
                  status="upcoming" 
                  title="Granite Deep Dive" 
                  date="Dec 30, 2025"
                />
              </div>
            </div>

            {/* In-depth Column */}
            <div className="space-y-6">
              <div className="bg-[#1e2139]/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <div className="w-full h-48 bg-slate-800/50 rounded-xl mb-6 flex items-center justify-center border border-slate-700/50">
                  <Code2 className="w-16 h-16 text-slate-600" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span className="text-emerald-400 text-sm font-medium">Deposit sBTC</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-700/20 border border-slate-700/50 rounded-lg">
                    <div className="w-5 h-5 rounded-full border-2 border-slate-600"></div>
                    <span className="text-slate-400 text-sm">Borrow USDA</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-700/20 border border-slate-700/50 rounded-lg">
                    <div className="w-5 h-5 rounded-full border-2 border-slate-600"></div>
                    <span className="text-slate-400 text-sm">Repay loan</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-5xl font-black text-white mb-4">In-depth</h3>
                <p className="text-slate-300">
                  Learning can be tough, but QuestFi makes it well, easy! With our simple but super effective challenges, you'll go from zero to blockchain hero without breaking a sweat.
                </p>
              </div>
            </div>

            {/* Structured Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-5xl font-black text-white mb-4">Structured</h3>
                <p className="text-slate-300 leading-relaxed">
                  Not sure where to start? Our learning experts from Harvard, Stanford and other top universities have designed each challenge series to help you learn as quickly and efficiently as possible.
                </p>
              </div>

              <UserProfileCard />

              <MobileMockup />
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
    </section>
  )
}