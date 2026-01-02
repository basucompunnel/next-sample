'use client';

import { IoGitBranchOutline } from 'react-icons/io5';
import { LuBox, LuDiamond } from 'react-icons/lu';
import { HiOutlineChartBar } from 'react-icons/hi';
import { useState, useEffect, useRef } from 'react';

const capabilities = [
  {
    icon: IoGitBranchOutline,
    title: 'Initiatives',
    description: 'Coordinate strategic product efforts.',
  },
  {
    icon: LuBox,
    title: 'Cross-team projects',
    description: 'Collaborate across teams and departments.',
  },
  {
    icon: LuDiamond,
    title: 'Milestones',
    description: 'Break projects down into concrete phases.',
  },
  {
    icon: HiOutlineChartBar,
    title: 'Progress insights',
    description: 'Track scope, velocity, and progress over time.',
  },
];

function CapabilityCard({
  capability,
  index,
  isVisible,
}: {
  capability: typeof capabilities[0];
  index: number;
  isVisible: boolean;
}) {
  const Icon = capability.icon;

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
        <Icon className="h-6 w-6 text-white transition-all duration-500 group-hover:scale-125 group-hover:text-blue-400 group-hover:rotate-12" />
      </div>

      <h3
        className={`mb-2 text-lg font-semibold text-white transition-all duration-800 group-hover:text-blue-300 ${
          isVisible
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-8'
        }`}
        style={{
          transitionDelay: `${index * 150 + 200}ms`,
        }}
      >
        {capability.title}
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
        {capability.description}
      </p>

      <div className="mt-3 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 group-hover:w-full" />
    </div>
  );
}

export default function ProjectCapabilitiesSection() {
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
        <div className="grid gap-12 md:grid-cols-4">
          {capabilities.map((capability, index) => (
            <CapabilityCard
              key={capability.title}
              capability={capability}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
