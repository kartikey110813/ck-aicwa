import AicwaVideo from "@/components/Home/AicwaVideo";
import { FightForWorkers } from "@/components/Home/FightForWorkers/FightForWorkers";
import { GalleryNew } from "@/components/Home/Gallery/GalleryNew";
import Hero from "@/components/Home/Hero";
import MembershipBenefits from "@/components/Home/MembershipBenefits/MembershipBenefits";
import MembershipBenefitsMobile from "@/components/Home/MembershipBenefits/MembershipBenefitsMobile";
import Navbar from "@/components/Navbar/Navbar";
import StateRepresentation from "@/components/Home/StateRepresentation";
import NewsArticles from "@/components/Home/NewsArticles";
import FollowOurJourney from "@/components/Home/FollowOurJourney";
import Testimonials from "@/components/Home/Testimonials";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main id="top">
      <Navbar />
      <Hero />
      <AicwaVideo />
      {/* <RenewMember /> */}
      <MembershipBenefits />
      <MembershipBenefitsMobile />
      <GalleryNew />

      <FightForWorkers />
      <StateRepresentation />
      <NewsArticles />
      <Testimonials />
      <FollowOurJourney />
      <Footer />
    </main>
  );
}
