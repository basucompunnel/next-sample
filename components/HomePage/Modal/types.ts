/**
 * Props for the Modal component
 * @property isOpen - Controls modal visibility and animation state
 * @property onClose - Callback when modal should close (backdrop click or close button)
 * @property title - Modal heading text
 * @property imageSrc - Header image source path
 * @property featureId - Determines which content variant to display (designed-fast, crafted-perfection, or purpose-built)
 */
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageSrc: string;
  featureId: string;
}
