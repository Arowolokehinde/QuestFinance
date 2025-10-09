'use client'

import { useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { Sphere, MeshDistortMaterial, Float, Torus } from '@react-three/drei'
import * as THREE from 'three'
import {
  Play, CheckCircle2, Circle, X, Lock, Trophy, BookOpen, Target,
  Zap, Video, Wallet, AlertCircle, TrendingUp, Sparkles, PlayCircle
} from 'lucide-react'

// 3D Scene
function Scene3D() {
  const sphere1 = useRef<THREE.Mesh>(null!)
  const torus1 = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (sphere1.current) {
      sphere1.current.rotation.y = time * 0.15
    }
    if (torus1.current) {
      torus1.current.rotation.x = time * 0.2
      torus1.current.rotation.y = time * 0.3
    }
  })

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#10b981" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />

      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        <Sphere ref={sphere1} args={[1.2, 32, 32]} position={[-2, 0, -1]}>
          <MeshDistortMaterial
            color="#10b981"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.9}
            transparent
            opacity={0.5}
          />
        </Sphere>
      </Float>

      <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh ref={torus1} position={[2, 0, -2]}>
          <torusGeometry args={[1, 0.3, 16, 100]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={0.4}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.6}
          />
        </mesh>
      </Float>
    </>
  )
}

