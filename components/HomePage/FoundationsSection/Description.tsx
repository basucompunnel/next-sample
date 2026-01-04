/**
 * Section description with fade-in animation
 * - Appears third in sequence (200ms delay)
 * - Explains Linear's technical depth
 * @param isVisible - Controls animation trigger from intersection observer
 */
export default function Description({ isVisible }: { isVisible: boolean }) {
  return (
    <p 
      className={`mb-12 text-base text-gray-400 transition-all duration-1000 delay-200 ${
        isVisible 
          ? 'opacity-100 translate-y-0 blur-0' 
          : 'opacity-0 translate-y-8 blur-md'
      }`}
    >
      Linear is so simple to use, it's easy to overlook the wealth of complex technologies packed under the hood that keep Linear robust, safe, and blazing fast.
    </p>
  );
}
