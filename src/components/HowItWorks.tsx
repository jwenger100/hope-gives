// HowItWorksComponent.jsx
"use client";
import React from "react";
import classes from "./HowItWorks.module.css"; // Import the CSS file
import {
  Container,
  Grid,
  Card,
  Text,
  Button,
  Paper,
  Title,
  Box,
  Image,
} from "@mantine/core";
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";

const HowItWorksComponent = () => {
  return (
    <Container
      style={{
        boxShadow: "var(--mantine-shadow-lg)",
        borderRadius: "20px",
        border: "1.25px solid #dee2e6",
        minHeight: "100vh",
      }}
      pb={"md"}
      mb={"xl"}
      mt={"xl"}
      id="howItWorks"
    >
      {/* How it works section with Fade effect */}
      <Fade delay={500}>
        <Card padding="lg" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <Title mt="sm" mb="xl" ta="center" c="var(--hopegives-gray)">
            How it Works
          </Title>
          <Grid>
            <Grid.Col span={{ base: 12, md: 1 }}>
              <Box ta="center">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/expectation.svg`}
                  width={48}
                  height={60}
                  alt="expectation"
                  style={{
                    objectFit: "unset",
                  }}
                />
              </Box>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 3 }}>
              <Title order={4} ta={{ base: "center", md: "left" }}>
                Start a Hope Campaign
              </Title>
              <Text ta={{ base: "center", md: "left" }}>Set your goal</Text>
              <Text ta={{ base: "center", md: "left" }}>Tell your story</Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 1 }}>
              <Box ta={{ base: "center", md: "left" }}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/megaphone.svg`}
                  width={48}
                  height={60}
                  alt="megaphone"
                  style={{
                    objectFit: "unset",
                  }}
                />
              </Box>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 3 }}>
              <Title order={4} ta={{ base: "center", md: "left" }}>
                Share with Others
              </Title>
              <Text ta={{ base: "center", md: "left" }}>
                Send text messages
              </Text>
              <Text ta={{ base: "center", md: "left" }}>Send emails</Text>
              <Text ta={{ base: "center", md: "left" }}>
                Share on Social Media
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 1 }}>
              <Box ta="center">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/monitor.svg`}
                  width={48}
                  height={60}
                  alt="megaphone"
                  style={{
                    objectFit: "unset",
                  }}
                />
              </Box>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 3 }}>
              <Title order={4} ta={{ base: "center", md: "left" }}>
                Manage Donations
              </Title>
              <Text ta={{ base: "center", md: "left" }}>Collect funds</Text>
              <Text ta={{ base: "center", md: "left" }}>Thank donors</Text>
            </Grid.Col>
          </Grid>
          <Link href={"/waitlist"} className={`link-styling`}>
            <Button
              ta="center"
              radius="xl"
              size="md"
              className={`hopegives-button`}
              style={{
                display: "block",
                width: "300px",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "1rem",
              }}
            >
              Start a Hope Campaign
            </Button>
          </Link>
        </Card>
      </Fade>

      {/* For Donors section with slide effect */}
      <Slide direction="right">
        <Paper
          withBorder
          shadow="sm"
          radius="md"
          p="lg"
          style={{
            backgroundColor: "#FFD700",
            marginTop: "2rem",
            borderRadius: "20px",
          }}
        >
          <Title mb="xl" mt="lg" ta="center" c="var(--hopegives-gray)">
            For Donors
          </Title>
          <Grid>
            <Grid.Col span={{ base: 12, md: 1 }}>
              <Box ta="center">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/search.svg`}
                  width={48}
                  height={60}
                  alt="search"
                  style={{
                    objectFit: "unset",
                  }}
                />
              </Box>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 3 }}>
              <Title order={4} ta={{ base: "center", md: "left" }}>
                Find a Story{" "}
              </Title>
              <Text ta={{ base: "center", md: "left" }}>Browse stories</Text>
              <Text ta={{ base: "center", md: "left" }}>Donate to a cause</Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 1 }}>
              <Box ta="center">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/solidarity.svg`}
                  width={48}
                  height={60}
                  alt="solidarity"
                  style={{
                    objectFit: "unset",
                  }}
                />
              </Box>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 3 }}>
              <Title order={4} ta={{ base: "center", md: "left" }}>
                Feel the impact
              </Title>
              <Text ta={{ base: "center", md: "left" }}>
                Send prayers and messages
              </Text>
              <Text ta={{ base: "center", md: "left" }}>
                Follow each donation dollar
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 1 }}>
              <Box ta="center">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/rating.svg`}
                  width={48}
                  height={60}
                  alt="rating"
                  style={{
                    objectFit: "unset",
                  }}
                />
              </Box>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 3 }}>
              <Title order={4} ta={{ base: "center", md: "left" }}>
                Get tax deduction/points
              </Title>
              <Text ta={{ base: "center", md: "left" }}>
                Counts as a charitable tax donation
              </Text>
              <Text ta={{ base: "center", md: "left" }}>
                Receive credit card rewards
              </Text>
            </Grid.Col>
          </Grid>
          <Link href={"/waitlist"} className={`link-styling`}>
            <Button
              ta="center"
              radius="xl"
              size="md"
              className={classes.donorBtn}
            >
              Give to a Hope Campaign
            </Button>
          </Link>
        </Paper>
      </Slide>
    </Container>
  );
};

export default HowItWorksComponent;
