import { IoChevronForward } from 'react-icons/io5';

/**
 * AI section description component
 * - Detailed description text with "Linear for Agents" emphasis
 * - "Learn more" button with hover effects (scale, shadow)
 * - 200ms delay after heading animation
 * - Button has additional 300ms delay for staggered entrance
 * @param isVisible - Controls animation trigger from intersection observer
 */
export default function Description({ isVisible }: { isVisible: boolean }) {
  return (
    <div 
      className={`max-w-sm transition-all duration-1000 delay-200 ${
        isVisible 
          ? 'opacity-100 translate-y-0 blur-0' 
          : 'opacity-0 translate-y-8 blur-md'
      }`}
    >
      <p className="mb-4 text-base text-gray-400">
        <span className="font-semibold text-white">Linear for Agents.</span> Choose from a
        variety of AI agents and start delegating work, from code generation to other technical
        tasks.
      </p>

      <button
        className={`group inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800 hover:border-gray-600 hover:shadow-lg cursor-pointer ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}
      >
        <span className="transition-transform duration-300 group-hover:scale-105">Learn more</span>
        <IoChevronForward className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  );
}
