'use client';

import { useState, useEffect, useRef } from 'react';
import Badge from './Badge';
import Heading from './Heading';
import Description from './Description';
import IssueTrackingImage from './IssueTrackingImage';

/**
 * Issue tracking section component
 * - Showcases Linear's task tracking and sprint planning capabilities
 * - Uses intersection observer to trigger animations at 20% visibility
 * - Cascading animation sequence: badge → heading → subheading → description → image
 * - Badge: Yellow pill with glow effect on hover
 * - Heading: Large text with blur-to-sharp fade-in (100ms delay)
 * - Subheading: Bold text emphasizing speed and efficiency (200ms delay)
 * - Description: Detailed text explaining features (300ms delay)
 * - Image: Full-width showcase with scale-up animation (400ms delay, 1.2s duration)
 * - Image hover: Scales to 105% for interactive feedback
 */
export default function IssueTrackingSection() {
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
      <IssueTrackingImage isVisible={isVisible} />
    </div>
  );
}
