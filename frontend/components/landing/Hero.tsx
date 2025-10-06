'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Rocket } from 'lucide-react'
import Image from 'next/image'

export default function HeroPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Image with Subtle Parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.6s ease-out',
        }}
      >
        <Image
          src="/questfi_1.jpg"
          alt="QuestFi DeFi Adventure"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
      </div>

      {/* Clean gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-transparent to-black/50"></div>

      {/* Content - Ultra Clean & Compact */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">

        {/* Main Title - Compact */}
        <h1 className="mb-5 text-5xl font-black text-center md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-tight">
          <span className="block text-white">Your path to</span>
          <span className="block text-emerald-400">Bitcoin DeFi</span>
        </h1>

        {/* Subtitle - Compact */}
        <p className="max-w-2xl mb-10 text-base text-center md:text-lg text-slate-200">
          Learn about the world's leading DeFi protocols, right from your browser.
        </p>

        {/* CTA Buttons - Compact */}
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Button className="px-8 py-4 text-base font-semibold text-white transition-all duration-300 rounded-full bg-emerald-500 hover:bg-emerald-600 hover:scale-105">
            <Rocket className="w-4 h-4 mr-2" />
            Start Learning
          </Button>

          <Button
            variant="outline"
            className="px-8 py-4 text-base font-semibold text-white transition-all duration-300 border-2 rounded-full border-white/40 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/60 hover:scale-105"
          >
            Explore Protocols
          </Button>
        </div>

      </div>
    </div>
  )
}