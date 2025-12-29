import { IoGitBranchOutline } from 'react-icons/io5';
import { LuBox, LuDiamond } from 'react-icons/lu';
import { HiOutlineChartBar } from 'react-icons/hi';

const capabilities = [
  {
    icon: IoGitBranchOutline,
    title: 'Initiatives',
    description: 'Coordinate strategic product efforts.',
  },
  {
    icon: LuBox,
    title: 'Cross-team projects',
    description: 'Collaborate across teams and departments.',
  },
  {
    icon: LuDiamond,
    title: 'Milestones',
    description: 'Break projects down into concrete phases.',
  },
  {
    icon: HiOutlineChartBar,
    title: 'Progress insights',
    description: 'Track scope, velocity, and progress over time.',
  },
];

export default function ProjectCapabilitiesSection() {
  return (
    <div className="py-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <div key={capability.title}>
                <Icon className="mb-4 h-6 w-6 text-white" />
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {capability.title}
                </h3>
                <p className="text-sm text-gray-400">{capability.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
