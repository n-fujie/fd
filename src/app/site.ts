/* ─── Brand facts ──────────────────────────────────────────────────────────
 * Keep every public claim on this site inside what is true today:
 * research & prototyping stage, nothing for sale yet, no customers, patents,
 * staff, facilities, certifications or funding.
 */

export const SITE_URL = "https://fujiedenko.platodesignlab.com";

/** Contact address published on platodesignlab.com. */
export const CONTACT_EMAIL = "philaicontact@icloud.com";
export const PLATO_SITE = "https://www.platodesignlab.com";

/**
 * Registered legal name of the Japanese gōdō kaisha (合同会社) that operates
 * FUJIE DENKO. PLACEHOLDER: leave `null` until the registered name has been
 * confirmed against the commercial register. While `null`, no operating-entity
 * line is rendered anywhere on the site.
 */
export const OPERATING_ENTITY_LEGAL_NAME: string | null = null;

export const NAV = [
  { label: "Products", href: "/products" },
  { label: "Technology", href: "/#technology" },
  { label: "Research", href: "/#research" },
  { label: "Contact", href: "/#contact" },
];

export function mailto(subject: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
