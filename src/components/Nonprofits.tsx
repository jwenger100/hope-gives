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
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";

const Nonprofits = () => {
  return (
    <Box className={classes.outerWrapper} id="nonprofits">
      <Fade>
        <Paper
          style={{
            "--background-image-url": `url(${process.env.NEXT_PUBLIC_BASE_PATH}/Hands1.png)`,
          }}
          className={classes.nonprofitsWrapper}
        >
          <Container size="md" ta={{ base: "left", sm: "center" }}>
            <Slide direction="down">
              <Title mt="xl" mb="md" style={{ color: "var(--hopegives-gray)" }}>
                For Nonprofits
              </Title>
            </Slide>
            <Slide direction="up">
              <List className={classes.nonprofitsList}>
                <List.Item>Get access to the donation you need.</List.Item>
                <List.Item>
                  $9,237.55 is the average amount a Nonprofit Crowdfunding
                  Campaign Raises.
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
            </Slide>

            <Link href={"/waitlist"} className={`link-styling`}>
              <Slide direction="up">
                <Button
                  radius="xl"
                  size="md"
                  mt="lg"
                  className={`hopegives-button ${classes.nonProfitsButton}`}
                >
                  Start a Hope Campaign
                </Button>
              </Slide>
            </Link>
          </Container>
        </Paper>
      </Fade>
    </Box>
  );
};

export default Nonprofits;
