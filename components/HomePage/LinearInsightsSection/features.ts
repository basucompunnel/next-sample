import { LuCircle, LuLayers, LuFilter, LuFlame } from 'react-icons/lu';
import { IconType } from 'react-icons';

/**
 * Feature definitions for Linear Insights capabilities
 * Each feature has an icon component, title, and description
 */
export const features: {
  icon: IconType;
  title: string;
  description: string;
}[] = [
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
