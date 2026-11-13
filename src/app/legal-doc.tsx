import type { ReactNode } from "react";
import Link from "next/link";
import { AnnounceBar, SiteHeader, SiteFooter } from "./chrome";

export type LegalSection = { id: string; title: string; body: ReactNode };

/** Long-form legal page shell shared by /privacy and /terms. */
export function LegalDoc({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <div className="fd-root">
      <a href="#fd-main" className="fd-skip">Skip to content</a>
      <AnnounceBar />
      <SiteHeader />
      <main id="fd-main">
        <div className="fd-wrap">
          <article className="fd-legal fd-doc">
            <p className="fd-label fd-mono">Legal</p>
            <h1 className="fd-legal-h">{title}</h1>
            <p className="fd-mono fd-doc-updated">Last updated: {updated}</p>
            <div className="fd-doc-intro">{intro}</div>

            <nav aria-label="Contents" className="fd-doc-toc">
              <p className="fd-mono">Contents</p>
              <ol>
                {sections.map((s, i) => (
                  <li key={s.id}><a href={`#${s.id}`}>{i + 1}. {s.title}</a></li>
                ))}
              </ol>
            </nav>

            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="fd-doc-sec">
                <h2>{i + 1}. {s.title}</h2>
                {s.body}
              </section>
            ))}

            <p className="fd-doc-foot">
              See also: <Link href="/legal">Legal notice</Link> · <Link href="/privacy">Privacy policy</Link> ·{" "}
              <Link href="/terms">Terms of sale</Link>
            </p>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
