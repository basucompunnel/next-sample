import { FooterSection } from './types';

/**
 * Footer column component for organizing links by category
 * - Displays a section title (e.g., "Features", "Product")
 * - Renders a list of related links with hover effects
 * - All links are buttons (non-functional) for demo purposes
 * @param title - The heading for this column
 * @param links - Array of links to display in this column
 */
export default function FooterColumn({ title, links }: FooterSection) {
  return (
    <div>
      {/* Column title */}
      <h3 className="text-white font-semibold mb-4">{title}</h3>
      {/* List of links with hover effect */}
      <ul className="space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <button className="hover:text-white transition-colors cursor-pointer text-left">
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
