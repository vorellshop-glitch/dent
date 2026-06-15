import { Card, CardContent } from "../../../../components/ui/card";

const features = [
  {
    title: "Highly Skilled And Certified",
    alt: "Doctor",
    src: "/doctor.svg",
  },
  {
    title: "Branches In Various Countries",
    alt: "Wold care",
    src: "/wold-care.svg",
  },
  {
    title: "State-Of-The-Art Facilities",
    alt: "Ventilator alt",
    src: "/ventilator-alt.svg",
  },
  {
    title: "Flexible scheduling Options",
    alt: "Observation",
    src: "/observation.svg",
  },
];

export const FrameWrapperSubsection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#f7faff] px-6 py-[72px] sm:px-10 lg:px-[99px] lg:py-[120px]">
      <div className="mx-auto flex w-full max-w-[1242px] flex-col items-center gap-10 lg:gap-[60px]">
        <header className="flex flex-col items-center gap-3 sm:gap-5 text-center">
          <h2 className="mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#0e1120] text-[28px] leading-tight tracking-[0] sm:text-[38px] lg:text-[50px]">
            Why Choose Us
          </h2>
          <p className="[font-family:'Poppins',Helvetica] font-normal text-[#424553] text-sm leading-6 tracking-[0.28px] sm:text-xl sm:leading-8 sm:tracking-[0.4px] lg:text-[26px] lg:leading-10 lg:tracking-[0.52px]">
            Customer Satisfaction Is Number One For Us
          </p>
        </header>
        <div className="grid w-full grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-[62px]">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-0 bg-transparent shadow-none"
            >
              <CardContent className="flex flex-col items-center gap-3 p-0 sm:gap-5 text-center">
                <img
                  className="h-12 w-12 sm:h-16 sm:w-16 lg:h-[84px] lg:w-[84px]"
                  alt={feature.alt}
                  src={feature.src}
                />
                <p className="max-w-[278px] [font-family:'Poppins',Helvetica] font-semibold text-[#0e1120] text-xs leading-4 tracking-[0.24px] sm:text-lg sm:leading-7 sm:tracking-[0.36px] lg:text-[26px] lg:leading-10 lg:tracking-[0.52px]">
                  {feature.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
