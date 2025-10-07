
'use client'

import { CheckCircle2, Play, Code2, Circle } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// Add animation keyframes in a style tag or global CSS
const styles = `
  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .animate-spin-slow {
    animation: spin-slow 8s linear infinite;
  }
`



// Quest Card Component
function QuestCard({ 
  status, 
  title, 
  date, 
  stepNumber 
}: { 
  status: 'in-progress' | 'completed' | 'upcoming'
  title: string
  date: string
  stepNumber?: number
}) {
  const config = {
    'in-progress': {
      badge: 'IN PROGRESS',
      badgeClass: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[9px] font-bold px-2 py-0.5 rounded',
      iconBg: 'bg-emerald-500/20 border-emerald-500/40',
      iconColor: 'text-emerald-400',
      icon: <span className="text-base font-black">{stepNumber}</span>
    },
    'completed': {
      badge: 'COMPLETED',
      badgeClass: 'bg-purple-500/20 text-purple-400 border border-purple-500/40 text-[9px] font-bold px-2 py-0.5 rounded',
      iconBg: 'bg-purple-500/20 border-purple-500/40',
      iconColor: 'text-purple-400',
      icon: <CheckCircle2 className="w-4 h-4" />
    },
    'upcoming': {
      badge: 'UPCOMING',
      badgeClass: 'bg-slate-700/30 text-slate-500 border border-slate-600/40 text-[9px] font-bold px-2 py-0.5 rounded',
      iconBg: 'bg-slate-700/20 border-slate-600/40',
      iconColor: 'text-slate-500',
      icon: <Play className="w-3.5 h-3.5" />
    }
  }

  const c = config[status]

  return (
    <div className="bg-[#272b42]/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:border-slate-600/70 transition-all">
      <div className="flex items-start justify-between mb-2.5">
        <span className={c.badgeClass}>{c.badge}</span>
        <div className={`w-9 h-9 rounded-lg border flex items-center justify-center ${c.iconBg} ${c.iconColor}`}>
          {c.icon}
        </div>
      </div>
      <h4 className="text-white font-bold text-sm mb-0.5">{title}</h4>
      <p className="text-slate-500 text-xs">Ends {date}</p>
    </div>
  )
}

