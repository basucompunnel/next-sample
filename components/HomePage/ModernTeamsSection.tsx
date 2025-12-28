'use client';

import Link from 'next/link';
import Image from 'next/image';
import { IoChevronForward } from 'react-icons/io5';
import { getAssetPath } from '@/lib/utils';
import { useState } from 'react';
import Modal from './Modal';

function SectionHeader() {
  return (
    <div className="mb-2 flex flex-col items-start justify-between gap-8 lg:flex-row">
      <h2 className="max-w-xl text-5xl font-semibold leading-tight text-white md:text-5xl">
        Made for modern product teams
      </h2>
      <div className="max-w-md">
        <p className="mb-4 text-lg text-gray-400">
          Linear is shaped by the practices and principles that distinguish world-class product
          teams from the rest: relentless focus, fast execution, and a commitment to the quality of
          craft.{' '}
          <Link
            href="/switch"
            className="inline-flex items-center gap-1 font-semibold text-white hover:text-gray-300"
          >
            Make the switch
            <IoChevronForward className="text-sm" />
          </Link>
        </p>
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  children,
  onClick,
}: {
  title: string;
  children?: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-b from-white/5 to-white/0 p-8 transition-all duration-500 hover:bg-white/10"
      onClick={onClick}
    >
      <div className="mb-6 flex h-64 items-center justify-center">{children}</div>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <button
          className="flex h-10 w-10 cursor-pointer flex-shrink-0 items-center justify-center rounded-full text-white shadow-[0_0_0_1px_rgba(255,255,255,0.2)] transition-all duration-500 group-hover:bg-white/30 group-hover:shadow-none"
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
        >
          <span className="text-xl font-light leading-none">+</span>
        </button>
      </div>
    </div>
  );
}

function FeatureCards() {
  const [openModal, setOpenModal] = useState<string | null>(null);

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
      <div className="grid w-full md:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            onClick={() => setOpenModal(feature.id)}
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
    <div className="py-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        <SectionHeader />
        <FeatureCards />
      </div>
    </div>
  );
}

