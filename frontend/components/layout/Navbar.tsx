"use client"

import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { TurnkeyAuth } from '@/components/auth/TurnkeyAuth'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showAuth, setShowAuth] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleAuthSuccess = () => {
    setIsAuthenticated(true)
    setShowAuth(false)
  }

  const navLinks = [
    { name: 'Quests', href: '#quests' },
    { name: 'Leaderboard', href: '#leaderboard' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Rewards', href: '#rewards' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-slate-950/70 backdrop-blur-xl border-b border-white/10'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-2xl">🥋</span>
            <span className="text-xl font-black text-white tracking-tight">
              QuestFi
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors font-medium text-sm tracking-wide relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-3">
            {/* XP Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:border-white/20 transition-all">
              <span className="px-2 py-0.5 bg-emerald-500 text-black text-xs font-bold rounded">
                Lvl 1
              </span>
              <span className="text-white font-semibold text-sm">0 XP</span>
            </div>

            {/* Connect Wallet with hexagon style */}
            <button
              onClick={() => setShowAuth(true)}
              className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-black overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 bg-emerald-400 transition-all duration-300 group-hover:bg-emerald-500"
                style={{ clipPath: 'polygon(8% 0%, 92% 0%, 100% 50%, 92% 100%, 8% 100%, 0% 50%)' }}
              />
              <span className="relative font-bold tracking-wide">
                {isAuthenticated ? 'Connected' : 'Connect Wallet'}
              </span>
            </button>

            {/* User Avatar */}
            <div className="relative group">
              <Avatar className="cursor-pointer ring-2 ring-white/20 hover:ring-white/40 transition-all duration-300 w-10 h-10">
                <AvatarFallback className="bg-white/10 text-white font-bold backdrop-blur-sm">
                  U
                </AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white hover:text-emerald-400">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950 backdrop-blur-xl border-l border-emerald-500/20 w-[300px] p-6">
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950/80 pointer-events-none z-0" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent pointer-events-none z-0" />

              {/* Subtle animated glow */}
              <div className="absolute top-1/4 -right-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl animate-pulse pointer-events-none z-0" />
              <div className="absolute bottom-1/3 -left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-pulse pointer-events-none z-0" style={{ animationDelay: '1s' }} />
              <div className="relative flex flex-col gap-8 mt-8 h-full z-10">
                {/* Mobile XP */}
                <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/20 rounded-xl">
                  <span className="px-2.5 py-1 bg-emerald-500 text-white text-xs font-black rounded-md">
                    Lvl 1
                  </span>
                  <span className="text-white font-bold text-sm">0 XP</span>
                </div>

                {/* Mobile Links */}
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-slate-300 hover:text-white hover:bg-white/5 transition-all font-semibold text-base px-4 py-3 rounded-lg"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>

                {/* Mobile Connect Wallet */}
                <Button
                  onClick={() => setShowAuth(true)}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl py-6 text-sm"
                >
                  {isAuthenticated ? 'Connected' : 'Connect Wallet'}
                </Button>

                {/* Mobile User */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10 mt-auto">
                  <Avatar className="ring-2 ring-white/30 w-12 h-12">
                    <AvatarFallback className="bg-white/10 text-white font-bold backdrop-blur-sm text-base">
                      U
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-bold text-white">Your Profile</p>
                    <p className="text-xs text-slate-400 mt-0.5">View Progress</p>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Turnkey Auth Modal */}
      {showAuth && (
        <TurnkeyAuth
          onClose={() => setShowAuth(false)}
          onSuccess={handleAuthSuccess}
        />
      )}
    </nav>
  )
}