import { HeroRadical } from "./sections/HeroRadical";
import { ServicesRadical } from "./sections/ServicesRadical";
import { GalleryRadical } from "./sections/GalleryRadical";
import { TestimonialRadical } from "./sections/TestimonialRadical";
import { ExperienceRadical } from "./sections/ExperienceRadical";
import { FAQRadical } from "./sections/FAQRadical";
import { FooterRadical } from "./sections/FooterRadical";

export const RadicalLanding = (): JSX.Element => {
  return (
    <main className="w-full bg-[#080807] overflow-x-hidden selection:bg-amber-200/30 selection:text-amber-200">
      <HeroRadical />
      <ServicesRadical />
      <GalleryRadical />
      <TestimonialRadical />
      <ExperienceRadical />
      <FAQRadical />
      <FooterRadical />
    </main>
  );
};
