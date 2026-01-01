'use client';

import Image from 'next/image';
import { IoChevronForward } from 'react-icons/io5';
import { getAssetPath } from '@/lib/utils';
import { useState, useEffect, useRef } from 'react';
import Modal from './Modal';

function SectionHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

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

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={headerRef}
      className="mb-12 flex flex-col items-start justify-between gap-8 lg:flex-row"
    >
      <h2 
        className={`max-w-xl text-5xl font-semibold leading-tight text-white md:text-5xl transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0 blur-0' 
            : 'opacity-0 translate-y-8 blur-md'
        }`}
      >
        Made for modern product teams
      </h2>
      <div 
        className={`max-w-md transition-all duration-1000 delay-200 ${
          isVisible 
            ? 'opacity-100 translate-y-0 blur-0' 
            : 'opacity-0 translate-y-8 blur-md'
        }`}
      >
        <p className="mb-4 text-lg text-gray-400">
          Linear is shaped by the practices and principles that distinguish world-class product
          teams from the rest: relentless focus, fast execution, and a commitment to the quality of
          craft.{' '}
          <button
            className="group inline-flex items-center gap-1 font-semibold text-white cursor-pointer"
          >
            Make the switch
            <IoChevronForward className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </p>
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  children,
  onClick,
  index,
  isVisible,
}: {
  readonly title: string;
  readonly children?: React.ReactNode;
  readonly onClick?: () => void;
  readonly index: number;
  readonly isVisible: boolean;
}) {
  return (
    <div
      className={`group relative cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-b from-white/5 to-white/0 p-8 transition-all duration-700 hover:bg-white/10 hover:scale-[1.02] ${
        isVisible 
          ? 'opacity-100 translate-y-0 blur-0' 
          : 'opacity-0 translate-y-12 blur-md'
      }`}
      style={{
        transitionDelay: `${300 + index * 150}ms`
      }}
      onClick={onClick}
    >
      <div className="mb-6 flex h-64 items-center justify-center overflow-hidden">
        <div className="transition-transform duration-500 group-hover:scale-110">
          {children}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-gray-100">
          {title}
        </h3>
        <button
          className="flex h-10 w-10 cursor-pointer flex-shrink-0 items-center justify-center rounded-full text-white shadow-[0_0_0_1px_rgba(255,255,255,0.2)] transition-all duration-500 group-hover:bg-white/30 group-hover:shadow-none group-hover:rotate-90"
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
        >
          <span className="text-xl font-light leading-none transition-transform duration-500 group-hover:scale-110">
            +
          </span>
        </button>
      </div>
    </div>
  );
}

function FeatureCards() {
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
      { threshold: 0.1 }
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

export default function ModernTeamsSection() {
  return (
    <div className="py-40">
      <div className="mx-auto w-full max-w-5xl px-6">
        <SectionHeader />
        <FeatureCards />
      </div>
    </div>
  );
}

