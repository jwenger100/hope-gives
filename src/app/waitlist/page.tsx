"use client";
import React, { useEffect } from "react";
import {
  Container,
  Box,
  Paper,
  Title,
  TextInput,
  Select,
  Button,
  Image,
} from "@mantine/core";
import classes from "./waitlist.module.css";

const Waitlist = () => {
  // scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container fluid>
      <Box
        className={classes.wrapper}
        style={{
          "--background-image-url": `url(${process.env.NEXT_PUBLIC_BASE_PATH}/waitlist-image.png)`,
        }}
        mt="60px"
      >
        <Container>
          <Box display={"flex"}>
            <Paper
              p="xl"
              withBorder
              shadow="md"
              className={classes.formContainer}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/HopeGives-full-color.png`}
                alt="waitlist image"
                fit="contain"
                height={100}
                width={100}
                style={{ margin: "0 auto" }}
              />
              <Box
                style={{
                  margin: "0 auto",
                  borderBottom: "1px solid #ffc200",
                  width: "150px",
                  marginBottom: "0.5em",
                  marginTop: "0.5em",
                }}
              ></Box>
              <Title
                order={4}
                ta="center"
                c={"var(--hopegives-gray)"}
                style={{ marginBottom: "1em" }}
              >
                Sign up for early access to the HopeGives App
              </Title>

              <form action="https://usebasin.com/f/2e82cbcbb72f" method="POST">
                <TextInput
                  placeholder="First name"
                  label="First name"
                  name="firstName"
                  required
                  style={{ marginBottom: "1em" }}
                />
                <TextInput
                  placeholder="Last Name"
                  label="Last name"
                  name="lastName"
                  required
                  style={{ marginBottom: "1em" }}
                />
                <TextInput
                  withAsterisk
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  style={{ marginBottom: "1em" }}
                />
                <TextInput
                  placeholder="Phone Number"
                  label="Phone Number"
                  name="phoneNumber"
                  required
                  style={{ marginBottom: "1em" }}
                />
                <Select
                  label="Are you a"
                  name="userType"
                  placeholder="Select"
                  data={["Donor", "Fundraiser"]} // Replace with actual options
                  required
                  style={{ marginBottom: "1em" }}
                />
                <Button
                  fullWidth
                  mt="md"
                  type="submit"
                  className={`hopegives-button ${classes.centerBtn}`}
                >
                  Join the waitlist
                </Button>
              </form>
            </Paper>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default Waitlist;
