/**
 * Product direction description component
 * - Detailed description text emphasizing team alignment
 * - "Align your team" text highlighted in white
 * - 200ms delay after heading animation
 * @param isVisible - Controls animation trigger from intersection observer
 */
export default function Description({ isVisible }: { isVisible: boolean }) {
  return (
    <div 
      className={`max-w-2xl transition-all duration-1000 delay-200 ${
        isVisible 
          ? 'opacity-100 translate-y-0 blur-0' 
          : 'opacity-0 translate-y-8 blur-md'
      }`}
    >
      <p className="text-lg text-gray-400">
        <span className="text-white">Align your team around a unified product timeline.</span>{' '}
        Plan, manage, and track all product initiatives with Linear's visual planning tools.
      </p>
    </div>
  );
}
