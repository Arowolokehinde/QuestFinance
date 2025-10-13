# Documentation Components

This directory contains all components for the QuestFi documentation page, organized into logical folders for better maintainability.

## 📁 Folder Structure

```
components/docs/
├── data/           # Constants and configuration data
├── sections/       # Main documentation section components
└── ui/             # Reusable UI components
```

## 📊 data/

### `constants.ts`
Central location for all documentation data to keep components clean and maintainable.

**Exports:**
- `DOCS_SECTIONS` - Navigation menu sections with icons
- `TECH_STACK` - Technology stack badges data
- `FEATURES` - Core features with descriptions
- `PROTOCOLS` - Protocol information (name, XP, rarity, icon)
- `AUTH_METHODS` - Authentication method details
- `CODE_EXAMPLES` - Code snippets for documentation
- `CONTRACT_INFO` - Smart contract deployment information

**Why separate?**
- Single source of truth for all data
- Easy to update without touching component logic
- Type-safe with TypeScript
- Reusable across multiple components

## 🎨 ui/

Reusable presentational components that can be used throughout the docs.

### `DocsHeader.tsx`
Top navigation header with logo, title, and mobile menu toggle.

**Props:**
```typescript
{
  mobileMenuOpen: boolean
  onToggleMobileMenu: () => void
}
```

### `Sidebar.tsx`
Desktop sidebar navigation with section links.

**Props:**
```typescript
{
  sections: Array<{ id: string; title: string; icon: LucideIcon }>
  activeSection: string
  onSectionChange: (section: string) => void
}
```

### `MobileSidebar.tsx`
Mobile-responsive slide-in sidebar with animations.

**Props:**
```typescript
{
  sections: Array<{ id: string; title: string; icon: LucideIcon }>
  activeSection: string
  isOpen: boolean
  onSectionChange: (section: string) => void
  onClose: () => void
}
```

### `CodeBlock.tsx`
Code snippet display with syntax highlighting and copy functionality.

**Props:**
```typescript
{
  code: string
  id: string        // Unique ID for copy state management
  language?: string // Default: 'bash'
}
```

**Features:**
- One-click copy to clipboard
- Visual feedback on copy (checkmark)
- Syntax highlighting
- Overflow scroll for long code

### `FeatureCard.tsx`
Animated card displaying a feature with icon, title, description, and stats.

**Props:**
```typescript
{
  icon: LucideIcon
  title: string
  description: string
  stats: string
  delay?: number    // Animation delay
}
```

### `TechStackBadge.tsx`
Colored badge displaying technology name and category.

**Props:**
```typescript
{
  name: string
  category: string
  color: string     // Tailwind gradient classes
  delay?: number    // Animation delay
}
```

## 📄 sections/

Main content components for each documentation section.

### `OverviewSection.tsx`
**Purpose:** Introduction to QuestFi with features and tech stack.

**Components Used:**
- `FeatureCard` × 4
- `TechStackBadge` × 8

**Data Sources:**
- `FEATURES` from constants
- `TECH_STACK` from constants

### `FeaturesSection.tsx`
**Purpose:** Detailed explanation of core features (Quests, NFTs, XP).

**Components Used:**
- Custom feature cards
- Protocol list with icons

**Data Sources:**
- `PROTOCOLS` from constants

**Sections:**
1. Quest System with protocol cards
2. Soul-Bound NFT Badges with checklist
3. XP & Leveling System with formula

### `QuickStartSection.tsx`
**Purpose:** Step-by-step setup guide for developers.

**Components Used:**
- `CodeBlock` × 4

**Data Sources:**
- `CODE_EXAMPLES` from constants

**Steps:**
1. Clone repository
2. Install dependencies
3. Configure environment
4. Run dev server

### `AuthenticationSection.tsx`
**Purpose:** Authentication methods and session management.

**Components Used:**
- Auth method cards × 4
- Session management info cards

**Data Sources:**
- `AUTH_METHODS` from constants

**Features:**
- Email OTP details
- Google OAuth details
- Passkey (WebAuthn) details
- Stacks Wallet connect details

### `SmartContractSection.tsx`
**Purpose:** Smart contract documentation and testing guide.

**Components Used:**
- `CodeBlock` × 4 (function examples + test command)

**Data Sources:**
- `CONTRACT_INFO` from constants
- `CODE_EXAMPLES` from constants

**Sections:**
1. Contract information (address, network)
2. Main functions with code examples
3. Testing instructions

