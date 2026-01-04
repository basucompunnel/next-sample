import DesignedFastContent from './DesignedFastContent';
import CraftedPerfectionContent from './CraftedPerfectionContent';
import PurposeBuiltContent from './PurposeBuiltContent';

/**
 * Content router that selects appropriate content based on feature ID
 * - Routes to DesignedFastContent, CraftedPerfectionContent, or PurposeBuiltContent
 * - Falls back to PurposeBuiltContent if feature ID doesn't match
 * @param featureId - Feature identifier (designed-fast, crafted-perfection, purpose-built)
 */
export default function ModalContent({ featureId }: { featureId: string }) {
  if (featureId === 'designed-fast') return <DesignedFastContent />;
  if (featureId === 'crafted-perfection') return <CraftedPerfectionContent />;
  return <PurposeBuiltContent />;
}
