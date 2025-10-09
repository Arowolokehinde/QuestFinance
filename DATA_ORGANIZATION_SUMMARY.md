# QuestFi Data Organization Summary

## Overview

All protocol data has been organized into a structured folder system under `/frontend/data/`. This organization supports the modular learning path where users first learn about the Stacks ecosystem before diving into specific protocols.

## Directory Structure

```
frontend/data/
├── README.md                    # Complete documentation of data structure
│
├── introduction/                # 🎓 COMMON FOUNDATION (Required for all users)
│   ├── stacks-intro.md         # Stacks ecosystem, PoX, Clarity, Bitcoin Layer 2
│   ├── sbtc.md                 # sBTC bridge, 1:1 peg, signers, UTXO model
│   └── stacking-dao.md         # STX Stacking, Native vs Liquid, stSTX/stSTXbtc
│
├── zest/                        # 🍊 ZEST PROTOCOL (Bitcoin DeFi Lending)
│   ├── overview.md             # Main introduction, mission, key features
│   ├── intro.md                # What is Zest Protocol
│   ├── collecteral.md          # Why Bitcoin is ideal collateral
│   ├── interest-rates.md       # Dynamic interest rate model, risk management
│   ├── E-mode-Borrowing.md     # Efficiency mode for correlated assets
│   ├── traditionalBorrowing.md # Standard borrowing mechanics
│   ├── oracle.md               # Price oracle system
│   ├── pool-o-reserve.md       # Pool and reserve smart contract functions
│   ├── poolvault.md            # Pool vault mechanism
│   ├── isolation.md            # Isolation mode for risk management
│   ├── stacksmarket.md         # Stacks Market overview
│   ├── points.md               # Zest Points reward system
│   ├── BTCz.md                 # BTCz (deprecated, for reference)
│   ├── BTCz-userguide.md       # BTCz usage guide
│   ├── BTCZ_faqs.md            # BTCz frequently asked questions
│   └── zestborrowcontract.md   # Smart contract technical details
│
├── velar/                       # 🔵 VELAR (To be added)
├── alex/                        # 🟢 ALEX (To be added)
├── bitflow/                     # 🟣 BITFLOW (To be added)
└── stackswap/                   # 🟡 STACKSWAP (To be added)
```

## Learning Path Flow

### Phase 1: Introduction (Prerequisite)
**Purpose**: Build foundational knowledge of Stacks ecosystem

**Content**:
1. **Stacks Introduction**
   - What is Bitcoin Layer 2
   - How Stacks works (Proof of Transfer)
   - Why STX token exists
   - Clarity programming language
   - Bitcoin finality (Nakamoto)

2. **sBTC**
   - 1:1 Bitcoin peg mechanism
   - Signer set and UTXO model
   - How to bridge BTC ↔ sBTC
   - Emily API

3. **StackingDAO**
   - STX Stacking for BTC rewards
   - Native vs Liquid Stacking
   - stSTX (auto-compounding STX)
   - stSTXbtc (BTC yield)

**Outcome**: Users understand the Stacks ecosystem and are ready to explore DeFi protocols

### Phase 2: Protocol Deep Dive (Zest Example)
**Purpose**: Master a specific DeFi protocol

**Quest Steps**:
1. **Introduction** (Video + Reading)
   - `overview.md` + `intro.md`
   - Watch protocol intro video

2. **Core Lending Mechanics** (Learn)
   - `collecteral.md` - Why BTC is best collateral
   - `interest-rates.md` - How rates work
   - `stacksmarket.md` - The main market
   - Mini-quiz on concepts

3. **Simulator** (Interactive Practice)
   - Simulate depositing sBTC
   - Simulate borrowing against collateral
   - See interest rates in action
   - Understand health factor

4. **Advanced Features** (Learn)
   - `E-mode-Borrowing.md` - Efficiency mode
   - `isolation.md` - Isolation mode
   - `oracle.md` - Price feeds
   - `points.md` - Reward system

5. **Real Practice** (Testnet)
   - Connect wallet
   - Deposit real testnet tokens
   - Borrow against collateral
   - Verify each step

6. **Final Quiz**
   - Comprehensive test
   - Earn NFT badge
   - Unlock next protocol

## Data Integration with Quest Pages

### Current Implementation
The quest page at `/app/quest/[protocol]/page.tsx` should be updated to:

1. **Read Introduction Content** (for new users)
   ```typescript
   const introContent = {
     stacks: readMarkdown('data/introduction/stacks-intro.md'),
     sbtc: readMarkdown('data/introduction/sbtc.md'),
     stacking: readMarkdown('data/introduction/stacking-dao.md')
   }
   ```

2. **Read Protocol-Specific Content**
   ```typescript
   const zestContent = {
     overview: readMarkdown('data/zest/overview.md'),
     collateral: readMarkdown('data/zest/collecteral.md'),
     interestRates: readMarkdown('data/zest/interest-rates.md'),
     eMode: readMarkdown('data/zest/E-mode-Borrowing.md'),
     // ... etc
   }
   ```

3. **Parse Markdown for Display**
   - Extract headings for sections
   - Extract quiz questions (marked with ✅)
   - Extract video links
   - Format for modal display

4. **Track Progress**
   - Mark sections as completed
   - Unlock next steps
   - Award points/XP

## Content Sources

### From QuestFi Resources PDF
- `introduction/stacks-intro.md` - Pages 1-4
- `introduction/sbtc.md` - Pages 4-5
- `introduction/stacking-dao.md` - Pages 6-10
- `zest/overview.md` - Pages 11-14

### From Zest Documentation (resources/zest/)
All 15 markdown files copied directly:
- Technical documentation
- User guides
- Feature explanations
- FAQs

## Next Steps

### For Each New Protocol:

1. **Create Protocol Directory**
   ```bash
   mkdir frontend/data/{protocol-name}
   ```

2. **Add Core Files**
   - `overview.md` - Main introduction
   - Feature-specific guides
   - User guides
   - Technical docs
   - FAQs

3. **Structure Content for Quest**
   - Step 1: Overview + Video
   - Step 2: Core Concepts
   - Step 3: Simulator
   - Step 4: Advanced Features
   - Step 5: Practice
   - Step 6: Quiz

4. **Add Quiz Questions**
   At the end of each markdown file:
   ```markdown
   ## Quiz Questions
   ### 1. Question text?
   A) Wrong
   B) Correct ✅
   C) Wrong
   D) Wrong
   **Answer: B**
   ```

## Benefits of This Structure

✅ **Scalable**: Easy to add new protocols
✅ **Modular**: Each protocol is independent
✅ **Reusable**: Introduction content shared across all protocols
✅ **Maintainable**: Easy to update individual files
✅ **Educational**: Progressive learning path
✅ **Content-Driven**: Quest pages read from markdown
✅ **Version Control**: All content in git

## File Count

- **Introduction**: 3 files
- **Zest Protocol**: 16 files (including overview)
- **Other Protocols**: 4 empty directories ready for content
- **Documentation**: 2 files (README + this summary)

**Total**: 25 files organized for maximum educational impact

## Resources Location

Original resources remain at:
- `/resources/QuestFi resources.pdf` - Main educational content
- `/resources/zest/` - Original Zest documentation (backup)
- `/resources/turnkey/` - Wallet integration docs

New organized structure at:
- `/frontend/data/` - Production-ready protocol data
