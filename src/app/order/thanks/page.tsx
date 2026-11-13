import type { Metadata } from "next";
import Link from "next/link";
import { AnnounceBar, SiteHeader, SiteFooter } from "../../chrome";
import { CONTACT_EMAIL, mailto } from "../../site";
import "../../denko.css";

/* Destination of the Stripe Payment Link confirmation redirect.
 * Set manually in Stripe: https://fujiedenko.platodesignlab.com/order/thanks */

export const metadata: Metadata = {
  title: { absolute: "Order Received | FUJIE DENKO" },
  description: "Next steps after ordering from FUJIE DENKO.",
  robots: { index: false, follow: false },
};

export default function OrderThanks() {
  return (
    <div className="fd-root">
      <a href="#fd-main" className="fd-skip">Skip to content</a>
      <AnnounceBar />
      <SiteHeader />
      <main id="fd-main">
        <div className="fd-wrap">
          <section className="fd-thanks">
            <p className="fd-label fd-mono">FUJIE DENKO / ORDER</p>
            <h1 className="fd-h1 fd-h1-s">Payment received.</h1>
            <p className="fd-body">
              Thank you for your order. A receipt has been sent by Stripe to the email address you entered at
              checkout.
            </p>
            <p className="fd-body">
              We will contact you by email about shipping and delivery. If you have a question about your order,
              write to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and include the email address you used
              at checkout.
            </p>
            <div className="fd-actions">
              <Link href="/products" className="fd-btn fd-btn-primary">Back to products</Link>
              <a href={mailto("Order question")} className="fd-btn fd-btn-ghost">Contact us</a>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
