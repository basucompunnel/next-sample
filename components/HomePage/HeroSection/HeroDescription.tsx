/**
 * Hero description component with cascading word animations
 * - Two separate lines of descriptive text
 * - Line 1 starts after title animation (1.2s delay)
 * - Line 2 starts after line 1 completes
 * - Each word within lines has 50ms stagger for smooth cascade effect
 */
export default function HeroDescription() {
  const line1 = "Meet the system for modern software development.".split(" ");
  const line2 = "Streamline issues, projects, and product roadmaps.".split(" ");
  const line1StartDelay = 1.2; // Start after title animation
  const line2StartDelay = line1StartDelay + (line1.length * 0.05);
  
  return (
    <div className="space-y-1 mb-10">
      <p className="text-lg md:text-xl text-gray-400">
        {line1.map((word, index) => (
          <span
            key={`line1-${word}-${index}`}
            className="inline-block opacity-0 animate-fade-in-up"
            style={{
              animationDelay: `${line1StartDelay + (index * 0.05)}s`,
              animationFillMode: 'forwards'
            }}
          >
            {word}&nbsp;
          </span>
        ))}
      </p>
      <p className="text-lg md:text-xl text-gray-400">
        {line2.map((word, index) => (
          <span
            key={`line2-${word}-${index}`}
            className="inline-block opacity-0 animate-fade-in-up"
            style={{
              animationDelay: `${line2StartDelay + (index * 0.05)}s`,
              animationFillMode: 'forwards'
            }}
          >
            {word}&nbsp;
          </span>
        ))}
      </p>
    </div>
  );
}
