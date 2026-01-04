'use client';

import { useState, useEffect, useRef } from 'react';
import Badge from './Badge';
import Heading from './Heading';
import Description from './Description';
import FeatureCard from './FeatureCard';
import FoundationsImage from './FoundationsImage';
import { features } from './features';

/**
 * Foundations section component showcasing technical infrastructure
 * - "Under the hood" theme highlighting Linear's technical capabilities
 * - Two-column layout: left side with text content, right side with image
 * - Single intersection observer (20% threshold) triggers all animations
 * - Cascading entrance sequence:
 *   1. Badge with expanding line (0ms delay)
 *   2. Heading (100ms delay)
 *   3. Description (200ms delay)
 *   4. Three feature cards (300ms, 450ms, 600ms staggered)
 *   5. Image (400ms delay)
 * - Badge: Gray line expands from 4 to 8 width on hover
 * - Feature cards: Slide in from left, hover effects with blue theme and background highlight
 * - Security feature has interactive arrow that translates and scales on hover
 * - Image: Entrance from right with scale, hover effects (scale 105% + rotate 2°)
 * - Blue theme differentiates from purple LinearInsights section
 */
export default function FoundationsSection() {
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
        {/* Two-column grid: left side with content, right side with image */}
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            {/* Badge with expanding line animation on hover */}
            <Badge isVisible={isVisible} />

            <Heading isVisible={isVisible} />

            <Description isVisible={isVisible} />

            {/* Feature cards with staggered entrance (150ms intervals) and hover effects */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  feature={feature}
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>

          {/* Image with entrance from right and hover effects (scale + rotate) */}
          <FoundationsImage isVisible={isVisible} />
        </div>
      </div>
    </div>
  );
}
