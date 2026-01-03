import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';

/**
 * AI section image component
 * - Full-width showcase image demonstrating AI features
 * - Scale-up animation with blur effect (400ms delay, 1.2s duration)
 * - Hover effect: scales to 105% for interactive feedback
 * @param isVisible - Controls animation trigger from intersection observer
 */
export default function AIImage({ isVisible }: { isVisible: boolean }) {
  return (
    <div 
      className={`mt-0 w-full transition-all duration-1200 delay-400 ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100 blur-0' 
          : 'opacity-0 translate-y-12 scale-95 blur-md'
      }`}
    >
      <div className="overflow-hidden">
        <Image
          src={getAssetPath('/assets/images/ai-assisted-product-development.png')}
          alt="AI-assisted product development"
          width={1920}
          height={1080}
          className="h-auto w-full transition-transform duration-700 hover:scale-105"
        />
      </div>
    </div>
  );
}
