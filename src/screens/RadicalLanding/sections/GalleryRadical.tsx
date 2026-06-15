import { useState, useRef, useEffect } from "react";

const galleryCases = [
  {
    id: 1,
    title: "Veneers Transformation",
    subtitle: "8 Porcelain Veneers (Arch Restoration)",
    duration: "2 Weeks • 3 Visits",
    description: "Correction of severe enamel staining, minor overlapping, and asymmetrical tooth lengths using hand-crafted, translucent ceramic veneers.",
    beforeLabel: "Discolored & Uneven",
    afterLabel: "Vibrant & Harmonious",
    beforeBg: "from-[#1a1816] to-[#241e1a]", // Matte discolored simulation
    afterBg: "from-[#241c0a] via-[#4d3b19] to-[#241c0a]", // Radiant gold-infused smile simulation
  },
  {
    id: 2,
    title: "Alignment Correction",
    subtitle: "Invisalign Elite Full Arch",
    duration: "11 Months",
    description: "Re-alignment of anterior teeth crowding and correction of spacing issues without compromising the patient's professional image.",
    beforeLabel: "Crowded & Misaligned",
    afterLabel: "Perfectly Realigned",
    beforeBg: "from-[#16181a] to-[#1e2224]",
    afterBg: "from-[#0c1a24] via-[#1b3b4f] to-[#0c1a24]",
  },
  {
    id: 3,
    title: "Diastema Closure",
    subtitle: "Artistic Dental Bonding",
    duration: "Single Visit • 90 Mins",
    description: "Conservative closure of a central midline gap and repairs to chipped lateral incisors using multi-shaded, tooth-matched composite bonding.",
    beforeLabel: "Midline Gap",
    afterLabel: "Seamless Closure",
    beforeBg: "from-[#1a1618] to-[#241e20]",
    afterBg: "from-[#280c18] via-[#591e3b] to-[#280c18]",
  },
];

export const GalleryRadical = (): JSX.Element => {
  const [activeCaseId, setActiveCaseId] = useState(1);
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = galleryCases.find((c) => c.id === activeCaseId) || galleryCases[0];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
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
    <section id="gallery-radical" className="bg-[#0a0a09] px-6 py-24 lg:px-12 lg:py-36 border-t border-stone-900/60">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/10 bg-amber-200/[0.01] px-4 py-1.5 text-xs font-light tracking-[0.25em] text-amber-200/80">
            Aesthetic Evidence
          </span>
          <h2 className="mt-6 text-4xl font-light tracking-tight text-stone-100 sm:text-5xl font-serif">
            Interactive Before & After <br />
            <span className="text-amber-200">Signature Results</span>
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-stone-500 tracking-wide">
            Interact with our live smile comparison tool. Click a case below and drag the vertical slider to reveal the craftsmanship.
          </p>
        </div>

        {/* Comparison Slider Component */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Slider Display */}
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
              className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-stone-850 bg-stone-950 cursor-ew-resize select-none"
            >
              {/* After State (Full Base Layer) */}
              <div className={`absolute inset-0 bg-gradient-to-br ${activeCase.afterBg} flex flex-col justify-center items-center p-8 text-center`}>
                <div className="h-24 w-24 rounded-full border border-amber-200/20 bg-amber-200/5 flex items-center justify-center shadow-[0_0_40px_rgba(251,191,36,0.1)]">
                  <svg className="h-10 w-10 text-amber-200 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <span className="mt-6 text-2xl font-light tracking-widest text-stone-100 uppercase font-serif">
                  {activeCase.afterLabel}
                </span>
                <span className="mt-2 text-[10px] text-amber-200/60 uppercase tracking-[0.3em] font-light">Lumière Finish</span>
              </div>

              {/* Before State (Cropped Overlapping Layer) */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${activeCase.beforeBg} flex flex-col justify-center items-center p-8 text-center overflow-hidden`}
                style={{ width: `${sliderPosition}%` }}
              >
                {/* Fixed width inner container to prevent text scaling during slide */}
                <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center w-full min-w-[320px] md:min-w-[500px] lg:min-w-[700px]">
                  <div className="h-24 w-24 rounded-full border border-stone-800 bg-stone-900/50 flex items-center justify-center">
                    <svg className="h-10 w-10 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <span className="mt-6 text-2xl font-light tracking-widest text-stone-500 uppercase font-serif">
                    {activeCase.beforeLabel}
                  </span>
                  <span className="mt-2 text-[10px] text-stone-600 uppercase tracking-[0.3em] font-light">Initial Assessment</span>
                </div>
              </div>

              {/* Slider Partition Bar & Handle */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-300/60 via-amber-200 to-amber-300/60 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Floating drag handle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-amber-200/50 bg-[#0a0a09] shadow-2xl">
                  <svg className="h-4 w-4 text-amber-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l-4 4 4 4m8 0l4-4-4-4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Case Info & Selector */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-light text-amber-200/80">Active Case Profile</span>
              <h3 className="mt-3 text-3xl font-light text-stone-100 font-serif">{activeCase.title}</h3>
              <p className="mt-1 text-xs text-stone-500 font-light tracking-wider uppercase">{activeCase.subtitle}</p>
              
              <div className="mt-6 inline-block rounded-xl border border-stone-850 bg-stone-950/50 px-4 py-2 text-xs font-light text-amber-200/70 tracking-wide">
                Duration: {activeCase.duration}
              </div>

              <p className="mt-6 text-sm font-extralight leading-relaxed text-stone-400">
                {activeCase.description}
              </p>
            </div>

            {/* Selector Grid */}
            <div className="space-y-3 pt-6 border-t border-stone-900">
              <span className="text-[10px] uppercase tracking-[0.25em] font-light text-stone-500">Select Transformation Case</span>
              <div className="grid gap-3">
                {galleryCases.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      setActiveCaseId(c.id);
                      setSliderPosition(50); // Reset slider to center
                    }}
                    className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition-all ${
                      activeCaseId === c.id
                        ? "border-amber-200/40 bg-amber-200/[0.01]"
                        : "border-stone-900 bg-stone-950 hover:border-stone-850"
                    }`}
                  >
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-serif ${
                      activeCaseId === c.id ? "border-amber-200 text-amber-200" : "border-stone-800 text-stone-600"
                    }`}>
                      0{c.id}
                    </span>
                    <div>
                      <span className={`block text-sm font-medium ${activeCaseId === c.id ? "text-amber-200" : "text-stone-300"}`}>
                        {c.title}
                      </span>
                      <span className="text-[10px] text-stone-500 font-light uppercase tracking-wider">{c.subtitle}</span>
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
