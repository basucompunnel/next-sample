'use client';

import Image from 'next/image';
import { IoChevronForward } from 'react-icons/io5';
import { getAssetPath } from '@/lib/utils';
import { useState, useEffect, useRef } from 'react';

export default function ProductDirectionSection() {
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
          className={`flex items-center gap-2 mb-6 transition-all duration-700 ${
            isVisible 
              ? 'opacity-100 translate-y-0 blur-0' 
              : 'opacity-0 -translate-y-4 blur-sm'
          }`}
        >
          <div className="group flex items-center gap-2 text-sm cursor-pointer">
            <span className="inline-block h-2 w-4 rounded-full bg-green-500 transition-all duration-300 group-hover:w-6 group-hover:shadow-[0_0_12px_rgba(34,197,94,0.6)]"></span>
            <span className="text-gray-400 transition-colors duration-300 group-hover:text-white">Project and long-term planning</span>
            <IoChevronForward className="text-xs text-gray-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white group-hover:scale-125" />
          </div>
        </div>

        <h2 
          className={`mb-8 text-5xl font-semibold leading-tight text-white transition-all duration-1000 delay-100 ${
            isVisible 
              ? 'opacity-100 translate-y-0 blur-0' 
              : 'opacity-0 translate-y-8 blur-md'
          }`}
        >
          Set the product direction
        </h2>

        <div 
          className={`max-w-2xl transition-all duration-1000 delay-200 ${
            isVisible 
              ? 'opacity-100 translate-y-0 blur-0' 
              : 'opacity-0 translate-y-8 blur-md'
          }`}
        >
          <p className="text-lg text-gray-400">
            <span className="text-white">Align your team around a unified product timeline.</span>{' '}
            Plan, manage, and track all product initiatives with Linear's visual planning tools.
          </p>
        </div>
      </div>

      <div 
        className={`mt-12 transition-all duration-1200 delay-300 ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100 blur-0' 
            : 'opacity-0 translate-y-12 scale-95 blur-md'
        }`}
      >
        <div className="overflow-hidden rounded-lg">
          <Image
            src={getAssetPath('/assets/images/set-the-product-direction.png')}
            alt="Set the product direction"
            width={1200}
            height={800}
            className="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
