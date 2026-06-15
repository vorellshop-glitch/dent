import { useState } from "react";

const galleryItems = [
  {
    id: 1,
    title: "Complete Smile Transformation",
    treatment: "Porcelain Veneers × 8",
    duration: "3 appointments over 2 weeks",
    description: "Comprehensive arch restoration addressing shape, shade, and alignment for a harmonious, natural smile.",
  },
  {
    id: 2,
    title: "Discreet Alignment Success",
    treatment: "Invisalign Full Case",
    duration: "14-month treatment",
    description: "Full smile realignment achieved without brackets, perfect for the patient's public-facing career.",
  },
  {
    id: 3,
    title: "Instant Radiance Boost",
    treatment: "Professional Whitening",
    duration: "Single 90-minute session",
    description: "8-shade improvement achieved in one comfortable session for an upcoming wedding.",
  },
  {
    id: 4,
    title: "Gap Closure & Shape Refinement",
    treatment: "Composite Bonding × 4",
    duration: "Single-visit procedure",
    description: "Natural-looking gap closure and edge refinement completed in under 2 hours.",
  },
  {
    id: 5,
    title: "Elite Smile Design",
    treatment: "Custom Makeover Package",
    duration: "6-month transformation",
    description: "Multi-treatment approach combining veneers, whitening, and gum contouring for a complete aesthetic overhaul.",
  },
  {
    id: 6,
    title: "Anterior Arch Restoration",
    treatment: "Veneers + Whitening",
    duration: "4-week treatment plan",
    description: "Combination approach for maximum impact while preserving tooth structure integrity.",
  },
];

export const GallerySection = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 px-6 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-stone-800 bg-stone-900/50 px-4 py-1.5 text-sm font-light tracking-wide text-stone-400">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-200" />
            Real Patient Results
          </span>
          <h2 className="mt-6 text-3xl font-light tracking-tight text-stone-100 sm:text-4xl lg:text-5xl">
            Before & After <br />
            <span className="text-amber-200">Gallery</span>
          </h2>
          <p className="mt-4 text-stone-500 lg:text-lg">
            Every smile tells a story. Explore transformations crafted with precision and artistry.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className="group relative overflow-hidden rounded-2xl text-left transition-all focus:outline-none focus:ring-2 focus:ring-amber-200"
            >
              {/* Before placeholder */}
              <div className="absolute left-0 top-0 h-full w-1/2 overflow-hidden bg-stone-700 transition-all group-hover:w-[48%]">
                <div className="flex h-full w-full items-center justify-center text-stone-500">
                  <span className="text-xs uppercase tracking-widest opacity-0 transition-opacity group-hover:opacity-100">Before</span>
                </div>
              </div>
              {/* After placeholder */}
              <div className="aspect-[4/3] w-full bg-gradient-to-br from-stone-800 to-stone-900">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-2 h-12 w-12 rounded-full border border-stone-700 bg-stone-800/50" />
                    <span className="text-sm text-stone-500">Result Preview</span>
                  </div>
                </div>
              </div>
              {/* Divider line */}
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-amber-200/60 to-transparent" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-950 to-transparent p-4 pt-12">
                <h3 className="font-medium text-stone-100">{item.title}</h3>
                <p className="mt-1 text-sm text-stone-400">{item.treatment}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Expanded View Modal */}
        {activeItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/90 p-4 backdrop-blur-sm animate-fade-in"
            onClick={() => setActiveItem(null)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="gallery-modal-title"
              className="relative w-full max-w-4xl rounded-3xl border border-stone-800 bg-stone-900 p-6 lg:p-10 animate-zoom-in"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveItem(null)}
                aria-label="Close details modal"
                className="absolute right-6 top-6 text-stone-500 transition-colors hover:text-stone-300"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {(() => {
                const item = galleryItems.find((i) => i.id === activeItem);
                if (!item) return null;
                return (
                  <>
                    <div className="grid gap-6 lg:grid-cols-2">
                      <div className="aspect-[4/3] rounded-2xl bg-stone-700">
                        <div className="flex h-full items-center justify-center text-stone-500">
                          <span>Before</span>
                        </div>
                      </div>
                      <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-stone-800 to-stone-900">
                        <div className="flex h-full items-center justify-center text-stone-400">
                          <span>After</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h3 id="gallery-modal-title" className="text-2xl font-medium text-stone-100">{item.title}</h3>
                      <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-stone-400">
                        <span className="rounded-full bg-stone-800 px-3 py-1">{item.treatment}</span>
                        <span>{item.duration}</span>
                      </div>
                      <p className="mt-4 font-light leading-relaxed text-stone-300">{item.description}</p>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-stone-500">
            All results shown are from actual patients. Individual results may vary.
          </p>
        </div>
      </div>
    </section>
  );
};
