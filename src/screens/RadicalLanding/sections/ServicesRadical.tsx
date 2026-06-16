export const ServicesRadical = (): JSX.Element => {
  return (
    <section id="philosophy-radical" className="bg-[#000000] px-6 py-32 lg:px-12 lg:py-48 border-t border-stone-950 relative overflow-hidden flex items-center justify-center min-h-[60vh] selection:bg-amber-200/20 selection:text-amber-200">
      {/* Subtle titanium ambient light */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.01)_0%,_transparent_50%)]" />

      <div className="mx-auto max-w-4xl relative z-10 text-center space-y-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-stone-850 bg-black/40 px-4 py-1.5 text-[9px] font-light tracking-[0.3em] text-stone-500 uppercase">
          Clinical Philosophy
        </span>

        <div className="relative">
          {/* Subtle oversized quotation marks */}
          <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-9xl text-stone-900/30 font-serif select-none pointer-events-none">“</span>
          
          <h2 className="text-xl md:text-3xl font-extralight italic leading-relaxed text-[#EAEAEA] font-serif relative z-10 max-w-3xl mx-auto">
            "Nature is inherently asymmetric. Our craft lies not in creating uniform rows of clinical porcelain, but in sculpting organic harmony that respects the unique facial geometry of the individual."
          </h2>
        </div>

        <div className="pt-6">
          <div className="h-px w-12 bg-amber-200/20 mx-auto mb-4" />
          <span className="block text-xs uppercase tracking-[0.25em] text-[#F5F5F5] font-light">
            Lead Clinical Architect
          </span>
          <span className="block text-[10px] uppercase tracking-[0.2em] text-stone-500 font-light mt-1">
            Lumière Smile Sanctuary
          </span>
        </div>
      </div>
    </section>
  );
};
export default ServicesRadical;
