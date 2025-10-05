'use client'

import { useEffect, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { Button } from '@/components/ui/button'

// Floating Protocol Card Component
function ProtocolCard({ position, color, name, icon, index }: any) {
  const meshRef = useRef<THREE.Group>(null)
  const { camera } = useThree()

  useFrame((state) => {
    if (!meshRef.current) return
    
    const time = state.clock.getElapsedTime()
    
    // Gentle rotation
    meshRef.current.rotation.y += 0.005
    
    // Respond to mouse
    const mouseX = (state.mouse.x * 2)
    const mouseY = (state.mouse.y * 2)
    meshRef.current.position.x = position[0] + mouseX * 0.5
    meshRef.current.position.z = position[2] + mouseY * 0.5
  })

  return (
    <Float
      speed={2}
      rotationIntensity={0.3}
      floatIntensity={0.5}
      floatingRange={[-0.5, 0.5]}
    >
      <group ref={meshRef} position={position} rotation={[Math.PI / 12, Math.PI / 6, 0]}>
        {/* Card body */}
        <mesh>
          <boxGeometry args={[3, 4, 0.2]} />
          <meshPhysicalMaterial
            color={color}
            metalness={0.3}
            roughness={0.4}
            transparent
            opacity={0.8}
            clearcoat={1}
            clearcoatRoughness={0.3}
          />
        </mesh>
        
        {/* Glowing edges */}
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(3, 4, 0.2)]} />
          <lineBasicMaterial color={color} />
        </lineSegments>
      </group>
    </Float>
  )
}

// Bitcoin Symbol Component
function BitcoinSymbol({ position, index }: any) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    
    const time = state.clock.getElapsedTime()
    
    // Rotation
    meshRef.current.rotation.y += 0.01
    meshRef.current.rotation.x += 0.005
    
    // Orbit
    const angle = time * 0.001 * (index % 2 === 0 ? 1 : -1)
    const radius = 15
    meshRef.current.position.x = Math.cos(angle + index) * radius
    meshRef.current.position.z = Math.sin(angle + index) * radius
  })

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[0.5, 0.15, 16, 32]} />
      <meshStandardMaterial
        color="#fbbf24"
        emissive="#f97316"
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  )
}

// Particles Component
function Particles() {
  const particlesRef = useRef<THREE.Points>(null)

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0005
    }
  })

  const particleCount = 1500
  const positions = new Float32Array(particleCount * 3)
  const colors = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 100
    positions[i * 3 + 1] = (Math.random() - 0.5) * 100
    positions[i * 3 + 2] = (Math.random() - 0.5) * 50

    const colorChoice = Math.random()
    if (colorChoice < 0.33) {
      colors[i * 3] = 0.98
      colors[i * 3 + 1] = 0.45
      colors[i * 3 + 2] = 0.09
    } else if (colorChoice < 0.66) {
      colors[i * 3] = 0.02
      colors[i * 3 + 1] = 0.71
      colors[i * 3 + 2] = 0.83
    } else {
      colors[i * 3] = 0.06
      colors[i * 3 + 1] = 0.73
      colors[i * 3 + 2] = 0.51
    }
  }

  const positionAttribute = new THREE.BufferAttribute(positions, 3)
  const colorAttribute = new THREE.BufferAttribute(colors, 3)

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        transparent
        opacity={0.7}
        vertexColors
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Camera Controller
function CameraController() {
  const { camera, mouse } = useThree()

  useFrame(() => {
    camera.position.x += (mouse.x * 3 - camera.position.x) * 0.02
    camera.position.y += (mouse.y * 2 + 5 - camera.position.y) * 0.02
    camera.lookAt(0, 0, 0)
  })

  return null
}

// Main 3D Scene
function Scene3D() {
  const protocols = [
    { name: 'Zest', color: '#f97316', icon: '🏦', pos: [-8, 2, -5] },
    { name: 'StackingDAO', color: '#06b6d4', icon: '💧', pos: [8, -1, -3] },
    { name: 'Granite', color: '#8b5cf6', icon: '⛰️', pos: [-6, -3, -8] },
    { name: 'Hermetica', color: '#fbbf24', icon: '💎', pos: [6, 3, -6] },
    { name: 'Arkadiko', color: '#10b981', icon: '🏛️', pos: [0, 0, -10] }
  ]

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} color="#f97316" />
      <directionalLight position={[-10, 5, -5]} intensity={1} color="#764ba2" />
      <directionalLight position={[0, -5, -10]} intensity={0.8} color="#06b6d4" />
      
      <pointLight position={[-8, 3, 5]} intensity={2} distance={30} color="#f97316" />
      <pointLight position={[8, 3, 5]} intensity={2} distance={30} color="#10b981" />

      {protocols.map((proto, i) => (
        <ProtocolCard
          key={i}
          position={proto.pos}
          color={proto.color}
          name={proto.name}
          icon={proto.icon}
          index={i}
        />
      ))}

      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2
        const radius = 15
        return (
          <BitcoinSymbol
            key={i}
            position={[
              Math.cos(angle) * radius,
              (Math.random() - 0.5) * 10,
              Math.sin(angle) * radius
            ]}
            index={i}
          />
        )
      })}

      <Particles />
      <CameraController />
      <fog attach="fog" args={['#0a0a1a', 10, 50]} />
    </>
  )
}

// Main Hero Component
export default function HeroPage() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* 3D Canvas Background */}
      <div className="fixed inset-0 z-0">
        <Canvas
          camera={{ position: [0, 5, 25], fov: 60 }}
          gl={{ alpha: true, antialias: true }}
        >
          <Scene3D />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-5 pt-20">
        {/* Badge */}
        <div className="inline-block px-5 py-2 mb-8 text-sm font-semibold border-2 border-orange-500 rounded-full bg-orange-500/20 animate-pulse">
          🎮 GAMIFIED DEFI LEARNING ON STACKS
        </div>

        {/* Title */}
        <h1 className="mb-6 text-5xl font-black text-center md:text-7xl lg:text-8xl">
          <span className="bg-gradient-to-r from-orange-500 via-yellow-400 to-emerald-500 bg-clip-text text-transparent">
            QuestFi
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mb-10 text-lg text-center text-slate-400 md:text-xl lg:text-2xl">
          Master Bitcoin DeFi through epic quests, earn XP, unlock NFT badges, and compete on leaderboards. Learn by doing in a safe, gamified sandbox.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-5 mb-16">
          <Button className="px-10 py-6 text-lg font-bold text-white bg-orange-500 rounded-full shadow-2xl hover:bg-orange-600 shadow-orange-500/40">
            Start Your Quest
          </Button>
          <Button 
            variant="outline" 
            className="px-10 py-6 text-lg font-bold text-white border-2 border-orange-500 rounded-full bg-slate-900/80 hover:bg-orange-500/20"
          >
            Explore Protocols
          </Button>
        </div>
      </div>
    </div>
  )
}