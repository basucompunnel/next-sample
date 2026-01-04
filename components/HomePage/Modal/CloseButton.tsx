import { IoClose } from 'react-icons/io5';

/**
 * Sticky close button for modal
 * - Positioned at top-right, stays visible during scroll
 * - Circular with hover background (white/10) and text brightening
 * @param onClick - Handler for close action
 */
export default function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="sticky right-1 top-1 z-10 ml-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
    >
      <IoClose className="text-2xl" />
    </button>
  );
}
