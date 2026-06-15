import { useState, useMemo } from "react";
import { Button } from "../../../components/ui/button";

const treatmentsList = [
  {
    id: "veneers",
    name: "Porcelain Veneers",
    basePrice: 1700,
    priceUnit: "per tooth",
    description: "Indistinguishable porcelain restoration tailored to your facial proportions.",
    features: ["Custom shade matching", "Minimal prep technique", "10-15 year lifetime expectation"],
    isPerTooth: true,
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "invisalign",
    name: "Invisalign Clear Aligners",
    basePrice: 5200,
    priceUnit: "full case",
    description: "Premium orthodontic realignment without structural compromise.",
    features: ["3D digital scan planning", "Discreet custom trays", "Includes teeth whitening"],
    isPerTooth: false,
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "makeover",
    name: "Elite Smile Makeover",
    basePrice: 15000,
    priceUnit: "arch restoration",
    description: "Complete custom aesthetic reconstruction combining veneers and contouring.",
    features: ["Full face-mapping design", "VIP concierge treatment", "Lifetime restoration support"],
    isPerTooth: false,
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "whitening",
    name: "Teeth Whitening",
    basePrice: 550,
    priceUnit: "per session",
    description: "Rapid brightening up to 8 shades in a single comfortable visit.",
    features: ["Professional sensitivity control", "Varnished finish", "Immediate results in 90 mins"],
    isPerTooth: false,
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "bonding",
    name: "Composite Dental Bonding",
    basePrice: 350,
    priceUnit: "per tooth",
    description: "Artistic direct composite sculpting to correct minor chips and spacing.",
    features: ["Single visit procedure", "Enamel shade layered", "Conservative prep"],
    isPerTooth: true,
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=600&auto=format&fit=crop",
  },
];

const addOnsList = [
  { id: "sedation", name: "VIP Conscious Sedation", price: 800 },
  { id: "chauffeur", name: "Private Chauffeur Service", price: 300 },
  { id: "express", name: "Express Laboratory (24h turnaround)", price: 1200 },
];

