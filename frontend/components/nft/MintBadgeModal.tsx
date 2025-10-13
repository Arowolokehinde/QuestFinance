'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, CheckCircle2, ExternalLink, Trophy } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface MintBadgeModalProps {
  isOpen: boolean
  onClose: () => void
  protocol: {
    id: string
    name: string
    icon: string
    xp: number
  }
}

export default function MintBadgeModal({ isOpen, onClose, protocol }: MintBadgeModalProps) {
  const [mintingState, setMintingState] = useState<'ready' | 'minting' | 'success'>('ready')
  const [tokenId, setTokenId] = useState<number | null>(null)
  const router = useRouter()

  const handleMint = async () => {
    setMintingState('minting')

    // Simulate minting process (replace with actual contract call)
    await new Promise(resolve => setTimeout(resolve, 3000))

    // Mock token ID
    setTokenId(Math.floor(Math.random() * 1000) + 1)
    setMintingState('success')
  }

  const handleViewRewards = () => {
    router.push('/profile')
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-lg w-full bg-gradient-to-br from-slate-900 via-indigo-950/30 to-slate-900 border-2 border-indigo-500/30 rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-slate-800/80 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {mintingState === 'ready' && (
              <div className="p-8">
                {/* Header */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="relative mb-6"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-yellow-400/30 to-yellow-500/20 blur-3xl animate-pulse" />

                  {/* Trophy Icon */}
                  <div className="relative text-center">
                    <motion.div
                      animate={{
                        rotate: [0, -10, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                      className="text-8xl inline-block"
                    >
                      🏆
                    </motion.div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Sparkles className="w-12 h-12 text-yellow-400" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Title */}
                <h2 className="text-3xl font-black text-center mb-2 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                  Quest Complete!
                </h2>
                <p className="text-center text-slate-300 mb-6">
                  You've mastered <span className="font-bold text-white">{protocol.name}</span>
                </p>

                {/* Badge Preview */}
                <div className="relative mb-6">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-indigo-500/30 rounded-2xl p-6 text-center">
                    <div className="text-7xl mb-3">{protocol.icon}</div>
                    <h3 className="font-black text-xl mb-1">{protocol.name} Master</h3>
                    <p className="text-slate-400 text-sm mb-3">NFT Badge</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600/20 border border-emerald-500/30 rounded-full">
                      <Trophy className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-bold text-sm">+{protocol.xp} XP</span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="bg-indigo-900/20 border border-indigo-700/30 rounded-xl p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-indigo-300 font-semibold text-sm mb-1">Mint Your Badge</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        This NFT badge proves your mastery of {protocol.name} and will be stored permanently on the Stacks blockchain.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mint Button */}
                <motion.button
                  onClick={handleMint}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-black rounded-xl transition-all shadow-lg shadow-indigo-500/30"
                >
                  Mint NFT Badge
                </motion.button>

                <button
                  onClick={onClose}
                  className="w-full mt-3 py-3 text-slate-400 hover:text-white font-semibold transition-colors"
                >
                  Maybe Later
                </button>
              </div>
            )}

            {mintingState === 'minting' && (
              <div className="p-8 text-center">
                {/* Minting Animation */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="w-32 h-32 mx-auto mb-6 relative"
                >
                  <div className="absolute inset-0 border-4 border-indigo-600/20 rounded-full" />
                  <div className="absolute inset-0 border-4 border-transparent border-t-indigo-600 rounded-full" />
                  <div className="absolute inset-0 flex items-center justify-center text-5xl">
                    {protocol.icon}
                  </div>
                </motion.div>

                <h2 className="text-2xl font-black mb-2">Minting Your Badge...</h2>
                <p className="text-slate-400 text-sm mb-6">
                  Confirming transaction on Stacks blockchain
                </p>

                {/* Loading Steps */}
                <div className="space-y-3 mb-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3 text-sm"
                  >
                    <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-300">Preparing NFT metadata</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-3 text-sm"
                  >
                    <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-300">Calling smart contract</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="flex items-center gap-3 text-sm"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-6 h-6 rounded-full bg-indigo-600/50 border-2 border-indigo-600 flex items-center justify-center flex-shrink-0"
                    >
                      <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                    </motion.div>
                    <span className="text-slate-400">Waiting for confirmation...</span>
                  </motion.div>
                </div>
              </div>
            )}

            {mintingState === 'success' && (
              <div className="p-8 text-center">
                {/* Success Animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="relative mb-6"
                >
                  {/* Confetti effect */}
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, x: 0, y: 0 }}
                      animate={{
                        scale: [0, 1, 0],
                        x: [0, Math.cos((i / 12) * Math.PI * 2) * 100],
                        y: [0, Math.sin((i / 12) * Math.PI * 2) * 100],
                      }}
                      transition={{ duration: 1, delay: 0.1 }}
                      className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: ['#f59e0b', '#10b981', '#3b82f6', '#8b5cf6'][i % 4],
                      }}
                    />
                  ))}

                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-32 h-32 mx-auto bg-gradient-to-br from-emerald-600 to-emerald-400 rounded-full flex items-center justify-center mb-4"
                    >
                      <CheckCircle2 className="w-16 h-16 text-white" />
                    </motion.div>
                  </div>
                </motion.div>

                <h2 className="text-3xl font-black mb-2 text-emerald-400">
                  Badge Minted!
                </h2>
                <p className="text-slate-300 mb-6">
                  Your NFT badge has been successfully minted
                </p>

                {/* Success Details */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 mb-6 text-left">
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-700">
                    <span className="text-slate-400 text-sm">Token ID</span>
                    <span className="font-black text-white">#{tokenId}</span>
                  </div>
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-700">
                    <span className="text-slate-400 text-sm">Badge</span>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{protocol.icon}</span>
                      <span className="font-bold text-white">{protocol.name} Master</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">XP Earned</span>
                    <span className="font-black text-emerald-400">+{protocol.xp} XP</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <motion.button
                    onClick={handleViewRewards}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-black rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    View in Collection
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>

                  <button
                    onClick={onClose}
                    className="w-full py-3 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white font-semibold rounded-xl transition-all"
                  >
                    Continue Exploring
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
