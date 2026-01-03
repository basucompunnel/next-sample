import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';

/**
 * Issue tracking image component
 * - Full-width showcase image demonstrating issue tracking features
 * - Scale-up animation with blur effect (400ms delay, 1.2s duration)
 * - Hover effect: scales to 105% for interactive feedback
 * @param isVisible - Controls animation trigger from intersection observer
 */
export default function IssueTrackingImage({ isVisible }: { isVisible: boolean }) {
  return (
    <div 
      className={`mt-12 transition-all duration-1200 delay-400 ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100 blur-0' 
          : 'opacity-0 translate-y-12 scale-95 blur-md'
      }`}
    >
      <div className="overflow-hidden rounded-lg">
        <Image
          src={getAssetPath('/assets/images/issue-tracking-youll-enjoy-using.png')}
          alt="Issue tracking you'll enjoy using"
          width={1200}
          height={800}
          className="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-105"
        />
      </div>
    </div>
  );
}
