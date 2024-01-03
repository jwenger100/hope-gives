import React from "react";
import {
  Title,
  Text,
  Container,
  Button,
  Overlay,
  Box,
  Avatar,
} from "@mantine/core";
import classes from "./ForChurchesBanner.module.css";
import { IconBuildingChurch } from "@tabler/icons-react";

const ForChurchesBanner = () => {
  return (
    <>
      <Box className={classes.backgroundImageWrapper} mt="60px" id="churches">
        <Box
          className={classes.backgroundImage}
          style={{
            "--background-image-url": `url(${process.env.NEXT_PUBLIC_BASE_PATH}/church-Interior.jpg)`,
          }}
        ></Box>
        {/* <Overlay color="#594f3e" opacity={1} zIndex={1} /> */}
        <Box className={classes.inner}>
          <Title className={classes.title}>For Churches</Title>
          <Text className={classes.text}>A new way to give</Text>
        </Box>
      </Box>
      {/* <Box className={classes.contentWrapper}>
        <Avatar
          size="400px"
          radius="200px"
          alt="church"
          bg="white"
          ml="auto"
          mr="auto"
          className={classes.avatar}
        >
          <IconBuildingChurch size={350} strokeWidth={1} color={"#000000"} />
        </Avatar>
      </Box> */}
    </>
  );
};

export default ForChurchesBanner;
