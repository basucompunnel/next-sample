'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { IoChevronForward } from 'react-icons/io5';
import { getAssetPath } from '@/lib/utils';

function HeroTitle() {
  const words = "Linear is a purpose-built tool for planning and building products".split(" ");
  
  return (
    <h1 className="text-5xl md:text-6xl font-semibold text-white leading-tight mb-8">
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block opacity-0 animate-fade-in-up"
          style={{
            animationDelay: `${index * 0.1}s`,
            animationFillMode: 'forwards'
          }}
        >
          {word}&nbsp;
        </span>
      ))}
    </h1>
  );
}

function HeroDescription() {
  const line1 = "Meet the system for modern software development.".split(" ");
  const line2 = "Streamline issues, projects, and product roadmaps.".split(" ");
  const line1StartDelay = 1.2; // Start after title animation
  const line2StartDelay = line1StartDelay + (line1.length * 0.05);
  
  return (
    <div className="space-y-1 mb-10">
      <p className="text-lg md:text-xl text-gray-400">
        {line1.map((word, index) => (
          <span
            key={`line1-${word}-${index}`}
            className="inline-block opacity-0 animate-fade-in-up"
            style={{
              animationDelay: `${line1StartDelay + (index * 0.05)}s`,
              animationFillMode: 'forwards'
            }}
          >
            {word}&nbsp;
          </span>
        ))}
      </p>
      <p className="text-lg md:text-xl text-gray-400">
        {line2.map((word, index) => (
          <span
            key={`line2-${word}-${index}`}
            className="inline-block opacity-0 animate-fade-in-up"
            style={{
              animationDelay: `${line2StartDelay + (index * 0.05)}s`,
              animationFillMode: 'forwards'
            }}
          >
            {word}&nbsp;
          </span>
        ))}
      </p>
    </div>
  );
}

function HeroActions() {
  const actionsStartDelay = 2;
  
  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
      <button
        className="opacity-0 animate-fade-in-up bg-white text-black px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors cursor-pointer"
        style={{
          animationDelay: `${actionsStartDelay}s`,
          animationFillMode: 'forwards'
        }}
      >
        Start building
      </button>
      <button
        className="opacity-0 animate-fade-in-up bg-transparent text-gray-300 hover:text-white hover:bg-[#2a2a2a] transition-all flex items-center gap-2 px-6 py-3 rounded-lg text-sm cursor-pointer"
        style={{
          animationDelay: `${actionsStartDelay + 0.15}s`,
          animationFillMode: 'forwards'
        }}
      >
        <span className="font-semibold text-white">New:</span>
        <span>Linear agent for Slack</span>
        <IoChevronForward className="text-sm" />
      </button>
    </div>
  );
}

function HeroImage() {
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

export default function HeroSection() {
  return (
    <div className="py-24 animate-fade-in">
      <div className="max-w-5xl w-full mx-auto px-6">
        <HeroTitle />
        <HeroDescription />
        <HeroActions />
      </div>
      <HeroImage />
    </div>
  );
}
