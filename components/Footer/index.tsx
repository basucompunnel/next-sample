import FooterLogo from './FooterLogo';
import FooterColumn from './FooterColumn';
import { FooterSection } from './types';

/**
 * Main Footer component
 * - Displays site navigation organized into 5 main categories
 * - Features a responsive grid layout (2 columns mobile, 6 columns desktop)
 * - Contains logo and comprehensive link sections
 * - All links are non-functional (demo purposes)
 */
export default function Footer() {
  // Footer navigation organized by categories
  const footerSections: FooterSection[] = [
    {
      title: 'Features',
      links: [
        { href: '/plan', label: 'Plan' },
        { href: '/build', label: 'Build' },
        { href: '/insights', label: 'Insights' },
        { href: '/customer-requests', label: 'Customer Requests' },
        { href: '/linear-asks', label: 'Linear Asks' },
        { href: '/security', label: 'Security' },
        { href: '/mobile', label: 'Mobile' },
      ],
    },
    {
      title: 'Product',
      links: [
        { href: '/pricing', label: 'Pricing' },
        { href: '/method', label: 'Method' },
        { href: '/integrations', label: 'Integrations' },
        { href: '/changelog', label: 'Changelog' },
        { href: '/documentation', label: 'Documentation' },
        { href: '/download', label: 'Download' },
        { href: '/switch', label: 'Switch' },
      ],
    },
    {
      title: 'Company',
      links: [
        { href: '/about', label: 'About' },
        { href: '/customers', label: 'Customers' },
        { href: '/careers', label: 'Careers' },
        { href: '/now', label: 'Now' },
        { href: '/readme', label: 'README' },
        { href: '/quality', label: 'Quality' },
        { href: '/brand', label: 'Brand' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { href: '/developers', label: 'Developers' },
        { href: '/status', label: 'Status' },
        { href: '/startups', label: 'Startups' },
        { href: '/report-vulnerability', label: 'Report vulnerability' },
        { href: '/dpa', label: 'DPA' },
        { href: '/privacy', label: 'Privacy' },
        { href: '/terms', label: 'Terms' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { href: '/contact', label: 'Contact us' },
        { href: '/community', label: 'Community' },
        { href: 'https://twitter.com/linear', label: 'X (Twitter)' },
        { href: 'https://github.com/linear', label: 'GitHub' },
        { href: 'https://youtube.com/linear', label: 'YouTube' },
      ],
    },
  ];

  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Responsive grid: 2 columns on mobile, 6 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Logo takes first column */}
          <FooterLogo />
          {/* Map through sections to create footer columns */}
          {footerSections.map((section) => (
            <FooterColumn key={section.title} title={section.title} links={section.links} />
          ))}
        </div>
      </div>
    </footer>
  );
}
