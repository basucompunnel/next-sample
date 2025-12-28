import Link from 'next/link';
import Image from 'next/image';
import { IoChevronForward } from 'react-icons/io5';
import { getAssetPath } from '@/lib/utils';

export default function AISection() {
  return (
    <div className="py-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex items-center gap-2 text-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-400"></span>
            <span className="text-gray-400">Artificial intelligence</span>
            <IoChevronForward className="text-xs text-gray-600" />
          </div>
        </div>

        <h2 className="mb-4 text-5xl leading-tight font-semibold text-white">
          AI-assisted product development
        </h2>

        <div className="max-w-sm">
          <p className="mb-4 text-base text-gray-400">
            <span className="font-semibold text-white">Linear for Agents.</span> Choose from a
            variety of AI agents and start delegating work, from code generation to other technical
            tasks.
          </p>

          <Link
            href="/ai"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            Learn more
            <IoChevronForward className="text-sm" />
          </Link>
        </div>
      </div>

      <div className="mt-0 w-full">
        <Image
          src={getAssetPath('/assets/images/ai-assisted-product-development.png')}
          alt="AI-assisted product development"
          width={1920}
          height={1080}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
