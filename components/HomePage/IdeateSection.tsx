'use client'

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';

const features = [
  {
    id: 'collaborative-documents',
    title: 'Collaborative documents',
    image: '/assets/images/collaborative-documents.png',
  },
  {
    id: 'inline-comments',
    title: 'Inline comments',
    image: '/assets/images/inline-comments.png',
  },
  {
    id: 'text-to-issue-commands',
    title: 'Text-to-issue commands',
    image: '/assets/images/text-to-issue-commands.png',
  },
];

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
      { threshold: 0.2 }
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
            <h2 
              className={`mb-12 text-2xl font-semibold leading-tight text-white transition-all duration-1000 ${
                inView 
                  ? 'opacity-100 translate-y-0 blur-0' 
                  : 'opacity-0 translate-y-8 blur-md'
              }`}
            >
              Ideate and specify<br />what to build next
            </h2>

            <div className="space-y-2">
              {features.map((feature, idx) => (
                <button
                  key={feature.id}
                  onClick={() => handleFeatureChange(feature.id)}
                  className={`flex w-full items-center gap-3 px-2 py-1 text-left transition-all duration-500 cursor-pointer ${
                    activeFeature === feature.id
                      ? 'border-l-4 border-green-500 pl-4 text-white translate-x-0'
                      : 'border-l-4 border-transparent text-gray-500 hover:text-gray-300 hover:translate-x-1'
                  } ${
                    inView 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: inView ? `${100 + idx * 100}ms` : '0ms'
                  }}
                >
                  <span className="text-lg transition-all duration-300">
                    {feature.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div 
            className={`relative overflow-hidden rounded-lg transition-all duration-1000 delay-300 ${
              inView 
                ? 'opacity-100 translate-x-0 scale-100 blur-0' 
                : 'opacity-0 translate-x-12 scale-95 blur-md'
            }`}
          >
            <Image
              src={getAssetPath(features.find(f => f.id === activeFeature)?.image || features[0].image)}
              alt={features.find(f => f.id === activeFeature)?.title || features[0].title}
              width={800}
              height={600}
              className={`h-auto w-full rounded-lg transition-all duration-300 ${
                isTransitioning ? 'opacity-0 scale-105 blur-sm' : 'opacity-100 scale-100 blur-0'
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
