"use client"

import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Quests', href: '#quests' },
    { name: 'Leaderboard', href: '#leaderboard' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Rewards', href: '#rewards' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/80 backdrop-blur-lg border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-2xl">🥋</span>
            <span className="text-xl font-black text-white">
              QuestFi
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-cyan-400 transition-colors font-semibold text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-5">
            {/* XP Badge */}
            <div className="flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
              <span className="px-2 py-0.5 bg-purple-500 text-white text-xs font-bold rounded-md">
                Lvl 1
              </span>
              <span className="text-emerald-400 font-bold text-sm">0 XP</span>
            </div>

            {/* Connect Wallet */}
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 rounded-full">
              Connect Wallet
            </Button>

            {/* User Avatar */}
            <Avatar className="cursor-pointer ring-2 ring-purple-500/40 hover:ring-purple-500/70 transition-all">
              <AvatarFallback className="bg-purple-600 text-white font-bold">
                U
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-slate-400 hover:text-cyan-400">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0f172a] border-l border-slate-700/50">
              <div className="flex flex-col gap-6 mt-8">
                {/* Mobile XP */}
                <div className="flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                  <span className="px-2 py-0.5 bg-purple-500 text-white text-xs font-bold rounded-md">
                    Lvl 1
                  </span>
                  <span className="text-emerald-400 font-bold">0 XP</span>
                </div>

                {/* Mobile Links */}
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-slate-400 hover:text-cyan-400 transition-colors font-semibold text-lg"
                  >
                    {link.name}
                  </a>
                ))}

                {/* Mobile Connect Wallet */}
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full mt-4">
                  Connect Wallet
                </Button>

                {/* Mobile User */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-700/50">
                  <Avatar className="ring-2 ring-purple-500/40">
                    <AvatarFallback className="bg-purple-600 text-white font-bold">
                      U
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold text-white">Your Profile</p>
                    <p className="text-xs text-slate-400">View Progress</p>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}