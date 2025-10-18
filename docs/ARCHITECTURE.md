# QuestFi Architecture Documentation

## 📁 Project Structure

```
stxFinance/
├── frontend/                           # Next.js Application
│   ├── app/                            # App Router (Next.js 14)
│   │   ├── api/                        # Backend API Routes
│   │   │   ├── auth/
│   │   │   │   └── turnkey/            # Turnkey authentication
│   │   │   │       └── route.ts        # Email/OAuth auth endpoints
│   │   │   ├── stacks/
│   │   │   │   ├── sign/               # Transaction signing
│   │   │   │   │   └── route.ts        # Sign transactions via Turnkey
│   │   │   │   └── wallet/             # Wallet management
│   │   │   │       └── route.ts        # Get user's Stacks wallet info
│   │   │   └── user/
│   │   │       └── profile/            # User profile management
│   │   │           └── route.ts        # CRUD + XP/level calculations
│   │   ├── docs/                       # Documentation page
│   │   │   └── page.tsx                # Main docs page
│   │   ├── leaderboard/                # Global rankings
│   │   │   └── page.tsx
│   │   ├── profile/                    # User dashboard
│   │   │   └── page.tsx                # Stats, badges, progress
│   │   ├── quest/
│   │   │   └── [protocol]/             # Dynamic quest pages
│   │   │       └── page.tsx            # Protocol-specific quests
│   │   ├── layout.tsx                  # Root layout
│   │   └── page.tsx                    # Landing page
│   │
│   ├── components/                     # React Components
│   │   ├── auth/                       # Authentication UI
│   │   │   ├── TurnkeyAuth.tsx         # Main auth component
│   │   │   ├── OAuthCallbackHandler.tsx # Google OAuth handler
│   │   │   └── ...
│   │   ├── docs/                       # Documentation components
│   │   │   ├── data/
│   │   │   │   └── constants.ts        # Docs data & config
│   │   │   ├── sections/               # Doc section components
│   │   │   │   ├── OverviewSection.tsx
│   │   │   │   ├── FeaturesSection.tsx
│   │   │   │   ├── QuickStartSection.tsx
│   │   │   │   ├── AuthenticationSection.tsx
│   │   │   │   └── SmartContractSection.tsx
│   │   │   └── ui/                     # Reusable doc UI components
│   │   │       ├── DocsHeader.tsx
│   │   │       ├── Sidebar.tsx
│   │   │       ├── MobileSidebar.tsx
│   │   │       ├── CodeBlock.tsx
│   │   │       ├── FeatureCard.tsx
│   │   │       └── TechStackBadge.tsx
│   │   ├── nft/                        # NFT Components
│   │   │   └── MintBadgeModal.tsx      # Badge minting UI
│   │   ├── quest/                      # Quest components
│   │   └── ui/                         # Shared UI components
│   │
│   ├── lib/                            # Utility Libraries
│   │   ├── stacks/                     # Stacks blockchain utilities
│   │   │   └── turnkey-signer.ts       # Transaction signing service
│   │   └── wallet/                     # Wallet services
│   │       └── wallet-service.ts       # Stacks wallet connection
│   │
│   ├── types/                          # TypeScript type definitions
│   │   └── wallet.ts
│   │
│   ├── public/                         # Static assets
│   │   └── ...
│   │
│   └── package.json                    # Dependencies
│
├── contract/                           # Clarity Smart Contracts
│   ├── contracts/                      # Contract source files
│   │   └── quest-badge-nft.clar        # SIP-009 NFT contract
│   │
│   ├── tests/                          # Contract tests
│   │   └── quest-badge-nft.test.ts     # Vitest test suite (31 tests)
│   │
│   ├── deployments/                    # Deployment configs
│   │   └── default.testnet-plan.yaml
│   │
│   ├── settings/                       # Network settings
│   │   ├── Devnet.toml
│   │   └── Testnet.toml
│   │
│   └── package.json
│
├── resources/                          # Project resources
│   └── ...
│
├── README.md                           # Main documentation
├── ARCHITECTURE.md                     # This file
└── .gitignore
```

## 🏗️ Component Architecture

### Documentation Components Hierarchy

