import { Feature } from './features';

/**
 * Interactive feature button list component
 * - Displays clickable feature buttons with staggered entrance (100ms intervals)
 * - Active feature highlighted with green left border
 * - Inactive features have transparent border and hover effects (translate right, color change)
 * - Each button fades in with delay based on its index position
 * @param features - Array of feature objects to display
 * @param activeFeature - ID of currently active feature
 * @param onFeatureChange - Handler called when feature button is clicked
 * @param inView - Controls animation trigger from intersection observer
 */
export default function FeatureButtons({
  features,
  activeFeature,
  onFeatureChange,
  inView,
}: {
  features: Feature[];
  activeFeature: string;
  onFeatureChange: (featureId: string) => void;
  inView: boolean;
}) {
  return (
    <div className="space-y-2">
      {features.map((feature, idx) => (
        <button
          key={feature.id}
          onClick={() => onFeatureChange(feature.id)}
          className={`flex w-full items-center gap-3 px-2 py-1 text-left transition-all duration-500 cursor-pointer ${
            activeFeature === feature.id
              ? 'border-l-4 border-green-500 pl-4 text-white translate-x-0'
              : 'border-l-4 border-transparent text-gray-500 hover:text-gray-300 hover:translate-x-1'
          } ${
            inView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
          style={{
            transitionDelay: inView ? `${100 + idx * 100}ms` : '0ms'
          }}
        >
          <span className="text-lg transition-all duration-300">
            {feature.title}
          </span>
        </button>
      ))}
    </div>
  );
}
