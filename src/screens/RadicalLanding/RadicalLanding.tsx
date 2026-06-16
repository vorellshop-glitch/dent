import { useState } from "react";
import { HeroRadical } from "./sections/HeroRadical";
import { ServicesRadical } from "./sections/ServicesRadical";
import { GalleryRadical } from "./sections/GalleryRadical";
import { GatedBookingModal } from "./components/GatedBookingModal";

export const RadicalLanding = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="w-full bg-[#000000] overflow-x-hidden selection:bg-amber-200/20 selection:text-amber-200 min-h-screen">
      <HeroRadical onRequestAssessment={() => setIsModalOpen(true)} />
      <ServicesRadical />
      <GalleryRadical />
      
      {/* Gated Luxury Booking Engine Modal */}
      <GatedBookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
};
export default RadicalLanding;
