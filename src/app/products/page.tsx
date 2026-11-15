import type { Metadata } from "next";
import Link from "next/link";
import { AnnounceBar, SiteHeader, SiteFooter, ProductGrid, UpdatesBand } from "../chrome";
import { CATEGORIES, PRODUCTS, productsIn } from "../catalog";
import { SITE_URL } from "../site";
import "../denko.css";
import "../film.css";

const TITLE = "Concept Archive | FUJIE DENKO";
const DESCRIPTION =
  "Archived hardware concept visualizations from FUJIE DENKO's exploratory phase. Not built, not in active development, not for sale.";

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
              <Link href="/">Home</Link><span aria-hidden="true">/</span><span>Concept archive</span>
            </nav>
            <h1 className="fd-h1 fd-h1-s">Concept Archive</h1>
            <p className="fd-lede">
              {PRODUCTS.length} hardware concept visualizations from FUJIE DENKO&apos;s exploratory phase, kept for
              reference. They are AI-generated images, not photographs. None has been built or is in active
              development, none is for sale, and no specifications are claimed. Current work is on{" "}
              <Link href="/#development">electronic skin and embodied SNN research devices</Link>.
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

        <section id="film" className="fd-ssection" aria-labelledby="fd-film-h">
          <div className="fd-wrap">
            <div className="fd-shead">
              <h2 id="fd-film-h" className="fd-h2s">Archive film</h2>
              <p className="fd-shead-sub">The concept visualizations below, as one short film.</p>
            </div>
            <figure className="fd-film-frame">
              <video controls muted playsInline preload="none" poster="/video/fd-promo-poster.jpg" aria-describedby="fd-film-cap">
                <source src="/video/fd-promo-720p.mp4" type="video/mp4" />
              </video>
              <figcaption id="fd-film-cap" className="fd-mono">
                All devices shown are AI-generated concept visualizations · Not built, not tested, not for sale
              </figcaption>
            </figure>
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

      </main>
      <UpdatesBand />
      <SiteFooter />
    </div>
  );
}
