import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnnounceBar, SiteHeader, SiteFooter, ProductGrid, StageBadge, PriceLine, UpdatesBand } from "../../chrome";
import { PRODUCTS, STAGE_NOTE, categoryName, getProduct, isPurchasable, stripeUrl } from "../../catalog";
import { SITE_URL, LEGAL_PATH, mailto } from "../../site";
import "../../denko.css";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProduct((await params).slug);
  if (!p) return {};
  const title = `${p.name} | FUJIE DENKO`;
  const description = `${p.summary} ${STAGE_NOTE[p.stage]}`;
  const url = `${SITE_URL}/products/${p.slug}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", url, siteName: "FUJIE DENKO", title, description, images: [{ url: p.image.src, alt: p.alt }] },
    twitter: { card: "summary_large_image", title, description, images: [p.image.src] },
  };
}

export default async function ProductPage({ params }: Props) {
  const p = getProduct((await params).slug);
  if (!p) notFound();

  const sameCat = PRODUCTS.filter((x) => x.category === p.category && x.slug !== p.slug);
  const others = PRODUCTS.filter((x) => x.category !== p.category);
  const related = [...sameCat, ...others].slice(0, 4);
  const available = isPurchasable(p);
  const buyUrl = stripeUrl(p);

  return (
    <div className="fd-root">
      <a href="#fd-main" className="fd-skip">Skip to content</a>
      <AnnounceBar />
      <SiteHeader />
      <main id="fd-main">
        <div className="fd-wrap">
          <nav aria-label="Breadcrumb" className="fd-crumbs fd-mono">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/products">Concept archive</Link><span aria-hidden="true">/</span>
            <Link href={`/products#${p.category}`}>{categoryName(p.category)}</Link>
          </nav>

          <article className="fd-pd">
            <figure className="fd-pd-img">
              <Image src={p.image} alt={p.alt} placeholder="blur" priority sizes="(max-width: 960px) 100vw, 720px" />
              <figcaption className="fd-mono">Concept visualization · AI-generated · not a photograph</figcaption>
            </figure>

            <div className="fd-pd-info">
              <p className="fd-mono fd-pd-cat">{categoryName(p.category)} · Ref. {p.ref}</p>
              <h1 className="fd-pd-name">{p.name}</h1>
              <p className="fd-pd-sum">{p.summary}</p>

              <div className="fd-pd-buy">
                <div className="fd-pd-row">
                  <StageBadge stage={p.stage} />
                  <PriceLine product={p} />
                </div>
                <p className="fd-pd-stage">{STAGE_NOTE[p.stage]}</p>
                {buyUrl ? (
                  <>
                    <a href={buyUrl} className="fd-btn fd-btn-primary fd-btn-block" target="_blank" rel="noreferrer">
                      {p.stage === "preorder" ? `Pre-order · ${p.price}` : "Buy now"}
                    </a>
                    <p className="fd-pd-secure">
                      Secure checkout by Stripe. Opens in a new tab. <Link href="/terms">Terms of sale</Link> · <Link href={LEGAL_PATH}>Legal notice</Link>
                    </p>
                  </>
                ) : available ? (
                  <a href={mailto(`Order inquiry: ${p.name}`)} className="fd-btn fd-btn-primary fd-btn-block">Order inquiry</a>
                ) : (
                  <>
                    <p className="fd-pd-stage">
                      Archived concept from FUJIE DENKO&apos;s exploratory phase. It is not in active development.
                      Current work focuses on electronic skin and embodied SNN research devices.
                    </p>
                    <Link href="/#development" className="fd-btn fd-btn-primary fd-btn-block">See current development</Link>
                  </>
                )}
                <a href={mailto(`Question: ${p.name} (${p.ref})`)} className="fd-btn fd-btn-ghost fd-btn-block">
                  Ask about this concept
                </a>
              </div>

              <div className="fd-pd-desc">
                <h2 className="fd-mono">Overview</h2>
                <p>{p.description}</p>
              </div>

              <dl className="fd-dl fd-pd-dl">
                <div><dt className="fd-mono">Stage</dt><dd>{STAGE_NOTE[p.stage]}</dd></div>
                <div><dt className="fd-mono">Specifications</dt><dd>Not published. No performance is claimed.</dd></div>
                <div><dt className="fd-mono">Price</dt><dd>{available ? p.price : "Not set"}</dd></div>
              </dl>
              <p className="fd-note">
                Markings in the rendering, including model designations and the drawn form of the FD symbol, are
                provisional.
              </p>
            </div>
          </article>
        </div>


        <section className="fd-ssection" aria-labelledby="fd-faq-h">
          <div className="fd-wrap fd-faq-wrap">
            <h2 id="fd-faq-h" className="fd-h2s">Questions</h2>
            <div className="fd-faq">
              <details>
                <summary>Is this being developed?</summary>
                <p>No. It is an archived concept visualization. FUJIE DENKO&apos;s current development is limited to the research devices listed under <Link href="/#development">Development</Link>.</p>
              </details>
              <details>
                <summary>Can I buy this?</summary>
                <p>{STAGE_NOTE[p.stage]} No specifications or performance are claimed.</p>
              </details>
              <details>
                <summary>Can I discuss a similar system?</summary>
                <p>Yes. Research collaboration and custom sensing development are described under <Link href="/#collaboration">Collaboration</Link>.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="fd-ssection fd-ssection-tint" aria-labelledby="fd-rel-h">
          <div className="fd-wrap">
            <div className="fd-shead">
              <h2 id="fd-rel-h" className="fd-h2s">More from the archive</h2>
              <Link href="/products" className="fd-shead-link">Full archive →</Link>
            </div>
            <ProductGrid products={related} />
          </div>
        </section>
      </main>
      <UpdatesBand />
      <SiteFooter />
    </div>
  );
}
