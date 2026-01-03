'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { getAssetPath } from '@/lib/utils';
import Modal from '../Modal';
import FeatureCard from './FeatureCard';

/**
 * Feature cards container with modal management
 * - Renders 3 feature cards in responsive grid (1 col mobile, 3 cols desktop)
 * - Uses intersection observer at 10% threshold for early animation trigger
 * - Manages modal state for all feature details
 * - Each card has staggered entrance based on its index position
 * - Modal renders separately for each feature with unique content
 */
export default function FeatureCards() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of cards are visible for early animation
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      id: 'purpose-built',
      title: 'Purpose-built for product development',
      imageSrc: getAssetPath('/assets/images/purpose-built-for-product-development.png'),
    },
    {
      id: 'designed-fast',
      title: 'Designed to move fast',
      imageSrc: getAssetPath('/assets/images/designed-to-move-fast.png'),
    },
    {
      id: 'crafted-perfection',
      title: 'Crafted to perfection',
      imageSrc: getAssetPath('/assets/images/crafted-to-perfection.png'),
    },
  ];

  return (
    <>
      <div ref={cardsRef} className="grid w-full md:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            onClick={() => setOpenModal(feature.id)}
            index={index}
            isVisible={isVisible}
          >
            <div className="relative h-full w-full">
              <Image
                src={feature.imageSrc}
                alt={feature.title}
                width={400}
                height={300}
                className="h-full w-full object-contain"
              />
            </div>
          </FeatureCard>
        ))}
      </div>

      {features.map((feature) => (
        <Modal
          key={feature.id}
          isOpen={openModal === feature.id}
          onClose={() => setOpenModal(null)}
          title={feature.title}
          imageSrc={feature.imageSrc}
          featureId={feature.id}
        />
      ))}
    </>
  );
}
