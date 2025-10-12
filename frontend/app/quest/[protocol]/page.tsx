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
          videoUrl: 'https://www.loom.com/embed/zest-overview',
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
          videoUrl: 'https://www.loom.com/embed/d98bb351944c4eb399a027acbbda94be',
          additionalVideos: [
            {
              title: 'Transaction Confirmation',
              url: 'https://www.loom.com/embed/bfd33c1ae6034ba598236c8f20948ae8',
              description: 'See how transactions confirm on Stacks network'
            },
            {
              title: 'Withdrawing Assets',
              url: 'https://www.loom.com/embed/8cf8cd335a8e4917bc7f9dafb7c4c334',
              description: 'Learn how to withdraw your deposited assets and earned yield'
            }
          ],
          images: [
            {
              url: 'https://563839015-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FGfC8dsUgiIuFFUi3sa84%2Fuploads%2F3wMko9sVaYQ6TGjCfbNZ%2Fimage.png?alt=media&token=f93d25c7-fb91-4080-a88d-28f7141c086d',
              caption: 'Your Supplies Dashboard'
            }
          ],
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
          videoUrl: 'https://www.loom.com/embed/cac04e30d7944ce3b339df8754c545ab',
          images: [
            {
              url: 'https://563839015-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FGfC8dsUgiIuFFUi3sa84%2Fuploads%2FCT3KKcc7nvRNxb7ZdIgy%2F27b93285-c110-4460-b4a2-8fad33988dba.png?alt=media&token=5c8bbdce-7b4e-4c2a-8a56-42ea87e541ca',
              caption: 'E-Mode Activation Interface'
            }
          ],
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
                whileHover={!isLocked ? { scale: 1.05, y: -8, rotateY: 5 } : {}}
                onClick={() => !isLocked && openStep(step)}
                className={`relative group cursor-pointer ${isLocked ? 'opacity-50' : ''}`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated Particles */}
                {isCurrent && !isCompleted && (
                  <>
                    <motion.div
                      className={`absolute inset-0 ${colors.bg} opacity-20 blur-3xl rounded-3xl`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-2 h-2 ${colors.bg} rounded-full`}
                        style={{
                          left: `${20 + i * 30}%`,
                          top: '-10px',
                        }}
                        animate={{
                          y: [0, 300],
                          opacity: [1, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.6,
                        }}
                      />
                    ))}
                  </>
                )}

                {/* Completion Sparkles */}
                {isCompleted && (
                  <>
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute text-yellow-400 text-xl"
                        style={{
                          left: `${10 + i * 25}%`,
                          top: `${10 + (i % 2) * 70}%`,
                        }}
                        animate={{
                          scale: [1, 1.5, 1],
                          rotate: [0, 180, 360],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      >
                        ✨
                      </motion.div>
                    ))}
                  </>
                )}

                {/* Card */}
                <div className={`relative backdrop-blur-2xl border-2 rounded-3xl overflow-hidden transition-all ${
                  isCompleted
                    ? `bg-gradient-to-br from-emerald-950/90 via-slate-950/90 to-cyan-950/90 ${colors.border}/50 shadow-2xl shadow-emerald-500/30`
                    : isCurrent
                    ? `bg-gradient-to-br from-slate-950/95 via-slate-900/95 to-slate-950/95 ${colors.border}/60 shadow-2xl ${colors.glow}/40`
                    : 'bg-slate-950/80 border-slate-800/50'
                }`}>

                  {/* Animated Badge */}
                  <motion.div
                    className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-black flex items-center gap-1 ${
                      isCompleted
                        ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/50'
                        : isCurrent
                        ? `${colors.bg} text-white shadow-lg ${colors.glow}/50`
                        : 'bg-slate-800 text-slate-500'
                    }`}
                    animate={isCurrent && !isCompleted ? {
                      scale: [1, 1.1, 1],
                      boxShadow: ['0 0 20px rgba(16, 185, 129, 0.3)', '0 0 30px rgba(16, 185, 129, 0.6)', '0 0 20px rgba(16, 185, 129, 0.3)']
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {isCompleted && <span>🏆</span>}
                    {isCompleted ? 'Completed' : isLocked ? '🔒 Locked' : '▶ Start'}
                  </motion.div>

                  {/* Level Indicator */}
                  <div className="absolute top-4 left-4">
                    <motion.div
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-black text-sm ${
                        isCompleted
                          ? 'bg-emerald-500 border-emerald-400 text-white'
                          : isCurrent
                          ? `${colors.bg} ${colors.border} text-white`
                          : 'bg-slate-800 border-slate-700 text-slate-500'
                      }`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {step.id}
                    </motion.div>
                  </div>

                  {/* Icon Circle */}
                  <div className="p-6 pt-16">
                    <motion.div
                      className={`relative w-24 h-24 mx-auto rounded-3xl ${
                        isCompleted
                          ? 'bg-gradient-to-br from-emerald-400 via-emerald-500 to-cyan-500'
                          : isCurrent
                          ? `bg-gradient-to-br ${colors.bg.replace('bg-', 'from-')}-400 ${colors.bg.replace('bg-', 'via-')}-500 ${colors.bg.replace('bg-', 'to-')}-600`
                          : 'bg-gradient-to-br from-slate-700 to-slate-800'
                      } flex items-center justify-center mb-5 shadow-2xl ${
                        isCompleted ? 'shadow-emerald-500/60' : isCurrent ? `${colors.glow}/60` : ''
                      }`}
                      animate={isCurrent && !isCompleted ? {
                        boxShadow: [
                          '0 10px 40px rgba(16, 185, 129, 0.4)',
                          '0 15px 60px rgba(16, 185, 129, 0.8)',
                          '0 10px 40px rgba(16, 185, 129, 0.4)'
                        ]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <motion.div
                        animate={!isLocked ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] } : {}}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-12 h-12 text-white" />
                        ) : isLocked ? (
                          <Lock className="w-10 h-10 text-slate-400" />
                        ) : (
                          <StepIcon className="w-12 h-12 text-white" />
                        )}
                      </motion.div>

                      {/* Orbiting Particles */}
                      {isCurrent && !isCompleted && (
                        <>
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className={`absolute w-3 h-3 ${colors.bg} rounded-full`}
                              style={{
                                left: '50%',
                                top: '50%',
                              }}
                              animate={{
                                x: [0, 50, 0, -50, 0],
                                y: [0, -50, 0, 50, 0],
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                delay: i * 1.3,
                              }}
                            />
                          ))}
                        </>
                      )}

                      {/* Pulsing Ring */}
                      {isCurrent && !isCompleted && (
                        <motion.div
                          className={`absolute inset-0 rounded-3xl border-4 ${colors.border}`}
                          animate={{
                            scale: [1, 1.3],
                            opacity: [0.8, 0],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </motion.div>

                    {/* Content */}
                    <div className="text-center">
                      <motion.div
                        className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-slate-800/50 rounded-full"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="text-slate-400 text-xs font-black">QUEST {step.id}</span>
                        <span className={`w-2 h-2 rounded-full ${isCurrent ? colors.bg : 'bg-slate-600'}`} />
                      </motion.div>
                      <h3 className="text-xl font-black text-white mb-3 leading-tight">{step.title}</h3>
                      <p className="text-slate-400 text-sm mb-5 line-clamp-2 px-2">{step.content.description}</p>

                      {/* Stats */}
                      <div className="flex items-center justify-center gap-4 pt-4 border-t border-slate-700/50">
                        <motion.div
                          className="flex items-center gap-2 px-3 py-2 bg-slate-800/50 rounded-xl"
                          whileHover={{ scale: 1.05, backgroundColor: 'rgba(30, 41, 59, 0.8)' }}
                        >
                          <span className="text-lg">⏱</span>
                          <span className="text-xs font-bold text-slate-400">{step.duration}</span>
                        </motion.div>
                        <motion.div
                          className={`flex items-center gap-2 px-3 py-2 rounded-xl ${
                            isCompleted
                              ? 'bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30'
                              : `${colors.bg}/20 border ${colors.border}/30`
                          }`}
                          whileHover={{ scale: 1.05 }}
                          animate={isCurrent && !isCompleted ? {
                            borderColor: ['rgba(16, 185, 129, 0.3)', 'rgba(16, 185, 129, 0.8)', 'rgba(16, 185, 129, 0.3)']
                          } : {}}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Zap className={`w-5 h-5 ${isCompleted ? 'text-emerald-400' : colors.text}`} />
                          <span className={`text-sm font-black ${isCompleted ? 'text-emerald-400' : colors.text}`}>+{step.xp} XP</span>
                        </motion.div>
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
            onComplete={(xp: number) => completeStep(modalContent.id, xp)}
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
          <motion.button
            onClick={() => { setShowVideo(!showVideo); setShowTextGuide(false); }}
            className={`relative p-2 rounded-lg border transition-all overflow-hidden ${
              showVideo
                ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500'
                : 'bg-slate-800/50 border-slate-700 hover:border-purple-500/50'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {showVideo && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
            <Video className="w-4 h-4 text-purple-400 mx-auto mb-1" />
            <div className="text-xs font-bold text-white relative z-10">Watch Video</div>
          </motion.button>
          <motion.button
            onClick={() => { setShowTextGuide(!showTextGuide); setShowVideo(false); }}
            className={`relative p-2 rounded-lg border transition-all overflow-hidden ${
              showTextGuide
                ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500'
                : 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/50'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {showTextGuide && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
            <BookOpen className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
            <div className="text-xs font-bold text-white relative z-10">Read Guide</div>
          </motion.button>
        </div>
      )}

      {/* Video Section */}
      {showVideo && step.content.videoUrl && (
        <div className="space-y-3">
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

          {/* Additional Videos */}
          {step.content.additionalVideos && step.content.additionalVideos.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-black text-white">📹 More Video Guides</h4>
              {step.content.additionalVideos.map((video: any, i: number) => (
                <details key={i} className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
                  <summary className="cursor-pointer p-3 hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-center gap-2">
                      <PlayCircle className="w-4 h-4 text-purple-400" />
                      <span className="text-sm font-bold text-white">{video.title}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 ml-6">{video.description}</p>
                  </summary>
                  <div className="aspect-video bg-black">
                    <iframe
                      width="100%"
                      height="100%"
                      src={video.url}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </details>
              ))}
            </div>
          )}
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

      {/* Images */}
      {step.content.images && step.content.images.length > 0 && (
        <div className="space-y-3">
          {step.content.images.map((image: any, i: number) => (
            <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-auto"
              />
              {image.caption && (
                <div className="p-3 border-t border-slate-800">
                  <p className="text-xs text-slate-400 text-center">{image.caption}</p>
                </div>
              )}
            </div>
          ))}
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
  const [currentStep, setCurrentStep] = useState(0) // 0=supply, 1=watch earn, 2=borrow, 3=monitor health, 4=e-mode
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null)
  const [amount, setAmount] = useState('')
  const [showWallet, setShowWallet] = useState(false)
  const [transacting, setTransacting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [userBalance, setUserBalance] = useState({ sBTC: 5.5, STX: 15000, USDC: 10000 })
  const [collateralEnabled, setCollateralEnabled] = useState(false)
  const [selectedBorrowAsset, setSelectedBorrowAsset] = useState<string | null>(null)
  const [borrowAmount, setBorrowAmount] = useState('')
  const [eModeActive, setEModeActive] = useState(false)

  const assets = [
    { name: 'sBTC', icon: '₿', apy: '3.2%' },
    { name: 'STX', icon: '⚡', apy: '5.8%' },
    { name: 'USDC', icon: '💵', apy: '4.5%' },
  ]

  const borrowableAssets = [
    { name: 'USDA', icon: '💵', apy: '6.5%' },
    { name: 'USDC', icon: '💰', apy: '5.2%' },
  ]

  const performTask = (index: number) => {
    setSimulatorTasks((prevTasks: boolean[]) => {
      const newTasks = [...prevTasks]
      newTasks[index] = true
      return newTasks
    })
  }

  const handleSupply = () => {
    const assetToUse = selectedAsset || 'sBTC'
    const amountToUse = amount && parseFloat(amount) > 0 ? parseFloat(amount) : 1.0

    setTransacting(true)
    setShowWallet(true)

    setTimeout(() => {
      setShowWallet(false)

      setSimulatorState((prev: any) => ({
        ...prev,
        deposited: amountToUse,
        depositedAsset: assetToUse
      }))

      // Deduct from user balance
      setUserBalance((prev) => ({ ...prev, [assetToUse]: prev[assetToUse as keyof typeof prev] - amountToUse }))

      performTask(0)
      setShowSuccess(true)

      setTimeout(() => {
        setShowSuccess(false)
        setTransacting(false)
        setSelectedAsset(null)
        setAmount('')
        setCurrentStep(1) // Move to watching earnings

        // Start earning interest after 2 seconds
        setTimeout(() => {
          let earned = 0
          const interval = setInterval(() => {
            earned += 0.00001
            setSimulatorState((prev: any) => ({ ...prev, earned }))
          }, 100)

          // After 3 seconds, mark task complete
          setTimeout(() => {
            clearInterval(interval)
            performTask(1)
          }, 3000)
        }, 2000)
      }, 2000)
    }, 3000)
  }

  const enableCollateral = () => {
    setCollateralEnabled(true)
    setTimeout(() => {
      setCurrentStep(2) // Move to borrowing
    }, 1000)
  }

  const handleBorrow = () => {
    const borrowAssetToUse = selectedBorrowAsset || 'USDA'
    const borrowAmountToUse = borrowAmount && parseFloat(borrowAmount) > 0 ? parseFloat(borrowAmount) : 500

    setTransacting(true)
    setShowWallet(true)

    setTimeout(() => {
      setShowWallet(false)

      // Calculate health factor
      const collateralValue = simulatorState.deposited * 60000 // assume sBTC = $60k
      const borrowValue = borrowAmountToUse
      const healthFactor = (collateralValue * 0.75) / borrowValue

      setSimulatorState((prev: any) => ({
        ...prev,
        borrowed: borrowAmountToUse,
        borrowedAsset: borrowAssetToUse,
        healthFactor
      }))

      performTask(2)
      setShowSuccess(true)

      setTimeout(() => {
        setShowSuccess(false)
        setTransacting(false)
        setSelectedBorrowAsset(null)
        setBorrowAmount('')
        setCurrentStep(3) // Move to monitoring health
        performTask(3)

        setTimeout(() => {
          setCurrentStep(4) // Move to E-Mode
        }, 2000)
      }, 2000)
    }, 3000)
  }

  const activateEMode = () => {
    setTransacting(true)
    setShowWallet(true)

    setTimeout(() => {
      setShowWallet(false)
      setEModeActive(true)

      // Increase health factor with E-Mode
      const collateralValue = simulatorState.deposited * 60000
      const borrowValue = simulatorState.borrowed
      const healthFactor = (collateralValue * 0.80) / borrowValue // 80% LTV instead of 75%

      setSimulatorState((prev: any) => ({ ...prev, healthFactor }))

      performTask(4)
      setShowSuccess(true)

      setTimeout(() => {
        setShowSuccess(false)
        setTransacting(false)
      }, 2000)
    }, 3000)
  }

  const allCompleted = simulatorTasks.every((t: boolean) => t)

  return (
    <div className="space-y-4">
      {/* Simulated DApp Interface */}
      <div className="bg-gradient-to-br from-slate-900/90 via-blue-950/30 to-slate-900/90 border border-slate-700 rounded-xl p-4 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-black text-white">🍊 Zest Protocol</h3>
          <motion.div
            className="px-3 py-1.5 bg-emerald-500/20 border border-emerald-500 rounded-full flex items-center gap-2"
            animate={{ boxShadow: ['0 0 10px rgba(16, 185, 129, 0.3)', '0 0 20px rgba(16, 185, 129, 0.6)', '0 0 10px rgba(16, 185, 129, 0.3)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs font-bold text-emerald-400">Testnet</span>
          </motion.div>
        </div>

        {/* Your Supplies Dashboard */}
        <div className="bg-slate-950/50 border border-slate-700 rounded-lg p-3 mb-4">
          <h4 className="text-xs font-black text-slate-400 mb-3">💰 YOUR SUPPLIES</h4>
          <div className="grid grid-cols-2 gap-3">
            <motion.div
              className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-lg p-3"
              animate={simulatorState.deposited > 0 ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="text-slate-400 text-xs mb-1">Deposited</div>
              <div className="text-white text-lg font-black">{simulatorState.deposited.toFixed(4)} sBTC</div>
              {simulatorState.deposited > 0 && <div className="text-emerald-400 text-xs mt-1">✓ Active</div>}
            </motion.div>
            <motion.div
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-3"
              animate={simulatorState.earned > 0 ? { borderColor: ['rgba(16, 185, 129, 0.3)', 'rgba(16, 185, 129, 0.8)', 'rgba(16, 185, 129, 0.3)'] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="text-slate-400 text-xs mb-1">Earned Interest</div>
              <div className="text-emerald-400 text-lg font-black">+{simulatorState.earned.toFixed(6)} sBTC</div>
              {simulatorState.earned > 0 && <div className="text-xs text-slate-500 mt-1">📈 Compounding...</div>}
            </motion.div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-3">
              <div className="text-slate-400 text-xs mb-1">Borrowed</div>
              <div className="text-white text-lg font-black">${simulatorState.borrowed} USDA</div>
            </div>
            <motion.div
              className={`bg-slate-800/50 border rounded-lg p-3 ${
                simulatorState.healthFactor >= 2 ? 'border-emerald-500/50' : 'border-slate-700'
              }`}
            >
              <div className="text-slate-400 text-xs mb-1">Health Factor</div>
              <div className={`text-lg font-black ${simulatorState.healthFactor >= 2 ? 'text-emerald-400' : 'text-white'}`}>
                {simulatorState.healthFactor > 0 ? simulatorState.healthFactor.toFixed(2) : '∞'}
              </div>
              {simulatorState.healthFactor >= 2 && <div className="text-emerald-400 text-xs mt-1">✓ Healthy</div>}
            </motion.div>
          </div>
        </div>

        {/* Step 1: Supply Interface */}
        {currentStep === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900/50 border border-slate-700 rounded-lg p-4"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-slate-700 rounded-lg flex items-center justify-center text-white font-semibold text-xs">1</div>
              <h4 className="text-sm font-semibold text-slate-200">Supply Assets</h4>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4">
              {assets.map((asset) => (
                <motion.button
                  key={asset.name}
                  onClick={() => setSelectedAsset(asset.name)}
                  className={`p-2.5 rounded-lg border transition-all ${
                    selectedAsset === asset.name
                      ? 'bg-slate-700 border-slate-600'
                      : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-xl mb-1">{asset.icon}</div>
                  <div className="text-xs font-medium text-white">{asset.name}</div>
                  <div className="text-xs text-emerald-500">{asset.apy}</div>
                </motion.button>
              ))}
            </div>

            {selectedAsset && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-3"
              >
                <div>
                  <label className="text-xs text-slate-400 mb-2 block">Amount to Supply</label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.0"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white font-bold text-lg focus:border-cyan-500 focus:outline-none"
                  />
                  <div className="text-xs text-slate-500 mt-1">
                    Balance: {userBalance[selectedAsset as keyof typeof userBalance]} {selectedAsset}
                  </div>
                </div>

                <motion.button
                  onClick={handleSupply}
                  disabled={transacting}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-700 disabled:text-slate-500 text-white font-semibold rounded-lg transition-colors text-sm"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {transacting ? 'Processing...' : 'Supply'}
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Step 2: Watch Interest Earn */}
        {currentStep === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900/50 border border-slate-700 rounded-lg p-4"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-slate-700 rounded-lg flex items-center justify-center text-white font-semibold text-xs">2</div>
              <h4 className="text-sm font-semibold text-slate-200">Watch Your Balance Grow</h4>
            </div>
            <div className="text-center py-6">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-4xl mb-3"
              >
                💰
              </motion.div>
              <p className="text-slate-400 text-sm mb-2">Your deposit is earning interest!</p>
              <motion.div
                className="text-3xl font-black text-emerald-400"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                +{simulatorState.earned.toFixed(6)} sBTC
              </motion.div>
              <p className="text-xs text-slate-500 mt-2">Interest compounds every block</p>
            </div>
            {simulatorTasks[1] && !collateralEnabled && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={enableCollateral}
                className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors text-sm"
                whileHover={{ scale: 1.01 }}
              >
                Enable as Collateral
              </motion.button>
            )}
          </motion.div>
        )}

        {/* Step 3: Borrow Interface */}
        {currentStep === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900/50 border border-slate-700 rounded-lg p-4"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-slate-700 rounded-lg flex items-center justify-center text-white font-semibold text-xs">3</div>
              <h4 className="text-sm font-semibold text-slate-200">Borrow Assets</h4>
            </div>

            <div className="mb-3 p-3 bg-slate-800/50 border border-slate-700 rounded-lg">
              <div className="text-xs text-slate-400 mb-1">Available to Borrow</div>
              <div className="text-lg font-semibold text-white">${(simulatorState.deposited * 60000 * 0.5).toFixed(0)}</div>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-4">
              {borrowableAssets.map((asset) => (
                <motion.button
                  key={asset.name}
                  onClick={() => setSelectedBorrowAsset(asset.name)}
                  className={`p-2.5 rounded-lg border transition-all ${
                    selectedBorrowAsset === asset.name
                      ? 'bg-slate-700 border-slate-600'
                      : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-xl mb-1">{asset.icon}</div>
                  <div className="text-xs font-medium text-white">{asset.name}</div>
                  <div className="text-xs text-slate-400">{asset.apy}</div>
                </motion.button>
              ))}
            </div>

            {selectedBorrowAsset && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-3"
              >
                <div>
                  <label className="text-xs text-slate-400 mb-2 block">Amount to Borrow</label>
                  <input
                    type="number"
                    value={borrowAmount}
                    onChange={(e) => setBorrowAmount(e.target.value)}
                    placeholder="0.0"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white font-bold text-lg focus:border-orange-500 focus:outline-none"
                  />
                  <div className="text-xs text-slate-500 mt-1">
                    Max: ${(simulatorState.deposited * 60000 * 0.5).toFixed(0)}
                  </div>
                </div>

                <motion.button
                  onClick={handleBorrow}
                  disabled={transacting}
                  className="w-full py-2.5 bg-orange-600 hover:bg-orange-700 disabled:bg-slate-700 disabled:text-slate-500 text-white font-semibold rounded-lg transition-colors text-sm"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {transacting ? 'Processing...' : 'Borrow'}
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Step 4: Monitor Health */}
        {currentStep === 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900/50 border border-slate-700 rounded-lg p-4"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-slate-700 rounded-lg flex items-center justify-center text-white font-semibold text-xs">4</div>
              <h4 className="text-sm font-semibold text-slate-200">Health Factor Status</h4>
            </div>
            <div className="text-center py-6">
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
                transition={{ duration: 2 }}
                className="text-5xl mb-3"
              >
                ✓
              </motion.div>
              <p className="text-slate-400 text-sm mb-2">Your position is healthy</p>
              <div className="text-4xl font-black text-emerald-400 mb-2">
                {simulatorState.healthFactor.toFixed(2)}
              </div>
              <p className="text-xs text-slate-500">Health Factor &gt; 1.0 = Safe</p>
            </div>
          </motion.div>
        )}

        {/* Step 5: E-Mode */}
        {currentStep === 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900/50 border border-slate-700 rounded-lg p-4"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-slate-700 rounded-lg flex items-center justify-center text-white font-semibold text-xs">5</div>
              <h4 className="text-sm font-semibold text-slate-200">Activate E-Mode</h4>
            </div>

            {!eModeActive ? (
              <div>
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 mb-4">
                  <p className="text-sm text-slate-300 mb-3">
                    E-Mode increases your borrowing power by <span className="text-violet-400 font-semibold">60%</span>
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-slate-900/50 rounded p-2">
                      <div className="text-slate-400 mb-1">Current LTV</div>
                      <div className="text-white font-semibold">50%</div>
                    </div>
                    <div className="bg-slate-900/50 rounded p-2">
                      <div className="text-slate-400 mb-1">E-Mode LTV</div>
                      <div className="text-violet-400 font-semibold">80%</div>
                    </div>
                  </div>
                </div>

                <motion.button
                  onClick={activateEMode}
                  disabled={transacting}
                  className="w-full py-2.5 bg-violet-600 hover:bg-violet-700 disabled:bg-slate-700 disabled:text-slate-500 text-white font-semibold rounded-lg transition-colors text-sm"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {transacting ? 'Activating...' : 'Activate E-Mode'}
                </motion.button>
              </div>
            ) : (
              <div className="text-center py-6">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 1 }}
                  className="text-5xl mb-3"
                >
                  ⚡
                </motion.div>
                <p className="text-purple-400 text-lg font-black mb-2">E-Mode Activated!</p>
                <div className="text-3xl font-black text-emerald-400 mb-2">
                  {simulatorState.healthFactor.toFixed(2)}
                </div>
                <p className="text-xs text-slate-500">Health factor improved!</p>
              </div>
            )}
          </motion.div>
        )}
      </div>

      {/* Wallet Approval Modal */}
      <AnimatePresence>
        {showWallet && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              className="bg-slate-900 border-2 border-cyan-500 rounded-2xl p-6 max-w-sm mx-4 shadow-2xl shadow-cyan-500/50"
            >
              <div className="text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="text-6xl mb-4"
                >
                  🔐
                </motion.div>
                <h3 className="text-xl font-black text-white mb-2">Wallet Confirmation</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Approve transaction in your wallet
                </p>
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-3">
                  <div className="text-xs text-slate-400 mb-1">Supplying</div>
                  <div className="text-lg font-black text-white">{amount} {selectedAsset}</div>
                </div>
                <motion.div
                  className="mt-4 h-2 bg-slate-800 rounded-full overflow-hidden"
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                    animate={{ width: ['0%', '100%'] }}
                    transition={{ duration: 3 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Notification */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[200]"
          >
            <div className="bg-emerald-600 text-white px-6 py-3 rounded-lg shadow-xl border border-emerald-500 flex items-center gap-3">
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
                transition={{ duration: 0.5 }}
                className="text-xl"
              >
                ✓
              </motion.div>
              <div>
                <div className="font-semibold text-sm">Transaction Successful</div>
                <div className="text-xs opacity-90">Your transaction has been confirmed</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Task Checklist */}
      <div className="space-y-2">
        {[
          `Deposit ${simulatorState.deposited || '1.0'} ${simulatorState.depositedAsset || 'sBTC'} into Zest lending pool`,
          'Watch your balance earn interest in real-time',
          `Borrow $${simulatorState.borrowed || '500'} ${simulatorState.borrowedAsset || 'USDA'} against your collateral`,
          'Monitor your health factor (must stay above 1.0)',
          'Activate E-Mode for higher capital efficiency'
        ].map((task: string, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`px-4 py-2.5 rounded-lg border transition-all ${
              simulatorTasks[i]
                ? 'bg-emerald-900/20 border-emerald-700/50'
                : 'bg-slate-800/50 border-slate-700'
            }`}
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={simulatorTasks[i] ? { scale: [0, 1.2, 1], rotate: [0, 360] } : {}}
                transition={{ duration: 0.5 }}
              >
                {simulatorTasks[i] ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Circle className="w-4 h-4 text-slate-500" />
                )}
              </motion.div>
              <span className={`font-medium text-sm ${simulatorTasks[i] ? 'text-emerald-500' : 'text-slate-300'}`}>{task}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        onClick={onComplete}
        disabled={!allCompleted}
        className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-700 disabled:text-slate-500 text-white font-semibold rounded-lg transition-colors"
        whileHover={allCompleted ? { scale: 1.01 } : {}}
        whileTap={allCompleted ? { scale: 0.99 } : {}}
      >
        {allCompleted ? 'Complete Simulator' : 'Complete all tasks to continue'}
      </motion.button>
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
