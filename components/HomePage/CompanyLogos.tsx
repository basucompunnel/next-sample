'use client';

import Link from 'next/link';
import { useState } from 'react';
import { IoChevronForward } from 'react-icons/io5';

function LogosHeading() {
  return (
    <>
      <h2 className="mb-4 text-3xl font-semibold text-white md:text-4xl">
        Powering the world&apos;s best product teams.
      </h2>
      <p className="mb-16 text-lg text-gray-400 md:text-xl">
        From next-gen startups to established enterprises.
      </p>
    </>
  );
}

function LogosImage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="/assets/images/company-logos.png"
        alt="Company Logos"
        className={`h-auto w-full transition-all duration-300 ${isHovered ? 'blur-sm' : ''}`}
      />

      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Link
            href="/customers"
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            Meet our customers
            <IoChevronForward className="text-sm" />
          </Link>
        </div>
      )}
    </div>
  );
}

export default function CompanyLogos() {
  return (
    <div className="py-24">
      <div className="mx-auto w-full max-w-5xl px-6 text-center">
        <LogosHeading />
        <LogosImage />
      </div>
    </div>
  );
}
