import NextHead from "next/head";
import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Card from "../Card";

interface Blogs {
  _id: number;
  title: string;
  content: string;
  image: string;
  created: string;
}

interface Posts {
  blogs: Blogs[];
}

export default function Blogs({ blogs }: Posts) {
  return (
    <Container maxW={"6xl"} py={30}>
      <Heading as={"h2"} textAlign="center" mb={30}>
        Our Top Stories
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={3}>
        {blogs.map((blog) => (
          <Card p={0} key={blog._id}>
            <NextLink href={`/blogs/${blog._id}`} passHref>
              <Box
                bg="canvas-1"
                bgImage={blog.image}
                bgSize="cover"
                bgPos="top"
                position="relative"
                h={{ base: 200, xl: 164 }}
                w="full"
              />
            </NextLink>

            <Flex direction="column" gap={6} p={6}>
              <Flex direction="column" gap={3}>
                <Text
                  fontSize="lg"
                  fontWeight="semibold"
                  color="accent-1"
                  noOfLines={1}
                >
                  {blog.title}
                </Text>

                <Text noOfLines={5}>{blog.content}</Text>

                <Text textAlign="right" fontSize="xs">
                  {blog.created}
                </Text>
              </Flex>
            </Flex>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
