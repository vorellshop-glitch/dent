import { useState, useRef, useEffect } from "react";

const clinicalCases = [
  {
    id: 1,
    title: "Subject 014",
    subtitle: "Full Maxillary Arch Architecture",
    duration: "2 Weeks • 3 Sessions",
    description: "Re-engineering of the complete upper arch using hand-crafted, high-translucency porcelain veneers. Designed to correct micro-abrasions and minor dental overlap.",
    beforeLabel: "Pre-Intake Assessment",
    afterLabel: "Post-Treatment Allocation",
    beforeImg: "https://images.unsplash.com/photo-1579684389782-64d84b5e9050?q=80&w=1200&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Subject 029",
    subtitle: "Vertical Dimension Restoration",
    duration: "11 Months",
    description: "Aligner realignment and micro-restoration to establish optimal vertical occlusion, achieving complete facial symmetry without visible brackets.",
    beforeLabel: "Pre-Intake Assessment",
    afterLabel: "Post-Treatment Allocation",
    beforeImg: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1200&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Subject 088",
    subtitle: "Micro-Bonding Contour Alignment",
    duration: "90 Minutes",
    description: "Direct composite reshaping of anterior incisors. Close attention paid to structural texture, light reflection, and tooth-shade layering.",
    beforeLabel: "Pre-Intake Assessment",
    afterLabel: "Post-Treatment Allocation",
    beforeImg: "https://images.unsplash.com/photo-1512223792601-592a9809eed4?q=80&w=1200&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop",
  },
];

export const GalleryRadical = (): JSX.Element => {
  const [activeCaseId, setActiveCaseId] = useState(1);
  const [sliderPosition, setSliderPosition] = useState(50);
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = clinicalCases.find((c) => c.id === activeCaseId) || clinicalCases[0];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      isDragging.current = false;
    };
    window.addEventListener("mouseup", handleGlobalMouseUp);
    window.addEventListener("touchend", handleGlobalMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("touchend", handleGlobalMouseUp);
    };
  }, []);

  return (
    <section id="gallery-radical" className="bg-[#000000] px-6 py-24 lg:px-12 lg:py-36 border-t border-stone-950 relative selection:bg-amber-200/20 selection:text-amber-200">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-stone-900 bg-black/40 px-4 py-1.5 text-[9px] font-light tracking-[0.3em] text-stone-500 uppercase">
            Exhibition Gallery
          </span>
          <h2 className="mt-6 text-4xl font-light tracking-tight text-[#F5F5F5] sm:text-5xl font-serif">
            The Clinical Vault
          </h2>
          <p className="mt-4 text-xs font-light leading-relaxed text-stone-500 tracking-wider">
            Interact with our archival dental records. Slide the vertical divider to inspect the facial geometry and symmetry.
          </p>
        </div>

        {/* Gallery Content */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Comparison Slider (Art Exhibition Frame) */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              onMouseDown={() => {
                isDragging.current = true;
              }}
              onTouchStart={() => {
                isDragging.current = true;
              }}
              onMouseMove={(e) => handleMove(e.clientX)}
              onTouchMove={(e) => handleMove(e.touches[0].clientX)}
              className="relative aspect-[16/10] w-full overflow-hidden rounded-none border border-stone-900 bg-black cursor-ew-resize select-none"
            >
              {/* After Image (Full Base Layer) */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={activeCase.afterImg}
                  alt={activeCase.afterLabel}
                  className="w-full h-full object-cover sepia-[0.12] brightness-[0.9] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/20" />
                <div className="absolute top-6 right-6 bg-black/55 border border-stone-900 px-3 py-1 text-[8px] uppercase tracking-widest text-[#F5F5F5] font-light">
                  {activeCase.afterLabel}
                </div>
              </div>

              {/* Before Image (Cropped Slider Layer) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="absolute inset-0 w-full aspect-[16/10] min-w-[320px] md:min-w-[500px] lg:min-w-[700px]">
                  <img
                    src={activeCase.beforeImg}
                    alt={activeCase.beforeLabel}
                    className="w-full h-full object-cover grayscale brightness-[0.7] contrast-[0.95]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/20" />
                  <div className="absolute top-6 left-6 bg-black/55 border border-stone-900 px-3 py-1 text-[8px] uppercase tracking-widest text-stone-500 font-light">
                    {activeCase.beforeLabel}
                  </div>
                </div>
              </div>

              {/* Slider Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-px bg-stone-850 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Floating minimal slider handle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-stone-800 bg-black/90 shadow-2xl">
                  <div className="h-1 w-1 bg-amber-200/40 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Case Selector and Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-[9px] uppercase tracking-[0.25em] font-light text-stone-500">Case Record</span>
              <h3 className="text-3xl font-light text-[#F5F5F5] font-serif">{activeCase.title}</h3>
              <p className="text-[10px] text-amber-200/80 font-light tracking-widest uppercase">{activeCase.subtitle}</p>
              
              <div className="inline-block border border-stone-900 bg-black px-4 py-2 text-[10px] font-light text-stone-400 tracking-widest uppercase">
                Duration: {activeCase.duration}
              </div>

              <p className="text-sm font-extralight leading-relaxed text-stone-500 tracking-wide pt-4">
                {activeCase.description}
              </p>
            </div>

            {/* Selector Grid */}
            <div className="space-y-4 pt-6 border-t border-stone-950">
              <span className="text-[9px] uppercase tracking-[0.25em] font-light text-stone-500">Select Subject</span>
              <div className="grid gap-3">
                {clinicalCases.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      setActiveCaseId(c.id);
                      setSliderPosition(50); // Reset slider
                    }}
                    type="button"
                    className={`flex items-center gap-4 rounded-none border p-4 text-left transition-all duration-300 ${
                      activeCaseId === c.id
                        ? "border-amber-200 bg-amber-200/[0.01]"
                        : "border-stone-900 bg-black hover:border-stone-850"
                    }`}
                  >
                    <span className={`flex h-7 w-7 items-center justify-center border text-[10px] font-serif ${
                      activeCaseId === c.id ? "border-amber-200 text-amber-200" : "border-stone-900 text-stone-600"
                    }`}>
                      0{c.id}
                    </span>
                    <div>
                      <span className={`block text-xs uppercase tracking-widest ${activeCaseId === c.id ? "text-amber-200" : "text-stone-400"}`}>
                        {c.title}
                      </span>
                      <span className="text-[9px] text-stone-600 font-light uppercase tracking-wider">{c.subtitle}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
export default GalleryRadical;
