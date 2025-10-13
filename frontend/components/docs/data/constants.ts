import {
  BookOpen,
  Code,
  Rocket,
  Shield,
  Zap,
  Trophy,
  Lock,
  GitBranch,
  Terminal,
  FileCode,
} from 'lucide-react'

export const DOCS_SECTIONS = [
  { id: 'overview', title: 'Overview', icon: BookOpen },
  { id: 'features', title: 'Features', icon: Zap },
  { id: 'architecture', title: 'Architecture', icon: GitBranch },
  { id: 'setup', title: 'Quick Start', icon: Rocket },
  { id: 'authentication', title: 'Authentication', icon: Lock },
  { id: 'quests', title: 'Quest System', icon: Trophy },
  { id: 'nft', title: 'NFT Badges', icon: Shield },
  { id: 'smart-contract', title: 'Smart Contracts', icon: FileCode },
  { id: 'api', title: 'API Reference', icon: Code },
  { id: 'deployment', title: 'Deployment', icon: Terminal },
] as const

export const TECH_STACK = [
  { name: 'Next.js 14', category: 'Frontend', color: 'from-slate-600 to-slate-800' },
  { name: 'TypeScript', category: 'Language', color: 'from-blue-600 to-blue-800' },
  { name: 'Tailwind CSS', category: 'Styling', color: 'from-cyan-600 to-cyan-800' },
  { name: 'Framer Motion', category: 'Animation', color: 'from-purple-600 to-purple-800' },
  { name: 'MongoDB', category: 'Database', color: 'from-green-600 to-green-800' },
  { name: 'Turnkey', category: 'Auth', color: 'from-indigo-600 to-indigo-800' },
  { name: 'Stacks.js', category: 'Blockchain', color: 'from-orange-600 to-orange-800' },
  { name: 'Clarity', category: 'Smart Contracts', color: 'from-yellow-600 to-yellow-800' },
]

export const FEATURES = [
  {
    icon: Trophy,
    title: 'Gamified Learning',
    description: 'Complete interactive quests to learn about DeFi protocols',
    stats: '5 Protocols',
  },
  {
    icon: Shield,
    title: 'Soul-Bound NFTs',
    description: 'Earn non-transferable badges that prove your expertise',
    stats: 'SIP-009',
  },
  {
    icon: Lock,
    title: 'Turnkey Auth',
    description: 'Multiple authentication methods with secure key management',
    stats: '4 Methods',
  },
  {
    icon: Zap,
    title: 'XP & Levels',
    description: 'Progressive leveling system with XP rewards',
    stats: 'Level 1-19',
  },
]

export const PROTOCOLS = [
  { name: 'Zest', xp: 50, rarity: 'Rare', icon: '🏦', color: 'blue' },
  { name: 'Stacking DAO', xp: 60, rarity: 'Epic', icon: '💎', color: 'purple' },
  { name: 'Granite', xp: 70, rarity: 'Epic', icon: '🪨', color: 'purple' },
  { name: 'Hermetica', xp: 65, rarity: 'Legendary', icon: '⚗️', color: 'yellow' },
  { name: 'Arkadiko', xp: 55, rarity: 'Rare', icon: '🏛️', color: 'blue' },
] as const

export const AUTH_METHODS = [
  {
    title: 'Email OTP',
    description: 'Passwordless authentication via email verification code',
    features: [
      'No passwords required',
      '6-digit OTP sent to email',
      'Creates Turnkey sub-org',
    ],
  },
  {
    title: 'Google OAuth',
    description: 'Sign in with your existing Google account',
    features: [
      'One-click sign in',
      'OIDC token exchange',
      'Automatic wallet creation',
    ],
  },
  {
    title: 'Passkey (WebAuthn)',
    description: 'Biometric authentication with Face ID or Touch ID',
    features: [
      'Most secure method',
      'No passwords or codes',
      'WebAuthn standard',
    ],
  },
  {
    title: 'Stacks Wallet',
    description: 'Connect existing wallets like Leather or Xverse',
    features: [
      'Use existing wallet',
      'Sign challenge message',
      'Link to Turnkey account',
    ],
  },
]

export const CODE_EXAMPLES = {
  clone: `git clone https://github.com/yourusername/stxFinance.git
cd stxFinance`,

  install: `cd frontend
npm install`,

  dev: 'npm run dev',

  test: `cd contract
npm test`,

  env: `NEXT_PUBLIC_TURNKEY_ORGANIZATION_ID=your_org_id
TURNKEY_API_PRIVATE_KEY=your_private_key
MONGODB_URI=your_mongodb_uri
NEXT_PUBLIC_STACKS_NETWORK=testnet`,

  mintBadge: `(mint-badge (protocol (string-ascii 50)))`,

  hasCompleted: `(has-completed-protocol
  (user principal)
  (protocol (string-ascii 50)))`,

  getBadgeInfo: `(get-badge-info (token-id uint))`,
}

export const CONTRACT_INFO = {
  standard: 'SIP-009 NFT',
  network: 'Stacks Testnet',
  address: 'ST2F3J1PK46D6XVRBB9SQ66PY89P8G0EBDW5E05M7',
  name: 'quest-badge-nft',
  explorerUrl: 'https://explorer.hiro.so/txid/CONTRACT_TX?chain=testnet',
}
