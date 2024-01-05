"use client";
import { useState } from "react";
import {
  Container,
  Group,
  Burger,
  Box,
  Image,
  Drawer,
  ActionIcon,
  rem,
  Divider,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import { useMediaQuery } from "@mantine/hooks";
import { useHeadroom } from "@mantine/hooks";
import Link from "next/link";

import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandTwitter,
  IconBrandInstagram,
} from "@tabler/icons-react";

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(-1);
  const isMobile = useMediaQuery("(max-width: 750px)");
  const pinned = useHeadroom({ fixedAt: 120 });

  const mainLinks = [
    { link: "/#whyTrustUs", label: "Why Trust Us" },
    { link: "/#howItWorks", label: "How It Works" },
    { link: "/#churches", label: "Churches" },
    { link: "/#nonprofits", label: "Nonprofits" },
    { link: "/#ourValues", label: "Our Values" },
    { link: "about", label: "About" },
  ];

  const mainItems = mainLinks.map((item, index) => (
    <Link
      href={item.link}
      key={item.label}
      className={classes.mainLink}
      data-active={index === active && active !== -1 ? true : undefined}
      onClick={() => {
        if (item.link) {
          setActive(index);
          toggle(); // Close the drawer when a link is clicked
        }
      }}
    >
      {item.label}
    </Link>
  ));

  return (
    <>
      <header className={`${classes.header} ${classes.headerBlurIn}`}>
        <Container className={classes.inner}>
          <Link href="/" onClick={() => setActive(-1)}>
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/HopeGives-SideBySide.png`}
              alt="Hope Gives"
              height={isMobile ? 40 : 50}
              width={isMobile ? 40 : 50}
              className={classes.headerLogo}
            />
          </Link>
          <Box className={classes.links} visibleFrom="md">
            <Group gap={0} justify="flex-end" className={classes.mainLinks}>
              {mainItems}
            </Group>
          </Box>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
            hiddenFrom="md"
          />
        </Container>
      </header>
      <Drawer
        opened={opened}
        onClose={toggle}
        position="top"
        padding="md"
        size="100%"
        title="hopegives"
        onClick={toggle}
        zIndex={1000000}
      >
        <Box>
          <Group gap={0} className={classes.drawerContent}>
            {mainItems}
          </Group>
          {opened && (
            <>
              {/* <Divider /> */}
              <Box ta="center" mt={"md"} pb={"sm"}>
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
            </>
          )}
        </Box>
      </Drawer>
    </>
  );
}
