import type { Metadata } from "next";
import Link from "next/link";
import { AnnounceBar, SiteHeader, SiteFooter, ProductGrid } from "../chrome";
import { CATEGORIES, PRODUCTS, productsIn } from "../catalog";
import { SITE_URL, mailto } from "../site";
import "../denko.css";

const TITLE = "Products | FUJIE DENKO";
const DESCRIPTION =
  "The FUJIE DENKO hardware lineup: energy, sensing, robotics, and systems. All items are in development and not yet for sale.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/products` },
  openGraph: { type: "website", url: `${SITE_URL}/products`, siteName: "FUJIE DENKO", title: TITLE, description: DESCRIPTION },
};

export default function ProductsPage() {
  return (
    <div className="fd-root">
      <a href="#fd-main" className="fd-skip">Skip to content</a>
      <AnnounceBar />
      <SiteHeader />
      <main id="fd-main">
        <section className="fd-plist-head">
          <div className="fd-wrap">
            <nav aria-label="Breadcrumb" className="fd-crumbs fd-mono">
              <Link href="/">Home</Link><span aria-hidden="true">/</span><span>Products</span>
            </nav>
            <h1 className="fd-h1 fd-h1-s">Products</h1>
            <p className="fd-lede">
              {PRODUCTS.length} items in development. Every listing shows its current stage. Nothing is for sale
              yet; price and ordering will appear on a product&apos;s page only once it is available.
            </p>
            <ul className="fd-chips" aria-label="Categories">
              {CATEGORIES.map((c) => (
                <li key={c.id}>
                  <a href={`#${c.id}`} className="fd-chip">
                    {c.name} <span className="fd-mono">{productsIn(c.id).length}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {CATEGORIES.map((c, i) => (
          <section key={c.id} id={c.id} className="fd-ssection fd-plist-sec" aria-labelledby={`fd-cat-${c.id}`}>
            <div className="fd-wrap">
              <div className="fd-shead">
                <h2 id={`fd-cat-${c.id}`} className="fd-h2s">{c.name}</h2>
                <p className="fd-shead-sub">{c.blurb}</p>
              </div>
              <ProductGrid products={productsIn(c.id)} priorityCount={i === 0 ? 4 : 0} />
            </div>
          </section>
        ))}

        <section className="fd-ssection fd-ssection-tint">
          <div className="fd-wrap fd-updates">
            <div>
              <h2 className="fd-h2s">Release updates</h2>
              <p className="fd-body">
                Want to hear when a product moves to prototype or becomes available? Send us a note and tell us
                which items interest you.
              </p>
            </div>
            <a href={mailto("FUJIE DENKO release updates")} className="fd-btn fd-btn-primary">Get release updates</a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
