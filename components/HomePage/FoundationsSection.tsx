import Image from 'next/image';
import { IoChevronForward } from 'react-icons/io5';
import { getAssetPath } from '@/lib/utils';

const features = [
  {
    title: 'Linear Sync Engine',
    description: 'Built with a high-performance architecture and an obsessive focus on speed.',
  },
  {
    title: 'Enterprise-ready security',
    description: 'Best-in-class security practices keep your work safe and secure at every layer.',
    hasArrow: true,
  },
  {
    title: 'Engineered for scale',
    description: 'Built for teams of all sizes. From early-stage startups to global enterprises.',
  },
];

export default function FoundationsSection() {
  return (
    <div className="py-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-2 text-sm text-gray-400">
              <span className="inline-block h-1 w-4 bg-gray-600"></span>
              <span>Under the hood</span>
            </div>

            <h2 className="mb-6 text-5xl font-semibold leading-tight text-white">
              Built on strong foundations
            </h2>

            <p className="mb-12 text-base text-gray-400">
              Linear is so simple to use, it's easy to overlook the wealth of complex technologies packed under the hood that keep Linear robust, safe, and blazing fast.
            </p>

            <div className="space-y-8">
              {features.map((feature) => (
                <div key={feature.title}>
                  <h3 className="mb-2 flex items-center gap-2 text-lg font-medium text-white">
                    {feature.title}
                    {feature.hasArrow && (
                      <IoChevronForward className="text-sm text-gray-600" />
                    )}
                  </h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <Image
              src={getAssetPath('/assets/images/built-on-strong-foundations.png')}
              alt="Built on strong foundations"
              width={800}
              height={800}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
