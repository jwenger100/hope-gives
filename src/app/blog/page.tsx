import { ArticlesCardsGrid } from "@/components/ArticlesCardsGrid";
import { Box, Title, Container } from "@mantine/core";
import React from "react";

const Blog = () => {
  return (
    <Container mt="100px" id="blog">
      <Box>
        <Title order={2}>Blog</Title>
        <ArticlesCardsGrid />
      </Box>
    </Container>
  );
};

export default Blog;
