"use client";
import React, { useEffect } from "react";
import { GetInTouch } from "@/components/GetInTouch";
import { Container } from "@mantine/core";

const Contact = () => {
  // scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container fluid mt="100px">
      <GetInTouch />
    </Container>
  );
};

export default Contact;
