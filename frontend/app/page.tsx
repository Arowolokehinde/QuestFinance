import FeaturesSection from "@/components/landing/FeatureSection";
import HeroPage from "@/components/landing/Hero";
import LeaderboardSection from "@/components/landing/LeaderboardSection";
import LearnByDoingSection from "@/components/landing/LearnByDoingSection";
import ProtocolCards from "@/components/landing/ProtocolCards";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <HeroPage />
      <ProtocolCards />
      <FeaturesSection />
      <LearnByDoingSection />
      <LeaderboardSection />
      <Footer />
    </>
  );
}
