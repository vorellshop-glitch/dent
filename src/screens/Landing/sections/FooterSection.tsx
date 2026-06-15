import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Separator } from "../../../components/ui/separator";

const treatmentLinks = [
  { label: "Porcelain Veneers", href: "#services" },
  { label: "Invisalign", href: "#services" },
  { label: "Teeth Whitening", href: "#services" },
  { label: "Dental Bonding", href: "#services" },
  { label: "Smile Makeovers", href: "#services" },
];

const quickLinks = [
  { label: "Before & After Gallery", href: "#gallery" },
  { label: "Patient Reviews", href: "#" },
  { label: "Financing Options", href: "#" },
  { label: "Our Team", href: "#" },
];

export const FooterSection = (): JSX.Element => {
  const currentMonth = "June";
  const [showBooking, setShowBooking] = useState(false);

  return (
    <footer className="bg-stone-950">
      {/* Urgency Banner */}
      <div className="border-b border-stone-800 bg-stone-900/50">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-200" />
              </span>
              <span className="text-sm font-light text-stone-300">
                Only <span className="font-medium text-amber-200">4 new smile makeover openings</span> remaining for {currentMonth}.
              </span>
            </div>
            <Button
              size="sm"
              onClick={() => setShowBooking(true)}
              className="rounded-full bg-amber-200 px-5 py-2 text-sm text-stone-900 transition-all hover:bg-amber-100"
            >
              Reserve Your Spot
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto_auto_auto] lg:gap-16">
          {/* Brand Column */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-200 to-amber-400" />
              <span className="text-2xl font-light tracking-wide text-stone-100">
                Lumière<span className="font-medium text-amber-200">Dental</span>
              </span>
            </div>
            <p className="mt-4 font-light leading-relaxed text-stone-400">
              Elite cosmetic dentistry for discerning professionals. Natural results,
              transparent pricing, and care that respects your time.
            </p>
            {/* Credentials */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1.5 rounded-full border border-stone-700 bg-stone-900/50 px-3 py-1.5 text-xs text-stone-400">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>AACD Member</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-stone-700 bg-stone-900/50 px-3 py-1.5 text-xs text-stone-400">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 8.525 1 1 0 00.932.982l13.895 1.022a1 1 0 00.98-.76l.551-2.205" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 19.5v-15a1 1 0 011-1h10.5a1 1 0 011 1v7.5" />
                </svg>
                <span>ADA Certified</span>
              </div>
            </div>
          </div>

          {/* Treatments Column */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest text-stone-500">
              Treatments
            </h4>
            <ul className="mt-4 space-y-3">
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

          {/* Quick Links Column */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest text-stone-500">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
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

          {/* Booking Card */}
          <div className="rounded-2xl border border-stone-800 bg-gradient-to-b from-stone-900 to-stone-950 p-6 lg:w-72">
            <h4 className="font-medium text-stone-100">Book Your Consultation</h4>
            <p className="mt-2 text-sm text-stone-400">
              Begin your smile transformation with a personalized consultation.
            </p>
            <Button
              onClick={() => setShowBooking(true)}
              className="mt-4 w-full rounded-xl bg-amber-200 py-5 text-stone-900 transition-all hover:bg-amber-100"
            >
              Reserve Now
            </Button>
            <div className="mt-4 flex items-center gap-2 text-sm text-stone-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(555) 234-5678</span>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-stone-800" />

        {/* Bottom Row */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-stone-500">
            © 2026 Lumière Dental. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-stone-500">
            <a href="#" className="transition-colors hover:text-stone-300">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-stone-300">Terms of Service</a>
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
    </footer>
  );
};
