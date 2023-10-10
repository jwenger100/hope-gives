import Image from "next/image";
import styles from "./page.module.css";
import { HeroBullets } from "@/components/HeroBullets";
import { FeaturesTitle } from "@/components/FeaturesTitle";
import { UserCards } from "@/components/UserCards";
import { Container } from "@mantine/core";
import { GetInTouch } from "@/components/GetInTouch";
import { FooterSocial } from "@/components/FooterSocial";

export default function Home() {
  return (
    <Container fluid>
      <HeroBullets />
      <FeaturesTitle />
      <UserCards />
      <GetInTouch />
      <FooterSocial />
    </Container>
  );
}
