'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface MobileSidebarProps {
  sections: Array<{
    id: string
    title: string
    icon: LucideIcon
  }>
  activeSection: string
  isOpen: boolean
  onSectionChange: (section: string) => void
  onClose: () => void
}

export default function MobileSidebar({
  sections,
  activeSection,
  isOpen,
  onSectionChange,
  onClose,
}: MobileSidebarProps) {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      exit={{ x: -300 }}
      className="lg:hidden fixed left-0 top-20 bottom-0 w-64 bg-slate-900 border-r border-slate-800 overflow-y-auto z-40"
    >
      <nav className="p-4 space-y-1">
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <button
              key={section.id}
              onClick={() => {
                onSectionChange(section.id)
                onClose()
              }}
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
    </motion.div>
  )
}
