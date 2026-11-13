import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AnnounceBar, SiteHeader, SiteFooter } from "../chrome";
import { CONTACT_EMAIL, SELLER, SITE_URL, LEGAL_PATH } from "../site";
import "../denko.css";

export const metadata: Metadata = {
  title: { absolute: "Legal Notice (特定商取引法に基づく表記) | FUJIE DENKO" },
  description:
    "Seller information for FUJIE DENKO (合同会社TERRA) under Japan's Act on Specified Commercial Transactions. 特定商取引法に基づく表記。",
  alternates: { canonical: `${SITE_URL}${LEGAL_PATH}` },
};

/* English first for international buyers; Japanese kept for buyers in Japan.
 * 返品・引渡しの条件は運営者が確定した内容に合わせて更新すること。 */
type Row = { en: string; ja: string; vEn: ReactNode; vJa: ReactNode };

const email = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

const ROWS: Row[] = [
  { en: "Seller", ja: "販売業者", vEn: "合同会社TERRA (Godo Kaisha TERRA)", vJa: SELLER.name },
  { en: "Representative", ja: "運営統括責任者", vEn: SELLER.representative, vJa: SELLER.representative },
  {
    en: "Address",
    ja: "所在地",
    vEn: "Daita 5-chome, Setagaya-ku, Tokyo, Japan. The full street address will be disclosed without delay upon request.",
    vJa: `${SELLER.address}（番地以降は、請求があった場合には遅滞なく開示いたします。）`,
  },
  {
    en: "Phone",
    ja: "電話番号",
    vEn: "Disclosed without delay upon request.",
    vJa: "請求があった場合には、遅滞なく開示いたします。",
  },
  { en: "Email", ja: "メールアドレス", vEn: email, vJa: email },
  {
    en: "Sales status",
    ja: "販売状況",
    vEn: "No products are currently on sale. When a product goes on sale, its page will show the price and a purchase button.",
    vJa: "現在、販売中の商品はありません。販売を開始した商品は、商品ページに価格と購入ボタンを表示します。",
  },
  {
    en: "Price",
    ja: "販売価格",
    vEn: "Shown on each product page and at checkout.",
    vJa: "各商品ページに表示します（日本国内向けは消費税込み）。",
  },
  {
    en: "Additional charges",
    ja: "商品代金以外の必要料金",
    vEn: "Shipping, shown on the product page or at checkout. Orders shipped outside Japan may be subject to import duties and taxes in the destination country.",
    vJa: "送料（各商品ページまたは決済画面に表示）。日本国外への発送では、配送先の国の関税・輸入税がかかる場合があります。",
  },
  {
    en: "Payment methods",
    ja: "お支払い方法",
    vEn: "Credit card and other methods shown on the Stripe checkout page.",
    vJa: "クレジットカード等（Stripe の決済画面に表示される方法）",
  },
  { en: "Payment timing", ja: "お支払い時期", vEn: "Charged when the order is placed.", vJa: "ご注文時に決済されます。" },
  {
    en: "Delivery",
    ja: "商品の引渡時期",
    vEn: "Shipped within the period stated on each product page.",
    vJa: "各商品ページに記載の時期に発送します。",
  },
  {
    en: "Returns & exchanges",
    ja: "返品・交換",
    vEn: "If an item arrives defective or the wrong item is delivered, contact us within 8 days of delivery and we will exchange or refund it at our cost. Returns for change of mind are not accepted.",
    vJa: "商品到着後8日以内に、初期不良または誤配送のご連絡をいただいた場合は、交換または返金にて対応いたします（送料は当社負担）。お客様のご都合による返品・交換はお受けしておりません。",
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
            <h1 className="fd-legal-h">
              Legal Notice
              <span lang="ja">特定商取引法に基づく表記</span>
            </h1>
            <p className="fd-legal-intro">
              Seller information under Japan&apos;s Act on Specified Commercial Transactions.
            </p>
            <dl className="fd-dl fd-legal-dl">
              {ROWS.map((r) => (
                <div key={r.en}>
                  <dt>
                    {r.en}
                    <span lang="ja">{r.ja}</span>
                  </dt>
                  <dd>
                    <p>{r.vEn}</p>
                    {r.vJa !== r.vEn && typeof r.vJa === "string" && (
                      <p lang="ja" className="fd-legal-ja">{r.vJa}</p>
                    )}
                  </dd>
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
