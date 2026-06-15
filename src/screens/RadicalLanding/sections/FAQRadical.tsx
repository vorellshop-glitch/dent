import { useState, useMemo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

const categories = [
  { id: "all", name: "All Questions" },
  { id: "aesthetics", name: "Aesthetics & Naturality" },
  { id: "process", name: "Pain & Procedure" },
  { id: "financial", name: "Financing & Insurance" },
];

const faqList = [
  {
    id: "natural-look",
    category: "aesthetics",
    question: "Will my cosmetic dental work look artificially white?",
    answer: "Absolutely not. We design custom porcelain structures layering translucent ceramics that mimic the light reflective qualities of natural enamel. Your facial-mapping analysis determines the ideal proportions, hue, and alignment to harmonize with your eyes, skin tone, and overall anatomy.",
  },
  {
    id: "pain-control",
    category: "process",
    question: "Is the procedure painful? What is recovery like?",
    answer: "Every procedure is engineered around comfort. Non-invasive bonding and professional whitening have zero recovery downtime. For porcelain veneers, we administer micro-dosage local anesthetics ensuring complete comfort. Mild sensitivity afterward is normal and generally disappears within 24 to 48 hours.",
  },
  {
    id: "insurance-coverage",
    category: "financial",
    question: "Do you accept standard dental insurance for cosmetic work?",
    answer: "Standard dental insurance rarely covers elective cosmetic treatments. However, to make your investment seamless, our financial coordinators organize interest-free financing via CareCredit, as well as customized, in-house payment schedules tailored to your preferences.",
  },
  {
    id: "treatment-durations",
    category: "process",
    question: "How many sessions are required for a complete makeover?",
    answer: "Porcelain veneers require 2 to 3 appointments over a 2-week period. Professional whitening is completed in one 90-minute session. Orthodontic alignment with Invisalign ranges between 6 to 18 months, with progress checks every 4-6 weeks.",
  },
  {
    id: "veneer-maintenance",
    category: "aesthetics",
    question: "How do I maintain my porcelain veneers long-term?",
    answer: "Treat veneers as you would natural teeth: brush twice daily with non-abrasive toothpaste, floss regularly, and attend routine professional cleanings twice a year. Avoiding biting exceptionally hard items (such as ice or metal) secures their lifetime which ranges from 10 to 15 years.",
  },
  {
    id: "consultation-structure",
    category: "process",
    question: "What should I expect during my initial visit?",
    answer: "We perform a comprehensive visual and digital oral assessment. We discuss your aesthetic desires, take high-resolution dental photography, and generate a 3D digital simulation of your potential smile design, alongside a transparent fee outline.",
  },
];

export const FAQRadical = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedValues, setExpandedValues] = useState<string[]>([]);

  const filteredFaqs = useMemo(() => {
    if (activeCategory === "all") return faqList;
    return faqList.filter((faq) => faq.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="faq-radical" className="bg-[#0a0a09] px-6 py-24 lg:px-12 lg:py-36 border-t border-stone-900/60">
      <div className="mx-auto max-w-4xl">
        
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/10 bg-amber-200/[0.01] px-4 py-1.5 text-xs font-light tracking-[0.25em] text-amber-200/80">
            Frequently Answered
          </span>
          <h2 className="mt-6 text-4xl font-light tracking-tight text-stone-100 sm:text-5xl font-serif">
            Demystifying Cosmetic <br />
            <span className="text-amber-200">Dentistry</span>
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-stone-500 tracking-wide">
            Making decisions regarding your smile is highly personal. Explore immediate clarity on the subjects that matter most.
          </p>
        </div>

        {/* Filter categories */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setActiveCategory(c.id);
                setExpandedValues([]); // Collapse accordion items on filter switch
              }}
              className={`rounded-full px-5 py-2 text-xs font-light tracking-wider transition-all border ${
                activeCategory === c.id
                  ? "border-amber-200 bg-amber-200/[0.03] text-amber-200"
                  : "border-stone-900 bg-stone-950 text-stone-400 hover:border-stone-800 hover:text-stone-200"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="mt-10">
          <Accordion
            type="multiple"
            value={expandedValues}
            onValueChange={setExpandedValues}
            className="space-y-4"
          >
            {filteredFaqs.map((item, index) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="rounded-2xl border border-stone-900 bg-stone-950/40 px-6 transition-all data-[state=open]:border-amber-200/10 data-[state=open]:bg-stone-950/80"
              >
                <AccordionTrigger className="py-6 text-left text-base font-light text-stone-200 hover:text-amber-200 hover:no-underline [&[data-state=open]>span]:text-amber-200">
                  <span className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-stone-800 text-[10px] text-stone-550">
                      0{index + 1}
                    </span>
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-9 pr-4 text-xs font-extralight text-stone-400 leading-relaxed tracking-wide">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Footer Advisor Callout */}
        <div className="mt-16 rounded-3xl border border-stone-900 bg-gradient-to-r from-stone-950 to-stone-900/50 p-8 text-center relative overflow-hidden">
          <p className="text-sm font-light text-stone-300">
            Have questions that require clinical expertise?
          </p>
          <p className="mt-2 text-xs font-extralight text-stone-550 max-w-2xl mx-auto leading-relaxed">
            Schedule a confidential call with one of our patient care advisors. We provide comprehensive answers regarding guarantees, treatment compatibility, and VIP care options.
          </p>
          <a
            href="#services-radical"
            className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-amber-200 transition-colors hover:text-amber-100"
          >
            <span>Consult with a Smile Advisor</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};
