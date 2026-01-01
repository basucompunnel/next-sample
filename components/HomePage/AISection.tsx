'use client';

import Image from 'next/image';
import { IoChevronForward } from 'react-icons/io5';
import { getAssetPath } from '@/lib/utils';
import { useState, useEffect, useRef } from 'react';

export default function AISection() {
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
        <div 
          className={`mb-3 flex items-center gap-2 transition-all duration-700 ${
            isVisible 
              ? 'opacity-100 translate-y-0 blur-0' 
              : 'opacity-0 -translate-y-4 blur-sm'
          }`}
        >
          <div className="group flex items-center gap-2 text-sm cursor-pointer">
            <span className="inline-block h-2 w-4 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-6 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.6)]"></span>
            <span className="text-gray-300 transition-colors duration-300 group-hover:text-white">Artificial intelligence</span>
            <IoChevronForward className="text-xs text-gray-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white group-hover:scale-125" />
          </div>
        </div>

        <h2 
          className={`mb-4 text-5xl leading-tight font-semibold text-white transition-all duration-1000 delay-100 ${
            isVisible 
              ? 'opacity-100 translate-y-0 blur-0' 
              : 'opacity-0 translate-y-8 blur-md'
          }`}
        >
          AI-assisted product development
        </h2>

        <div 
          className={`max-w-sm transition-all duration-1000 delay-200 ${
            isVisible 
              ? 'opacity-100 translate-y-0 blur-0' 
              : 'opacity-0 translate-y-8 blur-md'
          }`}
        >
          <p className="mb-4 text-base text-gray-400">
            <span className="font-semibold text-white">Linear for Agents.</span> Choose from a
            variety of AI agents and start delegating work, from code generation to other technical
            tasks.
          </p>

          <button
            className={`group inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800 hover:border-gray-600 hover:shadow-lg cursor-pointer ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}
          >
            <span className="transition-transform duration-300 group-hover:scale-105">Learn more</span>
            <IoChevronForward className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      <div 
        className={`mt-0 w-full transition-all duration-1200 delay-400 ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100 blur-0' 
            : 'opacity-0 translate-y-12 scale-95 blur-md'
        }`}
      >
        <div className="overflow-hidden">
          <Image
            src={getAssetPath('/assets/images/ai-assisted-product-development.png')}
            alt="AI-assisted product development"
            width={1920}
            height={1080}
            className="h-auto w-full transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
