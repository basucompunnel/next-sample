'use client';

import Image from 'next/image';
import { IoChevronForward } from 'react-icons/io5';
import { getAssetPath } from '@/lib/utils';
import { useState, useEffect, useRef } from 'react';

const features = [
  {
    title: 'Linear Sync Engine',
    description: 'Built with a high-performance architecture and an obsessive focus on speed.',
  },
  {
    title: 'Enterprise-ready security',
    description: 'Best-in-class security practices keep your work safe and secure at every layer.',
    hasArrow: true,
  },
  {
    title: 'Engineered for scale',
    description: 'Built for teams of all sizes. From early-stage startups to global enterprises.',
  },
];

export default function FoundationsSection() {
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
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div 
              className={`group mb-6 flex items-center gap-2 text-sm text-gray-400 cursor-pointer transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0 blur-0' 
                  : 'opacity-0 -translate-y-4 blur-sm'
              }`}
            >
              <span className="inline-block h-1 w-4 bg-gray-600 transition-all duration-300 group-hover:w-8"></span>
              <span className="transition-colors duration-300 group-hover:text-white">Under the hood</span>
            </div>

            <h2 
              className={`mb-6 text-5xl font-semibold leading-tight text-white transition-all duration-1000 delay-100 ${
                isVisible 
                  ? 'opacity-100 translate-y-0 blur-0' 
                  : 'opacity-0 translate-y-8 blur-md'
              }`}
            >
              Built on strong foundations
            </h2>

            <p 
              className={`mb-12 text-base text-gray-400 transition-all duration-1000 delay-200 ${
                isVisible 
                  ? 'opacity-100 translate-y-0 blur-0' 
                  : 'opacity-0 translate-y-8 blur-md'
              }`}
            >
              Linear is so simple to use, it's easy to overlook the wealth of complex technologies packed under the hood that keep Linear robust, safe, and blazing fast.
            </p>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className={`group cursor-pointer transition-all duration-1000 hover:translate-x-1 hover:bg-white/5 rounded-lg p-3 -ml-3 ${
                    isVisible 
                      ? 'opacity-100 translate-x-0 blur-0' 
                      : 'opacity-0 -translate-x-8 blur-sm'
                  }`}
                  style={{
                    transitionDelay: `${300 + index * 150}ms`
                  }}
                >
                  <h3 className="mb-2 flex items-center gap-2 text-lg font-medium text-white transition-colors duration-300 group-hover:text-blue-300">
                    {feature.title}
                    {feature.hasArrow && (
                      <IoChevronForward className="text-sm text-gray-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white group-hover:scale-125" />
                    )}
                  </h3>
                  <p className="text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div 
            className={`flex items-center transition-all duration-1200 delay-400 ${
              isVisible 
                ? 'opacity-100 translate-x-0 scale-100 blur-0' 
                : 'opacity-0 translate-x-12 scale-95 blur-md'
            }`}
          >
            <div className="overflow-hidden rounded-lg">
              <Image
                src={getAssetPath('/assets/images/built-on-strong-foundations.png')}
                alt="Built on strong foundations"
                width={800}
                height={800}
                className="h-auto w-full transition-all duration-700 hover:scale-105 hover:rotate-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
