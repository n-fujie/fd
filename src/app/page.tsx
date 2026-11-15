import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnnounceBar, SiteHeader, SiteFooter, UpdatesBand, SocialLinks } from "./chrome";
import { PRODUCTS } from "./catalog";
import { CONTACT_EMAIL, PLATO_SITE, SITE_URL, SOCIAL, OPERATING_ENTITY_LEGAL_NAME, COLLAB_SUBJECT, mailto } from "./site";
import founderPortrait from "../../public/founder/naoto-fujie.webp";
import "./denko.css";
import "./film.css";
import "./research.css";

const TITLE = "FUJIE DENKO | Embodied SNN & Electronic Skin Research";
const DESCRIPTION =
  "FUJIE DENKO is an independent research and engineering initiative investigating tactile sensing, embodied spiking neural networks, and sensor reconfiguration.";

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

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FUJIE DENKO",
  alternateName: "藤江電工",
  description: DESCRIPTION,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/fd-logo.png`,
  email: CONTACT_EMAIL,
  knowsAbout: [
    "Embodied spiking neural networks",
    "Electronic skin",
    "Tactile sensing",
    "Neuromorphic sensor interfaces",
    "Sensor reconfiguration",
  ],
  sameAs: SOCIAL.map((s) => s.href),
  founder: {
    "@type": "Person",
    name: "Naoto Fujie",
    url: "https://www.platodesignlab.com",
    sameAs: ["https://orcid.org/0009-0003-0435-181X", "https://philpeople.org/profiles/naoto-fujie", "https://x.com/naotofujie"],
  },
  ...(OPERATING_ENTITY_LEGAL_NAME ? { parentOrganization: { "@type": "Organization", name: OPERATING_ENTITY_LEGAL_NAME } } : {}),
};

const img = (slug: string) => PRODUCTS.find((p) => p.slug === slug)!.image;

/* ─── Evidence levels: every item on this page carries exactly one. ──────── */
type Level = "theory" | "computed" | "records" | "proto" | "physical" | "open";
const LEVELS: { id: Level; name: string; note: string }[] = [
  { id: "theory", name: "Theoretical Research", note: "Stated as a model or design. No experiment yet." },
  { id: "computed", name: "Computationally Tested", note: "Run in simulation or code against stated criteria." },
  { id: "records", name: "Measured-Record Analysis", note: "Analysis of existing measured data recorded by others." },
  { id: "proto", name: "Physical Prototype in Development", note: "Our own hardware being built." },
  { id: "physical", name: "Physically Validated", note: "Measured on our own hardware against stated criteria." },
  { id: "open", name: "Unverified / Open Questions", note: "Not shown. Not claimed." },
];
const levelName = (id: Level) => LEVELS.find((l) => l.id === id)!.name;

function LevelTag({ level }: { level: Level }) {
  return <span className={`fd-lv fd-lv-${level} fd-mono`}>{levelName(level)}</span>;
}

/* ─── Core technologies ─────────────────────────────────────────────────── */
const TECH = [
  {
    no: "01",
    title: "Electronic Skin",
    lead: "Flexible tactile sensing interfaces, sensor arrays, and experimental transduction systems.",
    body: "Flexible electronic skin, tactile detection, fine electrodes, and iontronic materials, from material studies to the acquisition of tactile signals.",
    scope: ["Flexible arrays", "Fine electrodes", "Iontronics", "Signal acquisition"],
  },
  {
    no: "02",
    title: "Embodied SNN",
    lead: "Spiking computation coupled to sensing, temporal processing, and physical interaction.",
    body: "Spike representations of tactile signals, SNN internal state, temporal inference, and coupling to the body, studied experimentally and compared against conventional neural networks.",
    scope: ["Event encoding", "Internal state", "Temporal inference", "ANN comparison"],
  },
  {
    no: "03",
    title: "Observation & Sensor Revision",
    lead: "Measurement, reconfiguration, and the recovery of distinctions under changing sensing conditions.",
    body: "Built on Total Observation, Five-S, operational shapes, and the Ziran System: sensor replacement, changed observation conditions, loss and recovery of distinctions, and the continuity of measurement records.",
    scope: ["Sensor exchange", "Distinction loss / recovery", "Record continuity"],
  },
];

/* ─── Research (status text as supplied by the author; papers are linked
 *     only once a public copy can be verified). ─────────────────────────── */
const RESEARCH: { no: string; title: string; id: string; date?: string; scope: string[]; level: Level; status: string; note?: string }[] = [
  {
    no: "Research 01",
    title: "Total Observation of Tactile Operational Shapes",
    id: "TO-ES6",
    date: "November 2026",
    scope: ["Tactile records", "Event encoding", "Temporal distinction", "SNN comparison", "Sensor-configuration change"],
    level: "records",
    status: "Executed offline analysis of existing measured tactile records.",
    note: "A re-analysis of existing tactile data. It is not a physical demonstration of FUJIE DENKO electronic skin.",
  },
  {
    no: "Research 02",
    title: "Embodied Spiking Neural Networks under Reconfiguration",
    id: "FD-SNN R9",
    scope: ["SNN", "Sensor change", "Observation records", "State continuity", "Evidence conditions"],
    level: "computed",
    status: "Computational research and methodological validation.",
    note: "Physical hardware validation remains prospective.",
  },
  {
    no: "Research 03",
    title: "Embodied Sensor–XenoSNN Systems",
    id: "SBX-R8h",
    scope: ["Embodied SNN", "Electronic skin", "Observation revision", "Experimental body systems"],
    level: "computed",
    status: "Cumulative research framework with computational experiments and proposed physical validation.",
  },
];

/* ─── Experimental hardware (names as supplied; none built yet). ─────────── */
const DEVICES: { name: string; body: string; topics: string[]; status: string; level: Level; image?: string; alt?: string }[] = [
  {
    name: "Electronic Skin Research Patch",
    body: "An exchangeable tactile sensor patch with 4 to 8 channels.",
    topics: ["Tactile acquisition", "Sensor calibration", "Temporal signal processing", "Sensor replacement", "Physical measurement"],
    status: "Prototype Development Planned",
    level: "theory",
    image: "flexible-electrode-sheet",
    alt: "Concept visualization of a thin transparent film with round contact pads and printed traces, ending in a small connector.",
  },
  {
    name: "Embodied SNN Research Interface",
    body: "A research interface for comparing tactile input, event encoding, SNN inference, and temporal response.",
    topics: ["Tactile input", "Event encoding", "SNN inference", "Temporal response"],
    status: "Computational Research / Hardware Validation Pending",
    level: "computed",
  },
  {
    name: "Sensor Reconfiguration Test Platform",
    body: "An experimental setup for testing how distinction and operation change under sensor exchange, rearrangement, disconnection, and recalibration.",
    topics: ["Sensor exchange", "Rearrangement", "Disconnection", "Recalibration"],
    status: "Research & Experimental Design",
    level: "theory",
    image: "stretchable-sensing-mat",
    alt: "Concept visualization of a flexible mesh sheet with a grid of round sensor nodes, an edge controller, and corner strap anchors.",
  },
];

const METHOD = ["Theory", "Computational Experiment", "Sensor Prototype", "Physical Measurement", "Comparative Evaluation", "Revision"];

const NOT_CLAIMED = [
  "Energy savings from spiking computation",
  "An inference advantage for our SNN methods",
  "Self-revising capability of sensor materials",
  "Any measured performance figure for FUJIE DENKO hardware",
];

const SERVICES = [
  { name: "Collaborative Research", body: "Joint studies on tactile sensing, spiking computation, and embodied systems." },
  { name: "Experimental Prototyping", body: "Research-grade sensing prototypes built for a defined experiment." },
  { name: "Custom Sensing Systems", body: "Sensor layouts, acquisition, and encoding for a specific setup." },
  { name: "Computational Research", body: "Simulation, re-analysis of measured records, and SNN comparison studies." },
  { name: "Proof-of-Concept Development", body: "Scoped work to test whether an idea produces a measurable difference." },
];

const FOUNDER_LINKS = [
  { label: "Research website", href: "https://www.platodesignlab.com/about" },
  { label: "PhilPeople", href: "https://philpeople.org/profiles/naoto-fujie" },
  { label: "ORCID", href: "https://orcid.org/0009-0003-0435-181X" },
  { label: "X @naotofujie", href: "https://x.com/naotofujie" },
];

/** Signal path of the SNN research interface (a diagram, not a device image). */
function SnnDiagram() {
  const steps = [["Tactile", "input"], ["Event", "encoding"], ["SNN", "inference"], ["Temporal", "response"]];
  return (
    <svg viewBox="0 0 400 240" role="img" aria-label="Diagram: tactile input, event encoding, SNN inference, temporal response" className="fd-dev-diagram">
      <defs>
        <marker id="fd-arrow" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L8 4 L0 8 z" fill="#155EEF" />
        </marker>
      </defs>
      <rect width="400" height="240" fill="#F4F5F7" />
      {steps.map(([a, b], i) => (
        <g key={a} transform={`translate(${18 + i * 94} 70)`}>
          <rect width="78" height="56" fill="#fff" stroke="#111" strokeWidth="1.5" />
          <text x="39" y="25" textAnchor="middle" fontSize="10" fontFamily="ui-monospace, Menlo, monospace" fill="#111">{a}</text>
          <text x="39" y="39" textAnchor="middle" fontSize="10" fontFamily="ui-monospace, Menlo, monospace" fill="#111">{b}</text>
          {i < steps.length - 1 && <path d="M79 28 h12" stroke="#155EEF" strokeWidth="2" markerEnd="url(#fd-arrow)" />}
        </g>
      ))}
      <line x1="120" x2="280" y1="172" y2="172" stroke="#6B7280" />
      {[0, 1, 3, 4, 7, 8, 9, 12, 13, 15].map((k) => (
        <line key={k} x1={124 + k * 10} x2={124 + k * 10} y1="172" y2={k % 3 === 0 ? 152 : 160} stroke="#155EEF" strokeWidth="2" />
      ))}
      <text x="200" y="200" textAnchor="middle" fontSize="10" fontFamily="ui-monospace, Menlo, monospace" fill="#6B7280">SPIKE EVENTS · ILLUSTRATIVE</text>
    </svg>
  );
}

export default function Home() {
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
              <p className="fd-eyebrow fd-mono">FUJIE DENKO / 藤江電工 · Independent Research &amp; Engineering</p>
              <h1 id="fd-hero-h" className="fd-h1">Embodied Intelligence, From the Sensor Up.</h1>
              <p className="fd-hero-sub">
                <span>Electronic Skin &amp; Embodied Spiking Neural Networks</span>
              </p>
              <p className="fd-lede">
                FUJIE DENKO is an independent research and engineering initiative investigating tactile sensing,
                embodied spiking neural networks, and sensor reconfiguration.
              </p>
              <p className="fd-lede">
                Our work connects theoretical research, computational experiments, and the development of physical
                sensing prototypes.
              </p>
              <div className="fd-actions">
                <a href="#research" className="fd-btn fd-btn-primary">Explore Research</a>
                <a href={mailto(COLLAB_SUBJECT)} className="fd-btn fd-btn-ghost">Research Collaboration</a>
              </div>
            </div>
            <figure className="fd-shero-img">
              <Image
                src={img("clip-on-fingertip-sensors")}
                alt="Concept visualization of four clear fingertip sensors on a hand, each with an internal circuit and a black clip held by a fabric strap."
                placeholder="blur"
                priority
                sizes="(max-width: 960px) 100vw, 640px"
              />
              <figcaption className="fd-mono">Concept visualization · AI-generated · not a photograph of a built device</figcaption>
            </figure>
          </div>
        </section>

        {/* ─── 01 Technology ─────────────────────────────────────────────── */}
        <section id="technology" className="fd-section" aria-labelledby="fd-tech-h">
          <div className="fd-wrap">
            <p className="fd-label fd-mono">01 / TECHNOLOGY</p>
            <h2 id="fd-tech-h" className="fd-h2">Research &amp; Technology</h2>
            <ol className="fd-cards">
              {TECH.map((t) => (
                <li key={t.no} className="fd-card">
                  <div className="fd-card-head fd-mono">
                    <span className="fd-card-no">{t.no}</span>
                  </div>
                  <h3 className="fd-h3">{t.title}</h3>
                  <p className="fd-card-body fd-card-lead">{t.lead}</p>
                  <p className="fd-card-body">{t.body}</p>
                  <ul className="fd-card-scope fd-mono" aria-label="Scope">
                    {t.scope.map((s) => <li key={s}>{s}</li>)}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─── 02 Research ───────────────────────────────────────────────── */}
        <section id="research" className="fd-section fd-section-tint" aria-labelledby="fd-res-h">
          <div className="fd-wrap">
            <p className="fd-label fd-mono">02 / RESEARCH</p>
            <div className="fd-rhead">
              <h2 id="fd-res-h" className="fd-h2">Research-Driven Engineering</h2>
              <div>
                <p className="fd-body">
                  Our development process begins with explicit theoretical models, reproducible computational
                  experiments, and physical validation.
                </p>
                <p className="fd-body">
                  We investigate the conditions under which sensing, spiking computation, and embodied interaction
                  produce measurable differences.
                </p>
              </div>
            </div>
            <ol className="fd-rlist">
              {RESEARCH.map((r) => (
                <li key={r.id} className="fd-ritem">
                  <div className="fd-ritem-meta fd-mono">
                    <span>{r.no}</span>
                    <span className="fd-ritem-id">{r.id}{r.date ? ` — ${r.date}` : ""}</span>
                  </div>
                  <div className="fd-ritem-main">
                    <h3 className="fd-ritem-h">{r.title}</h3>
                    <ul className="fd-chips fd-mono" aria-label="Topics">
                      {r.scope.map((s) => <li key={s}>{s}</li>)}
                    </ul>
                  </div>
                  <div className="fd-ritem-status">
                    <LevelTag level={r.level} />
                    <p>{r.status}</p>
                    {r.note && <p className="fd-ritem-note">{r.note}</p>}
                  </div>
                </li>
              ))}
            </ol>
            <p className="fd-legend fd-mono">
              Papers are linked here once a public copy is available ·{" "}
              <a href={`${PLATO_SITE}/research`}>Related research at Plato Design Lab ↗</a>
            </p>
          </div>
        </section>

        {/* ─── 03 Development ────────────────────────────────────────────── */}
        <section id="development" className="fd-section" aria-labelledby="fd-dev-h">
          <div className="fd-wrap">
            <p className="fd-label fd-mono">03 / DEVELOPMENT</p>
            <div className="fd-rhead">
              <h2 id="fd-dev-h" className="fd-h2">Experimental Hardware Development</h2>
              <p className="fd-body">
                Three research devices are being designed to test the questions above. None has been built yet.
                Images are concept visualizations, not photographs.
              </p>
            </div>
            <ul className="fd-devs">
              {DEVICES.map((d) => (
                <li key={d.name} className="fd-dev">
                  <figure className="fd-dev-fig">
                    {d.image ? (
                      <Image src={img(d.image)} alt={d.alt!} placeholder="blur" sizes="(max-width: 960px) 100vw, 400px" />
                    ) : (
                      <SnnDiagram />
                    )}
                    <figcaption className="fd-mono">{d.image ? "Concept visualization" : "Diagram"}</figcaption>
                  </figure>
                  <h3 className="fd-dev-h">{d.name}</h3>
                  <p className="fd-dev-body">{d.body}</p>
                  <ul className="fd-chips fd-mono" aria-label="Research topics">
                    {d.topics.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                  <dl className="fd-dev-status">
                    <dt className="fd-mono">Status</dt>
                    <dd>{d.status}</dd>
                  </dl>
                </li>
              ))}
            </ul>
            <p className="fd-legend fd-mono">
              Earlier hardware concept visualizations are kept in the <Link href="/products">Concept Archive →</Link>
            </p>
          </div>
        </section>

        {/* ─── 04 Methods & evidence ─────────────────────────────────────── */}
        <section id="methods" className="fd-section fd-section-tint" aria-labelledby="fd-met-h">
          <div className="fd-wrap">
            <p className="fd-label fd-mono">04 / EXPERIMENTAL METHODS</p>
            <h2 id="fd-met-h" className="fd-h2">From Theory to Physical Validation</h2>
            <ol className="fd-flow fd-mono" aria-label="Research method">
              {METHOD.map((m, i) => (
                <li key={m}><span>{String(i + 1).padStart(2, "0")}</span>{m}</li>
              ))}
            </ol>
            <div className="fd-ev-split">
              <div>
                <h3 className="fd-h3">Where each result stands</h3>
                <p className="fd-body">
                  Every item on this site carries one evidence level. Negative results are published within the range
                  that was actually tested.
                </p>
                <table className="fd-ev">
                  <caption className="fd-mono">Evidence levels · current items</caption>
                  <tbody>
                    {LEVELS.filter((l) => l.id !== "open").map((l) => {
                      const items = [
                        ...RESEARCH.filter((r) => r.level === l.id).map((r) => r.id),
                        ...DEVICES.filter((d) => d.level === l.id).map((d) => d.name),
                      ];
                      return (
                        <tr key={l.id}>
                          <th scope="row"><LevelTag level={l.id} /><span className="fd-ev-note">{l.note}</span></th>
                          <td>{items.length ? items.join(" · ") : <span className="fd-ev-none">None yet</span>}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="fd-open">
                <LevelTag level="open" />
                <h3 className="fd-h3">Not demonstrated, not claimed</h3>
                <ul>
                  {NOT_CLAIMED.map((n) => <li key={n}>{n}</li>)}
                </ul>
                <p className="fd-note">
                  These remain open research questions. They are not presented as achieved technology anywhere on this
                  site.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 05 Collaboration ──────────────────────────────────────────── */}
        <section id="collaboration" className="fd-section" aria-labelledby="fd-col-h">
          <div className="fd-wrap fd-collab">
            <div>
              <p className="fd-label fd-mono">05 / COLLABORATION</p>
              <h2 id="fd-col-h" className="fd-h2">Research Collaboration &amp; Custom Development</h2>
              <p className="fd-body">
                FUJIE DENKO welcomes research-oriented inquiries concerning embodied spiking systems, electronic skin,
                tactile sensing, experimental instrumentation, and collaborative prototype development.
              </p>
              <p className="fd-body">
                Our work centres on research, design, and experiment. Material processing and circuit-board
                manufacturing are commissioned from external suppliers as each project requires.
              </p>
              <div className="fd-actions">
                <a href={mailto(COLLAB_SUBJECT)} className="fd-btn fd-btn-primary">Start a research inquiry</a>
                <a href={mailto("Custom development inquiry")} className="fd-btn fd-btn-ghost">Custom development</a>
              </div>
            </div>
            <ul className="fd-svcs">
              {SERVICES.map((s, i) => (
                <li key={s.name}>
                  <span className="fd-mono">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="fd-svc-h">{s.name}</h3>
                    <p>{s.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ─── 06 About ──────────────────────────────────────────────────── */}
        <section id="about" className="fd-section fd-section-tint" aria-labelledby="fd-abt-h">
          <div className="fd-wrap fd-about">
            <div>
              <p className="fd-label fd-mono">06 / ABOUT</p>
              <h2 id="fd-abt-h" className="fd-h2">Independent Research &amp; Engineering</h2>
              <p className="fd-body">
                FUJIE DENKO conducts independent research at the intersection of tactile sensing, spiking
                computation, and embodied systems.
              </p>
              <p className="fd-body">
                Our work draws on the theoretical and experimental programmes of Naoto Fujie, including
                operational-shape analysis, Total Observation, XenoSNN, and the Ziran System.
              </p>
              <p className="fd-body">
                Research publications, computational experiments, and hardware development are presented according
                to their respective levels of validation.
              </p>
              <p className="fd-body fd-about-roles">
                Naoto Fujie&apos;s philosophical research is published through P/A Institute and{" "}
                <a href={PLATO_SITE}>Plato Design Lab</a>. FUJIE DENKO is the separate engineering initiative in which
                sensing and computation are studied through experiments and hardware.
                {OPERATING_ENTITY_LEGAL_NAME ? ` FUJIE DENKO is operated by ${OPERATING_ENTITY_LEGAL_NAME}.` : ""}
              </p>
            </div>
            <aside className="fd-about-person" aria-label="Founder">
              <div className="fd-about-photo">
                <Image src={founderPortrait} alt="Portrait of Naoto Fujie in front of bookshelves" placeholder="blur" sizes="(max-width: 960px) 100vw, 420px" />
              </div>
              <p className="fd-mono fd-about-k">Founder</p>
              <p className="fd-about-name">Naoto Fujie</p>
              <p className="fd-about-meta">Independent researcher · Founder of P/A Institute · Representative, Godo Kaisha TERRA</p>
              <ul className="fd-founder-links">
                {FOUNDER_LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} target="_blank" rel="noopener noreferrer">{l.label} <span aria-hidden="true">↗</span></a>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {/* ─── 07 Contact ────────────────────────────────────────────────── */}
        <section id="contact" className="fd-section" aria-labelledby="fd-con-h">
          <div className="fd-wrap fd-contact">
            <div>
              <p className="fd-label fd-mono">07 / CONTACT</p>
              <h2 id="fd-con-h" className="fd-h2">Contact</h2>
              <p className="fd-body">
                For collaborative research, experimental prototyping, or questions about our work, write to us. We
                reply by email.
              </p>
            </div>
            <div className="fd-contact-box">
              <a href={mailto(COLLAB_SUBJECT)} className="fd-email-big">{CONTACT_EMAIL}</a>
              <ul className="fd-contact-routes">
                <li><a href={mailto(COLLAB_SUBJECT)}>Research collaboration →</a></li>
                <li><a href={mailto("Custom development inquiry")}>Custom development →</a></li>
                <li><a href={mailto("General inquiry")}>General inquiry →</a></li>
              </ul>
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
