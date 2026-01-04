'use client';

import { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';

/**
 * Mobile navigation menu with expandable sections
 * - Slides in from right side with backdrop overlay
 * - Accordion-style dropdowns for Product and Resources
 * - All navigation and auth options included
 * - Smooth animations for opening/closing
 * @param isOpen - Controls menu visibility
 * @param onClose - Callback to close menu
 */
export default function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const productFeatures = [
    { title: 'Plan', description: 'Set the product direction with projects and initiatives' },
    { title: 'Build', description: 'Make progress with issue tracking and cycle planning' },
    { title: 'Customer requests', description: 'Manage user feedback' },
    { title: 'Integrations', description: 'Collaborate across tools' },
    { title: 'Insights', description: 'Realtime analytics' },
    { title: 'Mobile app', description: 'Linear in your pocket' },
    { title: 'Linear Asks', description: 'Workplace requests' },
    { title: 'Artificial intelligence', description: 'AI-powered workflows' },
  ];

  const resourceLinks = [
    { title: 'About', description: 'Meet the team' },
    { title: 'Careers', description: "We're hiring" },
    { title: 'Developers', description: 'Build on the Linear API' },
    { title: 'Security', description: 'Safe, secure, and private' },
    { title: 'Docs', description: 'How to use Linear' },
    { title: 'Switch to Linear', description: 'Migration guide' },
    { title: 'Download', description: 'Get the app' },
    { title: 'Quality', description: 'Conversations on quality' },
  ];

  return (
    <>
      {/* Backdrop overlay - fades in when menu opens */}
      <div
        className={`md:hidden fixed inset-0 bg-black/80 transition-opacity duration-300 z-40 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Mobile menu panel - slides in from right */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-[#0a0a0a] border-l border-gray-800 z-50 transition-transform duration-300 overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 space-y-6">
          {/* Navigation items */}
          <nav className="space-y-2">
            {/* Product section with expandable dropdown */}
            <div>
              <button
                onClick={() => toggleSection('product')}
                className="w-full flex items-center justify-between text-gray-300 hover:text-white transition-colors py-3 text-base"
              >
                <span>Product</span>
                <IoChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    expandedSection === 'product' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {/* Product dropdown content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedSection === 'product' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-4 pt-2 pb-4 space-y-3">
                  {productFeatures.map((feature) => (
                    <div key={feature.title} className="py-2">
                      <div className="text-white font-semibold text-sm mb-1">{feature.title}</div>
                      <div className="text-gray-400 text-xs">{feature.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Resources section with expandable dropdown */}
            <div>
              <button
                onClick={() => toggleSection('resources')}
                className="w-full flex items-center justify-between text-gray-300 hover:text-white transition-colors py-3 text-base"
              >
                <span>Resources</span>
                <IoChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    expandedSection === 'resources' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {/* Resources dropdown content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedSection === 'resources' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-4 pt-2 pb-4 space-y-3">
                  {resourceLinks.map((link) => (
                    <div key={link.title} className="py-2">
                      <div className="text-white font-semibold text-sm mb-1">{link.title}</div>
                      <div className="text-gray-400 text-xs">{link.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct navigation links */}
            <button className="w-full text-left text-gray-300 hover:text-white transition-colors py-3 text-base">
              Pricing
            </button>
            <button className="w-full text-left text-gray-300 hover:text-white transition-colors py-3 text-base">
              Customers
            </button>
            <button className="w-full text-left text-gray-300 hover:text-white transition-colors py-3 text-base">
              Now
            </button>
            <button className="w-full text-left text-gray-300 hover:text-white transition-colors py-3 text-base">
              Contact
            </button>
          </nav>

          {/* Divider */}
          <div className="border-t border-gray-800"></div>

          {/* Auth buttons - stacked vertically on mobile */}
          <div className="space-y-3">
            <button className="w-full text-center text-gray-300 hover:text-white transition-colors py-3 text-base border border-gray-700 rounded-md hover:bg-gray-800/50">
              Log in
            </button>
            <button className="w-full text-center bg-white text-black py-3 rounded-md text-base font-medium hover:bg-gray-200 transition-colors">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
