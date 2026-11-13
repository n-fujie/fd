import Image from "next/image";
import Link from "next/link";
import fdMark from "../../public/fd-mark.png";
import MobileMenu from "./MobileMenu";
import { NAV, OPERATING_ENTITY_LEGAL_NAME, PLATO_SITE, CONTACT_EMAIL, LEGAL_PATH, UPDATES_SUBJECT, mailto } from "./site";
import { CATEGORIES, STAGE_LABEL, categoryName, isPurchasable, type Product, type Stage } from "./catalog";

/** Site-wide notice: nothing in the catalog can be bought yet. */
export function AnnounceBar() {
  return (
    <div className="fd-announce">
      <div className="fd-wrap fd-mono">
        Pre-release catalog · Products are in development and not yet for sale
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
          <a href={mailto(UPDATES_SUBJECT)} className="fd-btn fd-btn-primary fd-btn-sm">Get updates</a>
          <MobileMenu items={[...NAV, { label: "Contact", href: "/#contact" }]} />
        </div>
      </div>
    </header>
  );
}

/** "Get notified" band shown above the footer (1X / Framework / BrainChip pattern). */
export function UpdatesBand() {
  return (
    <section className="fd-updband" aria-labelledby="fd-upd-h">
      <div className="fd-wrap fd-updband-inner">
        <div>
          <h2 id="fd-upd-h" className="fd-h2s">Get release updates</h2>
          <p>Hear when a product moves to prototype, pre-order, or sale. Tell us which items interest you.</p>
        </div>
        <a href={mailto(UPDATES_SUBJECT)} className="fd-btn fd-btn-invert">Get updates</a>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="fd-footer">
      <div className="fd-wrap fd-footer-grid">
        <div className="fd-footer-brand">
          <p className="fd-footer-name">FUJIE DENKO</p>
          <p>Energy &amp; Computational Hardware</p>
          <p className="fd-mono fd-footer-meta">Tokyo, Japan</p>
          {OPERATING_ENTITY_LEGAL_NAME && (
            <p className="fd-footer-meta">Operated by {OPERATING_ENTITY_LEGAL_NAME}</p>
          )}
        </div>
        <nav aria-label="Products" className="fd-footer-col">
          <p className="fd-mono fd-footer-h">Products</p>
          <ul>
            <li><Link href="/products">All products</Link></li>
            {CATEGORIES.map((c) => (
              <li key={c.id}><Link href={`/products#${c.id}`}>{c.name}</Link></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Company" className="fd-footer-col">
          <p className="fd-mono fd-footer-h">Company</p>
          <ul>
            <li><Link href="/#applications">Applications</Link></li>
            <li><Link href="/#technology">Technology</Link></li>
            <li><Link href="/#research">Research</Link></li>
            <li><a href={PLATO_SITE}>Plato Design Lab</a></li>
          </ul>
        </nav>
        <nav aria-label="Support" className="fd-footer-col">
          <p className="fd-mono fd-footer-h">Support</p>
          <ul>
            <li><Link href="/#ordering">How ordering works</Link></li>
            <li><Link href={`${LEGAL_PATH}#returns`}>Shipping &amp; returns</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
            <li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
          </ul>
        </nav>
      </div>
      <div className="fd-wrap fd-footer-base fd-mono">
        <span>© 2026 FUJIE DENKO</span>
        <span className="fd-footer-legal">
          <Link href={LEGAL_PATH}>Legal notice</Link>
          <span>Research &amp; prototyping stage</span>
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
