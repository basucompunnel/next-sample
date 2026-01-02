'use client';

import { useState, useEffect, useRef } from 'react';
import LogosHeading from './LogosHeading';
import LogosImage from './LogosImage';

/**
 * Main company logos section component
 * - Showcases major companies using the product
 * - Uses intersection observer to trigger animations when 20% visible
 * - Coordinates heading → image animation sequence
 * - Interactive image reveals "Meet our customers" CTA on hover
 * - Centered layout with max-width constraint
 */
export default function CompanyLogos() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
      <div className="mx-auto w-full max-w-5xl px-6 text-center">
        <LogosHeading isVisible={isVisible} />
        <LogosImage isVisible={isVisible} />
      </div>
    </div>
  );
}
