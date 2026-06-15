import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const serviceItems = [
  {
    title: "Preventive Dental Care",
    description:
      "We Emphasize The Importance Of Preventive Dental Care To Maintain Optimal Oral Health. Our Experienced Team Of Dentists And Hygienists Are Dedicated To Helping You Prevent Dental Problems Before They Happen.",
    iconSrc: "/vuesax-bulk-award.svg",
    iconAlt: "Vuesax bulk award",
    imageAlt: "Preventive dental care",
    reverse: false,
    titleClassName:
      "[font-family:'Poppins',Helvetica] font-semibold text-[#0e1120] text-6xl tracking-[-1.80px] leading-[70px]",
    learnMoreClassName:
      "[font-family:'Poppins',Helvetica] font-semibold text-[#0e1120] text-xl tracking-[0] leading-[normal]",
  },
  {
    title: "Ransformative Cosmetic Dentistry",
    description:
      "We Can Help You Achieve The Smile You've Always Dreamed Of. From Teeth Whitening And Veneers To Orthodontics And Smile Makeovers, We Offer A Variety Of Transformative Treatments.",
    iconSrc: "/vuesax-bulk-lovely.svg",
    iconAlt: "Vuesax bulk lovely",
    imageAlt: "Ransformative cosmetic dentistry",
    reverse: true,
    titleClassName:
      "[font-family:'Poppins',Helvetica] font-semibold text-[#0e1120] text-6xl tracking-[-1.80px] leading-[70px]",
    learnMoreClassName:
      "[font-family:'Poppins',Helvetica] font-semibold text-[#0e1120] text-[22px] tracking-[0.44px] leading-[normal]",
  },
];

export const DivWrapperSubsection = (): JSX.Element => {
  return (
    <section className="relative w-full px-4 py-[72px] sm:px-6 lg:px-[62px] lg:py-[120px]">
      <div className="mx-auto flex w-full max-w-[1316px] flex-col items-center gap-[72px] lg:gap-[100px]">
        {serviceItems.map((item, index) => (
          <article
            key={`${item.title}-${index}`}
            className={`grid w-full grid-cols-1 items-center gap-8 lg:gap-[86px] ${
              item.reverse
                ? "lg:grid-cols-[1fr_520px]"
                : "lg:grid-cols-[520px_1fr]"
            }`}
          >
            {!item.reverse && (
              <Card className="h-[320px] w-full rounded-[20px] border-0 bg-[#d0d0d0] shadow-none sm:h-[420px] lg:h-[620px]">
                <CardContent className="h-full p-0" />
              </Card>
            )}

            <div
              className={`flex w-full flex-col items-start ${
                item.reverse ? "gap-[30px]" : "gap-8"
              }`}
            >
              <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#e0e0ff]">
                <img
                  className="h-[42px] w-[42px]"
                  alt={item.iconAlt}
                  src={item.iconSrc}
                />
              </div>
              <div className="flex w-full max-w-[610px] flex-col items-start gap-[30px]">
                <h2 className={item.titleClassName}>{item.title}</h2>
                <div className="flex flex-col items-start gap-[30px]">
                  <p className="max-w-[610px] [font-family:'Poppins',Helvetica] text-xl font-normal leading-10 tracking-[0] text-[#424553]">
                    {item.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="h-auto p-0 hover:bg-transparent"
                  >
                    <span className="inline-flex items-center gap-2">
                      <span className={item.learnMoreClassName}>
                        Learn More
                      </span>
                      <img
                        className="h-6 w-6"
                        alt="Arrow sm right"
                        src="/arrow-sm-right-1.svg"
                      />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
            {item.reverse && (
              <Card className="h-[320px] w-full rounded-[20px] border-0 bg-[#d0d0d0] shadow-none sm:h-[420px] lg:h-[620px]">
                <CardContent className="h-full p-0" />
              </Card>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};
