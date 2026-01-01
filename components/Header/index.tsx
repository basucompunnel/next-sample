'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';
import ProductDropdown from './ProductDropdown';
import ResourcesDropdown from './ResourcesDropdown';

function Logo() {
  return (
    <div className="flex items-center gap-2 text-white font-semibold text-xl cursor-default group">
      <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
        <Image 
          src={getAssetPath('/assets/images/linear-app-logo.png')} 
          alt="Linear Logo" 
          width={24} 
          height={24}
          className="object-contain"
        />
      </div>
      <span className="transition-all duration-300 group-hover:tracking-wide">Linear</span>
    </div>
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
          <button className="relative text-gray-400 hover:text-white transition-all duration-300 text-sm px-3 py-2 rounded-md hover:bg-gray-800/50 cursor-pointer overflow-hidden">
            <span className="relative z-10">{item.label}</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
          </button>
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
      <button className="relative text-gray-300 hover:text-white transition-all duration-300 text-sm cursor-pointer group">
        <span className="relative z-10">Log in</span>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
      </button>
      <button className="relative bg-white text-black px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer overflow-hidden group">
        <span className="relative z-10 transition-transform duration-300 group-hover:scale-105 inline-block">
          Sign up
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </button>
    </div>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-lg shadow-lg' : 'bg-black'
    } border-b border-gray-800`}>
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
