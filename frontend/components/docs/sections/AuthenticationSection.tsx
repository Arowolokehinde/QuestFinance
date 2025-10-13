import { motion } from 'framer-motion'
import { Check, Lock, Wallet, Shield } from 'lucide-react'
import { AUTH_METHODS } from '../data/constants'

export default function AuthenticationSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-3xl font-black mb-3">Authentication</h2>
        <p className="text-slate-300 mb-4">
          QuestFi uses Turnkey for secure, non-custodial authentication with multiple sign-in methods.
        </p>
      </div>

      {/* Auth Methods */}
      <div className="grid sm:grid-cols-2 gap-4">
        {AUTH_METHODS.map((method, idx) => (
          <div key={idx} className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
            <h3 className="text-lg font-bold mb-2">{method.title}</h3>
            <p className="text-sm text-slate-400 mb-3">{method.description}</p>
            <ul className="space-y-1 text-sm">
              {method.features.map((feature, featureIdx) => (
                <li key={featureIdx} className="flex items-center gap-2 text-slate-300">
                  <Check className="w-3 h-3 text-green-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Session Management */}
      <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
        <h3 className="text-xl font-bold mb-3">Session Management</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-indigo-600/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
              <Lock className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <p className="font-bold text-white mb-1">JWT Tokens</p>
              <p className="text-slate-400">Session tokens stored in localStorage with 7-day expiration</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-indigo-600/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
              <Wallet className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <p className="font-bold text-white mb-1">Sub-Organization ID</p>
              <p className="text-slate-400">Unique Turnkey sub-org identifier stored separately</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-indigo-600/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
              <Shield className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <p className="font-bold text-white mb-1">Automatic Refresh</p>
              <p className="text-slate-400">Tokens refreshed automatically on API calls</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
