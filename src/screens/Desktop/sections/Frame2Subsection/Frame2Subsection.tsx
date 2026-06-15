import { Separator } from "../../../../components/ui/separator";

const contactDetails = [
  "Www.dentalme.com",
  "Nip : 543752367682",
  "Telp : 0894587376488",
];

const aboutLinks = [
  "Our Dental Team",
  "Pricing & Pricelist",
  "Solutions",
  "Dental Services",
  "Clients",
];

const awards = [
  "Best Patient Care 2017",
  "Best Practice & Team 2016",
  "Best Patient Care 2014",
];

const workingHours = [
  { day: "Monday", time: "8am - 9pm" },
  { day: "Tuesday", time: "8am - 9pm" },
  { day: "Wednesday", time: "8am - 6:30pm" },
  { day: "Thursday", time: "8am - 9pm" },
  { day: "Friday", time: "8am - 9pm" },
  { day: "Saturday - Sunday", time: "Clossed" },
];

const footerLinks = ["Privacy & Policy", "Made With Love"];

export const Frame2Subsection = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#0b0a15] px-6 py-16 sm:px-10 lg:px-[175px] lg:py-20">
      <div className="mx-auto flex w-full max-w-[1091px] flex-col gap-[42px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 xl:grid-cols-[minmax(220px,1.2fr)_minmax(150px,0.9fr)_minmax(220px,1fr)_minmax(290px,1.2fr)] xl:gap-[70px]">
          <section className="flex flex-col items-start gap-[30px]">
            <h2 className="mt-[-1.00px] [font-family:'Poppins',Helvetica] text-[34px] font-semibold leading-7 tracking-[-1.02px] text-white">
              Dentalme.
            </h2>
            <address className="not-italic">
              <ul className="flex flex-col items-start gap-6">
                {contactDetails.map((detail) => (
                  <li
                    key={detail}
                    className="[font-family:'Poppins',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-white"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </address>
          </section>
          <nav
            aria-label="About"
            className="flex flex-col items-start gap-[30px]"
          >
            <h3 className="mt-[-1.00px] [font-family:'Poppins',Helvetica] text-xl font-semibold leading-[normal] tracking-[-0.80px] text-white">
              About
            </h3>
            <ul className="flex flex-col items-start gap-[17px]">
              {aboutLinks.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    className="h-auto p-0 text-left [font-family:'Poppins',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-[#a3a2aa] transition-colors hover:text-white"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <section className="flex flex-col items-start gap-[30px]">
            <h3 className="mt-[-1.00px] [font-family:'Poppins',Helvetica] text-xl font-semibold leading-[normal] tracking-[-0.80px] text-white">
              Our Awards
            </h3>
            <ul className="flex flex-col items-start gap-[17px]">
              {awards.map((item) => (
                <li
                  key={item}
                  className="[font-family:'Poppins',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-[#a3a2aa]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section className="flex flex-col items-start gap-[30px]">
            <h3 className="mt-[-1.00px] [font-family:'Poppins',Helvetica] text-xl font-semibold leading-[normal] tracking-[-0.80px] text-white">
              Working Hours
            </h3>
            <div className="grid grid-cols-[auto_auto] gap-x-9 gap-y-[17px]">
              {workingHours.map((item) => (
                <div key={item.day} className="contents">
                  <div className="[font-family:'Poppins',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-[#a3a2aa]">
                    {item.day}
                  </div>
                  <div className="[font-family:'Poppins',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-[#a3a2aa]">
                    {item.time}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="flex flex-col items-end gap-5">
          <Separator className="h-px w-full bg-white/20" />
          <nav
            aria-label="Footer secondary"
            className="flex w-full flex-col items-start justify-between gap-4 sm:w-[310px] sm:flex-row sm:items-center sm:gap-[54px]"
          >
            {footerLinks.map((item, index) => (
              <button
                key={item}
                type="button"
                className={`h-auto p-0 text-left [font-family:'Poppins',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-[#a2a2aa] transition-colors hover:text-white ${
                  index === 0 ? "flex-1" : "w-fit"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
