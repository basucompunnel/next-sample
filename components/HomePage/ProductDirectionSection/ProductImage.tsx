import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';

/**
 * Product direction image component
 * - Full-width showcase image demonstrating planning features
 * - Scale-up animation with blur effect (300ms delay, 1.2s duration)
 * - Hover effect: scales to 105% for interactive feedback
 * @param isVisible - Controls animation trigger from intersection observer
 */
export default function ProductImage({ isVisible }: { isVisible: boolean }) {
  return (
    <div 
      className={`mt-12 transition-all duration-1200 delay-300 ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100 blur-0' 
          : 'opacity-0 translate-y-12 scale-95 blur-md'
      }`}
    >
      <div className="overflow-hidden rounded-lg">
        <Image
          src={getAssetPath('/assets/images/set-the-product-direction.png')}
          alt="Set the product direction"
          width={1200}
          height={800}
          className="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-105"
        />
      </div>
    </div>
  );
}
