'use client';

import { useState, useEffect } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import AuthButtons from './AuthButtons';
import MobileMenuButton from './MobileMenuButton';
import MobileMenu from './MobileMenu';

/**
 * Main Header component with scroll-based styling and mobile menu
 * - Fixed position at top of viewport
 * - Background blur and shadow appear when user scrolls down
 * - Contains Logo, Navigation, and Auth buttons
 * - Fully responsive: desktop navigation on md+, mobile menu on smaller screens
 * - Mobile menu slides in from right with backdrop overlay
 */
export default function Header() {
  // Track scroll position to add blur/shadow effects
  const [isScrolled, setIsScrolled] = useState(false);
  // Track mobile menu open/closed state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add effects when scrolled more than 10px from top
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        // Conditional styling based on scroll position
        isScrolled ? 'bg-black/95 backdrop-blur-lg shadow-lg' : 'bg-black'
      } border-b border-gray-800`}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Logo />
            {/* Desktop navigation - hidden on mobile */}
            <Navigation />
            {/* Desktop auth buttons - hidden on mobile */}
            <div className="hidden md:block">
              <AuthButtons />
            </div>
            {/* Mobile menu button - shown only on mobile */}
            <MobileMenuButton 
              isOpen={isMobileMenuOpen} 
              onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            />
          </div>
        </div>
      </header>
      {/* Mobile menu panel */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
