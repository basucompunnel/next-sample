'use client';

import Image from 'next/image';
import { IoChevronForward } from 'react-icons/io5';
import { getAssetPath } from '@/lib/utils';
import { LuCircle, LuLayers, LuFilter, LuFlame } from 'react-icons/lu';
import { useState, useEffect, useRef } from 'react';

const features = [
  {
    icon: LuCircle,
    title: 'Tailored workflows',
    description: 'Track progress across custom issue flows for your team.',
  },
  {
    icon: LuLayers,
    title: 'Custom views',
    description: 'Switch between list and board. Group issues with swimlanes.',
  },
  {
    icon: LuFilter,
    title: 'Filters',
    description: "Refine issue lists down to what's most relevant to you.",
  },
  {
    icon: LuFlame,
    title: 'SLAs',
    description: 'Automatically apply deadlines to time-sensitive tasks.',
  },
];

function FeatureCard({
  feature,
  index,
  isVisible,
}: {
  feature: typeof features[0];
  index: number;
  isVisible: boolean;
}) {
  const Icon = feature.icon;

  return (
    <div
      className={`group cursor-pointer transition-all duration-1000 ${
        isVisible
          ? 'opacity-100 translate-y-0 blur-0'
          : 'opacity-0 translate-y-12 blur-md'
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div
        className={`mb-4 transition-all duration-800 ${
          isVisible
            ? 'opacity-100 rotate-0 scale-100'
            : 'opacity-0 -rotate-45 scale-50'
        }`}
        style={{
          transitionDelay: `${index * 150 + 100}ms`,
        }}
      >
        <Icon className="h-6 w-6 text-white transition-all duration-500 group-hover:scale-125 group-hover:text-purple-400 group-hover:rotate-12" />
      </div>

      <h3
        className={`mb-2 text-lg font-semibold text-white transition-all duration-800 group-hover:text-purple-300 ${
          isVisible
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-8'
        }`}
        style={{
          transitionDelay: `${index * 150 + 200}ms`,
        }}
      >
        {feature.title}
      </h3>

      <p
        className={`text-sm text-gray-400 transition-all duration-800 group-hover:text-gray-300 ${
          isVisible
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-8'
        }`}
        style={{
          transitionDelay: `${index * 150 + 300}ms`,
        }}
      >
        {feature.description}
      </p>

      <div className="mt-3 h-0.5 w-0 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-500 group-hover:w-full" />
    </div>
  );
}

export default function LinearInsightsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageVisible(true);
          }
        });
      },
      { threshold: 0.1 }
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