## 🔄 Component Relationships

```
DocsPage (Parent)
│
├── DocsHeader (Layout)
├── Sidebar (Layout)
├── MobileSidebar (Layout)
│
└── Section Router (Content)
    ├── OverviewSection
    │   ├── FeatureCard (UI)
    │   └── TechStackBadge (UI)
    │
    ├── FeaturesSection
    │   └── (Custom cards)
    │
    ├── QuickStartSection
    │   └── CodeBlock (UI)
    │
    ├── AuthenticationSection
    │   └── (Custom cards)
    │
    └── SmartContractSection
        └── CodeBlock (UI)
```

## 🎯 Design Principles

### 1. Separation of Concerns
- **Data** (`data/`) - Static configuration
- **UI** (`ui/`) - Reusable presentation components
- **Sections** (`sections/`) - Page-specific content

### 2. Reusability
- UI components are generic and reusable
- Data is centralized for easy updates
- Sections compose smaller components

### 3. Type Safety
- All components use TypeScript interfaces
- Props are strictly typed
- Data constants are typed

### 4. Performance
- Components use `motion` for smooth animations
- Lazy rendering of sections (only active section)
- Optimized re-renders with proper keys

### 5. Maintainability
- Clear file naming conventions
- Logical folder structure
- Single responsibility per component

## 🛠️ Adding New Sections

To add a new documentation section:

1. **Update `data/constants.ts`:**
   ```typescript
   export const DOCS_SECTIONS = [
     // ... existing sections
     { id: 'new-section', title: 'New Section', icon: YourIcon }
   ]
   ```

2. **Create section component in `sections/`:**
   ```typescript
   // sections/NewSection.tsx
   import { motion } from 'framer-motion'

   export default function NewSection() {
     return (
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         className="space-y-8"
       >
         <h2 className="text-4xl font-black">New Section</h2>
         {/* Your content */}
       </motion.div>
     )
   }
   ```

3. **Import and add to router in `app/docs/page.tsx`:**
   ```typescript
   import NewSection from '@/components/docs/sections/NewSection'

   const renderSection = () => {
     switch (activeSection) {
       // ... existing cases
       case 'new-section':
         return <NewSection />
     }
   }
   ```

## 🎨 Styling Guidelines

### Color Palette
- **Background:** `slate-950`, `slate-900`
- **Borders:** `slate-800`, `slate-700`
- **Text:** `white`, `slate-300`, `slate-400`
- **Accents:** `indigo-600`, `indigo-400`, `purple-600`
- **Success:** `green-400`, `emerald-400`

### Component Classes
- **Cards:** `bg-slate-900/50 border border-slate-800 rounded-xl p-6`
- **Code Blocks:** `bg-slate-950 border border-slate-700 rounded-lg`
- **Buttons:** `bg-indigo-600 hover:bg-indigo-500 rounded-lg`

### Responsive Design
- Mobile: `p-4`, `text-sm`
- Tablet: `sm:p-6`, `sm:text-base`
- Desktop: `lg:p-8`, `lg:text-lg`

## 📦 Dependencies

- `framer-motion` - Animations
- `lucide-react` - Icons
- `react` - Core library
- `next` - Framework

## 🔍 Best Practices

1. **Keep components small** - Each component should do one thing well
2. **Use TypeScript** - Type all props and data
3. **Extract constants** - Don't hardcode data in components
4. **Compose components** - Build complex UIs from simple pieces
5. **Handle states** - Loading, error, and success states
6. **Accessibility** - Use semantic HTML and ARIA labels
7. **Performance** - Memoize expensive operations

## 📝 Example Usage

```typescript
// Good: Using reusable components
import FeatureCard from '@/components/docs/ui/FeatureCard'
import { FEATURES } from '@/components/docs/data/constants'

{FEATURES.map((feature, idx) => (
  <FeatureCard key={idx} {...feature} delay={idx * 0.1} />
))}

// Bad: Hardcoding everything
<div className="p-6 bg-slate-900/50...">
  <Trophy className="w-6 h-6" />
  <h3>Gamified Learning</h3>
  <p>Complete interactive quests...</p>
  <span>5 Protocols</span>
</div>
```

---

This structure ensures the documentation is:
- ✅ Easy to maintain
- ✅ Scalable for new sections
- ✅ Consistent in design
- ✅ Type-safe with TypeScript
- ✅ Performant with optimized rendering
