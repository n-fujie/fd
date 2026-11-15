import Image from "next/image";
import Link from "next/link";
import fdMark from "../../public/fd-mark.png";
import MobileMenu from "./MobileMenu";
import "./social.css";
import { NAV, OPERATING_ENTITY_LEGAL_NAME, PLATO_SITE, CONTACT_EMAIL, LEGAL_PATH, UPDATES_SUBJECT, COLLAB_SUBJECT, SOCIAL, mailto } from "./site";
import { STAGE_LABEL, categoryName, isPurchasable, type Product, type Stage } from "./catalog";

/** Site-wide notice: research stage, every result labelled. */
export function AnnounceBar() {
  return (
    <div className="fd-announce">
      <div className="fd-wrap fd-mono">
        Electronic skin &amp; embodied SNN research · Every result is labelled with its evidence level
      </div>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="fd-header">
      <div className="fd-wrap fd-header-inner">
        <Link href="/" className="fd-brand" aria-label="FUJIE DENKO — home">
          <Image src={fdMark} alt="" className="fd-brand-mark" priority sizes="56px" />
          <span className="fd-brand-word">FUJIE DENKO</span>
        </Link>
        <nav aria-label="FUJIE DENKO" className="fd-nav">
          <ul>
            {NAV.map((n) => (
              <li key={n.href}><Link href={n.href}>{n.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div className="fd-header-cta">
          <a href={mailto(COLLAB_SUBJECT)} className="fd-btn fd-btn-primary fd-btn-sm">Collaborate</a>
          <MobileMenu items={NAV} />
        </div>
      </div>
    </header>
  );
}

/** Research-updates band shown above the footer. */
export function UpdatesBand() {
  return (
    <section className="fd-updband" aria-labelledby="fd-upd-h">
      <div className="fd-wrap fd-updband-inner">
        <div>
          <h2 id="fd-upd-h" className="fd-h2s">Follow the research</h2>
          <p>Research notes, experiment status, and prototype progress, posted as they happen. Follow @fujiedenko or ask to be told by email.</p>
          <SocialLinks className="fd-social-band" />
        </div>
        <a href={mailto(UPDATES_SUBJECT)} className="fd-btn fd-btn-invert">Get updates</a>
      </div>
    </section>
  );
}

function SocialIcon({ id }: { id: "x" | "instagram" }) {
  if (id === "x") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path fill="currentColor" d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.77L17.75 3Zm-1.08 16.17h1.7L7.4 4.74H5.58l11.1 14.43Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Links to the official X and Instagram accounts. */
export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`fd-social ${className}`} aria-label="FUJIE DENKO on social media">
      {SOCIAL.map((s) => (
        <li key={s.id}>
          <a href={s.href} target="_blank" rel="noopener noreferrer me" aria-label={`FUJIE DENKO on ${s.label} (${s.handle})`}>
            <SocialIcon id={s.id} />
            <span>{s.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function SiteFooter() {
  return (
    <footer className="fd-footer">
      <div className="fd-wrap fd-footer-grid">
        <div className="fd-footer-brand">
          <p className="fd-footer-name">FUJIE DENKO</p>
          <p>Embodied SNN &amp; Electronic Skin Research</p>
          <p className="fd-mono fd-footer-meta">Independent Research &amp; Engineering · Tokyo, Japan</p>
          {OPERATING_ENTITY_LEGAL_NAME && (
            <p className="fd-footer-meta">Operated by {OPERATING_ENTITY_LEGAL_NAME}</p>
          )}
          <SocialLinks className="fd-social-footer" />
        </div>
        <nav aria-label="Research" className="fd-footer-col">
          <p className="fd-mono fd-footer-h">Research</p>
          <ul>
            <li><Link href="/#technology">Technology</Link></li>
            <li><Link href="/#research">Research</Link></li>
            <li><Link href="/#development">Development</Link></li>
            <li><Link href="/#methods">Methods &amp; evidence</Link></li>
          </ul>
        </nav>
        <nav aria-label="Company" className="fd-footer-col">
          <p className="fd-mono fd-footer-h">Company</p>
          <ul>
            <li><Link href="/#collaboration">Collaboration</Link></li>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/products">Concept archive</Link></li>
            <li><a href={PLATO_SITE}>Plato Design Lab</a></li>
          </ul>
        </nav>
        <nav aria-label="Contact" className="fd-footer-col">
          <p className="fd-mono fd-footer-h">Contact</p>
          <ul>
            <li><a href={mailto(COLLAB_SUBJECT)}>Research collaboration</a></li>
            <li><a href={mailto(UPDATES_SUBJECT)}>Research updates</a></li>
            <li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
          </ul>
        </nav>
      </div>
      <div className="fd-wrap fd-footer-base fd-mono">
        <span>© 2026 FUJIE DENKO</span>
        <span className="fd-footer-legal">
          <Link href={LEGAL_PATH}>Legal notice</Link>
          <Link href="/terms">Terms of sale</Link>
          <Link href="/privacy">Privacy</Link>
          <span>Research stage</span>
        </span>
      </div>
    </footer>
  );
}

export function StageBadge({ stage }: { stage: Stage }) {
  return (
    <span className={`fd-stage fd-stage-${stage} fd-mono`}>
      <span className="fd-stage-dot" aria-hidden="true" />
      {STAGE_LABEL[stage]}
    </span>
  );
}

export function PriceLine({ product }: { product: Product }) {
  if (isPurchasable(product)) {
    return <span className="fd-price">{product.price}</span>;
  }
  return <span className="fd-price fd-price-na">Not yet for sale</span>;
}

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  return (
    <li className="fd-pcard">
      <Link href={`/products/${product.slug}`} className="fd-pcard-link">
        <div className="fd-pcard-img">
          <Image
            src={product.image}
            alt={product.alt}
            placeholder="blur"
            priority={priority}
            sizes="(max-width: 560px) 100vw, (max-width: 960px) 50vw, 300px"
          />
          <StageBadge stage={product.stage} />
        </div>
        <div className="fd-pcard-body">
          <p className="fd-mono fd-pcard-cat">{categoryName(product.category)} · {product.ref}</p>
          <h3 className="fd-pcard-name">{product.name}</h3>
          <p className="fd-pcard-sum">{product.summary}</p>
          <p className="fd-pcard-foot">
            <PriceLine product={product} />
            <span className="fd-pcard-more" aria-hidden="true">View →</span>
          </p>
        </div>
      </Link>
    </li>
  );
}

export function ProductGrid({ products, priorityCount = 0 }: { products: Product[]; priorityCount?: number }) {
  return (
    <ul className="fd-pgrid">
      {products.map((p, i) => (
        <ProductCard key={p.slug} product={p} priority={i < priorityCount} />
      ))}
    </ul>
  );
}
