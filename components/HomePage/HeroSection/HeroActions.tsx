import { IoChevronForward } from 'react-icons/io5';

/**
 * Hero action buttons with staggered entrance
 * - Primary "Start building" button (white background)
 * - Secondary announcement button with hover effects
 * - Both buttons fade in after description completes (2s delay)
 * - 150ms stagger between buttons for polished sequence
 */
export default function HeroActions() {
  const actionsStartDelay = 2;
  
  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
      <button
        className="opacity-0 animate-fade-in-up bg-white text-black px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors cursor-pointer"
        style={{
          animationDelay: `${actionsStartDelay}s`,
          animationFillMode: 'forwards'
        }}
      >
        Start building
      </button>
      <button
        className="opacity-0 animate-fade-in-up bg-transparent text-gray-300 hover:text-white hover:bg-[#2a2a2a] transition-all flex items-center gap-2 px-6 py-3 rounded-lg text-sm cursor-pointer"
        style={{
          animationDelay: `${actionsStartDelay + 0.15}s`,
          animationFillMode: 'forwards'
        }}
      >
        <span className="font-semibold text-white">New:</span>
        <span>Linear agent for Slack</span>
        <IoChevronForward className="text-sm" />
      </button>
    </div>
  );
}
