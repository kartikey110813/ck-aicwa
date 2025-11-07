import AicwaVideo from "@/components/AicwaVideo";
import { FightForWorkers } from "@/components/FightForWorkers/FightForWorkers";
import GallerySection from "@/components/Gallery/GalarySection";
import { GalleryNew } from "@/components/Gallery/GalleryNew";
import Hero from "@/components/Home/Hero";
import MembershipBenefits from "@/components/MembershipBenefits/MembershipBenefits";
import MembershipBenefitsMobile from "@/components/MembershipBenefits/MembershipBenefitsMobile";
import Navbar from "@/components/Navbar/Navbar";
import RenewMember from "@/components/RenewMember";
import StateRepresentation from "@/components/StateRepresentation";

export default function HomePage() {
  return (
    <main id="top">
      <Navbar />
      <Hero />
      {/* <RenewMember /> */}
      <MembershipBenefits />
      <MembershipBenefitsMobile/>
      <GalleryNew />
      <AicwaVideo />
      <FightForWorkers />
      <StateRepresentation />
    </main>
  );
}
