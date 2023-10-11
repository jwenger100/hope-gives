import {
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
} from "@mantine/core";
import classes from "./ArticlesCardsGrid.module.css";

const mockdata = [
  {
    title: "Empowering Women Entrepreneurs in South Africa",
    image:
      "https://images.unsplash.com/photo-1607748838605-ebcbe8f15772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2912&q=80",
    date: "August 18, 2022",
  },
  {
    title: "Clean Water Initiatives in Rural India",
    image:
      "https://images.unsplash.com/photo-1538300342682-cf57afb97285?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3174&q=80",
    date: "August 27, 2022",
  },
  {
    title: "Building Schools for Children in Nepal",
    image:
      "https://images.unsplash.com/photo-1495727034151-8fdc73e332a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2896&q=80",
    date: "September 9, 2022",
  },
  {
    title: "Providing Medical Assistance in Syrian Refugee Camps",
    image:
      "https://images.unsplash.com/photo-1578496479531-32e296d5c6e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3174&q=80",
    date: "September 12, 2022",
  },
];

export function ArticlesCardsGrid() {
  const cards = mockdata.map((article) => (
    <Card
      key={article.title}
      p="md"
      radius="md"
      component="a"
      href="#"
      className={classes.card}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </Container>
  );
}
