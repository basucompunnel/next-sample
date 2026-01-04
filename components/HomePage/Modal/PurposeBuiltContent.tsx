/**
 * Content for "Purpose-built for product teams" feature modal
 * - Highlights Linear's intentional design for product teams
 * - Emphasizes ease of use with scalability
 * - Includes Vercel company testimonial with triangle logo
 * - Statistics: 20k customers, 500k+ users, 45% YC companies, 66% top AI startups
 * - Four-stat grid layout in testimonial box
 */
export default function PurposeBuiltContent() {
  return (
    <>
      <div className="-mb-6 space-y-6 text-base text-gray-400 px-24">
        <p>
          Linear was developed with a specific purpose: to empower product teams to do their best
          work. Every aspect is intentionally designed to help teams focus on what they do best:
          Planning, building, and shipping great products.
        </p>
        <p>
          Because of its fit-to-purpose design, Linear is incredibly easy to use, but grows more
          powerful as you scale. It&apos;s principled where it needs to be, but provides enough
          flexibility to adapt to your team&apos;s unique way of working.
        </p>
        <p>
          We believe that this approach creates a better way to build products. And more than
          20,000 product teams around the globe – from early-stage startups to public companies –
          agree.
        </p>
      </div>

      <div className="-mb-6 rounded-2xl bg-black/50 p-32">
        <p className="mb-6 text-center text-xl text-gray-300">
          "We'd tried many tools before Linear but none of them felt like they were made for the
          way we work. Linear was a breath of fresh air - speedy, snappy, and a pleasure to use."
        </p>
        <div className="mb-8 flex items-center justify-center gap-2 text-white">
          <span className="text-2xl">▲</span>
          <span className="text-2xl font-semibold">Vercel</span>
        </div>

        <div className="grid grid-cols-2 gap-8 text-center">
          <div>
            <div className="mb-2 text-6xl font-semibold text-white">20k</div>
            <div className="text-gray-400">Paying customers</div>
          </div>
          <div>
            <div className="mb-2 text-6xl font-semibold text-white">500k+</div>
            <div className="text-gray-400">Active users</div>
          </div>
          <div>
            <div className="mb-2 text-6xl font-semibold text-white">45%</div>
            <div className="text-gray-400">of YC companies build with Linear</div>
          </div>
          <div>
            <div className="mb-2 text-6xl font-semibold text-white">66%</div>
            <div className="text-gray-400">of the top AI startups use Linear</div>
          </div>
        </div>
      </div>
    </>
  );
}
