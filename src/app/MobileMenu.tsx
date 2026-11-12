"use client";

import { useRef } from "react";

type Item = { label: string; href: string };

/** Native <details> disclosure; the only script closes it after a link is chosen. */
export default function MobileMenu({ items }: { items: Item[] }) {
  const ref = useRef<HTMLDetailsElement>(null);
  return (
    <details className="fd-menu" ref={ref}>
      <summary aria-label="Menu">
        <span className="fd-menu-label">Menu</span>
        <span className="fd-menu-icon" aria-hidden="true" />
      </summary>
      <nav aria-label="FUJIE DENKO mobile">
        <ul>
          {items.map((n) => (
            <li key={n.href}>
              <a href={n.href} onClick={() => ref.current?.removeAttribute("open")}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}
