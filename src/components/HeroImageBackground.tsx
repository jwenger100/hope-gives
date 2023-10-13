import cx from "clsx";
import { Title, Text, Container, Button, Overlay, Box } from "@mantine/core";
import classes from "./HeroImageBackground.module.css";

export function HeroImageBackground() {
  return (
    <Box className={classes.wrapper} style={{ 
      '--background-image-url': `url("${process.env.NEXT_PUBLIC_BASE_PATH}/donations.jpg")` 
    }} mt="60px">
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Providing Hope through social funding.
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Tired of not knowing if your giving is making a difference.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            radius="xl"
            size="md"
            className={`hopegives-button ${classes.fundraiserButton}`}
          >
            Start a Fundraiser
          </Button>
        </div>
      </div>
    </Box>
  );
}
