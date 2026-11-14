import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnnounceBar, SiteHeader, SiteFooter, ProductGrid, UpdatesBand, SocialLinks } from "./chrome";
import { CATEGORIES, HERO_IMAGE, PRODUCTS, productsIn, type CategoryId } from "./catalog";
import { CONTACT_EMAIL, PLATO_SITE, SITE_URL, SOCIAL, OPERATING_ENTITY_LEGAL_NAME, mailto } from "./site";
import founderPortrait from "../../public/founder/naoto-fujie.webp";
import bookOperationalNihilism from "../../public/founder/operational-nihilism.webp";
import "./denko.css";
import "./film.css";

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
    site: "@fujiedenko",
    creator: "@fujiedenko",
    title: TITLE,
    description: DESCRIPTION,
  },
};

/* Organization structured data: links the site to its official accounts. */
const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FUJIE DENKO",
  alternateName: "藤江電工",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/fd-logo.png`,
  email: CONTACT_EMAIL,
  sameAs: SOCIAL.map((s) => s.href),
  founder: {
    "@type": "Person",
    name: "Naoto Fujie",
    jobTitle: "Philosopher",
    url: "https://www.platodesignlab.com",
    sameAs: ["https://orcid.org/0009-0003-0435-181X", "https://philpeople.org/profiles/naoto-fujie", "https://x.com/naotofujie"],
  },
  ...(OPERATING_ENTITY_LEGAL_NAME ? { parentOrganization: { "@type": "Organization", name: OPERATING_ENTITY_LEGAL_NAME } } : {}),
};

/* Intended uses (design intent, not existing customers or deployments). */
const APPLICATIONS: { title: string; body: string; cat: CategoryId; img: string }[] = [
  {
    title: "Research labs",
    body: "Platforms for experiments that couple energy harvesting, tactile sensing, and spiking-network control.",
    cat: "robotics",
    img: "tactile-robotic-hand",
  },
  {
    title: "Teaching & prototyping",
    body: "Hardware with exposed mechanisms and electronics, designed to be opened, inspected, and measured.",
    cat: "energy",
    img: "hand-crank-generator",
  },
  {
    title: "Built environment",
    body: "Building-scale sensing and control, from instrumented facades to multi-channel observation racks.",
    cat: "systems",
    img: "instrumented-louver-facade",
  },
];

const ORDERING = [
  { title: "Get notified", body: "Tell us which products interest you. We write when one moves to pre-order or sale." },
  { title: "Order online", body: "A released product's page shows its price and a Buy button. Payment is handled securely by Stripe." },
  { title: "Shipped from Tokyo", body: "Orders ship from Japan. Import duties and taxes in your country may apply." },
];

/* Published profiles (from platodesignlab.com). */
const FOUNDER_LINKS = [
  { label: "Research website", href: "https://www.platodesignlab.com/about" },
  { label: "PhilPeople", href: "https://philpeople.org/profiles/naoto-fujie" },
  { label: "ORCID", href: "https://orcid.org/0009-0003-0435-181X" },
  { label: "X @naotofujie", href: "https://x.com/naotofujie" },
];

/* Books by the founder (titles and links as listed on platodesignlab.com). */
const BOOKS = [
  { title: "Operational Nihilism", year: "2026", href: "https://amzn.eu/d/08W4W72H", cover: bookOperationalNihilism },
  { title: "Complete Animism", year: "2026", href: "https://amzn.eu/d/07PQFXz0", cover: null },
  { title: "The Work That Remains", year: "2026", href: "https://amzn.eu/d/0iCthJqY", cover: null },
  { title: "P/A — The Dictionary of Operational Philosophy", year: "2026", href: "https://amzn.eu/d/01SMS6W7", cover: null },
];

const CONTACT_ROUTES = [
  {
    kicker: "Product inquiries",
    title: "Ask about a product or its availability.",
    body: "Questions about a listing, its development stage, or release timing. We reply by email.",
    cta: "Send a product inquiry",
    subject: "Product inquiry",
    img: "tactile-sensing-module",
  },
  {
    kicker: "Research & business collaboration",
    title: "Work with us on physical systems.",
    body: "Research collaboration, physical prototyping, experimental hardware, and engineering partnerships, in Japan and internationally.",
    cta: "Start a collaboration",
    subject: "Collaboration inquiry",
    img: "tactile-robotic-hand",
  },
];

const FEATURED = [
  "research-rack-modules",
  "legged-platform-transparent",
  "humanoid-test-rig",
  "generation-module-large",
  "tactile-robotic-hand",
  "bipedal-platform",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }} />
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

        {/* ─── Film ──────────────────────────────────────────────────────── */}
        <section id="film" className="fd-film" aria-labelledby="fd-film-h">
          <div className="fd-wrap">
            <p className="fd-label fd-mono">FILM</p>
            <h2 id="fd-film-h" className="fd-film-h">The FD lineup in 73 seconds</h2>
            <figure className="fd-film-frame">
              <video
                controls
                muted
                playsInline
                preload="none"
                poster="/video/fd-promo-poster.jpg"
                aria-describedby="fd-film-cap"
              >
                <source src="/video/fd-promo-720p.mp4" type="video/mp4" />
              </video>
              <figcaption id="fd-film-cap" className="fd-mono">
                All devices shown are concept renderings · Not built, not tested, not for sale
              </figcaption>
            </figure>
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

        {/* ─── Categories ────────────────────────────────────────────────── */}
        <section className="fd-ssection" aria-labelledby="fd-cat-h">
          <div className="fd-wrap">
            <div className="fd-shead">
              <h2 id="fd-cat-h" className="fd-h2s">Browse by category</h2>
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

        {/* ─── 02 Applications ──────────────────────────────────────────── */}
        <section id="applications" className="fd-ssection" aria-labelledby="fd-app-h">
          <div className="fd-wrap">
            <p className="fd-label fd-mono">02 / APPLICATIONS</p>
            <div className="fd-shead">
              <h2 id="fd-app-h" className="fd-h2s">Built for</h2>
              <p className="fd-shead-sub">Intended uses of the lineup.</p>
            </div>
            <ul className="fd-apps">
              {APPLICATIONS.map((a) => {
                const p = PRODUCTS.find((x) => x.slug === a.img)!;
                return (
                  <li key={a.title}>
                    <Link href={`/products#${a.cat}`} className="fd-app">
                      <div className="fd-app-img">
                        <Image src={p.image} alt="" placeholder="blur" sizes="(max-width: 960px) 100vw, 400px" />
                      </div>
                      <h3 className="fd-app-h">{a.title}</h3>
                      <p>{a.body}</p>
                      <span className="fd-app-more">See products →</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ─── 01 Technology ─────────────────────────────────────────────── */}
        <section id="technology" className="fd-section" aria-labelledby="fd-tech-h">
          <div className="fd-wrap">
            <p className="fd-label fd-mono">03 / TECHNOLOGY</p>
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
            <p className="fd-label fd-mono">04 / DEVELOPMENT</p>
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

        {/* ─── 05 Ordering ───────────────────────────────────────────────── */}
        <section id="ordering" className="fd-ssection fd-ssection-tint" aria-labelledby="fd-ord-h">
          <div className="fd-wrap">
            <p className="fd-label fd-mono">05 / ORDERING</p>
            <div className="fd-shead">
              <h2 id="fd-ord-h" className="fd-h2s">How ordering works</h2>
              <Link href="/legal" className="fd-shead-link">Payment, shipping &amp; returns →</Link>
            </div>
            <ol className="fd-steps">
              {ORDERING.map((o, i) => (
                <li key={o.title}>
                  <span className="fd-mono fd-step-no">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="fd-step-h">{o.title}</h3>
                  <p>{o.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─── 04 Research ───────────────────────────────────────────────── */}
        <section id="research" className="fd-section" aria-labelledby="fd-res-h">
          <div className="fd-wrap">
            <p className="fd-label fd-mono">06 / RESEARCH</p>
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

        {/* ─── Founder (XELA-style founder block) ─────────────────────────── */}
        <section id="founder" className="fd-founder" aria-labelledby="fd-fnd-h">
          <div className="fd-wrap">
            <figure className="fd-founder-photo">
              <Image
                src={founderPortrait}
                alt="Portrait of Naoto Fujie in front of bookshelves"
                placeholder="blur"
                sizes="(max-width: 1240px) 100vw, 1144px"
              />
              <figcaption className="fd-founder-over">
                <p className="fd-label fd-mono">FOUNDER</p>
                <h2 id="fd-fnd-h" className="fd-founder-name">Naoto Fujie</h2>
                <p className="fd-founder-role">Philosopher</p>
              </figcaption>
            </figure>
          </div>
          <div className="fd-wrap fd-founder-grid">
            <div className="fd-founder-id">
              <p className="fd-mono fd-founder-meta">
                Founder of P/A Institute · Representative, Godo Kaisha TERRA
              </p>
              <ul className="fd-founder-links">
                {FOUNDER_LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} target="_blank" rel="noopener noreferrer">{l.label} <span aria-hidden="true">↗</span></a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="fd-founder-text">
              <p className="fd-founder-lead">
                FUJIE DENKO is a philosopher&apos;s hardware company.
              </p>
              <p>
                Naoto Fujie is a philosopher and developer working as an independent researcher. Fujie&apos;s
                research programmes, including Operational-Shape Realism, Non-Closure Realism, Xenoscience, and
                the Ziran System, treat physical, biological, computational, and institutional reality as an open
                field of operations rather than a set of fixed categories.
              </p>
              <p>
                FUJIE DENKO is where that work meets hardware: energy, sensing, and computation approached as
                physical operations, to be examined in built systems. Theoretical proposals and verified
                engineering results are kept explicitly apart.
              </p>
              <div className="fd-books">
                <p className="fd-mono fd-books-h">Books by Naoto Fujie</p>
                <div className="fd-books-grid">
                  {BOOKS.filter((b) => b.cover).map((b) => (
                    <a key={b.title} href={b.href} target="_blank" rel="noopener noreferrer" className="fd-book-feature">
                      <Image src={b.cover!} alt={`Cover of ${b.title} by Naoto Fujie`} placeholder="blur" sizes="160px" />
                      <span className="fd-book-title">{b.title}</span>
                      <span className="fd-mono fd-book-meta">{b.year} · Amazon ↗</span>
                    </a>
                  ))}
                  <ul className="fd-book-list">
                    {BOOKS.filter((b) => !b.cover).map((b) => (
                      <li key={b.title}>
                        <a href={b.href} target="_blank" rel="noopener noreferrer">
                          <span className="fd-book-title">{b.title}</span>
                          <span className="fd-mono fd-book-meta">{b.year} · Amazon ↗</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 07 Custom development (XELA-style customise band) ─────────── */}
        <section id="custom" className="fd-custom" aria-labelledby="fd-cus-h">
          <div className="fd-wrap fd-custom-grid">
            <div>
              <p className="fd-label fd-mono">07 / CUSTOM DEVELOPMENT</p>
              <h2 id="fd-cus-h" className="fd-h2s">Hardware shaped around your application.</h2>
              <p className="fd-body">
                Tell us what you need to generate, sense, or control. We can discuss form factor, sensing
                channels, energy constraints, and how the system connects to your setup, as part of our
                development work.
              </p>
              <a href={mailto("Custom development inquiry")} className="fd-btn fd-btn-primary">Discuss custom development</a>
            </div>
            <figure className="fd-custom-img">
              <Image src={PRODUCTS.find((p) => p.slug === "research-rack-modules")!.image} alt="" placeholder="blur" sizes="(max-width: 960px) 100vw, 600px" />
              <figcaption className="fd-mono">Concept rendering</figcaption>
            </figure>
          </div>
        </section>

        {/* ─── 08 Contact: two routes (inquiries / collaboration) ─────────── */}
        <section id="contact" className="fd-ssection fd-ssection-tint" aria-labelledby="fd-col-h">
          <div className="fd-wrap">
            <p className="fd-label fd-mono">08 / CONTACT</p>
            <h2 id="fd-col-h" className="fd-h2s fd-contact-h">Building the next generation of physical systems.</h2>
            <ul className="fd-routes">
              {CONTACT_ROUTES.map((r) => {
                const p = PRODUCTS.find((x) => x.slug === r.img)!;
                return (
                  <li key={r.title}>
                    <a href={mailto(r.subject)} className="fd-route">
                      <span className="fd-mono fd-route-k">{r.kicker}</span>
                      <h3 className="fd-route-h">{r.title}</h3>
                      <p>{r.body}</p>
                      <div className="fd-route-img">
                        <Image src={p.image} alt="" placeholder="blur" sizes="(max-width: 960px) 100vw, 600px" />
                      </div>
                      <span className="fd-route-cta">{r.cta} <span aria-hidden="true">→</span></span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="fd-contact-foot">
              <a href={`mailto:${CONTACT_EMAIL}`} className="fd-mono fd-email">{CONTACT_EMAIL}</a>
              <SocialLinks />
            </div>
          </div>
        </section>
      </main>

      <UpdatesBand />
      <SiteFooter />
    </div>
  );
}
