import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Separator } from "../../../components/ui/separator";

const treatmentLinks = [
  { label: "Porcelain Veneers", href: "#services-radical" },
  { label: "Invisalign Aligners", href: "#services-radical" },
  { label: "Dental Bonding", href: "#services-radical" },
  { label: "Elite Smile Makeover", href: "#services-radical" },
  { label: "Professional Teeth Whitening", href: "#services-radical" },
];

const quickLinks = [
  { label: "Patient Transformations", href: "#gallery-radical" },
  { label: "Private Concierge Care", href: "#experience-radical" },
  { label: "Interest-Free Financing", href: "#services-radical" },
  { label: "Clinical FAQs", href: "#faq-radical" },
];

export const FooterRadical = (): JSX.Element => {
  const [showBooking, setShowBooking] = useState(false);
  const currentMonth = "June";

  return (
    <footer className="bg-[#0a0a09] border-t border-stone-900/60">
      
      {/* Urgency Banner */}
      <div className="border-b border-stone-900 bg-stone-950/40 py-5">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-200" />
            </span>
            <span className="text-xs tracking-wider font-light text-stone-300">
              Only <span className="font-medium text-amber-200">4 new smile design openings</span> remaining for {currentMonth}.
            </span>
          </div>
          <Button
            size="sm"
            onClick={() => setShowBooking(true)}
            className="relative overflow-hidden rounded-full bg-amber-200 px-6 py-2.5 text-xs tracking-wider uppercase font-semibold text-stone-950 transition-all hover:bg-amber-100 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:animate-shimmer"
          >
            Secure Your Invite
          </Button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] lg:gap-16">
          
          {/* Brand & Mission */}
          <div className="max-w-xs space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-amber-200 to-amber-300" />
              <span className="text-xl font-light tracking-widest text-stone-100 uppercase">
                Lumière<span className="text-amber-200">.</span>
              </span>
            </div>
            <p className="text-xs font-extralight leading-relaxed text-stone-400 tracking-wide">
              Crafting incomparable smiles for professionals with a lifestyle of distinction. Providing cosmetic sanctuary where discretion, quality, and time are respected.
            </p>
            {/* Accreditation Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="rounded-full border border-stone-850 bg-stone-950 px-3 py-1 text-[9px] uppercase tracking-widest font-light text-stone-500">
                AACD Member
              </span>
              <span className="rounded-full border border-stone-850 bg-stone-950 px-3 py-1 text-[9px] uppercase tracking-widest font-light text-stone-500">
                ADA Certified
              </span>
            </div>
          </div>

          {/* Treatments Column */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-light text-stone-500">
              Treatments
            </h4>
            <ul className="space-y-3 text-xs font-light tracking-wider">
              {treatmentLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-stone-400 transition-colors hover:text-amber-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Column */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-light text-stone-500">
              Sanctuary
            </h4>
            <ul className="space-y-3 text-xs font-light tracking-wider">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-stone-400 transition-colors hover:text-amber-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Booking Widget Card */}
          <div className="rounded-3xl border border-amber-200/10 bg-gradient-to-b from-stone-900 to-stone-950 p-6 shadow-2xl space-y-4">
            <h4 className="font-light text-stone-100 font-serif text-lg">Personal Consultation</h4>
            <p className="text-xs font-extralight text-stone-400 leading-relaxed">
              Begin your smile transformation design with an elite consultation session.
            </p>
            <Button
              onClick={() => setShowBooking(true)}
              className="relative overflow-hidden w-full rounded-xl bg-gradient-to-r from-amber-300 to-amber-200 py-5 text-stone-950 font-semibold uppercase tracking-widest text-xs transition-all hover:opacity-90 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:animate-shimmer"
            >
              Request Access
            </Button>
            <div className="flex items-center gap-2 text-xs font-light text-stone-500 tracking-wider">
              <svg className="h-4 w-4 text-amber-200/60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(555) 890-1234</span>
            </div>
          </div>

        </div>

        <Separator className="my-16 bg-stone-900" />

        {/* Legal & Policy */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row text-[10px] uppercase tracking-widest font-light text-stone-600">
          <p>© 2026 Lumière Dental Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-stone-300">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-stone-300">Terms of Use</a>
          </div>
        </div>
      </div>

      {/* Reservation Modal */}
      {showBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-fade-in">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="radical-footer-modal-title"
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
            <h3 id="radical-footer-modal-title" className="text-3xl font-light text-stone-100 font-serif">Reserve Your Consultation</h3>
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
              <Button className="relative overflow-hidden mt-4 w-full rounded-xl bg-gradient-to-r from-amber-300 to-amber-200 py-6 text-stone-950 font-semibold uppercase tracking-widest text-xs transition-all hover:opacity-90 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:animate-shimmer">
                Confirm Reservation
              </Button>
            </form>
            <p className="mt-4 text-center text-[10px] text-stone-500 uppercase tracking-widest font-light">
              No immediate payment required. Confirmation within 24 hours.
            </p>
          </div>
        </div>
      )}
    </footer>
  );
};
