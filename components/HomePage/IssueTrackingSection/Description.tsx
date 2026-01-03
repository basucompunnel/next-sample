/**
 * Issue tracking description component
 * - Two-paragraph description with cascading animations
 * - First paragraph (subheading): Bold text emphasizing speed (200ms delay)
 * - Second paragraph: Detailed feature explanation (300ms delay)
 * @param isVisible - Controls animation trigger from intersection observer
 */
export default function Description({ isVisible }: { isVisible: boolean }) {
  return (
    <div className="max-w-2xl">
      <p 
        className={`mb-4 text-xl font-semibold text-white transition-all duration-1000 delay-200 ${
          isVisible 
            ? 'opacity-100 translate-y-0 blur-0' 
            : 'opacity-0 translate-y-8 blur-md'
        }`}
      >
        Optimized for speed and efficiency.
      </p>
      <p 
        className={`text-lg text-gray-400 transition-all duration-1000 delay-300 ${
          isVisible 
            ? 'opacity-100 translate-y-0 blur-0' 
            : 'opacity-0 translate-y-8 blur-md'
        }`}
      >
        Create tasks in seconds, discuss issues in context, and breeze through your work
        in views tailored to you and your team.
      </p>
    </div>
  );
}
