'use client'

import { useState } from 'react'
import DocsHeader from '@/components/docs/ui/DocsHeader'
import Sidebar from '@/components/docs/ui/Sidebar'
import MobileSidebar from '@/components/docs/ui/MobileSidebar'
import OverviewSection from '@/components/docs/sections/OverviewSection'
import FeaturesSection from '@/components/docs/sections/FeaturesSection'
import QuickStartSection from '@/components/docs/sections/QuickStartSection'
import AuthenticationSection from '@/components/docs/sections/AuthenticationSection'
import SmartContractSection from '@/components/docs/sections/SmartContractSection'
import { DOCS_SECTIONS } from '@/components/docs/data/constants'

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('overview')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <OverviewSection />
      case 'features':
        return <FeaturesSection />
      case 'setup':
        return <QuickStartSection />
      case 'authentication':
        return <AuthenticationSection />
      case 'smart-contract':
        return <SmartContractSection />
      case 'architecture':
        return (
          <div className="space-y-8">
            <h2 className="text-4xl font-black">System Architecture</h2>
            <p className="text-slate-300">Architecture documentation coming soon...</p>
          </div>
        )
      case 'quests':
        return (
          <div className="space-y-8">
            <h2 className="text-4xl font-black">Quest System</h2>
            <p className="text-slate-300">Quest system documentation coming soon...</p>
          </div>
        )
      case 'nft':
        return (
          <div className="space-y-8">
            <h2 className="text-4xl font-black">NFT Badges</h2>
            <p className="text-slate-300">NFT badges documentation coming soon...</p>
          </div>
        )
      case 'api':
        return (
          <div className="space-y-8">
            <h2 className="text-4xl font-black">API Reference</h2>
            <p className="text-slate-300">API documentation coming soon...</p>
          </div>
        )
      case 'deployment':
        return (
          <div className="space-y-8">
            <h2 className="text-4xl font-black">Deployment</h2>
            <p className="text-slate-300">Deployment guide coming soon...</p>
          </div>
        )
      default:
        return <OverviewSection />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white">
      <DocsHeader
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      <div className="pt-20 flex">
        <Sidebar
          sections={DOCS_SECTIONS}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        <MobileSidebar
          sections={DOCS_SECTIONS}
          activeSection={activeSection}
          isOpen={mobileMenuOpen}
          onSectionChange={setActiveSection}
          onClose={() => setMobileMenuOpen(false)}
        />

        <main className="flex-1 lg:ml-64 p-4 sm:p-8 max-w-5xl">
          {renderSection()}
        </main>
      </div>
    </div>
  )
}
