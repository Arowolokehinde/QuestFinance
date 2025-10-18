# QuestFi - Learn DeFi, Earn NFTs

<div align="center">

![QuestFi Banner](resources/banner.png)

**A gamified DeFi learning platform on Stacks blockchain with Turnkey-powered authentication**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Stacks](https://img.shields.io/badge/Stacks-Blockchain-purple)](https://www.stacks.co/)
[![Turnkey](https://img.shields.io/badge/Auth-Turnkey-blue)](https://www.turnkey.com/)

[Live Demo](#) | [📚 Full Documentation](./docs/README.md) | [Smart Contract](./contract/contracts/quest-badge-nft.clar)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Smart Contracts](#-smart-contracts)
- [Authentication](#-authentication)
- [Quest System](#-quest-system)
- [NFT Badges](#-nft-badges)
- [Deployment](#-deployment)
- [Testing](#-testing)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

**QuestFi** is a revolutionary gamified learning platform that makes DeFi education engaging and rewarding. Users complete interactive quests to learn about leading Stacks DeFi protocols, earn XP, level up, and mint soul-bound NFT badges to prove their expertise.

### Why QuestFi?

- **🎮 Gamified Learning**: Turn complex DeFi concepts into fun, interactive challenges
- **🏆 Earn While Learning**: Complete quests, gain XP, and level up your profile
- **🎨 NFT Badges**: Mint unique soul-bound NFTs that prove your DeFi mastery
- **🔐 Seamless Auth**: Multiple authentication methods via Turnkey (Email OTP, Google OAuth, Passkeys)
- **⛓️ Built on Stacks**: Leverage Bitcoin's security with smart contract functionality
- **📊 Progress Tracking**: Monitor your learning journey with detailed stats and leaderboards

### Covered Protocols

- **Zest Protocol**: Bitcoin lending markets
- **Stacking DAO**: Liquid staking for STX
- **Granite Protocol**: Bitcoin-backed stablecoins
- **Hermetica**: Bitcoin-native synthetic assets
- **Arkadiko**: Decentralized stablecoin protocol

---

## ✨ Features

### 🎯 Core Features

#### Quest System

- **5 Protocol Quests**: In-depth tutorials for major Stacks DeFi protocols
- **Interactive Steps**: Learn by doing with guided walkthroughs
- **Progress Tracking**: Auto-save progress with MongoDB persistence
- **XP Rewards**: Earn experience points for each completed step
- **Badge Minting**: Unlock NFT badges upon quest completion

#### User Profiles

- **Dashboard**: View your XP, level, badges, and global rank
- **Progressive Leveling**: XP scaling formula: `100 + (level-1) * 50` XP per level
- **Badge Gallery**: Display your earned protocol mastery badges
- **Leaderboard**: Compete with other learners globally
- **Achievement System**: Track milestones and completed quests

#### NFT Badge System

- **Soul-Bound Tokens**: Non-transferable NFTs tied to your wallet
- **SIP-009 Standard**: Full compliance with Stacks NFT standard
- **Rarity Tiers**: Common, Rare, Epic, and Legendary badges
- **On-Chain Metadata**: Permanent proof of protocol mastery
- **Transaction Explorer**: View minting transactions on Stacks Explorer

#### Authentication

- **Email OTP**: Passwordless login via email verification
- **Google OAuth**: Sign in with your Google account
- **Passkey Support**: WebAuthn biometric authentication
- **Stacks Wallet**: Connect existing Stacks wallets (Leather, Xverse)
- **Turnkey Integration**: Secure key management and signing

### 🔐 Security Features

- **Non-Custodial**: Users control their own keys via Turnkey sub-organizations
- **Soul-Bound NFTs**: Badges cannot be transferred or sold
- **Duplicate Prevention**: One badge per protocol per user
- **Secure Signing**: All transactions signed via Turnkey API
- **Session Management**: JWT-based authentication with secure storage

---

## 🏗️ Architecture

### High-Level Overview

```mermaid
graph TB
    subgraph "Frontend Layer"
        A[Next.js 14 App]
        B[React Components]
        C[Quest System]
        D[Auth UI]
    end

    subgraph "API Layer"
        E[Authentication API]
        F[User Profile API]
        G[Wallet & Signing API]
        H[Quest Management]
    end

    subgraph "External Services"
        I[Turnkey<br/>Key Management]
        J[MongoDB Atlas<br/>User Data]
        K[Stacks Blockchain<br/>NFT Contract]
    end

    subgraph "Smart Contracts"
        L[quest-badge-nft.clar<br/>SIP-009 NFT]
    end

    A --> E
    B --> F
    C --> H
    D --> E

    E --> I
    F --> J
    G --> I
    H --> J

    G --> K
    K --> L

    style A fill:#6366f1
    style E fill:#8b5cf6
    style I fill:#ec4899
    style J fill:#10b981
    style K fill:#f59e0b
    style L fill:#fbbf24
```

### Component Architecture

```mermaid
graph LR
    subgraph "User Interface"
        A1[Landing Page]
        A2[Quest Browser]
        A3[Profile Dashboard]
        A4[Leaderboard]
    end

    subgraph "Authentication"
        B1[Email OTP]
        B2[Google OAuth]
        B3[Passkey]
        B4[Wallet Connect]
    end

    subgraph "Quest Features"
        C1[Video Tutorials]
        C2[Quiz Challenges]
        C3[Practice Simulators]
        C4[Progress Tracking]
    end

    subgraph "NFT System"
        D1[Badge Minting]
        D2[On-Chain Storage]
        D3[Soul-Bound Logic]
    end

    A1 --> B1 & B2 & B3 & B4
    A2 --> C1 & C2 & C3 & C4
    A3 --> D1
    D1 --> D2 & D3

    style A1 fill:#6366f1
    style B1 fill:#8b5cf6
    style C1 fill:#10b981
    style D1 fill:#f59e0b
```

### Data Flow

1. **User Authentication**

   - User signs up/logs in via Email OTP, Google OAuth, or Passkey
   - Turnkey creates sub-organization with Stacks wallet
   - Session JWT stored in localStorage

2. **Quest Completion**

   - User completes quest steps
   - Progress saved to MongoDB with quest ID and XP
   - XP triggers level recalculation using progressive formula

3. **NFT Minting**

   - User completes all steps in a protocol quest
   - Frontend fetches Stacks wallet from Turnkey
   - Transaction signed via Turnkey API
   - Smart contract mints soul-bound NFT badge
   - Badge metadata saved to MongoDB with txId

4. **Profile Display**
   - Dashboard fetches user profile from MongoDB
   - Calculates current level XP progress
   - Displays badges with rarity and protocol info
   - Shows global rank and streak

---

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State**: React Hooks + localStorage
- **API Client**: Axios

### Backend

- **Runtime**: Node.js
- **API**: Next.js API Routes
- **Database**: MongoDB Atlas
- **Authentication**: Turnkey SDK
- **Blockchain**: Stacks.js v7

### Smart Contracts

- **Language**: Clarity
- **Standard**: SIP-009 (NFT)
- **Testing**: Vitest + Clarinet SDK
- **Network**: Stacks Testnet

### DevOps & Tools

- **Version Control**: Git
- **Package Manager**: npm
- **Testing**: Vitest
- **Contract Deployment**: Clarinet
- **Blockchain Explorer**: Hiro Explorer

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- MongoDB Atlas account
- Turnkey account with API keys
- Clarinet (for contract development)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/stxFinance.git
   cd stxFinance
   ```

2. **Install frontend dependencies**

   ```bash
   cd frontend
   npm install
   ```

3. **Install contract dependencies**

   ```bash
   cd ../contract
   npm install
   ```

4. **Configure environment variables**

   Create `frontend/.env` with:

   ```env
   # Turnkey Configuration
   NEXT_PUBLIC_TURNKEY_API_BASE_URL=https://api.turnkey.com
   NEXT_PUBLIC_TURNKEY_ORGANIZATION_ID=your_org_id
   TURNKEY_API_PRIVATE_KEY=your_private_key
   TURNKEY_API_PUBLIC_KEY=your_public_key

   # MongoDB
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/QuestFi

   # Stacks Network
   NEXT_PUBLIC_STACKS_NETWORK=testnet
   NEXT_PUBLIC_STACKS_API_URL=https://api.testnet.hiro.so

   # Smart Contract
   NEXT_PUBLIC_NFT_CONTRACT_ADDRESS=ST2F3J1PK46D6XVRBB9SQ66PY89P8G0EBDW5E05M7
   NEXT_PUBLIC_NFT_CONTRACT_NAME=quest-badge-nft

   # OAuth (Optional)
   NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_client_id
   GOOGLE_CLIENT_SECRET=your_client_secret

   # Security
   JWT_SECRET=your_jwt_secret
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

5. **Run the development server**

   ```bash
   cd frontend
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000)

6. **Run smart contract tests**
   ```bash
   cd contract
   npm test
   ```

---

## 📁 Project Structure

```
stxFinance/
├── frontend/                      # Next.js frontend application
│   ├── app/                       # App router pages
│   │   ├── api/                   # API routes
│   │   │   ├── auth/turnkey/      # Turnkey auth endpoints
│   │   │   ├── stacks/            # Stacks wallet & signing
│   │   │   └── user/profile/      # User profile management
│   │   ├── profile/               # Dashboard page
│   │   ├── quest/[protocol]/      # Dynamic quest pages
│   │   └── leaderboard/           # Global rankings
│   ├── components/                # React components
│   │   ├── auth/                  # Authentication UI
│   │   ├── nft/                   # Badge minting modal
│   │   ├── quest/                 # Quest step components
│   │   └── ui/                    # Shared UI components
│   ├── lib/                       # Utility libraries
│   │   ├── stacks/                # Stacks blockchain utilities
│   │   │   └── turnkey-signer.ts  # Transaction signing
│   │   └── wallet/                # Wallet connection
│   ├── types/                     # TypeScript types
│   └── public/                    # Static assets
│
├── contract/                      # Clarity smart contracts
│   ├── contracts/                 # Contract source files
│   │   └── quest-badge-nft.clar   # NFT badge contract
│   ├── tests/                     # Contract test suite
│   │   └── quest-badge-nft.test.ts
│   ├── deployments/               # Deployment configurations
│   └── settings/                  # Network settings
│
├── resources/                     # Project resources
│   ├── images/                    # Images and icons
│   └── docs/                      # Additional documentation
│
└── README.md                      # This file
```

### Key Files

#### Frontend

- **`app/api/user/profile/route.ts`** - User profile CRUD with XP/level calculation
- **`lib/stacks/turnkey-signer.ts`** - Turnkey transaction signing service
- **`components/nft/MintBadgeModal.tsx`** - NFT minting UI with contract interaction
- **`app/quest/[protocol]/page.tsx`** - Dynamic quest pages with progress tracking

#### Smart Contract

- **`contracts/quest-badge-nft.clar`** - SIP-009 NFT contract with soul-bound logic
- **`tests/quest-badge-nft.test.ts`** - Comprehensive test suite (31 tests)

---

## 📜 Smart Contracts

### quest-badge-nft.clar

A SIP-009 compliant NFT contract for minting soul-bound quest completion badges.

#### Key Features

- **Soul-Bound**: Badges cannot be transferred (ERR_UNAUTHORIZED)
- **Duplicate Prevention**: One badge per user per protocol
- **Protocol Management**: Admin can add/update/deactivate protocols
- **Metadata Storage**: On-chain storage of completion data
- **XP Rewards**: Each protocol has configurable XP value

#### Main Functions

```clarity
;; Mint a badge for completing a protocol
(mint-badge (protocol (string-ascii 50)))

;; Check if user completed a protocol
(has-completed-protocol (user principal) (protocol (string-ascii 50)))

;; Get badge information
(get-badge-info (token-id uint))

;; Admin: Add/update protocol
(set-protocol (protocol string) (active bool) (xp-reward uint))
```

#### Initialized Protocols

| Protocol    | XP Reward | Rarity    |
| ----------- | --------- | --------- |
| zest        | 50        | Rare      |
| stackingdao | 60        | Epic      |
| granite     | 70        | Epic      |
| hermetica   | 65        | Legendary |
| arkadiko    | 55        | Rare      |

#### Deployment

**Testnet**: `ST2F3J1PK46D6XVRBB9SQ66PY89P8G0EBDW5E05M7.quest-badge-nft`

View on [Stacks Explorer](https://explorer.hiro.so/txid/CONTRACT_DEPLOY_TX?chain=testnet)

---

## 🔐 Authentication

QuestFi uses **Turnkey** for secure, non-custodial authentication with multiple methods:

### Supported Methods

#### 1. Email OTP

- Passwordless authentication via email
- OTP sent to user's email address
- Turnkey manages email delivery and verification
- Creates sub-organization on first login

#### 2. Google OAuth

- Sign in with Google account
- OIDC token exchange with Turnkey
- Automatic sub-organization creation
- Seamless user experience

#### 3. Passkey (WebAuthn)

- Biometric authentication (Face ID, Touch ID, Windows Hello)
- Most secure authentication method
- No passwords to remember
- Requires WebAuthn-compatible device

#### 4. Stacks Wallet Connect

- Connect existing Stacks wallets (Leather, Xverse)
- Sign authentication challenge
- Verify signature on backend
- Link wallet to Turnkey account

### User Journey Flow

```mermaid
graph LR
    A[🏠 Landing] --> B{🔐 Auth Method}

    B -->|Email| C1[📧 Email OTP]
    B -->|OAuth| C2[🌐 Google OAuth]
    B -->|Passkey| C3[🔑 WebAuthn]
    B -->|Wallet| C4[👛 Stacks Wallet]

    C1 & C2 & C3 & C4 --> D[✅ Authenticated]

    D --> E[📚 Browse Quests]
    E --> F[🎯 Complete Steps]
    F --> G[⭐ Earn XP]
    G --> H[📈 Level Up]
    H --> I[🎨 Mint NFT Badge]
    I --> J[🏆 View Dashboard]

    style A fill:#6366f1
    style D fill:#10b981
    style I fill:#fbbf24
    style J fill:#8b5cf6
```

### Authentication Flow

```mermaid
sequenceDiagram
    autonumber
    participant User
    participant Frontend
    participant API as Backend API
    participant Turnkey
    participant MongoDB

    User->>Frontend: Choose auth method
    Frontend->>API: POST /api/auth/*
    API->>Turnkey: Create/verify user

    alt New User
        Turnkey->>Turnkey: Create sub-org
        Turnkey->>Turnkey: Generate Stacks wallet
    end

    Turnkey-->>API: Session JWT + credentials
    API->>MongoDB: Save/update profile
    API-->>Frontend: Return session

    Frontend->>Frontend: Store in localStorage
    Frontend->>User: Redirect to dashboard
```

### Session Management

- **Storage**: JWT token in `localStorage`
- **Key**: `turnkey_session`
- **Sub-Org ID**: Stored separately in `turnkey_suborg_id`
- **Expiration**: Configurable (default: 7 days)
- **Refresh**: Auto-refresh on API calls

---

## 🎮 Quest System

### Quest Structure

Each protocol quest consists of multiple interactive steps:

1. **Introduction**: Overview of the protocol and its purpose
2. **Core Concepts**: Learn key mechanisms and terminology
3. **Hands-On Tutorial**: Step-by-step guide to using the protocol
4. **Advanced Features**: Explore advanced functionality
5. **Best Practices**: Security and optimization tips
6. **Quiz/Challenge**: Test your knowledge
7. **Badge Unlock**: Mint your NFT badge

### XP System

#### Earning XP

- Each quest step awards XP upon completion
- XP values vary by step difficulty
- Completing all steps unlocks bonus XP
- Total XP per protocol: 50-70 XP

#### Leveling Formula

Progressive scaling ensures balanced progression:

```
XP Required = 100 + (Level - 1) * 50
```

**Example Progression:**

- Level 1 → 2: 100 XP
- Level 2 → 3: 150 XP
- Level 3 → 4: 200 XP
- Level 10 → 11: 550 XP

**Total XP for All 5 Protocols**: ~7,750 XP (Level 18-19)

#### Level Benefits

Higher levels unlock:

- Exclusive badge variants
- Leaderboard prominence
- Early access to new quests
- Community recognition

### Progress Tracking

```typescript
// Saved to MongoDB per user
{
  completedQuests: [
    "zest-step-1",
    "zest-step-2",
    // ...
  ],
  totalXP: 1550,
  currentLevelXP: 100,  // XP within current level
  nextLevelXP: 400,     // XP needed for next level
  level: 7,
  badges: [...]
}
```

---

## 🎨 NFT Badges

### Badge Properties

Each NFT badge includes:

```typescript
{
  id: "zest-1234",
  protocol: "zest",
  name: "Zest Protocol Master",
  icon: "🏦",
  description: "Completed all Zest Protocol quests",
  xpEarned: 50,
  mintedAt: "2024-10-13",
  tokenId: 1234,
  rarity: "rare",
  txId: "0x..."
}
```

### Rarity Tiers

| Tier          | Protocols             | Color  | Glow     |
| ------------- | --------------------- | ------ | -------- |
| **Legendary** | Hermetica             | Gold   | Intense  |
| **Epic**      | Stacking DAO, Granite | Purple | Strong   |
| **Rare**      | Zest, Arkadiko        | Blue   | Moderate |
| **Common**    | Future protocols      | Gray   | Subtle   |

### Soul-Bound Properties

- **Non-Transferable**: Cannot be sold or traded
- **Wallet-Bound**: Tied to original minting address
- **Permanent**: Cannot be burned or destroyed
- **Verifiable**: On-chain proof of completion
- **Unique**: One badge per protocol per user

### Quest Completion Flow

```mermaid
graph TB
    A[Start Quest] --> B[Complete Step]
    B --> C{Step Type?}

    C -->|Video| D1[📹 Watch Tutorial]
    C -->|Quiz| D2[❓ Answer Questions]
    C -->|Practice| D3[💻 Use Simulator]
    C -->|Reading| D4[📖 Read Docs]

    D1 & D2 & D3 & D4 --> E[✅ Mark Complete]

    E --> F[💾 Save to MongoDB]
    F --> G[⭐ Add XP]
    G --> H{Level Up?}

    H -->|Yes| I[🎉 Level Up Animation]
    H -->|No| J[Update Progress Bar]

    I & J --> K{All Steps Done?}

    K -->|Yes| L[🎨 Enable Mint Badge]
    K -->|No| M[Next Step]

    L --> N[Mint NFT]
    M --> B

    style A fill:#6366f1
    style E fill:#10b981
    style I fill:#fbbf24
    style L fill:#8b5cf6
```

### NFT Minting Process

```mermaid
sequenceDiagram
    autonumber
    participant User
    participant Frontend
    participant Turnkey
    participant Stacks
    participant Contract
    participant MongoDB

    User->>Frontend: Click "Mint Badge"
    Frontend->>Turnkey: Get wallet address
    Turnkey-->>Frontend: Wallet info

    Frontend->>Frontend: Build transaction
    Frontend->>Turnkey: Sign transaction
    Turnkey-->>Frontend: Signed tx

    Frontend->>Stacks: Broadcast transaction
    Stacks->>Contract: mint-badge(protocol)

    Contract->>Contract: Check no duplicate
    Contract->>Contract: Mint NFT
    Contract-->>Stacks: Success + tokenId

    Stacks-->>Frontend: Tx confirmed (txId)
    Frontend->>MongoDB: Save badge data
    MongoDB-->>Frontend: Updated profile

    Frontend->>User: Show success 🎉
```

---

## 🚀 Deployment

### Smart Contract Deployment

#### Prerequisites

- Clarinet CLI installed
- Stacks wallet with testnet STX
- Deployment mnemonic configured

#### Deploy to Testnet

```bash
cd contract

# Generate deployment plan
clarinet deployments generate --testnet --medium-cost

# Deploy contract
clarinet deployments apply --testnet
```

#### Deployment Output

```
Contract Address: ST2F3J1PK46D6XVRBB9SQ66PY89P8G0EBDW5E05M7
Contract Name: quest-badge-nft
Total Cost: ~0.055 STX
Blocks: 2
```

### Frontend Deployment

#### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd frontend
vercel --prod
```

#### Environment Variables

Set the following in Vercel dashboard:

- All variables from `.env`
- Update `NEXT_PUBLIC_API_URL` to production URL
- Ensure `MONGODB_URI` uses production database

#### Build Command

```bash
npm run build
```

#### Output Directory

```
.next
```

---

## 🧪 Testing

### Smart Contract Tests

Comprehensive test suite with 31 tests covering all functionality:

```bash
cd contract
npm test
```

**Test Coverage:**

- ✅ Contract initialization
- ✅ Badge minting (valid & invalid cases)
- ✅ Duplicate prevention
- ✅ NFT ownership verification
- ✅ Soul-bound transfer prevention
- ✅ Protocol management (admin only)
- ✅ Quest completion tracking
- ✅ Integration scenarios
- ✅ Token URI behavior

**Results:**

```
✓ tests/quest-badge-nft.test.ts (31 tests) 151ms
  Test Files  1 passed (1)
  Tests  31 passed (31)
```

### Frontend Testing

```bash
cd frontend

# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run specific test
npm test -- MintBadgeModal
```

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Code Style

- **TypeScript**: Follow ESLint configuration
- **Clarity**: Follow Stacks best practices
- **Commits**: Use conventional commit messages
- **Tests**: Write tests for new features

### Adding New Protocols

To add a new protocol quest:

1. **Smart Contract**: Add protocol to `valid-protocols` map
2. **Frontend**: Create quest content in `app/quest/[protocol]/page.tsx`
3. **Database**: Update protocol list in profile API
4. **Tests**: Add test cases for new protocol

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Stacks Foundation** - For the amazing blockchain infrastructure
- **Turnkey** - For secure key management and authentication
- **Hiro** - For developer tools and APIs
- **DeFi Protocols** - Zest, Stacking DAO, Granite, Hermetica, Arkadiko

---

## 📚 Documentation

### Quick Links
- **[📖 Complete Documentation](./docs/README.md)** - Full documentation index
- **[🔐 Authentication Flow](./docs/AUTHENTICATION_FLOW.md)** - Auth system with diagrams
- **[🎯 Quest System](./docs/QUEST_SYSTEM.md)** - Quest mechanics and progression
- **[🎨 NFT Badge System](./docs/NFT_SYSTEM.md)** - Smart contract and minting
- **[🏗️ Architecture](./docs/ARCHITECTURE.md)** - Technical architecture

### Documentation Features
- **25+ Mermaid Diagrams** - Visual flowcharts and sequences
- **50+ Code Examples** - Real implementation examples
- **3,000+ Lines** - Comprehensive coverage
- **Step-by-Step Guides** - Easy to follow tutorials

---

## 📞 Contact & Support

- **Documentation**: [View Full Docs](./docs/README.md)
- **Issues**: [GitHub Issues](https://github.com/Arowolokehinde/QuestFinance/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Arowolokehinde/QuestFinance.git/discussions)
- **Twitter**: [@QuestFi](#)
- **Discord**: [Join our community](#)

---

<div align="center">

**Built with ❤️ for the Stacks ecosystem**

[⬆ Back to Top](#questfi---learn-defi-earn-nfts)

</div>
