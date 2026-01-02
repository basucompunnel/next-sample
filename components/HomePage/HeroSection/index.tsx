'use client';

import HeroTitle from './HeroTitle';
import HeroDescription from './HeroDescription';
import HeroActions from './HeroActions';
import HeroImage from './HeroImage';

/**
 * Main hero section component
 * - First section users see on homepage
 * - Orchestrates animated entrance sequence: title → description → actions → image
 * - Contains centered content (max-width 5xl) with responsive padding
 * - Image positioned below content with negative margin for visual overlap
 */
export default function HeroSection() {
  return (
    <div className="py-24 animate-fade-in">
      <div className="max-w-5xl w-full mx-auto px-6">
        <HeroTitle />
        <HeroDescription />
        <HeroActions />
      </div>
      <HeroImage />
    </div>
  );
}
