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
export const OPERATING_ENTITY_LEGAL_NAME: string | null = "合同会社TERRA";

/** Seller disclosure for the 特定商取引法に基づく表記 page. */
export const SELLER = {
  name: "合同会社TERRA",
  representative: "NAOTO FUJIE",
  address: "東京都世田谷区代田5丁目",
};

export const NAV = [
  { label: "Products", href: "/products" },
  { label: "Technology", href: "/#technology" },
  { label: "Research", href: "/#research" },
  { label: "Contact", href: "/#contact" },
];

export const LEGAL_PATH = "/tokushoho";

export function mailto(subject: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
