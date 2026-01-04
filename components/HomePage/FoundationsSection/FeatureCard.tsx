import { IoChevronForward } from 'react-icons/io5';
import { features } from './features';

/**
 * Individual feature card with hover effects
 * - Slides in from left with staggered timing (150ms intervals starting at 300ms)
 * - Hover effects: translates right 1px, blue theme, background highlight (white/5)
 * - Security feature includes interactive arrow (translates right, scales 125%)
 * - Title changes to blue-300, description brightens on hover
 * @param feature - Feature object with title, description, and optional arrow
 * @param index - Card position for stagger timing
 * @param isVisible - Controls animation trigger from intersection observer
 */
export default function FeatureCard({
  feature,
  index,
  isVisible,
}: {
  feature: typeof features[0];
  index: number;
  isVisible: boolean;
}) {
  return (
    <div 
      className={`group cursor-pointer transition-all duration-1000 hover:translate-x-1 hover:bg-white/5 rounded-lg p-3 -ml-3 ${
        isVisible 
          ? 'opacity-100 translate-x-0 blur-0' 
          : 'opacity-0 -translate-x-8 blur-sm'
      }`}
      style={{
        transitionDelay: `${300 + index * 150}ms`
      }}
    >
      <h3 className="mb-2 flex items-center gap-2 text-lg font-medium text-white transition-colors duration-300 group-hover:text-blue-300">
        {feature.title}
        {feature.hasArrow && (
          <IoChevronForward className="text-sm text-gray-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white group-hover:scale-125" />
        )}
      </h3>
      <p className="text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-300">{feature.description}</p>
    </div>
  );
}
