"use client";
import React from "react";
import {
  Center,
  Container,
  Paper,
  Text,
  Title,
  List,
  Button,
  Box,
} from "@mantine/core";
import classes from "./Nonprofits.module.css";

const Nonprofits = () => {
  return (
    <Box className={classes.outerWrapper}>
      <Paper
        style={{
          "--background-image-url": `url(${process.env.NEXT_PUBLIC_BASE_PATH}/Hands1.png)`,
        }}
        className={classes.nonprofitsWrapper}
      >
        <Container size="md" ta={{ base: "left", sm: "center" }}>
          <Title mt="xl" mb="md" style={{ color: "var(--hopegives-gray)" }}>
            For Nonprofits
          </Title>
          <List className={classes.nonprofitsList}>
            <List.Item>Get access to the donation you need.</List.Item>
            <List.Item>
              $9,237.55 is the average amount a Nonprofit Crowdfunding Campaign
              Raises.
            </List.Item>
            <List.Item>Tap into average donation sizes of $66.</List.Item>
            <List.Item>
              Raise 3X more if you update supporters every 5 days.
            </List.Item>
            <List.Item>
              Over half of people who receive an email about a crowdfunding
              campaign made a donation.
            </List.Item>
          </List>
          <Button
            radius="xl"
            size="md"
            mt="lg"
            className={`hopegives-button ${classes.nonProfitsButton}`}
          >
            Create a Fundraiser
          </Button>
        </Container>
      </Paper>
    </Box>
  );
};

export default Nonprofits;
