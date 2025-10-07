'use client'

import { Twitter, Github, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-3">QuestFi</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Learn Bitcoin DeFi through hands-on quests and earn rewards.
            </p>
          </div>

          {/* Protocols */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Protocols</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Zest</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">StackingDAO</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Granite</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Hermetica</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Arkadiko</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Community</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Community</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-emerald-400/50 rounded-lg flex items-center justify-center transition-all hover:scale-110"
              >
                <Twitter className="w-4 h-4 text-slate-400 hover:text-emerald-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-emerald-400/50 rounded-lg flex items-center justify-center transition-all hover:scale-110"
              >
                <Github className="w-4 h-4 text-slate-400 hover:text-emerald-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-emerald-400/50 rounded-lg flex items-center justify-center transition-all hover:scale-110"
              >
                <MessageCircle className="w-4 h-4 text-slate-400 hover:text-emerald-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} QuestFi. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
