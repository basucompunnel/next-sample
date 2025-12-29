import Image from 'next/image';
import { IoChevronForward } from 'react-icons/io5';
import { getAssetPath } from '@/lib/utils';

export default function IssueTrackingSection() {
  return (
    <div className="py-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="flex items-center gap-2 text-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-yellow-500"></span>
            <span className="text-gray-400">Task tracking and sprint planning</span>
            <IoChevronForward className="text-xs text-gray-600" />
          </div>
        </div>

        <h2 className="mb-6 max-w-3xl text-5xl font-semibold leading-tight text-white">
          Issue tracking you'll enjoy using
        </h2>

        <div className="max-w-2xl">
          <p className="mb-4 text-xl font-semibold text-white">
            Optimized for speed and efficiency.
          </p>
          <p className="text-lg text-gray-400">
            Create tasks in seconds, discuss issues in context, and breeze through your work
            in views tailored to you and your team.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <Image
          src={getAssetPath('/assets/images/issue-tracking-youll-enjoy-using.png')}
          alt="Issue tracking you'll enjoy using"
          width={1200}
          height={800}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
