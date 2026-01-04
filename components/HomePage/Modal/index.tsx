'use client';

import { useState, useEffect } from 'react';
import { ModalProps } from './types';
import CloseButton from './CloseButton';
import ModalImage from './ModalImage';
import ModalTitle from './ModalTitle';
import ModalContent from './ModalContent';

/**
 * Modal component with sophisticated animation and scroll handling
 * - Dual animation states: isAnimating for CSS transitions, shouldRender for DOM presence
 * - Animation sequence:
 *   1. Mount component (shouldRender = true)
 *   2. Wait 50ms for DOM settling
 *   3. Trigger animations (isAnimating = true)
 *   4. On close: reverse animations, wait 800ms, unmount
 * - Scroll behavior: Prevents body scroll when open, calculates and compensates for scrollbar width
 * - Body padding adjustment prevents content shift when scrollbar disappears
 * - Backdrop click closes modal (e.stopPropagation prevents close on content click)
 * - Fixed positioning with z-50 for overlay effect
 * - Content: scrollable (max-h-90vh), centered, rounded corners (rounded-3xl)
 * - Transform GPU acceleration (translateZ(0), will-change) for smooth animations
 * - 800ms animation duration for smooth entrance/exit
 */
export default function Modal({ isOpen, onClose, title, imageSrc, featureId }: ModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Calculate scrollbar width to prevent content shift when body scroll is disabled
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      // Mount component, then trigger animation after brief delay for DOM settling
      setShouldRender(true);
      setIsAnimating(false);
      setTimeout(() => setIsAnimating(true), 50);
      
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      // Reverse animation, then unmount after animation completes (800ms)
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 800);
      
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Cleanup effect: restore body scroll and padding on component unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black p-4 transition-opacity duration-800 will-change-[opacity] ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
    >
      <div
        className={`relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-black px-12 py-4 transition-all duration-800 will-change-[transform,opacity] ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
        style={{ transform: 'translateZ(0)' }}
      >
        <CloseButton onClick={onClose} />
        <ModalImage src={imageSrc} alt={title} />
        <ModalTitle title={title} />
        <ModalContent featureId={featureId} />
      </div>
    </div>
  );
}
