import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const featureCards = [
  {
    id: "care",
    title: "Professional Care For Your Teeth",
    description: "Take Care Of Your Precious Teeth Before They All Go Bad",
    image: {
      src: "/vector-4.svg",
      alt: "Vector",
      className:
        "absolute w-[53.72%] h-[45.74%] top-[48.77%] left-[36.57%] object-contain",
    },
    bgClass: "bg-[#e9f8ff]",
    contentClass: "min-h-[446px]",
    titleClass:
      "max-w-[303px] [font-family:'Poppins',Helvetica] text-[34px] font-semibold leading-[42px] tracking-[-1.02px] text-[#0e1120]",
    descriptionClass:
      "max-w-[295px] [font-family:'Poppins',Helvetica] text-xl font-normal leading-[30px] tracking-[0] text-[#424553]",
    action: "Book Appointment",
  },
  {
    id: "years",
    title: "25+ Years",
    image: {
      src: "/vector-2.svg",
      alt: "Vector",
      className:
        "absolute w-[29.50%] h-[67.46%] top-[15.68%] left-[46.64%] object-contain",
    },
    bgClass: "bg-[#fff0e9]",
    contentClass: "min-h-[169px]",
    titleClass:
      "[font-family:'Poppins',Helvetica] text-3xl font-semibold leading-[normal] tracking-[-0.90px] text-[#0e1120]",
    arrow: true,
  },
  {
    id: "satisfaction",
    title: "Patient Satisfaction",
    image: {
      src: "/vector-1.svg",
      alt: "Vector",
      className:
        "absolute w-[40.05%] h-[63.27%] top-[18.57%] left-[49.04%] object-contain",
    },
    bgClass: "bg-[#e9ebff]",
    contentClass: "min-h-[245px] justify-between",
    titleClass:
      "max-w-[186px] [font-family:'Poppins',Helvetica] text-3xl font-semibold leading-[normal] tracking-[-0.90px] text-[#0e1120]",
    arrow: true,
    titleBottom: true,
  },
  {
    id: "experience",
    title: "Sweet Dental Experience",
    description: "Find Some Patient Comments Here",
    image: {
      src: "/vector.svg",
      alt: "Vector",
      className:
        "absolute w-[49.16%] h-[37.22%] top-[56.39%] left-[39.45%] object-contain",
    },
    bgClass: "bg-[#ffe9fd]",
    contentClass: "min-h-[446px]",
    titleClass:
      "max-w-[211px] [font-family:'Poppins',Helvetica] text-3xl font-semibold leading-[normal] tracking-[-0.90px] text-[#0e1120]",
    descriptionClass:
      "max-w-[303px] [font-family:'Poppins',Helvetica] text-xl font-normal leading-[normal] tracking-[0] text-[#424553]",
  },
];

export const Frame1Subsection = (): JSX.Element => {
  return (
    <section className="w-full px-4 py-[120px] sm:px-6 lg:px-[62px]">
      <div className="mx-auto max-w-[1316px]">
        <p className="sr-only">
          A promotional feature section with four dental service highlight
          cards.
        </p>
        <div className="grid grid-cols-1 gap-[31px] lg:grid-cols-[417px_417px_417px] lg:grid-rows-[169px_245px]">
          <Card className="overflow-hidden rounded-[20px] border-0 shadow-none lg:row-span-2">
            <CardContent
              className={`relative flex flex-col ${featureCards[0].contentClass} ${featureCards[0].bgClass} p-[30px]`}
            >
              <div className="relative z-10 flex h-full max-w-[303px] flex-col">
                <h2 className={featureCards[0].titleClass}>
                  {featureCards[0].title}
                </h2>
                <p className={`mt-[18px] ${featureCards[0].descriptionClass}`}>
                  {featureCards[0].description}
                </p>
                <Button
                  type="button"
                  className="mt-auto w-fit rounded-2xl bg-[#413dd9] px-[25px] py-5 h-auto [font-family:'Poppins',Helvetica] text-xl font-semibold text-white hover:bg-[#413dd9]/90"
                >
                  {featureCards[0].action}
                </Button>
              </div>
              <img
                className={featureCards[0].image.className}
                alt={featureCards[0].image.alt}
                src={featureCards[0].image.src}
              />
            </CardContent>
          </Card>
          <Card className="overflow-hidden rounded-[20px] border-0 shadow-none">
            <CardContent
              className={`relative flex ${featureCards[1].contentClass} ${featureCards[1].bgClass} p-[30px]`}
            >
              <h2 className={featureCards[1].titleClass}>
                {featureCards[1].title}
              </h2>
              <img
                className="absolute right-[24px] bottom-[24px] h-8 w-8 object-contain"
                alt="Arrow sm right"
                src="/arrow-sm-right.svg"
              />
              <img
                className={featureCards[1].image.className}
                alt={featureCards[1].image.alt}
                src={featureCards[1].image.src}
              />
            </CardContent>
          </Card>
          <Card className="overflow-hidden rounded-[20px] border-0 shadow-none lg:row-span-2">
            <CardContent
              className={`relative flex flex-col ${featureCards[3].contentClass} ${featureCards[3].bgClass} p-[30px]`}
            >
              <div className="relative z-10 flex max-w-[303px] flex-col">
                <h2 className={featureCards[3].titleClass}>
                  {featureCards[3].title}
                </h2>
                <p className={`mt-[24px] ${featureCards[3].descriptionClass}`}>
                  {featureCards[3].description}
                </p>
              </div>
              <img
                className={featureCards[3].image.className}
                alt={featureCards[3].image.alt}
                src={featureCards[3].image.src}
              />
            </CardContent>
          </Card>
          <Card className="overflow-hidden rounded-[20px] border-0 shadow-none">
            <CardContent
              className={`relative flex flex-col ${featureCards[2].contentClass} ${featureCards[2].bgClass} p-[30px]`}
            >
              <img
                className="absolute right-[24px] top-6 h-8 w-8 object-contain"
                alt="Arrow sm right"
                src="/arrow-sm-right.svg"
              />
              <img
                className={featureCards[2].image.className}
                alt={featureCards[2].image.alt}
                src={featureCards[2].image.src}
              />
              <h2
                className={`relative z-10 mt-auto ${featureCards[2].titleClass}`}
              >
                {featureCards[2].title}
              </h2>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
