# FUJIE DENKO — Official Site

Source for **https://fujiedenko.platodesignlab.com/**: the FUJIE DENKO (藤江電工) site.

**Energy & Computational Hardware**: Physical Systems, Energy Harvesting, and Neuromorphic Engineering.
FUJIE DENKO is at the research & prototyping stage. FD-01 is a concept-stage initiative, not a product.

## Stack

Next.js 15 (App Router), React 19, TypeScript. No other runtime dependencies. All pages are prerendered as static. Deployed on Vercel (project `fd`).

```
src/app/
  layout.tsx             Root layout (metadataBase)
  page.tsx               The single page + SEO / Open Graph metadata
  denko.css              Styles (scoped to .fd-root)
  MobileMenu.tsx         Mobile menu (<details>; closes on link tap)
  opengraph-image.tsx    1200×630 share image (twitter-image re-exports it)
  icon.png               Favicon (FD symbol padded to square)
  robots.ts, sitemap.ts
public/
  fd-logo.png            FD symbol, original file as provided
  fd-mark.png            Same image, white margins cropped only
```

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Open item

`OPERATING_ENTITY_LEGAL_NAME` in `src/app/page.tsx` stays `null` until the registered name of the operating gōdō kaisha is confirmed. While it is `null`, no operating-entity line is rendered.

© 2026 FUJIE DENKO
