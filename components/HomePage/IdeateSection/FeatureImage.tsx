import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';
import { Feature } from './features';

/**
 * Dynamic feature image component with crossfade transitions
 * - Displays image for currently active feature
 * - Slides in from right with scale effect on initial load (300ms delay)
 * - Crossfades between images when switching features (300ms transition)
 * - During transition: fades out with scale-up and blur
 * - After transition: fades in with normal scale and sharp focus
 * @param features - Array of feature objects containing image paths
 * @param activeFeature - ID of currently active feature to display
 * @param isTransitioning - Whether image is currently transitioning between features
 * @param inView - Controls animation trigger from intersection observer
 */
export default function FeatureImage({
  features,
  activeFeature,
  isTransitioning,
  inView,
}: {
  features: Feature[];
  activeFeature: string;
  isTransitioning: boolean;
  inView: boolean;
}) {
  const currentFeature = features.find(f => f.id === activeFeature) || features[0];

  return (
    <div 
      className={`relative overflow-hidden rounded-lg transition-all duration-1000 delay-300 ${
        inView 
          ? 'opacity-100 translate-x-0 scale-100 blur-0' 
          : 'opacity-0 translate-x-12 scale-95 blur-md'
      }`}
    >
      <Image
        src={getAssetPath(currentFeature.image)}
        alt={currentFeature.title}
        width={800}
        height={600}
        className={`h-auto w-full rounded-lg transition-all duration-300 ${
          isTransitioning ? 'opacity-0 scale-105 blur-sm' : 'opacity-100 scale-100 blur-0'
        }`}
      />
    </div>
  );
}
