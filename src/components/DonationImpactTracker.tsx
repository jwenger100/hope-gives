"use client";
import { Title, Text, Grid, Box, Button, Paper } from "@mantine/core";
import React from "react";
import { IconHeartHandshake } from "@tabler/icons-react";
import classes from "./DonationImpactTracker.module.css";
import Link from "next/link";
import { Fade, Zoom } from "react-awesome-reveal";

const DonationImpactTracker = () => {
  return (
    <>
      <Box className={classes.wrapper} id="whyTrustUs">
        <Fade>
          <Title mt="xl" ta="center">
            Why trust us?
          </Title>
          <Text ta="center">
            Have confidence with technology built on accountability
          </Text>
        </Fade>
        <Grid mt="xl">
          {/* Authentic Giving Column */}
          {/* Grid columns wrapped in Zoom for effect */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Zoom>
              <Paper className={classes.item}>
                <Box ta="center">
                  <IconHeartHandshake
                    size={48}
                    strokeWidth={2}
                    color={"var(--hopegives-yellow)"}
                  />
                </Box>
                <Title order={3} ta="center">
                  Accountable Giving
                </Title>
                <Text ta="center">
                  Track your giving and witness the impact of every donation.
                </Text>
              </Paper>
            </Zoom>
          </Grid.Col>{" "}
          {/* Delay for staggering effect */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Zoom delay={200}>
              <Paper className={classes.item}>
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
                  Follow people's journeys, hear their testimonies, and connect
                  on a personal level.
                </Text>
              </Paper>
            </Zoom>
          </Grid.Col>
          {/* Audacious Hope Column */} {/* Additional delay for next item */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Zoom delay={400}>
              <Paper className={classes.item}>
                <Box ta="center">
                  <IconHeartHandshake
                    size={48}
                    strokeWidth={2}
                    color={"var(--hopegives-yellow)"}
                  />
                </Box>
                <Title order={3} ta="center">
                  Audacious Hope
                </Title>
                <Text ta="center">
                  It's about fostering an audacious hope that believes in the
                  power of collective effort and the boundless potential of
                  faith in action.
                </Text>
              </Paper>
            </Zoom>
          </Grid.Col>
        </Grid>
        <Fade>
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
        </Fade>
      </Box>
    </>
  );
};

export default DonationImpactTracker;
