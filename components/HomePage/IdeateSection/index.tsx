'use client'

import { useState, useEffect, useRef } from 'react';
import { features } from './features';
import FeatureHeading from './FeatureHeading';
import FeatureButtons from './FeatureButtons';
import FeatureImage from './FeatureImage';

/**
 * Ideate section component with interactive feature switching
 * - Showcases three ideation features: Collaborative docs, Inline comments, Text-to-issue
 * - Two-column layout: feature list on left, dynamic image on right
 * - Uses intersection observer to trigger entrance animations at 20% visibility
 * - Interactive feature switching with crossfade transition (150ms)
 * - Active feature highlighted with green left border
 * - Heading fades in with blur effect
 * - Feature buttons stagger in with 100ms intervals
 * - Image slides in from right with scale effect (300ms delay)
 * - Image crossfades when switching between features
 */
export default function IdeateSection() {
  const [activeFeature, setActiveFeature] = useState('collaborative-documents');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkVisibility = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of section is visible
    );

    const current = containerRef.current;
    if (current) {
      checkVisibility.observe(current);
    }

    return () => {
      if (current) {
        checkVisibility.unobserve(current);
      }
    };
  }, []);

  /**
   * Handle feature switching with crossfade effect
   * - Sets transitioning state to fade out current image
   * - After 150ms, switches to new feature and fades in
   * - Prevents redundant transitions if same feature clicked
   */
  const handleFeatureChange = (featureId: string) => {
    if (featureId === activeFeature) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveFeature(featureId);
      setIsTransitioning(false);
    }, 150);
  };

  return (
    <div className="py-24" ref={containerRef}>
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <FeatureHeading inView={inView} />
            <FeatureButtons
              features={features}
              activeFeature={activeFeature}
              onFeatureChange={handleFeatureChange}
              inView={inView}
            />
          </div>
          <FeatureImage
            features={features}
            activeFeature={activeFeature}
            isTransitioning={isTransitioning}
            inView={inView}
          />
        </div>
      </div>
    </div>
  );
}
