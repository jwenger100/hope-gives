"use client";
import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  rem,
} from "@mantine/core";
import { IconHeartHandshake } from "@tabler/icons-react";
import classes from "./HeroBullets.module.css";

export function HeroBullets() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          {/* <Title className={classes.title}>
            A <span className={classes.highlight}>modern</span> React <br />{" "}
            components library
          </Title> */}
          <Title className={classes.title}>HopeGives</Title>
          <Text c="dimmed" mt="md">
            Discover the true impact of your contributions with us. Through
            transparent tracking, you can witness the journey of every dollar
            you give. Dive deeper into authentic stories, hearing firsthand
            testimonies that inspire and connect us all. Above all, join us in
            championing audacious hope, as we believe in the tremendous power of
            collective effort and the limitless potential when faith is put into
            action.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <IconHeartHandshake
                size={48}
                strokeWidth={2}
                color={"var(--hopegives-yellow)"}
              />
            }
          >
            <List.Item>
              <b className="var(--hopegives-gray)">Accountability</b> &ndash;
              Track your giving and witness the growth and utilization of your
              contributions.
            </List.Item>
            <List.Item>
              <b className="var(--hopegives-gray)">Authenticity</b> &ndash;
              Follow people's journeys, hear their testimonies, and connect on a
              personal level.
            </List.Item>
            <List.Item>
              <b className="var(--hopegives-gray)">Audacious Hope</b> &ndash;
              It's about fostering an audacious hope that believes in the power
              of collective effort and the boundless potential of faith in
              action.
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className="hg-button">
              Start a Fundraiser
            </Button>
          </Group>
        </div>
        <Image src="./Hero-Image1.jpg" className={classes.image} />
      </div>
    </Container>
  );
}
