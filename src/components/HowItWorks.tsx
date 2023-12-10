// HowItWorksComponent.jsx
"use client";
import React from "react";
import { Grid, Box, Card, Text, Button, Title, Avatar } from "@mantine/core";
import classes from "./HowItWorks.module.css"; // Import the CSS file
import { IconCircle1Filled } from "@tabler/icons-react";

const HowItWorksComponent = () => {
  return (
    <Box>
      <Title mt="xl" ta="center" style={{ color: "var(--hopegives-gray)" }}>
        How It Works?{" "}
      </Title>
      <Grid gutter="xl">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card
            withBorder
            shadow="sm"
            p="lg"
            className={classes.howItWorksCard}
          >
            <Title size="h2" mb="lg" className={classes.howItWorksTitle}>
              Have a need?
            </Title>
            <Button
              radius="xl"
              size="xs"
              mb="xl"
              className={classes.howItWorksStep}
              leftSection={
                <Avatar
                  color="indigo"
                  variant="filled"
                  size={36}
                  style={{ marginLeft: "-131px", marginBottom: "35px" }}
                >
                  1
                </Avatar>
              }
            >
              Sign up
            </Button>
            <Button
              radius="xl"
              size="xs"
              mb="xl"
              className={classes.howItWorksStep}
              leftSection={
                <Avatar
                  color="indigo"
                  variant="filled"
                  size={36}
                  style={{ marginLeft: "-101px", marginBottom: "35px" }}
                >
                  2
                </Avatar>
              }
            >
              {" "}
              Tell your story
            </Button>
            <Button
              radius="xl"
              size="xs"
              mb="xl"
              className={classes.howItWorksStep}
              leftSection={
                <Avatar
                  color="indigo"
                  variant="filled"
                  size={36}
                  style={{ marginLeft: "-88px", marginBottom: "35px" }}
                >
                  3
                </Avatar>
              }
            >
              Share with others
            </Button>
            <Button
              ta="center"
              radius="xl"
              size="md"
              className={`hopegives-button ${classes.howItWorksLastButton}`}
              w={250}
            >
              Create a Fundraiser
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card
            shadow="sm"
            p="lg"
            withBorder
            className={classes.howItWorksCard}
          >
            <Title size="h2" mb="lg" className={classes.howItWorksTitle}>
              Make a donation
            </Title>
            <Button
              radius="xl"
              size="xs"
              mb="xl"
              className={classes.howItWorksStep}
              leftSection={
                <Avatar
                  color="indigo"
                  variant="filled"
                  size={36}
                  style={{ marginLeft: "-61px", marginBottom: "35px" }}
                >
                  1
                </Avatar>
              }
            >
              Find a story and donate
            </Button>
            <Button
              radius="xl"
              size="xs"
              mb="xl"
              className={classes.howItWorksStep}
              leftSection={
                <Avatar
                  color="indigo"
                  variant="filled"
                  size={36}
                  style={{ marginLeft: "-7px", marginBottom: "35px" }}
                >
                  2
                </Avatar>
              }
            >
              {" "}
              Feel the impact of your donation
            </Button>
            <Button
              radius="xl"
              size="xs"
              mb="xl"
              className={classes.howItWorksStep}
              leftSection={
                <Avatar
                  color="indigo"
                  variant="filled"
                  size={36}
                  style={{ marginLeft: "-3px", marginBottom: "35px" }}
                >
                  3
                </Avatar>
              }
            >
              Counts as charitable tax donation
            </Button>
            <Button
              ta="center"
              radius="xl"
              size="md"
              className={`hopegives-button ${classes.howItWorksLastButton}`}
              w={250}
            >
              Donate Now{" "}
            </Button>
          </Card>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default HowItWorksComponent;
