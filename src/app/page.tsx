import Image from "next/image";
import styles from "./page.module.css";
import { HeroBullets } from "@/components/HeroBullets";
import { FeaturesTitle } from "@/components/FeaturesTitle";

export default function Home() {
  return (
    <>
      <HeroBullets />
      <FeaturesTitle />
    </>
  );
}
