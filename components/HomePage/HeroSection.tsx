'use client';

import Link from 'next/link';
import Image from 'next/image';
import { IoChevronForward } from 'react-icons/io5';

function HeroTitle() {
  return (
    <h1 className="text-5xl md:text-6xl font-semibold text-white leading-tight mb-8">
      Linear is a purpose-built tool for planning and building products
    </h1>
  );
}

function HeroDescription() {
  return (
    <div className="space-y-1 mb-10">
      <p className="text-lg md:text-xl text-gray-400">Meet the system for modern software development.</p>
      <p className="text-lg md:text-xl text-gray-400">Streamline issues, projects, and product roadmaps.</p>
    </div>
  );
}

function HeroActions() {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-6 mb-16">
      <Link 
        href="/signup"
        className="bg-white text-black px-5 py-2.5 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
      >
        Start building
      </Link>
      <Link 
        href="/slack-agent"
        className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 text-sm"
      >
        <span className="font-semibold">New:</span>
        <span>Linear agent for Slack</span>
        <IoChevronForward className="text-sm mt-0.5" />
      </Link>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="w-full -mt-16">
      <Image 
        src="/assets/images/hero-section.png"
        alt="Linear App Interface"
        width={1200}
        height={800}
        className="w-full h-auto"
        priority
      />
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
