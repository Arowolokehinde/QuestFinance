// 'use client'

// import { useState } from 'react'
// import { ChevronLeft, ChevronRight } from 'lucide-react'
// import { Button } from '@/components/ui/button'

// interface Protocol {
//   id: string
//   name: string
//   icon: string
//   description: string
//   duration: string
//   xp: number
//   difficulty: string
//   builders: number
// }

// const protocols: Protocol[] = [
//   {
//     id: 'zest',
//     name: 'Zest',
//     icon: '🏦',
//     description: 'Lend STX/sBTC to earn yield, borrow against BTC',
//     duration: '5-8 min',
//     xp: 50,
//     difficulty: 'Beginner',
//     builders: 25412
//   },
//   {
//     id: 'stackingdao',
//     name: 'StackingDAO',
//     icon: '💧',
//     description: 'Stake STX and mint liquid sSTX tokens',
//     duration: '6-10 min',
//     xp: 60,
//     difficulty: 'Beginner',
//     builders: 18903
//   },
//   {
//     id: 'granite',
//     name: 'Granite',
//     icon: '⛰️',
//     description: 'BTC liquidity and stablecoin lending',
//     duration: '8-12 min',
//     xp: 70,
//     difficulty: 'Intermediate',
//     builders: 31567
//   },
//   {
//     id: 'hermetica',
//     name: 'Hermetica',
//     icon: '💎',
//     description: 'Mint synthetic USD and master peg stability',
//     duration: '7-11 min',
//     xp: 65,
//     difficulty: 'Intermediate',
//     builders: 22845
//   },
//   {
//     id: 'arkadiko',
//     name: 'Arkadiko',
//     icon: '🏛️',
//     description: 'Collateralize STX and mint USDA stablecoin',
//     duration: '6-9 min',
//     xp: 55,
//     difficulty: 'Beginner',
//     builders: 19234
//   }
// ]

// export default function ProtocolCards() {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   const nextCard = () => {
//     setCurrentIndex((prev) => (prev + 1) % protocols.length)
//   }

//   const prevCard = () => {
//     setCurrentIndex((prev) => (prev - 1 + protocols.length) % protocols.length)
//   }

//   const getCardPosition = (index: number) => {
//     const totalCards = protocols.length
//     const angleStep = (Math.PI * 2) / totalCards
//     const currentAngle = (index - currentIndex) * angleStep
    
//     // Circular positioning
//     const radius = 450
//     const x = Math.sin(currentAngle) * radius
//     const z = Math.cos(currentAngle) * radius
    
//     // Scale and opacity based on position
//     let scale = 1
//     let opacity = 1
    
//     if (index === currentIndex) {
//       scale = 1
//       opacity = 1
//     } else {
//       const distance = Math.abs(index - currentIndex)
//       const minDistance = Math.min(distance, totalCards - distance)
//       scale = Math.max(0.7, 1 - minDistance * 0.15)
//       opacity = Math.max(0.3, 1 - minDistance * 0.35)
//     }

//     return { x, z, scale, opacity }
//   }

//   return (
//     <section className="relative py-20 bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
//             Choose Your Path
//           </h2>
//           <p className="text-lg text-slate-400 max-w-2xl mx-auto">
//             Master 5 essential DeFi protocols on Stacks. Each quest teaches you practical skills through hands-on experience.
//           </p>
//         </div>

//         {/* Carousel Container */}
//         <div className="relative max-w-6xl mx-auto">
//           {/* Navigation Arrows */}
//           <button
//             onClick={prevCard}
//             className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-slate-800/80 hover:bg-slate-700 border-2 border-slate-600/50 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:border-cyan-500/50"
//           >
//             <ChevronLeft className="w-6 h-6 text-slate-300" />
//           </button>

//           <button
//             onClick={nextCard}
//             className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-slate-800/80 hover:bg-slate-700 border-2 border-slate-600/50 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:border-cyan-500/50"
//           >
//             <ChevronRight className="w-6 h-6 text-slate-300" />
//           </button>

//           {/* Cards in Circular Layout */}
//           <div className="relative h-[600px] flex items-center justify-center perspective-1000">
//             {protocols.map((protocol, index) => {
//               const { x, z, scale, opacity } = getCardPosition(index)
//               const isActive = index === currentIndex

