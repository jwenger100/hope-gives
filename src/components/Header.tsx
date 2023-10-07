"use client";
import { useState } from "react";
import { Container, Anchor, Group, Burger, Box, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import { useMediaQuery } from "@mantine/hooks";

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
    <header className={classes.header}>
      <Container className={classes.inner}>
        <Image
          src="/HopeGives-Full-Color.png"
          alt="Hope Gives"
          height={isMobile ? 40 : 50}
          width={isMobile ? 40 : 50}
          radius="sm"
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
  );
}
