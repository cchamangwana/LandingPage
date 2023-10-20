import {
  chakra,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

const Infodemy = () => {
  return (
    <Container maxW={"6xl"}>
      <Flex direction={{ base: "column-reverse", lg: "row" }} gap={12}>
        <Flex flex={1}>
          <Image borderRadius={6} alt="cataloguing" src="/images/hero.jpg" />
        </Flex>
        <Flex flex={1}>
          <Flex direction="column" gap={3}>
            <Heading color={"white"} as={"h2"}>
              Infodemy
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
      </Flex>
    </Container>
  );
};

export default Infodemy;