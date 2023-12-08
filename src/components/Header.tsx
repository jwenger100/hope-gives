"use client";
import { useState } from "react";
import {
  Container,
  Group,
  Burger,
  Box,
  Image,
  Portal,
  rem,
  Drawer,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import { useMediaQuery } from "@mantine/hooks";
import { useHeadroom } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(-1);
  const isMobile = useMediaQuery("(max-width: 750px)");
  const pinned = useHeadroom({ fixedAt: 120 });
  const pathname = usePathname();

  // const mainLinks = [
  //   // { link: pathname === "/blog" ? "/" : "#ourValues", label: "Our Values" },
  //   { link: pathname === "/about" ? "/" : "/about", label: "About Us" },
  //   { link: pathname === "/blog" ? "/" : "/contact", label: "Contact" },
  //   // { link: pathname === "/" ? "/blog#blog" : "/blog", label: "Blog" },
  // ];

  const mainLinks = [
    { link: "/searchStories", label: "Search Stories" },
    { link: "/forNonprofit/Churches", label: "For Nonprofits/Churches" },
    { link: "/howItWorks", label: "How It Works" },
  ];

  const mainItems = mainLinks.map((item, index) => (
    <Link
      href={item.link}
      key={item.label}
      className={classes.mainLink}
      data-active={index === active && active !== -1 ? true : undefined}
      onClick={() => setActive(index)}
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
            />
          </Link>
          <Box className={classes.links} visibleFrom="sm">
            <Group gap={0} justify="flex-end" className={classes.mainLinks}>
              {mainItems}
              <Button
                radius="xl"
                size="xs"
                mb={"8px"}
                className={`hopegives-button`}
              >
                Create a Fundraiser
              </Button>
            </Group>
          </Box>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
            hiddenFrom="sm"
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
