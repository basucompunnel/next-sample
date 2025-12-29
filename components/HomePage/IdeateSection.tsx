'use client'

import { useState } from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';

const features = [
  {
    id: 'collaborative-documents',
    title: 'Collaborative documents',
    image: '/assets/images/collaborative-documents.png',
  },
  {
    id: 'inline-comments',
    title: 'Inline comments',
    image: '/assets/images/inline-comments.png',
  },
  {
    id: 'text-to-issue-commands',
    title: 'Text-to-issue commands',
    image: '/assets/images/text-to-issue-commands.png',
  },
];

export default function IdeateSection() {
  const [activeFeature, setActiveFeature] = useState('collaborative-documents');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleFeatureChange = (featureId: string) => {
    if (featureId === activeFeature) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveFeature(featureId);
      setIsTransitioning(false);
    }, 150);
  };

  return (
    <div className="py-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-12 text-2xl font-semibold leading-tight text-white">
              Ideate and specify<br />what to build next
            </h2>

            <div className="space-y-2">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => handleFeatureChange(feature.id)}
                  className={`flex w-full items-center gap-3 px-2 py-1 text-left transition-all duration-300 ${
                    activeFeature === feature.id
                      ? 'border-l-5 border-green-500 pl-4 text-white'
                      : 'text-gray-500 hover:text-gray-400'
                  }`}
                >
                  <span className="text-lg">{feature.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <Image
              src={getAssetPath(features.find(f => f.id === activeFeature)?.image || features[0].image)}
              alt={features.find(f => f.id === activeFeature)?.title || features[0].title}
              width={800}
              height={600}
              className={`h-auto w-full rounded-lg transition-opacity duration-150 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
