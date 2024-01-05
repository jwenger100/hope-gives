"use client";
import { Container, Title, Text, Card, Image, Box, Grid } from "@mantine/core";
import React from "react";
import classes from "./about.module.css";

const About = () => {
  return (
    <Container fluid mt="60px" style={{ minHeight: "-webkit-fill-available" }}>
      <Title
        className={classes.titleAnimation}
        order={2}
        pt="md"
        mb="xl"
        ta="center"
        c={"var(--hopegives-gray)"}
      >
        About{" "}
        <Text className={classes.hopeGivesText}>
          Hope<span>Gives</span>&nbsp;
        </Text>
      </Title>
      <Card padding="lg" className={classes.aboutContainer}>
        <Grid>
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/jones.jpg`}
              alt="Troy Jones"
              fit="contain"
              radius="md"
              className={classes.imageAnimation}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 9 }}>
            <Box className={classes.textAnimation}>
              <Text fw={500} size="lg" style={{ marginBottom: 10 }}>
                The story of Troy Jones and the founding of HopeGives is a
                powerful tale of transformation and commitment to helping
                others. Troy's journey began in a challenging environment,
                marked by a broken family and dysfunction. Despite these early
                hardships, a significant turning point occurred at the age of
                13, when a church paid his way to a Bible camp, an experience
                that changed his life. It was there that Troy surrendered his
                life to Christ and a sense of audacious hope for his life.  A
                missionary took Troy under his wing and mentored him into a man
                of God.{" "}
              </Text>
              <Text size="sm" style={{ marginBottom: 10 }}>
                A pivotal moment came when Troy was 16 years old, during an
                altar call on a Sunday night. He felt God's voice telling him
                that he would play a crucial role in enabling people to give to
                the needs of the world. That same generosity he once received at
                Bible camp, the difference made in his life by a missionary, now
                inspired him to pass on this hope to others.
              </Text>
              <Text size="sm" style={{ marginBottom: 10 }}>
                Fast forward over four decades, and Troy is now pastoring the
                very church who paid his way to Bible camp.  His mission is to
                help the faith community to be good Samaritans and not just
                church going folks.  This means people must give to people.  
                Inspired by his faith and the needs he sees in the world, he
                launches HopeGives, a platform dedicated to fostering audacious
                hope to the world  through social funding.  {" "}
              </Text>
              <Text size="sm" style={{ marginBottom: 10 }}>
                HopeGives aims to send millions of students to Bible camp,
                support thousands of missionaries, and meet the everyday needs
                of people. Our goal is ambitious: to raise annually 1 Billion
                dollars to significantly impact people's lives through social
                funding.
              </Text>
              <Text size="sm" style={{ marginBottom: 10 }}>
                HopeGives represents a departure from traditional methods of
                giving within the church and faith community.  We believe that
                social funding presents an unprecedented opportunity to mobilize
                people to act as Christ in a real and tangible way, bringing
                hope to those in need. This new approach to giving is about more
                than financial contributions; it's about igniting a movement of
                audacious hope.
              </Text>
            </Box>
          </Grid.Col>
        </Grid>
      </Card>
    </Container>
  );
};

export default About;
