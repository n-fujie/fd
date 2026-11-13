import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AnnounceBar, SiteHeader, SiteFooter } from "../chrome";
import { CONTACT_EMAIL, SELLER, SITE_URL, LEGAL_PATH } from "../site";
import "../denko.css";

export const metadata: Metadata = {
  title: { absolute: "Legal Notice | FUJIE DENKO" },
  description: "Seller information, payment, delivery, and returns for FUJIE DENKO, operated by Godo Kaisha TERRA.",
  alternates: { canonical: `${SITE_URL}${LEGAL_PATH}` },
};

/* Seller disclosure. Update Sales status, shipping and delivery when the
 * first product goes on sale. Returns terms must be confirmed by the operator. */
const ROWS: { k: string; v: ReactNode }[] = [
  { k: "Seller", v: `${SELLER.nameEn} (${SELLER.name})` },
  { k: "Representative", v: SELLER.representative },
  { k: "Address", v: `${SELLER.addressEn}. The full street address will be disclosed without delay upon request.` },
  { k: "Phone", v: "Disclosed without delay upon request." },
  { k: "Email", v: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> },
  { k: "Sales status", v: "No products are currently on sale. When a product goes on sale, its page will show the price and a purchase button." },
  { k: "Price", v: "Shown on each product page and at checkout." },
  { k: "Additional charges", v: "Shipping, shown on the product page or at checkout. International orders may be subject to import duties and taxes in the destination country, payable by the buyer." },
  { k: "Payment methods", v: "Credit card and other methods shown on the Stripe checkout page." },
  { k: "Payment timing", v: "Charged when the order is placed." },
  { k: "Delivery", v: "Shipped within the period stated on each product page." },
  {
    k: "Returns & exchanges",
    v: "If an item arrives defective or the wrong item is delivered, contact us within 8 days of delivery and we will exchange or refund it at our cost. Returns for change of mind are not accepted, except where the law of your country gives you that right.",
  },
];

export default function LegalNotice() {
  return (
    <div className="fd-root">
      <a href="#fd-main" className="fd-skip">Skip to content</a>
      <AnnounceBar />
      <SiteHeader />
      <main id="fd-main">
        <div className="fd-wrap">
          <section className="fd-legal">
            <p className="fd-label fd-mono">Legal</p>
            <h1 className="fd-legal-h">Legal Notice</h1>
            <p className="fd-legal-intro">Seller information and terms of sale.</p>
            <dl className="fd-dl fd-legal-dl">
              {ROWS.map((r) => (
                <div key={r.k} id={r.k.startsWith("Returns") ? "returns" : r.k === "Delivery" ? "delivery" : undefined}>
                  <dt>{r.k}</dt>
                  <dd>{r.v}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
