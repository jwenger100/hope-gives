"use client";
import { Title, SimpleGrid, Text, ThemeIcon, rem, Box } from "@mantine/core";
import {
  IconPlant,
  IconGift,
  IconCrown,
  IconEmpathize,
  IconHandStop,
} from "@tabler/icons-react";
import classes from "./FeaturesTitle.module.css";

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
      "The Good Samaritan didn't walk past, he stopped, cared, and acted. Similarly, we are here to actively demonstrate kindness and compassion to those in need.",
  },
  {
    icon: IconCrown,
    title: "True Religion",
    description:
      "True religion is not just about rituals but about taking care of the hurting, the broken, and the marginalized. It’s about having a heart that responds to pain and suffering.",
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
];

export function FeaturesTitle() {
  const items = features.map((feature) => (
    <div key={feature.title}>
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
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <Box className={classes.wrapper}>
      <Title
        className={classes.title}
        order={2}
        style={{ textAlign: "center" }}
        id="ourValues"
      >
        Our Values{" "}
      </Title>
      <SimpleGrid cols={{ base: 1, md: 2 }}>{items}</SimpleGrid>
    </Box>
  );
}
