import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';

/**
 * Foundations showcase image with entrance and hover animations
 * - Enters from right with scale (400ms delay, 1.2s duration)
 * - Hover effects: scales to 105% and rotates 2°
 * - Rounded corners with overflow hidden for clean presentation
 * @param isVisible - Controls animation trigger from intersection observer
 */
export default function FoundationsImage({ isVisible }: { isVisible: boolean }) {
  return (
    <div 
      className={`flex items-center transition-all duration-1200 delay-400 ${
        isVisible 
          ? 'opacity-100 translate-x-0 scale-100 blur-0' 
          : 'opacity-0 translate-x-12 scale-95 blur-md'
      }`}
    >
      <div className="overflow-hidden rounded-lg">
        <Image
          src={getAssetPath('/assets/images/built-on-strong-foundations.png')}
          alt="Built on strong foundations"
          width={800}
          height={800}
          className="h-auto w-full transition-all duration-700 hover:scale-105 hover:rotate-2"
        />
      </div>
    </div>
  );
}
