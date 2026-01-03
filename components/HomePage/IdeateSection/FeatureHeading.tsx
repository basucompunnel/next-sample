/**
 * Ideate section heading component
 * - Section heading with blur-to-sharp fade-in animation
 * - Two-line heading emphasizing ideation and specification
 * @param inView - Controls animation trigger from intersection observer
 */
export default function FeatureHeading({ inView }: { inView: boolean }) {
  return (
    <h2 
      className={`mb-12 text-2xl font-semibold leading-tight text-white transition-all duration-1000 ${
        inView 
          ? 'opacity-100 translate-y-0 blur-0' 
          : 'opacity-0 translate-y-8 blur-md'
      }`}
    >
      Ideate and specify<br />what to build next
    </h2>
  );
}
