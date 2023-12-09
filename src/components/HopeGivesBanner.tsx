"use client";
import React from "react";
import { Box, Image, Text } from "@mantine/core";
import classes from "./HopeGivesBanner.module.css";
import Typewriter from "typewriter-effect";

const HopeGivesBanner = () => {
  return (
    <Box mt="xl" className={classes.bannerBackground}>
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/HopeGives-Icon3.png`}
        alt="footer-logo"
        height={"250px"}
        width={"50px"}
        className={classes.hopeGivesIcon}
      />{" "}
      <Box className={classes.hopeGivesTextContainer}>
        <Text className={classes.hopeGivesText}>
          Hope<span>Gives</span>&nbsp;
        </Text>
      </Box>
      <Typewriter
        options={{
          strings: [
            "Gas",
            "Food",
            "Travel",
            "Emergency Relief",
            "Prayers",
            "Accountability",
            "Authenticity",
          ],
          autoStart: true,
          loop: true,
          wrapperClassName: classes.typewriterWrapper,
          cursorClassName: classes.typewriterCursor,
        }}
      />
    </Box>
  );
};

export default HopeGivesBanner;
