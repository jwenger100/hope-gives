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

const HowItWorksComponent = () => {
  return (
    <Container
      style={{
        boxShadow: "var(--mantine-shadow-lg)",
        borderRadius: "20px",
        border: "1.25px solid #dee2e6",
      }}
      pb={"md"}
      mb={"xl"}
      mt={"xl"}
    >
      {/* How it works */}
      <Card padding="lg" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <Title mt="lg" mb="xl" ta="center" c="var(--hopegives-gray)">
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
            <Title order={4} ta="center">
              Create a Fundraiser
            </Title>
            <Text ta="center">Set your goal</Text>
            <Text ta="center">Tell your story</Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 1 }}>
            <Box ta="center">
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
            <Title order={4} ta="center">
              Share with Others
            </Title>
            <Text ta="center">Send text messages</Text>
            <Text ta="center">Send emails</Text>
            <Text ta="center">Share on Social Media</Text>
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
            <Title order={4} ta="center">
              Manage Donations
            </Title>
            <Text ta="center">Collect funds</Text>
            <Text ta="center">Thank donors</Text>
          </Grid.Col>
        </Grid>
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
          Create a Fundraiser
        </Button>
      </Card>

      {/* For Donors section */}

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
            <Title order={4} ta="center">
              Find a Story{" "}
            </Title>
            <Text ta="center">Browse stories</Text>
            <Text ta="center">Donate to a cause</Text>
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
            <Title order={4} ta="center">
              Feel the impact
            </Title>
            <Text ta="center">Send prayers and messages</Text>
            <Text ta="center">Follow each donation dollar</Text>
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
            <Title order={4} ta="center">
              Get Rewards
            </Title>
            <Text ta="center">Counts as a charitable tax donation</Text>
            <Text ta="center">Receive credit card rewards</Text>
          </Grid.Col>
        </Grid>
        <Button
          ta="center"
          radius="xl"
          size="md"
          bg={"var(--hopegives-gray)"}
          style={{
            display: "block",
            width: "300px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "1rem",
          }}
        >
          Donate Now{" "}
        </Button>
      </Paper>
    </Container>
  );
};

export default HowItWorksComponent;
