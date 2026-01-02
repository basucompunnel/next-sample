/**
 * Hero title component with word-by-word fade-in animation
 * - Splits title text into individual words
 * - Each word fades in sequentially with 100ms delay between words
 * - Uses fade-in-up animation (opacity 0→1 with upward movement)
 */
export default function HeroTitle() {
  const words = "Linear is a purpose-built tool for planning and building products".split(" ");
  
  return (
    <h1 className="text-5xl md:text-6xl font-semibold text-white leading-tight mb-8">
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block opacity-0 animate-fade-in-up"
          style={{
            animationDelay: `${index * 0.1}s`,
            animationFillMode: 'forwards'
          }}
        >
          {word}&nbsp;
        </span>
      ))}
    </h1>
  );
}
