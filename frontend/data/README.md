# QuestFi Protocol Data Structure

This directory contains all the educational content and protocol-specific data used in the QuestFi learning platform.

## Directory Structure

```
data/
├── introduction/          # Common introduction content for all users
│   ├── stacks-intro.md   # Introduction to Stacks and Bitcoin DeFi
│   ├── sbtc.md           # sBTC overview and concepts
│   └── stacking-dao.md   # StackingDAO and STX stacking
│
├── zest/                  # Zest Protocol specific content
│   ├── overview.md        # Zest Protocol introduction and overview
│   ├── intro.md           # What is Zest Protocol
│   ├── collecteral.md     # Bitcoin as Prime Collateral
│   ├── interest-rates.md  # Interest Rates Mechanism and Risk Management
│   ├── E-mode-Borrowing.md # E-Mode Borrowing
│   ├── traditionalBorrowing.md # Traditional Borrowing
│   ├── oracle.md          # Oracle mechanism
│   ├── pool-o-reserve.md  # Pool and Reserve contracts
│   ├── poolvault.md       # Pool Vault
│   ├── isolation.md       # Isolation Mode
│   ├── stacksmarket.md    # Stacks Market
│   ├── BTCz.md            # BTCz (deprecated)
│   ├── BTCz-userguide.md  # BTCz User Guide
│   ├── BTCZ_faqs.md       # BTCz FAQs
│   └── zestborrowcontract.md # Zest Borrow Contract
│
├── velar/                 # Velar Protocol (to be added)
├── alex/                  # ALEX Protocol (to be added)
├── bitflow/               # Bitflow Protocol (to be added)
└── stackswap/             # StackSwap Protocol (to be added)
```

## Content Organization

### Introduction Section

All users should first complete the **Introduction** section before venturing into specific protocols. This section covers:

1. **Stacks Introduction** (`stacks-intro.md`)
   - Understanding Bitcoin and its limitations
   - What is Stacks and why it exists
   - How Stacks works (PoX, Bitcoin finality)
   - STX token purpose
   - Bitcoin + Stacks symbiotic relationship
   - Clarity programming language

2. **sBTC** (`sbtc.md`)
   - What is sBTC and its purpose
   - Key concepts (sBTC, UTXO, Signers, Emily API)
   - How sBTC bridges Bitcoin to DeFi

3. **StackingDAO** (`stacking-dao.md`)
   - STX Stacking mechanism
   - Native vs Liquid Stacking
   - stSTX vs stSTXbtc
   - How to participate

### Protocol-Specific Sections

Each protocol has its own directory containing:

- **overview.md**: High-level introduction to the protocol
- **Specific feature guides**: Detailed documentation for each feature
- **Technical documentation**: Smart contract details, mechanisms
- **User guides**: Step-by-step tutorials
- **FAQs**: Common questions and answers

## Data Usage in Quest Pages

### Quest Flow

1. **Introduction Quest** (Required for all users)
   - Step 1: Learn about Stacks ecosystem
   - Step 2: Understand sBTC
   - Step 3: Learn about Stacking
   - Quiz: Test knowledge of fundamentals

2. **Protocol Quest** (After completing Introduction)
   - Step 1: Watch protocol introduction video
   - Step 2: Learn core concepts (reading from markdown files)
   - Step 3: Interactive simulator
   - Step 4: Practice with testnet
   - Step 5: Complete advanced features
   - Step 6: Final quiz

### Content Integration

The quest pages should:
- Read markdown files from the appropriate protocol directory
- Parse content for display in modals
- Extract quiz questions from markdown
- Generate interactive elements from the content
- Track progress through each section

## Adding New Protocols

To add a new protocol:

1. Create a new directory under `data/` with the protocol name (lowercase)
2. Add an `overview.md` file as the main introduction
3. Add specific feature markdown files
4. Update the protocol data in the quest page component
5. Add quiz questions at the end of each markdown file

## Content Format

All markdown files should follow this structure:

```markdown
# Title

## Introduction
Brief overview...

## Key Concepts
### Concept 1
Explanation...

### Concept 2
Explanation...

## Practical Examples
Step-by-step guides...

## Quiz Questions
### 1. Question text?
A) Option 1
B) Option 2 ✅
C) Option 3
D) Option 4

**Answer: B**
```

## Video Resources

Video URLs should be embedded directly in the markdown files using standard markdown syntax or embedded links from the QuestFi resources PDF.

## Maintenance

- Keep content updated with protocol changes
- Add new features as protocols evolve
- Update quiz questions to reflect current protocol state
- Archive deprecated features (like BTCz) but keep documentation
