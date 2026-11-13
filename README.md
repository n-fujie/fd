# FUJIE DENKO — Official Site

Source for **https://fujiedenko.platodesignlab.com/**: the FUJIE DENKO (藤江電工) site.

**Energy & Computational Hardware**: Physical Systems, Energy Harvesting, and Neuromorphic Engineering.
FUJIE DENKO is at the research & prototyping stage. FD-01 is a concept-stage initiative, not a product.

## Stack

Next.js 15 (App Router), React 19, TypeScript. No other runtime dependencies. All pages are prerendered as static. Deployed on Vercel (project `fd`).

```
src/app/
  layout.tsx             Root layout (metadataBase)
  page.tsx               Home: storefront hero, categories, lineup, technology, research, contact
  products/page.tsx      Product catalog by category
  products/[slug]/       Product detail pages (static, one per catalog item)
  catalog.ts             Product data: stage, price, images. Edit here to add or release products
  site.ts                Contact, nav, OPERATING_ENTITY_LEGAL_NAME
  chrome.tsx             Header, footer, announce bar, product card
  order/thanks/          Stripe Payment Link redirect destination
  tokushoho/             特定商取引法に基づく表記
  denko.css              Styles (scoped to .fd-root)
  MobileMenu.tsx         Mobile menu (<details>; closes on link tap)
  opengraph-image.tsx    1200×630 share image (twitter-image re-exports it)
  icon.png               Favicon (FD symbol padded to square)
  robots.ts, sitemap.ts
public/
  fd-logo.png            FD symbol, original file as provided
  fd-mark.png            Same image, white margins cropped only
  concepts/*.webp        Concept renderings (devices not built; always labelled as such)
```

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Releasing a product

Every catalog item currently has `stage: "concept"` and `price: null`, so it shows "Not yet for sale" and a "Notify me" email button.

Checkout uses **Stripe Payment Links** (same pattern as platodesignlab.com Return Audit). For each product to sell:

1. In Stripe, create a Payment Link for the product. Set its confirmation redirect to `https://fujiedenko.platodesignlab.com/order/thanks`.
2. In Vercel (project `fd`), add the env var `NEXT_PUBLIC_STRIPE_URL_<SLUG>` with the link, e.g. `NEXT_PUBLIC_STRIPE_URL_OBSERVATION_RACK`.
3. In `catalog.ts`, set the product's `stage: "available"` and `price`, then push.

The "Buy now" button appears only when all three are in place; otherwise the page falls back to email. When a product is actually released, follow the checklist at the top of `src/app/catalog.ts`: set the stage and price, use real photographs, and publish the 特定商取引法に基づく表記 page before taking any order.

## Operator & legal

Operated by 合同会社TERRA (`OPERATING_ENTITY_LEGAL_NAME` / `SELLER` in `src/app/site.ts`). The 特定商取引法に基づく表記 page is at `/tokushoho` (`src/app/tokushoho/page.tsx`); update its 販売状況, 送料 and 引渡時期 rows when the first product goes on sale.

© 2026 FUJIE DENKO
