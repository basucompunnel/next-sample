/**
 * Content for "Crafted with care" feature modal
 * - Emphasizes craftsmanship, quality, and attention to detail
 * - Philosophy on building exceptional software products
 * - Includes Watershed company testimonial
 * - Focuses on unrivaled delight and polish
 */
export default function CraftedPerfectionContent() {
  return (
    <>
      <div className="-mb-6 space-y-6 text-base text-gray-400 px-24">
        <p>
          We believe that there is a lost art of building software. A craftsmanship that yields
          products of an exceptional, almost magical, quality.
        </p>
        <p>
          It's difficult to describe this quality with words and impossible to measure it in
          numbers, but you can feel it when it's there. You know it when you experience it.
        </p>
        <p>
          Achieving this product quality is a function of both the talent of its creators and the
          tools at their disposal. Linear was built in pursuit of giving the best product teams a
          tool that matches their skill and ambition.
        </p>
        <p>
          A tool with unparalleled speed, precision-engineered robustness, and pixel-perfect UI. A
          tool that abstracts away any impurity that stands in the way between the creator and
          their craft. A tool that finally lets product teams focus on what matters most:
        </p>
        <p>Bringing back product experiences of the highest level of quality.</p>
      </div>

      <div className="-mb-6 rounded-2xl bg-black/50 p-32">
        <p className="mb-6 text-center text-xl text-gray-300">
          "In a world of clunky, slow, and bloated tools, Linear reverses the script on all three
          and adds an unrivaled level of delight and polish."
        </p>
        <div className="mb-8 flex items-center justify-center gap-2 text-white">
          <span className="text-2xl font-semibold">Watershed</span>
        </div>
      </div>
    </>
  );
}
