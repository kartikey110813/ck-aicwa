import FightForWorkers from "@/components/FightForWorkers/FightForWorkers";
import GallerySection from "@/components/Gallery/GalarySection";
import Hero from "@/components/Home/Hero";
import MembershipBenefits from "@/components/MembershipBenefits/MembershipBenefits";
import Navbar from "@/components/Navbar/Navbar";
import RenewMember from "@/components/RenewMember";
import StateRepresentation from "@/components/StateRepresentation";

export default function HomePage() {
  return (
    <main id="top">
      <Navbar />
      <Hero />
      <RenewMember />
      <MembershipBenefits />
      <FightForWorkers />
      <GallerySection />
      <StateRepresentation />
    </main>
  );
}
