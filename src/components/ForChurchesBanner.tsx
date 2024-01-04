"use client";
import { Text, SimpleGrid, Container, rem, Box, Title } from "@mantine/core";
import {
  IconCoin,
  IconBuildingChurch,
  IconArrowBigUpFilled,
  IconUsersGroup,
} from "@tabler/icons-react";
import classes from "./ForChurchesBanner.module.css";

interface FeatureProps extends React.ComponentPropsWithoutRef<"div"> {
  icon: React.FC<any>;
  title: string;
}

function Feature({ icon: Icon, title, className, ...others }: FeatureProps) {
  return (
    <div className={classes.feature} {...others}>
      <div className={classes.overlay} />
      <div className={classes.content}>
        <Icon
          style={{ width: rem(38), height: rem(38) }}
          className={classes.icon}
          stroke={1.5}
        />
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
      </div>
    </div>
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
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <>
      <Box className={classes.backgroundImageWrapper} mt="60px" id="churches">
        <Box
          className={classes.backgroundImage}
          style={{
            "--background-image-url": `url(${process.env.NEXT_PUBLIC_BASE_PATH}/church-Interior.jpg)`,
          }}
        ></Box>
        <Container size={"md"} className={classes.container}>
          <Box className={classes.inner}>
            <Title className={classes.title}>For Churches</Title>
            <Text mb={"xl"} className={classes.text}>
              A new way to give
            </Text>
          </Box>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={50}>
            {items}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
