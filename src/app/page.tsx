import Image from "next/image";
import styles from "./page.module.css";
import { HeroBullets } from "@/components/HeroBullets";
import { FeaturesTitle } from "@/components/FeaturesTitle";
import { UserCards } from "@/components/UserCards";
import { Container } from "@mantine/core";

export default function Home() {
  return (
    <Container fluid>
      <HeroBullets />
      <FeaturesTitle />
      <UserCards />
    </Container>
  );
}
