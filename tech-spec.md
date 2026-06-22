# Technical Specification — Peter Emad Portfolio

## Dependencies

| Package | Version | Purpose |
|---|---|---|
| `next` | `^14.0.0` | Framework (App Router) |
| `react` | `^18.2.0` | UI library |
| `react-dom` | `^18.2.0` | React DOM renderer |
| `typescript` | `^5.3.0` | Type safety |
| `tailwindcss` | `^3.4.0` | Utility-first CSS |
| `postcss` | `^8.4.0` | CSS processing |
| `autoprefixer` | `^10.4.0` | Vendor prefixes |
| `framer-motion` | `^11.0.0` | Animation engine |
| `lucide-react` | `^0.400.0` | Icon library |
| `clsx` | `^2.1.0` | Conditional classnames |
| `tailwind-merge` | `^2.2.0` | Tailwind class dedup |

Fonts loaded via `next/font/google` — no additional font packages.

---

## Component Inventory

### Layout

| Component | Source | Reuse | Notes |
|---|---|---|---|
| `Navbar` | Custom | Singleton | Sticky, glassmorphism on scroll, mobile drawer |
| `Footer` | Custom | Singleton | 4-column footer |
| `Container` | Custom | Shared | Max-width wrapper, horizontal padding |
| `Section` | Custom | Shared | Section wrapper with id, vertical padding |

### Sections

| Component | Source | Notes |
|---|---|---|
| `HeroSection` | Custom | Entrance sequence, gradient bg, noise overlay |
| `AboutSection` | Custom | 2-col grid, bio card |
| `SkillsSection` | Custom | 4-category card grid |
| `ProjectsSection` | Custom | 2-column project card grid |
| `TimelineSection` | Custom | Vertical timeline with alternating cards |
| `ContactSection` | Custom | 2-col layout, info + form |

### Reusable Components

| Component | Source | Used By | Notes |
|---|---|---|---|
| `HeroBackground` | Custom | HeroSection | Radial gradients + noise pseudo-element |
| `ProjectCard` | Custom | ProjectsSection | Image + content, hover lift |
| `SkillCard` | Custom | SkillsSection | Category header + skill list |
| `TimelineNode` | Custom | TimelineSection | Dot + date + card, alternating layout |
| `StatusPill` | Custom | HeroSection | Green pulse dot + label |
| `TechChip` | Custom | Projects, Timeline | Small rounded tag |
| `MobileDrawer` | Custom | Navbar | Slide-in panel with focus trap |

### Motion Components

| Component | Source | Notes |
|---|---|---|
| `FadeUp` | Custom | Wrapper: whileInView fadeUp, standardized props |
| `StaggerContainer` | Custom | Parent: staggerChildren, reduced-motion aware |
| `StaggerItem` | Custom | Child: y offset + opacity, reduced-motion aware |
| `LazyMotionProvider` | Custom | App-level LazyMotion with domAnimation |

### Hooks

| Hook | Purpose |
|---|---|
| `useScrolled` | Detects scroll past threshold (for Navbar glassmorphism) |
| `useReducedMotion` | Wraps framer-motion's useReducedMotion for reusable checks |
| `useActiveSection` | IntersectionObserver for Navbar active link highlighting |

---

## Animation Implementation

| Animation | Library | Approach | Complexity |
|---|---|---|---|
| Hero entrance sequence (5-step stagger) | Framer Motion | Parent `staggerChildren` + child `variants` with per-child delays | Medium |
| Status pill pulse | CSS keyframes | `scale` + `opacity` loop, 2s infinite | Low |
| Scroll-based section reveals | Framer Motion | `whileInView` with standardized viewport config | Low |
| Content group stagger | Framer Motion | `staggerChildren: 0.08` on container, `FadeUp` on items | Low |
| Navbar scroll transition | Framer Motion | `useScrolled` hook drives opacity/shadow via `animate` | Low |
| Mobile drawer slide-in | Framer Motion | `AnimatePresence` + `motion.div` x-axis slide, 300ms | Medium |
| Drawer backdrop fade | Framer Motion | Shared `AnimatePresence`, opacity 0→1 | Low |
| Project card hover lift | CSS transition | `translateY(-4px)` + shadow change, 250ms ease | Low |
| Skill card hover glow | CSS transition | Border color + icon color shift, 200ms | Low |
| Button hover scale | CSS transition | `scale(1.02)`, 150ms | Low |
| Timeline node entrance | Framer Motion | `whileInView`, alternating `x` offset (±30px) | Medium |
| Hero gradient (no drift) | Static CSS | Two radial-gradient declarations, no animation | Low |
| Noise overlay | Static CSS | Pseudo-element with SVG filter or repeating PNG | Low |
| prefers-reduced-motion | Framer Motion | `useReducedMotion` gates all motion to opacity-only | Low |

**Non-degradable animations (all can be reduced):** None. Every animation has a reduced-motion fallback to opacity-only or instant.

**R3F decision:** No Three.js / R3F needed. All visual effects are 2D CSS/Framer Motion. The noise texture is a static overlay, not a shader.

---

## State & Logic

### Form State (ContactSection)

Managed via React `useState` — no external library needed for a 4-field form.

- Field values: `name`, `email`, `projectType`, `message`
- Validation state: per-field error strings, computed on blur + submit
- Submit state: `idle` → `loading` → `success` → `idle` (2s auto-reset)
- Submission: `mailto:` link with encoded subject/body — no API route

### Navbar Scroll State

`useScrolled` hook: `useEffect` with scroll listener, threshold at 100px. Drives:
- Background opacity: 0.7 → 0.95
- Bottom shadow: none → `shadow-sm`
- Debounced via requestAnimationFrame

### Active Section Detection

`useActiveSection` hook: single IntersectionObserver with `threshold: 0.3`, observing all section anchors. Updates URL hash (via `history.replaceState`) and active nav link state. Runs only on desktop (where nav links are visible).

### Mobile Drawer Focus Trap

Custom focus management:
- On open: store trigger ref, move focus to first drawer link
- While open: `Tab` cycles within drawer (first↔last), `Escape` closes
- On close: restore focus to trigger, `AnimatePresence` handles unmount

---

## Other Key Decisions

### App Router Structure

```
app/
├── layout.tsx          # Root layout: fonts, LazyMotionProvider, Navbar
├── page.tsx            # Single-page: all 6 sections composed
├── globals.css         # CSS variables, resets, noise texture, font features
├── sections/
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── TimelineSection.tsx
│   └── ContactSection.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Container.tsx
│   ├── Section.tsx
│   ├── HeroBackground.tsx
│   ├── ProjectCard.tsx
│   ├── SkillCard.tsx
│   ├── TimelineNode.tsx
│   ├── StatusPill.tsx
│   ├── TechChip.tsx
│   ├── MobileDrawer.tsx
│   ├── FadeUp.tsx
│   ├── StaggerContainer.tsx
│   └── StaggerItem.tsx
├── hooks/
│   ├── useScrolled.ts
│   ├── useReducedMotion.ts
│   └── useActiveSection.ts
└── lib/
    └── utils.ts        # cn() helper (clsx + tailwind-merge)
```

### Tailwind Configuration

Custom theme extensions:
- All design tokens (colors, spacing, radii, shadows, font families) mapped to Tailwind config
- Breakpoints: `sm: 480px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`, `2xl: 1536px`

### Noise Texture Implementation

Inline SVG `<filter>` with `<feTurbulence>` applied via CSS `background-image` on a pseudo-element. No external asset needed. Target: `< 500 bytes in the CSS file.
