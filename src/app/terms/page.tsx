import type { Metadata } from "next";
import Link from "next/link";
import { LegalDoc, type LegalSection } from "../legal-doc";
import { CONTACT_EMAIL, SELLER, SITE_URL } from "../site";
import "../denko.css";

export const metadata: Metadata = {
  title: { absolute: "Terms of Sale | FUJIE DENKO" },
  description: "Terms that apply to orders and pre-orders placed with FUJIE DENKO (Godo Kaisha TERRA).",
  alternates: { canonical: `${SITE_URL}/terms` },
};

const UPDATED = "13 November 2026";
const email = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

/* Section order follows common hardware-store terms of sale (overview,
 * products, pricing, taxes, orders, cancellation, pre-orders, availability,
 * shipping, returns, warranty, use, IP, data, liability, law). All wording
 * is our own. Business terms are proposed defaults for the operator to
 * confirm. Returns must stay consistent with /legal. */
const SECTIONS: LegalSection[] = [
  {
    id: "overview",
    title: "Overview",
    body: (
      <p>
        These terms apply to every order and pre-order placed through fujiedenko.platodesignlab.com. By placing an
        order you agree to them. Nothing in these terms limits rights you have under the mandatory consumer law of
        the country where you live.
      </p>
    ),
  },
  {
    id: "who",
    title: "Who we are",
    body: (
      <p>
        FUJIE DENKO is operated by {SELLER.nameEn} ({SELLER.name}), {SELLER.addressEn}. In these terms
        &ldquo;we&rdquo; and &ldquo;us&rdquo; mean {SELLER.nameEn}, and &ldquo;you&rdquo; means the person or
        organisation placing the order. A &ldquo;consumer&rdquo; is an individual buying for purposes outside their
        trade or profession. Contact: {email}. Full seller details are in our <Link href="/legal">legal notice</Link>.
      </p>
    ),
  },
  {
    id: "products",
    title: "Products and stages",
    body: (
      <>
        <p>Each product page shows the product&apos;s stage:</p>
        <ul>
          <li><strong>Concept</strong> and <strong>Prototype</strong>: shown for information only. Not for sale.</li>
          <li><strong>Pre-order</strong>: can be ordered and paid for now, and ships later on the estimated date shown.</li>
          <li><strong>Available</strong>: can be ordered and ships within the period shown.</li>
        </ul>
        <p>
          Images of concept and prototype products are renderings or prototypes and may differ from the final
          product. Only specifications stated on the page of a product that is on sale describe what you receive.
        </p>
      </>
    ),
  },
  {
    id: "pricing",
    title: "Pricing",
    body: (
      <p>
        Prices and the currency are shown on the product page and at checkout, together with shipping costs, before
        you pay. If a price is clearly wrong because of an error, we may cancel the order and refund you in full.
      </p>
    ),
  },
  {
    id: "taxes",
    title: "Taxes and import duties",
    body: (
      <p>
        Orders ship from Japan. For deliveries outside Japan, import duties, taxes, and customs or brokerage fees
        charged by your country are not included in the price and are paid by you, unless checkout states otherwise.
        If you refuse to pay them and the parcel is returned, we refund the product price minus the shipping costs.
      </p>
    ),
  },
  {
    id: "orders",
    title: "Orders and payment",
    body: (
      <>
        <p>
          You place an order by completing payment on the Stripe checkout page, and Stripe emails you a receipt. The
          contract between you and us is formed when payment succeeds.
        </p>
        <p>
          Payment is processed by Stripe using the methods shown at checkout. We never see or store your card
          details. Refunds are returned to the original payment method.
        </p>
      </>
    ),
  },
  {
    id: "cancellation",
    title: "Order cancellation",
    body: (
      <>
        <p>You can cancel an order for a full refund at any time before it ships by emailing {email}.</p>
        <p>
          We may cancel an order and refund it in full if the product cannot be supplied, the price was clearly an
          error, we cannot ship to your address, or we reasonably suspect fraud.
        </p>
      </>
    ),
  },
  {
    id: "preorders",
    title: "Pre-orders",
    body: (
      <ul>
        <li>Pre-orders are charged in full when you place them.</li>
        <li>The ship date shown is an estimate. We will email you if it changes.</li>
        <li>You can cancel a pre-order at any time before it ships for a full refund.</li>
        <li>If we cannot ship the product, we will cancel the pre-order and refund you in full.</li>
      </ul>
    ),
  },
  {
    id: "availability",
    title: "Where we sell",
    body: (
      <p>
        We sell internationally from Japan. The countries we can ship to are shown at checkout and may differ by
        product. We may decline orders to destinations we cannot serve, or where export or import of the product
        would breach applicable law.
      </p>
    ),
  },
  {
    id: "shipping",
    title: "Shipping and delivery",
    body: (
      <p>
        Delivery times depend on the destination and carrier and are estimates. We are not responsible for delays
        caused by customs or events outside our control. Risk of loss passes to you on delivery. Please check the
        package on arrival and tell us about any visible damage as soon as possible.
      </p>
    ),
  },
  {
    id: "returns",
    title: "Returns and refunds",
    body: (
      <>
        <p>
          If an item arrives defective or the wrong item is delivered, contact us within 8 days of delivery and we
          will exchange or refund it at our cost.
        </p>
        <p>
          Returns for change of mind are not accepted, except where the law of your country gives you that right.
          For example, consumers in the EEA and UK usually have 14 days from delivery to withdraw from an online
          purchase. Where such a right applies, email us with your order details and we will explain how to return
          the item and issue the refund.
        </p>
      </>
    ),
  },
  {
    id: "warranty",
    title: "Warranty and legal guarantees",
    body: (
      <p>
        Any warranty for a product is stated on its product page. In addition, you keep any statutory guarantees
        you have, such as rights for goods that are faulty or not as described. To make a claim, email {email} with
        your order details and a description of the problem.
      </p>
    ),
  },
  {
    id: "use",
    title: "Use of the products and safety",
    body: (
      <>
        <p>
          FUJIE DENKO products are research, prototyping, and teaching hardware. They are not designed or certified
          for medical use, life-support or safety-critical systems, or any use where failure could cause injury.
          Follow the instructions supplied with the product.
        </p>
        <p>At the end of a product&apos;s life, dispose of it according to your local rules for electronic waste.</p>
      </>
    ),
  },
  {
    id: "ip",
    title: "Software and intellectual property",
    body: (
      <p>
        Any software or firmware supplied with a product is licensed to you for use with that product, under the
        licence stated in its documentation, and is not sold. The FUJIE DENKO name, the FD symbol, and the designs
        on this site remain our property. You may not resell products under another brand without our written
        agreement.
      </p>
    ),
  },
  {
    id: "data",
    title: "Data protection",
    body: (
      <p>
        We use the personal data you give us to process and deliver your order, as described in our{" "}
        <Link href="/privacy">privacy policy</Link>.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <p>
        To the extent permitted by law, our total liability for any order is limited to the amount you paid for
        it, and we are not liable for indirect or consequential loss. This does not limit liability for death or
        personal injury caused by our negligence, for fraud, or any other liability that cannot be limited by law.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing law and disputes",
    body: (
      <p>
        These terms are governed by the laws of Japan, and the Tokyo District Court has exclusive jurisdiction at
        first instance. If you are a consumer, this does not deprive you of the protection of the mandatory laws of
        the country where you live, or of the right to bring proceedings there. Please contact us first; we aim to
        resolve any problem directly.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: <p>We may update these terms. The version shown when you place an order applies to that order.</p>,
  },
  {
    id: "contact",
    title: "Contact",
    body: <p>Questions about an order: {email}. Please include the email address you used at checkout.</p>,
  },
];

export default function TermsPage() {
  return (
    <LegalDoc
      title="Terms of Sale"
      updated={UPDATED}
      intro={<p>These terms explain how ordering, payment, delivery, and returns work when you buy from FUJIE DENKO.</p>}
      sections={SECTIONS}
    />
  );
}
