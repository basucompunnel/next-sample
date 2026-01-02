'use client';

import { useState, useEffect, useRef } from 'react';

export default function CTASection() {
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

  const headingWords = "Plan the present. Build the future.".split(' ');

  return (
    <div className="py-24" ref={sectionRef}>
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-semibold text-white">
            {headingWords.map((word, index) => (
              <span
                key={`cta-${index}`}
                className={`inline-block transition-all duration-800 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 blur-0' 
                    : 'opacity-0 translate-y-8 blur-md'
                }`}
                style={{
                  transitionDelay: `${index * 80}ms`
                }}
              >
                {word}&nbsp;
              </span>
            ))}
          </h2>
          
          <div className="flex items-center gap-4">
            <button 
              className={`rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-base font-medium text-white transition-all duration-300 hover:bg-gray-800 hover:border-white/20 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-pointer ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? '500ms' : '0ms' }}
            >
              Contact sales
            </button>
            <button 
              className={`rounded-lg bg-white px-4 py-2 text-base font-medium text-black transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-[0_4px_12px_rgba(255,255,255,0.15)] hover:-translate-y-0.5 cursor-pointer ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: isVisible ? '650ms' : '0ms' }}
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
