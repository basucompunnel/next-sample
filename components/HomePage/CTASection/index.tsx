'use client';

import { useState, useEffect, useRef } from 'react';
import CTAHeading from './CTAHeading';
import ContactSalesButton from './ContactSalesButton';
import GetStartedButton from './GetStartedButton';

/**
 * Call-to-action section component at bottom of homepage
 * - Final conversion point with dual CTA buttons
 * - Word-by-word heading animation (80ms stagger) for dramatic entrance
 * - Single intersection observer (20% threshold) triggers all animations
 * - Horizontal layout: heading on left, buttons on right
 * - Animation sequence:
 *   1. Heading words appear one by one (0ms, 80ms, 160ms, etc.)
 *   2. "Contact sales" button (500ms delay) - secondary style
 *   3. "Get started" button (650ms delay) - primary style with scale
 * - "Contact sales": Border style, white glow shadow on hover, subtle scale
 * - "Get started": Solid white background, lifts up on hover (-translate-y-0.5), shadow effect
 * - Clean, minimal design focused on conversion
 */
export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Observer triggers all section animations when 20% visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-24" ref={sectionRef}>
      <div className="mx-auto w-full max-w-5xl px-6">
        {/* Horizontal layout: heading on left, CTA buttons on right */}
        <div className="flex items-center justify-between">
          {/* Heading with word-by-word animation (80ms stagger) */}
          <CTAHeading isVisible={isVisible} />
          
          {/* Dual CTA buttons: secondary (Contact sales) and primary (Get started) */}
          <div className="flex items-center gap-4">
            <ContactSalesButton isVisible={isVisible} />
            <GetStartedButton isVisible={isVisible} />
          </div>
        </div>
      </div>
    </div>
  );
}
