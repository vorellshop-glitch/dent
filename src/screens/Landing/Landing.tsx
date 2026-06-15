import { HeroSection } from "./sections/HeroSection";
import { ServicesSection } from "./sections/ServicesSection";
import { GallerySection } from "./sections/GallerySection";
import { FAQSection } from "./sections/FAQSection";
import { FooterSection } from "./sections/FooterSection";

export const Landing = (): JSX.Element => {
  return (
    <main className="w-full bg-stone-950">
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <FAQSection />
      <FooterSection />
    </main>
  );
};
