"use client";
import { Title, Text, Grid, Box, Button } from "@mantine/core";
import React from "react";
import { IconHeartHandshake } from "@tabler/icons-react";
import classes from "./DonationImpactTracker.module.css";

const DonationImpactTracker = () => {
  return (
    <>
      <Box className={classes.wrapper}>
        <Title mt="xl" ta="center">
          Why trust us?
        </Title>
        <Text ta="center">
          Have confidence with technology built on accountability
        </Text>
        <Grid mt="xl">
          {/* Authentic Giving Column */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Box ta="center">
              <IconHeartHandshake
                size={48}
                strokeWidth={2}
                color={"var(--hopegives-yellow)"}
              />
            </Box>
            <Title order={3} ta="center">
              Authentic Giving
            </Title>
            {/* <h1>Authentic Giving</h1> */}
            <Text ta="center">
              Track your giving and witness the impact of every donation.
            </Text>
          </Grid.Col>
          {/* Authentic Stories Column */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Box ta="center">
              <IconHeartHandshake
                size={48}
                strokeWidth={2}
                color={"var(--hopegives-yellow)"}
              />
            </Box>
            <Title order={3} ta="center">
              Authentic Stories
            </Title>
            <Text ta="center">
              Follow people's journeys, hear their testimonies, and connect on a
              personal level.
            </Text>
          </Grid.Col>
          {/* Audacious Hope Column */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Box ta="center">
              <IconHeartHandshake
                size={48}
                strokeWidth={2}
                color={"var(--hopegives-yellow)"}
              />
            </Box>
            <Title order={3} ta="center">
              Authentic Hope
            </Title>
            <Text ta="center">
              It's about fostering an audacious hope that believes in the power
              of collective effort and the boundless potential of faith in
              action.
            </Text>
          </Grid.Col>
        </Grid>
        <Button
          ta="center"
          radius="xl"
          size="md"
          className={`hopegives-button ${classes.centerBtn}`}
        >
          Create a Fundraiser
        </Button>
      </Box>
    </>
  );
};

export default DonationImpactTracker;
