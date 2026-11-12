import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_IDENTITY } from "@/lib/philosophy";
import fdMark from "../../../public/denko/fd-mark.png";
import MobileMenu from "./MobileMenu";
import "./denko.css";

/* ─── Brand facts ──────────────────────────────────────────────────────────
 * Keep every public claim on this page inside what is true today:
 * research & prototyping stage, no products, customers, patents, staff,
 * facilities, certifications or funding.
 */

const CONTACT_EMAIL = SITE_IDENTITY.contactEmail;

/**
 * Registered legal name of the Japanese gōdō kaisha (合同会社) that operates
 * FUJIE DENKO. PLACEHOLDER: leave `null` until the registered name has been
 * confirmed against the commercial register. While `null`, no operating-entity
 * line is rendered anywhere on the page.
 */
const OPERATING_ENTITY_LEGAL_NAME: string | null = null;

const TITLE = "FUJIE DENKO | Energy & Computational Hardware";
const DESCRIPTION =
  "FUJIE DENKO is a Japan-based hardware R&D initiative exploring energy harvesting, embodied spiking neural networks, and next-generation physical infrastructure.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "https://www.platodesignlab.com/denko" },
  openGraph: {
    type: "website",
    url: "https://www.platodesignlab.com/denko",
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

const NAV = [
  { label: "Technology", href: "#technology" },
  { label: "Development", href: "#development" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
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

/* ─── Hero drawing ────────────────────────────────────────────────────────
 * Technical-drawing style schematic of a conceptual signal/energy chain.
 * Purely illustrative of the research areas; it depicts no built product.
 */
function SystemSchematic() {
  const blocks = [
    { x: 8, label: "SOURCE", sub: "ambient" },
    { x: 128, label: "CONVERT", sub: "harvest" },
    { x: 248, label: "STORE", sub: "buffer" },
    { x: 368, label: "COMPUTE", sub: "SNN" },
    { x: 488, label: "ACT", sub: "control" },
  ];
  return (
    <svg
      className="fd-schematic"
      viewBox="0 0 600 150"
      role="img"
      aria-labelledby="fd-schem-title"
    >
      <title id="fd-schem-title">
        Conceptual system chain: source, conversion, storage, spiking computation, and actuation, with a sensing feedback path.
      </title>
      {blocks.map((b, i) => (
        <g key={b.label}>
          <rect x={b.x} y={36} width={104} height={46} className={i === 3 ? "fd-s-block fd-s-accent" : "fd-s-block"} />
          <text x={b.x + 8} y={54} className="fd-s-label">{b.label}</text>
          <text x={b.x + 8} y={72} className="fd-s-sub">{b.sub}</text>
          <text x={b.x} y={26} className="fd-s-idx">{`B${i + 1}`}</text>
          {i < blocks.length - 1 && (
            <g>
              <line x1={b.x + 104} y1={59} x2={b.x + 120} y2={59} className="fd-s-line" />
              <path d={`M ${b.x + 115} 55 L ${b.x + 120} 59 L ${b.x + 115} 63`} className="fd-s-line" fill="none" />
            </g>
          )}
        </g>
      ))}
      {/* sensing feedback path */}
      <path d="M 540 82 L 540 116 L 420 116 L 420 88" className="fd-s-line fd-s-dash" fill="none" />
      <path d="M 416 93 L 420 87 L 424 93" className="fd-s-line" fill="none" />
      <text x={430} y={134} className="fd-s-sub">sensing feedback</text>
      <text x={8} y={134} className="fd-s-sub">FIG. 1 — CONCEPTUAL CHAIN · NOT A PRODUCT</text>
    </svg>
  );
}

export default function DenkoPage() {
  return (
    <div className="fd-root">
      <a href="#fd-main" className="fd-skip">Skip to content</a>

      {/* ─── Header ─────────────────────────────────────────────────────── */}
      <header className="fd-header">
        <div className="fd-wrap fd-header-inner">
          <a href="#top" className="fd-brand" aria-label="FUJIE DENKO — top of page">
            <Image src={fdMark} alt="" className="fd-brand-mark" priority sizes="56px" />
            <span className="fd-brand-word">FUJIE DENKO</span>
          </a>
          <nav aria-label="FUJIE DENKO" className="fd-nav">
            <ul>
              {NAV.map((n) => (
                <li key={n.href}><a href={n.href}>{n.label}</a></li>
              ))}
            </ul>
          </nav>
          <MobileMenu items={NAV} />
        </div>
      </header>

      <main id="fd-main">
        {/* ─── 00 Hero ───────────────────────────────────────────────────── */}
        <section id="top" className="fd-hero" aria-labelledby="fd-hero-h">
          <div className="fd-wrap fd-hero-grid">
            <div className="fd-hero-copy">
              <p className="fd-eyebrow fd-mono">FUJIE DENKO / JAPAN</p>
              <h1 id="fd-hero-h" className="fd-h1">Engineering physical systems.</h1>
              <p className="fd-hero-sub">
                <span>Energy Harvesting.</span>
                <span>Neuromorphic Computing.</span>
                <span>Next-Generation Hardware.</span>
              </p>
              <p className="fd-lede">
                FUJIE DENKO is a Japan-based hardware research and development initiative exploring the
                integration of physical energy systems, embodied computation, and computational infrastructure.
              </p>
              <div className="fd-actions">
                <a href="#technology" className="fd-btn fd-btn-primary">Explore Our Research</a>
                <a href="#contact" className="fd-btn fd-btn-ghost">Contact</a>
              </div>
            </div>

            <figure className="fd-plate" aria-label="FUJIE DENKO symbol and conceptual system drawing">
              <div className="fd-plate-head fd-mono">
                <span>DWG FD-000</span>
                <span>SYMBOL / SYSTEM</span>
              </div>
              <div className="fd-plate-logo">
                <span className="fd-tick fd-tick-tl" aria-hidden="true" />
                <span className="fd-tick fd-tick-tr" aria-hidden="true" />
                <span className="fd-tick fd-tick-bl" aria-hidden="true" />
                <span className="fd-tick fd-tick-br" aria-hidden="true" />
                <Image
                  src={fdMark}
                  alt="FUJIE DENKO FD symbol"
                  className="fd-plate-mark"
                  priority
                  sizes="(max-width: 900px) 70vw, 380px"
                />
              </div>
              <div className="fd-plate-schem">
                <SystemSchematic />
              </div>
              <figcaption className="fd-plate-foot fd-mono">
                <span>藤江電工</span>
                <span>Energy &amp; Computational Hardware</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ─── 01 Technology ─────────────────────────────────────────────── */}
        <section id="technology" className="fd-section" aria-labelledby="fd-tech-h">
          <div className="fd-wrap">
            <p className="fd-label fd-mono">01 / TECHNOLOGY</p>
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
            <p className="fd-label fd-mono">02 / DEVELOPMENT</p>
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

        {/* ─── 03 Research ───────────────────────────────────────────────── */}
        <section id="research" className="fd-section" aria-labelledby="fd-res-h">
          <div className="fd-wrap">
            <p className="fd-label fd-mono">03 / RESEARCH</p>
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
                <Link href="/research" className="fd-link">
                  Explore P/A Research <span aria-hidden="true">→</span>
                </Link>
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

        {/* ─── 04 Collaboration ──────────────────────────────────────────── */}
        <section id="contact" className="fd-section fd-collab" aria-labelledby="fd-col-h">
          <div className="fd-wrap">
            <p className="fd-label fd-mono">04 / COLLABORATION</p>
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
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("FUJIE DENKO inquiry")}`}
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

      {/* ─── Footer ───────────────────────────────────────────────────────── */}
      <footer className="fd-footer">
        <div className="fd-wrap fd-footer-grid">
          <div className="fd-footer-brand">
            <p className="fd-footer-name">FUJIE DENKO</p>
            <p>Energy &amp; Computational Hardware</p>
            <p className="fd-mono fd-footer-meta">Japan · Research &amp; Development</p>
            {OPERATING_ENTITY_LEGAL_NAME && (
              <p className="fd-footer-meta">Operated by {OPERATING_ENTITY_LEGAL_NAME}</p>
            )}
          </div>
          <nav aria-label="Footer">
            <ul className="fd-footer-links">
              {NAV.map((n) => (
                <li key={n.href}><a href={n.href}>{n.label}</a></li>
              ))}
              <li><Link href="/">Plato Design Lab</Link></li>
            </ul>
          </nav>
        </div>
        <div className="fd-wrap fd-footer-base fd-mono">
          <span>© 2026 FUJIE DENKO</span>
          <span>Research &amp; prototyping stage</span>
        </div>
      </footer>
    </div>
  );
}
