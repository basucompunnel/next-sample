'use client';

import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';
import { useState, useEffect, useRef } from 'react';

function WorkflowColumn({ 
  title, 
  description, 
  imageSrc,
  index,
  isVisible,
}: { 
  title: string; 
  description: string; 
  imageSrc: string;
  index: number;
  isVisible: boolean;
}) {
  return (
    <div 
      className={`transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0 blur-0' 
          : 'opacity-0 translate-y-12 blur-md'
      }`}
      style={{
        transitionDelay: `${index * 200}ms`
      }}
    >
      <h3 
        className={`mb-4 text-2xl font-medium text-white transition-all duration-800 ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 -translate-x-8'
        }`}
        style={{
          transitionDelay: `${index * 200 + 100}ms`
        }}
      >
        {title}
      </h3>
      <p 
        className={`mb-8 text-base text-gray-400 transition-all duration-800 ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 -translate-x-8'
        }`}
        style={{
          transitionDelay: `${index * 200 + 200}ms`
        }}
      >
        {description}
      </p>
      <div className="overflow-hidden rounded-lg">
        <Image
          src={getAssetPath(imageSrc)}
          alt={title}
          width={600}
          height={400}
          className={`h-auto w-full rounded-lg transition-all duration-1200 hover:scale-105 hover:brightness-110 ${
            isVisible 
              ? 'translate-x-0' 
              : index === 0 ? '-translate-x-full' : 'translate-x-full'
          }`}
          style={{
            transitionDelay: `${index * 200 + 400}ms`
          }}
        />
      </div>
    </div>
  );
}

export default function WorkflowSection() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-24" ref={sectionRef}>
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="grid gap-24 md:grid-cols-2">
          <WorkflowColumn
            title="Build momentum with Cycles"
            description="Create healthy routines and focus your team on what work should happen next."
            imageSrc="/assets/images/build-momentum-with-cycles.png"
            index={0}
            isVisible={isVisible}
          />
          <WorkflowColumn
            title="Manage incoming work with Triage"
            description="Review and assign incoming bug reports, feature requests, and other unplanned work."
            imageSrc="/assets/images/manage-incoming-work-with-triage.png"
            index={1}
            isVisible={isVisible}
          />
        </div>
      </div>
    </div>
  );
}
