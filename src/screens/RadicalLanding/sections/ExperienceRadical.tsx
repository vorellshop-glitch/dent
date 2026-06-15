import { useState } from "react";

const steps = [
  {
    step: "01",
    title: "Executive Intake & Chauffeur Transfer",
    subtitle: "Sanctuary Reception",
    description: "Your journey starts with optional chauffeured travel. Upon arrival, bypass standard reception areas to relax in your private obsidian lounge equipped with refreshments, high-speed connectivity, and an acoustic soundscape.",
    details: ["Private lounge access", "Personal concierge escort", "Flexible scheduling respect"],
  },
  {
    step: "02",
    title: "Digital Smile Architecture",
    subtitle: "3D Custom Face Mapping",
    description: "Using advanced 3D face scanners and dental mapping technology, we design your smile to harmonize with your facial proportions, skin tone, and micro-movements. Preview your custom restorations digitally before any treatment begins.",
    details: ["3D structural scan", "Real-time digital mapping", "Natural proportion balance"],
  },
  {
    step: "03",
    title: "Uncompromising Comfort Protocols",
    subtitle: "Pain-Free Sedation & Aromatherapy",
    description: "Every procedure is executed under our strict comfort protocol. Choose from conscious sedation, noise-canceling audio selection, and custom aromatherapy. We respect your physical well-being and eliminate all dental anxiety.",
    details: ["Advanced local numbing", "Conscious sedation options", "Noise-canceling acoustic escape"],
  },
  {
    step: "04",
    title: "The Reveal & Aftercare Suite",
    subtitle: "Dedicated Healing Concierge",
    description: "Experience your smile transformation reveal in private. Leave our sanctuary with a custom aftercare suite, including specialized products and direct 24/7 access to your lead dentist and patient care manager.",
    details: ["Luxury aftercare products package", "Direct 24/7 priority line", "Complimentary 6-month follow-up check"],
  },
];

export const ExperienceRadical = (): JSX.Element => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = steps[activeStepIndex];

  return (
    <section id="experience-radical" className="bg-[#080807] px-6 py-24 lg:px-12 lg:py-36 border-t border-stone-900/60">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/10 bg-amber-200/[0.01] px-4 py-1.5 text-xs font-light tracking-[0.25em] text-amber-200/80">
            The Patient Journey
          </span>
          <h2 className="mt-6 text-4xl font-light tracking-tight text-stone-100 sm:text-5xl font-serif">
            VIP Concierge Care & <br />
            <span className="text-amber-200">The Sanctuary Experience</span>
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-stone-500 tracking-wide">
            Your comfort and time are treated as valuable commodities. Explore the structured path of our elite treatment experience.
          </p>
        </div>

        {/* Interactive Steps Grid */}
        <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Vertical Navigation Steps */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] font-light text-stone-500 block mb-6">
              Interactive Milestone Journey
            </span>
            <div className="relative border-l border-stone-850 pl-6 space-y-8">
              {steps.map((item, index) => {
                const isActive = activeStepIndex === index;
                return (
                  <button
                    key={item.step}
                    onClick={() => setActiveStepIndex(index)}
                    className="group relative flex flex-col items-start text-left w-full focus:outline-none"
                  >
                    {/* Circle Indicator on the line */}
                    <div className={`absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full border transition-all ${
                      isActive 
                        ? "border-amber-200 bg-amber-200 shadow-[0_0_10px_rgba(251,191,36,0.5)]" 
                        : "border-stone-800 bg-stone-950 group-hover:border-stone-650"
                    }`} />
                    
                    <span className={`text-[10px] uppercase tracking-[0.2em] font-light ${isActive ? "text-amber-200/80" : "text-stone-600"}`}>
                      Phase {item.step}
                    </span>
                    <span className={`mt-1 text-lg font-medium transition-colors ${isActive ? "text-stone-100" : "text-stone-400 group-hover:text-stone-200"}`}>
                      {item.title}
                    </span>
                    <span className="mt-1 text-xs text-stone-500 font-light tracking-wide">{item.subtitle}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Card Details */}
          <div className="lg:col-span-7 rounded-3xl border border-amber-200/10 bg-gradient-to-b from-stone-900/50 to-stone-950/50 p-8 lg:p-12 backdrop-blur-md shadow-2xl relative overflow-hidden">
            {/* Ambient Gold Ray behind content */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-amber-200/5 blur-3xl" />
            
            <div className="animate-fade-in">
              <span className="text-4xl lg:text-5xl font-light text-amber-200/20 font-serif block">
                {activeStep.step}
              </span>
              
              <h3 className="mt-4 text-2xl font-light text-stone-100 font-serif">
                {activeStep.title}
              </h3>
              <p className="mt-2 text-xs text-amber-200/70 tracking-widest uppercase font-light">
                {activeStep.subtitle}
              </p>
              
              <p className="mt-8 text-sm font-extralight leading-relaxed text-stone-400">
                {activeStep.description}
              </p>

              <div className="mt-8 pt-8 border-t border-stone-900/80">
                <span className="text-[10px] uppercase tracking-[0.2em] font-light text-stone-500 block mb-4">
                  Sanctuary Inclusions
                </span>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {activeStep.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-3 text-xs font-light text-stone-300">
                      <svg className="h-4 w-4 text-amber-200 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
          </div>

        </div>

      </div>
    </section>
  );
};
