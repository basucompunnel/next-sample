import { IoGitBranchOutline } from 'react-icons/io5';
import { LuBox, LuDiamond } from 'react-icons/lu';
import { HiOutlineChartBar } from 'react-icons/hi';
import { IconType } from 'react-icons';

/**
 * Capability type definition
 */
export type Capability = {
  icon: IconType;
  title: string;
  description: string;
};

/**
 * Capability definitions for project management features
 * Each capability has an icon component, title, and description
 */
export const capabilities: Capability[] = [
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
