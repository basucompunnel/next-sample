/**
 * Secondary CTA button for contacting sales
 * - Border style with dark background for secondary emphasis
 * - Appears fourth in sequence (500ms delay)
 * - Hover effects: lighter background, brighter border, subtle scale (105%), white glow shadow
 * @param isVisible - Controls animation trigger from intersection observer
 */
export default function ContactSalesButton({ isVisible }: { isVisible: boolean }) {
  return (
    <button 
      className={`rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-base font-medium text-white transition-all duration-300 hover:bg-gray-800 hover:border-white/20 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-pointer ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: isVisible ? '500ms' : '0ms' }}
    >
      Contact sales
    </button>
  );
}
