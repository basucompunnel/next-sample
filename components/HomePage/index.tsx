import HeroSection from './HeroSection';
import CompanyLogos from './CompanyLogos';
import ModernTeamsSection from './ModernTeamsSection';

export default function HomePage() {
  return (
    <div className="bg-black">
      <HeroSection />
      <CompanyLogos />
      <ModernTeamsSection />
    </div>
  );
}
