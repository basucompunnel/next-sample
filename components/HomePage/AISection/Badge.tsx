import { IoChevronForward } from 'react-icons/io5';

/**
 * AI section badge component
 * - Cyan pill badge with "Artificial intelligence" label
 * - Expands and glows on hover (width increases, cyan shadow appears)
 * - Chevron translates right and scales on hover
 * @param isVisible - Controls animation trigger from intersection observer
 */
export default function Badge({ isVisible }: { isVisible: boolean }) {
  return (
    <div 
      className={`mb-3 flex items-center gap-2 transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 translate-y-0 blur-0' 
          : 'opacity-0 -translate-y-4 blur-sm'
      }`}
    >
      <div className="group flex items-center gap-2 text-sm cursor-pointer">
        <span className="inline-block h-2 w-4 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-6 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.6)]"></span>
        <span className="text-gray-300 transition-colors duration-300 group-hover:text-white">Artificial intelligence</span>
        <IoChevronForward className="text-xs text-gray-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white group-hover:scale-125" />
      </div>
    </div>
  );
}
