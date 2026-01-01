function CoreFeatures() {
  const features = [
    {
      href: '/plan',
      title: 'Plan',
      description: 'Set the product direction with projects and initiatives',
    },
    {
      href: '/build',
      title: 'Build',
      description: 'Make progress with issue tracking and cycle planning',
    },
  ];

  return (
    <div>
      <h4 className="text-gray-400 text-xs font-semibold mb-3 uppercase">Core Features</h4>
      <div className="space-y-2">
        {features.map((feature) => (
          <div
            key={feature.href}
            className="block group/item hover:bg-gray-800/50 p-2 rounded-md transition-colors cursor-pointer"
          >
            <div className="text-white font-semibold mb-0.5 text-sm">{feature.title}</div>
            <div className="text-gray-400 text-xs">{feature.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MoreFeatures() {
  const features = [
    {
      href: '/customer-requests',
      title: 'Customer requests',
      description: 'Manage user feedback',
    },
    {
      href: '/integrations',
      title: 'Integrations',
      description: 'Collaborate across tools',
    },
    {
      href: '/insights',
      title: 'Insights',
      description: 'Realtime analytics',
    },
    {
      href: '/mobile',
      title: 'Mobile app',
      description: 'Linear in your pocket',
    },
    {
      href: '/linear-asks',
      title: 'Linear Asks',
      description: 'Workplace requests',
    },
    {
      href: '/ai',
      title: 'Artificial intelligence',
      description: 'AI-powered workflows',
    },
  ];

  return (
    <div>
      <h4 className="text-gray-400 text-xs font-semibold mb-3 uppercase">More</h4>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        {features.map((feature) => (
          <div
            key={feature.href}
            className="block group/item hover:bg-gray-800/50 p-2 rounded-md transition-colors cursor-pointer"
          >
            <div className="text-white font-semibold mb-0.5 text-sm">{feature.title}</div>
            <div className="text-gray-400 text-xs">{feature.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BottomBanner() {
  return (
    <div className="mt-4 pt-4 border-t border-gray-800 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-white font-semibold text-sm">New: Team owners</span>
        <span className="text-gray-400 text-xs">Permissions for team-level settings</span>
      </div>
      <span className="text-blue-500 hover:text-blue-400 font-semibold text-xs transition-colors cursor-pointer">
        Changelog
      </span>
    </div>
  );
}

export default function ProductDropdown() {
  return (
    <div className="absolute top-full left-0 mt-2 w-[700px] max-w-[90vw] bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
      <div className="grid grid-cols-2 gap-6">
        <CoreFeatures />
        <MoreFeatures />
      </div>
      <BottomBanner />
    </div>
  );
}
