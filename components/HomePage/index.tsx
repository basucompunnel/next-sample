import HeroSection from './HeroSection';
import CompanyLogos from './CompanyLogos';
import ModernTeamsSection from './ModernTeamsSection';
import AISection from './AISection';
import AIFeaturesSection from './AIFeaturesSection';

export default function HomePage() {
  return (
    <div className="bg-black">
      <HeroSection />
      <CompanyLogos />
      <ModernTeamsSection />
      <AISection />
      <AIFeaturesSection />
    </div>
  );
}
