import { Button } from "../../../components/ui/button";

export const TestimonialRadical = (): JSX.Element => {
  return (
    <section id="testimonial-radical" className="bg-[#0a0a09] px-6 py-24 lg:px-12 lg:py-36 border-t border-stone-900/60 relative overflow-hidden">
      {/* Subtle gold ambient glow in background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.02)_0%,_transparent_50%)]" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/10 bg-amber-200/[0.01] px-4 py-1.5 text-xs font-light tracking-[0.25em] text-amber-200/80">
            Client Profile
          </span>
          <h2 className="mt-6 text-4xl font-light tracking-tight text-stone-100 sm:text-5xl font-serif">
            The Lumière Profile: <br />
            <span className="text-amber-200">A Success Story</span>
          </h2>
        </div>

        {/* Editorial Layout */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Portrait Image Column */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-amber-200/20 via-transparent to-amber-200/10 opacity-30 group-hover:opacity-50 blur-lg transition duration-1000" />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-stone-850 bg-stone-950">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt="Victoria Sterling - Executive Director"
                className="h-full w-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase tracking-[0.25em] font-light text-amber-200/80">Lumière Case No. 048</span>
                <h3 className="text-xl font-light text-stone-100 font-serif mt-1">Victoria Sterling</h3>
                <p className="text-[10px] text-stone-400 font-light tracking-wider uppercase">Executive Director • Venture Capital</p>
              </div>
            </div>
          </div>

          {/* Testimonial & Details Column */}
          <div className="lg:col-span-7 space-y-8 lg:pl-8">
            <div className="relative">
              {/* Elegant oversized quotes */}
              <span className="absolute -top-12 -left-6 text-8xl text-amber-200/5 font-serif select-none pointer-events-none">“</span>
              <p className="text-xl font-extralight italic leading-relaxed text-stone-200 font-serif relative z-10">
                "In my profession, confidence and presence in high-stakes boardrooms are everything. Lumière didn't just restore my teeth; they designed a smile that feels like a natural extension of who I am, completely invisibly and painlessly. The concierge experience respected my schedule from start to finish."
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 pt-8 border-t border-stone-900">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-light text-stone-500">The Aesthetic Challenge</span>
                <p className="mt-2 text-sm font-light leading-relaxed text-stone-400">
                  Uneven wear and subtle discoloration on anterior teeth caused by work-related bruxism. Anxious about artificial-looking or overly opaque white restorations.
                </p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-light text-stone-500">The Custom Solution</span>
                <p className="mt-2 text-sm font-light leading-relaxed text-stone-400">
                  8 Ultra-thin hand-sculpted porcelain veneers with natural enamel shading. Performed under VIP conscious sedation and in just two visits custom-coordinated around her schedule.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <div className="inline-flex items-center gap-6 rounded-2xl border border-stone-850 bg-stone-950/40 p-4">
                <div className="text-center border-r border-stone-900 pr-6">
                  <span className="block text-2xl font-light text-amber-200 font-serif">100%</span>
                  <span className="text-[9px] uppercase tracking-wider text-stone-500 font-light">Natural Look</span>
                </div>
                <div className="text-center border-r border-stone-900 pr-6">
                  <span className="block text-2xl font-light text-amber-200 font-serif">2</span>
                  <span className="text-[9px] uppercase tracking-wider text-stone-500 font-light">Visits Total</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-light text-amber-200 font-serif">Zero</span>
                  <span className="text-[9px] uppercase tracking-wider text-stone-500 font-light">Downtime</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button
                onClick={() => {
                  document.getElementById("services-radical")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative overflow-hidden rounded-full border border-amber-200/20 bg-stone-900/60 px-8 py-3 text-xs tracking-[0.15em] text-amber-200 uppercase transition-all hover:border-amber-200/40 hover:text-stone-900 hover:bg-amber-200/90"
              >
                Explore Custom Treatments
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
