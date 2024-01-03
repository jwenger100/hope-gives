"use client";
import { useState } from "react";
import { Container, Group, Burger, Box, Image, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import { useMediaQuery } from "@mantine/hooks";
import { useHeadroom } from "@mantine/hooks";
import Link from "next/link";

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
        </Box>
      </Drawer>
    </>
  );
}
