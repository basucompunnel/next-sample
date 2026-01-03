import Image from 'next/image';

/**
 * Feature column with cascading animations
 * - Container fades in with blur effect, staggered by index (200ms intervals)
 * - Title slides in from left (100ms after container)
 * - Description slides in from left (200ms after container)
 * - Image slides in from opposite sides: left column from left, right column from right
 * - Image has scale and brightness increase on hover
 * - All animations coordinated with progressive delays for smooth cascade
 * @param title - Feature heading text
 * @param description - Feature description text
 * @param imageSrc - Path to feature image
 * @param index - Column position (0 = left, 1 = right) for stagger timing and slide direction
 * @param isVisible - Controls animation trigger from intersection observer
 */
export default function FeatureColumn({
  title,
  description,
  imageSrc,
  index,
  isVisible,
}: {
  title: string;
  description: string;
  imageSrc: string;
  index: number;
  isVisible: boolean;
}) {
  return (
    <div 
      className={`flex flex-col transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0 blur-0' 
          : 'opacity-0 translate-y-12 blur-md'
      }`}
      style={{
        transitionDelay: `${index * 200}ms`
      }}
    >
      <h3 
        className={`mb-2 text-2xl font-medium text-white transition-all duration-800 ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 -translate-x-8'
        }`}
        style={{
          transitionDelay: `${index * 200 + 100}ms`
        }}
      >
        {title}
      </h3>
      <p 
        className={`mb-8 text-base text-gray-400 transition-all duration-800 ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 -translate-x-8'
        }`}
        style={{
          transitionDelay: `${index * 200 + 200}ms`
        }}
      >
        {description}
      </p>
      <div 
        className={`flex-1 transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100 blur-0' 
            : 'opacity-0 translate-y-8 scale-95 blur-md'
        }`}
        style={{
          transitionDelay: `${index * 200 + 300}ms`
        }}
      >
        <div className="overflow-hidden rounded-lg">
          <div className="group overflow-hidden rounded-lg">
            <Image
              src={imageSrc}
              alt={title}
              width={800}
              height={600}
              className={`h-auto w-full rounded-lg transition-all duration-1200 group-hover:scale-105 group-hover:brightness-110 ${
                isVisible 
                  ? 'translate-x-0' 
                  : index === 0 ? '-translate-x-full' : 'translate-x-full'
              }`}
              style={{
                transitionDelay: `${index * 200 + 400}ms`
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
