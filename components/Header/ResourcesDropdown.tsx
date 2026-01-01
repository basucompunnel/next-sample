function CompanySection() {
  const links = [
    {
      href: '/about',
      title: 'About',
      description: 'Meet the team',
    },
    {
      href: '/careers',
      title: 'Careers',
      description: "We're hiring",
    },
  ];

  return (
    <div>
      <h4 className="text-gray-400 text-xs font-semibold mb-3 uppercase">Company</h4>
      <div className="space-y-2">
        {links.map((link) => (
          <div
            key={link.href}
            className="block group/item hover:bg-gray-800/50 p-2 rounded-md transition-colors cursor-pointer"
          >
            <div className="text-white font-semibold mb-0.5 text-sm">{link.title}</div>
            <div className="text-gray-400 text-xs">{link.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExploreSection() {
  const links = [
    {
      href: '/developers',
      title: 'Developers',
      description: 'Build on the Linear API',
    },
    {
      href: '/security',
      title: 'Security',
      description: 'Safe, secure, and private',
    },
    {
      href: '/docs',
      title: 'Docs',
      description: 'How to use Linear',
    },
  ];

  return (
    <div>
      <h4 className="text-gray-400 text-xs font-semibold mb-3 uppercase">Explore</h4>
      <div className="space-y-2">
        {links.map((link) => (
          <div
            key={link.href}
            className="block group/item hover:bg-gray-800/50 p-2 rounded-md transition-colors cursor-pointer"
          >
            <div className="text-white font-semibold mb-0.5 text-sm">{link.title}</div>
            <div className="text-gray-400 text-xs">{link.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MoreSection() {
  const links = [
    {
      href: '/switch',
      title: 'Switch to Linear',
      description: 'Migration guide',
    },
    {
      href: '/download',
      title: 'Download',
      description: 'Get the app',
    },
    {
      href: '/quality',
      title: 'Quality',
      description: 'Conversations on quality',
    },
  ];

  return (
    <div>
      <div className="space-y-2">
        {links.map((link) => (
          <div
            key={link.href}
            className="block group/item hover:bg-gray-800/50 p-2 rounded-md transition-colors cursor-pointer"
          >
            <div className="text-white font-semibold mb-0.5 text-sm">{link.title}</div>
            <div className="text-gray-400 text-xs">{link.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ResourcesDropdown() {
  return (
    <div className="absolute top-full left-0 mt-2 w-[700px] max-w-[90vw] bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
      <div className="grid grid-cols-3 gap-6">
        <CompanySection />
        <ExploreSection />
        <MoreSection />
      </div>
    </div>
  );
}
