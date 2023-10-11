import { ArticlesCardsGrid } from "@/components/ArticlesCardsGrid";
import { Box, Title, Container } from "@mantine/core";
import React from "react";

const Blog = () => {
  return (
    <Container mt="70px">
      <Box id="blog">
        <Title order={2}>Blog</Title>
        <ArticlesCardsGrid />
      </Box>
    </Container>
  );
};

export default Blog;
