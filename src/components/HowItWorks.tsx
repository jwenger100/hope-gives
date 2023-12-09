// HowItWorksComponent.jsx
"use client";
import React from "react";
import { Grid, Box, Card, Text, Button } from "@mantine/core";
import classes from "./HowItWorks.module.css"; // Import the CSS file

const HowItWorksComponent = () => {
  return (
    <Box className="how-it-works-container">
      <Grid gutter="xl" grow>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card shadow="sm" p="lg" className="how-it-works-card">
            {/* weight={500} */}
            <Text size="lg" mb="md" className="how-it-works-title">
              Have a need?
            </Text>
            <Text mb="xs" className="how-it-works-step">
              1. Sign up
            </Text>
            <Text mb="xs" className="how-it-works-step">
              2. Tell your story
            </Text>
            <Text mb="xs" className="how-it-works-step">
              3. Share with others
            </Text>
            <Button className="how-it-works-button-create">
              Create a Fundraiser
            </Button>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card shadow="sm" p="lg" className="how-it-works-card">
            {/* weight={500} */}
            <Text size="lg" mb="md" className="how-it-works-title">
              Make a donation
            </Text>
            <Text mb="xs" className="how-it-works-step">
              1. Find a story and Donate
            </Text>
            <Text mb="xs" className="how-it-works-step">
              2. Feel the impact of your donation
            </Text>
            <Text mb="xs" className="how-it-works-step">
              3. Counts as charitable tax donation
            </Text>
            <Button className="how-it-works-button-donate">Donate Now</Button>
          </Card>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default HowItWorksComponent;
