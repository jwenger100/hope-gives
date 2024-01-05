"use client";
import {
  Title,
  SimpleGrid,
  Text,
  ThemeIcon,
  rem,
  Box,
  Overlay,
} from "@mantine/core";
import {
  IconPlant,
  IconGift,
  IconCrown,
  IconEmpathize,
  IconHandStop,
  IconGrowth,
} from "@tabler/icons-react";
import classes from "./FeaturesTitle.module.css";
import { Fade, Slide } from "react-awesome-reveal";

const features = [
  {
    icon: IconPlant,
    title: "Make a Difference",
    description:
      "A boy saw his grandfather saving sand dollars by tossing them into the sea. Why? asked the boy. The grandfather tossed another and said, 'To that one, it means everything.' We believe every act, big or small, creates an impact.",
  },
  {
    icon: IconEmpathize,
    title: "Do Good",
    description:
      "Jesus taught clearly we all need to be Good Samaritans (Luke 10). The Good Samaritan didn't walk past, he stopped, cared, and acted. Similarly, we are here to actively demonstrate kindness and compassion to those in need.",
  },
  {
    icon: IconCrown,
    title: "True Religion",
    description:
      "True followers of Jesus take care of the hurting, the broken, and the marginalized. They have a heart that responds to pain and suffering (James 1:27).",
  },
  {
    icon: IconGift,
    title: "Pay it forward",
    description:
      "Our blessings are not just for us. They are meant to be shared, multiplied, and used to bless others in an ever-continuing cycle of generosity.",
  },
  {
    icon: IconHandStop,
    title: "Helping Hands",
    description:
      "We strive to be a tangible expression of faith – the hands that extend in generosity and care. Just as hands are vital for action, our community collaboratively works, reaching out and helping in harmony.",
  },
  {
    icon: IconGrowth,
    title: "Growth",
    description:
      "At the heart of our mission is the belief that every individual has the potential to grow and flourish. By nurturing talents, providing resources, and creating opportunities for personal and communal development, we empower individuals to reach their full potential.",
  },
];

export function FeaturesTitle() {
  const items = features.map((feature, index) => (
    <Slide key={feature.title} direction={index % 2 === 0 ? "left" : "right"}>
      <Box key={feature.title} className={classes.item}>
        <ThemeIcon
          size={44}
          radius="md"
          variant="gradient"
          gradient={{
            deg: 133,
            from: "var(--hopegives-orange)",
            to: "var(--hopegives-yellow)",
          }}
        >
          <feature.icon
            style={{ width: rem(26), height: rem(26) }}
            stroke={1.5}
          />
        </ThemeIcon>
        <Text fz="lg" mt="sm" fw={500}>
          {feature.title}
        </Text>
        <Text fz="sm" className={classes.itemDescription}>
          {feature.description}
        </Text>
      </Box>
    </Slide>
  ));

  return (
    <Box
      className={classes.wrapper}
      style={{
        "--background-image-url": `url(${process.env.NEXT_PUBLIC_BASE_PATH}/happy-people.jpg)`,
      }}
      pl={{ sm: "none", md: "200px" }}
      pr={{ sm: "none", md: "200px" }}
    >
      <Fade>
        <Title
          className={classes.title}
          order={2}
          style={{ textAlign: "center" }}
          id="ourValues"
        >
          Our Values{" "}
        </Title>
      </Fade>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing={"xl"}>
        {items}
      </SimpleGrid>
    </Box>
  );
}