// Protocol Data
const protocolData: any = {
  zest: {
    name: 'Zest Protocol',
    tagline: 'Bitcoin-Backed Lending & Borrowing',
    icon: '🍊',
    color: 'emerald',
    totalXP: 1350,
    steps: [
      {
        id: 1,
        title: 'Welcome to Zest',
        type: 'learn',
        duration: '8 min',
        xp: 150,
        icon: Sparkles,
        color: 'purple',
        content: {
          description: 'Discover how Zest makes Bitcoin productive',
          videoUrl: 'https://www.youtube.com/embed/zest-overview',
          textGuide: [
            'Zest Protocol is the **DeFi protocol built for Bitcoin**. Fully on-chain and open-source, it is building the future of **Bitcoin finance**.',
            'Zest exists to **make Bitcoin productive**—every sat of it. The goal is to build a vibrant **borrowing and lending ecosystem** around Bitcoin as an asset.',
            'Live on **Stacks—the leading Bitcoin Layer 2**—Zest is now the **#1 DeFi protocol** on the network. Users can deposit idle assets such as **STX, sBTC, stSTX, USDC**, and others to **earn yield**, accumulate points, and access overcollateralized loans.',
            'Bitcoin is the most recognized, liquid, and widely held cryptocurrency with a **market cap over $2 trillion**. Much of it sits idle—despite being **ideal collateral** ready to be put to work.',
            'In just a few months, users have deposited **over 500 sBTC**—representing **more than 10% of all sBTC** on Stacks. This places Zest alongside leading lending protocols on Ethereum L2s and Solana in terms of Bitcoin liquidity.'
          ],
          stats: [
            { label: 'Total Value Locked', value: '500+ sBTC', icon: '💰' },
            { label: 'Market Share', value: '>10% of sBTC', icon: '📊' },
            { label: 'Built On', value: 'Stacks L2', icon: '⚡' },
            { label: 'Status', value: '#1 DeFi on Stacks', icon: '🏆' }
          ],
          keyFacts: [
            '🍊 Fully on-chain, open-source Bitcoin DeFi protocol',
            '💎 $2 Trillion Bitcoin market - mostly sitting idle',
            '🚀 Lend to earn yield or borrow against your BTC',
            '⭐ Earn 2x Zest Points on select assets (STX, USDC)',
            '🔒 Built with Clarity - reads Bitcoin state directly'
          ],
          sections: [
            {
              title: '🎯 The Opportunity',
              text: 'Bitcoin-backed lending is a trillion-dollar opportunity. DeFi lending now surpasses CeFi. Zest is positioning to lead as Bitcoin DeFi scales.'
            }
          ],
          quiz: {
            question: 'What is the main goal of Zest Protocol?',
            options: [
              'To create NFTs backed by Bitcoin',
              'To make Bitcoin productive through DeFi lending and borrowing',
              'To replace Bitcoin as a digital currency',
              'To act as a Bitcoin wallet provider'
            ],
            correct: 1
          }
        }
      },
      {
        id: 2,
        title: 'See Lending in Action',
        type: 'learn',
        duration: '10 min',
        xp: 200,
        icon: Video,
        color: 'cyan',
        content: {
          description: 'Watch how lending works on Zest Protocol',
          videoUrl: 'https://www.loom.com/share/d98bb351944c4eb399a027acbbda94be',
          textGuide: [
            'Visit **app.zestprotocol.com** and **connect your Stacks wallet**. Zest supports **Leather, Xverse, OKX Wallet**, Fordefi, and Asigna wallets.',
            'Under **"Assets to supply"**, select the asset you wish to earn yield on (**sBTC, STX, stSTX, or USDC** variants) and click **"Supply"**.',
            'Approve the transaction in the wallet pop-up. Wait a few seconds for **confirmation on the Stacks network**.',
            'Once confirmed, your supply position becomes active and begins earning **continuously compounding yield**. Your active lending position can be found under **"Your Supplies"**.',
            'To withdraw, click **"Withdraw"** on the asset under "Your Supplies". If you select **"Max"**, you receive your **full balance—original deposit plus accrued yield**. Note: If you have an active borrowing position, it must be **fully repaid** before you can withdraw.'
          ],
          demoFlow: [
            { step: 1, action: 'Connect Wallet', desc: 'Leather, Xverse, OKX supported', icon: '🔗' },
            { step: 2, action: 'Select Asset', desc: 'sBTC, STX, stSTX, or USDC', icon: '💎' },
            { step: 3, action: 'Click Supply', desc: 'Approve in your wallet', icon: '✅' },
            { step: 4, action: 'Earn Yield', desc: 'Continuously compounding', icon: '📈' },
            { step: 5, action: 'Withdraw Anytime', desc: 'Deposit + earned interest', icon: '💰' }
          ],
          supportedAssets: [
            { name: 'sBTC', icon: '₿', points: '1x', apy: 'Variable' },
            { name: 'STX', icon: '⚡', points: '2x', apy: 'Variable' },
            { name: 'stSTX', icon: '💫', points: '1x', apy: 'Variable' },
            { name: 'USDC', icon: '💵', points: '2x', apy: 'Variable' }
          ],
          sections: [
            {
              title: '🎬 Watch the Tutorial',
              text: 'See a real walkthrough of depositing assets and earning yield. The video shows every click and confirmation.'
            },
            {
              title: '⚡ Instant Activation',
              text: 'Once confirmed, your position is live. Interest starts accruing immediately and compounds continuously.'
            }
          ],
          quiz: {
            question: 'What happens when you supply assets to Zest Protocol?',
            options: [
              'Assets are locked forever',
              'You earn continuously compounding yield and can withdraw anytime',
              'You lose ownership of your assets',
              'You can only withdraw after 1 year'
            ],
            correct: 1
          }
        }
      },
      {
        id: 3,
        title: 'Unlock E-Mode Power',
        type: 'learn',
        duration: '10 min',
        xp: 200,
        icon: Zap,
        color: 'emerald',
        content: {
          description: 'Discover how to borrow 60% more with E-Mode',
          videoUrl: 'https://www.loom.com/share/cac04e30d7944ce3b339df8754c545ab',
          textGuide: [
            '**E-Mode (Efficiency Mode)** allows you to borrow **up to 60% more capital** when using correlated assets. Instead of a **50% LTV** in standard mode, E-Mode offers **up to 80% LTV**.',
            'With **$1,000 in STX collateral**: Standard mode lets you borrow **$500**. E-Mode lets you borrow **$800**. That\'s an extra **$300 in borrowing power**!',
            'E-Mode works with **correlated assets: STX, stSTX, and stSTXbtc**. These assets move together in price, **reducing liquidation risk**.',
            'To activate E-Mode: Supply **STX, stSTX, or stSTXbtc** → Enable as collateral → Click the **E-Mode toggle button**. You can now borrow correlated assets with **maximum capital efficiency**.',
            'Interest rates on Zest are **variable and determined by utilization**. Higher utilization = **higher rates for lenders**, encouraging more supply. Lower utilization = **lower rates**, encouraging more borrowing. Rates update in **real-time** based on market dynamics.'
          ],
          comparison: {
            standard: {
              collateral: '$1,000',
              maxBorrow: '$500',
              ltv: '50%',
              liquidation: '75%',
              penalty: '10%'
            },
            emode: {
              collateral: '$1,000',
              maxBorrow: '$800',
              ltv: '80%',
              liquidation: '85%',
              penalty: '5%'
            },
            difference: '+$300 (60% more!)'
          },
          assetCategories: [
            { type: 'Collateral', assets: ['STX', 'sBTC', 'stSTX'], canSupply: true, canBorrow: true, canCollateralize: true, badge: '💎' },
            { type: 'Borrow-Only', assets: ['USDC', 'USDA', 'USDh'], canSupply: false, canBorrow: true, canCollateralize: false, badge: '💵' },
            { type: 'E-Mode', assets: ['STX', 'stSTX', 'stSTXbtc'], canSupply: true, canBorrow: true, canCollateralize: true, badge: '⚡' }
          ],
          sections: [
            {
              title: '⚡ E-Mode = 60% More Borrowing Power',
              text: 'Same $1,000 collateral: Standard mode = $500 borrow. E-Mode = $800 borrow. That\'s $300 extra capital to work with!'
            },
            {
              title: '🎯 How to Activate',
              text: 'Supply STX/stSTX/stSTXbtc → Enable as collateral → Click E-Mode button. Done! Now borrow correlated assets with max efficiency.'
            }
          ],
          quiz: {
            question: 'With $1,000 in STX collateral, how much can you borrow in E-Mode?',
            options: [
              '$500',
              '$650',
              '$800',
              '$1,000'
            ],
            correct: 2
          }
        }
      },
      {
        id: 4,
        title: 'Interactive Simulator',
        type: 'simulator',
        duration: '15 min',
        xp: 250,
        icon: Target,
        color: 'yellow',
        content: {
          description: 'Practice lending and borrowing in a safe environment',
          tasks: [
            'Deposit 1.0 sBTC into Zest lending pool',
            'Watch your balance earn interest in real-time',
            'Borrow 500 USDA against your sBTC collateral',
            'Monitor your health factor (must stay above 1.0)',
            'Activate E-Mode for higher capital efficiency'
          ]
        }
      },
      {
        id: 5,
        title: 'Testnet Practice',
        type: 'practice',
        duration: '20 min',
        xp: 300,
        icon: Wallet,
        color: 'orange',
        content: {
          description: 'Execute real transactions on Stacks testnet',
          steps: [
            {
              action: 'Connect Wallet',
              instruction: 'Connect your Leather, Xverse, or compatible Stacks wallet to the testnet.',
              verification: 'wallet'
            },
            {
              action: 'Get Testnet Tokens',
              instruction: 'Use the Stacks testnet faucet to get STX and sBTC test tokens.',
              verification: 'balance'
            },
            {
              action: 'Supply to Zest Market',
              instruction: 'Navigate to app.zestprotocol.com (testnet) and supply 0.01 sBTC to the lending pool.',
              verification: 'transaction'
            },
            {
              action: 'Enable as Collateral',
              instruction: 'Enable your supplied sBTC as collateral in your dashboard.',
              verification: 'position'
            },
            {
              action: 'Borrow USDA',
              instruction: 'Borrow a small amount of USDA against your collateral and monitor your health factor.',
              verification: 'transaction'
            }
          ]
        }
      },
      {
        id: 6,
        title: 'Zest Mastery Quiz',
        type: 'quiz',
        duration: '10 min',
        xp: 250,
        icon: Trophy,
        color: 'pink',
        content: {
          description: 'Prove your mastery of Zest Protocol and earn your NFT badge',
          questions: [
            {
              question: 'What is the main goal of Zest Protocol?',
              options: [
                'To create NFTs backed by Bitcoin',
                'To make Bitcoin productive through DeFi lending and borrowing',
                'To replace Bitcoin as a digital currency',
                'To act as a Bitcoin wallet provider'
              ],
              correct: 1
            },
            {
              question: 'Which blockchain layer powers Zest Protocol?',
              options: [
                'Ethereum',
                'Solana',
                'Stacks',
                'Avalanche'
              ],
              correct: 2
            },
            {
              question: 'What percentage of all sBTC on Stacks has been deposited into Zest?',
              options: [
                'About 1%',
                'About 5%',
                'Over 10%',
                'Over 25%'
              ],
              correct: 2
            },
            {
              question: 'How can users earn double Zest Points (2 points per $1 per day)?',
              options: [
                'By supplying STX, aeUSDC, USDh, aUSD, or USDA',
                'By borrowing any token on Stacks',
                'By holding Bitcoin in a wallet',
                'By staking sBTC on Ethereum'
              ],
              correct: 0
            },
            {
              question: 'What is the maximum LTV in E-Mode for correlated assets?',
              options: [
                '50%',
                '65%',
                '80%',
                '95%'
              ],
              correct: 2
            }
          ]
        }
      }
    ]
  }
}

