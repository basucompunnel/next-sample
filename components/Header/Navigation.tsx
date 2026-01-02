import ProductDropdown from './ProductDropdown';
import ResourcesDropdown from './ResourcesDropdown';

/**
 * Navigation component with animated menu items
 * - Purple shimmer effect slides across on hover
 * - Dropdown menus appear on hover for Product and Resources
 * - All links are non-functional (buttons instead of links) for demo
 */
export default function Navigation() {
  const navItems = [
    { href: '/product', label: 'Product', hasDropdown: true, dropdown: 'product' },
    { href: '/resources', label: 'Resources', hasDropdown: true, dropdown: 'resources' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/customers', label: 'Customers' },
    { href: '/now', label: 'Now' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="hidden md:flex items-center gap-1">
      {navItems.map((item) => (
        <div key={item.href} className="relative group">
          <button className="relative text-gray-400 hover:text-white transition-all duration-300 text-sm px-3 py-2 rounded-md hover:bg-gray-800/50 cursor-pointer overflow-hidden">
            {/* Navigation label */}
            <span className="relative z-10">{item.label}</span>
            {/* Animated shimmer effect: purple gradient that slides left to right on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
          </button>
          {/* Dropdown menus (shown on hover via CSS group-hover) */}
          {item.dropdown === 'product' && <ProductDropdown />}
          {item.dropdown === 'resources' && <ResourcesDropdown />}
        </div>
      ))}
    </nav>
  );
}