//               return (
//                 <div
//                   key={protocol.id}
//                   style={{
//                     position: 'absolute',
//                     transform: `translate3d(${x}px, 0, ${z}px) scale(${scale})`,
//                     opacity: opacity,
//                     zIndex: isActive ? 10 : Math.round((1 - Math.abs(z) / 450) * 5),
//                     transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
//                     filter: isActive ? 'none' : 'blur(1px)'
//                   }}
//                   className="w-80"
//                 >
//                   <div className={`bg-[#1a1d2e] backdrop-blur-sm border rounded-2xl p-8 ${
//                     isActive ? 'border-slate-600' : 'border-slate-800'
//                   }`}>
//                     {/* Icon */}
//                     <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center text-4xl mb-6 border border-purple-500/30">
//                       {protocol.icon}
//                     </div>

//                     {/* Protocol Name */}
//                     <h3 className="text-2xl font-bold text-white mb-3">
//                       {protocol.name}
//                     </h3>

//                     {/* Challenge Count */}
//                     <p className="text-slate-500 text-sm mb-6">
//                       {protocol.duration}
//                     </p>

//                     {/* Builders */}
//                     <div className="flex items-center gap-3 text-sm mb-6">
//                       <div className="flex -space-x-2">
//                         <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 border-2 border-[#1a1d2e]"></div>
//                         <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-700 border-2 border-[#1a1d2e]"></div>
//                         <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-pink-700 border-2 border-[#1a1d2e]"></div>
//                         <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 border-2 border-[#1a1d2e]"></div>
//                       </div>
//                       <span className="text-slate-400 flex items-center gap-1.5 text-xs">
//                         <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
//                         {protocol.builders.toLocaleString()} builders
//                       </span>
//                     </div>

//                     {/* View Challenge Button - Only on active card */}
//                     {isActive && (
//                       <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-bold">
//                         View Challenge
//                       </Button>
//                     )}
                    
//                     {/* Outlined button for non-active cards */}
//                     {!isActive && (
//                       <Button 
//                         variant="outline" 
//                         className="w-full border-slate-700 text-slate-500 hover:bg-slate-800/50"
//                       >
//                         View Challenge
//                       </Button>
//                     )}
//                   </div>
//                 </div>
//               )
//             })}
//           </div>

//           {/* Indicators */}
//           <div className="flex justify-center gap-2 mt-8">
//             {protocols.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`h-2 rounded-full transition-all ${
//                   index === currentIndex
//                     ? 'w-8 bg-cyan-500'
//                     : 'w-2 bg-slate-700 hover:bg-slate-600'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Protocol {
  id: string
  name: string
  icon: string
  description: string
  duration: string
  xp: number
  difficulty: string
  builders: number
}

const protocols: Protocol[] = [
  {
    id: 'zest',
    name: 'Zest',
    icon: '🏦',
    description: 'Learn to lend STX or sBTC to earn passive yield and borrow stablecoins using your Bitcoin as collateral—without selling.',
    duration: '5-8 min',
    xp: 50,
    difficulty: 'Beginner',
    builders: 25412
  },
  {
    id: 'stackingdao',
    name: 'StackingDAO',
    icon: '💧',
    description: 'Master liquid staking: lock your STX to earn Bitcoin rewards while keeping your assets liquid with sSTX tokens.',
    duration: '6-10 min',
    xp: 60,
    difficulty: 'Beginner',
    builders: 18903
  },
  {
    id: 'granite',
    name: 'Granite',
    icon: '⛰️',
    description: 'Unlock Bitcoin liquidity by using sBTC as collateral to borrow stablecoins in a safe, over-collateralized system.',
    duration: '8-12 min',
    xp: 70,
    difficulty: 'Intermediate',
    builders: 31567
  },
  {
    id: 'hermetica',
    name: 'Hermetica',
    icon: '💎',
    description: 'Discover how to mint synthetic USD (uSDH) and learn peg stability mechanisms through interactive simulations.',
    duration: '7-11 min',
    xp: 65,
    difficulty: 'Intermediate',
    builders: 22845
  },
  {
    id: 'arkadiko',
    name: 'Arkadiko',
    icon: '🏛️',
    description: 'Use STX as collateral to mint USDA stablecoins and explore CDP (Collateralized Debt Position) mechanics.',
    duration: '6-9 min',
    xp: 55,
    difficulty: 'Beginner',
    builders: 19234
  }
]

