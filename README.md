# Avan Intelligence - MVP Platform

A living social experiment for rediscovering knowledge together.

**Live at**: https://avanintelligence.com  
**GitHub**: https://github.com/mkt-dan/avanintelligence  
**Status**: 🚀 MVP in Production

## 🚀 Project Overview

Avan Intelligence is a modern, responsive web platform built with Next.js, TypeScript, and Tailwind CSS. It's designed to be a social knowledge network where curious humans share papers, findings, scientific experiences, and questions to collectively redefine intelligence.

**Core Tagline:** Rediscovering Knowledge.

**Core Positioning:** Redefining Intelligence, Together.

## ✨ Features

### Pages
- **Home** - Hero section with manifesto preview, knowledge map, social feed, papers hub, and scientific experiences
- **Map** - Interactive global knowledge map showing research communities, events, and experiences
- **Feed** - Social knowledge feed with papers shared, findings, questions, field notes, and more
- **Papers** - Research papers hub with filtering by discipline and difficulty level
- **Experiences** - Scientific events and experiences (astronomy nights, philosophy salons, biology walks, etc.)
- **Manifesto** - Six core principles and eight knowledge pillars
- **About** - Platform mission, vision, and current status

### Components
- Responsive navigation with mobile menu
- Glass-morphism design with neon accents
- Reusable card components for papers, experiences, and feed posts
- Multiple preview sections on homepage
- Filter and search interfaces
- Footer with disclaimer about "living experiment" status

### Mock Data
- 6 research papers
- 8 scientific experiences
- 10 social feed posts
- 12 global map points
- 6 manifesto principles
- 8 knowledge pillars

## 🛠️ Tech Stack

- **Framework:** Next.js 14.2
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Package Manager:** npm
- **UI Pattern:** Component-based architecture

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Steps

1. **Clone or navigate to the project:**
   ```bash
   cd avanintelligence
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:3000`

### Build for Production
```bash
npm run build
npm start
```

## 📂 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── page.tsx           # Home page
│   ├── map/page.tsx       # Map page
│   ├── feed/page.tsx      # Feed page
│   ├── papers/page.tsx    # Papers page
│   ├── experiences/page.tsx # Experiences page
│   ├── manifesto/page.tsx # Manifesto page
│   └── about/page.tsx     # About page
│
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Header navigation
│   ├── Footer.tsx         # Footer
│   ├── Hero.tsx           # Hero section
│   ├── PaperCard.tsx      # Paper card component
│   ├── ExperienceCard.tsx # Experience card component
│   ├── FeedPostCard.tsx   # Feed post card component
│   ├── ManifestoCover.tsx # Manifesto preview
│   ├── MapPreview.tsx     # Map preview
│   ├── FeedPreview.tsx    # Feed preview
│   ├── PapersPreview.tsx  # Papers preview
│   ├── ExperiencesPreview.tsx # Experiences preview
│   ├── KnowledgePillars.tsx # Knowledge pillars section
│   ├── LivingSocialExperiment.tsx # "Living experiment" section
│   └── FinalCTA.tsx       # Final call-to-action
│
├── data/                  # Mock data files
│   ├── papers.ts          # Research papers data
│   ├── experiences.ts     # Scientific experiences data
│   ├── feed.ts            # Social feed posts data
│   ├── manifesto.ts       # Manifesto and pillars data
│   └── map.ts             # Map points data
│
└── types/                 # TypeScript type definitions
    └── index.ts           # Shared types

public/                    # Static assets
├── robots.txt             # SEO robots file
└── (add images/icons here)

.github/
├── workflows/
│   └── deploy.yml         # GitHub Actions CI/CD workflow
└── (add issue/PR templates here)

.env.example               # Environment variables template
.env.local                 # Local env variables (not committed)
.gitignore                 # Git ignore rules
package.json               # Dependencies and scripts
tailwind.config.ts         # Tailwind CSS configuration
postcss.config.js          # PostCSS configuration
tsconfig.json              # TypeScript configuration
next.config.js             # Next.js configuration
vercel.json                # Vercel deployment config

src/config/
├── site.ts                # Site configuration (URL, metadata, links)

