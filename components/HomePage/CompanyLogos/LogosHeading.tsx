/**
 * Logos section heading with word-by-word reveal animation
 * - Main heading animates with 50ms stagger between words
 * - Subheading follows after heading completes, 40ms stagger between words
 * - Uses blur-to-sharp effect combined with fade-in and upward movement
 * @param isVisible - Controls animation trigger from intersection observer
 */
export default function LogosHeading({ isVisible }: { isVisible: boolean }) {
  const headingWords = "Powering the world's best product teams.".split(' ');
  const subWords = "From next-gen startups to established enterprises.".split(' ');
  
  return (
    <>
      <h2 className="mb-4 text-3xl font-semibold text-white md:text-4xl">
        {headingWords.map((word, index) => (
          <span
            key={`heading-${index}`}
            className={`inline-block transition-all duration-600 ${
              isVisible 
                ? 'opacity-100 translate-y-0 blur-0' 
                : 'opacity-0 translate-y-4 blur-sm'
            }`}
            style={{
              transitionDelay: `${index * 50}ms`
            }}
          >
            {word}&nbsp;
          </span>
        ))}
      </h2>
      <p className="mb-16 text-lg text-gray-400 md:text-xl">
        {subWords.map((word, index) => (
          <span
            key={`sub-${index}`}
            className={`inline-block transition-all duration-600 ${
              isVisible 
                ? 'opacity-100 translate-y-0 blur-0' 
                : 'opacity-0 translate-y-4 blur-sm'
            }`}
            style={{
              transitionDelay: `${(headingWords.length * 50) + (index * 40)}ms`
            }}
          >
            {word}&nbsp;
          </span>
        ))}
      </p>
    </>
  );
}
