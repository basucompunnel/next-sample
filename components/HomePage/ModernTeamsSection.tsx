import Link from 'next/link';
import { IoChevronForward } from 'react-icons/io5';

function SectionHeader() {
  return (
    <div className="mb-16 flex flex-col items-start justify-between gap-8 lg:flex-row">
      <h2 className="max-w-xl text-5xl font-semibold text-white md:text-6xl">
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
  image,
  children,
}: {
  title: string;
  image?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/5 to-white/0 p-8 transition-all hover:from-white/10">
      <div className="mb-6 flex h-64 items-center justify-center">{children}</div>
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all group-hover:border-white/40 group-hover:bg-white/10">
          <span className="text-2xl font-light">+</span>
        </button>
      </div>
    </div>
  );
}

function FeatureCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <FeatureCard title="Purpose-built for product development">
        <div className="relative h-full w-full opacity-60">
          {/* Placeholder for feature illustration */}
          <div className="flex items-center justify-center text-6xl text-white/20">📋</div>
        </div>
      </FeatureCard>

      <FeatureCard title="Designed to move fast">
        <div className="relative flex h-full w-full items-center justify-center">
          <div className="text-6xl font-light text-white/40">50ms</div>
        </div>
      </FeatureCard>

      <FeatureCard title="Crafted to perfection">
        <div className="relative h-full w-full opacity-60">
          {/* Placeholder for feature illustration */}
          <div className="flex items-center justify-center text-6xl text-white/20">✨</div>
        </div>
      </FeatureCard>
    </div>
  );
}

export default function ModernTeamsSection() {
  return (
    <div className="py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeader />
        <FeatureCards />
      </div>
    </div>
  );
}
