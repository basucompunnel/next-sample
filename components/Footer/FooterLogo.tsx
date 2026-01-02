import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';

/**
 * Footer logo component
 * - Displays the Linear logo in the footer
 * - Spans 2 columns on mobile, 1 column on desktop
 * - Non-functional (no navigation) for demo purposes
 */
export default function FooterLogo() {
  return (
    <div className="col-span-2 md:col-span-1">
      <div className="inline-block cursor-pointer">
        <Image 
          src={getAssetPath('/assets/images/linear-app-logo.png')} 
          alt="Linear Logo" 
          width={32} 
          height={32}
          className="object-contain"
        />
      </div>
    </div>
  );
}
