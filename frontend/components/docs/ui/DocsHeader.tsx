import { BookOpen, ExternalLink, Menu, X } from 'lucide-react'

interface DocsHeaderProps {
  mobileMenuOpen: boolean
  onToggleMobileMenu: () => void
}

export default function DocsHeader({ mobileMenuOpen, onToggleMobileMenu }: DocsHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-black">QuestFi Documentation</h1>
              <p className="text-xs text-slate-400">Learn DeFi, Earn NFTs</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-semibold transition-colors"
            >
              Launch App
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onToggleMobileMenu}
              className="sm:hidden p-2 hover:bg-slate-800 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
