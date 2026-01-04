/**
 * "Under the hood" badge with expanding line animation
 * - Gray line expands from 4 to 8 width on hover
 * - Text brightens from gray-400 to white on hover
 * @param isVisible - Controls animation trigger from intersection observer
 */
export default function Badge({ isVisible }: { isVisible: boolean }) {
  return (
    <div 
      className={`group mb-6 flex items-center gap-2 text-sm text-gray-400 cursor-pointer transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 translate-y-0 blur-0' 
          : 'opacity-0 -translate-y-4 blur-sm'
      }`}
    >
      <span className="inline-block h-1 w-4 bg-gray-600 transition-all duration-300 group-hover:w-8"></span>
      <span className="transition-colors duration-300 group-hover:text-white">Under the hood</span>
    </div>
  );
}
