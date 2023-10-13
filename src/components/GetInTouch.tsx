"use client";
import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
} from "@mantine/core";
import { ContactIconsList } from "./ContactIcons";
import classes from "./GetInTouch.module.css";

export function GetInTouch() {
  return (
    // center later with fixed width
    <Paper radius="lg" display={"contents"} className={classes.flexCenter}>
      <div className={classes.wrapper}>
        <div
          className={classes.contacts}
          style={{ backgroundImage: `url(".${process.env.NEXT_PUBLIC_BASE_PATH && '/' + process.env.NEXT_PUBLIC_BASE_PATH}/bg.svg")` }}
        >
          <Text fz="lg" fw={700} className={classes.title} c="#fff">
            Contact information
          </Text>

          <ContactIconsList />
        </div>

        <form
          className={classes.form}
          onSubmit={(event) => event.preventDefault()}
        >
          <Text
            fz="lg"
            fw={700}
            className={classes.title}
            ta={{ xs: "left", md: "center" }}
            id="contact"
          >
            Get in touch
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput label="Your name" placeholder="Your name" />
              <TextInput
                label="Your email"
                placeholder="your@email.com"
                required
              />
            </SimpleGrid>

            <TextInput mt="md" label="Subject" placeholder="Subject" required />

            <Textarea
              mt="md"
              label="Your message"
              placeholder="Please include all relevant information"
              minRows={3}
            />

            <Group justify="flex-end" mt="md">
              <Button
                type="submit"
                className={`${classes.control} hopegives-button`}
              >
                Send message
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}
