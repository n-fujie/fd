import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnnounceBar, SiteHeader, SiteFooter, ProductGrid } from "./chrome";
import { CATEGORIES, HERO_IMAGE, PRODUCTS, productsIn } from "./catalog";
import { CONTACT_EMAIL, PLATO_SITE, SITE_URL, mailto } from "./site";
import "./denko.css";

const TITLE = "FUJIE DENKO | Energy & Computational Hardware";
const DESCRIPTION =
  "FUJIE DENKO is a Japan-based hardware R&D initiative exploring energy harvesting, embodied spiking neural networks, and next-generation physical infrastructure.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/`,
    siteName: "FUJIE DENKO",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const FEATURED = [
  "observation-rack",
  "tactile-robotic-hand",
  "generation-module-large",
  "humanoid-platform",
  "tactile-sensing-module",
  "legged-platform-articulated",
  "hand-crank-generator",
  "instrumented-louver-facade",
];

const TECHNOLOGIES = [
  {
    no: "01",
    code: "OEG",
    title: "Operational Energy Generation",
    body: "Research into adaptive energy harvesting systems and the physical conditions governing energy conversion, storage, and use.",
    scope: ["Conversion", "Storage", "Use"],
  },
  {
    no: "02",
    code: "E-SNN",
    title: "Embodied SNN",
    body: "Investigation of spiking neural networks coupled with physical sensors, energy constraints, and adaptive control.",
    scope: ["Sensing", "Spiking computation", "Control"],
  },
  {
    no: "03",
    code: "CI",
    title: "Computational Infrastructure",
    body: "Exploration of hardware architectures, data-efficient computation, and physical infrastructure for future computing systems.",
    scope: ["Architecture", "Efficiency", "Infrastructure"],
  },
];

const PROCESS = ["Theoretical research", "Computational modeling", "Physical prototyping", "Experimental verification"];

const RESEARCH_FRAMEWORKS = [
  "Operational-Shape Realism",
  "Ziran System",
  "Xenoscience",
  "Embodied Sensor–XenoSNN Systems",
];

