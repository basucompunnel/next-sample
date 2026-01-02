'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';

/**
 * Hero image component with scroll-triggered animation
 * - Uses Intersection Observer to detect when image enters viewport
 * - Triggers at 20% visibility threshold for early animation start
 * - Applies fade-in-up-scale animation (opacity, movement, and scale combined)
 * - 1.2s animation duration for dramatic entrance
 * - perspective-1000 for 3D transform depth effect
 */
export default function HeroImage() {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of image is visible
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);
  
  return (
    <div ref={imageRef} className="w-full -mt-16 perspective-1000">
      <div 
        className={`${isVisible ? 'animate-fade-in-up-scale' : 'opacity-0'}`}
        style={{
          animationFillMode: 'forwards',
          animationDuration: '1.2s'
        }}
      >
        <Image 
          src={getAssetPath('/assets/images/hero-section.png')}
          alt="Linear App Interface"
          width={1200}
          height={800}
          className="w-full h-auto transform-gpu"
          priority
        />
      </div>
    </div>
  );
}
