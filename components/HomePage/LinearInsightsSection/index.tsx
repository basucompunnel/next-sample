'use client';

import Image from 'next/image';
import { IoChevronForward } from 'react-icons/io5';
import { getAssetPath } from '@/lib/utils';
import { useState, useEffect, useRef } from 'react';
import { features } from './features';
import FeatureCard from './FeatureCard';

/**
 * Linear Insights section component with dual intersection observers
 * - Showcases analytics and reporting capabilities
 * - Unique dual observer pattern: separate triggers for header and image/cards
 * - Header observer (20% threshold): triggers heading, description, and button animations
 * - Image observer (10% threshold): triggers image and feature cards independently
 * - Header section: heading → description → button (100ms, 200ms delays)
 * - Image: Large showcase with dramatic entrance (1.5s duration, -mt-32 for overlap)
 * - Four feature cards in grid (1 col mobile, 4 cols desktop) with purple/pink theme
 * - Cards triggered by image observer for synchronized entrance
 * - Purple/pink gradient theme distinguishes from blue project capabilities section
 */
export default function LinearInsightsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // First observer: triggers header section animations (heading, description, button)
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of header section is visible
    );

    // Second observer: triggers image and feature cards animations independently
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageVisible(true);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of image is visible for early animation
    );

    if (sectionRef.current) {
      headerObserver.observe(sectionRef.current);
    }

    if (imageRef.current) {
      imageObserver.observe(imageRef.current);
    }

    return () => {
      headerObserver.disconnect();
      imageObserver.disconnect();
    };
  }, []);

  return (
    <div className="py-24">
      {/* Header section with heading, description, and CTA button */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6" ref={sectionRef}>
        <h2 
          className={`mb-4 text-3xl font-semibold text-white transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0 blur-0' 
              : 'opacity-0 translate-y-8 blur-md'
          }`}
        >
          Linear Insights
        </h2>
        
        <p 
          className={`mb-8 max-w-2xl text-lg text-gray-400 transition-all duration-1000 delay-100 ${
            isVisible 
              ? 'opacity-100 translate-y-0 blur-0' 
              : 'opacity-0 translate-y-8 blur-md'
          }`}
        >
          Take the guesswork out of product planning with realtime analytics and reporting dashboards.
        </p>
        
        <button 
          className={`group mb-12 flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-sm text-white transition-all duration-300 hover:bg-gray-800 hover:border-gray-600 hover:shadow-lg cursor-pointer ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
        >
          <span className="transition-transform duration-300 group-hover:scale-105">Learn more</span>
          <IoChevronForward className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      {/* Large showcase image with dramatic entrance and negative margin for visual overlap */}
      <div 
        ref={imageRef}
        className={`transition-all duration-1500 ${
          imageVisible 
            ? 'opacity-100 translate-y-0 scale-100 blur-0' 
            : 'opacity-0 translate-y-20 scale-95 blur-md'
        }`}
      >
        <div className="overflow-hidden">
          <Image
            src={getAssetPath('/assets/images/linear-insights.png')}
            alt="Linear Insights"
            width={1200}
            height={800}
            className="h-auto w-full -mt-32 transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>

      {/* Feature cards grid with purple/pink theme (triggered by image observer) */}
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
              isVisible={imageVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
