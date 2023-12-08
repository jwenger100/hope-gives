import React from "react";
import { Box, Image } from "@mantine/core";
import classes from "./HopeGivesBanner.module.css";

const HopeGivesBanner = () => {
  return (
    <Box
      mt="xl"
      className={classes.bannerBackground}
      style={{
        "--background-image-url": `url("${process.env.NEXT_PUBLIC_BASE_PATH}/HopeGives-Icon3.jpg")`,
      }}
    >
      HopeGivesBanner
    </Box>
  );
};

export default HopeGivesBanner;
