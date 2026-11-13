/* ─── Brand facts ──────────────────────────────────────────────────────────
 * Keep every public claim on this site inside what is true today:
 * research & prototyping stage, nothing for sale yet, no customers, patents,
 * staff, facilities, certifications or funding.
 */

export const SITE_URL = "https://fujiedenko.platodesignlab.com";

/** Contact address published on platodesignlab.com. */
export const CONTACT_EMAIL = "philaicontact@icloud.com";
export const PLATO_SITE = "https://www.platodesignlab.com";

/** Operating entity (confirmed by the owner, 2026-11-13). */
export const OPERATING_ENTITY_LEGAL_NAME: string | null = "Godo Kaisha TERRA";

/** Seller disclosure for the Legal Notice page (/legal). */
export const SELLER = {
  name: "合同会社TERRA",
  nameEn: "Godo Kaisha TERRA",
  representative: "NAOTO FUJIE",
  address: "東京都世田谷区代田5丁目",
  addressEn: "Daita 5-chome, Setagaya-ku, Tokyo, Japan",
};

export const NAV = [
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/#applications" },
  { label: "Technology", href: "/#technology" },
  { label: "Research", href: "/#research" },
];

export const LEGAL_PATH = "/legal";

export function mailto(subject: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

export const UPDATES_SUBJECT = "FUJIE DENKO release updates";

/** Official social accounts (provided by the owner, 2026-11-13). */
export const SOCIAL = [
  { id: "x", label: "X", handle: "@fujiedenko", href: "https://x.com/fujiedenko" },
  { id: "instagram", label: "Instagram", handle: "@fujiedenko", href: "https://www.instagram.com/fujiedenko" },
] as const;
