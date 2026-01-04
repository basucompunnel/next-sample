/**
 * Section heading with fade-in animation
 * - Appears second in sequence (100ms delay)
 * - Large text (5xl) with tight leading
 * @param isVisible - Controls animation trigger from intersection observer
 */
export default function Heading({ isVisible }: { isVisible: boolean }) {
  return (
    <h2 
      className={`mb-6 text-5xl font-semibold leading-tight text-white transition-all duration-1000 delay-100 ${
        isVisible 
          ? 'opacity-100 translate-y-0 blur-0' 
          : 'opacity-0 translate-y-8 blur-md'
      }`}
    >
      Built on strong foundations
    </h2>
  );
}
