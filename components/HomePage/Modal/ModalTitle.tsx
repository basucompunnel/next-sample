/**
 * Modal heading with large typography
 * - 5xl font size for prominent display
 * - Horizontal padding (px-24) for consistent alignment with content
 * @param title - Heading text to display
 */
export default function ModalTitle({ title }: { title: string }) {
  return <h2 className="mb-8 text-5xl font-semibold text-white px-24">{title}</h2>;
}
