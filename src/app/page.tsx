import Image from "next/image";
import styles from "./page.module.css";
import { HeroBullets } from "@/components/HeroBullets";
import { FeaturesTitle } from "@/components/FeaturesTitle";
import { UserCards } from "@/components/UserCards";
import { Container } from "@mantine/core";
import { GetInTouch } from "@/components/GetInTouch";
import { FooterSocial } from "@/components/FooterSocial";
import { HeroImageBackground } from "@/components/HeroImageBackground";
import DonationImpactTracker from "@/components/DonationImpactTracker";
import HopeGivesBanner from "@/components/HopeGivesBanner";

export default function Home() {
  return (
    <>
      <HeroImageBackground />
      <Container fluid>
        <DonationImpactTracker />
        <HopeGivesBanner />
        {/* <HeroBullets /> */}
        <FeaturesTitle />
      </Container>
    </>
  );
}
