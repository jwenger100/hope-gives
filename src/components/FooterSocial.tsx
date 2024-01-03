"use client";
import {
  Container,
  ActionIcon,
  rem,
  Image,
  Box,
  Title,
  Text,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandTwitter,
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
            className={classes.footerLogo}
          />
        </Box>
        <Box className={classes.footerFlexItem} ta="center" pb={"sm"}>
          {/* Twitter/X */}
          <ActionIcon
            size="lg"
            color="var(--hopegives-orange)"
            variant="subtle"
            // change this to the actual link
            component="a"
            href="https://twitter.com/hopegives"
            aria-label="Open in a new tab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandTwitter
              style={{ width: rem(24), height: rem(24) }}
              stroke={1.5}
            ></IconBrandTwitter>
          </ActionIcon>
          {/* Facebook */}
          <ActionIcon
            size="lg"
            color="var(--hopegives-orange)"
            variant="subtle"
            // change this to the actual link
            component="a"
            href="https://www.facebook.com/profile.php?id=61554668333804"
            aria-label="Open in a new tab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandFacebook
              style={{ width: rem(24), height: rem(24) }}
              stroke={1.5}
            ></IconBrandFacebook>
          </ActionIcon>
          {/* Instagram */}
          <ActionIcon
            size="lg"
            color="var(--hopegives-orange)"
            variant="subtle"
            // change this to the actual link
            component="a"
            href="https://www.instagram.com/hopegives_/?utm_source=qr"
            aria-label="Open in a new tab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandInstagram
              style={{ width: rem(24), height: rem(24) }}
              stroke={1.5}
            ></IconBrandInstagram>
          </ActionIcon>
          {/* LinkedIn */}
          <ActionIcon
            size="lg"
            color="var(--hopegives-orange)"
            variant="subtle"
            // change this to the actual link
            component="a"
            href="https://www.linkedin.com/company/hopegivesinc/"
            aria-label="Open in a new tab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandLinkedin
              style={{ width: rem(24), height: rem(24) }}
              stroke={1.5}
            ></IconBrandLinkedin>
          </ActionIcon>
          {/* Tiktok */}
          <ActionIcon
            size="lg"
            color="var(--hopegives-orange)"
            variant="subtle"
            // change this to the actual link
            component="a"
            href="https://www.tiktok.com/@hopegives"
            aria-label="Open in a new tab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandTiktok
              style={{ width: rem(24), height: rem(24) }}
              stroke={1.5}
            ></IconBrandTiktok>
          </ActionIcon>
        </Box>
      </Container>
    </Box>
  );
}
