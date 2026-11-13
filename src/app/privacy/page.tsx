import type { Metadata } from "next";
import Link from "next/link";
import { LegalDoc, type LegalSection } from "../legal-doc";
import { CONTACT_EMAIL, SELLER, SITE_URL } from "../site";
import "../denko.css";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | FUJIE DENKO" },
  description: "How FUJIE DENKO (Godo Kaisha TERRA) collects, uses, and protects personal data.",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

const UPDATED = "13 November 2026";
const email = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

/* Section order follows common store privacy policies (collection, minors,
 * sharing, advertising, use, lawful basis, retention, automated decisions,
 * rights, GDPR, CCPA, cookies, Do Not Track, changes, contact), with service
 * providers listed by purpose. All wording is our own. Facts relied on:
 * - no cookies, analytics, forms, or browser storage;
 * - hosting is Vercel; contact is by email (iCloud Mail);
 * - checkout is Stripe Payment Links (Stripe collects card data; we never see it).
 * If any of these change, update this page first. */
const SECTIONS: LegalSection[] = [
  {
    id: "who",
    title: "Who we are",
    body: (
      <p>
        FUJIE DENKO is operated by {SELLER.nameEn} ({SELLER.name}), {SELLER.addressEn}. We are the controller of
        the personal data described in this policy. Contact: {email}.
      </p>
    ),
  },
  {
    id: "collect",
    title: "Personal data we collect",
    body: (
      <>
        <p>We collect only what is needed to answer you and fulfil orders:</p>
        <ul>
          <li>
            <strong>When you email us</strong> (including &ldquo;Get updates&rdquo; and &ldquo;Notify me&rdquo;
            requests): your email address, your name if you give it, and the content of your message.
          </li>
          <li>
            <strong>When you place an order</strong>: name, email address, shipping and billing address, phone
            number if requested at checkout, the items ordered, and payment status. Card details are entered on
            Stripe&apos;s checkout page and are never seen or stored by us.
          </li>
          <li>
            <strong>When you visit the site</strong>: our hosting provider automatically records technical request
            data such as IP address, browser type, the page requested, and time.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "minors",
    title: "Children",
    body: <p>Our products and this site are not directed at children under 16, and we do not knowingly collect their data.</p>,
  },
  {
    id: "use",
    title: "How we use personal data",
    body: (
      <ul>
        <li>To reply to your messages and send the product updates you asked for.</li>
        <li>To process, ship, and support your order, including cancellations, returns, and refunds.</li>
        <li>To keep accounting and tax records required by law.</li>
        <li>To keep the site and payments secure and to prevent fraud.</li>
      </ul>
    ),
  },
  {
    id: "basis",
    title: "Lawful basis",
    body: (
      <>
        <p>Where the GDPR or UK GDPR applies, we rely on:</p>
        <ul>
          <li><strong>Contract</strong>: to process and deliver your order.</li>
          <li><strong>Legal obligation</strong>: to keep accounting and tax records.</li>
          <li><strong>Consent</strong>: to send product updates you requested. You can withdraw it at any time.</li>
          <li><strong>Legitimate interests</strong>: to answer enquiries, keep the site secure, and prevent fraud.</li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Service providers we share data with",
    body: (
      <>
        <p>We do not sell or rent personal data. We share it only with providers that act for us, by purpose:</p>
        <ul>
          <li><strong>Handling payments</strong>: Stripe (checkout, payment processing, fraud screening).</li>
          <li><strong>Hosting</strong>: Vercel (website hosting and request logs).</li>
          <li><strong>Email</strong>: Apple iCloud Mail (our mailbox).</li>
          <li><strong>Delivery</strong>: shipping carriers (name, address, and phone for delivery).</li>
        </ul>
        <p>We may also disclose data where required by law or to protect our legal rights.</p>
      </>
    ),
  },
  {
    id: "tracking",
    title: "Cookies, advertising, and analytics",
    body: (
      <>
        <p>
          This site does not set cookies, does not use browser storage, and runs no analytics, heat-mapping, or
          advertising trackers. We do not use your data for behavioural or targeted advertising, and there are no
          user accounts.
        </p>
        <p>
          The Stripe checkout page is operated by Stripe and may use its own cookies for security and fraud
          prevention, under Stripe&apos;s privacy policy. Because we do not track visitors, we have nothing to change
          in response to Do Not Track or Global Privacy Control signals.
        </p>
      </>
    ),
  },
  {
    id: "automated",
    title: "Automated decision-making",
    body: (
      <p>
        We do not make decisions about you by automated means. Stripe may automatically screen payments for fraud;
        if a payment is blocked, contact us and we will review it.
      </p>
    ),
  },
  {
    id: "transfers",
    title: "International transfers",
    body: (
      <p>
        We are based in Japan, and our service providers process data in Japan, the United States, and other
        countries. For data from the EEA or UK we rely on the European Commission&apos;s adequacy decision for
        Japan and on safeguards our providers offer, such as Standard Contractual Clauses.
      </p>
    ),
  },
  {
    id: "retention",
    title: "Retention",
    body: (
      <ul>
        <li>Order and payment records: as long as Japanese tax law requires (generally 7 years).</li>
        <li>Emails and update requests: until you ask us to delete them, or once they are no longer needed.</li>
        <li>Hosting logs: for the limited period set by our hosting provider.</li>
      </ul>
    ),
  },
  {
    id: "rights",
    title: "Your rights",
    body: (
      <p>
        You may ask us to access, correct, delete, or give you a copy of your personal data, to restrict or object
        to its use, or to withdraw consent. Email {email}. We will reply within the time the law requires and will
        not treat you differently for using these rights.
      </p>
    ),
  },
  {
    id: "gdpr",
    title: "EEA and UK residents",
    body: (
      <p>
        You have the rights listed above under the GDPR or UK GDPR, and the right to complain to your data
        protection authority.
      </p>
    ),
  },
  {
    id: "ccpa",
    title: "California residents",
    body: (
      <p>
        Under the CCPA/CPRA you have the right to know, delete, and correct personal information we hold about you.
        We do not sell personal information or share it for cross-context behavioural advertising, and we do not
        use sensitive personal information.
      </p>
    ),
  },
  {
    id: "japan",
    title: "Japan residents",
    body: (
      <p>
        We handle personal information in line with the Act on the Protection of Personal Information. You may
        request disclosure, correction, or suspension of use by emailing us.
      </p>
    ),
  },
  {
    id: "security",
    title: "Security",
    body: (
      <p>
        The site is served only over HTTPS, and payments are handled by Stripe, which is certified to PCI DSS. No
        method of transmission or storage is completely secure, but we limit what we collect and who can access it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes",
    body: (
      <p>
        We will update this policy when our practices change, for example if we add a newsletter service or
        analytics. The date at the top shows the latest version.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        Questions about privacy: {email}. Seller details are in our <Link href="/legal">legal notice</Link>.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalDoc
      title="Privacy Policy"
      updated={UPDATED}
      intro={<p>This policy explains what personal data FUJIE DENKO collects, why, and the choices you have.</p>}
      sections={SECTIONS}
    />
  );
}
