import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const blogPosts = [
  {
    title: "Dental Emergencies 101",
    description:
      "Be Prepared For Dental Emergencies With This Comprehensive Guide.....",
  },
  {
    title: "Oral Health For All Ages",
    description: "Dental Care Is Very Important At Every Stage Of Life.....",
  },
  {
    title: "The Science Of Smiles",
    description: "Dive Into The Amazing World Of Dental Anatomy...",
  },
];

export const DivSubsection = (): JSX.Element => {
  return (
    <section className="w-full px-4 py-16 sm:px-6 lg:px-[62px] lg:py-[120px]">
      <div className="mx-auto flex w-full max-w-[1316px] flex-col gap-16 lg:gap-[120px]">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[369px_minmax(0,1fr)] lg:gap-[101px]">
          <header className="flex flex-col items-start gap-1">
            <p className="mt-[-1.00px] self-stretch [font-family:'Poppins',Helvetica] text-2xl font-normal leading-10 tracking-[0] text-[#0e1120]">
              Denticare Dental Surgeon
            </p>
            <h2 className="w-fit [font-family:'Poppins',Helvetica] text-4xl font-semibold leading-none tracking-[-1.80px] text-[#0e1120] sm:text-5xl lg:text-6xl">
              Alpha Care 1
            </h2>
          </header>
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(260px,397px)_minmax(0,1fr)] md:gap-10 lg:gap-[63px]">
            <Card className="border-0 bg-transparent shadow-none">
              <CardContent className="rounded-[20px] bg-[#d0d0d0] p-0 aspect-[397/449] w-full" />
            </Card>
            <div className="flex flex-col items-start gap-8 lg:gap-[39px]">
              <div className="flex flex-col items-start gap-[30px]">
                <div className="flex flex-col items-start gap-2.5">
                  <p className="self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] text-6xl font-semibold leading-none tracking-[-2.70px] text-[#413dd9] sm:text-7xl lg:text-[90px] lg:leading-[89px]">
                    12+
                  </p>
                  <h3 className="w-fit [font-family:'Poppins',Helvetica] text-2xl font-semibold leading-normal tracking-[0] text-[#0e1120] lg:text-3xl">
                    Years Of Experience
                  </h3>
                </div>
                <p className="max-w-[386px] [font-family:'Poppins',Helvetica] text-base font-normal leading-8 tracking-[0] text-[#424553] sm:text-lg lg:text-xl lg:leading-9">
                  Ac 1 Is Dedicated To Giving Her Patients The Most Beautiful
                  Smiles Together With The Best Dental Protection Available
                  Today.
                </p>
              </div>
              <Button
                variant="outline"
                className="h-auto rounded-2xl border border-solid border-[#413dd9] px-8 py-4 [font-family:'Poppins',Helvetica] text-base font-semibold tracking-[0.32px] text-[#413dd9] hover:bg-[#413dd9] hover:text-white lg:px-12 lg:py-5"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-10 lg:gap-[62px]">
          <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <div className="flex max-w-[702px] flex-1 flex-col items-start gap-6">
              <h3 className="self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] text-3xl font-semibold leading-tight tracking-[-1.80px] text-[#0e1120] sm:text-4xl lg:text-6xl lg:leading-[70px]">
                Carrying The Dental Health Of You And Your Family
              </h3>
              <p className="self-stretch [font-family:'Poppins',Helvetica] text-base font-normal leading-normal tracking-[0] text-[#424553] sm:text-lg lg:text-xl">
                These Are Some Blogs That You Might Read To Gain Knowledge
              </p>
            </div>
            <Button className="h-auto self-start rounded-2xl bg-[#413dd9] px-8 py-4 [font-family:'Poppins',Helvetica] text-base font-semibold tracking-[0.40px] text-white hover:bg-[#3632c0] lg:self-auto lg:px-[61px] lg:py-5 lg:text-xl">
              View All
            </Button>
          </div>
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-[33px]">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="flex flex-col items-start gap-6"
              >
                <Card className="w-full border-0 bg-transparent shadow-none">
                  <CardContent className="rounded-[20px] bg-[#d0d0d0] p-0 aspect-[417/290] w-full" />
                </Card>
                <div className="flex w-full flex-col items-start gap-3">
                  <h4 className="self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] text-2xl font-semibold leading-normal tracking-[-0.90px] text-[#0e1120] lg:text-3xl">
                    {post.title}
                  </h4>
                  <p className="self-stretch [font-family:'Poppins',Helvetica] text-base font-normal leading-normal tracking-[0] text-[#424553] lg:text-xl">
                    {post.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
