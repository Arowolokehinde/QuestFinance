'use client'

import { Suspense } from 'react'
import HeroBackground3D from './hero/HeroBackground3D'
import HeroContent from './hero/HeroContent'
import HeroVisual from './hero/HeroVisual'

export default function HeroPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* 3D Animated Background */}
      <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
        <HeroBackground3D />
      </Suspense>

      {/* Main Content Grid */}
      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-6 lg:px-8 h-screen">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 h-full items-center py-20">
            {/* Left Side - Content */}
            <div className="flex items-center">
              <HeroContent />
            </div>

            {/* Right Side - Visual */}
            <div className="hidden lg:flex items-center justify-center">
              <HeroVisual />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
    </section>
  )
}
