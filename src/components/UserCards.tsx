"use client";
import { Avatar, Text, Paper, Grid, Title, Box } from "@mantine/core";
import classes from "./UserCards.module.css";

interface User {
  image: string;
  name: string;
  position: string;
  description: string;
}

const users = [
  {
    image: "https://pastorstays.com/frontend/img/founder-small-image.png",
    name: "Troy and Jana Jones",
    position: "CEO & Co-Founders",
    description:
      "A key influencer with pastors worldwide. Troy leads New Life Church with multiple campuses. He also founded The Recalibrate Group, assisting pastors in mission and vision restructuring. Troy guides the company's strategy and connects with faith-based groups to bring more campaigns under HopeGives.",
  },
  {
    image: "https://pastorstays.com/frontend/img/stan.png",
    name: "Stan Russell",
    position: "CDO - Co-Founder",
    description:
      "Stan oversees a growing church in Portland, Oregon with a full elementary, Junior and High School. Stan has been instrumental in laying the fiscal groundwork for HopeGives. Responsible for all investor relations within HopeGives.",
  },
  {
    image: "https://pastorstays.com/frontend/img/campell.png",
    name: "Randy Campbell",
    position: "CFO",
    description:
      "Since 1983, Randy has served churches in Oregon and Idaho. He has been an Executive Pastor for over 30 years functioning in COO and CFO roles. Manages the company's finances, including financial planning, forecasts, accounting oversight, reporting risk management, insurance and Human Resources.",
  },
  {
    image: "https://pastorstays.com/frontend/img/brandon.png",
    name: "Brandon Beeson",
    position: "COO",
    description:
      "2 years experience overseeing operations for an Amazon Distribution partner. Over 4 years in Fintech on the Tax team for Stripe. Responsible for overseeing the company's ongoing operations and procedures. Manages company operations, ensuring smooth day-to-day processes, and consistent quality of service.",
  },
];

export function UserCards() {
  const tiles = users.map((user: User) => (
    <Grid.Col key={user.name} span={{ base: 12, md: 6, lg: 3 }}>
      <Paper
        radius="md"
        withBorder
        p="lg"
        bg="var(--mantine-color-body)"
        h="100%"
        className={classes.card}
      >
        <Avatar src={user.image} size={120} radius={120} mx="auto" />
        <Text ta="center" fz="lg" fw={500} mt="md">
          {user.name}
        </Text>
        <Text ta="center" c="dimmed" fz="sm">
          {user.position}
        </Text>
        <Text ta="center" c="dimmed" fz="sm">
          {user.description}
        </Text>
      </Paper>
    </Grid.Col>
  ));

  return (
    <>
      <Box
        w={{ xs: 600, sm: 600, lg: 700 }}
        py={{ base: "xs", sm: "md", lg: "xl" }}
        ta="center"
        mx="auto"
        mb="ms"
      >
        <Title order={2} style={{ textAlign: "center" }} mb="sm" id="aboutUs">
          Meet the Team
        </Title>
        <Text ta="center" c="dimmed" fz="sm">
          HopeGives is a crowdfunding platform founded on{" "}
          <u>accountability, authenticity</u> and <u>audacious hope,</u> serving
          as a beacon for social fundraising. We strive to unlock the potential
          of the faith community and compassionate givers, enhancing donor trust
          while ensuring every donation meets its intended purpose.
        </Text>
        <Text ta="center" c="dimmed" fz="sm">
          We take pride in delivering funds to beneficiaries up to 10 times
          faster than our competitors, providing timely assistance in critical
          moments.
        </Text>
      </Box>
      <Grid gutter="xl" mb="xl">
        {tiles}
      </Grid>
    </>
  );
}
