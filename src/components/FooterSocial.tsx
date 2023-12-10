"use client";
import {
  Container,
  Group,
  ActionIcon,
  rem,
  Image,
  Box,
  Title,
  Text,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import classes from "./FooterSocial.module.css";
import Link from "next/link";

export function FooterSocial() {
  return (
    <Box className={classes.footerBorder}>
      <Container className={classes.wrapper}>
        <Box className={classes.footerFlexItem}>
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/HopeGives-full-color.png`}
            alt="footer-logo"
            width={70}
            height={100}
            className={classes.footerLogo}
          />
        </Box>
        <Box className={classes.footerFlexItem}>
          <Title ta="center" order={5} className={classes.title}>
            Quick Links
          </Title>
          <Text ta="center">Search Stories</Text>
          <Text ta="center">Create a Story</Text>
          <Text ta="center">How it Works</Text>
          <Text ta="center">Our Mission</Text>
        </Box>
        <Box className={classes.footerFlexItem}>
          <Title ta="center" order={5} className={classes.title}>
            Resources{" "}
          </Title>
          <Text ta="center">Help</Text>
          <Text ta="center">FAQ</Text>
          <Text ta="center">Pricing</Text>
          <Text ta="center">Contact Us</Text>
        </Box>
        <Box className={classes.footerFlexItem} ta="center">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Box>
      </Container>
    </Box>
  );
}
