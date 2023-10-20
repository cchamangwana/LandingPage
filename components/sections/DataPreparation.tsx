import {
  chakra,
  Flex,
  Image,
  Text,
  Container,
  Heading,
} from "@chakra-ui/react";

const DataPreparation = () => {
  return (
    <Container maxW={"6xl"}>
      <Flex direction={{ base: "column-reverse", lg: "row" }} gap={12}>
        <Flex flex={1}>
          <Flex direction="column" gap={3}>
            <Heading color={"white"} as={"h2"}>
              Data Cleaning & Coding
            </Heading>

            <Text color="white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem quidem architecto aspernatur porro corporis dolorem
              quam, dolorum dolores nisi unde doloremque quo adipisci deleniti
              saepe inventore labore similique.
            </Text>

            <Text color="white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem quidem architecto aspernatur porro corporis dolorem
              quam, dolorum dolores nisi unde doloremque quo adipisci deleniti
              saepe inventore labore similique.
            </Text>
          </Flex>
        </Flex>

        <Flex flex={1}>
          <Image
            borderRadius={6}
            alt="data-preparation"
            src="/images/hero.jpg"
          />
        </Flex>
      </Flex>
    </Container>
  );
};

export default DataPreparation;
