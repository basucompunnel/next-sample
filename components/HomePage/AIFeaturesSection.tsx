'use client';

import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';
import { useState, useEffect, useRef } from 'react';

function FeatureColumn({
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
      className={`flex flex-col transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0 blur-0' 
          : 'opacity-0 translate-y-12 blur-md'
      }`}
      style={{
        transitionDelay: `${index * 200}ms`
      }}
    >
      <h3 
        className={`mb-2 text-2xl font-medium text-white transition-all duration-800 ${
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
      <div 
        className={`flex-1 transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100 blur-0' 
            : 'opacity-0 translate-y-8 scale-95 blur-md'
        }`}
        style={{
          transitionDelay: `${index * 200 + 300}ms`
        }}
      >
        <div className="overflow-hidden rounded-lg">
          <div className="group overflow-hidden rounded-lg">
            <Image
              src={imageSrc}
              alt={title}
              width={800}
              height={600}
              className={`h-auto w-full rounded-lg transition-all duration-1200 group-hover:scale-105 group-hover:brightness-110 ${
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
      </div>
    </div>
  );
}

export default function AIFeaturesSection() {
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
          <FeatureColumn
            title="Self-driving product operations"
            description="Streamline your product development workflows with AI assistance for routine, manual tasks."
            imageSrc={getAssetPath('/assets/images/self-driving-product-operations.png')}
            index={0}
            isVisible={isVisible}
          />
          <FeatureColumn
            title="Linear MCP"
            description="Connect Linear to your favorite tools including Cursor, Claude, ChatGPT, and more."
            imageSrc={getAssetPath('/assets/images/linear-mcp.png')}
            index={1}
            isVisible={isVisible}
          />
        </div>
      </div>
    </div>
  );
}
