import { useState } from "react";
import { Button } from "../../../components/ui/button";

interface HeroProps {
  onRequestAssessment: () => void;
}

export const HeroRadical = ({ onRequestAssessment }: HeroProps): JSX.Element => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setShowMobileMenu(false);
  };

  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-[#000000] flex flex-col justify-between selection:bg-amber-200/20 selection:text-amber-200">
      
      {/* Background Image Layer with extreme low opacity and deep vignette */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1600&auto=format&fit=crop"
          alt="Lumière Sanctuary Background"
          className="h-full w-full object-cover scale-[1.05] opacity-[0.05] grayscale blur-[1px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_#000000_90%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/60 via-transparent to-[#000000]" />
      </div>

      {/* Subtle gold accent light */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(245,158,11,0.03)_0%,_transparent_60%)]" />

      {/* Navigation */}
      <nav className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-8 lg:px-12">
        <div className="flex items-center gap-3">
          {/* Minimalist geometric logo */}
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-stone-800 bg-black">
            <div className="h-3.5 w-3.5 rounded-full bg-gradient-to-tr from-[#f5f5f5] via-amber-200/20 to-[#f5f5f5] border border-amber-200/20" />
          </div>
          <span className="text-xl font-light tracking-[0.25em] text-[#F5F5F5] uppercase font-sans">
            Lumière<span className="font-semibold text-amber-200 tracking-wider">.</span>
          </span>
        </div>
        
        <div className="hidden items-center gap-10 lg:flex">
          <button onClick={() => scrollToSection("philosophy-radical")} className="text-[10px] font-light tracking-[0.25em] text-stone-500 uppercase transition-colors hover:text-[#F5F5F5]">
            Philosophy
          </button>
          <button onClick={() => scrollToSection("gallery-radical")} className="text-[10px] font-light tracking-[0.25em] text-stone-500 uppercase transition-colors hover:text-[#F5F5F5]">
            Clinical Vault
          </button>
          <Button
            onClick={onRequestAssessment}
            className="relative overflow-hidden rounded-none border border-stone-800 bg-transparent px-6 py-2.5 text-[9px] tracking-[0.2em] text-[#F5F5F5] uppercase transition-all duration-300 hover:border-amber-200 hover:text-amber-200"
          >
            Initiate Consultation
          </Button>
        </div>
        
        <button
          onClick={() => setShowMobileMenu(true)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-900 bg-black/50 backdrop-blur-sm lg:hidden transition-colors hover:border-stone-850"
        >
          <svg className="h-5 w-5 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex flex-1 flex-col items-center justify-center px-6 text-center max-w-5xl py-20">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone-900 bg-black/40 px-5 py-2 backdrop-blur-md">
          <span className="h-1 w-1 rounded-full bg-amber-200 animate-ping" />
          <span className="text-[9px] uppercase font-light tracking-[0.3em] text-stone-500">
            Lumière Smile Architecture
          </span>
        </div>

        <h1 className="max-w-4xl text-5xl font-extralight leading-[1.1] tracking-tight text-[#F5F5F5] sm:text-6xl lg:text-8xl font-serif">
          Engineering the <br />
          <span className="relative inline-block bg-gradient-to-r from-stone-100 via-amber-100 to-stone-300 bg-clip-text font-medium text-transparent">
            Alpha Smile
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-sm font-extralight leading-relaxed text-stone-500 tracking-wider lg:text-base">
          Bespoke porcelain architecture. Not just a procedure; a status transition. Handcrafted smile alignments engineered in complete clinical discretion.
        </p>

        <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:gap-6">
          {/* Shimmer Border Button */}
          <Button
            onClick={onRequestAssessment}
            className="group relative overflow-hidden flex h-14 items-center gap-4 rounded-none border border-[#F5F5F5] bg-transparent px-10 text-[#F5F5F5] hover:bg-[#F5F5F5] hover:text-black transition-all duration-500"
          >
            <span className="text-xs font-light uppercase tracking-[0.25em]">Request Private Assessment</span>
            <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="relative z-10 border-t border-stone-950 bg-black/40 py-8 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-6 px-6 opacity-30 hover:opacity-50 transition-opacity duration-500">
          <div className="flex items-center gap-3 text-stone-400">
            <div className="h-1 w-1 rounded-full bg-amber-200" />
            <span className="text-[9px] font-light tracking-[0.25em] uppercase">AACD Accredited</span>
          </div>
          <div className="flex items-center gap-3 text-stone-400">
            <div className="h-1 w-1 rounded-full bg-amber-200" />
            <span className="text-[9px] font-light tracking-[0.25em] uppercase">Private Lounge Access</span>
          </div>
          <div className="flex items-center gap-3 text-stone-400">
            <div className="h-1 w-1 rounded-full bg-amber-200" />
            <span className="text-[9px] font-light tracking-[0.25em] uppercase">Bespoke Facial Mapping</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#000000] px-6 py-8 animate-fade-in lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-6 w-6 rounded-full bg-[#F5F5F5]/10 border border-stone-850" />
              <span className="text-lg font-light tracking-widest text-[#F5F5F5] uppercase">
                Lumière<span className="text-amber-200">.</span>
              </span>
            </div>
            <button
              onClick={() => setShowMobileMenu(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-900 bg-black"
            >
              <svg className="h-5 w-5 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-20 flex flex-col gap-10 text-center text-md font-light tracking-[0.25em] uppercase">
            <button
              onClick={() => scrollToSection("philosophy-radical")}
              className="text-stone-400 transition-colors hover:text-[#F5F5F5]"
            >
              Philosophy
            </button>
            <button
              onClick={() => scrollToSection("gallery-radical")}
              className="text-stone-400 transition-colors hover:text-[#F5F5F5]"
            >
              Clinical Vault
            </button>
            <Button
              onClick={() => {
                setShowMobileMenu(false);
                onRequestAssessment();
              }}
              className="relative overflow-hidden mx-auto rounded-none border border-stone-800 bg-transparent px-10 py-4 text-[#F5F5F5] font-light tracking-widest text-xs uppercase"
            >
              Initiate Consultation
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};
