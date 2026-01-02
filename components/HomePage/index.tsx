import HeroSection from './HeroSection';
import CompanyLogos from './CompanyLogos';
import ModernTeamsSection from './ModernTeamsSection';
import AISection from './AISection';
import AIFeaturesSection from './AIFeaturesSection';
import ProductDirectionSection from './ProductDirectionSection';
import ProjectFeaturesSection from './ProjectFeaturesSection';
import IdeateSection from './IdeateSection';
import ProjectCapabilitiesSection from './ProjectCapabilitiesSection';
import IssueTrackingSection from './IssueTrackingSection';
import WorkflowSection from './WorkflowSection';
import LinearInsightsSection from './LinearInsightsSection';
import FoundationsSection from './FoundationsSection';
import CTASection from './CTASection';

export default function HomePage() {
  return (
    <div className="bg-black">
      <HeroSection />
      <CompanyLogos />
      
      <ModernTeamsSection />
      <AISection />
      <AIFeaturesSection />
      <ProductDirectionSection />
      <ProjectFeaturesSection />
      <IdeateSection />
      <ProjectCapabilitiesSection />
      <IssueTrackingSection />
      <WorkflowSection />
      <LinearInsightsSection />
      <FoundationsSection />
      <CTASection />
    </div>
  );
}
