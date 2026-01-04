import { IoMenu, IoClose } from 'react-icons/io5';

/**
 * Mobile menu toggle button
 * - Shows only on mobile (hidden md:hidden)
 * - Hamburger icon when closed, X icon when open
 * - Smooth rotation animation on state change
 * @param isOpen - Whether mobile menu is open
 * @param onToggle - Click handler to toggle menu
 */
export default function MobileMenuButton({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="md:hidden text-white p-2 rounded-md hover:bg-gray-800/50 transition-colors"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <div className="relative w-6 h-6">
        {/* Hamburger icon - rotates out when menu opens */}
        <IoMenu
          className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
            isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
          }`}
        />
        {/* Close icon - rotates in when menu opens */}
        <IoClose
          className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
            isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
          }`}
        />
      </div>
    </button>
  );
}
