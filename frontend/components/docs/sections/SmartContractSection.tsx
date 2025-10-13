import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import CodeBlock from '../ui/CodeBlock'
import { CODE_EXAMPLES, CONTRACT_INFO } from '../data/constants'

export default function SmartContractSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-4xl font-black mb-4">Smart Contracts</h2>
        <p className="text-slate-300 mb-6">
          QuestFi uses a Clarity smart contract for minting soul-bound NFT badges on Stacks blockchain.
        </p>
      </div>

      {/* Contract Info */}
      <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
        <h3 className="text-xl font-bold mb-4">quest-badge-nft.clar</h3>
        <div className="space-y-3 text-sm mb-4">
          <div className="flex justify-between">
            <span className="text-slate-400">Standard:</span>
            <span className="font-bold">{CONTRACT_INFO.standard}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Network:</span>
            <span className="font-bold">{CONTRACT_INFO.network}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Address:</span>
            <code className="font-mono text-xs text-indigo-400">{CONTRACT_INFO.address}</code>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Contract:</span>
            <code className="font-mono text-xs text-indigo-400">{CONTRACT_INFO.name}</code>
          </div>
        </div>
        <a
          href={CONTRACT_INFO.explorerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm"
        >
          View on Explorer
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Main Functions */}
      <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
        <h3 className="text-xl font-bold mb-4">Main Functions</h3>
        <div className="space-y-4">
          <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
            <code className="text-indigo-400 font-mono text-sm">mint-badge</code>
            <p className="text-xs text-slate-400 mt-2">
              Mints a soul-bound NFT badge for completing a protocol quest. Prevents duplicate minting per user.
            </p>
            <div className="mt-3">
              <CodeBlock code={CODE_EXAMPLES.mintBadge} id="mint-badge" language="clarity" />
            </div>
          </div>

          <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
            <code className="text-indigo-400 font-mono text-sm">has-completed-protocol</code>
            <p className="text-xs text-slate-400 mt-2">
              Checks if a user has completed a specific protocol and earned the badge.
            </p>
            <div className="mt-3">
              <CodeBlock code={CODE_EXAMPLES.hasCompleted} id="has-completed" language="clarity" />
            </div>
          </div>

          <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
            <code className="text-indigo-400 font-mono text-sm">get-badge-info</code>
            <p className="text-xs text-slate-400 mt-2">
              Returns metadata for a specific badge token including protocol, owner, and XP earned.
            </p>
            <div className="mt-3">
              <CodeBlock code={CODE_EXAMPLES.getBadgeInfo} id="get-badge-info" language="clarity" />
            </div>
          </div>
        </div>
      </div>

      {/* Testing */}
      <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
        <h3 className="text-xl font-bold mb-4">Testing</h3>
        <p className="text-sm text-slate-300 mb-4">
          Comprehensive test suite with 31 passing tests covering all contract functionality.
        </p>
        <CodeBlock code={CODE_EXAMPLES.test} id="test" />
        <div className="mt-4 p-4 bg-green-900/20 border border-green-700/30 rounded-lg">
          <p className="text-sm text-green-400 font-mono">✓ 31 tests passed</p>
        </div>
      </div>
    </motion.div>
  )
}
