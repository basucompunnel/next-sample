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

/**
 * Main HomePage component that composes all homepage sections
 * - Single-page scrolling experience with 14 distinct sections
 * - Each section features intersection observer animations triggered on scroll
 * - Sections are organized thematically to guide users through Linear's capabilities
 * - Black background throughout for cohesive dark theme
 * 
 * Section flow:
 * 1. Hero & Social Proof: HeroSection, CompanyLogos
 * 2. Core Value Props: ModernTeamsSection (3 key differentiators with modals)
 * 3. AI Capabilities: AISection, AIFeaturesSection
 * 4. Product Planning: ProductDirectionSection, ProjectFeaturesSection, IdeateSection
 * 5. Project Management: ProjectCapabilitiesSection, IssueTrackingSection, WorkflowSection
 * 6. Analytics & Infrastructure: LinearInsightsSection, FoundationsSection
 * 7. Final CTA: CTASection
 * 
 * All sections are fully modular with their own folder structure and subcomponents
 */
export default function HomePage() {
  return (
    <div className="bg-black">
      {/* Hero & Social Proof */}
      <HeroSection />
      <CompanyLogos />

      {/* Core Value Propositions */}
      <ModernTeamsSection />

      {/* AI Capabilities */}
      <AISection />
      <AIFeaturesSection />

      {/* Product Planning Features */}
      <ProductDirectionSection />
      <ProjectFeaturesSection />
      <IdeateSection />

      {/* Project Management Features */}
      <ProjectCapabilitiesSection />
      <IssueTrackingSection />
      <WorkflowSection />

      {/* Analytics & Technical Infrastructure */}
      <LinearInsightsSection />
      <FoundationsSection />

      {/* Final Call-to-Action */}
      <CTASection />
    </div>
  );
}
