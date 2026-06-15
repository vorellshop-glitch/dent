import { useState } from "react";
import { Button } from "../../../components/ui/button";

export const HeroRadical = (): JSX.Element => {
  const [showBooking, setShowBooking] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setShowMobileMenu(false);
  };

  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-[#0a0a09] flex flex-col justify-between">
      {/* Background Layer with gold ambient light */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(245,158,11,0.04)_0%,_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(168,162,158,0.03)_0%,_transparent_60%)]" />

      {/* Background Image Overlay with low opacity */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1600&auto=format&fit=crop"
          alt="Lumière Sanctuary Background"
          className="h-full w-full object-cover scale-[1.05] opacity-[0.08] grayscale blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a09]/50 via-transparent to-[#0a0a09]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-8 lg:px-12">
        <div className="flex items-center gap-3">
          {/* Elegant geometric logo */}
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-amber-200/20 bg-stone-950">
            <div className="h-5 w-5 rounded-full bg-gradient-to-tr from-amber-200 via-amber-100 to-amber-300" />
            <div className="absolute inset-0 rounded-full border border-amber-200/10 animate-pulse" />
          </div>
          <span className="text-2xl font-light tracking-widest text-stone-100 uppercase font-sans">
            Lumière<span className="font-semibold text-amber-200 tracking-wider">.</span>
          </span>
        </div>
        
        <div className="hidden items-center gap-10 lg:flex">
          <button onClick={() => scrollToSection("services-radical")} className="text-xs font-light tracking-[0.2em] text-stone-400 uppercase transition-colors hover:text-amber-200">
            Services
          </button>
          <button onClick={() => scrollToSection("gallery-radical")} className="text-xs font-light tracking-[0.2em] text-stone-400 uppercase transition-colors hover:text-amber-200">
            Before & After
          </button>
          <button onClick={() => scrollToSection("experience-radical")} className="text-xs font-light tracking-[0.2em] text-stone-400 uppercase transition-colors hover:text-amber-200">
            Experience
          </button>
          <button onClick={() => scrollToSection("faq-radical")} className="text-xs font-light tracking-[0.2em] text-stone-400 uppercase transition-colors hover:text-amber-200">
            FAQ
          </button>
          <Button
            onClick={() => setShowBooking(true)}
            className="relative overflow-hidden rounded-full border border-amber-200/20 bg-stone-900 px-8 py-3 text-xs tracking-[0.15em] text-amber-200 uppercase transition-all hover:border-amber-200/40 hover:text-stone-900 hover:bg-amber-200/90"
          >
            Request Invite
          </Button>
        </div>
        
        <button
          onClick={() => setShowMobileMenu(true)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-800 bg-stone-900/50 backdrop-blur-sm lg:hidden transition-colors hover:border-amber-200/30"
        >
          <svg className="h-5 w-5 text-stone-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex flex-1 flex-col items-center justify-center px-6 text-center max-w-5xl py-20">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200/10 bg-amber-200/[0.02] px-5 py-2 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-300 animate-ping" />
          <span className="text-[10px] uppercase font-light tracking-[0.3em] text-amber-200/80">
            The Craft of Incomparable Smiles
          </span>
        </div>

        <h1 className="max-w-4xl text-5xl font-extralight leading-[1.15] tracking-tight text-stone-100 sm:text-6xl lg:text-8xl font-serif">
          Luxury is in the <br />
          <span className="relative inline-block bg-gradient-to-r from-amber-100 via-amber-200 to-amber-300 bg-clip-text font-medium text-transparent">
            Invisible Details
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-base font-extralight leading-relaxed text-stone-400 tracking-wide lg:text-lg">
          Elite cosmetic dentistry designed for discerning professionals. Indistinguishable, natural aesthetics crafted in a sanctuary that respects your time and comfort.
        </p>

        <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:gap-6">
          {/* Shimmer Gold Button */}
          <Button
            onClick={() => setShowBooking(true)}
            className="group relative overflow-hidden flex h-14 items-center gap-4 rounded-full bg-gradient-to-r from-amber-300 to-amber-200 px-10 text-stone-950 transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(251,191,36,0.2)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:animate-shimmer"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">Reserve Consultation</span>
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
          
          <Button
            variant="ghost"
            onClick={() => scrollToSection("gallery-radical")}
            className="flex h-14 items-center gap-4 rounded-full border border-stone-800 bg-stone-900/10 px-10 text-stone-300 backdrop-blur-sm transition-all hover:border-stone-600 hover:text-stone-100 hover:bg-stone-900/30"
          >
            <span className="text-xs font-light uppercase tracking-[0.2em]">Explore Gallery</span>
            <svg className="h-4 w-4 text-stone-500 group-hover:text-stone-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 13l-7 7-7-7" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="relative z-10 border-t border-stone-900/80 bg-stone-950/40 py-8 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-6 px-6 opacity-40 hover:opacity-60 transition-opacity duration-300">
          <div className="flex items-center gap-3 text-stone-400">
            <div className="h-1.5 w-1.5 rounded-full bg-amber-200" />
            <span className="text-xs font-light tracking-[0.25em] uppercase">AACD Accredited</span>
          </div>
          <div className="flex items-center gap-3 text-stone-400">
            <div className="h-1.5 w-1.5 rounded-full bg-amber-200" />
            <span className="text-xs font-light tracking-[0.25em] uppercase">5-Star Patient Care</span>
          </div>
          <div className="flex items-center gap-3 text-stone-400">
            <div className="h-1.5 w-1.5 rounded-full bg-amber-200" />
            <span className="text-xs font-light tracking-[0.25em] uppercase">25+ Years Excellence</span>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-fade-in">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="radical-hero-modal-title"
            className="relative w-full max-w-lg rounded-3xl border border-amber-200/10 bg-[#0d0d0c] p-8 shadow-2xl animate-zoom-in"
          >
            <button
              onClick={() => setShowBooking(false)}
              aria-label="Close booking modal"
              className="absolute right-6 top-6 text-stone-500 transition-colors hover:text-stone-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 id="radical-hero-modal-title" className="text-3xl font-light text-stone-100 font-serif">Reserve Your Consultation</h3>
            <p className="mt-2 text-xs text-amber-200/70 uppercase tracking-widest font-light">Begin your smile transformation journey</p>
            <form className="mt-8 space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-stone-850 bg-stone-900/50 px-4 py-3 text-stone-100 placeholder:text-stone-600 focus:border-amber-200 focus:outline-none transition-colors text-sm font-light"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-stone-850 bg-stone-900/50 px-4 py-3 text-stone-100 placeholder:text-stone-600 focus:border-amber-200 focus:outline-none transition-colors text-sm font-light"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-stone-850 bg-stone-900/50 px-4 py-3 text-stone-100 placeholder:text-stone-600 focus:border-amber-200 focus:outline-none transition-colors text-sm font-light"
              />
              <select className="w-full rounded-xl border border-stone-850 bg-stone-900/50 px-4 py-3 text-stone-400 focus:border-amber-200 focus:outline-none transition-colors text-sm font-light">
                <option>Select Treatment Interest</option>
                <option>Porcelain Veneers</option>
                <option>Invisalign Clear Aligners</option>
                <option>Teeth Whitening</option>
                <option>Dental Bonding</option>
                <option>Elite Smile Makeover</option>
                <option>Not Sure - Need Consultation</option>
              </select>
              <Button className="relative overflow-hidden mt-4 w-full rounded-xl bg-gradient-to-r from-amber-300 to-amber-200 py-6 text-stone-950 transition-all hover:opacity-90 font-semibold uppercase tracking-widest text-xs before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:animate-shimmer">
                Confirm Reservation
              </Button>
            </form>
            <p className="mt-4 text-center text-[10px] text-stone-500 uppercase tracking-widest font-light">
              No immediate payment required. Confirmation within 24 hours.
            </p>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#080807] px-6 py-8 animate-fade-in lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-amber-200 to-amber-300" />
              <span className="text-xl font-light tracking-widest text-stone-100 uppercase">
                Lumière<span className="text-amber-200">.</span>
              </span>
            </div>
            <button
              onClick={() => setShowMobileMenu(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-850 bg-stone-900/50"
            >
              <svg className="h-5 w-5 text-stone-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-20 flex flex-col gap-10 text-center text-lg font-light tracking-[0.25em] uppercase">
            <button
              onClick={() => scrollToSection("services-radical")}
              className="text-stone-300 transition-colors hover:text-amber-200"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery-radical")}
              className="text-stone-300 transition-colors hover:text-amber-200"
            >
              Before & After
            </button>
            <button
              onClick={() => scrollToSection("experience-radical")}
              className="text-stone-300 transition-colors hover:text-amber-200"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("faq-radical")}
              className="text-stone-300 transition-colors hover:text-amber-200"
            >
              FAQ
            </button>
            <Button
              onClick={() => {
                setShowMobileMenu(false);
                setShowBooking(true);
              }}
              className="relative overflow-hidden mx-auto rounded-full bg-gradient-to-r from-amber-300 to-amber-200 px-10 py-4 text-stone-950 font-medium tracking-widest text-xs uppercase before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:animate-shimmer"
            >
              Book consultation
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};
