'use client';

import { useState, useEffect, useRef } from 'react';
import WorkflowColumn from './WorkflowColumn';

/**
 * Workflow section component
 * - Showcases two workflow features: Cycles and Triage
 * - Two-column responsive grid (1 col mobile, 2 cols desktop)
 * - Uses intersection observer at 15% threshold for early animation trigger
 * - Each column has independent staggered animations
 * - Images slide symmetrically from their respective sides for balanced visual effect
 */
export default function WorkflowSection() {
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
          <WorkflowColumn
            title="Build momentum with Cycles"
            description="Create healthy routines and focus your team on what work should happen next."
            imageSrc="/assets/images/build-momentum-with-cycles.png"
            index={0}
            isVisible={isVisible}
          />
          <WorkflowColumn
            title="Manage incoming work with Triage"
            description="Review and assign incoming bug reports, feature requests, and other unplanned work."
            imageSrc="/assets/images/manage-incoming-work-with-triage.png"
            index={1}
            isVisible={isVisible}
          />
        </div>
      </div>
    </div>
  );
}
