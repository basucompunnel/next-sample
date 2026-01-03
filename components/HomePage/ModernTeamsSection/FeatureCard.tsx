/**
 * Individual feature card with interactive animations
 * - Entrance animation: fade-in with blur effect, staggered by index (150ms intervals)
 * - Base delay of 300ms after section becomes visible
 * - Hover effects: background lightens, scales to 102%, image scales to 110%
 * - Plus icon rotates 90° and scales on hover
 * - Entire card is clickable to open feature modal
 * @param title - Card heading text
 * @param children - Card content (typically an image)
 * @param onClick - Handler for opening the feature modal
 * @param index - Card position for staggered animation timing
 * @param isVisible - Controls animation trigger from parent's intersection observer
 */
export default function FeatureCard({
  title,
  children,
  onClick,
  index,
  isVisible,
}: {
  readonly title: string;
  readonly children?: React.ReactNode;
  readonly onClick?: () => void;
  readonly index: number;
  readonly isVisible: boolean;
}) {
  return (
    <div
      className={`group relative cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-b from-white/5 to-white/0 p-8 transition-all duration-700 hover:bg-white/10 hover:scale-[1.02] ${
        isVisible 
          ? 'opacity-100 translate-y-0 blur-0' 
          : 'opacity-0 translate-y-12 blur-md'
      }`}
      style={{
        transitionDelay: `${300 + index * 150}ms`
      }}
      onClick={onClick}
    >
      <div className="mb-6 flex h-64 items-center justify-center overflow-hidden">
        <div className="transition-transform duration-500 group-hover:scale-110">
          {children}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-gray-100">
          {title}
        </h3>
        <button
          className="flex h-10 w-10 cursor-pointer flex-shrink-0 items-center justify-center rounded-full text-white shadow-[0_0_0_1px_rgba(255,255,255,0.2)] transition-all duration-500 group-hover:bg-white/30 group-hover:shadow-none group-hover:rotate-90"
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
        >
          <span className="text-xl font-light leading-none transition-transform duration-500 group-hover:scale-110">
            +
          </span>
        </button>
      </div>
    </div>
  );
}
