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
} from "@mantine/core";
import classes from "./Nonprofits.module.css";

const Nonprofits = () => {
  return (
    <Paper
      style={{
        height: "500px", // Full height of the viewport
        background: `url("${process.env.NEXT_PUBLIC_BASE_PATH}/Hands1.png") no-repeat center center`,
        backgroundSize: "cover",
        backgroundColor: "#EBEBEB",
        width: "calc(100% + 32px)",
        marginLeft: "-16px",
        marginRight: "-16px",
        display: "flex",
        alignItems: "center",
      }}
      className={classes.nonprofitsWrapper}
    >
      <Container size="md">
        <Title mt="xl" style={{ color: "var(--hopegives-gray)" }}>
          For Nonprofits/Churches
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
  );
};

export default Nonprofits;
