import Image from 'next/image';

/**
 * Modal header image with negative margin for visual overlap
 * - Negative bottom margin (-mb-24) allows content to visually overlap image
 * - Rounded corners for consistent design
 * @param src - Image source path
 * @param alt - Alternative text for accessibility
 */
export default function ModalImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="-mb-24">
      <Image src={src} alt={alt} width={1200} height={600} className="h-auto w-full rounded-2xl" />
    </div>
  );
}