```
DocsPage (page.tsx)
├── DocsHeader
│   ├── Logo & Title
│   ├── Launch App Button
│   └── Mobile Menu Toggle
│
├── Sidebar (Desktop)
│   └── Section Navigation Buttons
│
├── MobileSidebar (Mobile)
│   └── Section Navigation Buttons
│
└── Main Content (Dynamic Sections)
    ├── OverviewSection
    │   ├── FeatureCard × 4
    │   └── TechStackBadge × 8
    │
    ├── FeaturesSection
    │   ├── Quest System Card
    │   │   └── Protocol Cards × 5
    │   ├── NFT Badges Card
    │   └── XP & Leveling Card
    │
    ├── QuickStartSection
    │   ├── Prerequisites List
    │   └── Installation Steps
    │       └── CodeBlock × 4
    │
    ├── AuthenticationSection
    │   ├── Auth Method Cards × 4
    │   └── Session Management Card
    │
    └── SmartContractSection
        ├── Contract Info Card
        ├── Function Examples × 3
        │   └── CodeBlock each
        └── Testing Section
            └── CodeBlock
```

## 🔄 Data Flow

### 1. Authentication Flow
```
User → TurnkeyAuth Component
    ↓
    Email/OAuth/Passkey/Wallet
    ↓
    POST /api/auth/turnkey
    ↓
    Turnkey API (Create Sub-Org)
    ↓
    GET /api/stacks/wallet (Create Stacks Wallet)
    ↓
    Session JWT → localStorage
    ↓
    Redirect to Dashboard
```

### 2. Quest Completion Flow
```
User Completes Step → Quest Page Component
    ↓
    POST /api/user/profile
    {
      action: 'complete_quest',
      data: { questId, xpReward }
    }
    ↓
    MongoDB Update
    - Add quest to completedQuests[]
    - Add XP to totalXP
    - Recalculate level (progressive formula)
    - Calculate currentLevelXP
    ↓
    Return updated profile
    ↓
    Update UI with new XP & level
```

### 3. NFT Minting Flow
```
User Clicks "Mint Badge" → MintBadgeModal
    ↓
    GET /api/stacks/wallet (Fetch user's wallet)
    ↓
    getAccountNonce(address)
    ↓
    signAndBroadcastContractCall()
    {
      contractAddress: ST2F3J1PK46D6XVRBB9SQ66PY89P8G0EBDW5E05M7
      contractName: quest-badge-nft
      functionName: mint-badge
      functionArgs: [stringAsciiCV(protocol)]
    }
    ↓
    POST /api/stacks/sign (Sign with Turnkey)
    ↓
    broadcastTransaction() → Stacks Blockchain
    ↓
    Smart Contract: mint-badge()
    - Check no duplicate
    - Mint NFT
    - Store metadata
    ↓
    Transaction Confirmed (txId)
    ↓
    POST /api/user/profile
    {
      action: 'mint_badge',
      data: { badge: {..., txId} }
    }
    ↓
    MongoDB: Save badge with txId
    ↓
    Display success + explorer link
```

## 🗄️ Database Schema (MongoDB)

### User Profile Collection
```typescript
{
  _id: ObjectId,
  suborgId: string,              // Turnkey sub-organization ID
  email: string,
  username?: string,

  // Stats
  totalXP: number,               // Total XP earned
  currentLevelXP: number,        // XP progress within current level
  level: number,                 // Current level
  nextLevelXP: number,           // XP needed for next level
  rank: number,                  // Global ranking
  streak: number,                // Daily streak

  // Progress
  completedQuests: string[],     // ["zest-step-1", "zest-step-2", ...]
  badges: [{
    id: string,                  // "zest-1234"
    protocol: string,            // "zest"
    name: string,                // "Zest Protocol Master"
    icon: string,                // "🏦"
    description: string,
    xpEarned: number,            // 50
    mintedAt: string,            // "2024-10-13"
    tokenId: number,             // 1234
    rarity: string,              // "rare"
    txId?: string                // "0x..."
  }],
  badgesEarned: number,          // Count of badges

  // Timestamps
  createdAt: Date,
  updatedAt: Date
}
```

## 🔐 Environment Variables

