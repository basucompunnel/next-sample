import SectionHeader from './SectionHeader';
import FeatureCards from './FeatureCards';

/**
 * Main Modern Teams section component
 * - Highlights three key product differentiators for modern teams
 * - Features: Purpose-built, Designed to move fast, Crafted to perfection
 * - Two-part layout: animated header with description, followed by interactive card grid
 * - Each card opens a detailed modal on click
 * - Generous vertical padding (py-40) for visual breathing room
 * - Centered content with max-width constraint
 */
export default function ModernTeamsSection() {
  return (
    <div className="py-40">
      <div className="mx-auto w-full max-w-5xl px-6">
        <SectionHeader />
        <FeatureCards />
      </div>
    </div>
  );
}
