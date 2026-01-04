/**
 * Primary CTA button for getting started
 * - Solid white background for primary emphasis
 * - Appears last in sequence (650ms delay)
 * - Entrance includes scale animation (95% to 100%)
 * - Hover effects: lighter gray, scale (105%), lifts up (-translate-y-0.5), shadow underneath
 * - Most prominent button to drive conversion
 * @param isVisible - Controls animation trigger from intersection observer
 */
export default function GetStartedButton({ isVisible }: { isVisible: boolean }) {
  return (
    <button 
      className={`rounded-lg bg-white px-4 py-2 text-base font-medium text-black transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-[0_4px_12px_rgba(255,255,255,0.15)] hover:-translate-y-0.5 cursor-pointer ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95'
      }`}
      style={{ transitionDelay: isVisible ? '650ms' : '0ms' }}
    >
      Get started
    </button>
  );
}