### Required Variables
```env
# Turnkey
NEXT_PUBLIC_TURNKEY_API_BASE_URL=https://api.turnkey.com
NEXT_PUBLIC_TURNKEY_ORGANIZATION_ID=your_org_id
TURNKEY_API_PRIVATE_KEY=your_private_key
TURNKEY_API_PUBLIC_KEY=your_public_key

# MongoDB
MONGODB_URI=mongodb+srv://...

# Stacks
NEXT_PUBLIC_STACKS_NETWORK=testnet
NEXT_PUBLIC_STACKS_API_URL=https://api.testnet.hiro.so
NEXT_PUBLIC_NFT_CONTRACT_ADDRESS=ST2F3J1PK46D6XVRBB9SQ66PY89P8G0EBDW5E05M7
NEXT_PUBLIC_NFT_CONTRACT_NAME=quest-badge-nft

# OAuth (Optional)
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_secret

# Security
JWT_SECRET=your_jwt_secret
NEXTAUTH_SECRET=your_nextauth_secret
```

## 📊 Key Algorithms

### Level Calculation (Progressive Scaling)
```typescript
function calculateLevel(totalXP: number): { level: number, currentLevelXP: number, nextLevelXP: number } {
  let level = 1
  let accumulatedXP = 0

  while (true) {
    const xpForCurrentLevel = 100 + (level - 1) * 50

    if (accumulatedXP + xpForCurrentLevel <= totalXP) {
      accumulatedXP += xpForCurrentLevel
      level++
    } else {
      return {
        level,
        currentLevelXP: totalXP - accumulatedXP,
        nextLevelXP: xpForCurrentLevel
      }
    }
  }
}
```

### XP Progression Table
| Level | XP Required | Cumulative XP |
|-------|-------------|---------------|
| 1→2   | 100         | 100           |
| 2→3   | 150         | 250           |
| 3→4   | 200         | 450           |
| 4→5   | 250         | 700           |
| 5→6   | 300         | 1000          |
| 10→11 | 550         | 3250          |
| 18→19 | 950         | 8650          |

## 🚀 Deployment Architecture

### Frontend (Vercel)
- **Framework**: Next.js 14 with App Router
- **Hosting**: Vercel Edge Network
- **Build**: Automatic on git push
- **Environment**: Production variables set in Vercel dashboard

### Smart Contract (Stacks Testnet)
- **Network**: Stacks Testnet
- **Deployment Tool**: Clarinet
- **Address**: ST2F3J1PK46D6XVRBB9SQ66PY89P8G0EBDW5E05M7
- **Contract**: quest-badge-nft
- **Cost**: ~0.055 STX

### Database (MongoDB Atlas)
- **Hosting**: MongoDB Atlas (Cloud)
- **Region**: Auto-selected for optimal latency
- **Connection**: Encrypted connection string
- **Backup**: Automatic daily backups

## 🔧 Development Tools

- **Frontend**: VS Code, ESLint, Prettier
- **Contracts**: Clarinet, Vitest
- **Git**: GitHub for version control
- **Package Manager**: npm
- **Testing**: Vitest (contracts), Jest (frontend)

## 📈 Performance Considerations

1. **Code Splitting**: Next.js automatic code splitting per route
2. **Image Optimization**: Next.js Image component for optimized loading
3. **API Routes**: Server-side API routes for secure operations
4. **Caching**: LocalStorage for session persistence
5. **Database Indexing**: MongoDB indexes on `suborgId` and `email`

## 🔒 Security Measures

1. **Non-Custodial**: Users control their own keys via Turnkey
2. **Encrypted Communications**: HTTPS/TLS for all API calls
3. **JWT Authentication**: Secure session tokens
4. **Soul-Bound NFTs**: Cannot be transferred or sold
5. **Rate Limiting**: API rate limits on sensitive endpoints
6. **Input Validation**: Server-side validation for all inputs

---

This architecture is designed for:
- ✅ Scalability (horizontal scaling via cloud services)
- ✅ Security (non-custodial, encrypted, validated)
- ✅ Maintainability (modular components, clear separation of concerns)
- ✅ Performance (code splitting, caching, optimized queries)
- ✅ Developer Experience (TypeScript, clear structure, documented)
