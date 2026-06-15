import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const faqTabs = ["Option 1", "Option 2", "Option 3"];

const faqItems = [
  {
    value: "item-1",
    question: "Why Is Dental Health Important?",
    answer: "",
  },
  {
    value: "item-2",
    question: "How Often Should I Brush My Teeth?",
    answer: "",
  },
  {
    value: "item-3",
    question: "Is Flossing Necessary, And How Often Should I Do It?",
    answer: "",
  },
];

const paginationItems = ["1", "2", "3", "4", "5"];

export const SectionComponentNodeSubsection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("Option 1");

  return (
    <section className="relative w-full bg-[#f5f7ff] px-4 py-[72px] sm:px-8 lg:px-[166px] lg:py-[120px]">
      <div className="mx-auto flex w-full max-w-[1108px] flex-col items-center gap-[62px]">
        <header className="flex w-full flex-col items-center gap-5">
          <p className="mt-[-1.00px] text-center text-xl font-semibold leading-[normal] tracking-[0] text-[#0e1120] [font-family:'Poppins',Helvetica]">
            FAQ
          </p>
          <h2 className="max-w-[897px] text-center text-[32px] font-semibold leading-[1.15] tracking-[0] text-[#0e1120] sm:text-[42px] lg:text-6xl lg:leading-[70px] [font-family:'Poppins',Helvetica]">
            Answers To Our Most Frequently Asked Questions
          </h2>
        </header>
        <nav
          aria-label="FAQ options"
          className="flex flex-wrap items-start justify-center gap-6 sm:gap-10 lg:gap-[140px]"
        >
          {faqTabs.map((tab) => {
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className="inline-flex flex-col items-center gap-2"
                aria-pressed={isActive}
              >
                <span
                  className={`mt-[-1.00px] text-[28px] font-semibold leading-[normal] tracking-[-1.20px] sm:text-[34px] lg:text-[40px] [font-family:'Poppins',Helvetica] ${
                    isActive ? "text-[#0e1120]" : "text-[#d2d2d8]"
                  }`}
                >
                  {tab}
                </span>
                <span
                  className={`h-1 rounded-full transition-all ${
                    isActive
                      ? "w-[154px] bg-[#0e1120]"
                      : "w-[154px] bg-transparent"
                  }`}
                />
              </button>
            );
          })}
        </nav>
        <div className="flex w-full flex-col items-start gap-10">
          <Card className="w-full rounded-[20px] border-0 bg-white shadow-none">
            <CardContent className="flex w-full flex-col gap-6 px-6 py-6 sm:px-8 sm:py-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-10 lg:py-8">
              <div className="flex flex-col items-start gap-3">
                <h3 className="mt-[-1.00px] text-[28px] font-semibold leading-[normal] tracking-[-1.05px] text-[#0e1120] sm:text-[32px] lg:text-[35px] [font-family:'Poppins',Helvetica]">
                  Questions
                </h3>
                <p className="text-base font-normal leading-[normal] tracking-[0] text-[#424553] sm:text-lg lg:text-xl [font-family:'Poppins',Helvetica]">
                  Find The Question Or Answer You Want To Ask Yourself
                </p>
              </div>
              <Button
                type="button"
                variant="outline"
                className="h-auto rounded-2xl border border-solid border-[#bfbfd6] bg-white px-6 py-4 text-[#0e1120] shadow-[0px_4px_14px_#1c1b4208] hover:bg-white sm:px-8 sm:py-5 lg:pl-[58px] lg:pr-[68px] lg:py-6"
              >
                <span className="inline-flex items-center gap-2">
                  <img
                    className="h-6 w-6"
                    alt="Search alt"
                    src="/search-alt.svg"
                  />
                  <span className="mt-[-1.00px] text-xl font-semibold leading-[normal] tracking-[0.40px] [font-family:'Poppins',Helvetica]">
                    Search
                  </span>
                </span>
              </Button>
            </CardContent>
          </Card>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className={`border-[#d9dce8] ${index === 0 ? "border-t" : ""}`}
              >
                <AccordionTrigger className="py-6 text-left text-xl font-semibold leading-[normal] tracking-[0] text-[#0e1120] hover:no-underline sm:text-2xl lg:py-8 lg:text-3xl [font-family:'Poppins',Helvetica]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base font-normal text-[#424553] [font-family:'Poppins',Helvetica]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <nav aria-label="FAQ pagination" className="flex items-start gap-8">
          {paginationItems.map((item, index) => (
            <button
              key={item}
              type="button"
              className={`mt-[-1.00px] text-3xl font-semibold leading-[normal] tracking-[0.60px] [font-family:'Poppins',Helvetica] ${
                index === 0 ? "text-[#0e1120]" : "text-[#d2d2d8]"
              }`}
              aria-current={index === 0 ? "page" : undefined}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
      <div className="pointer-events-none mt-8 flex w-full justify-end lg:mt-[-24px]">
        <img
          className="h-[263px] w-[232px] max-w-[30vw]"
          alt="Vector"
          src="/vector-3.svg"
        />
      </div>
    </section>
  );
};
