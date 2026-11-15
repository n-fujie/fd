/* ─── Brand facts ──────────────────────────────────────────────────────────
 * FUJIE DENKO: independent research & engineering in electronic skin and
 * embodied spiking neural networks (repositioned 2026-11-15).
 * Keep every public claim inside what is true today: research stage, nothing
 * built or for sale, no customers, patents, staff, facilities, certifications,
 * funding, or performance figures. Label every result with its evidence level.
 */

export const SITE_URL = "https://fujiedenko.platodesignlab.com";

/** Contact address specified by the owner (2026-11-15). */
export const CONTACT_EMAIL = "platodesign@icloud.com";
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
  { label: "Technology", href: "/#technology" },
  { label: "Research", href: "/#research" },
  { label: "Development", href: "/#development" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const LEGAL_PATH = "/legal";

export function mailto(subject: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

export const UPDATES_SUBJECT = "FUJIE DENKO research updates";
export const COLLAB_SUBJECT = "Research collaboration inquiry";

/** Official social accounts (provided by the owner, 2026-11-13). */
export const SOCIAL = [
  { id: "x", label: "X", handle: "@fujiedenko", href: "https://x.com/fujiedenko" },
  { id: "instagram", label: "Instagram", handle: "@fujiedenko", href: "https://www.instagram.com/fujiedenko" },
] as const;
