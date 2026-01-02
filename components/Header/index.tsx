'use client';

import { useState, useEffect } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import AuthButtons from './AuthButtons';

/**
 * Main Header component with scroll-based styling
 * - Fixed position at top of viewport
 * - Background blur and shadow appear when user scrolls down
 * - Contains Logo, Navigation, and Auth buttons
 * - Fully responsive layout
 */
export default function Header() {
  // Track scroll position to add blur/shadow effects
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add effects when scrolled more than 10px from top
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      // Conditional styling based on scroll position
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
