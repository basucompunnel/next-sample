'use client';

import { useState, useEffect, useRef } from 'react';
import { getAssetPath } from '@/lib/utils';
import FeatureColumn from './FeatureColumn';

/**
 * AI features section component
 * - Showcases two main AI features: Self-driving operations and Linear MCP
 * - Two-column responsive grid (1 col mobile, 2 cols desktop)
 * - Uses intersection observer at 15% threshold for early animation trigger
 * - Each column has independent staggered animations
 * - Images slide from opposite directions for dynamic visual effect
 */
export default function AIFeaturesSection() {
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
            title="Self-driving product operations"
            description="Streamline your product development workflows with AI assistance for routine, manual tasks."
            imageSrc={getAssetPath('/assets/images/self-driving-product-operations.png')}
            index={0}
            isVisible={isVisible}
          />
          <FeatureColumn
            title="Linear MCP"
            description="Connect Linear to your favorite tools including Cursor, Claude, ChatGPT, and more."
            imageSrc={getAssetPath('/assets/images/linear-mcp.png')}
            index={1}
            isVisible={isVisible}
          />
        </div>
      </div>
    </div>
  );
}
