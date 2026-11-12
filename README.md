# FUJIE DENKO — Official Page Source

Source for the FUJIE DENKO (藤江電工) page, served at `https://www.platodesignlab.com/denko`.

**Energy & Computational Hardware** — Physical Systems, Energy Harvesting, and Neuromorphic Engineering.
FUJIE DENKO is at the research & prototyping stage. FD-01 is a concept-stage initiative, not a product.

## Contents

```
src/app/denko/
  page.tsx               Page (Next.js App Router, server component) + metadata
  denko.css              Scoped styles (all rules under .fd-root)
  MobileMenu.tsx         Mobile menu (<details>; closes on link tap)
  opengraph-image.tsx    1200×630 share image
  twitter-image.tsx      Re-exports the share image
public/denko/
  fd-logo.png            FD symbol, original file as provided
  fd-mark.png            Same image, white margins cropped only
```

## Use

These files are a drop-in route for a Next.js 15 App Router site that has:

- an `@/*` → `./src/*` path alias;
- `@/lib/philosophy` exporting `SITE_IDENTITY.contactEmail` (the contact address used on the page).

The stylesheet hides the host site's `.site-header` / `.site-footer` and removes `.page-container` constraints only while `.fd-root` is on the page.

## Open item

`OPERATING_ENTITY_LEGAL_NAME` in `page.tsx` is `null` until the registered name of the operating gōdō kaisha is confirmed. While `null`, no operating-entity line is rendered.

© 2026 FUJIE DENKO
