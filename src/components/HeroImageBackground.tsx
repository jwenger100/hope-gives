"use client";
import React, { useEffect, useState } from "react";
import { Title, Text, Button, Overlay, Box } from "@mantine/core";
import Link from "next/link";
import classes from "./HeroImageBackground.module.css";

export function HeroImageBackground() {
  // List of image URLs
  const images = [
    `${process.env.NEXT_PUBLIC_BASE_PATH}/donations4.png`,
    `${process.env.NEXT_PUBLIC_BASE_PATH}/donations5.png`,
    `${process.env.NEXT_PUBLIC_BASE_PATH}/donations6.png`,
  ];

  const [backgroundImageUrl, setBackgroundImageUrl] = useState("");

  // Function to select a random image URL from the list
  useEffect(() => {
    const lastImage = localStorage.getItem("lastImage");
    let newImage;

    do {
      const randomIndex = Math.floor(Math.random() * images.length);
      newImage = images[randomIndex];
    } while (newImage === lastImage);

    setBackgroundImageUrl(newImage);
    localStorage.setItem("lastImage", newImage);
  }, []); // Empty dependency array to run only once on mount

  return (
    <Box
      className={classes.wrapper}
      style={{
        "--background-image-url": `url("${backgroundImageUrl}")`,
      }}
      mt="60px"
    >
      <Overlay color="#594f3e" opacity={0.3} zIndex={1} />

      <Box className={classes.inner}>
        <Title className={classes.title} ta={"center"}>
          Bring Audacious Hope To The World
          <Text fw={600} ta={"center"} mt={"xs"}>
            Through Social Fundraising{""}
          </Text>
        </Title>

        <Box className={classes.controls} ta={"center"}>
          <Link href={"/waitlist"}>
            <Button
              radius="xl"
              size="md"
              className={`hopegives-button ${classes.fundraiserButton}`}
            >
              Start a Hope Campaign
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