export const ServicesRadical = (): JSX.Element => {
  // Calculator States
  const [selectedTreatmentId, setSelectedTreatmentId] = useState("veneers");
  const [teethCount, setTeethCount] = useState(8);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [months, setMonths] = useState(12);

  const selectedTreatment = useMemo(() => {
    return treatmentsList.find((t) => t.id === selectedTreatmentId) || treatmentsList[0];
  }, [selectedTreatmentId]);

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculatedTotals = useMemo(() => {
    let treatmentCost = selectedTreatment.basePrice;
    if (selectedTreatment.isPerTooth) {
      treatmentCost = selectedTreatment.basePrice * teethCount;
    }

    const addOnsCost = selectedAddOns.reduce((total, id) => {
      const addOn = addOnsList.find((a) => a.id === id);
      return total + (addOn ? addOn.price : 0);
    }, 0);

    const total = treatmentCost + addOnsCost;
    const monthly = total / months;

    return {
      total,
      monthly,
    };
  }, [selectedTreatment, teethCount, selectedAddOns, months]);

  return (
    <section id="services-radical" className="bg-[#080807] px-6 py-24 lg:px-12 lg:py-36 border-t border-stone-900/60">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/10 bg-amber-200/[0.01] px-4 py-1.5 text-xs font-light tracking-[0.25em] text-amber-200/80">
            Investment & Aesthetics
          </span>
          <h2 className="mt-6 text-4xl font-light tracking-tight text-stone-100 sm:text-5xl font-serif">
            Elite Service Offerings & <br />
            <span className="text-amber-200">Custom Concierge Estimate</span>
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-stone-500 tracking-wide">
            We operate with absolute transparency. Use our customized investment estimator below to draft a plan tailored to your lifestyle and budget.
          </p>
        </div>

        {/* Dynamic Calculator Wrapper */}
        <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 rounded-3xl border border-stone-900 bg-stone-950/40 p-8 backdrop-blur-md">
            
            {/* 1. Choose Treatment */}
            <div>
              <label className="text-xs uppercase tracking-[0.2em] font-light text-stone-500">
                1. Select Treatment Type
              </label>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {treatmentsList.map((treatment) => (
                  <button
                    key={treatment.id}
                    onClick={() => setSelectedTreatmentId(treatment.id)}
                    className={`flex flex-col items-start rounded-2xl border p-4 text-left transition-all ${
                      selectedTreatmentId === treatment.id
                        ? "border-amber-200 bg-amber-200/[0.03] shadow-[0_0_15px_rgba(251,191,36,0.05)]"
                        : "border-stone-900 bg-stone-950 hover:border-stone-800"
                    }`}
                  >
                    <span className={`text-sm font-medium ${selectedTreatmentId === treatment.id ? "text-amber-200" : "text-stone-300"}`}>
                      {treatment.name}
                    </span>
                    <span className="mt-1 text-[10px] text-stone-500 font-light tracking-wide">
                      Starting at ${treatment.basePrice} {treatment.priceUnit}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Count option (conditional if perTooth) */}
            {selectedTreatment.isPerTooth && (
              <div className="animate-fade-in">
                <div className="flex items-center justify-between">
                  <label className="text-xs uppercase tracking-[0.2em] font-light text-stone-500">
                    2. Quantity of Restorations
                  </label>
                  <span className="text-sm font-medium text-amber-200 font-serif">
                    {teethCount} {teethCount === 1 ? "Tooth" : "Teeth"}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="16"
                  value={teethCount}
                  onChange={(e) => setTeethCount(Number(e.target.value))}
                  className="mt-4 w-full h-1 bg-stone-900 rounded-lg appearance-none cursor-pointer accent-amber-200"
                />
                <div className="mt-2 flex justify-between text-[10px] text-stone-600 tracking-wider">
                  <span>1 TOOTH</span>
                  <span>8 (HALF ARCH)</span>
                  <span>16 (FULL SMILE)</span>
                </div>
              </div>
            )}

            {/* 3. Add Ons */}
            <div>
              <label className="text-xs uppercase tracking-[0.2em] font-light text-stone-500">
                {selectedTreatment.isPerTooth ? "3" : "2"}. Custom VIP Upgrades
              </label>
              <div className="mt-4 space-y-3">
                {addOnsList.map((addOn) => (
                  <button
                    key={addOn.id}
                    onClick={() => toggleAddOn(addOn.id)}
                    className={`flex items-center justify-between w-full rounded-2xl border p-4 text-left transition-all ${
                      selectedAddOns.includes(addOn.id)
                        ? "border-amber-200/50 bg-amber-200/[0.02]"
                        : "border-stone-900 bg-stone-950 hover:border-stone-850"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex h-5 w-5 items-center justify-center rounded border transition-colors ${
                        selectedAddOns.includes(addOn.id) ? "border-amber-200 bg-amber-200 text-stone-950" : "border-stone-800"
                      }`}>
                        {selectedAddOns.includes(addOn.id) && (
                          <svg className="h-3 w-3 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm font-light text-stone-300">{addOn.name}</span>
                    </div>
                    <span className="text-xs font-medium text-amber-200/80 font-serif">+${addOn.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Financing Terms */}
            <div>
              <label className="text-xs uppercase tracking-[0.2em] font-light text-stone-500">
                {selectedTreatment.isPerTooth ? "4" : "3"}. Interest-Free Plan Duration
              </label>
              <div className="mt-4 grid grid-cols-4 gap-2">
                {[6, 12, 18, 24].map((m) => (
                  <button
                    key={m}
                    onClick={() => setMonths(m)}
                    className={`rounded-xl border py-3 text-center transition-all text-xs tracking-wider ${
                      months === m
                        ? "border-amber-200 bg-amber-200/[0.03] text-amber-200"
                        : "border-stone-900 bg-stone-950 text-stone-400 hover:border-stone-800"
                    }`}
                  >
                    {m} Months
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-8 overflow-hidden rounded-3xl border border-amber-200/10 bg-gradient-to-b from-stone-900 to-[#0c0c0a] shadow-2xl">
            {/* Treatment Banner Image */}
            <div className="relative h-44 w-full overflow-hidden">
              <img
                src={selectedTreatment.image}
                alt={selectedTreatment.name}
                className="h-full w-full object-cover sepia-[0.10] brightness-[0.8] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />
            </div>

            <div className="p-8">
              <h3 className="text-xl font-light text-stone-100 font-serif">Selected Configuration</h3>
              
              {/* Treatment Summary */}
              <div className="mt-6 border-b border-stone-850 pb-6">
                <h4 className="text-base font-medium text-amber-200">{selectedTreatment.name}</h4>
                <p className="mt-2 text-xs leading-relaxed font-light text-stone-400">
                  {selectedTreatment.description}
                </p>
                <ul className="mt-4 space-y-2 text-xs font-light text-stone-500">
                  {selectedTreatment.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-amber-200" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Calculations */}
              <div className="mt-6 space-y-4">
                <div className="flex justify-between items-center text-xs tracking-wider">
                  <span className="text-stone-500 uppercase font-light">ESTIMATED TOTAL</span>
                  <span className="text-stone-300 font-serif text-lg font-medium">
                    ${calculatedTotals.total.toLocaleString("en-US", { minimumFractionDigits: 0 })}
                  </span>
                </div>
                
                <div className="rounded-2xl border border-amber-200/10 bg-amber-200/[0.01] p-4 text-center">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-light text-stone-500">0% Financing Estimate</span>
                  <div className="mt-2 flex justify-center items-baseline gap-1.5">
                    <span className="text-4xl font-light text-amber-200 font-serif">
                      ${calculatedTotals.monthly.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                    </span>
                    <span className="text-xs text-stone-500 uppercase tracking-widest font-light">/ month</span>
                  </div>
                  <p className="mt-2 text-[10px] text-stone-600 font-light tracking-wide">
                    Interest-free monthly investment for {months} months
                  </p>
                </div>
              </div>

              <Button className="relative overflow-hidden mt-8 w-full rounded-2xl bg-gradient-to-r from-amber-300 to-amber-200 py-6 text-stone-950 font-semibold uppercase tracking-widest text-xs transition-all hover:opacity-90 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:animate-shimmer">
                Submit Configuration & Secure Spot
              </Button>
              
              <p className="mt-4 text-center text-[9px] text-stone-600 uppercase tracking-widest font-light">
                This estimate is subject to clinical assessment. No application fees.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
