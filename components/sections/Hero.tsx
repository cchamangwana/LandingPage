"use client";

import { useRouter } from "next/navigation";
import { Box, chakra, Flex, Text, Container, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Hero = () => {
  const router = useRouter();

  return (
    <Container maxW={"6xl"} mx={"auto"}>
      <Flex gap={12} h={500}>
        <Flex flex={1} justify="start" align="center">
          <Flex align="start" direction="column" gap={8}>
            <Text
              fontSize={{ base: 28, sm: 42, xl: 54 }}
              fontWeight="bold"
              lineHeight={1}
              letterSpacing={0}
              color="accent-1"
            >
              Welcome to
              <br />{" "}
              <chakra.span color="brand.default">
                Health Data Africa
              </chakra.span>
              <br />
            </Text>

            <Text fontSize="lg">
              Data Reimagined, Health Transformed: Unlocking Insights for a
              Better Tomorrow!
            </Text>

            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="black"
              variant="outline"
              onClick={() => router.push("/about")}
            >
              Read More
            </Button>
          </Flex>
        </Flex>

        <Flex
          display={{ base: "none", lg: "flex" }}
          flex={1}
          justify="start"
          align="center"
          borderRadius={6}
        >
          <Box
            bgImage="url('/images/hero.jpg')"
            bgRepeat="no-repeat"
            bgSize="contain"
            bgPos="right"
            h="full"
            w="full"
          />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Hero;
