'use client'

import { useState } from 'react'
import { useTurnkey } from '@turnkey/sdk-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Sparkles, Shield, X } from 'lucide-react'

interface TurnkeyAuthProps {
  onClose?: () => void
  onSuccess?: () => void
}

export function TurnkeyAuth({ onClose, onSuccess }: TurnkeyAuthProps) {
  const { passkeyClient, authIframeClient, turnkey } = useTurnkey()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [authStep, setAuthStep] = useState<'input' | 'waiting' | 'complete'>('input')
  const [error, setError] = useState<string | null>(null)

  // Email Authentication Flow
  const handleEmailAuth = async () => {
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }

    setLoading(true)
    setError(null)

    try {
      // Get the iframe client
      const iframeClient = authIframeClient

      if (!iframeClient) {
        throw new Error('Turnkey client not initialized. Please refresh the page.')
      }

      // First, inject the credential bundle iframe to generate the target public key
      const iframePublicKey = await iframeClient.injectCredentialBundle(
        process.env.NEXT_PUBLIC_TURNKEY_IFRAME_URL!
      )

      if (!iframePublicKey) {
        throw new Error('Failed to generate credential bundle')
      }

      // Call backend to initiate email auth with the target public key
      const response = await fetch('/api/auth/turnkey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          type: 'email',
          targetPublicKey: iframePublicKey,
        }),
      })

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.message || 'Authentication failed')
      }

      setAuthStep('waiting')
    } catch (err) {
      console.error('Email auth error:', err)
      setError(err instanceof Error ? err.message : 'Authentication failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // Passkey Authentication Flow
  const handlePasskeyAuth = async () => {
    setLoading(true)
    setError(null)

    try {
      const result = await passkeyClient?.login()

      if (result) {
        setAuthStep('complete')
        setTimeout(() => {
          onSuccess?.()
        }, 1500)
      }
    } catch (err) {
      console.error('Passkey auth error:', err)
      setError('Passkey authentication failed. Please try another method.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-slate-900/90 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl shadow-emerald-500/20 overflow-hidden"
      >
        {/* Close button */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        <div className="p-8">
          <AnimatePresence mode="wait">
            {authStep === 'input' && (
              <motion.div
                key="input"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                {/* Header */}
                <div className="text-center space-y-2">
                  <div className="inline-flex p-3 bg-emerald-500/20 rounded-xl mb-2">
                    <Shield className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h2 className="text-2xl font-black text-white tracking-tight">
                    Connect to QuestFi
                  </h2>
                  <p className="text-sm text-slate-400">
                    Sign in to start your DeFi learning journey
                  </p>
                </div>

                {/* Error message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg"
                  >
                    <p className="text-sm text-red-400 text-center">{error}</p>
                  </motion.div>
                )}

                {/* Email Auth */}
                <div className="space-y-3">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        setError(null)
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !loading) {
                          handleEmailAuth()
                        }
                      }}
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all"
                    />
                  </div>

                  <button
                    onClick={handleEmailAuth}
                    disabled={loading || !email}
                    className="group relative w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-black overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div
                      className="absolute inset-0 bg-emerald-400 transition-all duration-300 group-hover:bg-emerald-500 group-disabled:bg-emerald-400"
                      style={{
                        clipPath:
                          'polygon(8% 0%, 92% 0%, 100% 50%, 92% 100%, 8% 100%, 0% 50%)',
                      }}
                    />
                    <span className="relative flex items-center gap-2 font-bold tracking-wide">
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          Continue with Email
                        </>
                      )}
                    </span>
                  </button>
                </div>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-3 bg-slate-900/90 text-slate-400 text-xs tracking-wide">
                      OR
                    </span>
                  </div>
                </div>

                {/* Passkey Auth */}
                <button
                  onClick={handlePasskeyAuth}
                  disabled={loading}
                  className="w-full px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:border-white/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Shield className="w-4 h-4" />
                  Sign in with Passkey
                </button>

                {/* Info */}
                <p className="text-xs text-slate-500 text-center leading-relaxed">
                  By connecting, you agree to our Terms of Service and Privacy Policy.
                  Your wallet is non-custodial and secured by Turnkey.
                </p>
              </motion.div>
            )}

            {authStep === 'waiting' && (
              <motion.div
                key="waiting"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-12"
              >
                <div className="inline-flex p-4 bg-emerald-500/20 rounded-full mb-6">
                  <Mail className="w-12 h-12 text-emerald-400 animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Check your email</h3>
                <p className="text-slate-400 mb-1">We sent a magic link to</p>
                <p className="text-white font-semibold mb-6">{email}</p>
                <p className="text-sm text-slate-500 max-w-xs mx-auto leading-relaxed">
                  Click the link in your email to securely connect your wallet and start
                  learning DeFi
                </p>

                <button
                  onClick={() => {
                    setAuthStep('input')
                    setEmail('')
                  }}
                  className="mt-8 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Use a different email
                </button>
              </motion.div>
            )}

            {authStep === 'complete' && (
              <motion.div
                key="complete"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', duration: 0.6 }}
                  className="inline-flex p-4 bg-emerald-500/20 rounded-full mb-6"
                >
                  <Sparkles className="w-12 h-12 text-emerald-400" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">Welcome to QuestFi!</h3>
                <p className="text-slate-400 mb-4">Your wallet is connected</p>
                <div className="flex items-center justify-center gap-1">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Decorative gradient */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      </motion.div>
    </motion.div>
  )
}
