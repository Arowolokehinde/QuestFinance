import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import CodeBlock from '../ui/CodeBlock'
import { CODE_EXAMPLES } from '../data/constants'

export default function QuickStartSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-3xl font-black mb-3">Quick Start</h2>
        <p className="text-slate-300 mb-4">
          Get QuestFi running locally in minutes. Follow these steps to set up your development environment.
        </p>
      </div>

      {/* Prerequisites */}
      <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
        <h3 className="text-xl font-bold mb-3">Prerequisites</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-slate-300">
            <Check className="w-4 h-4 text-green-400" />
            Node.js 18+ and npm
          </li>
          <li className="flex items-center gap-2 text-slate-300">
            <Check className="w-4 h-4 text-green-400" />
            MongoDB Atlas account
          </li>
          <li className="flex items-center gap-2 text-slate-300">
            <Check className="w-4 h-4 text-green-400" />
            Turnkey account with API keys
          </li>
          <li className="flex items-center gap-2 text-slate-300">
            <Check className="w-4 h-4 text-green-400" />
            Clarinet CLI (for contract development)
          </li>
        </ul>
      </div>

      {/* Installation Steps */}
      <div className="space-y-4">
        <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
          <h3 className="text-lg font-bold mb-3">1. Clone Repository</h3>
          <CodeBlock code={CODE_EXAMPLES.clone} id="clone" />
        </div>

        <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
          <h3 className="text-lg font-bold mb-3">2. Install Dependencies</h3>
          <CodeBlock code={CODE_EXAMPLES.install} id="install" />
        </div>

        <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
          <h3 className="text-lg font-bold mb-3">3. Configure Environment</h3>
          <p className="text-sm text-slate-400 mb-3">
            Create <code className="text-emerald-400">.env</code> file:
          </p>
          <CodeBlock code={CODE_EXAMPLES.env} id="env" />
        </div>

        <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
          <h3 className="text-lg font-bold mb-3">4. Run Development Server</h3>
          <CodeBlock code={CODE_EXAMPLES.dev} id="dev" />
          <p className="text-sm text-slate-400 mt-3">
            Open{' '}
            <a href="http://localhost:3000" className="text-emerald-400 hover:underline">
              http://localhost:3000
            </a>{' '}
            in your browser
          </p>
        </div>
      </div>
    </motion.div>
  )
}
