'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { IoChevronForward } from 'react-icons/io5';
import { getAssetPath } from '@/lib/utils';

function LogosHeading({ isVisible }: { isVisible: boolean }) {
  const headingWords = "Powering the world's best product teams.".split(' ');
  const subWords = "From next-gen startups to established enterprises.".split(' ');
  
  return (
    <>
      <h2 className="mb-4 text-3xl font-semibold text-white md:text-4xl">
        {headingWords.map((word, index) => (
          <span
            key={`heading-${index}`}
            className={`inline-block transition-all duration-600 ${
              isVisible 
                ? 'opacity-100 translate-y-0 blur-0' 
                : 'opacity-0 translate-y-4 blur-sm'
            }`}
            style={{
              transitionDelay: `${index * 50}ms`
            }}
          >
            {word}&nbsp;
          </span>
        ))}
      </h2>
      <p className="mb-16 text-lg text-gray-400 md:text-xl">
        {subWords.map((word, index) => (
          <span
            key={`sub-${index}`}
            className={`inline-block transition-all duration-600 ${
              isVisible 
                ? 'opacity-100 translate-y-0 blur-0' 
                : 'opacity-0 translate-y-4 blur-sm'
            }`}
            style={{
              transitionDelay: `${(headingWords.length * 50) + (index * 40)}ms`
            }}
          >
            {word}&nbsp;
          </span>
        ))}
      </p>
    </>
  );
}

function LogosImage({ isVisible }: { isVisible: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const imageDelay = 600;

  return (
    <div
      className={`relative transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100 blur-0' 
          : 'opacity-0 translate-y-12 scale-95 blur-md'
      }`}
      style={{ transitionDelay: `${imageDelay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg group">
        <Image
          src={getAssetPath('/assets/images/company-logos.png')}
          alt="Company Logos"
          width={1200}
          height={400}
          className={`h-auto w-full transition-all duration-500 ${
            isHovered ? 'blur-sm scale-105' : 'blur-0 scale-100'
          }`}
        />
        
        <div 
          className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 ${
            isVisible ? 'translate-x-full' : '-translate-x-full'
          }`}
          style={{ transitionDelay: `${imageDelay}ms` }}
        />
      </div>

      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center animate-fade-in-scale">
          <button
            className="group/btn flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:border-white/30 cursor-pointer shadow-lg hover:shadow-xl"
          >
            <span className="transition-transform duration-300 group-hover/btn:scale-105">
              Meet our customers
            </span>
            <IoChevronForward className="text-sm transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:scale-125" />
          </button>
        </div>
      )}
    </div>
  );
}

export default function CompanyLogos() {
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
      <div className="mx-auto w-full max-w-5xl px-6 text-center">
        <LogosHeading isVisible={isVisible} />
        <LogosImage isVisible={isVisible} />
      </div>
    </div>
  );
}
