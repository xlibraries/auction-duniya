# Auction Duniya

A modern bank auction property marketplace built with Next.js 15 and React 19. Discover, explore, and bid on verified SARFAESI auction properties across India — featuring immersive panoramic property views, real-time countdown timers, and a streamlined bidding experience.

![Next.js](https://img.shields.io/badge/Next.js-15.2.8-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)
![pnpm](https://img.shields.io/badge/pnpm-9.15.4-F69220?logo=pnpm)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [Components](#components)
- [Design System](#design-system)
- [Code Obfuscation](#code-obfuscation)
- [Scripts](#scripts)
- [Configuration](#configuration)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

**Auction Duniya** (AuctionDunia) is an e-auction platform for bank-repossessed properties in India. It connects buyers with verified SARFAESI auction listings from major banks like SBI, HDFC, ICICI, and Axis Bank. The platform provides a transparent, user-friendly interface for browsing auction properties, viewing immersive 360° tours, and participating in live bidding.

### Key Highlights

- **1,245+ verified properties** listed from major Indian banks
- **Immersive 360° panoramic viewer** powered by Pannellum
- **Google Maps integration** for property location context
- **Real-time auction countdown** timers
- **Mobile-responsive** design with a custom design token system

---

## Features

### Property Discovery
- Browse and search auction properties with advanced filters (bank, area, EMD amount)
- Sort by newest listed, price, or auction date
- Status indicators: **Live**, **Upcoming**, **Hot**, **Verified**
- Pagination across 12+ pages of listings

### Auction Detail Pages
- **Immersive Panoramic Viewer** — navigate through multiple property scenes (hall, kitchen, rooms) with hotspot-based transitions
- **Auction Statistics** — reserve price, bid increment, active bidders count
- **Bid Activity Tracker** — visual progress indicator for ongoing auctions
- **Legal Documents** — downloadable sale deed, public notice, and terms & conditions
- **Auction Officer Info** — direct contact details for the assigned officer
- **Google Maps Embed** — property location on an interactive map
- **Countdown Timer** — time remaining until auction closes

### Authentication
- Phone number and email-based registration
- Social login options (Google, Apple)
- Split-screen layout with visual branding

### User Experience
- Sticky navigation with active route highlighting
- Trust badges (Verified Properties, Transparent Bidding, Bank Authorized)
- "How It Works" onboarding flow (Find → KYC → Bid & Win)
- Indian numbering format for prices (Cr, Lakhs, ₹)
- Responsive design across all breakpoints

---

## Tech Stack

| Category          | Technology                              |
| ----------------- | --------------------------------------- |
| **Framework**     | Next.js 15.2.8 (App Router)            |
| **UI Library**    | React 19.0.0                            |
| **Language**      | TypeScript 5.7 (strict mode)            |
| **Styling**       | CSS with custom design tokens           |
| **Panorama**      | Pannellum 2.5.6                         |
| **Maps**          | Google Maps (iframe embed)              |
| **Package Mgr**   | pnpm 9.15.4                             |
| **Bundler (Dev)** | Turbopack                               |
| **Linting**       | ESLint 9 + next/core-web-vitals         |
| **Obfuscation**   | webpack-obfuscator + javascript-obfuscator |

---

## Getting Started

### Prerequisites

- **Node.js** >= 18.17
- **pnpm** >= 9.x

### Installation

```bash
# Clone the repository
git clone https://github.com/xlibraries/auction-duniya.git
cd auction-duniya

# Install dependencies
pnpm install
```

### Development

```bash
# Start the dev server with Turbopack
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build for production (includes code obfuscation)
pnpm build

# Start the production server
pnpm start
```

---

## Project Structure

```
auction-duniya/
├── src/
│   ├── app/                              # App Router (pages & layouts)
│   │   ├── layout.tsx                    # Root layout (Navbar + Footer)
│   │   ├── page.tsx                      # Homepage
│   │   ├── globals.css                   # Global styles
│   │   ├── auctions/
│   │   │   ├── page.tsx                  # Auction listings page
│   │   │   └── [id]/
│   │   │       └── page.tsx              # Auction detail (dynamic route)
│   │   ├── login/
│   │   │   └── page.tsx                  # Login page
│   │   └── signup/
│   │       └── page.tsx                  # Signup page
│   │
│   ├── components/
│   │   ├── auth/
│   │   │   └── AuthSplitPage.tsx         # Auth split-screen layout
│   │   ├── cards/
│   │   │   ├── PropertyCard.tsx          # Property preview card
│   │   │   └── StepCard.tsx              # Process step card
│   │   ├── icons/
│   │   │   └── AppIcons.tsx              # 35+ SVG icon components
│   │   ├── layout/
│   │   │   ├── Navbar.tsx                # Sticky navigation bar
│   │   │   └── Footer.tsx                # Footer (full/slim variants)
│   │   ├── property/
│   │   │   └── ImmersiveViewer.tsx        # Pannellum 360° panoramic viewer
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx           # Homepage hero with search
│   │   │   ├── TrendingAuctions.tsx      # Trending properties section
│   │   │   ├── HowItWorks.tsx            # 3-step onboarding section
│   │   │   └── HomeCTA.tsx               # Call-to-action banner
│   │   └── ui/
│   │       ├── Button.tsx                # Button (5 variants)
│   │       ├── Badge.tsx                 # Status badge (4 variants)
│   │       ├── SearchBar.tsx             # Dual-input search component
│   │       └── Countdown.tsx             # Auction countdown label
│   │
│   ├── lib/
│   │   ├── constants.tsx                 # Mock data & navigation config
│   │   ├── types.ts                      # TypeScript type definitions
│   │   └── utils.ts                      # Utility functions (formatPrice, cn)
│   │
│   └── styles/
│       └── tokens.css                    # Design tokens (colors, spacing, etc.)
│
├── public/
│   └── images/                           # Static property images
│
├── next.config.ts                        # Next.js + obfuscation config
├── tsconfig.json                         # TypeScript config
├── postcss.config.ts                     # PostCSS config
├── .eslintrc.json                        # ESLint config
├── package.json                          # Dependencies & scripts
└── pnpm-lock.yaml                        # Lockfile
```

---

## Pages & Routes

| Route              | Page                  | Description                                         |
| ------------------ | --------------------- | --------------------------------------------------- |
| `/`                | Homepage              | Hero, trending auctions, how it works, CTA          |
| `/auctions`        | Auction Listings      | Browse all properties with filters, sort & paginate  |
| `/auctions/[id]`   | Auction Detail        | Full property view with 360° tour, stats & documents |
| `/login`           | Login                 | Phone/email auth with social login options            |
| `/signup`          | Sign Up               | New user registration with social login options       |

---

## Components

### UI Components

| Component      | Variants                                      | Description                          |
| -------------- | --------------------------------------------- | ------------------------------------ |
| `Button`       | primary, ghost, outline, dark, outline-white   | Reusable button with size options    |
| `Badge`        | live, upcoming, hot, verified                  | Auction status indicator             |
| `SearchBar`    | —                                              | Dual-input property + location search|
| `Countdown`    | —                                              | Time-remaining label                 |

### Card Components

| Component       | Description                                    |
| --------------- | ---------------------------------------------- |
| `PropertyCard`  | Property thumbnail with price, location, badge |
| `StepCard`      | Numbered step card for "How It Works" section  |

### Feature Components

| Component          | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| `ImmersiveViewer`  | Pannellum-powered 360° panoramic viewer with scene navigation |
| `AuthSplitPage`    | Split-screen auth layout with phone/email tabs                |

### Layout Components

| Component | Description                                       |
| --------- | ------------------------------------------------- |
| `Navbar`  | Sticky header with logo, nav links, auth buttons  |
| `Footer`  | Site footer with links (full & slim variants)     |

### Icon Library

`AppIcons.tsx` exports **35+ SVG icon components** used throughout the app, including brand icons, navigation icons, property type icons, social auth icons, and status indicators.

---

## Design System

The app uses a custom **CSS design token system** defined in `src/styles/tokens.css`:

### Colors

| Token                  | Value       | Usage                    |
| ---------------------- | ----------- | ------------------------ |
| `--color-primary`      | `#1a9b8c`   | Primary teal accent      |
| `--color-navy`         | `#111827`   | Dark backgrounds         |
| `--color-text`         | `#1f2937`   | Body text                |
| `--color-text-muted`   | `#6b7280`   | Secondary text           |
| `--color-surface`      | `#ffffff`   | Card/page backgrounds    |
| `--color-border`       | `#e5e7eb`   | Borders and dividers     |
| `--color-live`         | `#ef4444`   | Live auction status      |
| `--color-upcoming`     | `#3b82f6`   | Upcoming auction status  |
| `--color-hot`          | `#f97316`   | Hot/trending status      |

### Typography

- **Font Family:** Inter (system-ui fallback)
- **Font Weights:** 400, 500, 600, 700

### Spacing Scale

4px → 8px → 12px → 16px → 24px → 32px → 48px → 80px

### Other Tokens

- **Border Radius:** 12px (cards), 999px (pills)
- **Shadows:** card shadow, soft shadow
- **Max Width:** 1040px (content container)

---

## Code Obfuscation

Production builds include **JavaScript obfuscation** to protect client-side source code from inspection. This is configured in `next.config.ts` using `webpack-obfuscator`.

### Protections Applied

| Protection                   | Description                                          |
| ---------------------------- | ---------------------------------------------------- |
| Control Flow Flattening      | Restructures code logic into unreadable patterns     |
| Dead Code Injection          | Adds fake code paths to confuse reverse engineering  |
| Debug Protection             | Freezes browser DevTools when debugging is attempted |
| String Array Encoding        | Encodes all strings in Base64                        |
| Identifier Renaming          | Replaces variable/function names with hex identifiers|
| Self-Defending               | Code breaks if reformatted or beautified             |
| String Splitting             | Breaks strings into small chunks                     |
| Object Key Transformation    | Obfuscates object property names                     |
| Console Output Disabled      | Strips all `console.log` statements                  |
| Source Maps Disabled         | No `.map` files shipped to production                |

### Exclusions

Next.js internal chunks (`vendors-*.js`, `framework-*.js`, `webpack-*.js`) are excluded from obfuscation to prevent runtime breakage.

> **Note:** Obfuscation only applies to **production builds** (`pnpm build`). Development mode is unaffected.

---

## Scripts

| Script            | Command              | Description                             |
| ----------------- | -------------------- | --------------------------------------- |
| `pnpm dev`        | `next dev --turbopack`| Start dev server with Turbopack         |
| `pnpm build`      | `next build`          | Production build with obfuscation       |
| `pnpm start`      | `next start`          | Start production server                 |
| `pnpm lint`       | `next lint`           | Run ESLint checks                       |
| `pnpm typecheck`  | `tsc --noEmit`        | Run TypeScript type checking            |

---

## Configuration

### TypeScript (`tsconfig.json`)
- **Target:** ES2022
- **Strict Mode:** Enabled
- **Path Alias:** `@/*` maps to `./src/*`
- **JSX:** Preserve (React 19 JSX transform)

### ESLint (`.eslintrc.json`)
- Extends `next/core-web-vitals` for Next.js best practices

### Next.js (`next.config.ts`)
- React strict mode enabled
- Production source maps disabled
- `X-Powered-By` header removed
- Webpack obfuscator plugin for production client bundles

---

## Roadmap

- [ ] Backend API integration (database, real auction data)
- [ ] User authentication (JWT/session-based auth flow)
- [ ] Live bidding system with WebSocket support
- [ ] Payment gateway integration for EMD deposits
- [ ] User dashboard and bid history
- [ ] Advanced search with full-text and geo filters
- [ ] Push notifications for auction alerts
- [ ] Admin panel for property management
- [ ] KYC verification flow
- [ ] Mobile app (React Native)

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is proprietary. All rights reserved.
