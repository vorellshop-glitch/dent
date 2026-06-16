# Ultra-Luxury Frontend Architecture: Cosmetic Dentistry Sanctuary

This blueprint details the design token configuration, strict UI guidelines, and modular React components for the **Lumière Obsidian** smile sanctuary.

---

## 🏛️ Strict Editorial Design Guidelines

### 1. Mandatory Extirpations
* **Zero Pricing:** No price structures, estimates, packages, or payment details.
* **Zero Low-Status CTAs:** Absolute ban on "Book Now", "Contact Us", or "Schedule Appointment". Use **"Request Private Assessment"** or **"Initiate Consultation"**.
* **Zero Generic Social Proof:** No star reviews, Yelp badges, or general text reviews. Evidence of results must be clinical and curated.
* **Zero Medical Clichés:** Ban dental blues, medical greens, tooth icons, and standard dentist office photos.

### 2. Design Tokens & UI Primitives
* **Dominant Palette:** Vantablack (`#000000` / `#050505`) backgrounds, pearl off-white (`#F5F5F5` / `#EAEAEA`) primary text, and brushed titanium/gold (`#D4AF37` / `#B8A99A`) accents for micro-borders and high-inertia focus states.
* **Typography:** Elegant serif headings (*Cinzel* / *Playfair Display*) and crisp modern geometric sans-serif (*Inter* / *Geist*) for micro-copy and tags.
* **Layout Grid:** High spacing, asymmetric flow, and floating elements simulating an art exhibition.

---

## 🗺️ Architectural Structure (Single-Page Redesign)

The landing page is simplified into four high-impact blocks:

### 1. The Hero Section (The Hook)
* **Visuals:** Dark full-bleed canvas with a slow-drifting golden gradient overlay (simulating raw porcelain under warm accent lighting).
* **Copy:**
  * Headline: *"Engineering the Alpha Smile."*
  * Subheadline: *"Bespoke porcelain architecture. Not just a procedure; a status transition."*
  * CTA: Ghost button `[Request Private Assessment]` with micro-shimmer.

### 2. The Philosophy Section (Authority)
* **Visuals:** Massive negative space, centered pearl typography.
* **Copy:**
  > *"Nature is asymmetric. Our craft lies not in creating uniform rows of clinical porcelain, but in sculpting organic harmony that respects the natural geometry of your face."*
  > — **Lead Clinical Architect, Lumière Sanctuary**

### 3. The Clinical Vault (Social Proof Gallery)
* **Visuals:** Art gallery format. Clean Before/After drag-to-reveal slider.
* **Copy Labels:** Detached, clinical subject codes:
  * *"Subject 014: Full Maxillary Arch Architecture"* (10 Veneers)
  * *"Subject 029: Vertical Dimension Restoration"* (Invisalign + Veneers)
  * *"Subject 088: Micro-Bonding Contour Alignment"* (Direct Composite)

### 4. The Gated Booking Engine (Funnel Modal)
* **Interaction:** Clicking `[Request Private Assessment]` triggers a smooth slide-over or blurred modal.
* **Step 1 (Micro-Commitment Pre-Filter):**
  * Question 1: *"Primary transformation objective?"*
    * Options: `Veneer Architecture` | `Implant Protocol` | `Full Restoration`
  * Question 2: *"Desired initiation timeline?"*
    * Options: `Immediate Allocation` | `1-3 Months` | `Discretionary Review`
* **Step 2 (The Luxury Scheduler):**
  * Transition into a sleek, dark calendar with thin borders.
  * Unavailable slots are muted out.
  * Scarcity badge: *"Only 2 clinical allocations remaining this week."*

---

## 📋 Proposed React Blueprint & State Management

Below is the structured layout for the code files:

### Component: GatedBookingModal.tsx
```tsx
import { useState } from "react";
import { Button } from "./ui/button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GatedBookingModal = ({ isOpen, onClose }: ModalProps) => {
  const [step, setStep] = useState(1);
  const [objective, setObjective] = useState("");
  const [timeline, setTimeline] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/90 p-0 backdrop-blur-xl transition-all duration-500">
      <div className="h-full w-full max-w-xl border-l border-stone-850 bg-[#050505] p-12 text-[#F5F5F5] flex flex-col justify-between shadow-2xl relative">
        <button onClick={onClose} className="absolute right-8 top-8 text-stone-500 hover:text-stone-300 transition-colors">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {step === 1 ? (
          <div className="space-y-12 my-auto">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-amber-200/60 font-light">Verification</span>
              <h3 className="text-3xl font-light font-serif mt-2">Private Assessment Intake</h3>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-widest text-stone-500 font-light">1. Primary transformation objective?</label>
                <div className="grid gap-3">
                  {["Veneer Architecture", "Implant Protocol", "Full Restoration"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setObjective(opt)}
                      className={`w-full text-left rounded-xl border p-4 text-sm font-light transition-all ${
                        objective === opt ? "border-amber-200/50 bg-amber-200/[0.01]" : "border-stone-900 bg-black hover:border-stone-800"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs uppercase tracking-widest text-stone-500 font-light">2. Desired initiation timeline?</label>
                <div className="grid gap-3">
                  {["Immediate Allocation", "1-3 Months", "Discretionary Review"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setTimeline(opt)}
                      className={`w-full text-left rounded-xl border p-4 text-sm font-light transition-all ${
                        timeline === opt ? "border-amber-200/50 bg-amber-200/[0.01]" : "border-stone-900 bg-black hover:border-stone-800"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Button
              disabled={!objective || !timeline}
              onClick={() => setStep(2)}
              className="w-full h-14 bg-gradient-to-r from-amber-300 to-amber-200 text-stone-950 font-semibold uppercase tracking-widest text-xs rounded-xl hover:opacity-90 disabled:opacity-30 transition-all"
            >
              Proceed to Allocation
            </Button>
          </div>
        ) : (
          <div className="space-y-8 my-auto">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-amber-200/60 font-light">Availability</span>
              <h3 className="text-3xl font-light font-serif mt-2">Clinical Calendar</h3>
              <span className="inline-block mt-3 bg-amber-300/10 border border-amber-200/20 text-amber-200 text-[9px] uppercase tracking-widest px-3 py-1 rounded-full font-light">
                Only 2 clinical allocations remaining this week
              </span>
            </div>

            {/* Custom Minimalist Calendar Mockup */}
            <div className="border border-stone-900 rounded-2xl p-6 bg-black">
              <div className="flex justify-between items-center text-xs tracking-widest uppercase text-stone-400 mb-6 font-serif">
                <span>June 2026</span>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center text-[10px] text-stone-500 tracking-wider mb-3">
                {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => <span key={i}>{d}</span>)}
              </div>
              <div className="grid grid-cols-7 gap-2 text-center">
                {Array.from({ length: 30 }).map((_, i) => {
                  const day = i + 1;
                  const isAvailable = day === 18 || day === 24;
                  return (
                    <button
                      key={i}
                      disabled={!isAvailable}
                      className={`h-9 w-9 rounded-full flex items-center justify-center text-xs ${
                        isAvailable
                          ? "border border-amber-200 text-amber-200 font-bold hover:bg-amber-200 hover:text-stone-950 cursor-pointer"
                          : "text-stone-700 cursor-not-allowed opacity-30"
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            <Button
              onClick={() => {
                alert("Consultation request logged under clinical review.");
                onClose();
                setStep(1);
              }}
              className="w-full h-14 border border-amber-200/20 bg-stone-950 text-amber-200 font-semibold uppercase tracking-widest text-xs rounded-xl hover:bg-amber-200/10 transition-all"
            >
              Request Selected Allocation
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
```