export default function ProtocolQuestPage() {
  const params = useParams()
  const protocol = protocolData[params.protocol as string]

  const [currentStep, setCurrentStep] = useState(1)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState<any>(null)
  const [quizAnswers, setQuizAnswers] = useState<any>({})
  const [simulatorState, setSimulatorState] = useState({
    deposited: 0,
    earned: 0,
    borrowed: 0,
    healthFactor: 0
  })
  const [practiceStep, setPracticeStep] = useState(0)
  const [walletConnected, setWalletConnected] = useState(false)
  const [totalXP, setTotalXP] = useState(0)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [videoUrl, setVideoUrl] = useState('')

  if (!protocol) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Protocol not found</div>
  }

  const openStep = (step: any) => {
    if (step.type === 'video') {
      setVideoUrl(step.content.videoUrl)
      setShowVideoModal(true)
      setModalContent(step)
    } else {
      setModalContent(step)
      setShowModal(true)
    }
  }

  const completeStep = (stepId: number, xp: number) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId])
      setTotalXP(totalXP + xp)
    }
    setShowModal(false)
    setShowVideoModal(false)
    if (stepId < protocol.steps.length) {
      setCurrentStep(stepId + 1)
    }
  }

  const getColorClasses = (color: string) => {
    const colors: any = {
      purple: { bg: 'bg-purple-500', border: 'border-purple-500', text: 'text-purple-400', glow: 'shadow-purple-500' },
      cyan: { bg: 'bg-cyan-500', border: 'border-cyan-500', text: 'text-cyan-400', glow: 'shadow-cyan-500' },
      emerald: { bg: 'bg-emerald-500', border: 'border-emerald-500', text: 'text-emerald-400', glow: 'shadow-emerald-500' },
      yellow: { bg: 'bg-yellow-500', border: 'border-yellow-500', text: 'text-yellow-400', glow: 'shadow-yellow-500' },
      orange: { bg: 'bg-orange-500', border: 'border-orange-500', text: 'text-orange-400', glow: 'shadow-orange-500' },
      pink: { bg: 'bg-pink-500', border: 'border-pink-500', text: 'text-pink-400', glow: 'shadow-pink-500' },
    }
    return colors[color] || colors.emerald
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </Canvas>
      </div>

      <div className="fixed inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="bg-slate-950/90 backdrop-blur-2xl border border-slate-800/50 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-emerald-500 rounded-xl flex items-center justify-center text-3xl shadow-lg shadow-emerald-500/50">
                  {protocol.icon}
                </div>
                <div>
                  <h1 className="text-3xl font-black text-white">{protocol.name}</h1>
                  <p className="text-slate-400 text-sm">{protocol.tagline}</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div>
                  <div className="text-xs text-slate-500 mb-1">Progress</div>
                  <div className="text-2xl font-black text-white">{completedSteps.length}/{protocol.steps.length}</div>
                </div>
                <div className="h-12 w-px bg-slate-800" />
                <div>
                  <div className="text-xs text-slate-500 mb-1">Total XP</div>
                  <div className="text-2xl font-black text-emerald-400">{totalXP}</div>
                </div>
              </div>
            </div>

            <div className="mt-4 h-2 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500"
                initial={{ width: 0 }}
                animate={{ width: `${(completedSteps.length / protocol.steps.length) * 100}%` }}
              />
            </div>
          </div>
        </motion.div>

        {/* Unique Hexagonal Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {protocol.steps.map((step: any, index: number) => {
            const isCompleted = completedSteps.includes(step.id)
            const isCurrent = step.id === currentStep
            const isLocked = step.id > currentStep
            const colors = getColorClasses(step.color)
            const StepIcon = step.icon

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                whileHover={!isLocked ? { scale: 1.05, y: -5 } : {}}
                onClick={() => !isLocked && openStep(step)}
                className={`relative group cursor-pointer ${isLocked ? 'opacity-50' : ''}`}
              >
                {/* Glow Effect */}
                {isCurrent && !isCompleted && (
                  <div className={`absolute inset-0 ${colors.bg} opacity-20 blur-2xl rounded-3xl animate-pulse`} />
                )}

                {/* Card */}
                <div className={`relative bg-slate-950/90 backdrop-blur-2xl border-2 rounded-3xl overflow-hidden transition-all ${
                  isCompleted
                    ? `${colors.border}/50 shadow-lg ${colors.glow}/20`
                    : isCurrent
                    ? `${colors.border}/60 shadow-xl ${colors.glow}/30`
                    : 'border-slate-800/50'
                }`}>

                  {/* Top Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-black ${
                    isCompleted
                      ? 'bg-emerald-500 text-white'
                      : isCurrent
                      ? `${colors.bg} text-white`
                      : 'bg-slate-800 text-slate-500'
                  }`}>
                    {isCompleted ? '✓ Done' : isLocked ? 'Locked' : 'Start'}
                  </div>

                  {/* Icon Circle */}
                  <div className="p-6">
                    <div className={`relative w-20 h-20 rounded-2xl ${
                      isCompleted
                        ? 'bg-emerald-500'
                        : isCurrent
                        ? colors.bg
                        : 'bg-slate-800'
                    } flex items-center justify-center mb-4 shadow-lg ${
                      isCompleted ? 'shadow-emerald-500/50' : isCurrent ? `${colors.glow}/50` : ''
                    }`}>
                      {isCompleted ? (
                        <CheckCircle2 className="w-10 h-10 text-white" />
                      ) : isLocked ? (
                        <Lock className="w-8 h-8 text-slate-500" />
                      ) : (
                        <StepIcon className="w-10 h-10 text-white" />
                      )}

                      {/* Rotating Border */}
                      {isCurrent && !isCompleted && (
                        <motion.div
                          className={`absolute inset-0 rounded-2xl border-2 ${colors.border}`}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                          style={{
                            background: `conic-gradient(from 0deg, transparent, ${colors.bg.replace('bg-', '')})`,
                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'xor',
                            maskComposite: 'exclude',
                            padding: '2px'
                          }}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-slate-500 text-sm font-black">STEP {step.id}</span>
                      </div>
                      <h3 className="text-xl font-black text-white mb-2">{step.title}</h3>
                      <p className="text-slate-400 text-sm mb-4 line-clamp-2">{step.content.description}</p>

                      {/* Stats */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-800/50">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <span>⏱ {step.duration}</span>
                        </div>
                        <div className={`flex items-center gap-1 px-2 py-1 ${colors.bg}/10 rounded-lg`}>
                          <Zap className={`w-4 h-4 ${colors.text}`} />
                          <span className={`text-sm font-black ${colors.text}`}>+{step.xp}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* NFT Badge */}
        {completedSteps.length === protocol.steps.length && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-pink-500/10 border-2 border-yellow-500/30 rounded-3xl p-8 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-orange-500/5 to-pink-500/5 animate-pulse" />
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-7xl mb-4"
              >
                🏆
              </motion.div>
              <h3 className="text-3xl font-black text-white mb-2">Quest Complete!</h3>
              <p className="text-slate-300 mb-6">You've mastered {protocol.name}. Claim your exclusive NFT badge!</p>
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-black rounded-xl hover:scale-105 transition-transform shadow-lg shadow-yellow-500/50">
                Mint NFT Badge
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            onClick={() => {
              setShowVideoModal(false)
              if (modalContent) completeStep(modalContent.id, modalContent.xp)
            }}
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full max-h-[85vh] overflow-hidden"
            >
              <div className="bg-slate-950 border-2 border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]">
                <div className="p-4 border-b border-slate-800 flex items-center justify-between flex-shrink-0">
                  <div className="flex-1 mr-4">
                    <h3 className="text-xl font-black text-white">{modalContent?.title}</h3>
                    <p className="text-slate-400 text-xs mt-1">{modalContent?.content.description}</p>
                  </div>
                  <button
                    onClick={() => {
                      setShowVideoModal(false)
                      if (modalContent) completeStep(modalContent.id, modalContent.xp)
                    }}
                    className="w-9 h-9 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>

                <div className="aspect-video bg-black flex-shrink-0">
                  <iframe
                    width="100%"
                    height="100%"
                    src={videoUrl}
                    title="Protocol Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>

                <div className="p-4 bg-slate-900/50 overflow-y-auto">
                  <h4 className="text-sm font-black text-white mb-3">Key Takeaways</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {modalContent?.content.keyPoints.map((point: string, i: number) => (
                      <div key={i} className="flex items-start gap-2 bg-slate-800/50 rounded-lg p-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-xs">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Other Modals */}
      <AnimatePresence>
        {showModal && modalContent && (
          <StepModal
            step={modalContent}
            onClose={() => setShowModal(false)}
            onComplete={(xp) => completeStep(modalContent.id, xp)}
            quizAnswers={quizAnswers}
            setQuizAnswers={setQuizAnswers}
            simulatorState={simulatorState}
            setSimulatorState={setSimulatorState}
            practiceStep={practiceStep}
            setPracticeStep={setPracticeStep}
            walletConnected={walletConnected}
            setWalletConnected={setWalletConnected}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

// Modal Components (continued in next message due to length)
function StepModal({ step, onClose, onComplete, quizAnswers, setQuizAnswers, simulatorState, setSimulatorState, practiceStep, setPracticeStep, walletConnected, setWalletConnected }: any) {
  const [simulatorTasks, setSimulatorTasks] = useState<boolean[]>([false, false, false, false, false])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] overflow-y-auto"
      onClick={onClose}
    >
      <div className="min-h-screen flex items-center justify-center p-4 py-20">
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-slate-950 border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden flex flex-col"
        >
        <div className="bg-slate-950 border-b border-slate-800 px-6 py-4 flex items-center justify-between flex-shrink-0">
          <div className="flex-1 mr-4">
            <h2 className="text-xl font-black text-white">{step.title}</h2>
            <p className="text-slate-400 text-xs mt-1">{step.content.description}</p>
          </div>
          <button onClick={onClose} className="w-9 h-9 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          {step.type === 'learn' && (
            <LearnContent step={step} quizAnswers={quizAnswers} setQuizAnswers={setQuizAnswers} onComplete={() => onComplete(step.xp)} />
          )}
          {step.type === 'simulator' && (
            <SimulatorContent
              tasks={step.content.tasks}
              simulatorState={simulatorState}
              setSimulatorState={setSimulatorState}
              simulatorTasks={simulatorTasks}
              setSimulatorTasks={setSimulatorTasks}
              onComplete={() => onComplete(step.xp)}
            />
          )}
          {step.type === 'practice' && (
            <PracticeContent
              steps={step.content.steps}
              practiceStep={practiceStep}
              setPracticeStep={setPracticeStep}
              walletConnected={walletConnected}
              setWalletConnected={setWalletConnected}
              onComplete={() => onComplete(step.xp)}
            />
          )}
          {step.type === 'quiz' && (
            <FinalQuizContent
              questions={step.content.questions}
              quizAnswers={quizAnswers}
              setQuizAnswers={setQuizAnswers}
              onComplete={() => onComplete(step.xp)}
            />
          )}
        </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

function LearnContent({ step, quizAnswers, setQuizAnswers, onComplete }: any) {
  const [showVideo, setShowVideo] = useState(false)
  const [showTextGuide, setShowTextGuide] = useState(false)

  return (
    <div className="space-y-3">
      {/* Learning Options */}
      {step.content.videoUrl && step.content.textGuide && (
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => { setShowVideo(!showVideo); setShowTextGuide(false); }}
            className={`p-2 rounded-lg border transition-all ${
              showVideo
                ? 'bg-purple-500/20 border-purple-500'
                : 'bg-slate-800/50 border-slate-700 hover:border-purple-500/50'
            }`}
          >
            <Video className="w-4 h-4 text-purple-400 mx-auto mb-1" />
            <div className="text-xs font-bold text-white">Watch Video</div>
          </button>
          <button
            onClick={() => { setShowTextGuide(!showTextGuide); setShowVideo(false); }}
            className={`p-2 rounded-lg border transition-all ${
              showTextGuide
                ? 'bg-cyan-500/20 border-cyan-500'
                : 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/50'
            }`}
          >
            <BookOpen className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
            <div className="text-xs font-bold text-white">Read Guide</div>
          </button>
        </div>
      )}

      {/* Video Section */}
      {showVideo && step.content.videoUrl && (
        <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl overflow-hidden">
          <div className="aspect-video bg-black">
            <iframe
              width="100%"
              height="100%"
              src={step.content.videoUrl}
              title="Tutorial Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Text Guide Section */}
      {showTextGuide && step.content.textGuide && (
        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base font-black text-white">📖 Text Guide</h3>
          </div>
          <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
            {step.content.textGuide.map((paragraph: string, i: number) => {
              const parts = paragraph.split(/(\*\*.*?\*\*)/g)
              return (
                <p key={i}>
                  {parts.map((part, idx) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      const text = part.slice(2, -2)
                      return (
                        <span key={idx} className="text-emerald-400 font-bold">
                          {text}
                        </span>
                      )
                    }
                    return part
                  })}
                </p>
              )
            })}
          </div>
        </div>
      )}

      {/* Stats Grid */}
      {step.content.stats && (
        <div className="grid grid-cols-2 gap-3">
          {step.content.stats.map((stat: any, i: number) => (
            <div key={i} className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-xl p-3">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-xs text-slate-400 mb-1">{stat.label}</div>
              <div className="text-lg font-black text-white">{stat.value}</div>
            </div>
          ))}
        </div>
      )}

      {/* Key Facts */}
      {step.content.keyFacts && (
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
          <h3 className="text-base font-black text-white mb-3">⚡ Key Facts</h3>
          <div className="space-y-2">
            {step.content.keyFacts.map((fact: string, i: number) => (
              <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                <span className="text-emerald-400 mt-0.5">→</span>
                <span>{fact}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Demo Flow */}
      {step.content.demoFlow && (
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
          <h3 className="text-base font-black text-white mb-3">📋 Step-by-Step Flow</h3>
          <div className="space-y-2">
            {step.content.demoFlow.map((item: any, i: number) => (
              <div key={i} className="flex items-center gap-3 bg-slate-800/50 rounded-lg p-2">
                <div className="text-2xl">{item.icon}</div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-white">{item.action}</div>
                  <div className="text-xs text-slate-400">{item.desc}</div>
                </div>
                <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500 flex items-center justify-center text-xs font-black text-cyan-400">
                  {item.step}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Supported Assets */}
      {step.content.supportedAssets && (
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
          <h3 className="text-base font-black text-white mb-3">💎 Supported Assets</h3>
          <div className="grid grid-cols-2 gap-2">
            {step.content.supportedAssets.map((asset: any, i: number) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-lg p-2 flex items-center gap-2">
                <div className="text-xl">{asset.icon}</div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-white">{asset.name}</div>
                  <div className="text-xs text-emerald-400">{asset.points} Points</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Comparison Table */}
      {step.content.comparison && (
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
          <h3 className="text-base font-black text-white mb-3">⚡ Standard vs E-Mode</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-3">
              <div className="text-xs text-slate-400 mb-2">Standard Mode</div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between"><span className="text-slate-400">Collateral:</span><span className="text-white font-bold">{step.content.comparison.standard.collateral}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Max Borrow:</span><span className="text-white font-bold">{step.content.comparison.standard.maxBorrow}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Max LTV:</span><span className="text-yellow-400 font-bold">{step.content.comparison.standard.ltv}</span></div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border-2 border-emerald-500 rounded-lg p-3">
              <div className="text-xs text-emerald-400 font-bold mb-2">E-Mode ⚡</div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between"><span className="text-slate-400">Collateral:</span><span className="text-white font-bold">{step.content.comparison.emode.collateral}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Max Borrow:</span><span className="text-emerald-400 font-bold">{step.content.comparison.emode.maxBorrow}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Max LTV:</span><span className="text-emerald-400 font-bold">{step.content.comparison.emode.ltv}</span></div>
              </div>
            </div>
          </div>
          <div className="mt-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-2 text-center">
            <span className="text-emerald-400 font-black text-sm">{step.content.comparison.difference}</span>
          </div>
        </div>
      )}

      {/* Asset Categories */}
      {step.content.assetCategories && (
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
          <h3 className="text-base font-black text-white mb-3">📊 Asset Categories</h3>
          <div className="space-y-2">
            {step.content.assetCategories.map((cat: any, i: number) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-lg p-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{cat.badge}</span>
                  <span className="text-sm font-bold text-white">{cat.type}</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-2">
                  {cat.assets.map((asset: string, j: number) => (
                    <span key={j} className="px-2 py-0.5 bg-cyan-500/20 border border-cyan-500/40 rounded text-xs text-cyan-400">
                      {asset}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Regular Sections */}
      {step.content.sections?.map((section: any, index: number) => (
        <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
          <h3 className="text-base font-black text-white mb-2">{section.title}</h3>
          <p className="text-slate-300 text-sm leading-relaxed">{section.text}</p>
        </div>
      ))}

      {/* Quiz */}
      {step.content.quiz && (
        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4">
          <h3 className="text-base font-black text-white mb-3">Quick Quiz</h3>
          <p className="text-white text-sm mb-3">{step.content.quiz.question}</p>
          <div className="space-y-2">
            {step.content.quiz.options.map((option: string, i: number) => (
              <button
                key={i}
                onClick={() => setQuizAnswers({ ...quizAnswers, [step.id]: i })}
                className={`w-full text-left px-3 py-2 rounded-lg border transition-all text-sm ${
                  quizAnswers[step.id] === i
                    ? 'bg-cyan-500 border-cyan-400 text-white'
                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-cyan-500/50'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            onClick={() => {
              if (quizAnswers[step.id] === step.content.quiz.correct) {
                onComplete()
              } else {
                alert('Incorrect! Try again.')
              }
            }}
            disabled={quizAnswers[step.id] === undefined}
            className="w-full mt-4 py-3 bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-700 disabled:text-slate-500 text-white font-black rounded-xl transition-colors"
          >
            Submit & Continue
          </button>
        </div>
      )}
    </div>
  )
}

function SimulatorContent({ tasks, simulatorState, setSimulatorState, simulatorTasks, setSimulatorTasks, onComplete }: any) {
  const performTask = (index: number) => {
    const newTasks = [...simulatorTasks]
    newTasks[index] = true
    setSimulatorTasks(newTasks)

    if (index === 0) setSimulatorState({ ...simulatorState, deposited: 1.0 })
    if (index === 1) setSimulatorState({ ...simulatorState, earned: 0.0023 })
    if (index === 2) setSimulatorState({ ...simulatorState, borrowed: 500 })
    if (index === 3) setSimulatorState({ ...simulatorState, healthFactor: 2.5 })
  }

  const allCompleted = simulatorTasks.every((t: boolean) => t)

  return (
    <div className="space-y-4">
      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
        <h3 className="text-base font-black text-white mb-3">Dashboard</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-slate-800/50 rounded-lg p-3">
            <div className="text-slate-400 text-xs mb-1">Deposited</div>
            <div className="text-white text-lg font-black">{simulatorState.deposited} sBTC</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-3">
            <div className="text-slate-400 text-xs mb-1">Earned</div>
            <div className="text-emerald-400 text-lg font-black">+{simulatorState.earned} sBTC</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-3">
            <div className="text-slate-400 text-xs mb-1">Borrowed</div>
            <div className="text-white text-lg font-black">${simulatorState.borrowed} USDA</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-3">
            <div className="text-slate-400 text-xs mb-1">Health Factor</div>
            <div className="text-emerald-400 text-lg font-black">{simulatorState.healthFactor}</div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {tasks.map((task: string, i: number) => (
          <button
            key={i}
            onClick={() => performTask(i)}
            disabled={simulatorTasks[i]}
            className={`w-full text-left px-4 py-3 rounded-xl border transition-all ${
              simulatorTasks[i]
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                : 'bg-slate-800 border-slate-700 text-white hover:border-emerald-500/50'
            }`}
          >
            <div className="flex items-center gap-3">
              {simulatorTasks[i] ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              ) : (
                <Circle className="w-4 h-4 text-slate-500" />
              )}
              <span className="font-semibold text-sm">{task}</span>
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={onComplete}
        disabled={!allCompleted}
        className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-700 disabled:text-slate-500 text-white font-black rounded-xl transition-colors"
      >
        {allCompleted ? 'Complete Simulator' : 'Complete all tasks'}
      </button>
    </div>
  )
}

function PracticeContent({ steps, practiceStep, setPracticeStep, walletConnected, setWalletConnected, onComplete }: any) {
  const verifyStep = () => {
    if (steps[practiceStep].verification === 'wallet') {
      setWalletConnected(true)
    }

    if (practiceStep < steps.length - 1) {
      setPracticeStep(practiceStep + 1)
    } else {
      onComplete()
    }
  }

  return (
    <div className="space-y-4">
      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-3">
        <div className="flex items-start gap-2">
          <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-white font-bold text-sm mb-0.5">Real Practice Mode</h4>
            <p className="text-slate-300 text-xs">Using your actual wallet with small testnet amounts.</p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {steps.map((step: any, i: number) => (
          <div
            key={i}
            className={`border rounded-xl p-4 ${
              i < practiceStep
                ? 'bg-emerald-500/10 border-emerald-500/30'
                : i === practiceStep
                ? 'bg-cyan-500/10 border-cyan-500/30'
                : 'bg-slate-900/30 border-slate-800 opacity-50'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center border-2 flex-shrink-0 ${
                i < practiceStep
                  ? 'bg-emerald-500 border-emerald-400'
                  : i === practiceStep
                  ? 'bg-cyan-500 border-cyan-400'
                  : 'bg-slate-800 border-slate-700'
              }`}>
                {i < practiceStep ? (
                  <CheckCircle2 className="w-5 h-5 text-white" />
                ) : (
                  <span className="text-white font-black text-sm">{i + 1}</span>
                )}
              </div>
              <div className="flex-1">
                <h4 className="text-white font-bold text-sm mb-1">{step.action}</h4>
                <p className="text-slate-400 text-xs">{step.instruction}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {practiceStep < steps.length && (
        <button
          onClick={verifyStep}
          className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-black rounded-xl transition-colors"
        >
          Verify & Continue
        </button>
      )}
    </div>
  )
}

function FinalQuizContent({ questions, quizAnswers, setQuizAnswers, onComplete }: any) {
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const handleSubmit = () => {
    let correct = 0
    questions.forEach((q: any, i: number) => {
      if (quizAnswers[i] === q.correct) correct++
    })
    setScore(correct)
    setSubmitted(true)

    if (correct === questions.length) {
      setTimeout(() => onComplete(), 1500)
    }
  }

  return (
    <div className="space-y-4">
      {questions.map((q: any, index: number) => (
        <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
          <h4 className="text-white font-bold text-sm mb-2">Question {index + 1}</h4>
          <p className="text-slate-300 text-sm mb-3">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((option: string, i: number) => (
              <button
                key={i}
                onClick={() => !submitted && setQuizAnswers({ ...quizAnswers, [index]: i })}
                disabled={submitted}
                className={`w-full text-left px-3 py-2 rounded-lg border transition-all text-sm ${
                  submitted && i === q.correct
                    ? 'bg-emerald-500 border-emerald-400 text-white'
                    : submitted && quizAnswers[index] === i && i !== q.correct
                    ? 'bg-red-500 border-red-400 text-white'
                    : quizAnswers[index] === i
                    ? 'bg-cyan-500 border-cyan-400 text-white'
                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-cyan-500/50'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}

      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={Object.keys(quizAnswers).length < questions.length}
          className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-700 disabled:text-slate-500 text-white font-black rounded-xl transition-colors"
        >
          Submit Quiz
        </button>
      ) : (
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-center">
          <Trophy className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
          <h3 className="text-xl font-black text-white mb-1">Score: {score}/{questions.length}</h3>
          <p className="text-slate-300 text-sm">
            {score === questions.length ? 'Perfect! Quest Complete!' : 'Review and try again.'}
          </p>
        </div>
      )}
    </div>
  )
}
