import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';

/**
 * Logo component with hover animations
 * - Logo image scales and rotates on hover
 * - Text increases letter spacing on hover
 * - Non-clickable (cursor-default) for demo purposes
 */
export default function Logo() {
  return (
    <div className="flex items-center gap-2 text-white font-semibold text-xl cursor-default group">
      {/* Logo image wrapper with scale and rotate animation */}
      <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
        <Image 
          src={getAssetPath('/assets/images/linear-app-logo.png')} 
          alt="Linear Logo" 
          width={24} 
          height={24}
          className="object-contain"
        />
      </div>
      {/* Logo text with tracking (letter-spacing) animation */}
      <span className="transition-all duration-300 group-hover:tracking-wide">Linear</span>
    </div>
  );
}