README.md                  # Project documentation
DEPLOYMENT.md              # Deployment guide
GITHUB-CONFIG.md           # GitHub integration guide
```

## 🎨 Design System

### Colors
- **Primary Gradient:** Cyan to Purple (`from-neon-cyan to-neon-purple`)
- **Accent Colors:** Pink, Blue
- **Dark Background:** Deep slate and navy gradient
- **Glass Effect:** `glass` utility class for semi-transparent backgrounds

### Key Tailwind Utilities
- `gradient-text` - Cyan to purple gradient text
- `glass` - Glass-morphism effect
- `card-hover` - Hover animation for cards
- `neon-glow` - Cyan shadow glow effect

### Typography
- **Display:** Bold, large sizes (5xl-7xl)
- **Headings:** Semibold (xl-3xl)
- **Body:** Regular (sm-lg)
- **Accent:** Neon cyan and purple for important elements

## 🚫 What's Not Included (Yet)

- User authentication
- Real backend API
- Database
- Payment processing
- File uploads
- User accounts
- Real email functionality
- Analytics
- Admin panel

## 📝 Adding Mock Data

Mock data is stored in `src/data/`. To add more:

1. **Papers:** Edit `src/data/papers.ts` - add to the `papers` array
2. **Experiences:** Edit `src/data/experiences.ts` - add to the `experiences` array
3. **Feed Posts:** Edit `src/data/feed.ts` - add to the `feedPosts` array
4. **Map Points:** Edit `src/data/map.ts` - add to the `mapPoints` array

Each data file exports typed arrays for TypeScript safety.

## 🔧 Customization

### Change Brand Colors
Edit `tailwind.config.ts` in the `colors` section:
```typescript
neon: {
  cyan: '#00d9ff',
  purple: '#d946ef',
  // ... modify hex values
}
```

### Modify Hero Copy
Edit `src/components/Hero.tsx` to change the main title and subtitle.

### Update Navigation Links
Edit `src/components/Navigation.tsx` to add/remove/modify navigation items.

### Change Global Styles
Edit `src/app/globals.css` for font changes, scrollbar styling, etc.

## 📱 Responsive Design

The platform is fully responsive:
- **Mobile First:** Designed for mobile, scales up
- **Breakpoints:** Uses Tailwind's default breakpoints (sm, md, lg, xl)
- **Navigation:** Mobile hamburger menu on small screens
- **Grid Layouts:** Responsive columns (1 column on mobile, 3 on desktop)
- **Typography:** Scales appropriately across devices

## ⚠️ Important Notes

This is a **living social experiment** under constant construction:

1. **Mock Data Only** - All data is for demonstration purposes
2. **No Backend** - No database or server yet
3. **No Authentication** - All data is public
4. **No Real Features** - Links and buttons don't have backend functionality
5. **Foundation Only** - This is the MVP foundation for future development

## 🚀 Deployment

### Deploy to Vercel (Recommended for Next.js)
```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms
1. Run `npm run build`
2. Deploy the `.next` folder with Node.js runtime
3. Set `NODE_ENV=production`

## 📖 Development Tips

### Using TypeScript
- Types are defined in `src/types/index.ts`
- All components are strongly typed
- Mock data is type-safe through type exports

### Creating New Pages
1. Create a folder in `src/app/` (e.g., `src/app/my-page/`)
2. Add `page.tsx` inside
3. Export a default React component
4. Update `Navigation.tsx` if needed

### Creating New Components
1. Create file in `src/components/` (e.g., `MyComponent.tsx`)
2. Use `'use client'` directive at the top if interactive
3. Export default component
4. Import in pages as needed

### Adding Styles
- Use Tailwind CSS classes (preferred)
- Add global styles to `src/app/globals.css`
- Create component-specific CSS in that component's file

## 🚀 GitHub & Deployment

### Repository Setup
- **Repository**: https://github.com/mkt-dan/avanintelligence
- **Main Branch**: Auto-deploys to https://avanintelligence.com
- **Branch Protection**: Enabled on main branch
- **CI/CD**: GitHub Actions + Vercel

### Deployment

The project auto-deploys to **avanintelligence.com** via Vercel whenever you push to the main branch.

**Setup Instructions:**
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for comprehensive deployment guide
- See [GITHUB-CONFIG.md](./GITHUB-CONFIG.md) for GitHub integration details

**Quick Deploy:**
```bash
git push origin main
# Automatically deploys to avanintelligence.com
# Check GitHub Actions for build status
```

### Configuration Files
- **`.env.local`** - Local environment variables (copy from `.env.example`)
- **`vercel.json`** - Vercel deployment config
- **`.github/workflows/deploy.yml`** - CI/CD pipeline
- **`src/config/site.ts`** - Site configuration (base URL, metadata, links)

## 🤝 Contributing

As this is a living experiment, contributions and feedback are welcome. The platform evolves with community input.

## 📄 License

MIT License - Feel free to use this as a template or starting point.

## 📞 Questions?

This is an MVP template. For implementation details or customization help, review the component code and inline comments.

---

**Remember:** Avan Intelligence is under constant construction. This is intentional. We believe the best platforms evolve with their communities. 🚀

Built with curiosity, philosophy, and code.
