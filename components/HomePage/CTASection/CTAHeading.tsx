/**
 * CTA heading with word-by-word animation
 * - Splits text "Plan the present. Build the future." into individual words
 * - Each word animates with 80ms stagger for dramatic sequential entrance
 * - Blur-to-sharp effect with upward motion
 * - Responsive text sizing: 2xl (mobile) → 3xl (tablet) → 4xl (desktop)
 * - Center-aligned on mobile, left-aligned on desktop
 * @param isVisible - Controls animation trigger from intersection observer
 */
export default function CTAHeading({ isVisible }: { isVisible: boolean }) {
  // Split heading into individual words for staggered animation
  const headingWords = "Plan the present. Build the future.".split(' ');

  return (
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center md:text-left">
      {headingWords.map((word, index) => (
        <span
          key={`cta-${index}`}
          className={`inline-block transition-all duration-800 ${
            isVisible 
              ? 'opacity-100 translate-y-0 blur-0' 
              : 'opacity-0 translate-y-8 blur-md'
          }`}
          style={{
            transitionDelay: `${index * 80}ms`
          }}
        >
          {word}&nbsp;
        </span>
      ))}
    </h2>
  );
}
