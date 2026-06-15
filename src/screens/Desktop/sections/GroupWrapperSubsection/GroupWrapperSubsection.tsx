import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const serviceCards = [
  {
    eyebrow: "We Provide Weekly Services",
    title: "Dental Implant",
    description:
      "We Provide Stable And Natural-looking Replacements For Missing Teeth. Dental Implants Are Considered To Be One Of The Most Reliable And Long-lasting Dental Restoration Options.",
    titleWidth: "max-w-[323px]",
    descriptionWidth: "max-w-[460px]",
    imageSize: "h-[443px] w-[443px]",
    imageAlignment: "justify-end",
    imageOffset: "mr-[-61px] mt-[-8px]",
  },
  {
    eyebrow: "We Provide Weekly Services",
    title: "Dental Services",
    description:
      "Professional Oral Care Services Provided By Dentists And Dental Professionals To Ensure The Health, Function And Aesthetics Of The Patient's Teeth, Gums And Mouth.",
    titleWidth: "max-w-[299px]",
    descriptionWidth: "max-w-[471px]",
    imageSize: "h-[322px] w-[322px]",
    imageAlignment: "justify-end",
    imageOffset: "mr-[15px] mt-[27px]",
  },
  {
    eyebrow: "We Provide Weekly Services",
    title: "Theet Whitening",
    description:
      "Teeth Whitening Is A Cosmetic Procedure That Aims To Lighten The Natural Color Of Teeth And Remove Stains Or Discoloration.",
    titleWidth: "max-w-[378px]",
    descriptionWidth: "max-w-[470px]",
    imageSize: "h-[443px] w-[443px]",
    imageAlignment: "justify-end",
    imageOffset: "mr-[-50px] mt-[-48px]",
  },
  {
    eyebrow: "We Provide Weekly Services",
    title: "Dental Surgery",
    description:
      "Dental Surgery Refers To A Specialized Branch Of Dentistry That Involves Surgical Procedures Performed On The Teeth..",
    titleWidth: "max-w-[289px]",
    descriptionWidth: "max-w-[449px]",
    imageSize: "h-[375px] w-[375px]",
    imageAlignment: "justify-end",
    imageOffset: "mr-[-13px] mt-[-2px]",
  },
];

const ServiceCard = ({
  eyebrow,
  title,
  description,
  titleWidth,
  descriptionWidth,
  imageSize,
  imageAlignment,
  imageOffset,
}: (typeof serviceCards)[number]) => {
  return (
    <Card className="relative h-full overflow-hidden rounded-[20px] border-0 bg-[#eff3ff] shadow-none">
      <CardContent className="relative flex h-full min-h-[650px] flex-col p-10">
        <div className="pointer-events-none absolute right-[-58px] top-[404px] h-60 w-60 rounded-full bg-[#6ea5f6b2] blur-[100px]" />
        <p className="[font-family:'Poppins',Helvetica] text-xl font-normal tracking-[0.40px] text-[#0e1120]">
          {eyebrow}
        </p>
        <h3
          className={`mt-6 ${titleWidth} [font-family:'Poppins',Helvetica] text-[58px] font-semibold leading-[64px] tracking-[-1.74px] text-[#0e1120]`}
        >
          {title}
        </h3>
        <p
          className={`mt-[42px] ${descriptionWidth} [font-family:'Poppins',Helvetica] text-xl font-normal leading-9 tracking-[0.40px] text-[#424553]`}
        >
          {description}
        </p>
        <button
          type="button"
          className="mt-auto inline-flex w-fit items-center gap-3.5 [font-family:'Poppins',Helvetica] text-xl font-semibold tracking-[0] text-[#0e1120]"
        >
          <span>Learn More</span>
          <img
            className="h-6 w-6"
            alt="Arrow sm right"
            src="/arrow-sm-right-1.svg"
          />
        </button>
        <div
          className={`pointer-events-none absolute bottom-0 left-0 right-0 flex ${imageAlignment}`}
        >
          <div
            className={`${imageSize} ${imageOffset} rounded-xl bg-[#d0d0d0] shadow-[10px_20px_70px_#d4d7de]`}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export const GroupWrapperSubsection = (): JSX.Element => {
  return (
    <section className="w-full px-4 py-[72px] sm:px-6 lg:px-[62px] lg:py-[120px]">
      <div className="mx-auto w-full max-w-[1318px]">
        <p className="sr-only">
          The image shows a dental care services section with a bold heading, a
          two-column staggered card grid, and a large call-to-action button at
          the bottom right.
        </p>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-8">
          <header className="max-w-[500px] lg:pt-0">
            <h2 className="[font-family:'Poppins',Helvetica] text-[48px] font-semibold leading-[48px] tracking-[-1.44px] text-[#0e1120] sm:text-[64px] sm:leading-[58px] lg:text-[80px] lg:leading-[70px] lg:tracking-[-2.40px]">
              Dental Care Services
            </h2>
          </header>
          <div className="lg:pt-[100px]">
            <ServiceCard {...serviceCards[1]} />
          </div>
          <div className="lg:-mt-[14px]">
            <ServiceCard {...serviceCards[0]} />
          </div>
          <div className="lg:pt-0">
            <ServiceCard {...serviceCards[3]} />
          </div>
          <div className="lg:-mt-[18px]">
            <ServiceCard {...serviceCards[2]} />
          </div>
          <div className="lg:col-start-2 lg:row-start-4">
            <Button className="h-auto w-full rounded-3xl bg-[#413dd9] px-8 py-[30px] [font-family:'Poppins',Helvetica] text-center text-[20px] font-semibold tracking-[0.4px] text-white hover:bg-[#413dd9]/90 sm:text-[26px] sm:tracking-[0.52px]">
              View All Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
