import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';

/**
 * Workflow column with cascading animations
 * - Container fades in with blur effect, staggered by index (200ms intervals)
 * - Title slides in from left (100ms after container)
 * - Description slides in from left (200ms after container)
 * - Image slides in symmetrically: left column from left, right column from right
 * - Image has scale and brightness increase on hover (105% scale, 110% brightness)
 * - All animations coordinated with progressive delays for smooth cascade
 * @param title - Workflow heading text
 * @param description - Workflow description text
 * @param imageSrc - Path to workflow image
 * @param index - Column position (0 = left, 1 = right) for stagger timing and slide direction
 * @param isVisible - Controls animation trigger from intersection observer
 */
export default function WorkflowColumn({ 
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
      className={`transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0 blur-0' 
          : 'opacity-0 translate-y-12 blur-md'
      }`}
      style={{
        transitionDelay: `${index * 200}ms`
      }}
    >
      <h3 
        className={`mb-4 text-2xl font-medium text-white transition-all duration-800 ${
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
      <div className="overflow-hidden rounded-lg">
        <Image
          src={getAssetPath(imageSrc)}
          alt={title}
          width={600}
          height={400}
          className={`h-auto w-full rounded-lg transition-all duration-1200 hover:scale-105 hover:brightness-110 ${
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
  );
}
