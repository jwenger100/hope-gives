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

const mainLinks = [
  { link: "#", label: "Our Values" },
  { link: "#", label: "About Us" },
  { link: "#", label: "Contact" },
  { link: "#", label: "Blog" },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(-1);
  const isMobile = useMediaQuery("(max-width: 750px)");
  const pinned = useHeadroom({ fixedAt: 120 });

  const mainItems = mainLinks.map((item, index) => (
    <Anchor<"a">
      href={item.link}
      key={item.label}
      className={classes.mainLink}
      data-active={index === active && active !== -1 ? true : undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
      }}
    >
      {item.label}
    </Anchor>
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
        <header className={classes.header}>
          <Container className={classes.inner}>
            <Image
              src="/HopeGives-Full-Color.png"
              alt="Hope Gives"
              height={isMobile ? 40 : 50}
              width={isMobile ? 40 : 50}
            />
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
