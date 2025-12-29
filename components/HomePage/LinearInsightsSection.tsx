import Image from 'next/image';
import { IoChevronForward } from 'react-icons/io5';
import { getAssetPath } from '@/lib/utils';
import { LuCircle, LuLayers, LuFilter, LuFlame } from 'react-icons/lu';

const features = [
  {
    icon: LuCircle,
    title: 'Tailored workflows',
    description: 'Track progress across custom issue flows for your team.',
  },
  {
    icon: LuLayers,
    title: 'Custom views',
    description: 'Switch between list and board. Group issues with swimlanes.',
  },
  {
    icon: LuFilter,
    title: 'Filters',
    description: "Refine issue lists down to what's most relevant to you.",
  },
  {
    icon: LuFlame,
    title: 'SLAs',
    description: 'Automatically apply deadlines to time-sensitive tasks.',
  },
];

export default function LinearInsightsSection() {
  return (
    <div className="py-24">
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
        <h2 className="mb-4 text-3xl font-semibold text-white">
          Linear Insights
        </h2>
        <p className="mb-8 max-w-2xl text-lg text-gray-400">
          Take the guesswork out of product planning with realtime analytics and reporting dashboards.
        </p>
        
        <button className="mb-12 flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-sm text-white transition-colors hover:bg-gray-800">
          Learn more
          <IoChevronForward className="text-xs" />
        </button>
      </div>

      <Image
        src={getAssetPath('/assets/images/linear-insights.png')}
        alt="Linear Insights"
        width={1200}
        height={800}
        className="h-auto w-full -mt-32"
      />

      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title}>
                <Icon className="mb-4 h-6 w-6 text-white" />
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
