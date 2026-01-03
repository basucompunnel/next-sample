'use client';

import { useState, useEffect, useRef } from 'react';
import { capabilities } from './capabilities';
import CapabilityCard from './CapabilityCard';

/**
 * Project capabilities section component
 * - Showcases four key project capabilities: Initiatives, Cross-team projects, Milestones, Progress insights
 * - Four-column responsive grid (1 col mobile, 4 cols desktop)
 * - Uses intersection observer at 20% threshold for animation trigger
 * - Each card has independent staggered animations with 150ms intervals
 * - Blue/purple theme for icons and gradient underlines
 * - Interactive hover states on all cards
 */
export default function ProjectCapabilitiesSection() {
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
        <div className="grid gap-12 md:grid-cols-4">
          {capabilities.map((capability, index) => (
            <CapabilityCard
              key={capability.title}
              capability={capability}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
