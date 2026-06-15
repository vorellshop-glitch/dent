import { useState } from "react";
import { Button } from "../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  const [showBooking, setShowBooking] = useState(false);

  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950">
      {/* Luxury gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(251,191,36,0.08)_0%,_transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(168,162,158,0.06)_0%,_transparent_50%)]" />

      {/* Navigation */}
      <nav className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8 lg:py-8">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-200 to-amber-400" />
          <span className="text-2xl font-light tracking-wide text-stone-100">
            Lumière<span className="font-medium text-amber-200">Dental</span>
          </span>
        </div>
        <div className="hidden items-center gap-8 lg:flex">
          <a href="#services" className="text-sm font-light tracking-wide text-stone-400 transition-colors hover:text-amber-200">
            Services
          </a>
          <a href="#gallery" className="text-sm font-light tracking-wide text-stone-400 transition-colors hover:text-amber-200">
            Gallery
          </a>
          <a href="#faq" className="text-sm font-light tracking-wide text-stone-400 transition-colors hover:text-amber-200">
            FAQ
          </a>
          <Button
            onClick={() => setShowBooking(true)}
            className="rounded-full bg-amber-200 px-6 py-2.5 text-stone-900 transition-all hover:bg-amber-100 hover:shadow-lg hover:shadow-amber-200/20"
          >
            Book Consultation
          </Button>
        </div>
        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-700 lg:hidden">
          <svg className="h-5 w-5 text-stone-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-120px)] max-w-7xl flex-col items-center justify-center px-6 text-center lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone-700/50 bg-stone-900/50 px-4 py-2 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-amber-200" />
          <span className="text-sm font-light tracking-wide text-stone-400">
            Award-Winning Cosmetic Dentistry
          </span>
        </div>

        <h1 className="max-w-4xl text-4xl font-light leading-tight tracking-tight text-stone-100 sm:text-5xl lg:text-7xl lg:leading-[1.1]">
          Your Smile, <br />
          <span className="bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200 bg-clip-text font-medium text-transparent">
            Reimagined
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-stone-400 lg:text-xl">
          Elite cosmetic dentistry for discerning professionals. Natural results,
          transparent pricing, and care that respects your time.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <Button
            onClick={() => setShowBooking(true)}
            className="group flex h-14 items-center gap-3 rounded-full bg-amber-200 px-8 text-stone-900 transition-all hover:bg-amber-100 hover:shadow-xl hover:shadow-amber-200/30"
          >
            <span className="text-base font-medium tracking-wide">Reserve Your Consultation</span>
            <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
          <Button
            variant="ghost"
            onClick={scrollToGallery}
            className="flex h-14 items-center gap-3 rounded-full border border-stone-700 px-8 text-stone-300 transition-all hover:border-stone-500 hover:text-stone-100"
          >
            <span className="text-base font-light tracking-wide">View Before & After Gallery</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </Button>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-60">
          <div className="flex items-center gap-2 text-stone-500">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm font-light">AACD Accredited</span>
          </div>
          <div className="flex items-center gap-2 text-stone-500">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <span className="text-sm font-light">5-Star Patient Care</span>
          </div>
          <div className="flex items-center gap-2 text-stone-500">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-light">25+ Years Excellence</span>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/80 backdrop-blur-sm">
          <div className="relative mx-4 w-full max-w-lg rounded-3xl border border-stone-800 bg-stone-900 p-8 shadow-2xl">
            <button
              onClick={() => setShowBooking(false)}
              className="absolute right-6 top-6 text-stone-500 transition-colors hover:text-stone-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-2xl font-light text-stone-100">Reserve Your Consultation</h3>
            <p className="mt-2 text-stone-400">Begin your smile transformation journey</p>
            <form className="mt-8 space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-stone-700 bg-stone-800/50 px-4 py-3 text-stone-100 placeholder:text-stone-500 focus:border-amber-200 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-stone-700 bg-stone-800/50 px-4 py-3 text-stone-100 placeholder:text-stone-500 focus:border-amber-200 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-stone-700 bg-stone-800/50 px-4 py-3 text-stone-100 placeholder:text-stone-500 focus:border-amber-200 focus:outline-none"
              />
              <select className="w-full rounded-xl border border-stone-700 bg-stone-800/50 px-4 py-3 text-stone-400 focus:border-amber-200 focus:outline-none">
                <option>Select Treatment Interest</option>
                <option>Porcelain Veneers</option>
                <option>Invisalign Clear Aligners</option>
                <option>Teeth Whitening</option>
                <option>Dental Bonding</option>
                <option>Elite Smile Makeover</option>
                <option>Not Sure - Need Consultation</option>
              </select>
              <Button className="mt-4 w-full rounded-xl bg-amber-200 py-4 text-stone-900 transition-all hover:bg-amber-100">
                Confirm Reservation
              </Button>
            </form>
            <p className="mt-4 text-center text-sm text-stone-500">
              No payment required. We'll confirm within 24 hours.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
