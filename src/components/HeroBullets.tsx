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
import Typewriter from "typewriter-effect";

export function HeroBullets() {
  return (
    <Container size="md" className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            <span className={classes.titleHope}>hope</span>
            <span className={classes.titleGives}>gives</span>
          </Title>{" "}
          <Typewriter
            options={{
              strings: [
                "Gas",
                "Food",
                "Travel",
                "Emergency Relief",
                "Prayers",
                "Accountability",
                "Authenticity",
              ],
              autoStart: true,
              loop: true,
              wrapperClassName: classes.typewriterWrapper,
              cursorClassName: classes.typewriterCursor,
            }}
          />
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
            <List.Item className={classes.listItem}>
              <b className="var(--hopegives-gray)">Accountability</b> &ndash;
              Track your giving and witness the growth and utilization of your
              contributions.
            </List.Item>
            <List.Item className={classes.listItem}>
              <b className="var(--hopegives-gray)">Authenticity</b> &ndash;
              Follow people's journeys, hear their testimonies, and connect on a
              personal level.
            </List.Item>
            <List.Item className={classes.listItem}>
              <b className="var(--hopegives-gray)">Audacious Hope</b> &ndash;
              It's about fostering an audacious hope that believes in the power
              of collective effort and the boundless potential of faith in
              action.
            </List.Item>
          </List>
          <Group mt={30}>
            <Button
              radius="xl"
              size="md"
              className={`hopegives-button ${classes.fundraiserButton}`}
            >
              Start a Fundraiser
            </Button>
          </Group>
        </div>
        <Image src="./Hero-Image1.jpg" className={classes.image} radius="md" />
      </div>
    </Container>
  );
}
