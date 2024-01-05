import { FeaturesTitle } from "@/components/FeaturesTitle";
import { Container } from "@mantine/core";
import { HeroImageBackground } from "@/components/HeroImageBackground";
import DonationImpactTracker from "@/components/DonationImpactTracker";
import HopeGivesBanner from "@/components/HopeGivesBanner";
import HowItWorks from "@/components/HowItWorks";
import Nonprofits from "@/components/Nonprofits";
import { ForChurchesBanner } from "@/components/ForChurchesBanner";

export default function Home() {
  return (
    <>
      <HeroImageBackground />
      <Container fluid>
        <DonationImpactTracker />
        <HopeGivesBanner />
        <HowItWorks />
        <ForChurchesBanner />
        <Nonprofits />
        <FeaturesTitle />
      </Container>
    </>
  );
}
