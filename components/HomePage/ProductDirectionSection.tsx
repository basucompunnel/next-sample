import Image from 'next/image';
import { IoChevronForward } from 'react-icons/io5';
import { getAssetPath } from '@/lib/utils';

export default function ProductDirectionSection() {
  return (
    <div className="py-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="flex items-center gap-2 text-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-gray-400">Project and long-term planning</span>
            <IoChevronForward className="text-xs text-gray-600" />
          </div>
        </div>

        <h2 className="mb-8 text-5xl font-semibold leading-tight text-white">
          Set the product direction
        </h2>

        <div className="max-w-2xl">
          <p className="text-lg text-gray-400">
            <span className="text-white">Align your team around a unified product timeline.</span>{' '}
            Plan, manage, and track all product initiatives with Linear's visual planning tools.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <Image
          src={getAssetPath('/assets/images/set-the-product-direction.png')}
          alt="Set the product direction"
          width={1200}
          height={800}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
