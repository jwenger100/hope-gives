"use client";
import { Text, SimpleGrid, Container, Box, Title, Button } from "@mantine/core";
import {
  IconCoin,
  IconBuildingChurch,
  IconArrowBigUpFilled,
  IconUsersGroup,
} from "@tabler/icons-react";
import classes from "./ForChurchesBanner.module.css";
import Link from "next/link";
import { Fade, Zoom, Slide } from "react-awesome-reveal";

interface FeatureProps extends React.ComponentPropsWithoutRef<"div"> {
  icon: React.FC<any>;
  title: string;
  index: number;
}

function Feature({ icon: Icon, title, index }: FeatureProps) {
  const delay = index * 50; // 100ms delay between each feature
  return (
    <Slide cascade delay={delay}>
      <Box className={classes.feature}>
        <Icon className={classes.featureIcon} stroke={1.5} />
        <Text
          fw={700}
          fz={{ base: "sm", md: "lg" }}
          mb="xs"
          mt={5}
          className={classes.featureDescription}
        >
          {title}
        </Text>
      </Box>
    </Slide>
  );
}

const mockdata = [
  {
    icon: IconArrowBigUpFilled,
    title: "Increase mission and benevolent giving",
  },
  {
    icon: IconUsersGroup,
    title: "Leverage social crowdfunding",
  },
  {
    icon: IconCoin,
    title: "Empower your people to give",
  },
  {
    icon: IconBuildingChurch,
    title: "Bring hope to the world",
  },
];

export function ForChurchesBanner() {
  const items = mockdata.map((item, index) => (
    <Feature {...item} key={item.title} index={index} />
  ));

  return (
    <>
      <Box className={classes.wrapper} mt="60px" id="churches">
        <Fade cascade triggerOnce>
          <Box
            className={classes.backgroundImage}
            style={{
              "--background-image-url": `url(${process.env.NEXT_PUBLIC_BASE_PATH}/church-Interior.jpg)`,
            }}
          ></Box>
          <Container size={"md"} className={classes.container}>
            <Title className={classes.title}>For Churches</Title>
            <Text mb={"xl"} className={classes.text}>
              A new way to give
            </Text>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing={50}>
              {items}
            </SimpleGrid>
          </Container>
        </Fade>
        <Zoom>
          <Link href={"/waitlist"} className={`link-styling`}>
            <Button
              ta="center"
              radius="xl"
              size="md"
              className={`hopegives-button ${classes.centerBtn}`}
            >
              Start a Hope Campaign
            </Button>
          </Link>
        </Zoom>
      </Box>
    </>
  );
}
