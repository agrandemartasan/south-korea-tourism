# Discover South Korea

> A multilingual travel and e-commerce site built from original Figma wireframes designed during a UX/UI course.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/agrandemartasan/south-korea-tourism)

**Live demo:** [https://sk-tourism.vercel.app](https://sk-tourism.vercel.app)

---

## Overview

Discover South Korea is a portfolio project demonstrating end-to-end product work — from UX research and UI design in Figma to a fully implemented, production-ready web application.

The site has two main areas:

- **Discovery** — Introduces South Korea through cultural highlights, events, travel inspiration, proverbs, safety tips, and a planning guide (itineraries, etiquette, essentials, alerts, downloadable resources).
- **Shop** — A cultural e-commerce experience featuring arts & crafts, paper goods, kitchen utensils, and souvenirs, with filtering, search, sorting, and pagination.

Both areas are fully bilingual (Portuguese and English) with locale-based URL routing.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.1.1 | React framework with App Router |
| [React](https://react.dev/) | 19.2.3 | UI rendering |
| [TypeScript](https://www.typescriptlang.org/) | ^5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | ^4 | Utility-first styling |
| [next-intl](https://next-intl.dev/) | ^4.8.3 | Internationalisation & locale routing |

---

## Project Structure

```
app/
├── [locale]/                        # Dynamic locale segment (pt, en)
│   ├── layout.tsx                   # NextIntlClientProvider wrapper
│   ├── (main)/                      # Discovery section (dark theme)
│   │   ├── layout.tsx               # Main navbar + footer
│   │   ├── page.tsx                 # Home page
│   │   └── plan/page.tsx            # Planning page
│   └── (shop)/                      # Shop section (light theme)
│       ├── layout.tsx               # Shop navbar + footer
│       └── shop/page.tsx            # Shop catalogue page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx               # Shared navbar (dark / light themes)
│   │   ├── Footer.tsx               # Shared footer
│   │   ├── MobileMenuOverlay.tsx    # Main site mobile menu
│   │   ├── ShopMobileMenuOverlay.tsx
│   │   ├── MobileMenuContext.tsx    # Shared mobile menu state
│   │   ├── MainNavActions.tsx       # Action buttons for main navbar
│   │   └── ShopNavActions.tsx       # Action buttons for shop navbar
│   ├── main/                        # Home page sections
│   ├── plan/                        # Planning page sections
│   ├── shop/                        # Shop-specific components
│   ├── Button.tsx
│   ├── Icons.tsx
│   ├── LanguageSwitcher.tsx
│   └── SectionHeader.tsx
├── data/                            # Static content & configuration
├── hooks/
│   └── useScrolled.ts               # Scroll-position detection
├── i18n/
│   ├── routing.ts                   # Locale list & default locale
│   ├── navigation.ts                # Locale-aware Link / useRouter
│   └── request.ts                   # Server-side message loading
├── messages/
│   ├── en.json                      # English translations
│   └── pt.json                      # Portuguese translations
├── utils/
│   ├── localize.ts                  # LocalizedString type + localize()
│   └── formatContent.tsx            # Markup-aware content formatter
├── globals.css                      # Global styles & Tailwind theme
├── layout.tsx                       # Root layout (font loading)
└── i18n.d.ts                        # TypeScript types for next-intl
```

---

## Getting Started

**Prerequisites:** Node.js 18+ and npm.

```bash
# 1. Clone the repository
git clone https://github.com/agrandemartasan/south-korea-tourism.git
cd south-korea-tourism

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app redirects automatically to the default locale (`/pt`).

---

## Available Scripts

| Script | Command | Description |
|---|---|---|
| Dev server | `npm run dev` | Starts Next.js in development mode with hot reload |
| Build | `npm run build` | Creates an optimised production build |
| Start | `npm start` | Runs the production build locally |
| Lint | `npm run lint` | Runs ESLint across the project |

---

## Deployment

This project is configured for zero-config deployment on [Vercel](https://vercel.com).

### Via Vercel Dashboard

1. Push the repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no build configuration changes needed.
4. Click **Deploy**.

### Via Vercel CLI

```bash
npm i -g vercel
vercel
```

### Environment Variables

No environment variables are required to run or deploy this project.

---

## Internationalisation

The site supports **Portuguese** (`pt`, default) and **English** (`en`) via next-intl with URL-based locale routing.

| URL | Content |
|---|---|
| `/pt` | Portuguese home page |
| `/en` | English home page |
| `/pt/plan` | Portuguese planning page |
| `/en/shop` | English shop page |

Visiting `/` redirects automatically to `/pt`.

**Translation files** live in `app/messages/en.json` and `app/messages/pt.json`.

**Localised data** uses the `LocalizedString` type for any content field that differs between languages:

```ts
// utils/localize.ts
export interface LocalizedString {
  pt: string;
  en: string;
}

export function localize(value: LocalizedString, locale: Locale): string {
  return value[locale];
}
```

Usage in components:

```tsx
import { useLocale } from "next-intl";
import { localize } from "@/utils/localize";

const locale = useLocale() as Locale;
<h2>{localize(item.title, locale)}</h2>
```

---

## Design System

### Colour Palette

| Token | Value | Usage |
|---|---|---|
| `inkstone` | `#1b1b1e` | Primary text, dark backgrounds |
| `porcelain` | `#f8f9fa` | Light backgrounds, light text |
| `harvest` | `#e4b400` | Golden accent, active states |
| `crimson` | `#c62631` | Red accent, alerts, CTAs |
| `celestial` | `#0b4f6c` | Deep blue accent, focus rings |

### Typography

Two font families are configured as Tailwind utilities:

- `font-heading` — Korean display font (local, `/public/fonts/Korean.ttf`)
- `font-body` — Merriweather serif (Google Fonts)

Font sizes use fluid scaling between 375 px and 1440 px viewports:

| Token | Mobile | Desktop |
|---|---|---|
| `text-heading-xl` | 48px | 96px |
| `text-heading-lg` | 40px | 64px |
| `text-heading-md` | 24px | 32px |
| `text-heading-sm` | 20px | 24px |
| `text-body-xl` | 18px | 24px |
| `text-body-lg` | 16px | 18px |
| `text-body-md` | 16px | 16px |
| `text-body-sm` | 14px | 14px |

---

## Path Aliases

The `@/*` alias maps to `./app/*`, configured in `tsconfig.json`:

```ts
import { Link }        from "@/i18n/navigation";
import Navbar          from "@/components/layout/Navbar";
import { localize }    from "@/utils/localize";
import { navItems }    from "@/data/navigationData";
import { useScrolled } from "@/hooks/useScrolled";
```
