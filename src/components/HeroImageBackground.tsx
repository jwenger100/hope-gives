import { Title, Text, Container, Button, Overlay, Box } from "@mantine/core";
import Link from "next/link";
import classes from "./HeroImageBackground.module.css";

export function HeroImageBackground() {
  // List of image URLs
  const images = [
    `${process.env.NEXT_PUBLIC_BASE_PATH}/donations.jpg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH}/donations1.jpg`,
    // fix position of image
    // `${process.env.NEXT_PUBLIC_BASE_PATH}/donations2.jpg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH}/donations3.jpg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH}/donations4.jpg`,
  ];

  // Function to select a random image URL from the list
  const getRandomImageUrl = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  return (
    <Box
      className={classes.wrapper}
      style={{
        "--background-image-url": `url("${getRandomImageUrl()}")`,
      }}
      mt="60px"
    >
      <Overlay color="#ffc200" opacity={0.4} zIndex={1} />

      <Box className={classes.inner}>
        <Title className={classes.title} ta={"center"}>
          Hope through social fundraising
        </Title>
        <Text className={classes.description} ta={"center"}>
          Tired of not knowing if your giving is making a difference.
        </Text>

        {/* <Container size={640}>
          <Text size="lg" className={classes.description}>
            Tired of not knowing if your giving is making a difference.
          </Text>
        </Container> */}

        <Box className={classes.controls}>
          <Link href={"/waitlist"}>
            <Button
              radius="xl"
              size="md"
              className={`hopegives-button ${classes.fundraiserButton}`}
            >
              Create a Fundraiser
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
