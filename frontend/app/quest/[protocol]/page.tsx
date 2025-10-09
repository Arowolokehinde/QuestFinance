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
    icon: '🏦',
    color: 'emerald',
    totalXP: 1200,
    steps: [
      {
        id: 1,
        title: 'Introduction',
        type: 'video',
        duration: '5 min',
        xp: 100,
        icon: PlayCircle,
        color: 'purple',
        content: {
          description: 'Discover how Bitcoin DeFi works on Stacks',
          videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          keyPoints: [
            'Zest enables Bitcoin lending and borrowing',
            'Built on Stacks for Bitcoin security',
            'Earn 8-12% APY on Bitcoin deposits',
            'Borrow stablecoins against BTC collateral'
          ]
        }
      },
      {
        id: 2,
        title: 'Lending Mechanics',
        type: 'learn',
        duration: '8 min',
        xp: 150,
        icon: BookOpen,
        color: 'cyan',
        content: {
          description: 'Master the art of Bitcoin lending',
          sections: [
            {
              title: 'Deposit sBTC',
              text: 'Convert BTC to sBTC (wrapped Bitcoin on Stacks) and deposit into Zest lending pools to start earning interest immediately.'
            },
            {
              title: 'Earn Yield',
              text: 'Borrowers pay interest on loans. This interest flows directly to you, accruing in real-time to your wallet at 8-12% APY.'
            },
            {
              title: 'Withdraw Anytime',
              text: 'No lock-up periods. Access your sBTC plus earned interest whenever you want with instant withdrawals.'
            }
          ],
          quiz: {
            question: 'What is the typical APY range for lending on Zest?',
            options: ['2-4%', '8-12%', '20-30%', '50%+'],
            correct: 1
          }
        }
      },
      {
        id: 3,
        title: 'Borrowing Mechanics',
        type: 'learn',
        duration: '8 min',
        xp: 150,
        icon: TrendingUp,
        color: 'emerald',
        content: {
          description: 'Unlock liquidity while holding Bitcoin',
          sections: [
            {
              title: 'Collateralize',
              text: 'Deposit sBTC as collateral. Over-collateralization (depositing more than you borrow) protects the protocol and lenders.'
            },
            {
              title: 'Borrow Stablecoins',
              text: 'Receive USDA stablecoins instantly while maintaining your Bitcoin exposure. Use them for anything you need.'
            },
            {
              title: 'Monitor Health',
              text: 'Your health factor must stay above 1.0. Keep it above 1.5 for safety. If collateral value drops too low, liquidation may occur.'
            }
          ],
          quiz: {
            question: 'Why is over-collateralization required?',
            options: [
              'To make more profit',
              'To protect lenders from defaults',
              'It is not required',
              'For regulatory compliance'
            ],
            correct: 1
          }
        }
      },
      {
        id: 4,
        title: 'Practice Simulator',
        type: 'simulator',
        duration: '15 min',
        xp: 250,
        icon: Target,
        color: 'yellow',
        content: {
          description: 'Practice with test tokens in a safe environment',
          tasks: [
            'Deposit 1.0 sBTC into lending pool',
            'Monitor your earned interest',
            'Borrow 500 USDA against collateral',
            'Check your health factor',
            'Repay loan and withdraw'
          ]
        }
      },
      {
        id: 5,
        title: 'Real Practice',
        type: 'practice',
        duration: '20 min',
        xp: 300,
        icon: Wallet,
        color: 'orange',
        content: {
          description: 'Connect wallet and execute real transactions',
          steps: [
            {
              action: 'Connect Leather Wallet',
              instruction: 'Click "Connect Wallet" and approve the connection.',
              verification: 'wallet'
            },
            {
              action: 'Get Test sBTC',
              instruction: 'Use faucet to get 0.01 sBTC for testing.',
              verification: 'balance'
            },
            {
              action: 'Deposit to Pool',
              instruction: 'Deposit 0.005 sBTC into Zest lending pool.',
              verification: 'transaction'
            },
            {
              action: 'View Position',
              instruction: 'Check your lending position in dashboard.',
              verification: 'position'
            },
            {
              action: 'Withdraw',
              instruction: 'Withdraw your deposit plus earned interest.',
              verification: 'transaction'
            }
          ]
        }
      },
      {
        id: 6,
        title: 'Final Challenge',
        type: 'quiz',
        duration: '10 min',
        xp: 250,
        icon: Trophy,
        color: 'pink',
        content: {
          description: 'Prove your mastery and earn NFT badge',
          questions: [
            {
              question: 'What is sBTC?',
              options: [
                'A Bitcoin staking token',
                'Wrapped Bitcoin on Stacks',
                'A Stacks token',
                'A lending protocol'
              ],
              correct: 1
            },
            {
              question: 'What happens if health factor drops below 1.0?',
              options: [
                'Nothing',
                'You earn more interest',
                'Your collateral may be liquidated',
                'Loan is automatically repaid'
              ],
              correct: 2
            },
            {
              question: 'Where does lending interest come from?',
              options: [
                'Protocol treasury',
                'Staking rewards',
                'Borrowers paying interest',
                'Transaction fees'
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
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
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
    </motion.div>
  )
}

function LearnContent({ step, quizAnswers, setQuizAnswers, onComplete }: any) {
  return (
    <div className="space-y-4">
      {step.content.sections.map((section: any, index: number) => (
        <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
          <h3 className="text-base font-black text-white mb-2">{section.title}</h3>
          <p className="text-slate-300 text-sm leading-relaxed">{section.text}</p>
        </div>
      ))}

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
