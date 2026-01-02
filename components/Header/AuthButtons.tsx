/**
 * Authentication buttons component
 * - Log in: Animated underline appears on hover
 * - Sign up: Primary CTA with gradient overlay and text scale on hover
 * - Both buttons are non-functional for demo purposes
 */
export default function AuthButtons() {
  return (
    <div className="flex items-center gap-4">
      {/* Log in button with animated underline */}
      <button className="relative text-gray-300 hover:text-white transition-all duration-300 text-sm cursor-pointer group">
        <span className="relative z-10">Log in</span>
        {/* Underline expands from left to right on hover */}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
      </button>
      {/* Sign up button (primary CTA) with gradient overlay */}
      <button className="relative bg-white text-black px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer overflow-hidden group">
        {/* Text scales up slightly on hover */}
        <span className="relative z-10 transition-transform duration-300 group-hover:scale-105 inline-block">
          Sign up
        </span>
        {/* Gradient overlay fades in on hover */}
        <span className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </button>
    </div>
  );
}
