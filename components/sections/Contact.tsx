"use client";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Contact() {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} width={800}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Get in Touch</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Compose your message
          </Text>
        </Stack>
        <Box
          rounded={"md"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Your Email Address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="message">
              <FormLabel>Your Message</FormLabel>
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                resize="none"
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={"black"}
                color={"white"}
                _hover={{
                  bg: "black",
                }}
              >
                Send Message
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
