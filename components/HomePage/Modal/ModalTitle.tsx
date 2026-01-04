/**
 * Modal heading with large typography
 * - Responsive font sizes: 3xl (mobile) -> 4xl (tablet) -> 5xl (desktop)
 * - Responsive padding: px-6 (mobile) -> px-12 (tablet) -> px-24 (desktop)
 * @param title - Heading text to display
 */
export default function ModalTitle({ title }: { title: string }) {
  return <h2 className="mb-6 sm:mb-8 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white px-6 sm:px-12 lg:px-24">{title}</h2>;
}
