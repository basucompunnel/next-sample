import { Capability } from './capabilities';

/**
 * Individual capability card with cascading animations and hover effects
 * - Card fades in with blur effect, staggered by index (150ms intervals)
 * - Icon rotates and scales in (100ms after card, from -45° to 0°, scale 50% to 100%)
 * - Title slides in from left (200ms after card)
 * - Description slides in from left (300ms after card)
 * - Hover effects: icon scales 125% and rotates 12° with blue color, text changes to lighter shades
 * - Gradient underline expands from 0 to full width on hover (blue to purple gradient)
 * @param capability - Capability object with icon, title, and description
 * @param index - Card position for stagger timing
 * @param isVisible - Controls animation trigger from intersection observer
 */
export default function CapabilityCard({
  capability,
  index,
  isVisible,
}: {
  capability: Capability;
  index: number;
  isVisible: boolean;
}) {
  const Icon = capability.icon;

  return (
    <div
      className={`group cursor-pointer transition-all duration-1000 ${
        isVisible
          ? 'opacity-100 translate-y-0 blur-0'
          : 'opacity-0 translate-y-12 blur-md'
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div
        className={`mb-4 transition-all duration-800 ${
          isVisible
            ? 'opacity-100 rotate-0 scale-100'
            : 'opacity-0 -rotate-45 scale-50'
        }`}
        style={{
          transitionDelay: `${index * 150 + 100}ms`,
        }}
      >
        <Icon className="h-6 w-6 text-white transition-all duration-500 group-hover:scale-125 group-hover:text-blue-400 group-hover:rotate-12" />
      </div>

      <h3
        className={`mb-2 text-lg font-semibold text-white transition-all duration-800 group-hover:text-blue-300 ${
          isVisible
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-8'
        }`}
        style={{
          transitionDelay: `${index * 150 + 200}ms`,
        }}
      >
        {capability.title}
      </h3>

      <p
        className={`text-sm text-gray-400 transition-all duration-800 group-hover:text-gray-300 ${
          isVisible
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-8'
        }`}
        style={{
          transitionDelay: `${index * 150 + 300}ms`,
        }}
      >
        {capability.description}
      </p>

      <div className="mt-3 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 group-hover:w-full" />
    </div>
  );
}
