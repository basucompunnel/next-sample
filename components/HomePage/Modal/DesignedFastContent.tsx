/**
 * Content for "Designed for speed" feature modal
 * - Focuses on Linear's performance and productivity benefits
 * - Includes remote company testimonial
 * - Statistics: 2x increase in filed issues, 1.6x faster resolution
 * - Dark testimonial box with responsive padding and layout
 * - Fully responsive for mobile and desktop
 */
export default function DesignedFastContent() {
  return (
    <>
      <div className="-mb-4 sm:-mb-6 space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-400 px-6 sm:px-12 lg:px-24">
        <p>
          Linear is built in pursuit of high-performance. With its keyboard-first design, realtime
          sync, and zero-friction workflows, it delivers a focused experience ideal for fast-paced
          development environments.
        </p>
        <p>
          Linear's obsessive focus on speed not only results in improved developer productivity,
          but also enables teams to move faster.
        </p>
        <p>
          Companies that switch to Linear report a significant uplift in newly filed tickets,
          vastly reduced issue closing times, and products that ship faster.
        </p>
        <p>For us, speed is not just an afterthought. It's our most important feature.</p>
      </div>

      <div className="-mb-4 sm:-mb-6 rounded-xl sm:rounded-2xl bg-black/50 p-6 sm:p-16 lg:p-32">
        <p className="mb-4 sm:mb-6 text-center text-base sm:text-lg lg:text-xl text-gray-300">
          "Even as we continue to grow, we're moving faster because Linear keeps our workflows
          simple."
        </p>
        <div className="mb-6 sm:mb-8 flex items-center justify-center gap-2 text-white">
          <span className="text-xl sm:text-2xl font-semibold">remote</span>
        </div>

        <p className="mb-4 sm:mb-6 text-center text-sm sm:text-base text-gray-400">
          Teams that switch to Linear create more issues and close them faster
        </p>

        <div className="grid grid-cols-2 gap-4 sm:gap-8 text-center">
          <div>
            <div className="mb-2 text-4xl sm:text-5xl lg:text-6xl font-semibold text-white">2x</div>
            <div className="text-xs sm:text-sm text-gray-400">Increase in filed issues</div>
          </div>
          <div>
            <div className="mb-2 text-4xl sm:text-5xl lg:text-6xl font-semibold text-white">1.6x</div>
            <div className="text-xs sm:text-sm text-gray-400">Faster issue resolution</div>
          </div>
        </div>
      </div>
    </>
  );
}
