'use client';

import { useState, useEffect, useRef } from 'react';
import FeatureColumn from './FeatureColumn';

/**
 * Project features section component
 * - Showcases two project management features: end-to-end management and project updates
 * - Two-column responsive grid (1 col mobile, 2 cols desktop)
 * - Uses intersection observer at 15% threshold for early animation trigger
 * - Each column has independent staggered animations
 * - Images slide symmetrically from their respective sides for balanced visual effect
 */
export default function ProjectFeaturesSection() {
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
      { threshold: 0.15 } // Trigger when 15% of section is visible for early animation
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-24" ref={sectionRef}>
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="grid gap-24 md:grid-cols-2">
          <FeatureColumn
            title="Manage projects end-to-end"
            description="Consolidate specs, milestones, tasks, and other documentation in one centralized location."
            imageSrc="/assets/images/manage-projects-end-to-end.png"
            index={0}
            isVisible={isVisible}
          />
          <FeatureColumn
            title="Project updates"
            description="Communicate progress and project health with built-in project updates."
            imageSrc="/assets/images/project-updates.png"
            index={1}
            isVisible={isVisible}
          />
        </div>
      </div>
    </div>
  );
}
