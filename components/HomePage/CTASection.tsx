export default function CTASection() {
  return (
    <div className="py-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-semibold text-white">
            Plan the present. Build the future.
          </h2>
          
          <div className="flex items-center gap-4">
            <button className="rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-base font-medium text-white transition-colors hover:bg-gray-800">
              Contact sales
            </button>
            <button className="rounded-lg bg-white px-4 py-2 text-base font-medium text-black transition-colors hover:bg-gray-200">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
