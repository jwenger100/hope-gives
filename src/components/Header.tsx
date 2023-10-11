"use client";
import { useState } from "react";
import {
  Container,
  Anchor,
  Group,
  Burger,
  Box,
  Image,
  Portal,
  rem,
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

  const mainLinks = [
    { link: pathname === "/blog" ? "/" : "#ourValues", label: "Our Values" },
    { link: pathname === "/blog" ? "/" : "#aboutUs", label: "About Us" },
    { link: pathname === "/blog" ? "/" : "#contact", label: "Contact" },
    { link: pathname === "/" ? "/blog" : "/", label: "Blog" },
  ];

  const mainItems = mainLinks.map((item, index) => (
    <Link
      href={item.link}
      key={item.label}
      className={classes.mainLink}
      data-active={index === active && active !== -1 ? true : undefined}
      onClick={(event) => {
        setActive(index);
      }}
    >
      {item.label}
    </Link>
  ));

  return (
    <Portal>
      <Box
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: rem(60),
          zIndex: 1000000,
          transform: `translate3d(0, ${pinned ? 0 : rem(-110)}, 0)`,
          transition: "transform 400ms ease",
          backgroundColor: "var(--mantine-color-body)",
        }}
      >
        <header className={`${classes.header} ${classes.headerBlurIn}`}>
          <Container className={classes.inner}>
            <Link href="/" onClick={() => setActive(-1)}>
              <Image
                src="/HopeGives-Full-Color.png"
                alt="Hope Gives"
                height={isMobile ? 40 : 50}
                width={isMobile ? 40 : 50}
              />
            </Link>
            <Box className={classes.links} visibleFrom="sm">
              <Group gap={0} justify="flex-end" className={classes.mainLinks}>
                {mainItems}
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
      </Box>
    </Portal>
  );
}
