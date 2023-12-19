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
  List,
  ThemeIcon,
  Paper,
  Title,
  Group,
} from "@mantine/core";
import {
  IconCheck,
  IconMessageCircle,
  IconShare,
  IconWand,
  IconCoin,
  IconSearch,
} from "@tabler/icons-react";

const HowItWorksComponent = () => {
  return (
    <Container
      style={{ boxShadow: "var(--mantine-shadow-lg)", borderRadius: "20px" }}
      pb={"md"}
      mb={"xl"}
    >
      <Card padding="lg" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <Title mt="lg" mb="xl" ta="center" c="var(--hopegives-gray)">
          How it Works
        </Title>
        <Grid justify="center" align="center">
          <Grid.Col
            span={{ base: 12, sm: 4 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            {/* Column content */}
            <div>
              <Group align="center">
                <ThemeIcon color="primary" variant="light">
                  <IconCheck size={18} />
                </ThemeIcon>
                <Text>1. Create a fundraiser</Text>
              </Group>
              <List size="sm" withPadding ml={"30px"}>
                <List.Item>Set your goal</List.Item>
                <List.Item>Tell your story</List.Item>
                <List.Item style={{ visibility: "hidden" }}></List.Item>
              </List>
            </div>
          </Grid.Col>
          <Grid.Col
            span={{ base: 12, sm: 4 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            {/* Column content */}
            <div>
              <Group align="center">
                <ThemeIcon color="primary" variant="light">
                  <IconShare size={18} />
                </ThemeIcon>
                <Text>2. Share with others</Text>
              </Group>
              <List size="sm" withPadding ml={"30px"}>
                <List.Item>Send text messages</List.Item>
                <List.Item>Send emails</List.Item>
                <List.Item>Share on social media</List.Item>
              </List>
            </div>
          </Grid.Col>
          <Grid.Col
            span={{ base: 12, sm: 4 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            {/* Column content */}
            <div>
              <Group align="center">
                <ThemeIcon color="primary" variant="light">
                  <IconWand size={18} />
                </ThemeIcon>
                <Text>3. Manage Donations</Text>
              </Group>
              <List size="sm" withPadding ml={"30px"}>
                <List.Item>Collect funds</List.Item>
                <List.Item>Thank donors</List.Item>
                <List.Item style={{ visibility: "hidden" }}></List.Item>
              </List>
            </div>
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
        <Grid justify="center" align="center">
          <Grid.Col
            span={{ base: 12, sm: 4 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            {/* Column content */}
            <div>
              <Group align="center">
                <ThemeIcon color="primary" variant="light">
                  <IconSearch size={18} />
                </ThemeIcon>
                <Text>1. Find a story</Text>
              </Group>
              <List size="sm" withPadding ml={"30px"}>
                <List.Item>Browse Stories</List.Item>
                <List.Item>Donate to a cause</List.Item>
                <List.Item style={{ visibility: "hidden" }}></List.Item>
              </List>
            </div>
          </Grid.Col>
          <Grid.Col
            span={{ base: 12, sm: 4 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            {/* Column content */}
            <div>
              <Group align="center">
                <ThemeIcon color="primary" variant="light">
                  <IconMessageCircle size={18} />
                </ThemeIcon>
                <Text>2. Feel the Impact</Text>
              </Group>
              <List size="sm" withPadding ml={"30px"}>
                <List.Item>Send prayers and messages</List.Item>
                <List.Item>Follow each donation dollar</List.Item>
                <List.Item style={{ visibility: "hidden" }}></List.Item>
              </List>
            </div>
          </Grid.Col>
          <Grid.Col
            span={{ base: 12, sm: 4 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            {/* Column content */}
            <div>
              <Group align="center">
                <ThemeIcon color="primary" variant="light">
                  <IconCoin size={18} />
                </ThemeIcon>
                <Text>3. Get Rewards</Text>
              </Group>
              <List size="sm" withPadding ml={"30px"}>
                <List.Item>Counts as a charitable tax donation</List.Item>
                <List.Item>Receive credit card rewards</List.Item>
                <List.Item style={{ visibility: "hidden" }}></List.Item>
              </List>
            </div>
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
