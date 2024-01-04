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
  Overlay,
} from "@mantine/core";
import classes from "./waitlist.module.css";
import { useForm } from "@mantine/form";

const Waitlist = () => {
  const form = useForm({
    initialValues: {
      email: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
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
        {/* <Overlay color="#ffc200" opacity={0.4} zIndex={1} /> */}

        <Container size="xs" p="md">
          <Paper p="xl" withBorder shadow="md" className={classes.container}>
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

            <form onSubmit={form.onSubmit((values) => console.log(values))}>
              <TextInput
                placeholder="First name"
                label="First name"
                required
                style={{ marginBottom: "1em" }}
              />
              <TextInput
                placeholder="Last Name"
                label="Last name"
                required
                style={{ marginBottom: "1em" }}
              />
              <TextInput
                withAsterisk
                label="Email"
                placeholder="your@email.com"
                {...form.getInputProps("email")}
                style={{ marginBottom: "1em" }}
              />
              <TextInput
                placeholder="Phone Number"
                label="Phone Number"
                required
                style={{ marginBottom: "1em" }}
              />
              <Select
                label="Are you a"
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
        </Container>
      </Box>
    </Container>
  );
};

export default Waitlist;