// Mobile Phone Mockup
function PhoneMockup() {
  return (
    <div className="relative w-full max-w-[280px] mx-auto">
      <div className="bg-[#1e2139] rounded-[2rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden">
        {/* Status Bar */}
        <div className="px-5 pt-1.5 pb-1.5 flex items-center justify-between">
          <span className="text-slate-500 text-[10px] font-medium">9:41</span>
          <div className="flex items-center gap-0.5">
            <div className="w-2.5 h-2 border border-slate-600 rounded-sm"></div>
            <div className="w-0.5 h-2 bg-slate-600 rounded-sm"></div>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 pb-5">
          <h3 className="text-white text-lg font-bold mb-1">Intro to Zest</h3>
          <p className="text-slate-400 text-[10px] mb-5">Complete the quest steps</p>

          {/* Steps */}
          <div className="space-y-3">
            {/* Completed */}
            <div className="flex items-start gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="flex-1 pt-0.5">
                <p className="text-[9px] text-emerald-400 font-bold mb-0.5">COMPLETE</p>
                <p className="text-white text-xs font-medium leading-snug">Convert STX to sBTC</p>
              </div>
            </div>

            {/* In Progress */}
            <div className="flex items-start gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center flex-shrink-0">
                <Play className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="flex-1 pt-0.5">
                <p className="text-[9px] text-cyan-400 font-bold mb-0.5">IN PROGRESS</p>
                <p className="text-white text-xs font-medium leading-snug">Deposit sBTC to earn yield</p>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-5">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-slate-500 text-[10px]">Quest Progress</span>
              <span className="text-white text-[10px] font-semibold">1 of 4</span>
            </div>
            <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full w-1/4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Code Sandbox Mockup
function SandboxMockup() {
  return (
    <div className="bg-[#1e2139] border border-slate-700/50 rounded-xl p-4 backdrop-blur-sm">
      {/* Code Area */}
      <div className="bg-[#151827] rounded-lg p-4 mb-4 border border-slate-800/50">
        <div className="flex items-center justify-center h-24">
          <Code2 className="w-12 h-12 text-slate-700" />
        </div>
      </div>

      {/* Checklist */}
      <div className="space-y-2.5">
        <div className="flex items-center gap-2.5 p-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span className="text-emerald-400 text-xs font-semibold">Deposit sBTC</span>
        </div>
        <div className="flex items-center gap-2.5 p-2.5 bg-slate-800/30 border border-slate-700/50 rounded-lg">
          <Circle className="w-4 h-4 text-slate-600 flex-shrink-0" />
          <span className="text-slate-500 text-xs font-medium">Borrow USDA</span>
        </div>
        <div className="flex items-center gap-2.5 p-2.5 bg-slate-800/30 border border-slate-700/50 rounded-lg">
          <Circle className="w-4 h-4 text-slate-600 flex-shrink-0" />
          <span className="text-slate-500 text-xs font-medium">Repay loan</span>
        </div>
      </div>
    </div>
  )
}

// User Stats Card
function UserStatsCard() {
  return (
    <div className="bg-[#272b42]/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4">
      <div className="flex items-center gap-3">
         <Avatar className="w-16 h-16 border-2 border-purple-500/50">
          <AvatarImage src="https://github.com/shadcn.png" />           <AvatarFallback>U</AvatarFallback>
          </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="px-1.5 py-0.5 bg-purple-500/20 border border-purple-500/40 text-purple-400 text-[9px] font-bold rounded">
              ⚡ 5G XP
            </span>
            <span className="px-1.5 py-0.5 bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 text-[9px] font-bold rounded">
              🔥 2d
            </span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-slate-500 text-[10px] font-medium">Rank</span>
            <span className="text-white text-xs font-bold">18,019 / 20,208</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main Component
export default function FeaturesSection() {
  return (
    <>
      <style>{styles}</style>
      <section className="relative py-12 lg:py-16 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Community Header */}
        <div className="flex items-center gap-2.5 mb-10">
          <div className="flex -space-x-2">
            <Avatar className="w-8 h-8 border-2 border-black/50">
              <AvatarFallback className="bg-gradient-to-br from-purple-500 to-purple-600 text-white text-xs font-bold">A</AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8 border-2 border-black/50">
              <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-cyan-600 text-white text-xs font-bold">B</AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8 border-2 border-black/50">
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white text-xs font-bold">C</AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8 border-2 border-black/50">
              <AvatarFallback className="bg-gradient-to-br from-pink-500 to-pink-600 text-white text-xs font-bold">D</AvatarFallback>
            </Avatar>
          </div>
          <span className="text-slate-400 text-sm font-medium">
            Join <span className="text-emerald-400 font-semibold">25,412</span> others building now
          </span>
        </div>

        {/* Three Column Grid */}
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6">
          
          {/* Left - Fast */}
          <div className="space-y-4">
            <div className="mb-6">
              <h3 className="text-4xl lg:text-5xl font-black text-white mb-3 leading-tight">Fast</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                No time? No problem! QuestFi teaches you how to master DeFi protocols faster than you can say "WAGMI"!
              </p>
            </div>
            <div className="space-y-3">
              <QuestCard status="in-progress" title="Intro to Zest" date="Nov 30, 2025" stepNumber={2} />
              <QuestCard status="completed" title="StackingDAO Basics" date="Dec 30, 2025" />
              <QuestCard status="upcoming" title="Granite Deep Dive" date="Dec 30, 2025" />
            </div>
          </div>

          {/* Middle - In-depth */}
          <div className="space-y-4 flex flex-col">
            <SandboxMockup />
            
            <div className="text-center lg:text-left">
              <h3 className="text-4xl lg:text-5xl font-black text-white mb-3 leading-tight">In-depth</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Learning can be tough, but QuestFi makes it well, easy! With our simple but super effective challenges, you'll go from zero to blockchain hero without breaking a sweat.
              </p>
            </div>
          </div>

          {/* Right - Structured */}
          <div className="space-y-4">
            <div className="mb-6">
              <h3 className="text-4xl lg:text-5xl font-black text-white mb-3 leading-tight">Structured</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Not sure where to start? Our learning experts from Harvard, Stanford and other top universities have designed each challenge series to help you learn as quickly and efficiently as possible.
              </p>
            </div>
            <UserStatsCard />
            
            
            <PhoneMockup />
          </div>
          
        </div>

        {/* Bottom Spanning Card */}
        <div className="mt-8 grid lg:grid-cols-3 gap-6 lg:gap-x-8">
          <div className="lg:col-span-2">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex-1 min-w-[200px]">
                  <h4 className="text-white text-lg font-bold mb-2">Ready to start your DeFi journey?</h4>
                  <p className="text-slate-400 text-sm">Join thousands learning Bitcoin DeFi through hands-on quests. No wallet required to begin.</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-black text-white mb-0.5">100%</div>
                    <div className="text-xs text-slate-400">Safe Practice</div>
                  </div>
                  <div className="h-12 w-px bg-white/20"></div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-emerald-400 mb-0.5">5min</div>
                    <div className="text-xs text-slate-400">First Quest</div>
                  </div>
                  <button className="ml-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-full transition-all hover:scale-105">
                    Start Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
    </>
  )
}