export default function ProtocolCards() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % protocols.length)
  }

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + protocols.length) % protocols.length)
  }

  const getCardPosition = (index: number) => {
    const totalCards = protocols.length
    const angleStep = (Math.PI * 2) / totalCards
    const currentAngle = (index - currentIndex) * angleStep
    
    // Circular positioning
    const radius = 450
    const x = Math.sin(currentAngle) * radius
    const z = Math.cos(currentAngle) * radius
    
    // Scale and opacity based on position
    let scale = 1
    let opacity = 1
    
    if (index === currentIndex) {
      scale = 1
      opacity = 1
    } else {
      const distance = Math.abs(index - currentIndex)
      const minDistance = Math.min(distance, totalCards - distance)
      scale = Math.max(0.7, 1 - minDistance * 0.15)
      opacity = Math.max(0.3, 1 - minDistance * 0.35)
    }

    return { x, z, scale, opacity }
  }

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Choose Your Path
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Master 5 essential DeFi protocols on Stacks. Each quest teaches you practical skills through hands-on experience.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevCard}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-slate-800/80 hover:bg-slate-700 border-2 border-slate-600/50 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:border-cyan-500/50"
          >
            <ChevronLeft className="w-6 h-6 text-slate-300" />
          </button>

          <button
            onClick={nextCard}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-slate-800/80 hover:bg-slate-700 border-2 border-slate-600/50 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:border-cyan-500/50"
          >
            <ChevronRight className="w-6 h-6 text-slate-300" />
          </button>

          {/* Cards in Circular Layout */}
          <div className="relative h-[600px] flex items-center justify-center perspective-1000">
            {protocols.map((protocol, index) => {
              const { x, z, scale, opacity } = getCardPosition(index)
              const isActive = index === currentIndex

              return (
                <div
                  key={protocol.id}
                  onClick={() => setCurrentIndex(index)}
                  style={{
                    position: 'absolute',
                    transform: `translate3d(${x}px, 0, ${z}px) scale(${scale})`,
                    opacity: opacity,
                    zIndex: isActive ? 10 : Math.round((1 - Math.abs(z) / 450) * 5),
                    transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    filter: isActive ? 'none' : 'blur(1.5px)',
                    cursor: isActive ? 'default' : 'pointer'
                  }}
                  className="w-80"
                >
                  <div className={`bg-[#1a1d2e] backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 ${
                    isActive ? 'border-slate-600 shadow-xl shadow-purple-500/10' : 'border-slate-800 hover:border-slate-700'
                  }`}>
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center text-4xl mb-6 border border-purple-500/30">
                      {protocol.icon}
                    </div>

                    {/* Protocol Name */}
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {protocol.name}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                      {protocol.description}
                    </p>

                    {/* Stats Row */}
                    <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-slate-500 text-sm">{protocol.duration}</span>
                      </div>
                      <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full font-semibold text-sm">
                        +{protocol.xp} XP
                      </span>
                    </div>

                    {/* Difficulty Badge */}
                    <div className="mb-6">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                        protocol.difficulty === 'Beginner' 
                          ? 'bg-emerald-500/20 text-emerald-400' 
                          : 'bg-cyan-500/20 text-cyan-400'
                      }`}>
                        {protocol.difficulty === 'Beginner' ? '🌱' : '⚡'} {protocol.difficulty}
                      </span>
                    </div>

                    {/* Builders */}
                    <div className="flex items-center gap-3 text-sm mb-6">
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 border-2 border-[#1a1d2e]"></div>
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-700 border-2 border-[#1a1d2e]"></div>
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-pink-700 border-2 border-[#1a1d2e]"></div>
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 border-2 border-[#1a1d2e]"></div>
                      </div>
                      <span className="text-slate-400 flex items-center gap-1.5 text-xs">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                        {protocol.builders.toLocaleString()} builders
                      </span>
                    </div>

                    {/* View Challenge Button - Only on active card */}
                    {isActive && (
                      <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-bold">
                        View Challenge
                      </Button>
                    )}
                    
                    {/* Outlined button for non-active cards */}
                    {!isActive && (
                      <Button 
                        variant="outline" 
                        className="w-full border-slate-700 text-slate-500 hover:bg-slate-800/50"
                      >
                        View Challenge
                      </Button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {protocols.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-cyan-500'
                    : 'w-2 bg-slate-700 hover:bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}