'use client';

import { useState, useEffect, useRef } from 'react';
import { IoChevronForward } from 'react-icons/io5';

/**
 * Section header with animated heading and description
 * - Uses intersection observer to trigger animations at 20% visibility
 * - Heading fades in with blur-to-sharp effect (1s duration)
 * - Description follows with 200ms delay for staggered entrance
 * - "Make the switch" link has chevron that translates right on hover
 * - Responsive layout: stacked on mobile, side-by-side on large screens
 */
export default function SectionHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of header is visible
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={headerRef}
      className="mb-12 flex flex-col items-start justify-between gap-8 lg:flex-row"
    >
      <h2 
        className={`max-w-xl text-5xl font-semibold leading-tight text-white md:text-5xl transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0 blur-0' 
            : 'opacity-0 translate-y-8 blur-md'
        }`}
      >
        Made for modern product teams
      </h2>
      <div 
        className={`max-w-md transition-all duration-1000 delay-200 ${
          isVisible 
            ? 'opacity-100 translate-y-0 blur-0' 
            : 'opacity-0 translate-y-8 blur-md'
        }`}
      >
        <p className="mb-4 text-lg text-gray-400">
          Linear is shaped by the practices and principles that distinguish world-class product
          teams from the rest: relentless focus, fast execution, and a commitment to the quality of
          craft.{' '}
          <button
            className="group inline-flex items-center gap-1 font-semibold text-white cursor-pointer"
          >
            Make the switch
            <IoChevronForward className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </p>
      </div>
    </div>
  );
}
