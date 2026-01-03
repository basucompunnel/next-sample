/**
 * Issue tracking heading component
 * - Main section heading with blur-to-sharp animation
 * - 100ms delay after badge animation
 * - Large, bold text emphasizing user experience
 * @param isVisible - Controls animation trigger from intersection observer
 */
export default function Heading({ isVisible }: { isVisible: boolean }) {
  return (
    <h2 
      className={`mb-6 max-w-3xl text-5xl font-semibold leading-tight text-white transition-all duration-1000 delay-100 ${
        isVisible 
          ? 'opacity-100 translate-y-0 blur-0' 
          : 'opacity-0 translate-y-8 blur-md'
      }`}
    >
      Issue tracking you'll enjoy using
    </h2>
  );
}
