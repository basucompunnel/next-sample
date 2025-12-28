import Link from 'next/link';

type FooterLink = {
  href: string;
  label: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

function FooterLogo() {
  return (
    <div className="col-span-2 md:col-span-1">
      <Link href="/" className="inline-block">
        <img 
          src="/assets/images/linear-app-logo.png" 
          alt="Linear Logo" 
          width="32" 
          height="32"
          className="object-contain"
        />
      </Link>
    </div>
  );
}

function FooterColumn({ title, links }: FooterSection) {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4">{title}</h3>
      <ul className="space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
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
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <FooterLogo />
          {footerSections.map((section) => (
            <FooterColumn key={section.title} title={section.title} links={section.links} />
          ))}
        </div>
      </div>
    </footer>
  );
}
