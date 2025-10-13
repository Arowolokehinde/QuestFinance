'use client'

import { LucideIcon } from 'lucide-react'

interface SidebarProps {
  sections: ReadonlyArray<{
    readonly id: string
    readonly title: string
    readonly icon: LucideIcon
  }>
  activeSection: string
  onSectionChange: (section: string) => void
}

export default function Sidebar({ sections, activeSection, onSectionChange }: SidebarProps) {
  return (
    <aside className="hidden lg:block fixed left-0 top-20 bottom-0 w-64 bg-slate-900/50 backdrop-blur-xl border-r border-slate-800 overflow-y-auto">
      <nav className="p-4 space-y-1">
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-all ${
                activeSection === section.id
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              {section.title}
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
