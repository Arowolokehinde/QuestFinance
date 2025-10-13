'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer'

export default function ConditionalFooter() {
  const pathname = usePathname()

  // Don't show footer on docs page
  if (pathname?.startsWith('/docs')) {
    return null
  }

  return <Footer />
}
