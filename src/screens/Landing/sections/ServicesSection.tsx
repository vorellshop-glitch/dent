import { Button } from "../../../components/ui/button";

const services = [
  {
    id: "veneers",
    name: "Porcelain Veneers",
    priceRange: "$900 – $2,500",
    priceUnit: "per tooth",
    description: "Best for permanent shape/shade transformation. Lasts 10–15 years.",
    features: ["Facial-mapping design", "Translucent ceramic layers", "Minimal prep technique"],
    accent: "from-amber-200 to-amber-400",
    borderClass: "border-amber-200/20",
    popular: false,
  },
  {
    id: "invisalign",
    name: "Invisalign Clear Aligners",
    priceRange: "$3,000 – $7,500",
    priceUnit: "full case",
    description: "Discreet, gradual structural alignment without brackets.",
    features: ["Custom 3D-mapped trays", "Progress tracking app", "Removable for eating"],
    accent: "from-stone-400 to-stone-300",
    borderClass: "border-stone-600/30",
    popular: true,
  },
  {
    id: "whitening",
    name: "In-Office Teeth Whitening",
    priceRange: "$300 – $800",
    priceUnit: "per session",
    description: "Immediate, dramatic brightening up to 8 shades in one visit.",
    features: ["Professional-grade formula", "Zero sensitivity treatment", "Results in 90 minutes"],
    accent: "from-stone-400 to-stone-300",
    borderClass: "border-stone-700/30",
    popular: false,
  },
  {
    id: "bonding",
    name: "Composite Dental Bonding",
    priceRange: "$150 – $500",
    priceUnit: "per tooth",
    description: "Rapid, single-visit fix for minor chips, gaps, or shape concerns.",
    features: ["Same-day results", "Natural tooth-matched shade", "No enamel removal"],
    accent: "from-stone-400 to-stone-300",
    borderClass: "border-stone-700/30",
    popular: false,
  },
  {
    id: "makeover",
    name: "Elite Smile Makeover",
    priceRange: "$8,000 – $30,000+",
    priceUnit: "custom package",
    description: "Custom multi-treatment full-arch transformation package.",
    features: ["Comprehensive facial analysis", "Multi-treatment coordination", "VIP concierge service"],
    accent: "from-amber-400 to-amber-500",
    borderClass: "border-amber-200/30",
    popular: false,
    isElite: true,
  },
];

export const ServicesSection = (): JSX.Element => {
  return (
    <section id="services" className="bg-stone-950 px-6 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-stone-800 bg-stone-900/50 px-4 py-1.5 text-sm font-light tracking-wide text-stone-400">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-200" />
            2026 Treatment Pricing
          </span>
          <h2 className="mt-6 text-3xl font-light tracking-tight text-stone-100 sm:text-4xl lg:text-5xl">
            Transparent Investment, <br />
            <span className="text-amber-200">Exceptional Results</span>
          </h2>
          <p className="mt-4 text-stone-500 lg:text-lg">
            Every treatment includes comprehensive consultation, advanced imaging, and our signature comfort care protocol.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative overflow-hidden rounded-2xl border ${service.borderClass} bg-gradient-to-b from-stone-900 to-stone-950 p-6 transition-all hover:border-stone-600 lg:p-8 ${
                service.isElite ? "sm:col-span-2 lg:col-span-3" : ""
              }`}
            >
              {service.popular && (
                <div className="absolute right-4 top-4 rounded-full bg-amber-200 px-3 py-1 text-xs font-medium text-stone-900">
                  Most Popular
                </div>
              )}
              {service.isElite && (
                <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-amber-200 to-amber-400 px-3 py-1 text-xs font-medium text-stone-900">
                  Premium Experience
                </div>
              )}

              <h3 className="text-xl font-medium text-stone-100 lg:text-2xl">
                {service.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-light text-amber-200 lg:text-4xl">
                  {service.priceRange}
                </span>
                <span className="text-sm text-stone-500">{service.priceUnit}</span>
              </div>

              <p className="mt-4 font-light leading-relaxed text-stone-400">
                {service.description}
              </p>

              <ul className="mt-6 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-stone-400">
                    <svg className="h-4 w-4 text-amber-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant="ghost"
                className="mt-8 w-full rounded-xl border border-stone-700 py-5 text-stone-300 transition-all hover:border-amber-200 hover:text-amber-200"
              >
                Learn More About This Treatment
              </Button>
            </div>
          ))}
        </div>

        {/* Financing Note */}
        <div className="mt-12 rounded-2xl border border-stone-800 bg-stone-900/50 p-6 text-center lg:p-8">
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-center">
            <svg className="h-8 w-8 text-amber-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <div>
              <p className="text-stone-300">
                <span className="font-medium text-amber-200">0% Financing Available</span> through CareCredit & In-House Payment Plans
              </p>
              <p className="mt-1 text-sm text-stone-500">Flexible monthly payments that fit your lifestyle. No hidden fees.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
