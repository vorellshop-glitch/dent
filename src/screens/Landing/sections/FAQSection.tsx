import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

const faqItems = [
  {
    id: "natural",
    question: "Will my cosmetic treatments look natural?",
    answer:
      "Yes. We use advanced facial mapping and translucent porcelain layers to ensure your smile looks natural and complements your unique facial structure—never 'fake' or artificial. Our approach considers your facial proportions, skin tone, and existing tooth characteristics to create results that are indistinguishable from natural teeth. We design for harmony with your overall appearance, not just isolated dental aesthetics.",
  },
  {
    id: "pain",
    question: "Does the procedure hurt, and what is the recovery time?",
    answer:
      "Your comfort is our priority. Whitening and bonding procedures have zero downtime—you can return to normal activities immediately. For veneers, we utilize advanced numbing techniques that ensure you feel comfortable throughout. Any mild sensitivity typically resolves within 24–48 hours. We provide detailed post-procedure care instructions and are always available for any questions during your recovery.",
  },
  {
    id: "insurance",
    question: "Does dental insurance cover cosmetic dentistry?",
    answer:
      "Elective cosmetic procedures are rarely covered by standard dental insurance. However, to make your treatment seamless and accessible, we offer 0% interest monthly financing through CareCredit as well as custom in-house payment plans tailored to your budget. Our financial coordinators work with you to find a payment structure that fits comfortably within your lifestyle.",
  },
  {
    id: "duration",
    question: "How long do cosmetic treatments take to complete?",
    answer:
      "Treatment timelines vary by procedure. Professional whitening is complete in a single 90-minute session. Composite bonding can be done in one visit. Porcelain veneers typically require 2-3 appointments over 2-3 weeks. Invisalign treatment ranges from 6-18 months depending on case complexity. During your consultation, we provide a detailed timeline tailored to your specific treatment plan.",
  },
  {
    id: "maintain",
    question: "How do I maintain my cosmetic dental work?",
    answer:
      "Maintaining your new smile is straightforward. For veneers and bonding, avoid biting hard objects and use non-abrasive toothpaste. Professional cleaning every 6 months keeps your results pristine. We provide a personalized maintenance protocol for each treatment type. With proper care, porcelain veneers last 10-15 years, and bonding typically lasts 5-7 years before touch-ups.",
  },
  {
    id: "consultation",
    question: "What happens during a cosmetic consultation?",
    answer:
      "Your consultation begins with a comprehensive smile analysis using digital imaging and facial mapping technology. We discuss your aesthetic goals, evaluate your oral health foundation, and present treatment options with transparent pricing. You'll see digital previews of potential results before committing to any treatment. There's no pressure—this is your opportunity to explore possibilities.",
  },
];

export const FAQSection = (): JSX.Element => {
  const [expandedValues, setExpandedValues] = useState<string[]>([]);

  return (
    <section id="faq" className="bg-stone-950 px-6 py-20 lg:py-32">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-stone-800 bg-stone-900/50 px-4 py-1.5 text-sm font-light tracking-wide text-stone-400">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-200" />
            Common Questions
          </span>
          <h2 className="mt-6 text-3xl font-light tracking-tight text-stone-100 sm:text-4xl lg:text-5xl">
            Your Questions, <br />
            <span className="text-amber-200">Answered</span>
          </h2>
          <p className="mt-4 text-stone-500 lg:text-lg">
            We understand the decisions behind cosmetic dentistry are personal.
            Here's clarity on the questions that matter most.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-12">
          <Accordion
            type="multiple"
            value={expandedValues}
            onValueChange={setExpandedValues}
            className="space-y-4"
          >
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="rounded-2xl border border-stone-800 bg-stone-900/30 px-6 transition-all data-[state=open]:border-stone-700 data-[state=open]:bg-stone-900/60"
              >
                <AccordionTrigger className="py-6 text-left text-lg font-light text-stone-200 hover:text-amber-200 hover:no-underline [&[data-state=open]>span]:text-amber-200">
                  <span className="flex items-start gap-4">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-stone-700 text-xs text-stone-400">
                      {index + 1}
                    </span>
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-10 pr-4 text-stone-400 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Questions CTA */}
        <div className="mt-12 rounded-2xl border border-stone-800 bg-gradient-to-r from-stone-900/50 to-stone-800/30 p-6 text-center lg:p-8">
          <p className="text-stone-300">
            Still have questions? We're here to help.
          </p>
          <p className="mt-2 text-stone-500">
            Schedule a no-pressure consultation to discuss your unique situation. Our team will address all your concerns with transparency and care.
          </p>
          <a
            href="#"
            className="mt-4 inline-flex items-center gap-2 text-amber-200 transition-colors hover:text-amber-100"
          >
            <span>Speak with a Treatment Advisor</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
