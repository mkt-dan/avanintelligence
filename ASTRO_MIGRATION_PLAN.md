# Astro Migration Plan

## Objective

Move Avan Intelligence from a static Next.js export to Astro while preserving the current MVP UI, routes, mock data, and deployment simplicity. The first migration pass should be a low-risk bridge: Astro handles routing, layout, metadata, build output, and sitemap generation, while React components remain available for existing interactive filters and navigation.

## Current Project Shape

- The app is mostly static content with several small interactive islands.
- Data already lives in TypeScript modules under `src/data`.
- Pages are file-based under `src/app`, originally for Next App Router.
- `public/` contains static assets and can stay in place.
- Tailwind CSS is already the design system.

## Migration Strategy

### Phase 1: Astro Bridge

Use Astro as the app shell and keep React where it reduces migration risk.

- Add `astro.config.mjs`.
- Add `@astrojs/react` so existing `.tsx` components can render.
- Add `@astrojs/sitemap` so sitemap generation includes all static Astro routes.
- Replace Next scripts with Astro scripts.
- Create `src/layouts/BaseLayout.astro` for shared HTML, metadata, navigation, footer, and global CSS.
- Create route files in `src/pages` that mount the existing page components.
- Hydrate only components that need browser state:
  - `Navigation`
  - `MapPage`
  - `FeedPage`
  - `PapersPage`
  - `ExperiencesPage`

### Phase 2: Remove Next Coupling

- Replace `next/link` with native `<a>` tags.
- Remove Next-only files:
  - `src/app/layout.tsx`
  - `src/app/sitemap.ts`
  - `next-env.d.ts`
  - `next.config.js`
- Remove the `next` dependency.
- Remove TypeScript Next plugin configuration.
- Update Tailwind content globs to include `.astro`.

### Phase 3: Correct Existing MVP Issues

- Fix nested anchors in the blog index.
- Ensure `/#join` points to a real `id="join"` section.
- Replace placeholder footer links.
- Let Astro generate sitemap entries for `/blog` and post routes.
- Add a real `/og-image.png` asset or update metadata to an existing image.
- Review visible mojibake in text rendered from older files.

### Phase 4: Convert Static React to Astro

Convert components that do not need React state into `.astro` components:

- `Hero`
- `LivingSocialExperiment`
- `ManifestoCover`
- `KnowledgePillars`
- `FinalCTA`
- `Footer`
- card components if they remain presentational

Keep React islands only for true interactivity:

- mobile navigation state
- filters on map/feed/papers/experiences

### Phase 5: Content Model Improvements

Once Astro is stable, move blog posts from TSX pages into content collections:

- `src/content/blog/*.md` or `*.mdx`
- typed frontmatter for title, description, date, image, author
- generated post routes through `getStaticPaths`
- optional RSS feed later

## Validation Checklist

- `npm run check`
- `npm run build`
- Verify generated routes in `dist`
- Verify `dist/sitemap-index.xml`
- Inspect `/`, `/blog`, and each interactive page locally
- Confirm no `next/*` imports remain in active source
- Confirm no invalid nested anchor markup remains

## Recommended Next Refactors

- Replace remote `source.unsplash.com` images with local assets or stable image URLs.
- Add `public/og-image.png`.
- Add accessibility labels to icon-only/mobile buttons.
- Consider replacing emoji-as-logo with a real SVG/logo asset.
- Convert blog articles to Markdown or MDX content collections.
