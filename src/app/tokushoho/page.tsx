import type { Metadata } from "next";
import { AnnounceBar, SiteHeader, SiteFooter } from "../chrome";
import { CONTACT_EMAIL, SELLER, SITE_URL, LEGAL_PATH } from "../site";
import "../denko.css";

export const metadata: Metadata = {
  title: { absolute: "特定商取引法に基づく表記 | FUJIE DENKO" },
  description: "FUJIE DENKO（合同会社TERRA）の特定商取引法に基づく表記。",
  alternates: { canonical: `${SITE_URL}${LEGAL_PATH}` },
};

const ON_REQUEST = "請求があった場合には、遅滞なく開示いたします。";

/* 返品・引渡しの条件は運営者が確定した内容に合わせて更新すること。 */
const ROWS: { k: string; v: React.ReactNode }[] = [
  { k: "販売業者", v: SELLER.name },
  { k: "運営統括責任者", v: SELLER.representative },
  { k: "所在地", v: <>{SELLER.address}<br /><small>番地以降は、{ON_REQUEST}</small></> },
  { k: "電話番号", v: ON_REQUEST },
  { k: "メールアドレス", v: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> },
  { k: "販売状況", v: "現在、販売中の商品はありません。販売を開始した商品は、商品ページに価格と購入ボタンを表示します。" },
  { k: "販売価格", v: "各商品ページに表示します（消費税込み）。" },
  { k: "商品代金以外の必要料金", v: "送料。金額は各商品ページまたは決済画面に表示します。" },
  { k: "お支払い方法", v: "クレジットカード等（Stripe の決済画面に表示される方法）" },
  { k: "お支払い時期", v: "ご注文時に決済されます。" },
  { k: "商品の引渡時期", v: "各商品ページに記載の時期に発送します。" },
  {
    k: "返品・交換",
    v: (
      <>
        商品到着後8日以内に、初期不良または誤配送のご連絡をいただいた場合は、交換または返金にて対応いたします（送料は当社負担）。
        <br />
        お客様のご都合による返品・交換はお受けしておりません。
      </>
    ),
  },
];

export default function Tokushoho() {
  return (
    <div className="fd-root" lang="ja">
      <a href="#fd-main" className="fd-skip">Skip to content</a>
      <AnnounceBar />
      <SiteHeader />
      <main id="fd-main">
        <div className="fd-wrap">
          <section className="fd-legal">
            <p className="fd-label fd-mono">Legal / Specified Commercial Transactions Act</p>
            <h1 className="fd-legal-h">特定商取引法に基づく表記</h1>
            <dl className="fd-dl fd-legal-dl">
              {ROWS.map((r) => (
                <div key={r.k}>
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
