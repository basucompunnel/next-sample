import Image from 'next/image';

/**
 * Modal header image with negative margin for visual overlap
 * - Responsive negative margins: -mb-12 (mobile) -> -mb-16 (tablet) -> -mb-24 (desktop)
 * - Rounded corners scale with viewport size
 * @param src - Image source path
 * @param alt - Alternative text for accessibility
 */
export default function ModalImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="-mb-12 sm:-mb-16 lg:-mb-24">
      <Image src={src} alt={alt} width={1200} height={600} className="h-auto w-full rounded-xl sm:rounded-2xl" />
    </div>
  );
}
