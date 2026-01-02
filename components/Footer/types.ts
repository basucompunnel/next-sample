/**
 * Type definition for individual footer links
 * - href: URL path (non-functional in demo)
 * - label: Display text for the link
 */
export type FooterLink = {
  href: string;
  label: string;
};

/**
 * Type definition for footer section/column
 * - title: Section heading (e.g., "Features", "Product")
 * - links: Array of footer links in this section
 */
export type FooterSection = {
  title: string;
  links: FooterLink[];
};
