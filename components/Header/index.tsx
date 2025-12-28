'use client';

import Link from 'next/link';
import ProductDropdown from './ProductDropdown';
import ResourcesDropdown from './ResourcesDropdown';

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-white font-semibold text-xl">
      <img 
        src="/assets/images/linear-app-logo.png" 
        alt="Linear Logo" 
        width="24" 
        height="24"
        className="object-contain"
      />
      Linear
    </Link>
  );
}

function Navigation() {
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
          {item.hasDropdown ? (
            <button className="text-gray-300 hover:text-white transition-colors text-sm px-3 py-2 rounded-md hover:bg-gray-800/50">
              {item.label}
            </button>
          ) : (
            <Link 
              href={item.href} 
              className="text-gray-300 hover:text-white transition-colors text-sm px-3 py-2 rounded-md hover:bg-gray-800/50 block"
            >
              {item.label}
            </Link>
          )}
          {item.dropdown === 'product' && <ProductDropdown />}
          {item.dropdown === 'resources' && <ResourcesDropdown />}
        </div>
      ))}
    </nav>
  );
}

function AuthButtons() {
  return (
    <div className="flex items-center gap-4">
      <Link href="/login" className="text-gray-300 hover:text-white transition-colors text-sm">
        Log in
      </Link>
      <Link 
        href="/signup" 
        className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
      >
        Sign up
      </Link>
    </div>
  );
}

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <Navigation />
          <AuthButtons />
        </div>
      </div>
    </header>
  );
}
