'use client';

import { useState, useEffect, useRef } from 'react';
import Badge from './Badge';
import Heading from './Heading';
import Description from './Description';
import ProductImage from './ProductImage';

/**
 * Product direction section component
 * - Showcases Linear's project and long-term planning capabilities
 * - Uses intersection observer to trigger animations at 20% visibility
 * - Cascading animation sequence: badge → heading → description → image
 * - Badge: Green pill with glow effect on hover
 * - Heading: Large text with blur-to-sharp fade-in (100ms delay)
 * - Description: Detailed text emphasizing team alignment (200ms delay)
 * - Image: Full-width visual with scale-up animation (300ms delay, 1.2s duration)
 * - Image hover: Scales to 105% for interactive feedback
 */
export default function ProductDirectionSection() {
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
      { threshold: 0.2 } // Trigger when 20% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-24" ref={sectionRef}>
      <div className="mx-auto w-full max-w-5xl px-6">
        <Badge isVisible={isVisible} />
        <Heading isVisible={isVisible} />
        <Description isVisible={isVisible} />
      </div>
      <ProductImage isVisible={isVisible} />
    </div>
  );
}