export default function Home() {
  const featured = FEATURED.map((slug) => PRODUCTS.find((p) => p.slug === slug)!);
  return (
    <div className="fd-root">
      <a href="#fd-main" className="fd-skip">Skip to content</a>
      <AnnounceBar />
      <SiteHeader />

      <main id="fd-main">
        {/* ─── Hero ──────────────────────────────────────────────────────── */}
        <section id="top" className="fd-shero" aria-labelledby="fd-hero-h">
          <div className="fd-wrap fd-shero-grid">
            <div className="fd-shero-copy">
              <p className="fd-eyebrow fd-mono">FUJIE DENKO / JAPAN · FD LINEUP</p>
              <h1 id="fd-hero-h" className="fd-h1">Engineering physical systems.</h1>
              <p className="fd-hero-sub">
                <span>Energy Harvesting.</span>
                <span>Neuromorphic Computing.</span>
                <span>Next-Generation Hardware.</span>
              </p>
              <p className="fd-lede">
                Hardware developed in-house by FUJIE DENKO, from energy generation to embodied computation.
                The lineup is in development: every item is listed with its current stage.
              </p>
              <div className="fd-actions">
                <Link href="/products" className="fd-btn fd-btn-primary">View products</Link>
                <a href={mailto("FUJIE DENKO release updates")} className="fd-btn fd-btn-ghost">Get release updates</a>
              </div>
            </div>
            <figure className="fd-shero-img">
              <Image
                src={HERO_IMAGE}
                alt="Concept rendering of a white quadruped robot with a transparent top housing, a tactile sensing pad, and a cylindrical generator module, each marked with the FD symbol."
                placeholder="blur"
                priority
                sizes="(max-width: 960px) 100vw, 640px"
              />
              <figcaption className="fd-mono">Concept rendering · not a photograph</figcaption>
            </figure>
          </div>
        </section>

        {/* ─── Categories ────────────────────────────────────────────────── */}
        <section className="fd-ssection" aria-labelledby="fd-cat-h">
          <div className="fd-wrap">
            <div className="fd-shead">
              <h2 id="fd-cat-h" className="fd-h2s">Shop by category</h2>
              <Link href="/products" className="fd-shead-link">All products →</Link>
            </div>
            <ul className="fd-cats">
              {CATEGORIES.map((c) => {
                const items = productsIn(c.id);
                return (
                  <li key={c.id}>
                    <Link href={`/products#${c.id}`} className="fd-cat">
                      <div className="fd-cat-img">
                        <Image src={items[0].image} alt="" placeholder="blur" sizes="(max-width: 560px) 50vw, 300px" />
                      </div>
                      <div className="fd-cat-body">
                        <span className="fd-cat-name">{c.name}</span>
                        <span className="fd-mono fd-cat-count">{items.length} items</span>
                      </div>
                      <p className="fd-cat-blurb">{c.blurb}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ─── 01 Lineup ─────────────────────────────────────────────────── */}
        <section id="products" className="fd-ssection fd-ssection-tint" aria-labelledby="fd-line-h">
          <div className="fd-wrap">
            <p className="fd-label fd-mono">01 / LINEUP</p>
            <div className="fd-shead">
              <h2 id="fd-line-h" className="fd-h2s">In development</h2>
              <Link href="/products" className="fd-shead-link">View all {PRODUCTS.length} →</Link>
            </div>
            <ProductGrid products={featured} />
            <p className="fd-catalog-note">
              <strong>About this catalog.</strong> Images are concept renderings, not photographs. None of the
              products shown has been built, tested, or offered for sale, and no specifications or performance
              are claimed. Each product page will show price and ordering only once that product is actually
              available.
            </p>
          </div>
        </section>

        {/* ─── 01 Technology ─────────────────────────────────────────────── */}
        <section id="technology" className="fd-section" aria-labelledby="fd-tech-h">
          <div className="fd-wrap">
            <p className="fd-label fd-mono">02 / TECHNOLOGY</p>
            <h2 id="fd-tech-h" className="fd-h2">Core technologies</h2>
            <ol className="fd-cards">
              {TECHNOLOGIES.map((t) => (
                <li key={t.no} className="fd-card">
                  <div className="fd-card-head fd-mono">
                    <span className="fd-card-no">{t.no}</span>
                    <span>{t.code}</span>
                  </div>
                  <h3 className="fd-h3">{t.title}</h3>
                  <p className="fd-card-body">{t.body}</p>
                  <ul className="fd-card-scope fd-mono" aria-label="Scope">
                    {t.scope.map((s) => <li key={s}>{s}</li>)}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─── 02 Development ────────────────────────────────────────────── */}
        <section id="development" className="fd-section" aria-labelledby="fd-dev-h">
          <div className="fd-wrap">
            <p className="fd-label fd-mono">03 / DEVELOPMENT</p>
            <div className="fd-split">
              <div>
                <h2 id="fd-dev-h" className="fd-h2">From theory to physical systems.</h2>
                <p className="fd-body">
                  Our development process connects theoretical research, computational modeling, physical
                  prototyping, and experimental verification.
                </p>
                <p className="fd-body">
                  We investigate how energy, computation, sensing, and physical operations can be integrated
                  under explicit resource constraints.
                </p>
                <ol className="fd-process fd-mono" aria-label="Development process">
                  {PROCESS.map((p, i) => (
                    <li key={p}><span>{String(i + 1).padStart(2, "0")}</span>{p}</li>
                  ))}
                </ol>
              </div>

              <div className="fd-spec" role="group" aria-labelledby="fd-spec-h">
                <div className="fd-spec-head">
                  <span className="fd-mono">CURRENT STATUS</span>
                  <span className="fd-status fd-mono">
                    <span className="fd-status-dot" aria-hidden="true" />
                    RESEARCH &amp; PROTOTYPING
                  </span>
                </div>
                <h3 id="fd-spec-h" className="fd-spec-id">FD-01</h3>
                <dl className="fd-dl">
                  <div>
                    <dt className="fd-mono">Initiative</dt>
                    <dd>Prototype initiative</dd>
                  </div>
                  <div>
                    <dt className="fd-mono">Scope</dt>
                    <dd>Operational Energy Generation &amp; Embodied SNN</dd>
                  </div>
                  <div>
                    <dt className="fd-mono">Status</dt>
                    <dd>Concept Development / Physical Validation Pending</dd>
                  </div>
                  <div>
                    <dt className="fd-mono">Availability</dt>
                    <dd>Not a product. Not available for sale.</dd>
                  </div>
                </dl>
                <p className="fd-note">
                  FD-01 is at the concept-development stage. No power-generation output, energy-efficiency
                  figure, or SNN performance advantage has been experimentally verified, and none is claimed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 04 Research ───────────────────────────────────────────────── */}
        <section id="research" className="fd-section" aria-labelledby="fd-res-h">
          <div className="fd-wrap">
            <p className="fd-label fd-mono">04 / RESEARCH</p>
            <div className="fd-split">
              <div>
                <h2 id="fd-res-h" className="fd-h2">Research-driven engineering.</h2>
                <p className="fd-body">
                  FUJIE DENKO draws on research developed through P/A Institute, including Operational-Shape
                  Realism, Ziran System, Xenoscience, and Embodied Sensor–XenoSNN Systems.
                </p>
                <p className="fd-body">
                  These frameworks inform experimental questions concerning physical operations, observation,
                  energy constraints, and system reconfiguration.
                </p>
                <p className="fd-body fd-body-strong">
                  Theoretical proposals and experimentally verified engineering performance are explicitly
                  distinguished.
                </p>
                <a href={`${PLATO_SITE}/research`} className="fd-link">
                  Explore P/A Research <span aria-hidden="true">→</span>
                </a>
              </div>
              <div>
                <ul className="fd-frameworks" aria-label="Research frameworks">
                  {RESEARCH_FRAMEWORKS.map((f, i) => (
                    <li key={f}>
                      <span className="fd-mono">{`R${String(i + 1).padStart(2, "0")}`}</span>
                      <span>{f}</span>
                      <span className="fd-mono fd-tag">Theory</span>
                    </li>
                  ))}
                </ul>
                <p className="fd-legend fd-mono">
                  “Theory” = theoretical or simulation-stage research. Not engineering performance data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 05 Collaboration ──────────────────────────────────────────── */}
        <section id="contact" className="fd-section fd-collab" aria-labelledby="fd-col-h">
          <div className="fd-wrap">
            <p className="fd-label fd-mono">05 / COLLABORATION</p>
            <h2 id="fd-col-h" className="fd-h2 fd-h2-wide">
              Building the next generation of physical systems.
            </h2>
            <div className="fd-collab-row">
              <p className="fd-body">
                We are interested in research collaboration, physical prototyping, experimental hardware
                development, and engineering partnerships in Japan and internationally.
              </p>
              <div className="fd-collab-cta">
                <a
                  href={mailto("FUJIE DENKO inquiry")}
                  className="fd-btn fd-btn-primary"
                >
                  Contact FUJIE DENKO
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`} className="fd-mono fd-email">{CONTACT_EMAIL}</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
