# Linear Clone - Modern Product Development Platform

A pixel-perfect, high-performance clone of Linear's homepage built with Next.js 14, TypeScript, and Tailwind CSS 4. This project demonstrates advanced front-end development skills, modern React patterns, and attention to detail in UI/UX implementation.

## 🚀 Live Demo

[View Live Demo](#) <!-- Add your deployment link here -->

## 📸 Screenshots

<!-- Add screenshots of your application here -->

## ✨ Features

### Core Functionality
- **Responsive Design** - Fully responsive across desktop, tablet, and mobile devices
- **Interactive Modals** - Smooth animations with scroll-lock and layout shift prevention
- **Dynamic Content** - Feature-based conditional rendering with state management
- **Optimized Performance** - Hardware-accelerated animations and optimized asset loading

### UI Components Implemented
- **Hero Section** - Eye-catching landing with gradient effects
- **Company Logos** - Infinite scroll animation showcase
- **Feature Cards** - Interactive cards with modal popups
- **AI Section** - Full-width image layouts with overlay content
- **Project Management Tools** - Two-column feature grids
- **Interactive Tabs** - Smooth transitions between feature views
- **Product Capabilities** - Icon-based feature highlights
- **Issue Tracking** - Visual workflow demonstrations
- **Analytics Dashboard** - Data visualization mockups
- **CTA Section** - Professional call-to-action buttons

### Technical Highlights
- **Smooth Animations** - 800ms transitions with fade and scale effects
- **Scrollbar Compensation** - Prevents layout shift during modal interactions
- **Z-index Management** - Proper layering for overlapping elements
- **Negative Margins** - Creative layouts with overlapping sections
- **Client-Side State** - React hooks for interactive features
- **Type Safety** - Full TypeScript implementation

## 🛠️ Tech Stack

### Core Technologies
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **React 19** - Latest React features and hooks

### Libraries & Tools
- **next/image** - Optimized image loading
- **react-icons** - Icon library (Ionicons, Lucide, HeroIcons)
- **Inter Variable Font** - Modern typography

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Static Export** - Production-ready builds

## 📁 Project Structure

```
next-sample/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header/             # Navigation header
│   │   └── index.tsx
│   └── HomePage/           # All homepage sections
│       ├── HeroSection.tsx
│       ├── CompanyLogos.tsx
│       ├── ModernTeamsSection.tsx
│       ├── Modal.tsx       # Reusable modal with subcomponents
│       ├── AISection.tsx
│       ├── AIFeaturesSection.tsx
│       ├── ProductDirectionSection.tsx
│       ├── ProjectFeaturesSection.tsx
│       ├── IdeateSection.tsx
│       ├── ProjectCapabilitiesSection.tsx
│       ├── IssueTrackingSection.tsx
│       ├── WorkflowSection.tsx
│       ├── LinearInsightsSection.tsx
│       ├── FoundationsSection.tsx
│       ├── CTASection.tsx
│       └── index.tsx
├── lib/
│   └── utils.ts            # Utility functions
├── public/
│   └── assets/
│       └── images/         # All image assets
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd next-sample
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized static export in the `out` directory.

## 💡 Key Implementation Details

### Modal System
- **Custom Animation States**: Uses `isAnimating` and `shouldRender` states for smooth transitions
- **Scrollbar Compensation**: Calculates scrollbar width and applies padding to prevent layout shift
- **Feature-Based Content**: Conditional rendering based on `featureId` prop
- **Component Architecture**: Broken down into 7 modular subcomponents

### Animation Techniques
- **Duration**: 800ms for modal animations, 150ms for image transitions
- **Hardware Acceleration**: Uses `will-change` and `translateZ(0)` for optimal performance
- **Transition Delays**: Strategic 50ms delays for reliable animation sequencing
- **Fade Transitions**: Smooth opacity changes for content switching

### Responsive Design
- **Mobile-First**: Tailwind's responsive utilities (md:, lg:)
- **Flexible Grids**: Grid layouts that adapt from 1 to 4 columns
- **Container Management**: Consistent max-width (max-w-5xl) with proper padding (px-6)

## 🎨 Design Patterns

- **Component Composition**: Reusable subcomponents for maintainability
- **Client Components**: Strategic use of `'use client'` for interactivity
- **Type Safety**: Comprehensive TypeScript interfaces and props
- **Utility Functions**: Helper functions for asset path management
- **Modular CSS**: Tailwind utility classes for rapid development

## 📝 Skills Demonstrated

### Frontend Development
- Modern React patterns (hooks, state management, effects)
- Advanced CSS techniques (animations, transitions, layouts)
- Responsive web design principles
- Performance optimization strategies

### JavaScript/TypeScript
- ES6+ features and syntax
- Type-safe component development
- Async operations and timing control
- Array methods and data manipulation

### UI/UX Implementation
- Pixel-perfect design reproduction
- Smooth user interactions
- Accessibility considerations
- Cross-browser compatibility

### Project Management
- Component architecture planning
- Code organization and structure
- Version control best practices
- Production deployment preparation

## 🔧 Configuration

### Next.js Config
- **Output**: Static export for deployment
- **Images**: Unoptimized for static hosting
- **Base Path**: Configurable for subdirectory deployment

### Tailwind Config
- **Custom Colors**: Extended color palette
- **Typography**: Inter Variable font integration
- **Animations**: Custom keyframes and transitions

## 📄 License

This is a portfolio project created for educational and demonstration purposes.

## 👤 Author

**Your Name**
- Portfolio: [your-portfolio.com](#)
- LinkedIn: [linkedin.com/in/yourprofile](#)
- GitHub: [@yourusername](#)

## 🙏 Acknowledgments

- Design inspiration from [Linear](https://linear.app)
- Built with modern web technologies
- Optimized for performance and user experience

---

**Note**: This is a demonstration project showcasing front-end development skills. All design rights belong to Linear.

