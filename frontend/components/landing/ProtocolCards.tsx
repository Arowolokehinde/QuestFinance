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
    description: 'Lend STX/sBTC to earn yield, borrow against BTC',
    duration: '5-8 min',
    xp: 50,
    difficulty: 'Beginner',
    builders: 25412
  },
  {
    id: 'stackingdao',
    name: 'StackingDAO',
    icon: '💧',
    description: 'Stake STX and mint liquid sSTX tokens',
    duration: '6-10 min',
    xp: 60,
    difficulty: 'Beginner',
    builders: 18903
  },
  {
    id: 'granite',
    name: 'Granite',
    icon: '⛰️',
    description: 'BTC liquidity and stablecoin lending',
    duration: '8-12 min',
    xp: 70,
    difficulty: 'Intermediate',
    builders: 31567
  },
  {
    id: 'hermetica',
    name: 'Hermetica',
    icon: '💎',
    description: 'Mint synthetic USD and master peg stability',
    duration: '7-11 min',
    xp: 65,
    difficulty: 'Intermediate',
    builders: 22845
  },
  {
    id: 'arkadiko',
    name: 'Arkadiko',
    icon: '🏛️',
    description: 'Collateralize STX and mint USDA stablecoin',
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
                  style={{
                    position: 'absolute',
                    transform: `translate3d(${x}px, 0, ${z}px) scale(${scale})`,
                    opacity: opacity,
                    zIndex: isActive ? 10 : Math.round((1 - Math.abs(z) / 450) * 5),
                    transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    filter: isActive ? 'none' : 'blur(1px)'
                  }}
                  className="w-80"
                >
                  <div className={`bg-[#1a1d2e] backdrop-blur-sm border rounded-2xl p-8 ${
                    isActive ? 'border-slate-600' : 'border-slate-800'
                  }`}>
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center text-4xl mb-6 border border-purple-500/30">
                      {protocol.icon}
                    </div>

                    {/* Protocol Name */}
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {protocol.name}
                    </h3>

                    {/* Challenge Count */}
                    <p className="text-slate-500 text-sm mb-6">
                      {protocol.duration}
                    </p>

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


// 'use client'

// import { useState, useEffect } from 'react'
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
//   const [currentIndex, setCurrentIndex] = useState(2) // Start with middle card (Granite)
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true)

//   useEffect(() => {
//     if (!isAutoPlaying) return

//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % protocols.length)
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [isAutoPlaying])

//   const nextCard = () => {
//     setCurrentIndex((prev) => (prev + 1) % protocols.length)
//     setIsAutoPlaying(false)
//   }

//   const prevCard = () => {
//     setCurrentIndex((prev) => (prev - 1 + protocols.length) % protocols.length)
//     setIsAutoPlaying(false)
//   }

//   const goToCard = (index: number) => {
//     setCurrentIndex(index)
//     setIsAutoPlaying(false)
//   }

//   const getCardStyle = (index: number) => {
//     const diff = index - currentIndex
//     const absoluteDiff = Math.abs(diff)

//     if (index === currentIndex) {
//       return {
//         transform: 'translateY(0px) scale(1.1)',
//         opacity: 1,
//         zIndex: 10
//       }
//     } else if (absoluteDiff === 1) {
//       return {
//         transform: diff < 0 ? 'translateY(60px) scale(0.9)' : 'translateY(50px) scale(0.9)',
//         opacity: 0.5,
//         zIndex: 5
//       }
//     } else if (absoluteDiff === 2) {
//       return {
//         transform: diff < 0 ? 'translateY(-40px) scale(0.85)' : 'translateY(-30px) scale(0.85)',
//         opacity: 0.4,
//         zIndex: 3
//       }
//     } else {
//       return {
//         transform: 'translateY(20px) scale(0.8)',
//         opacity: 0.3,
//         zIndex: 1
//       }
//     }
//   }

//   return (
//     <section className="relative py-20 bg-gradient-to-b from-black via-slate-950 to-black">
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
//         <div className="relative max-w-5xl mx-auto">
//           {/* Navigation Arrows */}
//           <button
//             onClick={prevCard}
//             className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-slate-800/80 hover:bg-slate-700 border-2 border-purple-500/50 rounded-full flex items-center justify-center transition-all hover:scale-110"
//           >
//             <ChevronLeft className="w-6 h-6 text-purple-400" />
//           </button>

//           <button
//             onClick={nextCard}
//             className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-slate-800/80 hover:bg-slate-700 border-2 border-purple-500/50 rounded-full flex items-center justify-center transition-all hover:scale-110"
//           >
//             <ChevronRight className="w-6 h-6 text-purple-400" />
//           </button>

//           {/* Cards Container */}
//           <div className="relative h-[500px] overflow-visible">
//             <div className="flex items-center justify-center gap-8 h-full">
//               {protocols.map((protocol, index) => (
//                 <div
//                   key={protocol.id}
//                   onClick={() => goToCard(index)}
//                   style={{
//                     ...getCardStyle(index),
//                     position: 'absolute',
//                     left: '50%',
//                     marginLeft: `${(index - currentIndex) * 180}px`,
//                     transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
//                   }}
//                   className="w-80 bg-[#1a1d2e]/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 cursor-pointer hover:border-purple-500/50"
//                   onMouseEnter={() => setIsAutoPlaying(false)}
//                   onMouseLeave={() => setIsAutoPlaying(true)}
//                 >
//                   {/* Icon */}
//                   <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center text-4xl mb-6 border border-purple-500/30">
//                     {protocol.icon}
//                   </div>

//                   {/* Protocol Name */}
//                   <h3 className="text-2xl font-bold text-white mb-3">
//                     {protocol.name}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-slate-400 mb-6 text-sm leading-relaxed">
//                     {protocol.description}
//                   </p>

//                   {/* Stats */}
//                   <div className="flex items-center justify-between text-sm mb-6">
//                     <span className="text-slate-500">{protocol.duration}</span>
//                     <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full font-semibold">
//                       +{protocol.xp} XP
//                     </span>
//                   </div>

//                   {/* Builders */}
//                   <div className="flex items-center gap-3 text-sm">
//                     <div className="flex -space-x-2">
//                       <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 border-2 border-[#1a1d2e]"></div>
//                       <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-700 border-2 border-[#1a1d2e]"></div>
//                       <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 border-2 border-[#1a1d2e]"></div>
//                     </div>
//                     <span className="text-emerald-400 flex items-center gap-1">
//                       <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
//                       {protocol.builders.toLocaleString()} builders
//                     </span>
//                   </div>

//                   {/* View Challenge Button */}
//                   {index === currentIndex && (
//                     <Button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-bold">
//                       View Challenge
//                     </Button>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Indicators */}
//           <div className="flex justify-center gap-3 mt-12">
//             {protocols.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToCard(index)}
//                 className={`h-2 rounded-full transition-all ${
//                   index === currentIndex
//                     ? 'w-8 bg-purple-500'
//                     : 'w-2 bg-slate-600 hover:bg-slate-500'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }